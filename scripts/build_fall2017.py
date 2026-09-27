"""Rebuild Fall 2017 from the CBT workbook with the printed PDF as authority.

Every printed question page (physical PDF pages 4-31) was visually checked.
The PDF controls wording, table headers/units, figures, corrections, and sample
answers. Workbook data speeds transcription and checks the part point grid.
"""
import json
import re
from datetime import datetime
from pathlib import Path
from openpyxl import load_workbook
from pypdf import PdfReader
from build_spring2019 import displayed

ROOT=Path(__file__).resolve().parents[1]
PDF=ROOT/'past_exams/admissions_studytools_exam5_f17-5.pdf'
WORKBOOK=ROOT/'past_exams_excel/CBT_Exam_5_F.17_v01.xlsx'
OUTPUT=ROOT/'question_data/fall2017_questions.js'

CHAPTERS={
 1:['ratemaking-5'],2:['ratemaking-5','ratemaking-8'],3:['ratemaking-5'],
 4:['ratemaking-16'],5:['ratemaking-8','reserving-9'],6:['ratemaking-6'],
 7:['ratemaking-7'],8:['ratemaking-13'],9:['ratemaking-4','ratemaking-9'],
 10:['ratemaking-9'],11:['ratemaking-10'],12:['ratemaking-11'],
 13:['ratemaking-9'],14:['ratemaking-15'],15:['ratemaking-8','reserving-7','reserving-9'],
 16:['ratemaking-5','reserving-14'],17:['reserving-1'],18:['reserving-11'],
 19:['reserving-6','reserving-7'],20:['reserving-11','reserving-9'],
 21:['reserving-10'],22:['reserving-12'],23:['reserving-11'],
 24:['reserving-13'],25:['reserving-14'],26:['reserving-17'],
 27:['reserving-15'],28:['reserving-15'],
}
# (covered first row, covered last row, data rows, Excel columns, PDF title, complete PDF headings)
TABLES={
 1:[(5,8,range(6,9),[2,3,4],'',['Calendar Year','Average Earned Premium at Current Rate Level ($)','Average Written Premium at Current Rate Level ($)'])],
 2:[(5,8,range(6,9),[2,3],'',['Rate Change Effective Date','Overall Rate Change']),
    (10,12,range(11,13),[2,3,4],'',['Calendar Year','Earned Premium ($000)','Earned Premium ($000) at Current Rate Level'])],
 3:[(5,9,range(6,10),[2,3,4],'',['Policy','Effective Date','Annual Premium ($)'])],
 5:[(5,10,range(6,11),[2,3,4,5],'',['Accident Year','Earned Premium ($000)','Reported Loss ($000)','Cumulative Loss Development Factors'])],
 6:[(17,23,range(18,24),[2,3,4],'',['Ratio to SAWW','# Workers','Total Weekly Wages ($)'])],
 7:[(5,12,range(6,13),[2,3,4],'',['Expense or premium','($000)','% Fixed'])],
 9:[(18,20,range(19,21),[2,3],'',['Specialty','True Expected Cost ($)'])],
 10:[(5,8,range(6,9),[2,3,4,5],'',['Territory','True Relativity','Univariate Indicated Relativity','Loss & ALAE ($000)']),
     (10,14,range(12,15),[2,3,4,5],'Earned Exposures (000)',['Territory','Class A','Class B','Class C']),
     (16,17,[17],[2,3,4,5],'',['Class','A','B','C'])],
 12:[(5,10,range(6,11),[2,3,4],'',['Limit of Liability ($)','Current Increased Limits Factor','Indicated Increased Limits Factor'])],
 13:[(5,9,range(6,10),[2,3,4,5],'',['Territory','Current Premium ($000)','Current Territory Factor','Indicated Territory Factor'])],
 15:[(5,8,range(6,9),[2,3],'',['Accident Year','Cumulative Reported Loss & ALAE ($000)']),
     (5,8,range(6,9),[6,7],'',['Calendar Year','Earned Premium ($000)']),
     (10,12,[12],[2,3,4],'Selected Reported Loss & ALAE Age-to-Age Factors',['12–24','24–36','36–48'])],
 16:[(5,10,range(6,11),[2,3,4,5],'',['Policy Number','Policy Effective Date','Policy Term (months)','Gross Written Premium ($)']),
     (12,16,range(13,17),[2,3,4,5,6,7],'',['Claim Number','Accident Date','Claim Report Date','Gross Paid Claims ($)','Gross Case Reserves ($)','Reinsurance Recoveries ($)'])],
 18:[(5,12,range(7,13),[2,3,4,5,6,7,8],'Reported Claim Counts Excluding Claims Closed with No Payment as of (months)',['Accident Half-Year','6','12','18','24','30','36']),
     (14,21,range(16,22),[2,3,4,5,6,7,8],'Reported Severity ($) Excluding Claims Closed with No Payment as of (months)',['Accident Half-Year','6','12','18','24','30','36'])],
 19:[(5,10,range(7,11),[2,3,4,5,6],'Cumulative Reported Claims ($000) as of (months)',['Accident Year','12','24','36','48']),
     (12,17,range(14,18),[2,3,4,5,6],'Cumulative Paid Claims ($000) as of (months)',['Accident Year','12','24','36','48']),
     (19,21,range(20,22),[2,3],'',['Accident Year','Reported Claims Development Technique Ultimate Claims ($000)'])],
 20:[(6,10,range(7,11),[2,3,4,5,6],'',['Accident Year','Payroll ($000)','Reported Claims ($000)','Indicated Ultimate Claim Counts','Selected Ultimate Severity ($)'])],
 21:[(5,8,range(6,9),[2,3,4,5],'',['Accident Year','On-Level Earned Premium ($000)','Cumulative Reported Claims ($000)','Reported CDF to Ultimate'])],
 22:[(5,10,range(7,11),[2,3,4,5,6],'Industry Cumulative Reported Claims ($000) as of (months)',['Accident Year','12','24','36','48']),
     (12,17,range(14,18),[2,3,4,5,6],'Industry Case Outstanding ($000) as of (months)',['Accident Year','12','24','36','48']),
     (19,23,range(20,24),[2,3],'Self-Insured Company Case Outstanding ($000) as of December 31, 2016',['Accident Year','Case Outstanding'])],
 23:[(5,10,range(7,11),[2,3,4,5,6],'Incremental Closed Claim Counts as of (months)',['Accident Year','48','60','72','84']),
     (12,17,range(14,18),[2,3,4,5,6],'Incremental Paid Claims ($000) as of (months)',['Accident Year','48','60','72','84'])],
 24:[(5,10,range(7,11),[2,3,4,5,6],'Paid Claims ($000) as of (months)',['Accident Year','12','24','36','48']),
     (5,10,range(7,11),[8,9,10,11,12],'Reported Claims ($000) as of (months)',['Accident Year','12','24','36','48']),
     (12,17,range(14,18),[2,3,4,5,6],'Closed Claim Counts as of (months)',['Accident Year','12','24','36','48']),
     (12,17,range(14,18),[8,9,10,11,12],'Open Claim Counts as of (months)',['Accident Year','12','24','36','48']),
     (19,24,range(21,25),[2,3,4,5,6],'Paid Claims to Reported Claims Ratio as of (months)',['Accident Year','12','24','36','48']),
     (19,24,range(21,25),[8,9,10,11,12],'Closed to Reported Counts Ratio as of (months)',['Accident Year','12','24','36','48']),
     (26,31,range(28,32),[2,3,4,5,6],'Average Paid Claim Severity ($) as of (months)',['Accident Year','12','24','36','48']),
     (26,31,range(28,32),[8,9,10,11,12],'Average Case Outstanding ($) as of (months)',['Accident Year','12','24','36','48'])],
 25:[(5,10,range(7,11),[2,3,4,5,6],'Cumulative Gross Reported Claims ($000) as of (months)',['Accident Year','12','24','36','48']),
     (12,17,range(14,18),[2,3,4,5,6],'Cumulative Reported Claims ($000) Ceded to Excess of Loss Treaty as of (months)',['Accident Year','12','24','36','48']),
     (19,23,range(20,24),[2,3],'',['Accident Year','Cumulative Paid Claims ($000) Net of Excess of Loss Treaty']),
     (29,33,range(30,34),[2,3],'',['Accident Year','Stop-Loss Limit ($000)'])],
 26:[(5,10,range(7,11),[2,3,4,5,6],'Cumulative Paid Claims ($000) as of (months)',['Accident Year','12','24','36','48']),
     (13,16,range(14,17),[2,3],'',['Accident Year','Calendar Year Paid ULAE ($000)'])],
 28:[(5,10,range(6,11),[2,3,4,5],'',['Accident Year','Development Technique','Bornhuetter-Ferguson Technique','Frequency-Severity Technique'])],
}
# PDF corrections to the workbook. The source PDF calls Q19 ages 12/24/36/48,
# and Q24 accident years 2013-2016, while the workbook has incorrect labels.
CELL_FIXES={(2,'C5'):'Overall Rate Change',(11,'B22'):'• Chi-Square Percentage (entire variable) =',
            (23,'B30'):'Discuss at which maturity age the data should be combined for the purpose of selecting an incremental tail severity to be used in a frequency-severity method for this insurance company.',
            (25,'B35'):'Calculate the unpaid claims net of all reinsurance for all accident years using the reported claims development technique.'}
CELL_FIXES.update({
    (2,'E14'):'$22,000,000',(2,'E15'):'$40,000,000',
    (14,'C5'):'$300,000',(14,'C6'):'$500,000',(14,'C7'):'$22,000',(14,'C8'):'$84,000',
    (23,'G20'):'$114,000',(23,'G21'):'$107,000',
    (26,'E18'):'$3,500,000',(26,'E19'):'$1,000,000',
})
for row in list(range(7,11))+list(range(14,18))+list(range(21,25))+list(range(28,32)):
    for col in ('B','H'):
        CELL_FIXES[24,f'{col}{row}']=str(2013+(row-(7 if row<11 else 14 if row<18 else 21 if row<25 else 28)))


def value(n, cell):
    if (n,cell.coordinate) in CELL_FIXES:return CELL_FIXES[n,cell.coordinate]
    if cell.value is None:return ''
    if isinstance(cell.value,datetime):return f'{cell.value:%B} {cell.value.day}, {cell.value.year}'
    if cell.column in (2,8) and isinstance(cell.value,int) and 2000<=cell.value<=2030:return str(cell.value)
    result=displayed(cell)
    if isinstance(cell.value,(int,float)) and '%' not in cell.number_format and cell.value>=1000 and cell.value==int(cell.value):
        result=f'{cell.value:,.0f}'
    return re.sub(r'\s+',' ',result).strip()

def line(sheet,n,row):
    cells=[c for c in sheet[row][1:18] if c.value is not None and c.data_type!='f']
    if n==15 and row in (18,22):cells=[c for c in cells if c.column==2]
    return ' '.join(value(n,c) for c in cells).strip()

def source_blocks(sheet,n,stop):
    specs=TABLES.get(n,[])
    covered={row for first,last,*_ in specs for row in range(first,last+1)}
    blocks=[]; previous=None
    for row in range(3,stop):
        if n==11 and row==22:continue  # Included in the original figure crop.
        for first,last,rows,cols,title,headers in specs:
            if first==row:
                data=[]
                for r in rows:
                    values=[value(n,sheet.cell(r,c)) for c in cols]
                    if (n,sheet.cell(r,cols[0]).coordinate) not in CELL_FIXES and isinstance(sheet.cell(r,cols[0]).value,int) and 2000<=sheet.cell(r,cols[0]).value<=2030:
                        values[0]=str(sheet.cell(r,cols[0]).value)
                    data.append(values)
                blocks.append({'type':'table','title':title,'headers':headers,'rows':data})
        if row in covered:
            previous=None;continue
        text=line(sheet,n,row)
        if text:
            if previous==row-1 and blocks and blocks[-1]['type']=='line' and not blocks[-1]['text'].endswith(('.',':',';','?','!')) and not text.startswith(('•','i.','ii.','iii.')):
                blocks[-1]['text']+=' '+text
            else:blocks.append({'type':'line','text':text})
            previous=row
        else:previous=None
    if n==26:blocks.insert(0,{'type':'line','text':'Given the following information:'})
    return blocks


# A few report samples contain several equally valid methods. Keep the first
# accepted sample, but state its result plainly where PDF extraction scrambles
# formulas, superscripts, or tables.
SOLUTION_OVERRIDES = {
 (1,'a'): 'One accepted two-step selection trends each calendar year to July 1, 2016 using written-premium averages, then applies 0.98² to July 1, 2018. The factors are 2014: (240/210)×0.9604 = 1.0976; 2015: (240/220)×0.9604 = 1.0477; and 2016: (240/235)×0.9604 = 0.9808. Other reasonable timing and trend selections were credited.',
 (2,'a'): 'The 2016 current-rate-level factor is 1.02816/1.063755 = 0.966538. On-level earned premium is $14,775,000, $17,622,000, and about $21,264,000 for 2014–2016. Apply the selected 2% annual premium trend over 4.25, 3.25, and 2.25 years, respectively; projected premium totals about $57.098 million.',
 (2,'b'): 'The indicated rate change is [(40,000/57,098) + 0.08]/(1 − 0.20 − 0.05) − 1 ≈ 4.03%. Dollar amounts are in thousands.',
 (3,'a'): 'Calendar-year 2015 earned premium is $680; written premium is $540.',
 (3,'b'): 'Policy-year 2015 earned premium and written premium are each $470.',
 (4,'a'): 'The 2016 occurrence policy indication is $560.42. The 2018 claims-made policy with a 2017 retroactive date is $434.73.',
 (4,'b'): 'Including the extended reporting period (tail) provision, the indicated total premium is $1,028.93.',
 (5,'a'): 'Trend historical ultimate losses and divide by on-level earned premium to select a 55.6% expected loss ratio. The 2016 Bornhuetter–Ferguson ultimate is 2,470 + (0.556×3,800)×(1 − 1/1.4) ≈ $3,074.1 thousand.',
 (6,'a'): 'Using the midpoint of each wage band as an average weekly wage, pre-reform weekly benefits total $465,075 and post-reform benefits total $528,950. The indicated change is 528,950/465,075 − 1 = 13.73%. The report accepted reasonable assumptions for within-band wages.',
 (7,'a'): 'The underwriting expense ratio is 29.7%.',
 (7,'b'): 'The operating expense ratio, including loss adjustment expense, is 35.7%.',
 (7,'c'): 'The permissible claims-only loss ratio is 59.3% (or 65.3% when claims and loss adjustment expense are combined).',
 (7,'d'): 'With a 65% claims ratio, 13.7% fixed expense ratio, 16% variable expense ratio, 6% LAE ratio, and 5% profit provision, the indicated change is (0.65 + 0.137)/(1 − 0.16 − 0.06 − 0.05) − 1 ≈ 7.8%.',
 (8,'a'): 'Balance expected profit over two policy years, accounting for retention and a 5% discount rate. An accepted calculation is 0.76P − 435 + (0.8/1.05)(0.7904P − 402.55) = 0, which gives a new-business premium of approximately $544.5.',
 (9,'c'): 'The flat premium is $350 per policy. At renewal, 120 cardiac risks and 80 general risks remain; expected profit for that renewal group is −$6,000.',
 (10,'b'): 'After adjusting for the class mix, territory exposures are 318, 331.5, and 391.5. Loss and ALAE per adjusted exposure are 11.5723, 24.1327, and 29.7216, giving relativities 0.4795, 1.0000, and 1.2316.',
 (11,'a'): 'Yes. The overall territory variable is significant at the 0.1% level on the chi-square graph. The individual territory results generally support territorial differences, although Territory 4 has relatively sparse data.',
 (12,'a'): 'At current increased-limits factors, expected losses in the layer total $200 million. Using the indicated increased-limits factors, expected losses total $125 million.',
 (13,'a'): 'A balanced capped set of territory factors is approximately 0.7113 for Territory 1, 1.0000 for Territory 2, and 1.1180 for Territory 3. Territory 2 reaches its permitted 13% increase; the remaining change is distributed to produce the overall 10% increase.',
 (14,'a'): 'The insured amount must satisfy coinsurance on the $500,000 replacement value after accounting for the $84,000 building and $22,000 contents. The indicated coinsurance percentage is approximately 75.7%.',
 (15,'a'): 'Reported-development ultimate loss and ALAE estimates for 2014–2016 are 6,008, 6,317, and 8,394 ($000).',
 (15,'b'): 'Bornhuetter–Ferguson ultimate estimates for 2014–2016 are 6,008, 6,312, and 7,409 ($000).',
 (15,'c'): 'Select the Bornhuetter–Ferguson estimates, particularly for the immature 2016 year, where straight development is more sensitive to the latest reported amount.',
 (15,'d'): 'Using the selected Bornhuetter–Ferguson ultimates, the sample rate indication is approximately +7.8%. Include 6% ULAE, 15% fixed expense, 25% variable expense, and 5% underwriting profit provisions.',
 (16,'a'): 'Calendar-year 2016 gross earned premium is $27,583.',
 (16,'b'): 'Unearned premium at December 31, 2016 is $1,250.',
 (16,'c'): 'Accident-year 2016 net reported claims are $6,000.',
 (18,'a'): 'Develop claim counts and severity separately, using separate 6-to-12-month factors for the two accident half-years. After excluding claims closed without payment and applying the selected development, the ultimate estimate is approximately $34.83 million.',
 (19,'a'): 'Selected reported age-to-age factors are 1.50, 1.20, 1.10, and a 1.05 tail. The age-24 and age-12 cumulative factors are 1.386 and 2.079. The resulting 2015 and 2016 ultimates are $26,299.35 thousand and $30,145.5 thousand.',
 (20,'a'): 'Trend historical claim counts and payroll to 2016. Selected frequencies rise from about 0.0073 to 0.0075 to 0.0078 claims per $1,000 of payroll. One accepted selection is the most recent, 0.0078, to respond to the rising frequency. A two-year average of 0.00765 was also credited.',
 (20,'b'): 'A supported ultimate severity selection is $8,783 per claim.',
 (20,'c'): 'Using the 0.0078 frequency from part (a), frequency–severity ultimate is 325,000×0.0078×8,783 = $22,264,905. Bornhuetter–Ferguson ultimate is $11,000,000 + (1 − 1/1.8)×$22,264,905 ≈ $20,895,513. A supported alternative frequency selection gives a different consistent result.',
 (21,'a'): 'Restate historical reported claims to the 2016 law level, derive an expected claims ratio of about 60% from used-up premium, then estimate 2016 ultimate as 400 + 0.60×1,000×(1 − 1/1.55) ≈ $613 thousand.',
 (22,'a'): 'Subtract case outstanding from industry reported claims to form paid triangles. The selected industry paid age-12 cumulative factor is about 3.242. With the 2.1 reported factor, the case-outstanding factor is 1 + (2.1 − 1)×3.242/(3.242 − 2.1) ≈ 4.123. Applying it to the self-insured company’s $400 thousand case outstanding gives about $1,649 thousand unpaid claims.',
 (23,'a'): 'The indicated incremental tail severity is approximately $50,116 at 48 months and $96,049 at 60 months.',
 (23,'b'): 'Combine maturity ages 60 months and later for a stable incremental tail severity; individual later ages are sparse and volatile. Other reasonable combinations were credited.',
 (24,'a'): 'Adjust the average case outstanding for the selected severity trend and use it with paid claims to create comparable reported-claim development. An accepted sample gives approximately $517 thousand in 2016 IBNR; another credited selection gives approximately $535 thousand.',
 (25,'a'): 'Subtract excess-of-loss ceded reported claims, develop the net triangle with selected factors 1.75, 1.15, and 1.03, then apply each accident year’s stop-loss limit. One accepted set of unpaid claims for 2013–2016 is 0, 1,027, 2,160, and 4,423 ($000). The 2013 ultimate is capped below paid claims, so unpaid cannot be negative.',
 (26,'a'): 'Under the classical method, unpaid ULAE is 10%×($1.0 million IBNR + 50%×$3.5 million case outstanding) = $275,000.',
 (26,'b'): 'Calendar-year 2016 paid claims are $4,985 thousand. Four-year paid claims total $11,835 thousand, so paid ULAE totals 10%×11,835 = $1,183.5 thousand. Subtract 2013–2015 paid ULAE of 220 + 220 + 330 = $770 thousand. The 2016 paid ULAE to paid claims ratio is 413.5/4,985 = 8.3%.',
 (28,'a'): 'The 2016 development estimate is 72.4%, versus 61.7% under frequency–severity. The 12-to-24-month development factor may be too high or overly sensitive to this immature year.',
 (28,'b'): 'The Bornhuetter–Ferguson expected loss ratio may be too low: its immature-year estimate is below the frequency–severity estimate, and its 2015 indication declines to 50.7%.',
}

# Condensed, part-specific takeaways from the official examiner's report.
# Match the short coaching notes used for the other recently added exams.
INSIGHTS = {
 1: {'a':'Use two distinct trend periods and show a factor for each year. Reasonable choices for the intermediate date were credited.',
     'b':'Give two different reasons average premium could decline; a falling rate level alone is not a premium trend explanation.'},
 2: {'a':'Apply each historical rate change to the period it affected, then on-level and trend each calendar year to the prospective period.',
     'b':'Use the projected premium from part (a), with fixed expense in the numerator and variable expense and profit in the denominator.'},
 3: {'a':'Include every policy earning premium in calendar year 2015; written and earned premium follow different timing.',
     'b':'Use policy-year 2015 membership and the December 31, 2016 valuation date, including the cancellation.',
     'c':'State one real advantage and one real disadvantage of calendar-year aggregation; discuss both premium and loss timing.'},
 4: {'a':'Separate occurrence and claims-made report-year coverage, and trend each covered loss cost to the correct policy period.',
     'b':'Include the extended reporting period cost when switching from claims-made to occurrence coverage.'},
 5: {'a':'Develop losses, on-level premiums, and trend losses to consistent dates before selecting an expected loss ratio; add both reported and unreported BF components.'},
 6: {'a':'Apply the old and proposed minimum and maximum to every wage band, then weight benefits by worker counts. State a reasonable within-band wage assumption.',
     'b':'Describe two distinct indirect behavioral or claim effects, beyond the mechanical benefit change.'},
 7: {'a':'Use the correct premium base and separate fixed from variable underwriting expenses.',
     'b':'Include loss adjustment expense in the operating ratio and handle its classification consistently.',
     'c':'Be clear whether the permissible ratio includes LAE; both consistent treatments received credit.',
     'd':'Keep fixed expenses in the numerator and variable expenses and profit in the denominator; treat LAE consistently with part (c).'},
 8: {'a':'Include loss cost, LAE, fixed and variable expenses, profit, retention, trend, and discounting in the two-year calculation.',
     'b':'Connect lifetime value to expected future costs and explain why renewal economics affect a new-business rate.'},
 9: {'a':'Evaluate a proposed exposure base against proportionality and practicality, rather than discussing it only as a rating variable.',
     'b':'Apply two named social criteria to age and explain the effect of each.',
     'c':'Account for customers switching insurers and the resulting specialty mix; compare premium with expected cost after renewal.'},
 10:{'a':'The class mix differs by territory, so univariate territorial results are confounded by another rating variable.',
     'b':'Adjust each territory for its class mix before calculating pure premiums and normalizing to Territory 2.'},
 11:{'a':'Use the chi-square result and the plotted estimates to support the territory decision; note the limited data in Territory 4.',
     'b':'Give three distinct benefits of a multivariate model, such as controlling correlations, interactions, and statistical uncertainty.',
     'c':'Explain how neighboring territories can stabilize sparse territorial estimates.'},
 12:{'a':'Calculate the layer as the difference between losses limited at $1 million and $500,000 under each ILF set.',
     'b':'Consider the implausible flat indicated ILF above $750,000 and the limited credibility of company experience.',
     'c':'Name a workable extrapolation method and a specific challenge from limited high-limit data.'},
 13:{'a':'Balance the initial relativity changes to a 10% overall increase, enforce the 13% territory cap, and rebalance the remainder.'},
 14:{'a':'Reconstruct the full loss as indemnity plus coinsurance penalty; the indemnity alone is not the loss amount.',
     'b':'Give two different initiatives and explain how each helps the insured maintain full replacement-value coverage.'},
 15:{'a':'Multiply each reported loss amount by its age-to-ultimate factor; do not apply an individual age-to-age factor alone.',
     'b':'Apply the expected ratio only to the unreported portion and add reported losses.',
     'c':'Justify the selection by development maturity, especially the volatility of 2016.',
     'd':'Trend selected losses and on-level earned premium to the prospective period, then apply ULAE, expense, and profit provisions.'},
 16:{'a':'Prorate each policy over the portion earned during calendar year 2016, including partial years and short-term policies.',
     'b':'Count only policy premium unearned at December 31, 2016.',
     'c':'Use accident date to select 2016 claims, then include case reserves and subtract reinsurance recoveries.'},
 17:{'a':'Explain how separate BI and PD estimates capture different development patterns and improve homogeneity.',
     'b':'Address the loss of credibility in smaller internal segments and the usefulness of comparable external data.'},
 18:{'a':'Develop counts and severity separately, distinguish first- and second-half 6–12 patterns, and multiply ultimate counts by ultimate severity.',
     'b':'Counts can decline because claims closed without payment leave the reported-count definition.',
     'c':'Describe a diagnostic that compares reporting or closure patterns by season, rather than merely asserting seasonality.'},
 19:{'a':'Use reported, not paid, claims with the selected cumulative development factors and include the tail.',
     'b':'Show the paid-to-reported pattern by valuation date and connect its change to a plausible case-reserving practice.',
     'c':'State a separate concrete consequence of understated reserves for investors, regulators, and management.'},
 20:{'a':'Trend both claim counts and payroll to 2016 before calculating frequency; justify the selected frequency.',
     'b':'Trend the two provided severity selections to 2016 and combine them; do not infer severity from the 2016 reported factor.',
     'c':'Use 2016 payroll and the selections from (a) and (b), then add reported claims to the unreported BF component.'},
 21:{'a':'Restate pre-2016 claims for the law change, calculate used-up premium, and apply the Cape Cod expected ratio only to unreported claims.'},
 22:{'a':'Derive industry paid claims first, translate reported development to a case-outstanding factor, then apply it to company case reserves.',
     'b':'Identify two limitations tied to industry comparability, sparse early development, or individual large claims.'},
 23:{'a':'Use incremental paid claims and closed counts at each maturity age, then trend severity to 2016; avoid averaging cumulative figures.',
     'b':'Explain the trade-off between stability from combining late ages and preserving a meaningful development pattern.'},
 24:{'a':'Select and apply a severity trend to average case outstanding, rebuild comparable reported claims, then calculate ultimate and IBNR.',
     'b':'Propose a technique supported by these triangles and explain why it is less sensitive to the case-reserve change.'},
 25:{'a':'Subtract excess-of-loss ceded claims before development, apply stop-loss limits to ultimate and paid claims, and floor unpaid at zero.'},
 26:{'a':'Apply the ULAE ratio to all IBNR plus half of case reserves under the classical method.',
     'b':'Use calendar-year paid claims as the denominator; derive 2016 ULAE from the four-year weighted ratio.',
     'c':'Recognize the declining paid ULAE ratio since startup; the four-year 10% selection may overstate current unpaid ULAE.'},
 27:{'a':'Assess each 2013 method at its mature age; case reserve strengthening affects reported development more than paid development.',
     'b':'Discuss the 2016 case strengthening separately for disposal-rate frequency–severity and reported BF estimates.',
     'c':'Account for the four paid and closed large 2015 claims; paid development is highly sensitive, while BF is less so.'},
 28:{'a':'Compare the 2016 development ratio with the other methods and years to identify a potentially high 12–24 factor.',
     'b':'Use the pattern of BF ratios to assess whether its initial expected ratio is too low, especially for immature years.'},
}

REPORT_START = {1:34,2:37,3:42,4:45,5:47,6:49,7:52,8:55,9:58,10:61,11:63,12:65,13:68,14:70,15:72,16:76,17:78,18:80,19:86,20:89,21:92,22:93,23:96,24:99,25:102,26:105,27:108,28:110}

def clean_report(text):
    text=re.sub(r'(?m)^SAMPLE ANSWERS AND EXAMINER.S REPORT\s*$', '',text)
    text=re.sub(r'(?m)^\s+$','',text)
    return re.sub(r'\n{3,}','\n\n',text).strip()

def split_parts(text):
    matches=list(re.finditer(r'(?m)^Part\s+([a-z])\s*:',text,re.I))
    if not matches:return {'a':clean_report(text)}
    return {m.group(1).lower():clean_report(text[m.end():matches[i+1].start() if i+1<len(matches) else None]) for i,m in enumerate(matches)}

def report_parts(n):
    text=(ROOT/f'tmp/fall2017/report-q{n:02}.txt').read_text()
    sample,examiner=re.split(r'(?m)^EXAMINER.S REPORT\s*$',text,maxsplit=1)
    sample=sample.split('SAMPLE ANSWERS',1)[-1]
    answers=split_parts(sample)
    guidance=split_parts(examiner)
    for letter,answer in list(answers.items()):
        answer=re.sub(r'^\s*\d+(?:\.\d+)?\s+points?\s*','',answer)
        if re.search(r'(?m)^Sample\s+1\s*$',answer):
            answer=re.split(r'(?m)^Sample\s+1\s*$',answer,1)[-1]
            answer=re.split(r'(?m)^Sample\s+2\s*$',answer,1)[0]
        answers[letter]=clean_report(answer)
    return answers,guidance

def worksheet_parts(sheet, n, point_grid):
    markers=[(c.row,c.value.strip()[1].lower()) for row in sheet for c in row if c.column==1 and isinstance(c.value,str) and re.fullmatch(r'\([a-z]\)',c.value.strip(),re.I)]
    assert markers,(n,'no part markers')
    answers,_=report_parts(n)
    parts=[]
    for i,(start,letter) in enumerate(markers):
        stop=markers[i+1][0] if i+1<len(markers) else sheet.max_row+1
        points=point_grid.cell(n+7,ord(letter)-ord('a')+3).value
        assert isinstance(points,(int,float)),(n,letter,'points',points)
        lines=[]
        for row in range(start,stop):
            s=line(sheet,n,row)
            if s:lines.append(s)
        prompt=' '.join(lines)
        assert prompt and letter in answers,(n,letter,'missing prompt or answer')
        insight=INSIGHTS[n][letter]
        parts.append({'id':letter,'points':points,'prompt':prompt,'solution':SOLUTION_OVERRIDES.get((n,letter),answers[letter]),'insight':insight})
    return markers[0][0],parts

def main():
    book=load_workbook(WORKBOOK,data_only=False)
    questions=[]
    for n in range(1,29):
        sheet=book[str(n)]
        first,parts=worksheet_parts(sheet,n,book['Point Grid'])
        q={'id':f'fall-2017-{n}','number':n,'exam':'Fall 2017','chapterIds':CHAPTERS[n],
           'points':sum(p['points'] for p in parts),'questionPage':n+3,
           'solutionPages':list(range(REPORT_START[n],REPORT_START.get(n+1,112))),
           'sourceBlocks':source_blocks(sheet,n,first),'parts':parts}
        if n==11:q['figure']={'src':'assets/exam-graphs/fall-2017-q11.png','title':'Territory GLM diagnostic graphs','alt':'Territory model plots show estimated relativities, confidence intervals, and chi-square significance.'}
        if n==6:q['notice']='The official examiner report accepted reasonable assumptions about average wages within each wage band.'
        questions.append(q)
    assert len(questions)==28
    assert sum(len(q['parts']) for q in questions)==66
    assert abs(sum(q['points'] for q in questions)-55.75)<1e-9
    assert {n:set(parts) for n,parts in INSIGHTS.items()}=={q['number']:{p['id'] for p in q['parts']} for q in questions}
    OUTPUT.write_text('// Generated from the official Fall 2017 exam PDF and its CBT workbook.\nwindow.FALL_2017_QUESTIONS = '+json.dumps(questions,ensure_ascii=False,indent=2)+';\n')
    print(f'Wrote {len(questions)} questions, {sum(len(q["parts"]) for q in questions)} scored parts, {sum(q["points"] for q in questions)} points')

if __name__=='__main__':main()

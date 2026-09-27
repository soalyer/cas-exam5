// Transcribed from the user's Fall 2019 CAS Exam 5 PDF. PDF page numbers are
// physical pages in the combined exam and examiner's report file.
window.EXAM_QUESTIONS = [
  {
    id: "fall-2019-1",
    number: 1,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-4"],
    points: 1.75,
    questionPage: 5,
    solutionPages: [33, 34],
    introduction: "Given the following quarterly exposure information:",
    tables: [
      {
        headers: ["Calendar Year and Quarter", "Written Exposures", "Earned Exposures"],
        rows: [
          ["2017 Q1", "100", "5.00"],
          ["2017 Q2", "450", "247.50"],
          ["2017 Q3", "400", "427.50"],
          ["2017 Q4", "100", "52.50"],
          ["2018 Q1", "125", "53.75"],
          ["2018 Q2", "550", "528.75"],
          ["2018 Q3", "475", "562.50"],
          ["2018 Q4", "30", "59.00"]
        ]
      }
    ],
    facts: [
      "The company started writing business on January 1, 2017.",
      "The company stops writing business on December 31, 2018.",
      "The quarterly earnings pattern was set by analyzing historical experience across the industry and is not uniform.",
      "All policies are annual.",
      "All policies are written on the first day of the quarter.",
      "There are no policy cancellations and no mid-term adjustments."
    ],
    parts: [
      {
        id: "a", points: 0.5,
        prompt: "Calculate the 2017 policy year earned exposures as of March 31, 2018.",
        solution: "780. The 2017 earned exposures through 2018 Q1 are 5 + 247.5 + 427.5 + 52.5 + 53.75 − (0.05 × 125) = 780. Equivalently: 100 × 1 + 450 × 1 + 400 × 0.55 + 100 × 0.10 = 780.",
        insight: "The earning pattern is not uniform; do not use an even quarterly pattern."
      },
      {
        id: "b", points: 0.25,
        prompt: "Calculate the in-force exposures as of May 31, 2018.",
        solution: "1,175 = 400 + 100 + 125 + 550, from policies written in 2017 Q3 through 2018 Q2.",
        insight: "Use the written exposures for the four quarters whose annual policies are in force on May 31."
      },
      {
        id: "c", points: 0.5,
        prompt: "Calculate the calendar year 2018 unearned exposures.",
        solution: "293.5. One method is 2,230 written exposures to date less 1,936.5 earned exposures = 293.5. Equivalently: 550 × 0.05 + 475 × 0.50 + 30 × 0.95 = 293.5.",
        insight: "Apply the actual earning pattern to written exposures, including unearned exposures from earlier quarters."
      },
      {
        id: "d", points: 0.5,
        prompt: "Calculate the calendar year 2019 quarter 1 earned exposures.",
        solution: "52.75 = (550 + 475 + 30) × 0.05.",
        insight: "Use the correct earning pattern for the quarter after the company stops writing business."
      }
    ]
  },
  {
    id: "fall-2019-2",
    number: 2,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-5"],
    points: 1.75,
    questionPage: 6,
    solutionPages: [35, 36, 37],
    introduction: "Given the following policies for an insurance company:",
    tables: [
      {
        headers: ["Policy", "Effective Date", "Expiration Date", "Written Premium"],
        rows: [
          ["A", "March 1, 2017", "February 28, 2018", "1,200"],
          ["B", "June 1, 2017", "November 30, 2017", "1,500"],
          ["C", "July 1, 2017", "June 30, 2018", "2,000"],
          ["D", "October 1, 2017", "September 30, 2018", "750"],
          ["E", "January 1, 2018", "December 31, 2018", "900"],
          ["F", "April 1, 2018", "September 30, 2018", "1,650"],
          ["G", "August 1, 2018", "July 31, 2019", "1,350"]
        ]
      }
    ],
    facts: [],
    parts: [
      {
        id: "a", points: 0.25,
        prompt: "Calculate the written premium for the fiscal year ending July 31, 2018.",
        solution: "3,300 = 750 + 900 + 1,650. Policies D, E, and F were written from August 1, 2017 through July 31, 2018.",
        insight: "The fiscal year is a 12-month period beginning August 1, 2017."
      },
      {
        id: "b", points: 0.25,
        prompt: "Calculate the in-force premium as of December 15, 2018.",
        solution: "2,250 = 900 + 1,350. Only policies E and G are in force on that date.",
        insight: "Policy F expired on September 30, 2018."
      },
      {
        id: "c", points: 0.5,
        prompt: "Calculate the 2018 calendar year written premium if Policy C is cancelled on March 31, 2018.",
        solution: "3,400. Policies E, F, and G contribute 900 + 1,650 + 1,350 = 3,900. The cancellation of C returns 3/12 × 2,000 = 500, giving 3,900 − 500 = 3,400.",
        insight: "A 2018 cancellation changes 2018 written premium even though the policy was originally written in 2017."
      },
      {
        id: "d", points: 0.5,
        prompt: "Discuss if it is appropriate for this insurer to estimate earned premium for the current year by averaging the in-force premium at the end of the current year and prior year.",
        solution: "No. These policies have different durations and are not written uniformly through the year. Averaging the two in-force snapshots would not reliably represent when premium was earned; the small book may also make the estimate volatile.",
        insight: "Explain why this particular book violates the conditions that would make a two-point average reasonable."
      },
      {
        id: "e", points: 0.25,
        prompt: "Identify one potential use of in-force premium other than estimating earned premium.",
        solution: "One accepted example is measuring the impact of rate changes. Other examples in the report include assessing current loss potential, informing reinsurance purchases, and monitoring whether the book is growing or shrinking.",
        insight: "Name a practical application other than estimating earned premium."
      }
    ]
  },
  {
    id: "fall-2019-3",
    number: 3,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-12"],
    points: 3,
    questionPage: 7,
    solutionPages: [38, 39],
    introduction: "Given the following information:",
    tables: [
      {
        title: "Current Rate Review",
        headers: ["Measure", "Value"],
        rows: [
          ["Number of Exposures", "20,000"],
          ["Indicated Rate Change before credibility", "7.9%"],
          ["Projected Frequency", "3.0%"],
          ["Annual Loss Trend", "−1.0%"],
          ["Annual Premium Trend", "1.5%"],
          ["Target Effective Date", "January 1, 2019"]
        ]
      },
      {
        title: "Prior Rate Review",
        headers: ["Measure", "Value"],
        rows: [
          ["Indicated Rate Change", "8.0%"],
          ["Implemented Rate Change", "3.5%"],
          ["Effective Date", "January 1, 2017"]
        ]
      },
      {
        title: "Normal Distribution Table",
        headers: ["p", "z(p)"],
        rows: [
          ["0.800", "0.842"],
          ["0.850", "1.036"],
          ["0.900", "1.282"],
          ["0.950", "1.645"],
          ["0.975", "1.960"],
          ["0.990", "2.326"]
        ]
      }
    ],
    facts: ["The loss experience is considered fully credible if there is a 90% probability that the observed experience is within 2.5% of its expected value."],
    parts: [
      {
        id: "a", points: 2.25,
        prompt: "Calculate the credibility-weighted indicated rate change using the classical credibility approach and trended present rates as the complement of credibility.",
        solution: "Use z = 1.645 for a two-sided 90% interval. Expected claims = 20,000 × 3% = 600. Full credibility requires (1.645 / 0.025)² ≈ 4,330 claims, so Z = √(600 / 4,330) ≈ 0.372. The trended present-rate complement is [(1 − 0.01) / (1 + 0.015)]² × (1.08 / 1.035) ≈ 0.9927. The weighted rate level is 0.372 × 1.079 + 0.628 × 0.9927 ≈ 1.0248, an indicated rate change of about +2.48%.",
        insight: "The report highlights the two-sided z-value, claim count, full-credibility standard, two-year trend period, and applying Z to the correct indications."
      },
      {
        id: "b", points: 0.75,
        prompt: "Identify three other complements of credibility appropriate for first dollar ratemaking.",
        solution: "Any three of: competitors' rate information; loss costs of a larger related group (such as countrywide or regional data); rate change of a larger related group; industry benchmarks; Harwayne's method.",
        insight: "List three distinct, applicable complements."
      }
    ]
  },
  {
    id: "fall-2019-4",
    number: 4,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-16"],
    points: 2.5,
    questionPage: 8,
    solutionPages: [40, 41, 42],
    introduction: "Given the following information for an insurance company that sells claims-made policies:",
    facts: [
      "Exposure levels are constant.",
      "Loss costs increase by 3% each report year.",
      "An equal number of claims are reported each year.",
      "All claims are reported within four years of occurrence."
    ],
    tables: [
      {
        title: "Loss Cost by Report Year Lag",
        headers: ["Report Year", "0", "1", "2", "3"],
        rows: [
          ["2014", "100", "100", "100", "100"],
          ["2015", "103", "103", "103", "103"],
          ["2016", "106", "106", "106", "106"],
          ["2017", "109", "109", "109", "109"],
          ["2018", "113", "113", "113", "113"]
        ]
      }
    ],
    parts: [
      {
        id: "a", points: 0.75,
        prompt: "Demonstrate and briefly explain why a claims-made policy will cost less than an occurrence policy.",
        solution: "For 2014, a claims-made policy costs 100 + 100 + 100 + 100 = 400, while an occurrence policy costs 100 + 103 + 106 + 109 = 418. An occurrence policy covers claims reported after the occurrence year, so positive report-year cost trend affects more of its claims.",
        insight: "The report accepts a numerical or written comparison, but it must connect the difference to positive cost trend and reporting lag."
      },
      {
        id: "b", points: 1,
        prompt: "Demonstrate and briefly explain whether a claims-made policy or an occurrence policy would be more underpriced if the actual loss cost trend by report year is 10%.",
        solution: "The occurrence policy is more underpriced. For 2014, the claims-made cost remains 4 × 100 = 400, but the occurrence cost under 10% trend is 100 + 110 + 121 + 133.1 = 464.1, versus 418 under the original table. The higher trend compounds over its reporting lag.",
        insight: "Compare both policy types and show how the 10% trend changes costs; do not apply the new trend to every table cell without regard to report year."
      },
      {
        id: "c", points: 0.75,
        prompt: "Briefly describe one difference between occurrence policies and claims-made policies regarding each of the following:\n i. Coverage trigger\n ii. Loss development\n iii. Investment income",
        solution: "i. Occurrence coverage is triggered by when the loss occurs; claims-made coverage is triggered by when the claim is reported. ii. Occurrence policies have reporting and settlement lag, including pure IBNR; claims-made policies mainly have settlement lag after the policy term. iii. The longer interval from premium collection to claim payment for occurrence policies generally allows more investment income.",
        insight: "For development and investment income, explain the reporting-lag cause rather than merely saying one policy type has more."
      }
    ]
  },
  {
    id: "fall-2019-5",
    number: 5,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-6"],
    points: 1.5,
    questionPage: 9,
    solutionPages: [43, 44, 45],
    introduction: "Given the following to be used in developing a rate indication effective January 1, 2021:",
    facts: [
      "All policies are annual.",
      "Rates are expected to be in effect for one year.",
      "The selected annual loss trend is 2%."
    ],
    tables: [],
    parts: [
      {
        id: "a", points: 0.5,
        prompt: "Calculate the loss trend factor applied to losses from accident year 2018.",
        solution: "Trend from the average accident date July 1, 2018 to the average prospective loss date January 1, 2022: 1.02^3.5 ≈ 1.072.",
        insight: "Trend to the average loss date, not merely the average written date of the future period."
      },
      {
        id: "b", points: 0.5,
        prompt: "Calculate the loss trend factor applied to losses from policy year 2018.",
        solution: "Trend from the average loss date January 1, 2019 to January 1, 2022: 1.02^3 ≈ 1.061.",
        insight: "Policy year 2018 has a later average loss date than accident year 2018; use a three-year period."
      },
      {
        id: "c", points: 0.5,
        prompt: "Explain why trending and developing losses do not result in overlapping adjustments.",
        solution: "Development projects losses from their current reported or paid amount to the ultimate amount for the same experience period. Trend moves the cost level of that experience to a future period. They address different dimensions, so the adjustments do not overlap.",
        insight: "Describe what each adjustment does; merely saying they do not overlap is insufficient."
      }
    ]
  },
  {
    id: "fall-2019-6",
    number: 6,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-7"],
    points: 2.25,
    questionPage: 10,
    solutionPages: [46, 47, 48],
    introduction: "",
    facts: [],
    tables: [],
    parts: [
      {
        id: "a", points: 1,
        prompt: "Discuss whether there is a need to explicitly account for the following costs in primary ratemaking:\n i. Proportional reinsurance\n ii. Non-proportional reinsurance",
        solution: "i. Proportional reinsurance generally need not be explicitly accounted for: the same proportion of premium and loss is ceded, leaving the primary loss ratio unchanged. ii. Non-proportional reinsurance should be addressed explicitly because premium and loss are not ceded in equal proportions and the net loss ratio and indication can change.",
        insight: "Take a clear position for each reinsurance type and explain its effect on the primary loss ratio."
      },
      {
        id: "b", points: 0.5,
        prompt: "Identify two sources of investment income considered in the total profit provision.",
        solution: "Two distinct sources are policyholder-supplied funds, such as unearned premium or loss reserves, and investor-supplied capital. The report also accepts other suitable distinct sources.",
        insight: "Collected premium alone is not a source in the way the report uses the term; identify the funds available for investment."
      },
      {
        id: "c", points: 0.75,
        prompt: "Briefly discuss whether trending is necessary for the following:\n i. Variable expenses\n ii. Fixed expenses when using the exposure-based projection method\n iii. Fixed expenses when using the premium-based projection method",
        solution: "i. Variable expenses are a percentage of premium, so they change with premium and need no separate trend. ii. With an exposure-based projection, fixed expenses may need independent trend if their cost level changes differently from the exposure base. iii. With a premium-based projection, fixed expenses need independent trend unless one explicitly assumes they change at the same rate as premium.",
        insight: "The expense projection base matters. Do not assume fixed expenses automatically track exposures or premium."
      }
    ]
  },
  {
    id: "fall-2019-7",
    number: 7,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-5", "ratemaking-6", "ratemaking-7", "ratemaking-8", "reserving-7", "reserving-9"],
    points: 4.5,
    questionPage: 11,
    solutionPages: [49, 50],
    introduction: "Given the following data as of December 31, 2018:",
    tables: [
      {
        title: "Cumulative Reported Loss + ALAE ($000s) as of (months)",
        headers: ["Accident Year", "12", "24", "36"],
        rows: [
          ["2016", "3,440", "4,107", "4,522"],
          ["2017", "3,427", "4,109", ""],
          ["2018", "3,545", "", ""]
        ]
      },
      {
        headers: ["Calendar Year", "Earned Premium ($000s)", "Fixed Expenses ($000s)"],
        rows: [
          ["2016", "10,500", "1,155"],
          ["2017", "12,000", "3,600"],
          ["2018", "12,500", "1,500"]
        ]
      },
      {
        title: "Rate Change History",
        headers: ["Effective Date", "Change"],
        rows: [
          ["July 1, 2017", "5%"],
          ["July 1, 2018", "2%"]
        ]
      },
      {
        headers: ["Assumption", "Value"],
        rows: [
          ["Annual loss and ALAE trend", "4%"],
          ["Annual premium trend", "3%"],
          ["Expected Loss and ALAE Ratio", "60%"],
          ["Variable Expense Ratio", "30%"],
          ["Profit and Contingencies Provision", "5%"],
          ["ULAE Provision (as % of Loss and ALAE)", "7%"],
          ["36-to-ultimate tail factor", "1.031"]
        ]
      }
    ],
    facts: [
      "In 2017 the company implemented a new policy issuance system.",
      "Rates are in effect for one year.",
      "All policies are annual.",
      "Exposures are written evenly throughout each calendar year."
    ],
    parts: [
      {
        id: "a", points: 4.5,
        prompt: "Calculate the indicated rate change for policies effective January 1, 2020 using the reported Bornhuetter-Ferguson technique for the last three accident years.",
        solution: "The examiner's sample answer indicates about a 12.0% decrease.\n\nAverage age-to-age factors are 1.1965 (12–24) and 1.101 (24–36). With the 1.031 tail, CDFs are approximately 1.358, 1.135, and 1.031 for 12, 24, and 36 months.\n\nReported BF ultimate losses + ALAE ($000s): 2016 = 4,522 + 10,500 × 60% × (1 − 1/1.031) ≈ 4,711.43; 2017 = 4,109 + 12,000 × 60% × (1 − 1/1.135) ≈ 4,965.39; 2018 = 3,545 + 12,500 × 60% × (1 − 1/1.358) ≈ 5,522.17.\n\nApply loss trend for 4.5, 3.5, and 2.5 years and the 1.07 ULAE load. The sample's trended losses are about 6,014.32, 6,094.72, and 6,517.44. On-level factors are about 1.071, 1.064, and 1.024. After 3% premium trend, trended on-level earned premium is about 12,845.36, 14,159.67, and 13,781.71. The three loss ratios are 46.82%, 43.04%, and 47.29%; their average is 45.72%.\n\nExclude the one-time 2017 system expense. The average fixed expense ratio from 2016 and 2018 is (11% + 12%)/2 = 11.5%. Indication = (45.72% + 11.5%) / (1 − 30% − 5%) − 1 ≈ −12.0%.",
        insight: "The examiner flags use of on-level premium rather than actual earned premium in BF expected losses, failure to exclude the unusual 2017 fixed expense, adding rather than multiplying LDFs, and trending reported losses inside the BF formula."
      }
    ]
  },
  {
    id: "fall-2019-8",
    number: 8,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-13"],
    points: 1.75,
    questionPage: 12,
    solutionPages: [51, 52, 53],
    introduction: "An insurer's retention model predicts the following:",
    tables: [
      {
        title: "Retention Ratio",
        headers: ["% Change in Premium", "First Renewal", "Second Renewal"],
        rows: [
          ["0%", "85%", "0%"],
          ["5%", "75%", "0%"]
        ]
      },
      {
        title: "The following information is known",
        headers: ["Measure", "Value"],
        rows: [
          ["Discount rate", "0.00%"],
          ["Fixed expenses", "$0"],
          ["Implementation costs", "$0"],
          ["Premium per policy", "$1,000"],
          ["Loss & LAE per policy", "$800"]
        ]
      }
    ],
    facts: [
      "Senior management will consider only the following at renewal:\n i. No rate change\n ii. +5% rate change"
    ],
    parts: [
      {
        id: "a", points: 1.25,
        prompt: "Select the rate change that will maximize the insurer's profit.",
        solution: "Choose the +5% rate change. With no change, current profit is $1,000 − $800 = $200 and first-renewal adjusted profit is 0.85 × $200 = $170, for $370 total. With a 5% increase, current profit is still $200 and first-renewal adjusted profit is 0.75 × ($1,050 − $800) = $187.50, for $387.50 total. The second-renewal retention is zero in both scenarios.",
        insight: "Apply retention to profit after both premium and loss, and apply the 5% increase to renewal premium."
      },
      {
        id: "b", points: 0.5,
        prompt: "Briefly evaluate the selected rate change with respect to the Statement of Principles Regarding Property Casualty Insurance Ratemaking, citing one relevant principle.",
        solution: "One relevant principle is that a rate is an estimate of the expected value of future costs. A rate selected solely to maximize profit does not, by itself, demonstrate that it reflects those costs. The report also accepts appropriately supported evaluations using the other CAS ratemaking principles.",
        insight: "Cite a specific principle and explain how the selected rate relates to it. Profit alone does not establish actuarial soundness."
      }
    ]
  },
  {
    id: "fall-2019-9",
    number: 9,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-9", "ratemaking-15"],
    points: 1.75,
    questionPage: 13,
    solutionPages: [54, 55],
    introduction: "",
    tables: [],
    facts: [],
    parts: [
      {
        id: "a", points: 0.5,
        prompt: "Briefly describe one similarity and one difference between the purposes of risk classification and individual risk rating.",
        solution: "Similarity: both seek to align a risk's premium with its expected loss or cost. Difference: risk classification distinguishes groups of risks with similar characteristics and assigns rates or relativities among groups, while individual risk rating uses information about a particular insured to tailor its rate.",
        insight: "Explain what is done with risk groups, not just that risks are grouped."
      },
      {
        id: "b", points: 0.5,
        prompt: "Briefly describe a situation for each of the following:\n i. A classification rating plan is more appropriate than individual risk rating\n ii. Neither a classification rating plan nor individual risk rating is necessary",
        solution: "i. For many small, homogeneous risks, each risk may have too little individual experience to rate separately, while class experience is useful. ii. Neither is needed if expected loss costs are the same for every exposure, so no meaningful differentiation is needed. The report also lists a rate set by state regulators as an accepted example.",
        insight: "Give a concrete situation that satisfies each condition; thin data or a new line of business alone was not enough."
      },
      {
        id: "c", points: 0.75,
        prompt: "Briefly describe three reasons a rating characteristic might not be included in a classification rating plan.",
        solution: "Any three distinct valid reasons include: it is not statistically significant; it duplicates another characteristic; data are not credible enough; it is difficult to verify or not objective; implementation is too costly; it raises privacy concerns; or its use is prohibited by law.",
        insight: "Give three different reasons. Duplicates or reasons that favor including a characteristic do not satisfy the request."
      }
    ]
  },
  {
    id: "fall-2019-10",
    number: 10,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-10"],
    points: 1.75,
    questionPage: 14,
    solutionPages: [56, 57],
    introduction: "The following graph shows pure premium relativities produced by a generalized linear model (GLM). The variable indicates whether the risk has had a claim in the most recent prior year or not.",
    figure: {
      src: "assets/exam-graphs/fall-2019-q10.png",
      title: "Prior Claim History",
      alt: "Prior Claim History graph from the exam. Bars show the number of policies with and without a prior-year claim. Lines show pure premium relativity factors for 2012 through 2018, each rising from about 1.0 for No to roughly 1.3 to 1.4 for Yes."
    },
    tables: [],
    facts: [],
    parts: [
      {
        id: "a", points: 0.5,
        prompt: "Describe the type of test for which the above graph is used.",
        solution: "This is a consistency test. It compares the pattern and slope of the prior-claim-history relativity across individual years to see whether the variable's effect is stable over time.",
        insight: "Name the consistency test and describe what is compared across years. Merely saying the graph helps decide whether to include a variable is insufficient."
      },
      {
        id: "b", points: 0.25,
        prompt: "Briefly state the conclusion that can be drawn from the above graph, using the test described in part a.",
        solution: "The annual lines rise in a similar way from no prior claim to a prior claim. Their shapes and slopes are reasonably consistent across years, supporting the variable as stable for the model.",
        insight: "Discuss the consistency of the slopes or shape. The examiner did not expect a conclusion that the graph was unstable because the lines are not identical."
      },
      {
        id: "c", points: 1,
        prompt: "Describe two other tests to consider when evaluating the inclusion of this variable in the model.",
        solution: "Two examples are: (1) a statistical significance test, such as a chi-square, t, or F test, to assess whether the variable has a meaningful predictive effect; and (2) a standard-error or confidence-interval check to see whether the estimated relativities are precise enough to rely on. A judgmental reasonableness check of the relativities is another acceptable test.",
        insight: "Give two distinct tests of this variable, each with the correct explanation. General tests of the whole GLM do not answer the question."
      }
    ]
  },
  {
    id: "fall-2019-11",
    number: 11,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-9", "ratemaking-10"],
    points: 1.25,
    questionPage: 15,
    solutionPages: [58, 59],
    introduction: "The graph below shows frequency model results for industry types. The same data and assumptions are used in both models.",
    figure: {
      src: "assets/exam-graphs/fall-2019-q11.png",
      title: "Model Results",
      alt: "Model Results graph from the exam. Exposure bars are shown for industry types 1 through 8. Two lines compare one-way and generalized linear model relativity factors. Both equal 1.0 at industry type 5, but differ at other types."
    },
    tables: [],
    facts: [],
    parts: [
      {
        id: "a", points: 0.25,
        prompt: "Briefly discuss why the relativity for both line graphs match for industry 5.",
        solution: "Industry 5 is the base level for the industry-type variable in both models, so both relativities are set to 1.0.",
        insight: "Identify industry 5 as the base level. Its high exposure count alone does not explain why the two relativity lines match."
      },
      {
        id: "b", points: 0.5,
        prompt: "Explain why the models in part a above produce different results.",
        solution: "The one-way model estimates the effect of industry type on its own. The GLM evaluates industry type along with other rating variables and can account for their correlation, differences in exposure mix, and interactions. Consequently, its adjusted relativities can differ from the one-way results.",
        insight: "Explain how the models treat correlated variables or exposure distribution differently; simply mentioning correlation without the distinction was a common error."
      },
      {
        id: "c", points: 0.5,
        prompt: "Describe how the use of one-way results might impact profitability for an insurance company.",
        solution: "If the GLM gives more accurate risk costs, one-way relativities may overprice some segments and underprice others. Underpriced risks may remain while overpriced risks leave, creating adverse selection and reducing profitability over time.",
        insight: "Connect inaccurate segment pricing to adverse selection and lower profit. The one-way results are not uniformly higher or lower than the GLM results."
      }
    ]
  },
  {
    id: "fall-2019-12",
    number: 12,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-12"],
    points: 1.75,
    questionPage: 16,
    solutionPages: [60, 61],
    introduction: "Given the following information:",
    tables: [
      {
        headers: ["Vehicle Type", "Vehicle Use", "State A Exposures", "State A Losses ($)", "Countrywide Exposures", "Countrywide Losses ($)"],
        rows: [
          ["Car", "Pleasure", "2,500", "500,000", "30,000", "6,600,000"],
          ["Car", "Work", "1,000", "500,000", "25,000", "16,250,000"],
          ["Truck", "Pleasure", "0", "0", "40,000", "14,400,000"],
          ["Truck", "Work", "3,000", "300,000", "50,000", "8,500,000"]
        ]
      }
    ],
    facts: [
      "An actuary is developing a pure premium estimate for trucks used for work in State A.",
      "The actuary is using experience from all other states as a complement of credibility."
    ],
    parts: [
      {
        id: "a", points: 1.25,
        prompt: "Calculate the complement of credibility using Harwayne's Method.",
        solution: "First subtract State A from countrywide to obtain the other-state pure premiums: car/pleasure = $6,100,000 / 27,500 = $221.82; car/work = $15,750,000 / 24,000 = $656.25; truck/pleasure = $14,400,000 / 40,000 = $360.00; truck/work = $8,200,000 / 47,000 = $174.47.\n\nWeight these pure premiums by State A's exposure mix: (2,500 × $221.82 + 1,000 × $656.25 + 0 × $360 + 3,000 × $174.47) / 6,500 ≈ $266.80. State A's overall pure premium is ($500,000 + $500,000 + $300,000) / 6,500 = $200.00. The adjustment factor is $200.00 / $266.80 ≈ 0.7496. Apply it to the other-state truck/work pure premium: 0.7496 × $174.47 ≈ $130.78.",
        insight: "Exclude State A from the countrywide data first, weight all other-state cells by State A exposures, and use State A's overall pure premium in the numerator of the adjustment factor."
      },
      {
        id: "b", points: 0.5,
        prompt: "Briefly describe two advantages of using the current rate as a complement of credibility instead of calculating the complement with Harwayne's method.",
        solution: "The current-rate complement is simpler and quicker to calculate. It also has a more direct relationship to the existing base rate and the subject experience, making it easier to explain. These are distinct advantages accepted by the examiner.",
        insight: "Do not cite data availability when both methods have the data. Explain why the current-rate method is easier to communicate rather than merely asserting it."
      }
    ]
  },
  {
    id: "fall-2019-13",
    number: 13,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-11"],
    points: 1.75,
    questionPage: 17,
    solutionPages: [62],
    introduction: "Given the following information:",
    tables: [
      { headers: ["Policy Limit", "Claims", "% of Claims at Policy Limit"], rows: [
        ["$50,000", "145", "100%"],
        ["$100,000", "550", "60%"],
        ["$200,000", "875", "40%"]
      ] }
    ],
    facts: ["All claim payments are either 50% of the policy limit or 100% of the policy limit.", "$50,000 is the basic limit."],
    parts: [
      { id: "a", points: 1.75,
        prompt: "Calculate the indicated increased limit factor for the $200,000 limit.",
        solution: "The basic $50,000 layer has limited average severity (LAS) of $50,000 across all 1,570 claims. For the next $50,000 layer, use claims at the $100,000 and $200,000 limits: [550 × 60% × $50,000 + 875 × $50,000] / (550 + 875) = $42,280.70. For the $100,000 layer above $100,000, only $200,000-limit claims provide uncensored information: 40% × $100,000 = $40,000. The increased limit factor is ($50,000 + $42,280.70 + $40,000) / $50,000 = 2.646 (about 2.65).",
        insight: "Use all uncensored claims available for each layer. Do not use policies with limits below a layer or double-count the probability of reaching it."
      }
    ]
  },
  {
    id: "fall-2019-14",
    number: 14,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-11"],
    points: 2,
    questionPage: 18,
    solutionPages: [63, 64],
    introduction: "Given the following:",
    tables: [
      { headers: ["Item", "Amount"], rows: [
        ["Home Value", "$300,000"],
        ["Insured Value", "$250,000"],
        ["Amount of Loss", "$260,000"]
      ] }
    ],
    facts: [],
    parts: [
      { id: "a", points: 1,
        prompt: "Calculate the amount paid by the policyholder at the time of loss under the following:\n i. Coinsurance percentage of 80%\n ii. Coinsurance percentage of 90%",
        solution: "i. Required insurance is 80% × $300,000 = $240,000. The $250,000 limit satisfies this, so there is no coinsurance penalty. The insurer pays its $250,000 limit and the policyholder pays $260,000 − $250,000 = $10,000.\n\n ii. Required insurance is 90% × $300,000 = $270,000. The coinsurance factor is $250,000 / $270,000 = 0.9259. The insurer pays about 0.9259 × $260,000 = $240,741, below the policy limit. The policyholder pays about $19,259 (roughly $19,260 as in the report).",
        insight: "Calculate the policyholder's amount, including any loss above the insured limit, rather than reporting only the insurer's payment."
      },
      { id: "b", points: 0.5,
        prompt: "Describe how coinsurance provisions promote equitable rates.",
        solution: "Coinsurance reduces the insurer's payment at the time of a loss for a policyholder who insures below the required value. Fully insured policyholders therefore do not have to subsidize underinsured policyholders through rates based on different loss costs.",
        insight: "Identify the loss-payment penalty for underinsured risks and connect it to fairness between risks."
      },
      { id: "c", points: 0.5,
        prompt: "Describe how coinsurance provisions promote adequate rates.",
        solution: "The penalty encourages policyholders to insure to value. This helps the insurer measure the full exposure and charge premiums that reflect the risk, rather than relying on understated insured values and inadequate premium.",
        insight: "Coinsurance encourages, but does not guarantee, insurance to value."
      }
    ]
  },
  {
    id: "fall-2019-15",
    number: 15,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-15"],
    points: 2,
    questionPage: 19,
    solutionPages: [65, 66],
    introduction: "A workers compensation annual policy for a large insured is expiring on January 1, 2020. The following changes have taken place at the insured since the policy was last issued on January 1, 2019:",
    tables: [],
    facts: ["The insured has implemented a new job-specific training program to reduce the expected number of claims.", "The insured has doubled the number of their employees."],
    parts: [
      { id: "a", points: 0.5,
        prompt: "Briefly describe how each of these changes could be accounted for in the final premium for the January 1, 2020 renewal policy.",
        solution: "The new training program can be reflected through a favorable schedule-rating adjustment because its effect is not yet in the insured's experience. Doubling employees increases payroll or other exposure used in the manual premium, generally increasing premium.",
        insight: "Name the schedule adjustment for training and explain how additional employees affect the exposure base."
      },
      { id: "b", points: 1,
        prompt: "Describe how each of these changes are accounted for in the final premium on January 1, 2024 if the insured has no additional changes over the next four years.",
        solution: "By 2024, the training program's benefit should appear in claim experience and therefore in the experience modification factor. Remove the separate schedule credit so it is not counted twice. The increased number of employees continues to increase exposure and manual premium; there is no change to the manual rate merely because headcount doubled.",
        insight: "Address both the experience-rating treatment of training and the continuing exposure effect of employee growth."
      },
      { id: "c", points: 0.5,
        prompt: "Describe one additional rating mechanism that would benefit the company if the insured has grown substantially larger and more operationally complex between January 1, 2020 and January 1, 2024.",
        solution: "Retrospective rating could better reflect the large insured's own capped losses and expenses by adjusting premium after the policy period, subject to stated minimum and maximum premiums. A high deductible, self-insured retention, or premium discount with a suitable explanation was also accepted.",
        insight: "Identify a mechanism beyond schedule and experience rating and explain why it fits this larger risk."
      }
    ]
  },
  {
    id: "fall-2019-16",
    number: 16,
    exam: "Fall 2019",
    chapterIds: ["reserving-1"],
    points: 1.5,
    questionPage: 20,
    solutionPages: [67, 68],
    introduction: "",
    tables: [],
    facts: [],
    parts: [
      { id: "a", points: 0.75,
        prompt: "List three components of an unpaid claims estimate.",
        solution: "Case outstanding on reported claims; incurred but not enough reported (IBNER), including future development on known claims; and incurred but not yet reported (IBNYR, or pure IBNR).",
        insight: "List three distinct unpaid components, not estimation techniques or expenses without explaining that they are unpaid."
      },
      { id: "b", points: 0.75,
        prompt: "Briefly describe how an inadequate unpaid claims estimate can impact the decision-making of each of the following parties:\n i. Internal management\n ii. Investors\n iii. Regulators",
        solution: "i. Management may mistake overstated profit for sound performance, lower rates, or expand an unprofitable business. ii. Investors may overvalue the insurer or invest based on earnings that will not be realized. iii. Regulators may miss weakening solvency and fail to intervene or approve a needed rate increase in time.",
        insight: "For each stakeholder, connect the understated liability to a specific mistaken decision."
      }
    ]
  },
  {
    id: "fall-2019-17",
    number: 17,
    exam: "Fall 2019",
    chapterIds: ["reserving-6"],
    points: 2.25,
    questionPage: 21,
    solutionPages: [69, 70, 71],
    introduction: "",
    tables: [],
    facts: [],
    parts: [
      { id: "a", points: 0.75,
        prompt: "Identify three changes in an insurance company's internal environment that could distort the paid or reported development patterns.",
        solution: "Three distinct examples are: increased case reserve adequacy; faster claim settlement; and a shift toward larger insured risks or another change in business mix.",
        insight: "Choose distinct internal changes. External events such as tort reform and catastrophes do not satisfy the request."
      },
      { id: "b", points: 1.5,
        prompt: "Briefly describe how each change identified in part a above may be observed in a diagnostic triangle.",
        solution: "Higher case reserve adequacy can appear as rising average case outstanding per open claim, or a falling paid-to-reported ratio down a development-age column. Faster settlement can appear as increasing closed-to-reported claim-count ratios or disposal rates down a column. A shift toward larger risks can appear as a systematic increase in average paid or reported severity down comparable columns; segmented triangles can help confirm the mix change.",
        insight: "For each change, name a diagnostic triangle or ratio and state the direction and location of the expected pattern."
      }
    ]
  },
  {
    id: "fall-2019-18",
    number: 18,
    exam: "Fall 2019",
    chapterIds: ["reserving-12"],
    points: 1.75,
    questionPage: 22,
    solutionPages: [72, 73, 74],
    introduction: "Given the following data evaluated as of December 31, 2018:",
    tables: [
      { title: "Cumulative Paid Claims ($000) as of (months)", headers: ["Accident Year", "12", "24", "36", "48"], rows: [
        ["2015", "1,200", "2,325", "2,900", "3,100"],
        ["2016", "1,800", "3,300", "4,100", ""],
        ["2017", "1,500", "2,800", "", ""],
        ["2018", "1,700", "", "", ""]
      ] },
      { title: "Case Outstanding ($000) as of (months)", headers: ["Accident Year", "12", "24", "36", "48"], rows: [
        ["2015", "1,500", "800", "400", "160"],
        ["2016", "2,000", "1,150", "575", ""],
        ["2017", "1,750", "975", "", ""],
        ["2018", "2,200", "", "", ""]
      ] },
      { headers: ["Factor", "Description"], rows: [
        ["1.15", "48–ultimate paid claim to prior case outstanding development factor"]
      ] }
    ],
    facts: ["There is no paid or reported development beyond 60 months."],
    parts: [
      { id: "a", points: 1.5,
        prompt: "Estimate unpaid claims for accident year 2018 as of December 31, 2018 using a case outstanding development technique.",
        solution: "Use selected case-to-prior-case factors of 0.555, 0.50, and 0.40, and incremental-paid-to-prior-case factors of 0.747, 0.708, 0.50, and 1.15 to ultimate. Starting with $2,200 thousand case outstanding at 12 months, projected payments are: 12–24 = 2,200 × 0.747 = 1,643.40; 24–36 = (2,200 × 0.555) × 0.708 = 864.47; 36–48 = (2,200 × 0.555 × 0.50) × 0.50 = 305.25; 48–ultimate = (2,200 × 0.555 × 0.50 × 0.40) × 1.15 = 280.83. Total unpaid ≈ $3,093.95 thousand. The examiner report gives approximately $3,093.94 thousand; its printed intermediate payment amounts contain arithmetic inconsistencies.",
        insight: "Apply incremental paid factors to prior case outstanding, include every future interval and the 48-to-ultimate factor, and report unpaid rather than ultimate claims."
      },
      { id: "b", points: 0.25,
        prompt: "Briefly describe a scenario where it would be appropriate to use the case outstanding development technique.",
        solution: "A claims-made or short-tailed line in which virtually all claims have already been reported and remaining unpaid claims are primarily on known open claims is a suitable setting.",
        insight: "Provide an actual situation where case outstanding is informative, rather than restating a method assumption."
      }
    ]
  },
  {
    id: "fall-2019-19",
    number: 19,
    exam: "Fall 2019",
    chapterIds: ["ratemaking-5", "reserving-10"],
    points: 3,
    questionPage: 23,
    solutionPages: [75, 76],
    introduction: "Given the following data as of December 31, 2018:",
    tables: [
      { headers: ["Accident/Calendar Year", "Cumulative Reported Claims ($000s)", "Earned Premium ($000s)"], rows: [
        ["2016", "7,200", "10,400"], ["2017", "6,300", "11,000"], ["2018", "4,700", "11,500"]
      ] },
      { title: "Cumulative Age-to-Ultimate Factors", headers: ["12–Ult", "24–Ult", "36–Ult", "48–Ult"], rows: [
        ["1.764", "1.260", "1.050", "1.000"]
      ] },
      { title: "Annual Trends", headers: ["Claims", "Premium"], rows: [["3.0%", "2.0%"]] },
      { headers: ["Effective Date", "Rate Change"], rows: [
        ["July 1, 2016", "4.0%"], ["July 1, 2017", "2.0%"]
      ] }
    ],
    facts: ["All policies have an annual term and are written evenly throughout the year."],
    parts: [
      { id: "a", points: 3,
        prompt: "Calculate ultimate claims for accident year 2017 using the Cape Cod technique.",
        solution: "Use the parallelogram method to find average rate levels 1.0050, 1.0376, and 1.0582 for 2016–2018; the current level is 1.04 × 1.02 = 1.0608, giving on-level factors about 1.0555, 1.0224, and 1.0025. Percent reported is 1/1.05, 1/1.26, and 1/1.764. Trend on-level used-up premium to 2018 using 2% premium trend, and reported claims using 3% claim trend. The combined 2018-level expected claims ratio is about 0.710. De-trend it to 2017: 0.710 × 1.02/1.03 ≈ 0.703. Then AY 2017 ultimate ($000) = 6,300 + 0.703 × (1 − 1/1.260) × 11,000 × 1.0224 ≈ 7,932. Equivalent on-level/trend bases give the same approximate result.",
        insight: "Use one combined expected claims ratio based on used-up premium, account for rate changes and trends, and add expected unreported claims to the 2017 reported amount."
      }
    ]
  },
  {
    id: "fall-2019-20",
    number: 20,
    exam: "Fall 2019",
    chapterIds: ["reserving-11"],
    points: 2.75,
    questionPage: 24,
    solutionPages: [77, 78],
    introduction: "Given the following:",
    tables: [
      { title: "Closed Claim Counts", headers: ["Year", "12", "24", "36", "48", "Count"], rows: [
        ["2015", "308", "555", "642", "647", "647"],
        ["2016", "356", "563", "678", "", "683"],
        ["2017", "358", "575", "", "", "684"],
        ["2018", "402", "", "", "", "795"]
      ] },
      { title: "Cumulative Paid Claims ($000s)", headers: ["Accident Year", "12", "24", "36", "48"], rows: [
        ["2015", "375", "745", "906", "916"],
        ["2016", "397", "750", "922", ""],
        ["2017", "422", "762", "", ""],
        ["2018", "385", "", "", ""]
      ] }
    ],
    facts: [
      "A court decision on December 31, 2018 will increase future claim payments by 20%.",
      "All claims are closed by age 48.",
      "There is no severity trend.",
      "The examiner's report clarifies that the last closed-count column, labeled “Count” in the exam, means ultimate count."
    ],
    parts: [
      { id: "a", points: 2.25,
        prompt: "Use the frequency-severity disposal rate technique to estimate unpaid claims for accident year 2018.",
        solution: "Selected disposal rates at 12, 24, 36, and 48 months are 0.507, 0.841, 0.992, and 1.000. Apply the future disposal-rate increments to the 393 claims still open at 12 months (795 − 402), scaled by the remaining proportion 1 − 0.506: projected incremental closures are about 266, 121, and 6. Selected incremental paid severities ($000) at 24, 36, and 48 months are 1.590, 1.673, and 2.000. Before the court change, future payments are 266 × 1.590 + 121 × 1.673 + 6 × 2.000 ≈ 637.37 ($000). Increase future payments by 20%: unpaid ≈ $764.85 thousand, or $764,848 as in the examiner report.",
        insight: "Project future closed counts by disposal rate, pair each interval with its incremental severity, then apply the 20% court-change factor only to future payments."
      },
      { id: "b", points: 0.5,
        prompt: "Describe an advantage of using the frequency severity technique over a paid development technique in part a above.",
        solution: "Frequency-severity lets the actuary explicitly raise future severities for the court decision while keeping claim disposal assumptions separate. A paid development factor blends those effects and may not respond promptly to the new legal environment.",
        insight: "Describe a concrete benefit for this fact pattern, not merely that the two methods differ."
      }
    ]
  },
  {
    id: "fall-2019-21",
    number: 21,
    exam: "Fall 2019",
    chapterIds: ["reserving-13"],
    points: 2.75,
    questionPage: 25,
    solutionPages: [79, 80],
    introduction: "Given the following:",
    tables: [
      { title: "Reported Claims ($000) as of (months)", headers: ["Accident Year", "12", "24", "36", "48"], rows: [
        ["2015", "1,100", "1,650", "1,675", "1,680"],
        ["2016", "1,250", "1,680", "1,750", ""],
        ["2017", "1,200", "1,800", "", ""],
        ["2018", "1,500", "", "", ""]
      ] },
      { title: "Reported Claim Counts as of (months)", headers: ["Accident Year", "12", "24", "36", "48"], rows: [
        ["2015", "108", "115", "115", "115"],
        ["2016", "112", "120", "120", ""],
        ["2017", "104", "110", "", ""],
        ["2018", "106", "", "", ""]
      ] },
      { title: "Paid Claims ($000) as of (months)", headers: ["Accident Year", "12", "24", "36", "48"], rows: [
        ["2015", "560", "1,325", "1,650", "1,680"],
        ["2016", "650", "1,350", "1,720", ""],
        ["2017", "615", "1,305", "", ""],
        ["2018", "625", "", "", ""]
      ] },
      { title: "Closed Claim Counts as of (months)", headers: ["Accident Year", "12", "24", "36", "48"], rows: [
        ["2015", "78", "106", "114", "115"],
        ["2016", "80", "111", "118", ""],
        ["2017", "75", "99", "", ""],
        ["2018", "82", "", "", ""]
      ] },
      { headers: ["Value", "Description"], rows: [["5.0%", "Annual severity trend"]] }
    ],
    facts: ["Exposures have remained constant throughout all accident years."],
    parts: [
      { id: "a", points: 2.75,
        prompt: "Calculate unpaid claims for accident year 2018 using the reported Berquist-Sherman technique.",
        solution: "Calculate case outstanding = reported − paid and open counts = reported counts − closed counts. For 2018 at 12 months, case outstanding is 1,500 − 625 = 875 ($000) on 24 open claims, or 36.5 per open claim. Adjust historical average case outstanding to the 2018 severity level using 5% annual trend, then multiply adjusted averages by historical open counts and add historical paid claims. The examiner's adjusted reported triangle ($000) is approximately: 2015 [1,505, 1,692, 1,664, 1,680]; 2016 [1,708, 1,736, 1,750]; 2017 [1,622, 1,800]; 2018 [1,500]. Straight-average adjusted development factors are about 1.084, 0.996, and 1.009; the 12-to-ultimate factor is about 1.089. Estimated ultimate is about 1,634 ($000), so unpaid = ultimate − 625 paid ≈ $1,009 thousand. A weighted-factor selection gives about $1,006 thousand.",
        insight: "Adjust the historical case adequacy through average case outstanding per open claim before deriving development factors, and subtract 2018 paid claims from ultimate."
      }
    ]
  },
  {
    id: "fall-2019-22",
    number: 22,
    exam: "Fall 2019",
    chapterIds: ["reserving-14"],
    points: 2.25,
    questionPage: 26,
    solutionPages: [81, 82, 83],
    introduction: "Given the following data as of December 31, 2018:",
    tables: [
      { title: "Cumulative Paid Claims ($000) Gross of Salvage & Subrogation as of (months)", headers: ["Accident Year", "12", "24", "36"], rows: [
        ["2015", "17,500", "21,500", "24,000"],
        ["2016", "19,000", "23,500", "25,700"],
        ["2017", "18,500", "22,800", ""],
        ["2018", "18,100", "", ""]
      ] },
      { title: "Cumulative Received Salvage and Subrogation ($000) as of (months)", headers: ["Accident Year", "12", "24", "36"], rows: [
        ["2015", "1,150", "4,050", "5,300"],
        ["2016", "1,180", "4,300", "5,680"],
        ["2017", "1,200", "4,250", ""],
        ["2018", "850", "", ""]
      ] },
      { headers: ["Factor", "Description"], rows: [
        ["1.40", "12-to-ultimate development factor for paid claims gross of salvage & subrogation"]
      ] }
    ],
    facts: ["There is no development beyond 36 months."],
    parts: [
      { id: "a", points: 1.75,
        prompt: "Estimate the salvage and subrogation recoverable for accident year 2018 using the ratio approach. Justify the selected ultimate salvage and subrogation ratio.",
        solution: "At 36 months, the mature recovery-to-gross-paid ratios are 5,300/24,000 = 22.08% for 2015 and 5,680/25,700 = 22.10% for 2016. The 2017 ratio at 24 months also develops toward about 22.1%. Select 22.1% as the ultimate ratio: the 2018 12-month ratio, 850/18,100 = 4.70%, is lower, but a single immature observation may be volatile. Project 2018 ultimate gross paid claims = 18,100 × 1.40 = 25,340 ($000). Ultimate recoveries ≈ 25,340 × 22.1% = 5,600.14 ($000). Subtract 850 already received: recoverable ≈ $4,750.14 thousand. A different justified ratio selection can produce another accepted estimate.",
        insight: "Develop or judgmentally select a ratio to gross paid claims, justify it, and subtract recoveries already received to obtain the recoverable."
      },
      { id: "b", points: 0.5,
        prompt: "Briefly discuss two advantages of the ratio approach as compared to the development approach.",
        solution: "Recovery-to-gross-paid ratios are often more stable and less leveraged than development factors on recovery dollars, especially at early maturities. The ratio also makes the relationship between salvage and subrogation and paid claims explicit, allowing a reasoned judgmental selection when one accident year's ratio looks unusual.",
        insight: "Give two distinct advantages and specify that the denominator is paid claims."
      }
    ]
  },
  {
    id: "fall-2019-23",
    number: 23,
    exam: "Fall 2019",
    chapterIds: ["reserving-7", "reserving-9", "reserving-10", "reserving-11", "reserving-15"],
    points: 2,
    questionPage: 27,
    solutionPages: [84, 85],
    introduction: "Given the following information for accident year 2015:",
    figure: {
      src: "assets/exam-graphs/fall-2019-q23.png",
      title: "Accident Year 2015 Ultimate Claims by Technique",
      alt: "Bar chart of accident year 2015 ultimate claim estimates at evaluations in 2015, 2016, 2017, and 2018. Reported development rises from roughly $138 million to $176 million. Reported Bornhuetter-Ferguson is relatively stable, about $165 million to $176 million. Reported Cape Cod rises from about $95 million to $176 million. Frequency-severity begins near $190 million and ends near $181 million."
    },
    tables: [],
    facts: ["Tort reform enacted January 1, 2015, resulted in a drastic increase in severity."],
    parts: [
      { id: "a", points: 2,
        prompt: "Discuss the year-over-year progression of each technique in response to the law change.",
        solution: "Reported development starts low and rises sharply as increased severity enters reported claims and, with time, the observed development factors; it approaches the ultimate result by 2018. Reported Bornhuetter-Ferguson is fairly stable with a slight rise because an a priori expected claims ratio can be selected to reflect the higher severity immediately, while the reported portion catches up. Reported Cape Cod starts lowest and rises substantially because its experience-based expected claims ratio initially reflects older, lower severity and updates as new experience emerges. Frequency-severity responds most quickly because severity is modeled separately and can be adjusted for the tort change from the outset; its initial estimate is high and declines slightly toward the final level.",
        insight: "Explain each technique's pattern using its mechanics and the severity change, rather than merely stating which bars rise or fall."
      }
    ]
  },
  {
    id: "fall-2019-24",
    number: 24,
    exam: "Fall 2019",
    chapterIds: ["reserving-9", "reserving-17"],
    points: 2.25,
    questionPage: 28,
    solutionPages: [86, 87, 88],
    introduction: "Given the following information, as of December 31, 2018:",
    tables: [
      { headers: ["Calendar Year", "Paid Claims", "Incurred Claims", "Paid ULAE"], rows: [
        ["2015", "18,700", "35,500", "1,870"],
        ["2016", "19,200", "36,500", "1,890"],
        ["2017", "18,900", "36,400", "1,910"],
        ["2018", "19,800", "37,400", "1,990"]
      ] },
      { headers: ["Report Year", "Earned Premium", "Paid Claims", "Reported Claims", "Percent Unreported"], rows: [
        ["2015", "77,600", "22,400", "29,500", "10.7%"],
        ["2016", "78,000", "14,300", "26,200", "23.1%"],
        ["2017", "77,800", "5,500", "20,700", "55.9%"],
        ["2018", "77,900", "2,800", "19,000", "76.3%"]
      ] }
    ],
    facts: ["The expected claims ratio for this book of business is 45%.", "All policies are claims-made."],
    parts: [
      { id: "a", points: 1.5,
        prompt: "Calculate unpaid ULAE at December 31, 2018 using the Kittel refinement.",
        solution: "For each calendar year, divide paid ULAE by 0.5 × (paid claims + incurred claims); the ratios are approximately 6.9%, 6.8%, 6.9%, and 7.0%. Select w = 6.9%. Use reported Bornhuetter-Ferguson by report year: ultimate = reported claims + earned premium × 45% × percent unreported. The four ultimates are about 33,236, 34,308, 40,270, and 45,747, totaling about 153,562. Total paid claims are 45,000, so unpaid claims are 108,562. Because the policies are claims-made, there is no pure IBNR; all unpaid is case outstanding plus IBNER. Kittel unpaid ULAE = w × [0.5 × (case + IBNER) + pure IBNR] = 0.069 × 0.5 × 108,562 ≈ 3,745, in the same units as the input tables.",
        insight: "Use the Kittel ratio denominator, estimate ultimate with reported BF for all years, and weight case plus IBNER by one-half for claims-made business."
      },
      { id: "b", points: 0.75,
        prompt: "Fully describe how the calculation in part a above would change if the policies for this book of business were occurrence instead of claims-made.",
        solution: "Occurrence policies can have claims incurred but not yet reported, so separate pure IBNR (IBNYR) from IBNER and case outstanding. Keep the selected ULAE ratio, but calculate unpaid ULAE as w × [100% of pure IBNR + 50% of (case outstanding + IBNER)]. The pure IBNR component therefore receives full weight, unlike the claims-made calculation in part a.",
        insight: "State both the additional pure-IBNR component and its 100% weight, alongside the 50% weight on case plus IBNER."
      }
    ]
  },
  {
    id: "fall-2019-25",
    number: 25,
    exam: "Fall 2019",
    chapterIds: ["reserving-7", "reserving-14", "reserving-15"],
    points: 1.75,
    questionPage: 29,
    solutionPages: [89, 90],
    introduction: "Given the following information for a company:",
    tables: [
      { headers: ["Value", "Description"], rows: [
        ["5.00", "12-to-ultimate gross paid claims development factor"],
        ["3.30", "24-to-ultimate gross paid claims development factor"],
        ["12,000,000", "Accident year 2018 paid gross claims at 12 months"]
      ] },
      { title: "Incremental Gross Industry Payment Pattern for 12 to 24 Months, by Quarter", headers: ["Age", "12–15", "15–18", "18–21", "21–24"], rows: [
        ["Percent Paid", "50%", "35%", "10%", "5%"]
      ] },
      { headers: ["Value", "Description"], rows: [
        ["1,450,000", "Accident year 2018 actual net paid claims for 15–18 months"]
      ] }
    ],
    facts: ["The company maintains a quota share reinsurance agreement where they cede 30% of the business.", "Ultimate losses are estimated using the paid development technique."],
    parts: [
      { id: "a", points: 1.25,
        prompt: "Calculate the accident year 2018 expected net paid claims for the period 15 to 18 months, based on the following:\n i) claims emerge uniformly between evaluation points.\n ii) the industry payment pattern.",
        solution: "Gross expected paid during months 12–24 = $12,000,000 × (5.00/3.30 − 1) = $6,181,818. The company retains 70% after quota share. i) Under uniform emergence over four quarters, months 15–18 are 25% of that period: $6,181,818 × 70% × 25% = $1,081,818 net. ii) Under the industry pattern, the 15–18 month quarter is 35%: $6,181,818 × 70% × 35% = $1,514,545 net.",
        insight: "Project the 12–24 month gross increment first, apply the correct quarter's share, and retain only 70% after reinsurance."
      },
      { id: "b", points: 0.5,
        prompt: "Recommend whether to change the net estimated unpaid based on the actual results for accident year 2018 in the 15-to-18 month period.",
        solution: "I would not change the unpaid estimate solely from this period. Actual net paid of $1,450,000 is close to the industry-pattern expectation of $1,514,545, while uniform emergence understates it. The one-quarter difference could reflect ordinary variation or an imperfect industry match; investigate company payment timing before revising the estimate.",
        insight: "Give a recommendation with a comparison of actual to both expected patterns and an assessment of which assumption is more suitable."
      }
    ]
  }
];

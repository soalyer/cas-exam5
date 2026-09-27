// Official Spring 2013 PDF; CBT point grid.
window.SPRING_2013_QUESTIONS = [
  {
    "id": "spring-2013-1",
    "number": 1,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-4"
    ],
    "points": 2.0,
    "questionPage": 3,
    "solutionPages": [
      31
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for an insurance company that writes 24-month term policies:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Policy Group",
          "Effective Date",
          "Expiration Date",
          "Number of Vehicles"
        ],
        "rows": [
          [
            "A",
            "January 1, 2010",
            "December 31, 2011",
            "50"
          ],
          [
            "B",
            "July 1, 2010",
            "June 30, 2012",
            "100"
          ]
        ]
      },
      {
        "type": "line",
        "text": "All policies within each group have the same effective date."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate the earned car-years for calendar year 2011 .",
        "solution": "For CY2011, A Earned ½ exposures =  50 x 2 x ½ = 50 \n                             B also earns ½ exposures = 100 x 2 x ½ = 100  \n       CY2011 Earned Exposures =  50 + 100 = 150",
        "insight": "Treat vehicle counts as the number of covered vehicles, then calculate the fraction of 2011 for which each was insured."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the earned car-years for policy year 2010 evaluated as of December 31, 2010 and as of December 31, 2011.",
        "solution": "Evaluated as of 12/31/2010  \n A earned = 50 x 2 x ½ = 50 \n B earned = 100 x 2 x ¼ = 50 \n Total earned exposures = 50 + 50 = 100  \n     \nEvaluated as of 12/31/2011 \n A earned 50 x 2 = 100 \n B earned 100 x 2 x ¾ = 150 \n Total earned exposures = 100 + 150 = 250",
        "insight": "Develop written policy-year exposures at each evaluation date rather than treating all vehicles as a full year immediately."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Assume Policy Group B cancels on January 1, 2011. Calculate the 2010 policy year written car-years evaluated as of December 31, 2010 and as of December 31, 2011 for Policy Group B.",
        "solution": "Evaluated as of 12/31/2010 \n B written exposures = 100 x 2 = 200 \n \n      Evaluated as of 12/31/2011 \n      B written exposures = 100 x 2 – 100 x 2 x ¾ = 50",
        "insight": "Full credit was given to candidates that clearly identified the portion attributable to Policy B."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Assume Policy Group B cancels on July 1, 2011. Calculate the 2010 and 2011 calendar year written car-years for Policy Group B.",
        "solution": "CY2010 B written exposures = 100 x 2 = 200 \nCY2011  B written exposures = -100 x 2 x ½ = -100",
        "insight": "Full credit was given to candidates that clearly identified the portion attributable to Policy B."
      }
    ]
  },
  {
    "id": "spring-2013-2",
    "number": 2,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-5"
    ],
    "points": 2.0,
    "questionPage": 4,
    "solutionPages": [
      32,
      33
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for an insurance company:"
      },
      {
        "type": "line",
        "text": "• Proposed effective date of the next rate change is January 1, 2014."
      },
      {
        "type": "line",
        "text": "• Rates will be in effect for 1 year."
      },
      {
        "type": "line",
        "text": "• All policies have 12-month terms and are written uniformly throughout the year."
      },
      {
        "type": "line",
        "text": "• Calendar year 2012 earned premium at current rate level is $114,208,050."
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "12 Month Period Ending",
          "Written Premium at Current Rate Level",
          "Written Exposures"
        ],
        "rows": [
          [
            "December 31, 2011",
            "104,500,000",
            "110,000"
          ],
          [
            "June 30, 2012",
            113800500,
            "121,000"
          ],
          [
            "December 31, 2012",
            "123,916,100",
            "133,100"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Utilizing one-step trending, calculate the calendar year 2012 projected earned premium at current rate level for use in calculating the rate change.",
        "solution": "Dec 31 2011 950 ↙  -1%   select semiannual trend at -1% \nJune 30 2012 940.5 ↙ -1% \nDec 31 2012  931  \n \nTrend period: 1/1/2012- 7/1/2014   Avg. written dates.  \n        2.5 yrs (5 half years) \n \n OR \n  Trend period 1/1/12 to 7/1/14  2.5 yrs \nCY 2012 Earned from @CRL * Trend 2.5 = Projected EP \n       AVG WNT @ CRL \n12/31/11     950 \n       -.01 \n 6/30/12 940.5           total annual trend -2% \n     -.01 \n12/31/12     931 \nProjected 2012 EP @ CRL = 114,208, 050",
        "insight": "Some of the common errors were: • -1% trend (not annual) • Wrong trend period • 8.5% or 8.9% trend (using total WP or WP over EP) • Apply trend to WP • Calculating EP from WP instead of projecting the given EP."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly discuss why a premium trend should be utilized in a rate level indication.",
        "solution": "It takes into account changes in exposure distributions, for what is expected to occur when rates are \nin effect. \nOR \nPremium trend accounts for the gradual shift in the book of business for things such as inflation or \nmix of business",
        "insight": "A common error was to say the premium trend is used to bring historical premium to expected future cost level which is stating what the premium trend does but not why you’d do it."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly discuss why it is inappropriate to use written premium at historical rate levels to determine premium trends.",
        "solution": "Using historical rates would cause a double-counting effect in the trend calculation \nOR \nUsing written premium at historical rate leads to determine premium trend would include rate \nchanges in the selected trend number, when we don’t necessarily expect those rate changes to \ncontinue into the future.",
        "insight": "The other common mistake was to compared written premium to earned premium instead of historical premium to current level premium."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "The insurance company decides to move all existing business with a $100 deductible to a $500 deductible upon renewal during calendar year 2013. Given this new information, discuss whether the true projected earned premium will be higher, lower, or unchanged from that in part a. above.",
        "solution": "This change would cause premiums to go lower because fewer losses would be paid. The true \nprojected premium is lower than that calculated above. \nOR \nThe true projected earned premium will be longer because a higher deductible gives the insured a \ndiscount on premium.",
        "insight": "Explain how moving renewals to the higher deductible changes the expected loss level and rate indication."
      }
    ]
  },
  {
    "id": "spring-2013-3",
    "number": 3,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-8"
    ],
    "points": 2.5,
    "questionPage": 5,
    "solutionPages": [
      34
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary has submitted the following analysis for a rate level indication:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar/Accident Year",
          "Calendar Year Earned Premium",
          "Accident Year Reported Losses & Paid ALAE",
          "Accident Year Reported Loss & Paid ALAE Ratio"
        ],
        "rows": [
          [
            "2010",
            "1,023,549",
            "703,902",
            "68.80%"
          ],
          [
            "2011",
            "1,086,756",
            "773,430",
            "71.20%"
          ],
          [
            "2012",
            "1,222,930",
            "749,249",
            "61.30%"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Item",
          "Value"
        ],
        "rows": [
          [
            "Three Year Average Reported Loss and Paid ALAE Ratio",
            "67.1%"
          ],
          [
            "Fixed Expense Provision",
            "11.0%"
          ],
          [
            "Variable Expense Provision",
            "15.0%"
          ],
          [
            "Underwriting Profit Provision",
            "8.0%"
          ],
          [
            "Variable Permissible Loss Ratio",
            "77.0%"
          ],
          [
            "Indicated Rate Change",
            "1.4%"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Recommend five improvements to the analysis and briefly explain the purpose of each.",
        "solution": "1. Adjust the earned premium to current rate level. This will avoid an indication that ignores past rate \nchanges and provides a better projection of future loss ratios. \n \n2. Determine a loss trend and apply to the Loss + ALAE. This will created a better projection of future \nlosses if there is an ongoing or past change in frequency or severity of losses \n \n3. Develop losses to ultimate. The rate must account for all losses from the policies, not just the ones \nthat have been reported thus far. Ignoring IBNR will create an inadequate rate. \n \n4. Include a ULAE load. The rate must provide for all costs associated with the transfer of risk so it must \ninclude adjustment expenses that are not allocated to specific claims \n \n5. Use a volume-weighted average of loss ratios. 2012 has significantly more premium than past years \nand will be more responsive to changes in the book so it should be given more weight.",
        "insight": "Recommend five concrete improvements to the indication and explain why each adjustment is needed."
      }
    ]
  },
  {
    "id": "spring-2013-4",
    "number": 4,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-5",
      "reserving-9"
    ],
    "points": 3,
    "questionPage": 6,
    "solutionPages": [
      35
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "• Annual loss trend rate = +4%."
      },
      {
        "type": "line",
        "text": "• Rate change history:"
      },
      {
        "type": "line",
        "text": "o +3% effective April 1, 2009."
      },
      {
        "type": "line",
        "text": "o +2% effective July 1, 2010."
      },
      {
        "type": "line",
        "text": "• All policies have annual terms."
      },
      {
        "type": "line",
        "text": "• Calendar year 2012 earned premium = $50,000."
      },
      {
        "type": "line",
        "text": "• Accident year 2012 reported losses at December 31 , 2012 = $4,200."
      },
      {
        "type": "table",
        "title": "Reported Loss Emergence",
        "headers": [
          "Age",
          "Percentage of loss reported"
        ],
        "rows": [
          [
            "12 months",
            "10%"
          ],
          [
            "24 months",
            "35%"
          ],
          [
            "36 months",
            "65%"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Selected Ultimate Loss Ratios",
        "headers": [
          "Accident year",
          "Ultimate loss ratio"
        ],
        "rows": [
          [
            "Accident Year 2009",
            "66%"
          ],
          [
            "Accident Year 2010",
            "67%"
          ],
          [
            "Accident Year 2011",
            "70%"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3,
        "prompt": "Use the reported Bornhuetter-Ferguson technique to estimate ultimate losses for accident year 2012.",
        "solution": "2009  2010      2011 \nFor 2009: On- level factor: \n1.03 x 1.02\n9/32 x 1.03 + 23/32 x 1  = 1.0418 \nFor 2010: On-level factor: \n  \nFor 2011: On- level factor \n  \nUses the average 2009-2011 ratio as the expected loss ratio \n \nFor 2012: \n  \nOR \nBF ULT. Losses = 4200 + [% unrept @ 12/31/12 x LR x EP] \n2011 ULT loss ratio= \n  \n2010      2011 \n \n \n \n \n          +2%                            \n     On level factor for 2011 EP = \n1.02\n1 (1/8) + 1 (7/8)  = 1.002 \n2011 LR adj for 2012 = \n  \nBF ULT Loss for 2012 = 4200+ .727(.9) 50,000 \n     = 36,915",
        "insight": "Some thought that the 2012 on-level earned premium was the only on-level adjustment needed, but this number was provided and the historical loss ratios still need adjustment for future levels."
      }
    ]
  },
  {
    "id": "spring-2013-5",
    "number": 5,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-8"
    ],
    "points": 4,
    "questionPage": 7,
    "solutionPages": [
      36,
      37,
      38
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A company is reviewing the rate level adequacy. Given the following information for a book of business:"
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• Current rates have been in effect for three years."
      },
      {
        "type": "line",
        "text": "• New rates will be in effect for 18 months beginning on July 1, 2013."
      },
      {
        "type": "line",
        "text": "• Annual premium trend = -1 %."
      },
      {
        "type": "line",
        "text": "• Annual loss trend = +3%."
      },
      {
        "type": "line",
        "text": "• Loss adjustment expense provision = 2.5% of loss."
      },
      {
        "type": "line",
        "text": "• Historical expense ratios:"
      },
      {
        "type": "line",
        "text": "o Fixed = 6%."
      },
      {
        "type": "line",
        "text": "o Variable = 30%."
      },
      {
        "type": "line",
        "text": "• Underwriting profit and contingencies provision = 5%."
      },
      {
        "type": "line",
        "text": "• Ultimate losses are estimated using the reported development technique."
      },
      {
        "type": "line",
        "text": "• On January 1, 2014, the company will reduce agency commissions by 3% of premium."
      },
      {
        "type": "table",
        "title": "Earned Premium ($000)",
        "headers": [
          "Calendar year ending",
          "Earned premium ($000)"
        ],
        "rows": [
          [
            "December 31, 2011",
            "2,163"
          ],
          [
            "December 31, 2012",
            "2,120"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported Losses ($000s)",
        "headers": [
          "Accident Year",
          "12 months",
          "24 months",
          "36 months",
          "48 months",
          "60 months"
        ],
        "rows": [
          [
            "2008",
            "$780",
            "$928",
            "1,030",
            "1,083",
            "1,094"
          ],
          [
            "2009",
            "$765",
            "$921",
            "1,004",
            "1,053",
            ""
          ],
          [
            "2010",
            "$760",
            "$920",
            "1,012",
            "",
            ""
          ],
          [
            "2011",
            "$805",
            "$966",
            "",
            "",
            ""
          ],
          [
            "2012",
            "$890",
            "",
            "",
            "",
            ""
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 4,
        "prompt": "Calculate the indicated rate change.",
        "solution": "(f = 6%, v = 30%, Q = 5%, V* = 27%)  \n*agency commission = variable expense -3% Annual Policy \n    12-24  24-36  36-48  48-60  60+ \nSelected ATAF reported Losses: 1.200965 1.100036 1.050147 1.010157 1 \n        \n     \n ↓ \n             Judgmentally Selected  \n \nReported Losses CDF-ULT  Loss Trend  LAE loading Projected ult claims \n2011(24) 966,000 1.166933 \n               1.025                  1,271,943.715 \n2012(12) 890,000 1.401446 \n  1.025  1,366,387,864 \n     ↘ = 1.200965\n  \nTrend Period [07/01/20xx-Avg DOL [(03/01/2013-12/31/2014 PY)] \n     10/01/2014 \n          2011=3.25 \n          2012=2.25 \n EP  On-level factor* Premium Trend  Projected Trended Premium \n2011 2163000 1.00   \n                                  2,093,490.054 \n2012 2120000 1.00   \n    2,072,597.876 \n*Already on-level as no rate change in past 3 years \nTrend period: Avg written date of CY 20XX EP - Avg written date of (07/01/2013-12/31/2014 PY) \n   01/01/20XX    04/01/2014 \n          2011=3.25 \n          2012=2.25 \nIndicated Rate Change = \n  \nLR= \n  \n     1/3 period  2/3 period \n↑   ↑ \nV approx in forecast period= \n  \n        = 1/3(0.3)+2/3(0.27)= 0.28 \nOR \n  12-24  24-36  36-48  48-60 \n  Rpt  Loss Dev ∆ \n08 1.19  1.11  1.05  1.01 \n09 1.20  1.09  1.049  \n10 1.21  1.1 \n11 1.2 \n Sel 1.2  1.1  1.05  1.01 \n To ULT 1.400  1.167  1.0605  1.01 \n \nCY Loss  LDF  Trend Fact  LAE  Trended Dev Losses’ \n2011 966,000 1.167     1.033.25  1.025       1,272,017  \n2012 890,000 1.400     1.032.25                            1.025   1,364,978 \nPrem    (1/1/12 - 4/1/14) \nCY  EP  Trend  Trended Ep  LR \n2011  2,163,000 \n   2,093,490  .6076 \n2012  2,120,000 \n   2,072,598  .6586 \n         Avg: .6331 \nInd Change     Ind Change \n.6331+.06\n0.67   =  1.0345  + 3.45%  \nPLR 7/1/13 - 1/1/13 = 1 - .3 - .05 = .65 \n 1/1/14 - 12/31/14 = 1 - .27 - .05 = .68 \n WTD 1/3 (.65) + 2/3 (.68) = .67",
        "insight": "Develop and trend the supplied experience, apply the selected expense provision, and show the final indicated rate change."
      }
    ]
  },
  {
    "id": "spring-2013-6",
    "number": 6,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-16"
    ],
    "points": 2.5,
    "questionPage": 8,
    "solutionPages": [
      39,
      40,
      41
    ],
    "sourceBlocks": [],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Contrast the components of IBNR for a claims-made policy and an occurrence policy.",
        "solution": "Occurrence Policy has both pure IBNR + IBUER, CM policy only has IBNER \nOR \nCM has no pure IBNR @ report year end because all claims in the report have be reported (by def.), \ndevelopment is limited to IBNER. Occurrence policies will see development due to both pure IBNR + \nIBNER, since polices can be reported long after they occur.",
        "insight": "More than half of the candidates provided enough components of IBNR for both claims- made and occurrence to get full credit."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Explain why a claims-made policy should cost less than an occurrence policy, provided claim costs are increasing.",
        "solution": "Claims made policy has a much shorter period of time between the coverage trigger and the \nsettlement date- not as much impacted by loss cost increase. \nOR \nOccurrence policies incur liability for claims that occur now but are reported much later so \ninflation/loss trend accumulates on these costs whereas CM policies incur liability for claims \nreported @ today’s cost levels.",
        "insight": "A claims-made policy generally costs less during a period of rising claim costs because its covered reporting window is shorter."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Explain why a change in underlying trends will impact the estimated premium for an occurrence policy more than for a claims-made policy.",
        "solution": "With occurrence policy, claims are covered that are reported much further out into the future. \nThese loss trends will therefore have a greater impact on the losses covered by an occurrence policy \n- more impact of inflation/loss trends   \nOR  \nOccurrence policy can have losses reported much later, trends have leverage on future costs then \ncurrent costs →  ∆ in trend affects occurrence more than CM.",
        "insight": "Occurrence coverage remains exposed to future reporting and settlement trends for longer than claims-made coverage."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Briefly describe the provision that exists to eliminate coverage overlap if an insured switches from an occurrence policy to a claims-made policy, and why an overlap would exist without it.",
        "solution": "Retroactive date= losses only covered by CM policy if they occur after retro date \n0 1 2\n10 L(10,0) L(10,1) L(10,2)\n11 L(11,0) L(11,1) L(11,2)\n12 L(12,0) L(12,1) L(12,2)\nReport Year\nLag\n \nOccurrence policy in 10 would cover losses on shaded diagonal. CM policy in 11, without a retro \ndate would cover entire row=overlap on L (11,1)         \nOR \n \nAppyly retroactive date to the new CM policy to limit coverage to losses that occur after such a date. \nA=occ. Policy covg \nB= CM covg w/o adj    \n    LOG \nyear 0 1 2 3 \n11 A \n   12 B A/B B B \n   13  ↑ A \n   “          (Over Lap)  A \n            (previous years as well if avg covg provided before 2011)",
        "insight": "Identify the retroactive-date provision and explain how it prevents overlapping coverage after a switch to claims-made."
      },
      {
        "id": "e",
        "points": 0.5,
        "prompt": "Explain why there would be a coverage gap if an insured switches from a claims-made policy to an occurrence policy and what an insurer can do to provide coverage.",
        "solution": "Use Extended reported period Endorsement = provides coverage for losses that occurred when CM \ncoverage effective, but reported after expiration of last CM policy.  \nCM policy in 10 covers entire row.  Occurrence policy in 11 covers diagonal = L(11,0) and L (12,1).  \nNo coverage for L(11,1) or L(11,2) or L(12,2). \n0 1 2\n10 L(10,0) L(10,1) L(10,2)\n11 L(11,0) L(11,1) L(11,2)\n12 L(12,0) L(12,1) L(12,2)\nReport Year\nLag\n \nOR  \n \nYear 0 1 2 3 \n11 B B B B \n12 A    \nCovg \nGap \n13  A     \n   A   \n \nPurchase tail coverage to cover during gap",
        "insight": "Explain the claims reporting gap after switching to occurrence coverage and the role of extended reporting coverage."
      }
    ]
  },
  {
    "id": "spring-2013-7",
    "number": 7,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 3,
    "questionPage": 9,
    "solutionPages": [
      42
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary is reviewing workers compensation indemnity loss experience for a rate level indication analysis. Given the following information:"
      },
      {
        "type": "line",
        "text": "• A benefit change having an impact of +5.0% applies to all indemnity losses for accidents occurring after July 1, 2011."
      },
      {
        "type": "line",
        "text": "• A benefit change having an impact of +2.0% applies to indemnity losses on policies written after October 1, 2012."
      },
      {
        "type": "line",
        "text": "• No other benefit changes are expected within the next few years."
      },
      {
        "type": "line",
        "text": "• The annual impact on benefits due to wage inflation has been +2.0% and is expected to continue."
      },
      {
        "type": "line",
        "text": "• The proposed effective date for revised loss costs is July 1, 2013."
      },
      {
        "type": "line",
        "text": "• Policies are annual."
      },
      {
        "type": "line",
        "text": "• Revised loss costs would be in effect for one year."
      },
      {
        "type": "line",
        "text": "• Losses occur uniformly throughout the year."
      },
      {
        "type": "table",
        "title": "Ultimate Losses at Pre-July 2011 Benefit Levels ($000)",
        "headers": [
          "Accident year",
          "Ultimate losses ($000)"
        ],
        "rows": [
          [
            "2010",
            "1,875"
          ],
          [
            "2011",
            "1,875"
          ],
          [
            "2012",
            "2000"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3,
        "prompt": "Calculate the 2010, 2011, and 2012 accident year projected ultimate losses to be used in the rate level indication.",
        "solution": "Proposed effective date 7/1/2013 for annual pols in effect 1 year to avg loss date of 7/1/2014 \n \nAY \n \n2010 \n2011 \n2012 \n \nLoss (000) \n \n1,875 \n1,875 \n2,000 \n \n \n \n \n \n \nTrend \n \n(1.02)\n4 \n(1.02)3 \n(1.02)2 \n \n \n \n \n \nBenefit Changes* \n \n(1.05)(1.02) = 1.071 \n(1.05)(1.02) \n(1.05)(1.02) \n \n \n \n \n \nULT Losses (0001) \n \n2,173.7 \n2,131.0 \n2,228.5 \n \n*since all losses are reported at pre July 2011 benefit levels all years need both the 2% and 5% \nadjustment",
        "insight": "Apply both benefit changes to every accident year because the supplied losses are at pre-July 2011 benefit levels."
      }
    ]
  },
  {
    "id": "spring-2013-8",
    "number": 8,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-8"
    ],
    "points": 3,
    "questionPage": 10,
    "solutionPages": [
      43
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "• All policies are annual and written on January 1."
      },
      {
        "type": "line",
        "text": "• Rate change effective date is January 1, 2013."
      },
      {
        "type": "line",
        "text": "• Rate level is reviewed annually."
      },
      {
        "type": "line",
        "text": "• Underwriting guidelines were revised on January 1, 2011, substantially changing the composition of the book of business."
      },
      {
        "type": "table",
        "title": "Reported Loss and ALAE as of June 30, 2012",
        "headers": [
          "Accident year",
          "Reported loss and ALAE ($)"
        ],
        "rows": [
          [
            "2010",
            "10,000,000"
          ],
          [
            "2011",
            "6,000,000"
          ],
          [
            "2012",
            "1,500,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Selected Reported Loss & ALAE Age-To-Ultimate Factors",
        "headers": [
          "Month",
          "6",
          "12",
          "18",
          "24",
          "30",
          "36",
          "42",
          "48",
          "54",
          "60"
        ],
        "rows": [
          [
            "Factor",
            "6.50",
            "2.00",
            "1.55",
            "1.20",
            "1.12",
            "1.08",
            "1.05",
            "1.02",
            "1.01",
            "1.00"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Loss Trend Data",
        "headers": [
          "Calendar year ending",
          "Frequency",
          "Severity ($)",
          "Pure premium ($)",
          "# of points",
          "Annual frequency exponential fit",
          "Annual severity exponential fit",
          "Annual pure premium exponential fit"
        ],
        "rows": [
          [
            "Sept 2009",
            "0.058",
            "20,355",
            "1,181",
            "12",
            "15.9%",
            "-1.7%",
            "13.9%"
          ],
          [
            "Dec 2009",
            "0.059",
            "20,125",
            "1,187",
            "8",
            "16.0%",
            "-1.7%",
            "14.0%"
          ],
          [
            "Mar 2010",
            "0.062",
            "20,500",
            "1,271",
            "6",
            "4.7%",
            "2.9%",
            "7.7%"
          ],
          [
            "Jun 2010",
            "0.063",
            "21,575",
            "1,359",
            "4",
            "4.1%",
            "2.5%",
            "6.7%"
          ],
          [
            "Sept 2010",
            "0.063",
            21388,
            "1,347",
            "",
            "",
            "",
            ""
          ],
          [
            "Dec 2010",
            "0.065",
            "19,903",
            "1,294",
            "",
            "",
            "",
            ""
          ],
          [
            "Mar 2011",
            "0.078",
            "19,567",
            "1,526",
            "",
            "",
            "",
            ""
          ],
          [
            "Jun 2011",
            "0.078",
            "19,238",
            "1,501",
            "",
            "",
            "",
            ""
          ],
          [
            "Sept 2011",
            "0.079",
            "19,538",
            "1,543",
            "",
            "",
            "",
            ""
          ],
          [
            "Dec 2011",
            "0.082",
            "20,063",
            "1,645",
            "",
            "",
            "",
            ""
          ],
          [
            "Mar 2012",
            "0.081",
            "20,050",
            "1,624",
            "",
            "",
            "",
            ""
          ],
          [
            "Jun 2012",
            "0.082",
            "19,950",
            "1,636",
            "",
            "",
            "",
            ""
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3,
        "prompt": "Calculate the 2010 accident year trended ultimate loss & ALAE to be used in a rate change analysis. Justify any trend selections.",
        "solution": "Use 2-part trend since historical trend is different due to changing book of business. Assume 6-month \nreporting periods for trend period selection. \n Historical trend period = 7/1/2010 - 4/1/1012 = 1.75 \n Projected trend period = 4/1/2012 - 7/1/2013 = 1.25 \n Historical trend selection: freq = 16% sev = -1.7% \nUse 8 point trends tor both frequency and severity, this will account for the change in the book of \nbusiness \nFuture trend selection: freq = 4.1% sev = 2.5% \nUsed 4 point trends for frequency and severity since this includes the period after the mix of business \nchanged and should be indicative of future patterns. \n2010 AY trended Ult Loss + ALAE = 10,000,000 x 1.12 x (1.16 x .983)1.75 x (1.041 x 1.025)1.25 \n                                                                                                                Used 30 month CDF-ULT factor 1.12 \n                                                                                                                                                = $15,282,922",
        "insight": "Select and justify frequency and severity trends separately before projecting 2010 ultimate loss and ALAE."
      }
    ]
  },
  {
    "id": "spring-2013-9",
    "number": 9,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 2.0,
    "questionPage": 11,
    "solutionPages": [
      44
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary develops an overall indicated rate increase of 4.5% using the following assumptions:"
      },
      {
        "type": "line",
        "text": "• All expenses are variable."
      },
      {
        "type": "line",
        "text": "• Total permissible loss ratio = 65%."
      },
      {
        "type": "line",
        "text": "• Profit and contingency provision = 5%."
      },
      {
        "type": "line",
        "text": "The actuary's manager asks that the expenses be split into fixed and variable components as follows:"
      },
      {
        "type": "line",
        "text": "• Fixed = 75% of total expenses."
      },
      {
        "type": "line",
        "text": "• Variable = 25% of total expenses."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Calculate the revised overall rate indication with the new expense split suggested by the actuary's manager.",
        "solution": "Fixed %\n  \nVariable % = .25 (.3) = .075 \n 1.045 \n     Loss ratio \n  \nRevised Indication \n  \n      3.34% Increase",
        "insight": "When there was an error committed, candidates either used the permissible loss ratio as the experience loss ratio or flipped the variable and fixed expense percentages."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly explain why splitting the expenses as described above results in a different indication.",
        "solution": "Splitting expenses into fixed + variable accounts for the fact that certain expenses are a set amount \nfor each risk, regardless of premium size. Depending on ratio of fixed vs variable, indication will \ndiffer due to fixed included on top off equation added to loss ratio. \n \nOR \nAllows fixed expenses to be added in with the loss of ratio and the revised permissible loss ratio to \nbe higher which lowers indication. \nOR \nBecause fixed expenses are not changing with premium they are a set in stone percentage. That’s \nwhy we add them to the LR rather than include it in the permissible ratio.",
        "insight": "The answer was a verbalization of part a of this question."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Identify two reasons an actuary may want to split expenses into fixed and variable components.",
        "solution": "1) Assuming all variable expenses when some are truly fixed will over charge high premium risks and \nunder charge low premium risks. \n \n2) Fixed expenses may be affected by trend, so separating allows us to apply trend factors to get \nmore accurate expense load. \n \nOR",
        "insight": "The most common mistakes on this part was providing the similar responses twice, only defining fixed and variable expenses."
      }
    ]
  },
  {
    "id": "spring-2013-10",
    "number": 10,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-13"
    ],
    "points": 2.25,
    "questionPage": 12,
    "solutionPages": [
      45,
      46
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for a policy:"
      },
      {
        "type": "line",
        "text": "• Annual earned premium = $1,000."
      },
      {
        "type": "line",
        "text": "• New business expected loss ratio = 60%."
      },
      {
        "type": "line",
        "text": "• Losses expected to decrease $25 per year."
      },
      {
        "type": "line",
        "text": "• New business expenses = $420."
      },
      {
        "type": "line",
        "text": "• Renewal business expenses = $350."
      },
      {
        "type": "line",
        "text": "• Probability of first renewal = 85%."
      },
      {
        "type": "line",
        "text": "• Probability of second renewal = 90%."
      },
      {
        "type": "line",
        "text": "• Probability of third renewal = 0%."
      },
      {
        "type": "line",
        "text": "• Assume an annual discount rate of 3%."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Calculate the lifetime value of the expected total profit as a percentage of premium.",
        "solution": "Duration \n \n(1) \nPremium  \n \n(2) \nLoss \n \n(3) \nExpense \n \n(4) \nPersistency \n \n(5) \nCumulative \nPersistency \n(6) \nDiscount \nFactor \n(7)=[ (1) - (2) -(3) ] \nx (5) / (6) \nPV of Profit \nPV of \nPremium \n \n1 \n2 \n3 \n \n$1,000 \n1,000 \n1,000 \n \n$600 \n575 \n550 \n \n420 \n350 \n350 \n \n100% \n85% \n90% \n \n100% \n85% \n76.5% \n \n1.000 \n1.030 \n1.0609 \n \n-20 \n61.89 \n72.11 \n \n1,000 \n825.24 \n721.09 \n       114 2,546.33 \n \n \nProfit/premium = $114 / $2,546.33 = 4.477%",
        "insight": "Include expected premium in the denominator when expressing lifetime profit as a percentage of premium."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Identify two considerations used in the analysis in part a. above that differ from standard actuarial ratemaking techniques.",
        "solution": "i) standard actuarial ratemaking techniques typically do not consider persistency, the likelihood of \nand insured renewing his policy. \nii) Standard actuarial ratemaking techniques only consider premium and losses for the period in \nwhich rates will be in effect, not over the lifetime of the insured with the insurer.",
        "insight": "Identify two ways the lifetime-value analysis differs from a standard one-period rate indication."
      }
    ]
  },
  {
    "id": "spring-2013-11",
    "number": 11,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-9",
      "ratemaking-12"
    ],
    "points": 3.5,
    "questionPage": 13,
    "solutionPages": [
      47,
      48
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company is researching three new rating variables to include in its homeowners risk classification system. The insurer has determined the following information about the existing book of business:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Credit",
          "Exposures",
          "Pure Premium",
          "Competitor's Rating Plan Factor",
          "Base Class"
        ],
        "rows": [
          [
            "Excellent",
            "1,500",
            "$116.67",
            "0.85",
            "No"
          ],
          [
            "Good",
            "2,500",
            "$128.00",
            "1",
            "Yes"
          ],
          [
            "Fair",
            "1,000",
            "$155.00",
            "1.3",
            "No"
          ],
          [
            "Total",
            "5,000",
            "$130.00",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Age of Homeowner",
          "Exposures",
          "Pure Premium",
          "Competitor's Rating Plan Factor",
          "Base Class"
        ],
        "rows": [
          [
            "Under 30 years",
            "800",
            "$150.00",
            "0.7",
            "No"
          ],
          [
            "30 to 40 years",
            "1,200",
            "$116.67",
            "1",
            "Yes"
          ],
          [
            "Over 40 Years",
            "3,000",
            "$130.00",
            "1.2",
            "No"
          ],
          [
            "Total",
            "5,000",
            "$130.00",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Loss Prevention",
          "Exposures",
          "Pure Premium",
          "Competitor's Rating Plan Factor",
          "Base Class"
        ],
        "rows": [
          [
            "Fire Extinguisher",
            "100",
            "$100.00",
            "0.9",
            "No"
          ],
          [
            "Smoke Detector",
            "4,700",
            "$128.72",
            "1",
            "Yes"
          ],
          [
            "None",
            "200",
            "$175.00",
            "1.5",
            "No"
          ],
          [
            "Total",
            "5,000",
            "$130.00",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Credit is determined using the credit score for the primary homeowner."
      },
      {
        "type": "line",
        "text": "• Age of homeowner is determined using the age of the primary homeowner."
      },
      {
        "type": "line",
        "text": "• A homeowner with both a fire extinguisher and smoke detector would be classified with a smoke detector."
      },
      {
        "type": "line",
        "text": "• Full credibility claim standard = 400."
      },
      {
        "type": "line",
        "text": "• The square root rule is used to determine partial credibility."
      },
      {
        "type": "line",
        "text": "• A competitor's rating relativities are used as the credibility complement."
      },
      {
        "type": "line",
        "text": "• Frequency for every risk classification = 10%."
      },
      {
        "type": "line",
        "text": "• Assume that the insurer can implement only one new rating variable at this time."
      },
      {
        "type": "line",
        "text": "• Assume that each variable is independent."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "For each potential rating variable, briefly describe two possible concerns of adding it to a risk classification system.",
        "solution": "Credit score can raise privacy or social concerns and may lack an obvious causal relationship to loss, although it separates pure premiums. Age is outside the insured’s control, and the insurer’s indications differ markedly from the competitor’s factors. Loss prevention devices can be costly to verify and may be misreported; the classification also puts a home with both devices into the smoke-detector class, obscuring the fire-extinguisher effect.",
        "insight": "Candidates needed to provide a brief description along with the characteristic they listed."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Without performing any calculations, recommend and justify which rating variable the insurer should implement within a risk classification system.",
        "solution": "Choose credit score. It separates pure premiums across the three groups (116.67, 128, and 155), has an objective definition, and is comparatively easy to verify and administer. Address applicable legal and privacy concerns before implementation.",
        "insight": "In order to receive full credit, candidates needed to briefly describe at least three reasons to support their choice."
      },
      {
        "id": "c",
        "points": 1.25,
        "prompt": "Develop the indicated credibility weighted rating factors for the variable recommended in part b. above.",
        "solution": "For Excellent, Good, and Fair credit, pure-premium relativities to the $130 overall average are 0.8975, 0.9846, and 1.1923. Expected claim counts are 150, 250, and 100, giving square-root credibilities 61.24%, 79.06%, and 50.00% against a 400-claim standard. Normalize competitor factors by their exposure-weighted average 1.015, giving 0.8374, 0.9852, and 1.2808. Blend each indicated and complement relativity: 0.8742, 0.9847, and 1.2365. Divide by the Good-class result to set the base class to 1.000: Excellent 0.888, Good 1.000, Fair 1.256.",
        "insight": "Calculate the credibility standard and square-root weights, blend indicated factors with competitor complements, then normalize to the base class."
      }
    ]
  },
  {
    "id": "spring-2013-12",
    "number": 12,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-10"
    ],
    "points": 3,
    "questionPage": 14,
    "solutionPages": [
      49
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurer is planning to revise burglar alarm and deductible rating plan factors for its Homeowners program. Given the following generalized linear model output:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Burglar Alarm",
          "GLM Prediction",
          "-2 Standard Errors",
          "+2 Standard Errors",
          "Policies"
        ],
        "rows": [
          [
            "None",
            "1",
            "",
            "",
            "320,000"
          ],
          [
            "Local Alarm",
            "0.98",
            "0.95",
            "1.01",
            "27,500"
          ],
          [
            "Central Reporting",
            "0.86",
            "0.73",
            "0.99",
            "2,500"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Deductible",
          "GLM Prediction",
          "-2 Standard Errors",
          "+2 Standard Errors",
          "Policies"
        ],
        "rows": [
          [
            "$250",
            "1.75",
            "1.6",
            "1.9",
            "2,700"
          ],
          [
            "$500",
            "1.1",
            "1.05",
            "1.15",
            "87,000"
          ],
          [
            "1,000",
            "1",
            "",
            "",
            "150,000"
          ],
          [
            "2,500",
            "0.95",
            "0.9",
            "1",
            "60,000"
          ],
          [
            "5,000",
            "0.85",
            "0.8",
            "0.9",
            "50,100"
          ],
          [
            "7,500",
            "1.25",
            "0.9",
            "1.6",
            "150"
          ],
          [
            "10,000",
            "0.4",
            "0",
            "0.8",
            "50"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3,
        "prompt": "Propose revised burglar alarm and deductible rating plan factors. Document the relevant analysis and rationale to support the proposal.",
        "solution": "Burglar Alarm- Relatively low volume and wide confidence interval for both Local Alarm and Central \nReporting groups. The Local Alarm std errors suggest its not significantly different than the None \ncategory (the confidence interval encompass the relativity for none). Central reporting has very for few \nexposures and large standard errors. I would recommend this variable not be used (1.00 factor for all \ngroups. \n \n \nDeductible : \n250  500  2500  5000  7500  10000 \n1.50  1.000  0.95  0.85  0.75  0.65 \n1.  250 not enough data \n2. 500, 1000, 2500, and 2000: fit very well and sufficient data factor directionally also make sense. Use \nindicated factors. \n3. 7500: reversal should be lower than 5,000 \n10,000: indicated factors are too small, may be due to sparse data judgmentally select 0.65. \n7500: Select the average factors of 5,000 and 10,000",
        "insight": "Another common error was candidate’s often recognized unintuitive output that seemed to be the result of sparse data but yet still proposed to select the predicted factor."
      }
    ],
    "figure": {
      "src": "assets/exam-graphs/spring-2013-q12.png",
      "title": "Burglar alarm and deductible GLM diagnostics",
      "alt": "GLM relativities, standard-error ranges, and policy counts for burglar alarms and deductibles"
    }
  },
  {
    "id": "spring-2013-13",
    "number": 13,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 2,
    "questionPage": 16,
    "solutionPages": [
      50
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following for a large deductible commercial general liability policy:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Item",
          "Value"
        ],
        "rows": [
          [
            "Per occurrence deductible",
            "250,000"
          ],
          [
            "Loss elimination ratio for a $250,000 deductible",
            "80%"
          ],
          [
            "ALAE/ground up loss ratio",
            "10%"
          ],
          [
            "Ground up loss estimate",
            "2,000,000"
          ],
          [
            "Fixed Expenses",
            "100,000"
          ],
          [
            "Variable Expenses as a % of premium",
            "12%"
          ],
          [
            "Underwriting profit as a % of premium",
            "3%"
          ],
          [
            "Deductible processing cost as a % of losses below the deductible",
            "5%"
          ],
          [
            "Credit risk as a % of losses below the deductible",
            "2%"
          ],
          [
            "Additional risk margin as a % of excess loss",
            "8%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The insurer will handle all claims, including those that fall below the deductible."
      },
      {
        "type": "line",
        "text": "• The insurer will make the payments on all claims and will seek reimbursement for amounts below the deductible from the insured."
      },
      {
        "type": "line",
        "text": "• The deductible is for loss only."
      },
      {
        "type": "line",
        "text": "• All ALAE is paid by the insurer."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the premium for the large deductible policy.",
        "solution": "LER\n  \nALAE\n  \nL\n  \nALAE$\n  \nLoss \n  \nFee for handle ded: \n  \nCredit Risk \n  \nRisk Margin \n  \nL + EL + Ded Fee + Credit Risk + Risk Margin + F\n1 - V - Q",
        "insight": "Some common mistakes that were made on this problem: • Forgetting fixed expense is in the numerator."
      }
    ]
  },
  {
    "id": "spring-2013-14",
    "number": 14,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-13"
    ],
    "points": 1.25,
    "questionPage": 17,
    "solutionPages": [
      51
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurer proposes to increase rates by 6.0% where many individual policy impacts will be above 10%. The insurer proposes a capping rule that will restrict premium changes at the policy level to plus or minus 10.0%."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Identify two problems that a capping rule may cause for an insurer.",
        "solution": "1. Insurer will not be charging what they should be to keep the fundamental insurance equation in \nbalance and earn their target underwriting profit. \n \n2. Systems limitations-need to program this rule into computer systems. Can get complicated as to \nwhat gets capped and what doesn’t and how this changes the rating algorithm \n \nOR \n1. May cause need for premium transition  \n2. Insurer may not get all the rate needed  \nOR \n1. Can cause rates to be inadequate  \n2. Can be subject to adverse selection",
        "insight": "To receive full credit, 2 separate ideas were necessary."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Explain why an insurer would propose a capping rule in light of the problems identified in part a. above.",
        "solution": "May have a concern that they will not retain policyholders if they raise rates substantially at \nrenewal-may cause insureds to shop- Also might be regulation reasons-restrictions on the amount \nof rate increase a policyholders can see at each renewal \nOR \nKeep customers from getting shocked at renewal and shopping. \nOR \nAn insurer would propose a capping rule in light of the problems in (a) to maximize the retention. An \ninsurer might be able to get an increase in rate in the future which will make rates adequate again. \nThe more profitable business they retain the more profits they will enjoy in the long run.",
        "insight": "Examples of full credit statements include: • “An insurer’s retention may decline if a rate cap is not adopted.” • “State laws may require a maximum rate change be followed for all policies.”."
      }
    ]
  },
  {
    "id": "spring-2013-15",
    "number": 15,
    "exam": "Spring 2013",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 2.5,
    "questionPage": 18,
    "solutionPages": [
      52
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An employer negotiated a workers compensation retrospective policy with an insurer, effective from January 1, 2011 to December 31, 2011 . The first adjustment of the retrospective premium occurs six months after the end of the policy period and annually thereafter until the tenth adjustment."
      },
      {
        "type": "line",
        "text": "The reported losses during the policy period evaluated as of June 30, 2012 are as follows:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Claim",
          "Reported Losses"
        ],
        "rows": [
          [
            "#1",
            "300,000"
          ],
          [
            "#2",
            "200,000"
          ],
          [
            "#3",
            "100,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "The provisions for this retrospective rating plan are as follows:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Item",
          "Value"
        ],
        "rows": [
          [
            "Minimum retrospective premium ratio",
            "50%"
          ],
          [
            "Maximum retrospective premium ratio",
            "150%"
          ],
          [
            "Loss Conversion Factor",
            "1.2"
          ],
          [
            "Per Accident Loss Limitation",
            "150,000"
          ],
          [
            "Expense Allowance Excluding Tax Multiplier",
            "25%"
          ],
          [
            "Expected Loss Ratio",
            "60%"
          ],
          [
            "Tax Multiplier",
            "1.05"
          ],
          [
            "Net Insurance Charge",
            "44.6%"
          ],
          [
            "Standard Premium",
            "540,000"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the retrospective premium as of June 30, 2012.",
        "solution": "Basic Premium \n  \nRetro Premium \n  \nBefore min/max \nMax Retro Premium is 1.5(590000)\n  \nSo the final retrospective premium is 810,000",
        "insight": "In order to get full credit, candidates would need to calculate the basic premium and retrospective premium correctly, and calculate and apply the maximum/ minimum premium."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Discuss what could cause the retrospective premium in part a. above to change for the insured between June 30, 2012 and the tenth adjustment.",
        "solution": "The retro premium could decrease from the max cap if reports losses develop downward or if \nclaims are closed with no payment.",
        "insight": "The most common error was to provide reasons that the premium could increase, as it was already at the maximum level."
      }
    ]
  },
  {
    "id": "spring-2013-16",
    "number": 16,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-7"
    ],
    "points": 1.75,
    "questionPage": 19,
    "solutionPages": [
      53
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Cumulative Closed Claim Counts",
        "headers": [
          "Accident Half-Year",
          "6 Months",
          "12 Months",
          "18 Months",
          "24 Months",
          "30 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2010-1",
            "4,898",
            "7,349",
            "7,571",
            "7,647",
            "7,647",
            "7,647"
          ],
          [
            "2010-2",
            "5,576",
            "6,786",
            "7,487",
            "7,569",
            "7,569",
            ""
          ],
          [
            "2011-1",
            "6,580",
            "10,215",
            "10,618",
            "10,724",
            "",
            ""
          ],
          [
            "2011-2",
            "7,514",
            "9,564",
            "10,953",
            "",
            "",
            ""
          ],
          [
            "2012-1",
            "8,894",
            "13,807",
            "",
            "",
            "",
            ""
          ],
          [
            "2012-2",
            "10,265",
            "",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Age-to-Age Factors",
        "headers": [
          "Accident Half-Year",
          "6-12",
          "12-18",
          "18-24",
          "24-30",
          "30-36"
        ],
        "rows": [
          [
            "2010-1",
            "1.500",
            "1.030",
            "1.010",
            "1.000",
            "1.000"
          ],
          [
            "2010-2",
            "1.217",
            "1.103",
            "1.011",
            "1.000",
            ""
          ],
          [
            "2011-1",
            "1.552",
            "1.039",
            "1.010",
            "",
            ""
          ],
          [
            "2011-2",
            "1.273",
            "1.145",
            "",
            "",
            ""
          ],
          [
            "2012-1",
            "1.552",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "Assume no closed claim count development after 36 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Estimate the ultimate claim count for accident year 2012.",
        "solution": "There appears to be a seasonal pattern in the age-to-age factors that causes differences between \nXXX-1 and XXX-2 half years. \n \nI would select a separate pattern for each half year (-1 and -2) using simple all year averages. \n \n \n \n \n \nULT count AY 2012 = 13,807(1.035)(1.01)+ 10,265(1.245)(1.124)(1.011)= 28,956",
        "insight": "Some of the common mistakes were as follows: • Developing the 6 month closed claims for the first half of the year instead of the 12 month closed claims."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly discuss two advantages for analyzing this data using accident half-years as opposed to full accident years.",
        "solution": "Allows for recognition of seasonal patterns in claims development \nAllow for better recognition of growing portfolio as average accident date shifts. \nOR  \nADV 1: Since there is a pretty clear seasonality effect based on the ATA values that vary significantly \nby period, using this type of analysis captures these differences to produce a more accurate \ndevelopment projection. \nADV 2: Using shorter time frames such as half year can also help the accuracy of projection during \ntimes of greatly increasing exposure (due to higher granularity). This could be useful here, since the \nclaims closed down the 6 and 12 month columns are increasing noticeably, which may be due in part \nto an exposure increase. \nOR \n1. Because of the developmental seasonality it helps to pick different patterns for the different half \nyears’ \n2. The counts appear to be increasing at a decent rate. When counts are increasing like this it could \nmean an increase in exposures. Splitting the years into half-years better deals with the changing \naverage date of loss that accompanies rapidly increasing exposures.  \n \n \n \n 6-12 12-\n18 \n18-\n24 \n24-\n30 \n30-36 36-\nvlt \nSel (-1) \nSel (-2) \n1.535 \n1.245 \n1.035 \n1.124 \n1.010 \n1.011 \n1.000 \n1.000 \n1.000 \n1.000 \n1.000 \n1.000",
        "insight": "A common mistake was to misinterpret the question as referring to development age (6, 12, 18, etc vs 12, 24, 36, etc)."
      }
    ]
  },
  {
    "id": "spring-2013-17",
    "number": 17,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-12"
    ],
    "points": 1.25,
    "questionPage": 20,
    "solutionPages": [
      54
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following information is available for a self-insured entity:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Case Outstanding",
          "Industry Reported CDF to Ultimate",
          "Industry Paid CDF to Ultimate"
        ],
        "rows": [
          [
            "2010",
            "$30",
            "1.005",
            "1.105"
          ],
          [
            "2011",
            "$60",
            "1.035",
            "1.235"
          ],
          [
            "2012",
            "$110",
            "1.120",
            "1.560"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Using a case outstanding development technique, estimate the unpaid claims for accident year 2012 as of December 31, 2012.",
        "solution": "For accident year 2012, infer the case outstanding development factor from the industry factors: 1 + [(1.120 − 1) × 1.560/(1.560 − 1.120)] = 1.425. Apply it to $110 of case outstanding: unpaid claims = $110 × 1.425 = $156.75 (in the question’s units).",
        "insight": "The most common error was providing IBNR instead of total unpaid claims."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Identify two limitations to the technique used in part a. above.",
        "solution": "1) Industry benchmark CDF often prove to be inaccurate for a particular insurer \n 2) Analysis can be distorted by large losses in case outstanding \n \nOR \n \nIndustry benchmarks aren’t accurate or don’t apply to this self insured entity \n- Paid CDFs might be highly leveraged→ subject to inaccurate estimates",
        "insight": "The other two limitations (large loss and leveraged) were not very common."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly describe a situation when this technique is particularly useful.",
        "solution": "This technique is useful when no other technique is available because the only information the self-\ninsured has is case O/S.",
        "insight": "Describe a setting where case outstanding development is useful; merely saying the insurer has limited data is insufficient."
      }
    ]
  },
  {
    "id": "spring-2013-18",
    "number": 18,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-9",
      "reserving-10"
    ],
    "points": 2.0,
    "questionPage": 21,
    "solutionPages": [
      55,
      56
    ],
    "sourceBlocks": [],
    "parts": [
      {
        "id": "a",
        "points": 0.25,
        "prompt": "Briefly explain the key assumption of the Bornhuetter-Ferguson method.",
        "solution": "Key assumption: Losses reported (paid) to date do not tell you anything about the losses that are yet \nto be reported (paid) \n(Unpaid) Unreported losses are better estimated based on an a priori initial expected ultimate. \n \nOR \n \nAssumes the actuary’s a priori estimate is a better indicator of unpaid/unreported claims than \nexperience to date",
        "insight": "Those that didn’t receive full credit typically lost points because they didn't differentiate between total claim versus unreported/unpaid claim."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly explain how the Bornhuetter-Ferguson method can be considered a credibility-weighted method and how the credibility is calculated.",
        "solution": "The method is considered a cred weighted method of the Development Method and Initial \nExpected.  \n \nZ (Dev Method) + (1-Z) Initial Expected Ultimate \n \nZ      \n \n \nOR \nCred weighting of Development and Expected  Claim techniques, The weight is based on % paid (or \n% reptd.)  \n I.E:  B-F Ult= % paid * Dev Ult + (1 - % paid) x Exp Cl. Ult",
        "insight": "Those that didn’t receive full credit were often mentioning the credibility calculation but were not mentioning to which method this factor would apply."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly describe one situation where the credibility-weighted assumption underlying the Bornhuetter-Ferguson method may not apply.",
        "solution": "On a pattern that goes above 100% reported or paid You’ll see this on lines with salvage + \nsubrogation or short tailed lines with strong case reserves. The % reported amount (2) cannot go \nabove 1 in credibility theory. Therefore, in this situation, in theory, the method shouldn’t be used. \nOR \n Would not apply if % paid is greater than 100% (Violates credibility definition)",
        "insight": "A common mistake for candidates was that they were mentioning situation where BF method was not appropriate instead of referring to a situation where credibility weighting assumption itself of BF method was not appropriate."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Explain whether the paid or reported Bornhuetter-Ferguson method is more responsive in a situation where claim ratios are increasing.",
        "solution": "The reported method would be more responsive because the development method is responsive to \nincreasing claim ratios, and the reported BF method will give more weight to the development \nmethod early on since % Rpt is often greater than % paid. \nOR \nReptd is more responsive, since % rptd is usually greater than % paid, thereby putting more weight \non the developed emerging exp. And less on the a priori estimate",
        "insight": "Compare paid and reported Bornhuetter-Ferguson responsiveness when claim ratios increase; link the conclusion to observed emergence."
      },
      {
        "id": "e",
        "points": 0.5,
        "prompt": "Compare and contrast the Cape Cod method and Bornhuetter-Ferguson method by providing one similarity and one difference.",
        "solution": "Similarity- CC (Cape Cod) and BF methods both assume the unreported amount should be based off \nof another estimate and not developed as in the development technique. In other words, they both \nassume that experience to date in an AY doesn’t tell you everything about future development. \nDifference: The two methods calculated the “initial expected” ultimate differently. The BF method \nrelies on an a priori selected loss ratio and the CC method calculates the LR (or PP) using the losses \nto date divided by the “used up” premium. Therefore the CC method is more responsive. \nOR \nBoth methods are cred weighting of Dev &Exp Claims but B-F initial exp loss ratio is an a priori \nestimate, while Cape Cod determines IELR using reported losses & used-up premium",
        "insight": "State one shared expected-loss feature and one distinct feature of Cape Cod and Bornhuetter-Ferguson."
      }
    ]
  },
  {
    "id": "spring-2013-19",
    "number": 19,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 3.25,
    "questionPage": 22,
    "solutionPages": [
      57,
      58,
      59,
      60
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Reported Claim Counts and Severities as of December 31, 2012",
        "headers": [
          "Accident year",
          "Claim counts",
          "Severity ($)",
          "Payroll ($000)"
        ],
        "rows": [
          [
            "2010",
            "1,549",
            "22,418",
            "63,438"
          ],
          [
            "2011",
            "1,455",
            "18,730",
            "62,893"
          ],
          [
            "2012",
            "1,023",
            "12,501",
            "67,005"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reporting Patterns",
        "headers": [
          "As of months",
          "Claim counts",
          "Severities"
        ],
        "rows": [
          [
            "12",
            "85.0%",
            "43.0%"
          ],
          [
            "24",
            "95.0%",
            "67.0%"
          ],
          [
            "36",
            "98.0%",
            "83.0%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The reported claim counts for accident year 2012 are unusually low due to a temporary slowdown of claims being opened."
      },
      {
        "type": "line",
        "text": "• Annual frequency trend = -2%."
      },
      {
        "type": "line",
        "text": "• Annual severity trend = +5%."
      },
      {
        "type": "line",
        "text": "• Annual payroll trend= +4%."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3.25,
        "prompt": "Use an appropriate frequency-severity technique to estimate the IBNR for accident year 2012 at December 31, 2012 and justify all selections.",
        "solution": "Because 2012 frequency is off, severity is probably also impacted (smaller claims open faster), so 2012 \nwill not be used in the calculation.  \n \n Counts  CDF  Trend  Trend +Dev counts (a) \n2010 1549  1/.98  \n   1518.02 \n2011 1455  1/.95  .98  1500.95 \n  \n Sev  CDF  Trend  Trend+ Dev sev (b) \n2010 22418  1/.83  \n   29778.13 \n2011 18730  1/.67  1.05  29352.99 \n \nExposure Trend   Trended Exp (c)  \n63438  \n  = 68614.54 \n62893  (1.04)  = 65408.72 \nTrended PP \n  \n2010 658.81 \n2011 673.57 \nSel avg 666.19 \nULT 2012 \n = Sel PP x payroll($100)  \n 666.19 x 67005=44638060.95 \n IBNR= 44,638,060.95 – (1023) x 12501 \n   = $31,849,537.95 \nOR \n \nULT claims  Trended      Trended Payroll \n1549/0.98  \n  = 1642    63,438 x \n  \n1455/0.95  \n  =1561    \n  \n1023/0.85  \n  =1204    \n  \nFreq trend= Claim Trend / Payroll Trend = 0.98 = 1.0192 / 1.04 \n2010 Freq = 1642/68,615= 0.0239 \n2011 Freq= 1561/65,409= 0.0239 \n     = Sel 0.0239 \nULT trended Severity \n22,418/ 0.83 \n  \n   →All Average Sel= 29,401 \n18,730/0.67\n    \n12,501/0.43\n  \n \n0.0239\n  \n 47,803,335\n  \nSelected Frequency based on 2010 + 2011 because 2012 had a slowdown in claim counts, making it \nproject an inaccurately low ULT claim count. \nSeverity is still reliable because it is an average number i.e. volume is controlled for Used an all years \naverage for stability. \n \nOR  \n Ultimate Claims   Trended Exposure Frequency \n2010 1549 / .98 = 1580  63,438 x 1.042  2.30% \n2011 1455 / .95 = 1532  62,893 x 1.04  2.34% \n  \n \n Trended Frequencies \n2010 .023 (.98)2 = .0221 \n2011 .0234(.98) = .0229 \nSimple Average = .0225  = Selected Freq \n Ultimate Severity  Trended Ut sev  \n2010 \n    29,779 \n2011 \n    29,353 \n2012 \n    29,072 \n      Simple average= 29,401 \nUltimate Claims= 29,401 x .0225 x 67,005 \n     = 44,325,315 \nIBNR= 44,325,315 - 1,023 ∙ 12,501= 31, 536,792 \nSince AY 2012 claim counts were subject to an temporary slowdown they were removed from the \ncalculation of the ultimate frequency because using the current report patterns would severely \nunderestimate ultimate freq. for that year. Severity was assumed to be unaffected since there was no \nmention of a change in claim department methodology, just a slowdown in opening all claims.",
        "insight": "Develop frequency and severity separately, select appropriate trend and development assumptions, and subtract reported claims to get IBNR."
      }
    ]
  },
  {
    "id": "spring-2013-20",
    "number": 20,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-6",
      "reserving-13"
    ],
    "points": 3,
    "questionPage": 23,
    "solutionPages": [
      61,
      62
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for a line of business:"
      },
      {
        "type": "line",
        "text": "• Assume no reported claims development past 36 months."
      },
      {
        "type": "line",
        "text": "• Annual claim severity trend = +5%."
      },
      {
        "type": "line",
        "text": "• Paid claim development method ultimate loss for accident year 2012 = $10,275,000."
      },
      {
        "type": "line",
        "text": "• Reported claim development method ultimate loss for accident year 2012 = $9,650,000."
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims ($000s)",
        "headers": [
          "Accident year",
          "12 months",
          "24 months",
          "36 months"
        ],
        "rows": [
          [
            "2010",
            "2,100",
            "6,410",
            "8,300"
          ],
          [
            "2011",
            "2,210",
            "7,000",
            ""
          ],
          [
            "2012",
            "2,550",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Closed Claim Counts",
        "headers": [
          "Accident year",
          "12 months",
          "24 months",
          "36 months"
        ],
        "rows": [
          [
            "2010",
            "35",
            "75",
            "99"
          ],
          [
            "2011",
            "35",
            "80",
            ""
          ],
          [
            "2012",
            "40",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($000s)",
        "headers": [
          "Accident year",
          "12 months",
          "24 months",
          "36 months"
        ],
        "rows": [
          [
            "2010",
            "5,300",
            "7,810",
            "8,500"
          ],
          [
            "2011",
            "5,500",
            "7,130",
            ""
          ],
          [
            "2012",
            "6,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claim Counts",
        "headers": [
          "Accident year",
          "12 months",
          "24 months",
          "36 months"
        ],
        "rows": [
          [
            "2010",
            "80",
            "98",
            "100"
          ],
          [
            "2011",
            "79",
            "97",
            ""
          ],
          [
            "2012",
            "82",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Outstanding Claims ($000s)",
        "headers": [
          "Accident year",
          "12 months",
          "24 months",
          "36 months"
        ],
        "rows": [
          [
            "2010",
            "3,200",
            "1,400",
            "$200"
          ],
          [
            "2011",
            "3,290",
            "1,130",
            ""
          ],
          [
            "2012",
            "3,450",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Outstanding Claim Counts",
        "headers": [
          "Accident year",
          "12 months",
          "24 months",
          "36 months"
        ],
        "rows": [
          [
            "2010",
            "45",
            "23",
            "1"
          ],
          [
            "2011",
            "44",
            "17",
            ""
          ],
          [
            "2012",
            "42",
            "",
            ""
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3,
        "prompt": "Fully discuss the considerations in deciding between using the paid or the reported claim development method to estimate ultimate claims for this line of business, and recommend an ultimate loss estimate for accident year 2012.",
        "solution": "Check avg. paid severities: \n \nAY  12  24  36 \n10 1.05 60    1.024 85.47  83.84 \n11 1.01 63.14    87.5 \n12  63.75   ↘= 7000/80 \n    Avg pd appears to be trending at rate less than 5% For most recent  \n     Could indicated change in settlement practice could be closing  \n     more small claims. \nCheck Avg            \n Case Outstanding:  \n   Avg Case out = (\n) \nAY  12  24  36 \n10 1.05 71.11 1.09 60.87  200 \n11 1.02 74.77  66.47 \n12  76.19 \nAvg. case outstanding increased by less than 5% per year at 12 months and greater than 5% per year at \n24 months. Could indicate a change in type of claim being closed at the pd. \n \nLook at closed to reported of ratio: Closed Ct/Rep Ct \nAY 12 24 36 \n10 .4375 .7653 .99↘ \n11 .4430 .8247  =99/100 \n12 .4878 \n \nClosed to report count ratio appears to be increasingly, indicating a speed up in claim settlement. Since \nthere is a speed up in settlement and avg. pd severity is trending at rate lower than 5%, it appears the \ninsurer is closing more small claims quickly. \nAvg rep clm \nAy  12  24  36 \n10 1.05 66.25 1.05 79.69  85 \n11 1.05 69.62  83.81 \n12  73.17 \nAvg. Rep. CLM increasing at steady rate of 5%. \nDue to the diagnostics and explanations above, I would select the reported dev method ultimate of \n$9.65 mil.",
        "insight": "They should have noticed the increase in paid settlement and that reported trends matched the 5% severity."
      }
    ]
  },
  {
    "id": "spring-2013-21",
    "number": 21,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-8"
    ],
    "points": 2.0,
    "questionPage": 24,
    "solutionPages": [
      63,
      64,
      65
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of the December 31, 2011 actuarial valuation:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Ultimate Claims",
          "Reported Claims",
          "Paid Claims"
        ],
        "rows": [
          [
            "2010",
            "1,200",
            "$280",
            "$125"
          ],
          [
            "2011",
            "1,300",
            "$125",
            "$75"
          ],
          [
            "Total",
            "2,500",
            "$405",
            "$200"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Age in Months",
          "Cumulative Percent Reported",
          "Cumulative Percent Paid"
        ],
        "rows": [
          [
            "36",
            "40%",
            "12%"
          ],
          [
            "24",
            "25%",
            "10%"
          ],
          [
            "12",
            "10%",
            "5%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2012:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Reported Claims",
          "Paid Claims"
        ],
        "rows": [
          [
            "2010",
            "$470",
            "$200"
          ],
          [
            "2011",
            "$320",
            "$175"
          ],
          [
            "Total",
            "$790",
            "$375"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Based on the 2011 actuarial valuation, calculate expected paid claims for each accident year during calendar year 2012.",
        "solution": "Ultimate-Paid  % unpaid  developed in CY 2012 \n  2010  1075   90%   \n  \n  2011  1225   95%   \n  \n \nOR \n \nYr \n2010 \n2011 \nUlt Paid \n1200 \n1300 \n(1) \n% pd \n.1 \n.05 \n(~) \n%pd age+12 \n.12 \n.1 \n(3) \n% pd in age \n.02 \n.05 \n(3)-(2) \nEXP paid in 2012 \n24 \n65 \n89 \n \n \nOR  \n Expected paid claims in CR 2012 \n• AY 2010= 125 (\n \n• AY 2011= 75(",
        "insight": "Calculate expected paid emergence for each accident year using the prior valuation and paid development factors."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Based on the 2011 actuarial valuation, calculate expected reported claims for each accident year during calendar year 2012.",
        "solution": "Ultimate-Reported  % unreported    \n     2010  920    .75   \n \n     2011  1175    .9   \n  \nOR \nYR          ULT rpd     %rpd     % rpd age+12     %rpd in age     exp 2012      \n2010     1200          .25          .4                           .15                    180               \n2011     1300          .1          .25                           .15                    195               \n(1)            (2)         (3)                           (3)-(2)              375              \n \nOR  \n Exp. Rptd claim in CY 2012 \n• AY 2010 = \n  \n• AY 2011=",
        "insight": "Calculate expected reported emergence for each accident year using the prior valuation and reported development factors."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Discuss a scenario that explains any differences between actual and expected paid and reported claims as of December 31, 2012.",
        "solution": "As of 12/3//12:  \n Reported      Paid \n 280+184=464      125+23.89=148.89 \n 125+195.83=320.83                         139.47 \n  =Close to actual     = much lower than actual \n The higher actual paid can be a result of speed up in the claim settlement. \nOR \nIncrease in rate of claim settlement. The reported losses tracked quite close to expected, while the \npaid losses were much larger than expected. \nOR \nReported claims expected are less than actual, so are paid claims. They could be understated due to \nchange in the mix of business towards business with worse claim experience.",
        "insight": "Use the difference between actual and expected paid and reported emergence to identify a plausible claim-process change."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Using the scenario discussed in part c. above, justify the selection of a reserving technique for estimating ultimate claims as of December 31 , 2012.",
        "solution": "The actuary can use the reported development technique because the projected vs. actual \ndevelopment was very close, and it is not as affected by the speed up in claim settlement as the paid \nclaim dev. method. \nOR \n I would use a reported dev. technique as it is not affected by decrease in settlement lag. \nOR \nI would suggest using the expected claims technique because you can judgmentally adjust the \nexpected claims ration up due to the shift.",
        "insight": "No credit was given for simply stating a reserve technique, as the question required the candidate to justify the technique."
      }
    ]
  },
  {
    "id": "spring-2013-22",
    "number": 22,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 3,
    "questionPage": 25,
    "solutionPages": [
      66
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary is assisting a manufacturing company in reserving its self-insured workers compensation program as of December 31, 2012. The program began on January 1, 1998 and has undergone the following changes in recent years:"
      },
      {
        "type": "line",
        "text": "• On January 1, 2007, the per-occurrence retention was increased from $300,000 to $750,000."
      },
      {
        "type": "line",
        "text": "• On January 1, 2010, the company automated some of its production process. As a result, the"
      },
      {
        "type": "line",
        "text": "company replaced a significant portion of its assembly-line staff with sales staff."
      },
      {
        "type": "line",
        "text": "The actuary would like to use the following methods and data to estimate ultimate claims as of December 31, 2012:"
      },
      {
        "type": "line",
        "text": "• Development method using company-specific claim development triangles."
      },
      {
        "type": "line",
        "text": "• Expected claims method using payroll as exposure base and the average of the reported and"
      },
      {
        "type": "line",
        "text": "paid claim development projections as initial estimates of ultimate claims."
      },
      {
        "type": "line",
        "text": "• Frequency-severity method using company-specific claim count development triangles."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Discuss necessary adjustments the actuary should make to the company-specific data to use the development method.",
        "solution": "If possible, the actuary should restate the historical triangles to a $300k retention (one triangle) and \nto a $750K retention (a separate triangle) in order to remove the distortion that the change in \nretention would otherwise create. The actuary should then review these triangles separately and \nselect LDFs to be applied to the appropriate retention by year. \nOr \nThe actuary should adjust the claims data to be used in development method since the retention \nwas increased from $300,000 to $750,000. The increase in retention will increase the claims \nreported and paid. Therefore, claims data before 2007 should be adjusted to current level before \napplying the development method. In addition, the change from assembly-line to sales will have an \nimpact to the claims. Less injury will be expected when the company automated some of its \nproduction process. Hence, claims data before 2010 should be adjusted.",
        "insight": "For a self-insured client, adjust claims and exposure data directly; insurer premium on-leveling is unavailable."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Briefly describe four adjustments the actuary should consider making to historical claims and exposures to put them on current levels in the expected claims method.",
        "solution": "-Adjust the losses so they are on the 750,000 retention level by using ILFS. \n-Adjust losses to account for the change in workers. Sales staff will have fewer losses (injuries) than \nassembly staff \n-Adjust the exposures to account for inflation. \n-Adjust the losses to account for benefit changes related to inflation. As the workers get raises, the \nlosses will increase. \n \nOR \n 1. Cap the historical claims, select large loss load \n       2. Apply loss trend \n       3. Apply benefit level change adjustment \n       4. Apply exposure trend",
        "insight": "Again, some candidates said premium should be adjusted to current rate level; however the actuary in the question would not have access to premium information for the self-insured layer."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "Describe two diagnostic tests the actuary should perform before using the frequency-severity method.",
        "solution": "Look at the avg severity amount → claims/closed counts. The change in per occurrence retention \ncould have an effect on severity. \n-Look at frequent triangle → claims/exposures.  Change in production could have significant \nincreases on frequency.  \nOR \n      1. Paid to reported claim counts to determine if there were any changes in claim settlement rate. \n2.  Average case outstanding per open claim to see if there were any changes in case outstanding \nadequacy.",
        "insight": "Some candidates discussed the need to review the data for changes in frequency and severity, but failed to identify diagnostics that could be used to test for changes."
      }
    ]
  },
  {
    "id": "spring-2013-23",
    "number": 23,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-13"
    ],
    "points": 2.0,
    "questionPage": 26,
    "solutionPages": [
      67
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Unadjusted Case Outstanding Claims ($000s)",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2010",
            "10,300",
            "21,300",
            "37,500"
          ],
          [
            "2011",
            "11,400",
            "29,400",
            ""
          ],
          [
            "2012",
            "15,600",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Open Claim Counts",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2010",
            "1,030",
            "1,420",
            "1,500"
          ],
          [
            "2011",
            "1,140",
            "1,470",
            ""
          ],
          [
            "2012",
            "1,200",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Unadjusted Cumulative Paid Claims ($000s)",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2010",
            "2,575",
            "15,795",
            "30,000"
          ],
          [
            "2011",
            "2,850",
            "18,200",
            ""
          ],
          [
            "2012",
            "3,900",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "Selected annual severity trend = +5%"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the adjusted cumulative reported claim triangle using the Berquist-Sherman case outstanding adjustment technique.",
        "solution": "Avg case = Case/Open     13/1.05=12.38 \n Adj Avg Case ($000) \n   12  24  36 \n 2010  11.791  19.048  25  \n 2011  12.381  20  \n 2012  12 \n ($000) \n  \n   12  24  36 \n 2010  14,720.12 43,022.62 67,500 \n 2011  16,964.29 47,600 \n 2012  19,500",
        "insight": "Adjust the case outstanding triangle before developing reported losses; show the revised cumulative reported amounts."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Discuss whether IBNR estimated using the Berquist-Sherman case outstanding adjustment technique should be higher or lower than IBNR estimated using an unadjusted reported claim development technique.",
        "solution": "Original Avg Case \n 12  24 36 \n 10  15 25 \n 10  20 \n 13 \nAdj Avg Case amounts are higher than original avg case amounts so adjusted case will ↑resulting in \n↑reported amounts in earlier years, and lower LDFS, thus less IBNR. Unadjusted would overstate so \nadjusted will be lower than unadj. \nOR \nWhether the B/S case OS method produces higher or lower IBNR depends on how the trend in case \nreserves relates to the selected severity trends. If the case trend is higher, the adjusted amount will \nbe higher in the B/S than development method. This will lead to lower CDFs, and lower IBNR \namounts. Vice Versa if the trend in case OS is lower than the select severity trend.",
        "insight": "Many candidate provided answers that were factually correct but did not fully explain the issue at hand and/or the mechanics of the adjustment."
      }
    ]
  },
  {
    "id": "spring-2013-24",
    "number": 24,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-14"
    ],
    "points": 2.5,
    "questionPage": 27,
    "solutionPages": [
      68
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Paid Claims Gross of Salvage & Subrogation",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months",
          "48 Months"
        ],
        "rows": [
          [
            "2009",
            "2000",
            "2,400",
            "2,500",
            "2,500"
          ],
          [
            "2010",
            "2,100",
            "2,300",
            "2,400",
            ""
          ],
          [
            "2011",
            "2,100",
            "2,400",
            "",
            ""
          ],
          [
            "2012",
            "2,500",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Paid Claims Gross of Salvage & Subrogation",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months",
          "48 Months"
        ],
        "rows": [
          [
            "2009",
            "$98",
            "$166",
            "$250",
            "$250"
          ],
          [
            "2010",
            "$105",
            "$163",
            "$240",
            ""
          ],
          [
            "2011",
            "$107",
            "$170",
            "",
            ""
          ],
          [
            "2012",
            "$75",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Assume no development after age 48."
      },
      {
        "type": "line",
        "text": "• Ultimate claims for accident year 2012 = $2,985."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Using a development approach, estimate the ultimate salvage and subrogation for accident year 2012.",
        "solution": "Paid S&S ATA \nSelect all year weighted avg. \n12-24  24-36  36-48  48-ULT \n1.6097  1.4894  1.000  1.000",
        "insight": "In limited cases, there were mathematical errors or no final calculation of the ultimate paid S&S."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Using a ratio approach, estimate the ultimate salvage and subrogation for accident year 2012.",
        "solution": "Ratio SS/Paid \n \n12 24 36 48 ULT ratio \n09 0.049 0.069 0.1 0.1 0.1   \n10 0.05 0.071 0.1  0.1 \n11 0.051 0.071   0.071(1.429) = 0.10 \n12 0.03    0.03(1.4701)(1.429)= 0.06 \n      → select 0.1 \nSelect all yr weighted avg of ratios: \n12-24  24-36  36-48 \n1.407  1.429  1 \nAY2012 S&S ult= (2985)(0.1)=298.5",
        "insight": "Very few candidates selected an ultimate ratio for accident year 2012 that considered ultimate ratios from prior years."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly discuss which approach, the development or ratio approach, to select in recommending an ultimate salvage and subrogation estimate for accident year 2012.",
        "solution": "Ratio approach provides more stability, less subject to leveraging at early maturities",
        "insight": "Some of the common mistakes were not selecting a method by saying it does not matter and therefore not having a reason, or not giving a valid reason."
      }
    ]
  },
  {
    "id": "spring-2013-25",
    "number": 25,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-17"
    ],
    "points": 2.25,
    "questionPage": 28,
    "solutionPages": [
      69,
      70
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for a portfolio written on claims-made policy form:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Paid ULAE",
          "Paid Claims",
          "Year-End Outstanding Case Reserve",
          "Year-End Outstanding IBNR"
        ],
        "rows": [
          [
            "2009",
            "$409",
            "3,625",
            "7,575",
            "6,250"
          ],
          [
            "2010",
            "$476",
            "5,875",
            "10,450",
            "7,500"
          ],
          [
            "2011",
            "$614",
            "7,950",
            "13,750",
            "8,750"
          ],
          [
            "2012",
            "$761",
            "10,375",
            "16,500",
            "10,625"
          ]
        ]
      },
      {
        "type": "line",
        "text": "Claim amounts include ALAE."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate a ULAE provision as of December 31, 2012 using the Kittel adjustment.",
        "solution": "CY  PD ULAE  Pd claims  Reported claims  Ratio \n09  409   3625   17450    .0388 \n10  476   5875   23825    .0320 \n11  614   7950   30450    .0320 \n12  761   10,375   37,500    .0318 \n  2260   27,825   109,225   .0330 \n          Selected CY 09-12 Avg \nUnpaid ULAE= .0330 (50% (16500 +10625)= 447.6 \n1) Pd ULAE/Avg (Pd claims and reported claims)  \n2) Pd claims + case ols +IBNER \n   ↘ (assuming “year-end O/S IBNR” = IBNER) \nOR \n \n  Pd ULAE  Pd  Reported = Paid + ∆ case + IBNR \n 09      5875+(10450-7575)+(7500-6250)= \n 10 476   5875  10000 \n 11 614   7950  12500 \n 12  761   10375  15000 \n \n ULAE / Avg(paid, reported) \n10 476/((5875+10000)/2)   =.05997 \n11      =.06000 \n12      =.06000 \n      .0600 avg select \n.06 x .5 x 16500 + .06 x 10625 = 1132.5 \n   IBNR",
        "insight": "Apply the Kittel ratio to the appropriate year-end case and IBNR components, then calculate the total ULAE provision."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Explain the purpose of the Kittel adjustment.",
        "solution": "It accounts for ULAE on reported but not yet paid claims. It is a adjustment to the classical \ntechnique. It is useful for cases like this where there is growing business + it is not steady state.",
        "insight": "Candidates receiving partial credit failed to mention that the adjustment is intended to improve upon the classical method in the case of growing lines of business."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly explain a shortcoming of the classical method that is not addressed by the Kittel adjustment.",
        "solution": "A short coming of the classical method is the assumption that 50% of the ULAE is incurred when \nclaims are opened and 50% of the ULAE is closed. This is not a addressed by the kittel method. The \nproblem is that the 50%-50% assumption is inflexible and doesn’t distinguish between the cost of \nclosing a claim and maintaining a claim. \nOR \n When inflation affects paid ULAE and claims differently  \nOR  \n Both assume 50% of ULAE is paid on opening and 50% on closing. This assuming is not always true.",
        "insight": "Identify a weakness of the classical ULAE method that the Kittel growth adjustment does not correct."
      }
    ]
  },
  {
    "id": "spring-2013-26",
    "number": 26,
    "exam": "Spring 2013",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 2.0,
    "questionPage": 29,
    "solutionPages": [
      71
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary is conducting a reserve review for a line of business and calculates the following:"
      },
      {
        "type": "table",
        "title": "Claims and Projected Ultimate Claims",
        "headers": [
          "Accident year",
          "Reported claims as of December 31, 2012",
          "Paid claims as of December 31, 2012",
          "Reported development ultimate",
          "Paid development ultimate",
          "Reported Bornhuetter–Ferguson ultimate",
          "Paid Bornhuetter–Ferguson ultimate",
          "Claim count and severity ultimate",
          "Disposal rate ultimate"
        ],
        "rows": [
          [
            "2009",
            "76,700",
            "75,800",
            "77,501",
            "77,483",
            "77,758",
            "78,022",
            "77,474",
            "77,817"
          ],
          [
            "2010",
            "104,000",
            "98,100",
            "113,782",
            "113,828",
            "113,374",
            "113,165",
            "112,669",
            "106,363"
          ],
          [
            "2011",
            "107,200",
            "55,100",
            "130,379",
            "94,770",
            "127,393",
            "102,646",
            "132,743",
            "107,447"
          ],
          [
            "2012",
            "58,100",
            "20,400",
            "120,014",
            "89,600",
            "121,397",
            "115,159",
            "123,383",
            "93,012"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Suggest a reason for the disparity between the estimates of ultimate claims for accident year 2011 and propose diagnostic tests that would verify the assumption.",
        "solution": "Perhaps case outstanding adequacy was strengthened for AY 2011, with no change in payment \npattern. Thus the DFM (reported) is applying too-high DFs to reported losses and coming up with \ntoo high estimate of ultimate. If severity in the F-S technique includes reported losses’ severity, then \nthis will similarly produce a high result. \n \nTo verify produce triangles of average paid and average case OS. Look for a jump between 2010 and \n2011 @24 months that is larger than the average increase in pd avg down the columns. \nOR \nA slowdown in the settlement pattern could have caused the differences as it would have applied \nthe historic CDF’s to a lower paid amount at early maturities.  \n-This could be tested by looking at the paid-to-reported claims ratios and the closed count-to \nreported count if these ratios decrease for a given maturity for new accident years, this would \nsupport the reason.",
        "insight": "In order to receive full credit, candidates had to provide more than one test (some candidates only provided one test)."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Determine what steps the actuary should take to determine the most appropriate methodology to project ultimate claims for accident year 2011.",
        "solution": "Discuss these questions with claims dept manager, and examine payment patterns to make sure  \n they are consistent. If so, use a paid DFM or BF. \nOR \nThe actuary should confirm there was a change to the settlement pattern and check if there were \nchanges to the case strength. If there were changes the data could be adjusted using the Berquist \nSherman technique the actuary should talk to the claims department to get insight into the process.",
        "insight": "Full credit was awarded if the candidate indicated how their findings or confirmation steps will lead to a solution."
      }
    ]
  }
];

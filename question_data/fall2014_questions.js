// Transcribed from the official Fall 2014 exam PDF; point grid checked against the CBT workbook.
window.FALL_2014_QUESTIONS = [
  {
    "id": "fall-2014-1",
    "number": 1,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-4"
    ],
    "points": 2.0,
    "questionPage": 4,
    "solutionPages": [
      30,
      31,
      32,
      33,
      34
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "In an attempt to improve poor workers compensation underwriting results, an insurance company is considering changing its exposure base from number of employees to number of hours worked."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Identify two criteria of a good exposure base.",
        "solution": "Proportional to Loss \nPractical",
        "insight": "Candidates needed to identify 2 of 3 criteria of good exposure base."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly discuss whether this change in exposure base is appropriate for each of the criteria from part a. above.",
        "solution": "[Practical] Number of hours worked is easy to obtain but is hard to be verified compared to \nnumber of employees. Number of hours is more subjected to manipulation. \n[Historical Precedence] Number of hours worked is also not used before in the company \ntherefore may be costly to change rating algorithm in IT system and may cause large premium \nswings with the new exposure base. \nTherefore suggest that the chg is not appropriate due to # of hrs worked hard to be verified and \nno historical precedence",
        "insight": "Candidates needed to evaluate the appropriateness of the change in exposure base from number of employees to number of hours worked."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly describe the impact the exposure base change could have on frequency.",
        "solution": "Decrease frequency as hours worked will be a larger number than number of employees.",
        "insight": "The question asked the candidate to explain how the change in exposure base would impact frequency."
      },
      {
        "id": "d",
        "points": 0.25,
        "prompt": "Briefly describe the impact the exposure base change could have on severity.",
        "solution": "Sev = Loss $/clm ct \nNo change -> exposure not part of calculations",
        "insight": "Similar to Part c, this question asked the candidate to explain how the change in exposure base would impact the severity."
      },
      {
        "id": "e",
        "points": 0.5,
        "prompt": "Discuss an impact the exposure base change could have on the company's loss ratio.",
        "solution": "The base change could lead to wide premium swing \n• Many good customers might go to other insurers \n• Only the ones with bad risks who cannot afford to leave stays (because no one would take \nthem) \nTherefore the company L/R is likely to get worse",
        "insight": "The final part of this question asked the candidates to assume the company implemented the exposure base change and then determine an impact on the loss ratio based on their evaluation in prior subparts along with any other factors that may come into play."
      }
    ]
  },
  {
    "id": "fall-2014-2",
    "number": 2,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-5"
    ],
    "points": 1.5,
    "questionPage": 5,
    "solutionPages": [
      35,
      36
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following policy data:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Policy",
          "Effective Date",
          "Expiration Date",
          "Initial Policy Premium ($)"
        ],
        "rows": [
          [
            "1",
            "June 1, 2012",
            "May 31, 2013",
            "480"
          ],
          [
            "2",
            "July 1, 2012",
            "December 31, 2012",
            "125"
          ],
          [
            "3",
            "March 1, 2013",
            "February 28, 2014",
            "225"
          ],
          [
            "4",
            "August 1, 2013",
            "March 31, 2014",
            "300"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Six months after the policy expires, the initial policy premium on every policy increases by 8% due to the final audit."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate calendar year 2013 earned premium as of December 31, 2013.",
        "solution": "CY 2013 EP = Policy 1: 5/12 x 480 + 480 x 0.08 = 238.4 \n                  2: 125 x 0.08 = 10 \n                 3: 10/12 x 225 = 187.5 \n                 4: 5/8 x 300 = 187.5 \n \nCY total EP = 238.4 + 10 + 187.5 + 187.5 = 623.4",
        "insight": "Earn calendar-year 2013 premium by policy, including audit adjustments only when known by the evaluation date."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate calendar year 2013 written premium as of December 31, 2013.",
        "solution": "CY 2013 WP \nPolicy 1: 480 x 0.08 = 38.4  \n2: 125 x 0.08 = 10  \n3: 225  \n4: 300 \nTotal = 573.4",
        "insight": "Include the policy premiums and audits written by December 31, 2013, using the proper policy terms."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Calculate policy year 2013 earned premium as of December 31, 2013.",
        "solution": "PY 2013 EP  \nPolicy 1: 0  \n2: 0  \n3: 225 x 10/12 = 187.5  \n4: 300 x 5/8 = 187.5 \nTotal = 375",
        "insight": "Earn policy-year 2013 premium through December 31, 2013 using each policy’s elapsed coverage period."
      },
      {
        "id": "d",
        "points": 0.25,
        "prompt": "Calculate policy year 2013 written premium as of December 31, 2014.",
        "solution": "PY 2013 WP  \nPolicy 1: 0  \n2: 0  \n3: 225 x 1.08 = 243  \n4: 300 x 1.08 = 324 \nTotal = 567",
        "insight": "Include the 8% final audits for applicable policy-year 2013 policies by the December 31, 2014 evaluation."
      }
    ]
  },
  {
    "id": "fall-2014-3",
    "number": 3,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-5"
    ],
    "points": 2,
    "questionPage": 6,
    "solutionPages": [
      37
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A personal auto insurer has a highly-refined classification rating plan. In the calculation of a rate level indication for this insurer, fully assess the use of the following methods to adjust premium to current rate level:"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "i. Parallelogram method ii. Extension of Exposures method",
        "solution": "i. Parallelogram method is easier to calculate than extension of exposure, but it is not as \naccurate as extension of exposure. Parallelogram assumes policies are written evenly \nthroughout the year, which may not be accurate. Parallelogram calculates rate level \nindication on an aggregate basis. It doesn’t fit for the personal auto insurer which has a \nhighly-refined classification. Rate level at each class may not be calculated correctly. \nii. Extension of Exposure is the most accurate method, but it requires more detailed data \nand more computation. \n  \n I would recommend Extension of Exposure to be used here.",
        "insight": "Assess both premium on-level methods for a detailed classification plan, including accuracy, data needs, and practical limits."
      }
    ]
  },
  {
    "id": "fall-2014-4",
    "number": 4,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 1.5,
    "questionPage": 7,
    "solutionPages": [
      38,
      39,
      40
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following workers compensation information for an employer:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Ratio of Wage to State Average Weekly Wage",
          "Percentage of Workers"
        ],
        "rows": [
          [
            "0.50",
            "6%"
          ],
          [
            "0.85",
            "18%"
          ],
          [
            "1.00",
            "31%"
          ],
          [
            "1.45",
            "26%"
          ],
          [
            "1.90",
            "17%"
          ],
          [
            "2.20",
            "2%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Minimum benefit= 45% of State Average Weekly Wage (SAWW)."
      },
      {
        "type": "line",
        "text": "• Current Compensation Rate= 80% of Worker's Pre-Injury Wage."
      },
      {
        "type": "line",
        "text": "• Proposed Compensation Rate= 85% of Worker's Pre-Injury Wage."
      },
      {
        "type": "line",
        "text": "• Current Maximum Benefit= 130% of SAWW."
      },
      {
        "type": "line",
        "text": "• Proposed Maximum Benefit= 115% of SAWW."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Assuming no changes to claim frequency, calculate the combined percent impact of both the compensation rate and maximum benefit changes to the average weekly expected claim benefit",
        "solution": "(1) (2) (3) (4) \nRatio of Wage to \nAverage Weekly Wage \nPercentage of \nWorkers \nCurrent Benefit \nRate Proposed Benefit Rate \n0.50 6% 0.45 0.45 \n0.85 18% 0.68 0.7225 \n1.00 31% 0.8 0.85 \n1.45 26% 1.16 1.15 \n1.90 17% 1.3 1.15 \n2.20 2% 1.3 1.15 \n    (5) Total \n \n0.946 0.93805 \n(6) Change \n  \n-0.8% \n \n(3) = 0.80*(1), limited to minimum of 0.45 and maximum of 1.3  \n(4) = 0.85*(1), limited to minimum of 0.45 and maximum of 1.15  \n(5) = Sumproduct of (2), weighted average benefit rate  \n(6) = percentage change in benefits",
        "insight": "Demonstrate their understanding by illustrating how each subgroup of workers are impacted by the change in both the compensation rate and maximum benefit cap, as well as using the correct weights to compute the overall impact."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe a potential indirect effect of the maximum benefit changes on: i. Frequency ii. Duration",
        "solution": "Frequency: With a lower maximum benefit, workers may be less inclined to file claims which \nwould decrease frequency. \n  \nDuration: Since more workers will now be subject to the maximum, and the maximum is lower, \naffected workers may be more likely to return to work sooner. This would decrease duration.",
        "insight": "Provide a brief reason for the \"increase\"/\"decrease\" answer."
      }
    ]
  },
  {
    "id": "fall-2014-5",
    "number": 5,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 3.25,
    "questionPage": 8,
    "solutionPages": [
      41
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following information is available for a homeowners insurance company as of December 31, 2013:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Period (months)",
          "Reported Loss and ALAE Age-to-Age Factor"
        ],
        "rows": [
          [
            "12-24",
            "1.10"
          ],
          [
            "24-36",
            "1.05"
          ],
          [
            "36-48",
            "1.01"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar/Accident Year",
          "Earned Exposures (000)",
          "Amount of Insurance Years ($000)",
          "Reported Non-Catastrophe Loss and ALAE ($000)"
        ],
        "rows": [
          [
            "2011",
            "45",
            "13,500",
            "23,000"
          ],
          [
            "2012",
            "50",
            "15,300",
            "25,000"
          ],
          [
            "2013",
            "40",
            "12,500",
            "20,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Annual loss and ALAE trend = 4%."
      },
      {
        "type": "line",
        "text": "• Historical non-catastrophe ULAE to loss and ALAE ratio= 1.05."
      },
      {
        "type": "line",
        "text": "• Historical catastrophe ULAE to loss and ALAE ratio= 1.09."
      },
      {
        "type": "line",
        "text": "• Long-term non-modeled catastrophe loss and ALAE-to-AIY ratio = 0.25."
      },
      {
        "type": "line",
        "text": "• Modeled catastrophe loss and ALAE-to-AIY ratio = 0.07."
      },
      {
        "type": "line",
        "text": "• Rates will take effect on January 1, 2015, and will be in effect for one year."
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• Assume no development after 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3.25,
        "prompt": "Using three years of historical data, determine the provision for loss and LAE to be used in the pure premium indication.",
        "solution": "Yr \nAIY/E. \nExpo. Change \n   11 300 \n    12 306 2% \n   13 312.5 2.10% \n   Proj \n     15 312.5 * 1.02^2 = 325.125 \n  16 312.5*1.02^3 = 331.628 \n   \n      Avg = 328.38 \n    \n      (1) CAT PP (L&LAE) = 328.3 * (0.25 + 0.07) * 1.09 = 114.54 \n \n      \n \n(2) (3) (4) (5) (6) \nYR \nRpt Non \nCat L&LAE Trend Factor CDF Ult ULAE Load \nProj Ult \nL&LAE \n11 23,000 1.04 ^ 4.5 1.01 1.05 29,100 \n12 25,000 1.04 ^ 3.5 1.0605 1.05 31,934 \n13 20,000 1.04 ^ 2.5 \n1.1 * 1.05 * \n1.01 = 1.16655 1.05 27,021 \n     \n88,055 \n      (3) Trend from 7/1/XX to 1/1/16 \n   (6) = (2)*(3)*(4)*(5) \n    (7) Non-cat PP = 88,055 / (45 + 50 + 40) = 652.26 \n  (8) Proj PP = (1) + (7) = 766.80",
        "insight": "Calculate ultimate loss development factors, determine the loss trend period, and apply the non-catastrophe ULAE factor."
      }
    ]
  },
  {
    "id": "fall-2014-6",
    "number": 6,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 2.25,
    "questionPage": 9,
    "solutionPages": [
      42,
      43
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "• Projected ultimate pure premium, including LAE = $450."
      },
      {
        "type": "line",
        "text": "• Underwriting profit provision= 5%."
      },
      {
        "type": "line",
        "text": "• Projected average premium per exposure= $750."
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Expense Category",
          "Selected Expense Ratio",
          "Percent Fixed"
        ],
        "rows": [
          [
            "General Expenses",
            "6.0%",
            "75%"
          ],
          [
            "Other Acquisition",
            "9.5%",
            "75%"
          ],
          [
            "Taxes, Licenses & Fees",
            "2.8%",
            "25%"
          ],
          [
            "Commission & Brokerage",
            "12.0%",
            "0%"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate the indicated average rate using the all variable expense method for determining expense provisions.",
        "solution": "All variable \nV = 0.06 + 0.095 + 0.028 + 0.12 = 0.303 \nIndicated rate = 450/(1 – 0.05 – 0.303) = 695.52",
        "insight": "Know how to calculate the expense provision assuming all expenses vary proportionally with projected average premium, then calculate the indicated average rate using the pure premium method."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Calculate the indicated average rate using the premium-based projection method for determining expense provisions.",
        "solution": "Using the premium-based projection method \n% fixed = 6.0%*75% + 9.5%*75% + 2.8%*25% = 12.325% \nFixed expense = 12.325%*750 = 92.44 \n% variable = 30.3% - 12.325% = 17.975% \nIndicated avg rate = (450 + 92.44)/(1 – 5% - 17.975%) = 704.24",
        "insight": "Know how to calculate the fixed and variable expense provisions then calculate the indicated average rate using the pure premium method."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Assume the historical average premium per exposure on which the selected expense provisions are based is $675. Discuss whether the result calculated in part b. above is excessive or inadequate.",
        "solution": "Projected ave. Prem ($750) is higher than the historical one ($675). Using prem based method to \nevaluate fix expense assumes fix expense scales with prem. This is not very accurate since #1. \nSome fix expense does not depend on size of policy; 2. Fix expense may trend differently from \nprem. So, fix expense may be over-estimated, and result in (b) excessive. \n \nThe result in part b is excessive. Since the expense ratios were calculated using an Avg Prem of \n675, the true fixed expense amount is (675*.12325) = 83.19. However, in the rate calculation an \navg prem of 750 was used, which means our fixed expense amount was estimated to be \n(750*.12325) = 92.44. Since this estimated fixed expense is greater than the true fixed expense \nof 83.19, the indicated rate is excessive.",
        "insight": "Understand the limitations of premium-based projection method for calculating expenses."
      }
    ]
  },
  {
    "id": "fall-2014-7",
    "number": 7,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-8"
    ],
    "points": 2.5,
    "questionPage": 10,
    "solutionPages": [
      44,
      45
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company began writing personal automobile policies in 2011. Given the following information for the insurance company:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar/Accident Year",
          "Written Policies",
          "Ultimate Loss and LAE ($000)"
        ],
        "rows": [
          [
            "2011",
            "44,000",
            "14,250"
          ],
          [
            "2012",
            "48,400",
            "19,500"
          ],
          [
            "2013",
            "53,240",
            "22,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "Variable Expense Ratio 20%"
      },
      {
        "type": "line",
        "text": "Profit & Contingency Provision 5%"
      },
      {
        "type": "line",
        "text": "Fixed Expense per Exposure $50"
      },
      {
        "type": "line",
        "text": "• Expense and profit provisions are not expected to change."
      },
      {
        "type": "line",
        "text": "• Policies have six-month terms, are written uniformly throughout the year, and include one automobile per policy."
      },
      {
        "type": "line",
        "text": "• The company is currently charging an average premium per policy of $500."
      },
      {
        "type": "line",
        "text": "• The annual loss trend factor = 3%."
      },
      {
        "type": "line",
        "text": "• The data is fully credible."
      },
      {
        "type": "line",
        "text": "• When calculating the indication, consider data from all three years."
      },
      {
        "type": "line",
        "text": "• Rates are assumed to be effective July 1 , 2014, and in effect for six months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Calculate the overall indicated rate change, including justification for the selection of projected ultimate pure premium.",
        "solution": "Accident \nYear \nWritten \nExposures \nEarned \nExposures \nTrend \nPeriod \nTrend \nFactor \nTrended \nUltimate \nLoss & LAE \nProjected \nPure \nPremium \n2011 22,000 16,500 3.5 1.109 15,803,204 957.77 \n2012 24,200 23,650 2.5 1.077 20,995,570 887.76 \n2013 26,620 26,015 1.5 1.045 22,997,388 884.00 \nTotal  66,165   59,796,163 903.74 \n \nWritten Exposures = Written Policies / 2 \nEarned Exposures = 0.75 * Current Year Written Exposures + 0.25 * Prior Year Written Exposures \nTrend Period = Time between 7/1/AY and 1/1/15 (Average Accident Date when rates in effect) \nTrend Factor = 1.03 ^ Trend Period \n \nProjected Pure Premium is based on all three years of data, since the data is fully credible. \n \nIndicated Rate = (903.74 + 50) / (1 – 0.20 – 0.05) = 1,271.65 \nIndicated Rate Change = 1,271.65 / 1,000 – 1 = 27.2%",
        "insight": "This question tested candidates’ knowledge of how to calculate written and earned exposures, trend losses, justify a pure premium selection from preliminary indications, and calculate a rate and rate change."
      }
    ]
  },
  {
    "id": "fall-2014-8",
    "number": 8,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-8",
      "ratemaking-12"
    ],
    "points": 4.25,
    "questionPage": 11,
    "solutionPages": [
      46,
      47,
      48,
      49,
      50
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A company is reviewing the rate level adequacy in State X. Given the following information for a book of business:"
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• Rate change history:"
      },
      {
        "type": "line",
        "text": "o -5% effective April 1 , 2012, mandated by law to apply to all policies in force with no impact on losses."
      },
      {
        "type": "line",
        "text": "o 10% effective January 1 , 2013."
      },
      {
        "type": "line",
        "text": "• New rates will be in effect for 12 months beginning on April 1, 2015."
      },
      {
        "type": "line",
        "text": "• Selected annual underlying loss trend = 2%."
      },
      {
        "type": "line",
        "text": "• Selected annual premium trend = 0%."
      },
      {
        "type": "line",
        "text": "• Loss adjustment expense provision = 4% of loss."
      },
      {
        "type": "line",
        "text": "• Projected expense ratios:"
      },
      {
        "type": "line",
        "text": "o Fixed= 5%"
      },
      {
        "type": "line",
        "text": "o Variable = 27%."
      },
      {
        "type": "line",
        "text": "• Underwriting profit and contingencies provision = 8%."
      },
      {
        "type": "line",
        "text": "• Ultimate losses are estimated using the reported development technique."
      },
      {
        "type": "line",
        "text": "• Credibility of the indicated rate change = 0.6."
      },
      {
        "type": "line",
        "text": "• State X's earned premium is 5% of the total earned premium countrywide."
      },
      {
        "type": "line",
        "text": "• State X is part of Region A, and accounts for 50% of the total earned premium for that region."
      },
      {
        "type": "line",
        "text": "• Potential complements of credibility include:"
      },
      {
        "type": "line",
        "text": "o Countrywide rate indication = 10%."
      },
      {
        "type": "line",
        "text": "o Total Region A rate indication= 8%."
      },
      {
        "type": "line",
        "text": "o Major competitor rate indication for State X = 4%."
      },
      {
        "type": "line",
        "text": "o Annual inflation trend for State X = 3%."
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year Ending",
          "Earned Premium ($000)"
        ],
        "rows": [
          [
            "December 31, 2012",
            "9,500"
          ],
          [
            "December 31, 2013",
            "9,800"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year as of December 31, 2013",
          "Reported Losses ($000)"
        ],
        "rows": [
          [
            "2012",
            "4,800"
          ],
          [
            "2013",
            "4,100"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported Loss Age-to-Age Development Factors",
        "headers": [
          "Accident Year",
          "12–24",
          "24–36",
          "36–48",
          "48–60",
          "60–72"
        ],
        "rows": [
          [
            "2008",
            "1.37",
            "1.15",
            "1.06",
            "1.02",
            "1.00"
          ],
          [
            "2009",
            "1.35",
            "1.15",
            "1.05",
            "1.02",
            ""
          ],
          [
            "2010",
            "1.32",
            "1.12",
            "1.07",
            "",
            ""
          ],
          [
            "2011",
            "1.28",
            "1.09",
            "",
            "",
            ""
          ],
          [
            "2012",
            "1.25",
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
        "points": 1,
        "prompt": "Recommend a complement of credibility from the list above. Briefly explain the recommendation, including a brief discussion of each potential complement not selected.",
        "solution": "I would choose CW indication as the complement of credibility because it is credible and accurate. \nState A only has 5% of CW data, so CW can also be seen as independent. \n \nTotal Region A is not appropriate because State X is 50% of the exposure, so it is not independent. \n \nMajor competitor rate indication is not unbiased because those two companies are not targeting the \nexact same market. \n \nAnnual inflation is not appropriate because it will not accurately reflect rate need in State X.",
        "insight": "Discuss why they choose their complement of credibility and provide reasons for not selecting the other potential complements."
      },
      {
        "id": "b",
        "points": 3.25,
        "prompt": "Calculate the indicated rate change using the complement of credibility recommended in part a. above. Briefly justify selection of age-to-age reported loss development factors.",
        "solution": "On Level Premium \nOLF 2012 = (0.95 * 1.1) / (0.25*1 + 0.75*.95) = 1.086 \nOLF 2013 = (0.95 * 1.1) / (0.5*.95 + .5*.95*1.10) = 1.048 \n \nLoss Trend \nFrom Avg Accident date 7/1/20XX \nTo Avg Accident date 4/1/2016 \n \nTrend Factor \n2012 1.02^3.75 \n2013 1.02^2.75 \n \nLoss Development \n12-24 = 1.265 \n24-36 = 1.1 \n36-48 = 1.06 \n48-60 = 1.02 \n60-72 = 1.0 \n72-Ult = 1.0 \n \nBecause recent two years’ development pattern is different than previous years, I choose the most \nrecent two years’ average link ratio to be more responsive to recent data. \n \nCDF \n2012 1.2 \n2013 1.52 \nAY EP OLF \nPrem \nTrend \nTrended \nOLEP \nReported \nLoss CDF \nLoss \nTrend ALAE \nTrended \nUlt Loss \nALAE \n2012 9500 1.086 1 10317 4800 1.2 1.02^3.75 1.04 6452 \n2013 9800 1.048 1 10270 4100 1.52 1.02^2.75 1.04 6844 \n \nLoss Ratio = Trended Ult Loss ALAE / Trended OLEP = (6452 + 6844) / (10317+10270) = 64.58% \n \nIndicated Rate Change in State X = (64.58% + 5%) / (1-27%-8%) – 1 = 7.1% \n \nCredibility Weighted Indication = 7.1% * .60 + 10% * .40 = 8.23%",
        "insight": "On-level premium, justify the LDF selection, develop and trend losses as well as calculate the indication and credibility weighted indication."
      }
    ]
  },
  {
    "id": "fall-2014-9",
    "number": 9,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2.75,
    "questionPage": 12,
    "solutionPages": [
      51,
      52
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance market with a fixed number of insureds consists of two insurers - Company A and Company B. Company A has identified a new potential rating variable to segment its risks, consisting of High Risk and Low Risk."
      },
      {
        "type": "table",
        "title": "Insured Risks",
        "headers": [
          "Rating Group",
          "True Expected Cost ($)",
          "Company A",
          "Company B"
        ],
        "rows": [
          [
            "High Risk",
            "$200",
            "10,000",
            "90,000"
          ],
          [
            "Low Risk",
            "$100",
            "10,000",
            "90,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• True expected cost is known only to Company A"
      },
      {
        "type": "line",
        "text": "• The probability each risk will switch insurers at renewal if they are offered a lower price by the new insurer is given by the following equation: Probability= 0.9 x (Difference in Offered Rates)/ True Expected Cost"
      },
      {
        "type": "line",
        "text": "• The probability each risk will switch insurers at renewal if they are offered a higher or equal price by the new insurer is 0."
      },
      {
        "type": "line",
        "text": "Company A intends to charge the true cost for High Risk insureds, and is evaluating two different prices for Low Risk insureds: $130 or $140. Company B charges $150 for all risks."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Determine which of the two rates Company A should charge the Low Risk insureds to maximize profits, assuming Company B does not adjust its price.",
        "solution": "$130: Probability switching = 0.9 (150-130)/100 = 0.18 \n \n$140: Probability switching = 0.9 (150-140)/100 = 0.09 \n \nNo impact to profit from high risk, since charged true cost \n \n$130: Profits = 10,000 (130-100) + 0.18 (90,000) (130-100) = $786,000 \n \n$140: Profits = 10,000 (140-100) + 0.09 (90,000) (140-100) = $724,000 \n \nCompany A should charge $130 to low risk insureds",
        "insight": "Compare the short-term profits at both proposed low-risk prices, accounting for how many insureds switch."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Describe the ultimate impact on the distribution of risks and each company's profitability if Company B does not adjust its strategy.",
        "solution": "Company B will experience adverse selection as more low risks move to company A from B and \nmore high risks move from B to A, following lower rates offered. As the adverse selection \ncontinues, Company B will go through a cycle of increasing rates which leads to more adverse \nselection until it goes either insolvent, implements the rating variable A uses, or focuses on high \nrisks only.",
        "insight": "There had to be a relatively clear recognition of the ultimate ramifications of the problem in order to get full credit."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe two possible strategies Company B could utilize in response to Company A's new rate plan.",
        "solution": "Acceptable Answers: \n• Company B can implement the same rating variable as company A. \n• Charge lower than 130 but higher than 100 for the low risks. \n• Focus only on high risk insureds and charge the true costs. \n• It could exit the market. Since company A can better differentiate risks, it will be very hard \nto be profitable in this market. \n• B can find other rating characteristics to segment the market in a more refined manner \nthat A has not discovered. \n• Change marketing strategy or provide better customer service to attract more low risk \ninsureds.",
        "insight": "Candidates should be able to cite at least one strategy."
      }
    ]
  },
  {
    "id": "fall-2014-10",
    "number": 10,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-10"
    ],
    "points": 1.75,
    "questionPage": 13,
    "solutionPages": [
      53
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary performed an analysis of a products liability class plan using a Generalized Linear Model (GLM) for the first time on this book of business. The insureds are categorized by hazard classes A through G. The following graph shows claim frequency and exposure data by hazard class."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Fully evaluate the predictive value of hazard class based on the information provided above.",
        "solution": "Indicated relativities generally increase without reversals, which suggest this variable could be \nstatistically significant. Looking at the ind. rel. by years, all three year’s curve lie closely on top of \neach other & show consistent upward direction, so the variable passes consistency test. Note \nthat there’s a little disparity for Hazard class A & G, but those levels have few exposures, so the \ndisparity for those do not disqualify the stable results for B to F.",
        "insight": "Evaluate the consistent frequency pattern across hazard classes alongside the sparse exposure in the end classes."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Briefly describe two data mining techniques and how each might be used to enhance a GLM multivariate classification analysis.",
        "solution": "CART: a tree structured series of if-then scenarios which helps to identify the relationships among \nvariables. Could help to identify interaction variables for GLM analysis. \n \nNeural network: training program, data can be fed into the neural network & the program will \nautomatically learn the structure of the data. Essentially an iterative GLM process. Could identify \nmissing predictive variables in the GLM analysis.",
        "insight": "Describe two data mining methods and explain what each can contribute to the GLM analysis."
      }
    ],
    "figure": {
      "src": "assets/exam-graphs/fall-2014-q10.png",
      "title": "GLM claim frequency by hazard class",
      "alt": "Claim frequency for hazard classes A through G in 2011–2013, with total exposures"
    }
  },
  {
    "id": "fall-2014-11",
    "number": 11,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-9",
      "ratemaking-12"
    ],
    "points": 3.0,
    "questionPage": 14,
    "solutionPages": [
      54,
      55,
      56
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for a homeowners book of business:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Territory",
          "Earned Exposures",
          "Earned Premium ($000)",
          "Ultimate Losses Excluding Catastrophes ($000)",
          "Current Relativity"
        ],
        "rows": [
          [
            "1",
            "2,500",
            "3,375",
            "3,200",
            "1.15"
          ],
          [
            "2",
            "7,000",
            "11,200",
            "6,200",
            "1.0"
          ],
          [
            "3",
            "500",
            "700",
            "1,000",
            "0.9"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Ratio of ALAE to loss = 4%."
      },
      {
        "type": "line",
        "text": "• Full credibility standard for exposures = 5,000."
      },
      {
        "type": "line",
        "text": "• Use square root rule for credibility calculations."
      },
      {
        "type": "line",
        "text": "• Territory 2 is the base class."
      },
      {
        "type": "line",
        "text": "• The rating algorithm is Base Rate x Territory Factor x Amount of Insurance Factor."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the credibility-weighted indicated non-catastrophe relativity to the base for each territory using the pure premium method.",
        "solution": "Terr EE \nUlt \nnonCAT \nLoss \nALAE PP Normalized \nPP Cred Z Curr \nRel \n1 2,500 3,200 1.04 3200x1.04/2500 \n=1.3312 1.2308 sqrt(2500/5000) \n=0.7071 1.15 \n2 7,000 6,200 1.04 0.9211 0.8506 1 1 \n3 500 1,000 1.04 2.08 1.9231 0.3162 0.9 \nTotal 10,000     1 1   1.0325 \n \nTerr Normalized Curr Rel Cred wted ind rel ind rel to base \n1 1.1138 0.7071x1.2308+ (1-0.7071) \nx1.138=1.1965 \n1.1965/0.8506 \n=1.4067 \n2 0.9685 0.8506 1 \n3 0.8717 1.2042 1.4157 \nTotal",
        "insight": "Apply the pure premium method to determine credibility weighted revised relativities."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Territory 1 has a high percentage of low-value homes relative to territories 2 and 3. Describe a possible distortion to the indicated territory 1 relativity resulting from the distribution of home values.",
        "solution": "Terr. 1 is likely to have high percentage of los sev. Losses that will impact into Terr 1 rate relativity, \nsince Pure Premium method assumes uniform distribution of other variables and does not take \ncorrelation into account. Terr. 1 rate is understated.",
        "insight": "Explain the direction and source of the distortion, as well as the underlying assumption of the pure premium method that was violated."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Assume that $1,000,000 of the loss in territory 2 came from a single loss. Discuss an appropriate adjustment to the analysis.",
        "solution": "This loss should be excluded and add-back an appropriate large loss load based on analysis with \nlarger volume of data",
        "insight": "Know how to reduce distortions in rating caused by large losses, specifically by capping/removing large losses and applying an excess/large loss load."
      }
    ]
  },
  {
    "id": "fall-2014-12",
    "number": 12,
    "exam": "Fall 2014",
    "chapterIds": [
      "ratemaking-13"
    ],
    "points": 2.5,
    "questionPage": 15,
    "solutionPages": [
      57,
      58,
      59
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Asset Share Model by Policy Year",
        "headers": [
          "Policy Year",
          "Premium ($)",
          "Present Value of Losses ($)",
          "Variable Expenses — New ($)",
          "Variable Expenses — Renewal ($)",
          "Fixed Expenses — New ($)",
          "Fixed Expenses — Renewal ($)",
          "Income ($)"
        ],
        "rows": [
          [
            "1",
            "$800",
            "$656",
            "$242",
            "-",
            "$142",
            "-",
            "$-240"
          ],
          [
            "2",
            "$872",
            "$701",
            "-",
            "$54",
            "-",
            "$32",
            "$86"
          ],
          [
            "3",
            "$950",
            "$748",
            "-",
            "$59",
            "-",
            "$33",
            "$110"
          ],
          [
            "4",
            "1,036",
            "$799",
            "-",
            "$64",
            "-",
            "$34",
            "$139"
          ],
          [
            "5",
            "1,129",
            "$853",
            "-",
            "$70",
            "-",
            "$36",
            "$170"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Persistency and Present Values",
        "headers": [
          "Policy Year",
          "Persistency",
          "Cumulative Persistency",
          "Profit ($)",
          "Discount Factor",
          "Present Value of Profits ($)",
          "Present Value of Premiums ($)"
        ],
        "rows": [
          [
            "1",
            "100%",
            "100%",
            "$-240",
            "1",
            "$-240",
            "$800"
          ],
          [
            "2",
            "85%",
            "85%",
            "$73",
            "1.12",
            "$65",
            "$662"
          ],
          [
            "3",
            "86%",
            "73%",
            "$81",
            "1.25",
            "$64",
            "$554"
          ],
          [
            "4",
            "87%",
            "64%",
            "$88",
            "1.4",
            "$63",
            "$469"
          ],
          [
            "5",
            "88%",
            "56%",
            "$95",
            "1.57",
            "$61",
            "$402"
          ],
          [
            "Total",
            "",
            "",
            "",
            "",
            "$13",
            "2,886"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Premium-to-surplus ratio is 2 to 1."
      },
      {
        "type": "line",
        "text": "• Surplus equals GAAP equity."
      },
      {
        "type": "line",
        "text": "• The company seeks growth in this market."
      },
      {
        "type": "line",
        "text": "• Management requires the present value of profit of policy years 1 to 5 to be positive in total."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Briefly describe two differences between asset share pricing and pure premium ratemaking when they are used to price property and casualty products.",
        "solution": "Acceptable Answers: \n• Asset share pricing looks at the long term profitability of a policy where pure premium \napproach looks at profit over 1 policy period. \n• Asset share pricing takes into account persistency rates (renewal rates) where pure \npremium method does not. \n• Asset share pricing takes into account different expenses for new & renewal business \nwhereas pure premium ratemaking uses the same expenses for both. \n• Asset share pricing uses a discount factor in analysis but PP ratemaking does not. \n• Asset share takes Present Value of losses + Premium. PP ratemaking does not.",
        "insight": "Be able to discuss two basic differences between the pure premium method and the asset share pricing method for ratemaking and identify the method associated with each of the characteristics for which those differences existed."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "After preparing the asset share model shown above, the actuary evaluates an alternative set of persistency assumptions in which persistency in the third and fourth policy years are changed to 81 % and 82%, respectively. Calculate the revised present value of premiums.",
        "solution": "PY Persistency Cumulative PV Premiums  \n1 1 1.00 800 \n 2 0.85 0.85 662 \n 3 0.81 0.689 524 \n 4 0.82 0.565 418 \n 5 0.88 0.497 357 \n  \nWhere PV Premiums = Prem x Cumulative Persistency/Discount factor",
        "insight": "Recalculate the cumulative persistency for PYs 3, 4 and 5, and to plug those revised persistency numbers into the formula to calculate the revised present value of premiums for all five policy years."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "Briefly discuss the results of the asset share model under each set of persistency assumptions with regard to Management's profitability requirement. Provide a recommendation to management on whether to make a change to the current rating structure.",
        "solution": "Present value of profit using persistency rates from Part B \nPY Profit \n1 -240 \n2 65 \n3 61 \n4 56 \n5 54 \n \n-4 \n \nUnder the first assumption of persistency, profits are positive; they are NOT under the second. \n \nSample Recommendation #1: \nManagement could offer a renewal discount to improve persistency. Discount could be calculated \nso that overall profits remain positive. \n \nSample Recommendation #2: \n\nI recommend that marketing is increased to boost the persistency rates so that there can be \ngrowth and remain profitable. I am skeptical about increasing rates as this will reduce growth and \npersistency.",
        "insight": "Be able to discuss the results of the asset share model under each set of persistency assumptions and to make an informed recommendation as to whether or not to change the rating structure in light of the management’s profitability and growth goals."
      }
    ]
  },
  {
    "id": "fall-2014-13",
    "number": 13,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-1"
    ],
    "points": 1.5,
    "questionPage": 16,
    "solutionPages": [
      60,
      61
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The importance of accurately estimating unpaid claims can be examined from three points of view: internal management, investors, and regulators."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Briefly describe how a redundant unpaid claim estimate can impact decisions for each of these three groups.",
        "solution": "Sample Answers: \n \nInternal Management \n• It would make a book appear less profitable, causing a rate increase where one may not \nhave been needed. \n• May purchase unnecessary reinsurance contracts or choose to increase reinsurance limits \n• Internal management will allocate capital towards meeting these liabilities which could \nhave been invested elsewhere. \n• Lead to wrong interpretation of results and wrong decision to exit a LOB \n \nInvestors \n• Investors may see the decline in profitability and pull out their investments \n \nRegulators \n• They may not correctly evaluate the liabilities of this insurer and thus take unnecessary \nmeasures to protect its solvency",
        "insight": "Explain how a redundant unpaid estimate can mislead management, investors, and regulators."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Briefly describe how an inadequate unpaid claim estimate can impact decisions for each of these three groups.",
        "solution": "Sample Answers: \n \nInternal Management \n• May decide to decrease rates since their loss ratios look good \n• May decide to grow their business when they should not because their profits are not as \nhigh as they believe \n• May be overly optimistic and may reduce reinsurance limits \n• Could lead internal management to hold less than required capital to pay future claims \n \nInvestors \n• Inadequate unpaid claim estimates mean ultimate loss estimates will be low and the \ncompany will look really profitable to investors. Investors may decide to invest based on \nthis even though they shouldn’t. \n \nRegulators \n• May delay their intervention because they think the company is in a good position",
        "insight": "Explain how an inadequate unpaid estimate can mislead management, investors, and regulators."
      }
    ]
  },
  {
    "id": "fall-2014-14",
    "number": 14,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-6"
    ],
    "points": 3,
    "questionPage": 17,
    "solutionPages": [
      62,
      63,
      64
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Claim Transactions by Calendar Year",
        "headers": [
          "Claim ID",
          "Accident Date",
          "Report Date",
          "2011 Paid ($)",
          "2011 Ending Case Outstanding ($)",
          "2012 Paid ($)",
          "2012 Ending Case Outstanding ($)",
          "2013 Paid ($)",
          "2013 Ending Case Outstanding ($)"
        ],
        "rows": [
          [
            "1",
            "March 3, 2011",
            "July 1, 2011",
            "260",
            "0",
            "0",
            "0",
            "0",
            "0"
          ],
          [
            "2",
            "July 11, 2011",
            "October 2, 2011",
            "200",
            "500",
            "0",
            "500",
            "230",
            "270"
          ],
          [
            "3",
            "December 1, 2011",
            "February 15, 2012",
            "",
            "",
            "620",
            "0",
            "0",
            "0"
          ],
          [
            "4",
            "March 1, 2012",
            "April 1, 2012",
            "",
            "",
            "200",
            "200",
            "400",
            "0"
          ],
          [
            "5",
            "June 15, 2012",
            "September 9, 2012",
            "",
            "",
            "460",
            "0",
            "0",
            "0"
          ],
          [
            "6",
            "September 30, 2012",
            "October 20, 2012",
            "",
            "",
            "0",
            "400",
            "700",
            "400"
          ],
          [
            "7",
            "December 12, 2012",
            "March 11, 2013",
            "",
            "",
            "",
            "",
            "300",
            "230"
          ],
          [
            "8",
            "April 12, 2013",
            "June 18, 2013",
            "",
            "",
            "",
            "",
            "400",
            "200"
          ],
          [
            "9",
            "May 28, 2013",
            "July 23, 2013",
            "",
            "",
            "",
            "",
            "600",
            "300"
          ],
          [
            "10",
            "November 12, 2013",
            "December 5, 2013",
            "",
            "",
            "",
            "",
            "",
            "100"
          ]
        ]
      },
      {
        "type": "line",
        "text": "11 October 30, 2013 January 31, 2014"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Create the following cumulative annual triangles organized by accident year: i. paid claims ii. reported claims iii. reported claim count iv. closed claim count",
        "solution": "i. Paid Claims \n \n \n12 24 36 \n2011 460 1,080 1,310 \n2012 660 2,060 \n 2013 1,000 \n   \nii. Reported Claims \n \n \n12 24 36 \n2011 960 1,580 1,580 \n2012 1,260 2,690 \n 2013 1,600 \n   \niii. Reported Claim Count \n \n \n12 24 36 \n2011 2 3 3 \n2012 3 4 \n 2013 3 \n   \niv. Closed Claim Count \n \n \n12 24 36 \n2011 1 2 2 \n2012 1 2 \n 2013 0",
        "insight": "Be able to put together cumulative annual triangles by accident year for paid, reported, reported claim count and closed claim count."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Use the triangles produced in part a. above to generate one additional triangle to show that an operational change took place during the experience period. Identify and briefly describe an operational change consistent with the data.",
        "solution": "Accepted Answer 1 – Paid / Reported Claims \n \n12 24 36 \n2011 0.48 0.68 0.83 \n2012 0.52 0.77 \n 2013 0.63 \n   \nRatio of paid to reported claims has increased. This could be due to an increase in payments or a \nreduction in case reserve adequacy \n\nAccepted Answer 2 – Closed / Reported Claim Counts \n \n \n12 24 36 \n2011 0.5 0.67 0.67 \n2012 0.33 0.5 \n 2013      -   \n   \nRatio of closed to reported claim counts has decreased. This could be due to a slowdown in claim \nclosure. \n \nAccepted Answer 3 – Average Case Outstanding \n \n \n12 24 36 \n2011 500 500 270 \n2012 300 315 \n 2013 200 \n   \nAverage case reserve is decreasing. This could be due to a decrease in case reserve adequacy. \n \nAccepted Answer 4 – Average Reported Claim \n \n \n12 24 36 \n2011 480 527 527 \n2012 420 673 \n 2013 533 \n   \nAverage reported is increasing. This could be due to an increase in payments or case reserve \nadequacy. \n \nAccepted Answer 5 – Average Paid Claim \n \n \n12 24 36 \n2011 460 540 655 \n2012 660 1,030 \n 2013 n/a \n   \nAverage paid is increasing. This could be due to an increase in payments or a change in the type of \nclaim that is being closed. \n \nAccepted Answer 6 – Insufficient Data \n \n11 claims are not credible enough to draw a conclusion about operational changes.",
        "insight": "Be able to generate one additional triangle to show that an operational change took place during the experience period."
      }
    ]
  },
  {
    "id": "fall-2014-15",
    "number": 15,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-8"
    ],
    "points": 2,
    "questionPage": 18,
    "solutionPages": [
      65
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data as of December 31, 2013:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Reported Claims ($000)",
          "Reported Development Factor to Ultimate",
          "On-Level Earned Premium ($000)"
        ],
        "rows": [
          [
            "2011",
            "20,900",
            "1.6",
            "38,000"
          ],
          [
            "2012",
            "21,000",
            "2.1",
            "50,000"
          ],
          [
            "2013",
            "11,500",
            "3.7",
            "67,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Annual loss trend = 7%."
      },
      {
        "type": "line",
        "text": "• There has been a law change effective July 1, 2012, applicable to all claims occurring after the effective date."
      },
      {
        "type": "line",
        "text": "• Estimated reduction to ultimate claims based on law change = 20%."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Estimate IBNR for accident year 2013 using the expected claims technique.",
        "solution": "(1) (2) (3) (4) \n(5) = \n(1)*(2)*(3)*(4) (6) \n(7) = \n(5)/(6) \nAY \nReported \nClaims \n(000's) LDF Trend \nLaw \nAdjustment \nTrended \nUltimate \nOn Level \nEP \nLoss \nRatio \n2011 20,900 1.6 1.145 0.800 30,631 38,000 80.6% \n2012 21,000 2.1 1.070 0.889 41,949 50,000 83.9% \n2013 11,500 3.7 1.000 1.000 42,550 67,000 63.5% \n     \nELR (average of 11 & 12):  82.3% \n \nAY 13 Ult = 67,000 * 0.822 = 55,104 \nIBNR = 55,104 – 11,500 = 43,604",
        "insight": "Adjust historical losses for the law change and trend, derive an expected claims ratio, and subtract reported claims from expected ultimate claims."
      }
    ]
  },
  {
    "id": "fall-2014-16",
    "number": 16,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-7"
    ],
    "points": 1.75,
    "questionPage": 19,
    "solutionPages": [
      66
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following information is available for an insurer:"
      },
      {
        "type": "table",
        "title": "Reported Claim Counts as of (months)",
        "headers": [
          "Accident Half-Year",
          "6",
          "12",
          "18",
          "24",
          "30"
        ],
        "rows": [
          [
            "2011-1",
            "28",
            "35",
            "39",
            "39",
            "39"
          ],
          [
            "2011-2",
            "40",
            "80",
            "140",
            "168",
            "168"
          ],
          [
            "2012-1",
            "20",
            "25",
            "28",
            "28",
            ""
          ],
          [
            "2012-2",
            "32",
            "64",
            "112",
            "",
            ""
          ],
          [
            "2013-1",
            "36",
            "45",
            "",
            "",
            ""
          ],
          [
            "2013-2",
            "35",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There is no development after 30 months."
      },
      {
        "type": "line",
        "text": "• The actuary's estimate of ultimate claim counts for accident year 2013 is 152."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Assess the reasonability of the actuary's estimate of ultimate claim counts.",
        "solution": "Accident Half \nYear 6-12 12-18 18-24 24-30 \n2011-1 1.250 1.114 1.000 1.000 \n2011-2 2.000 1.750 1.200 1.000 \n2012-1 1.250 1.120 1.000 \n 2012-2 2.000 1.750 \n  2013-1 1.250 \n   2013-2 \n     \nLooks like there is a seasonality issue. First half claims develop differently from second half \nclaims. Select development factors separately: \n \n \n6-12 12-18 18-24 24-30 \nFirst Half  1.250 1.117 1.000 1.000 \nSecond Half 2.000 1.750 1.200 1.000 \n \nEstimated AY 2013 Ultimate Claim Counts: 45 x 1.117 + 35 x 2.000 x 1.750 x 1.200 = 197 \n \nThe actuary’s estimate of 152 is too low – maybe he/she did not take seasonality into \nconsideration.",
        "insight": "Identify seasonal loss development, to separately calculate and apply unique loss development factors to the half-year data, and to comment on the reasonability of the actuary’s projected ultimate for 2013."
      }
    ]
  },
  {
    "id": "fall-2014-17",
    "number": 17,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 3.5,
    "questionPage": 20,
    "solutionPages": [
      67,
      68,
      69
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A monoline insurance company writes business in one state. The state has experienced significant increases in insurance costs. In an effort to reduce costs, the state's government passes legislative reforms effective January 1, 2013, which impacts all outstanding and future reported insurance claims."
      },
      {
        "type": "line",
        "text": "The legislative reforms were expected to have the following impacts:"
      },
      {
        "type": "line",
        "text": "• Reduce the amount of time claims remained open."
      },
      {
        "type": "line",
        "text": "• Reduce the average annual inflation by half of what it was prior to the reforms."
      },
      {
        "type": "line",
        "text": "The following information is available for the insurance company as of December 31, 2013:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "1,000,000",
            "1,750,000",
            "2,350,000",
            "2,850,000"
          ],
          [
            "2011",
            "1,210,000",
            "2,117,500",
            "3,059,100",
            ""
          ],
          [
            "2012",
            "1,089,000",
            "2,042,370",
            "",
            ""
          ],
          [
            "2013",
            "1,709,000",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Closed Claim Counts as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "100",
            "150",
            "180",
            "200"
          ],
          [
            "2011",
            "110",
            "165",
            "209",
            ""
          ],
          [
            "2012",
            "90",
            "144",
            "",
            ""
          ],
          [
            "2013",
            "132",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Incremental Closed Claim Counts as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "100",
            "50",
            "30",
            "20"
          ],
          [
            "2011",
            "110",
            "55",
            "44",
            ""
          ],
          [
            "2012",
            "90",
            "54",
            "",
            ""
          ],
          [
            "2013",
            "132",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Ultimate Claim Counts"
        ],
        "rows": [
          [
            "2010",
            "200"
          ],
          [
            "2011",
            "220"
          ],
          [
            "2012",
            "180"
          ],
          [
            "2013",
            "220"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Assuming the closure rates and inflation observed during calendar year 2013 continue, use a frequency-severity approach to estimate unpaid claims for accident year 2013.",
        "solution": "Disposal Rate Triangle (Closed Claim Count / Ultimate Claim Counts) \n \nAY/Eval 12 24 36 48 \n2010 0.50 0.75 0.90 1.00 \n2011 0.50 0.75 0.95 \n 2012 0.50 0.80 \n  2013 0.60 \n    \nIncremental Closed Claim Counts for AY 2013 ( (Ultimate Claims – Closed) x (1-%closed to date) x \n(incremental % closed) \n \nAY/Eval 12 24 36 48 \n2010 100 50 30 20 \n2011 110 55 44 \n 2012 90 54 \n  2013 132 44 33 11 \n \nIncremental Paid Severity Triangle (Incremental Paid / Incremental Closed Claims) \n \nAY/Eval 12 24 36 48 \n2010 10,000 15,000 20,000 25,000 \n2011 11,000 16,500 21,400 \n 2012 12,100 17,655 \n  2013 12,947 \n    \nChange in Incremental Severity Triangle \n \nAY/Eval 12 24 36 \n2011/2010 10% 10% 7% \n2012/2011 10% 7% \n 2013/2012 7% \n   \nAY 2013 Trended Incremental Severities \n \nAY/Eval 12 24 36 48 \n2010 10,000 15,000 20,000 25,000 \n2011 11,000 16,500 21,400 \n 2012 12,100 17,655 \n  2013 12,947 18,891 24,501 30,626 \n\nUnpaid Claims Estimate (Incremental Closed Claims x AY 2013 Trended Incremental Severities) \n \nAY/Eval 24 36 48 Total \nSeverity 18,891 24,501 30,626 \n Counts 44 33 11 \n Ultimate 831,197 808,528 336,887 1,976,613",
        "insight": "Be able to use the given counts and paid triangles to assess how the recently implemented reforms have affected claim closure and payment patterns in CY 2013, and then use adjusted claim counts and severities to calculate an unpaid estimate."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Discuss whether or not each of the legislative reform impacts has occurred.",
        "solution": "As can be seen from the increase in disposal rates in the latest calendar year, the reforms have \nreduced the amount of time that claims remain open. (see triangle in part a) \n \nInflation in 2013 was reduced from prior years (7% from 10%, see severity trend triangle) but it did \nnot decrease by half, so the reforms only had a partial impact here.",
        "insight": "Be able to use the diagnostic severity trend and disposal rate triangles to assess whether the reforms were successful or not."
      }
    ]
  },
  {
    "id": "fall-2014-18",
    "number": 18,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-9"
    ],
    "points": 1.5,
    "questionPage": 21,
    "solutionPages": [
      70,
      71
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data as of December 31, 2013:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "On-Level Earned Premium ($)",
          "Reported Claims ($)",
          "Reported Development Factor to Ultimate",
          "Expected Claims Ratio"
        ],
        "rows": [
          [
            "2010",
            "25,000",
            "11,000",
            "1.05",
            "57.90%"
          ],
          [
            "2011",
            "26,000",
            "13,000",
            "1.10",
            "57.90%"
          ],
          [
            "2012",
            "28,000",
            "10,000",
            "1.30",
            "57.90%"
          ],
          [
            "2013",
            "30,000",
            "12,000",
            "1.80",
            "57.90%"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Calculate the IBNR for accident year 2013 using the Benktander technique.",
        "solution": "BF Ultimate = 30,000(.579)(1 – 1/1.8) + 12,000 = 19,720 \nBenktander IBNR = 19,720(1 – 1/1.8) = 8,764.44",
        "insight": "Know how to apply the Benktander technique (and by extension, the B-F technique) to a set of summarized data."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "The Benktander technique can be viewed as a credibility weighting of other common techniques. Identify these techniques.",
        "solution": "The Bornhuetter-Ferguson and Development techniques",
        "insight": "Know two techniques which can be credibility weighted together to obtain the Benktander estimate."
      }
    ]
  },
  {
    "id": "fall-2014-19",
    "number": 19,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 2.25,
    "questionPage": 22,
    "solutionPages": [
      72,
      73
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "For each situation below an insurer uses the reported development technique based on its historical accident year data to set reserves. For each situation: i. Discuss the effect on estimated ultimate claims and ii. Identify either an alternate technique or an adjustment to the reported development technique to improve the estimate, if necessary."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Mid-year the company institutes a new policy for setting case outstanding for open claims, in which case outstanding is set at policy limits.",
        "solution": "The increase in case outstanding will cause historical LDFs to be too high when applied to higher \nreported claims. Estimated Ultimate Claims would be overstated. \n \nAcceptable answers for subpart ii: \n• Berquist-Sherman \n• Paid techniques \n• Expected Claims Ratio (Expected Loss Ratio)",
        "insight": "Explain why stronger case outstanding can overstate a reported-development estimate and propose a method or adjustment that removes the distortion."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "The company had historically stable writings, but undertakes an advertising initiative in the second quarter and increases its premium volume written through the end of the year by 300%.",
        "solution": "The average accident date will shift to later in the year, causing the most recent year to be less \nmature than prior years at same evaluation point. Estimated Ultimate Claims would be \nunderstated. \n \nAcceptable answers for subpart ii: \n• Split data into accident quarters (or any other smaller interval than years) \n• Expected Claims Ratio (Expected Loss Ratio)",
        "insight": "Candidates needed to know that the estimate would be understated because the average accident date shifted to later in the year."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "At the beginning of the year, the company began offering a general liability product covering losses in excess of its basic limits.",
        "solution": "Excess product will develop slower, meaning the LDFs would be understated. Estimated Ultimate \nClaims would be understated.",
        "insight": "Candidates needed to know that the estimate would be understated because of the slower developing excess product or that excess data is volatile which could cause a highly leveraged ultimate estimate."
      }
    ]
  },
  {
    "id": "fall-2014-20",
    "number": 20,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-13"
    ],
    "points": 3.75,
    "questionPage": 23,
    "solutionPages": [
      74,
      75
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following information is available for an insurance company:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "1,050",
            "2,350",
            "4,370",
            "6,250"
          ],
          [
            "2011",
            "1,100",
            "3,970",
            "6,350",
            ""
          ],
          [
            "2012",
            "1,160",
            "4,860",
            "",
            ""
          ],
          [
            "2013",
            "1,460",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Case Outstanding ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "520",
            "2,200",
            "1,790",
            "1,500"
          ],
          [
            "2011",
            "600",
            "1,270",
            "690",
            ""
          ],
          [
            "2012",
            "730",
            "770",
            "",
            ""
          ],
          [
            "2013",
            "920",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Closed Claim Counts (000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "5",
            "7",
            "10",
            "13"
          ],
          [
            "2011",
            "5",
            "9",
            "12",
            ""
          ],
          [
            "2012",
            "5",
            "10",
            "",
            ""
          ],
          [
            "2013",
            "6",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Open Claim Counts (000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "3",
            "4",
            "3",
            "1"
          ],
          [
            "2011",
            "3",
            "2",
            "1",
            ""
          ],
          [
            "2012",
            "3",
            "1",
            "",
            ""
          ],
          [
            "2013",
            "3",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Projected Ultimate Claim Counts (000)"
        ],
        "rows": [
          [
            "2010",
            "13"
          ],
          [
            "2011",
            "13"
          ],
          [
            "2012",
            "13"
          ],
          [
            "2013",
            "13"
          ]
        ]
      },
      {
        "type": "line",
        "text": "The interpolation of cumulative paid claims (in $000s) by accident year (AV) is as follows:"
      },
      {
        "type": "table",
        "title": "Interpolated Cumulative Paid Claims — Accident Year 2010 ($000)",
        "headers": [
          "Closed Claim Counts (000)",
          "Paid Claims ($000)"
        ],
        "rows": [
          [
            "5",
            "1,050"
          ],
          [
            "6",
            "1,700"
          ],
          [
            "7",
            "2,350"
          ],
          [
            "8",
            "3,023"
          ],
          [
            "9",
            "3,697"
          ],
          [
            "10",
            "4,370"
          ],
          [
            "11",
            "4,997"
          ],
          [
            "12",
            "5,623"
          ],
          [
            "13",
            "6,250"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Interpolated Cumulative Paid Claims — Accident Year 2011 ($000)",
        "headers": [
          "Closed Claim Counts (000)",
          "Paid Claims ($000)"
        ],
        "rows": [
          [
            "5",
            "1,100"
          ],
          [
            "6",
            "1,818"
          ],
          [
            "7",
            "2,535"
          ],
          [
            "8",
            "3,253"
          ],
          [
            "9",
            "3,970"
          ],
          [
            "10",
            "4,763"
          ],
          [
            "11",
            "5,557"
          ],
          [
            "12",
            "6,350"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Interpolated Cumulative Paid Claims — Accident Year 2012 ($000)",
        "headers": [
          "Closed Claim Counts (000)",
          "Paid Claims ($000)"
        ],
        "rows": [
          [
            "5",
            "1,160"
          ],
          [
            "6",
            "1,900"
          ],
          [
            "7",
            "2,640"
          ],
          [
            "8",
            "3,380"
          ],
          [
            "9",
            "4,120"
          ],
          [
            "10",
            "4,860"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The selected annual severity trend rate for all maturities is 5%."
      },
      {
        "type": "line",
        "text": "• Use an all-year simple average to determine age-to-age claim development factors."
      },
      {
        "type": "line",
        "text": "• There is no development beyond 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3.75,
        "prompt": "Calculate an estimate of ultimate claims for accident year 2013 utilizing the reported Berquist-Sherman method with adjustments reflecting changes in both case outstanding and claim settlement rates.",
        "solution": "Adjusted Reported Triangle = Adjusted Paid + Adj Open Claim Count x (Adj Avg CO) \n \nAvg CO adj = Case outstanding / Open CC  \n \n \n     \n \nDR = Closed Claim Counts / Ult Claim Counts   Restated Closed Claim Counts \n \n   \n \n \nAdjusted Paid Triangle      Adj Open CC = Reported – Adjusted \n \n   \n \nAdjusted Reported Triangle \n \n \n \n \n \n \n \n \n \n \n \nAdjusted \nusing 5% \ntrend \n<- select latest diagonal \n1700 + 265 (2) \n\nATA \n \n \n \nUlt Claims = 2380 (3.553) = 8,456",
        "insight": "Have an understanding of the Berquist-Sherman method and how to use it to adjust for environmental changes."
      }
    ]
  },
  {
    "id": "fall-2014-21",
    "number": 21,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-14"
    ],
    "points": 2.0,
    "questionPage": 24,
    "solutionPages": [
      76,
      77,
      78
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for an insurance company:"
      },
      {
        "type": "table",
        "title": "Gross Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "3,500",
            "8,120",
            "12,180",
            "14,616"
          ],
          [
            "2011",
            "3,000",
            "6,840",
            "10,465",
            ""
          ],
          [
            "2012",
            "3,300",
            "7,656",
            "",
            ""
          ],
          [
            "2013",
            "3,250",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Net Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "2,275",
            "5,278",
            "7,917",
            "9,500"
          ],
          [
            "2011",
            "2,100",
            "4,788",
            "7,326",
            ""
          ],
          [
            "2012",
            "2,475",
            "5,742",
            "",
            ""
          ],
          [
            "2013",
            "2,600",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Assume no further development after 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Using the data, determine the structure of the company's reinsurance program.",
        "solution": "Accident Net to Gross triangle \nYear 12 Months 24 Months 36 Months 48 Months \n2010 0.65 0.65 0.65 0.65 \n2011 0.7 0.7 0.7  \n2012 0.75 0.75   \n2013 0.8    \n \nSince the net to gross ratios are consistent along the accident years, we know that the reinsurance \nstructure is Quota Share.",
        "insight": "The candidate needed to show some calculation and deduce that the reinsurance structure was quota share."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Estimate the ceded IBNR for accident year 2013.",
        "solution": "Determine the Gross IBNR, apply the QS percentage to get ceded. \n \nAY \n12-24 \nMonths \n24-36 \nMonths \n36-48 \nMonths \n2010 2.320 1.5 1.2 \n2011 2.280 1.53  \n2012 2.320   \n    \nSelect 2.307 1.515 1.2 \nAge-to-Ult 4.194 1.818 1.2 \n \nGross IBNR = 3,250,000(4.194) – 3,250,000 = 10,380,500  \nNet/Gross factor = .8 or Ceded factor = .2  \nCeded IBNR = 10,380,500 * (1-.8) = 2,076,100",
        "insight": "Calculate and select age-ultimate factors, correctly develop ultimate claims, correctly take out paid claims (depending on the candidate’s method) and keep track of gross/net/ceded claims."
      }
    ]
  },
  {
    "id": "fall-2014-22",
    "number": 22,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-6"
    ],
    "points": 1.75,
    "questionPage": 25,
    "solutionPages": [
      79,
      80
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following information is available for accident year 2013 as of December 31, 2013:"
      },
      {
        "type": "line",
        "text": "• Selected ultimate claims= $5,000."
      },
      {
        "type": "line",
        "text": "• Reported claims = $3,000."
      },
      {
        "type": "line",
        "text": "• Selected cumulative development factor at 12 months = 6.67."
      },
      {
        "type": "line",
        "text": "• Selected cumulative development factor at 24 months = 2.86."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Calculate cumulative expected reported claims as of July 31 , 2014, using linear interpolation.",
        "solution": "% rpt at 12 months: 1 / 6.67 = 15% \n% rpt at 24 months: 1 / 2.86 = 35% \n \nAt 7/31/2014, month of development = 19 months \n% rpt at 19 months: 0.15 + (19-12) / (24-12) * (0.35 – 0.15) = 0.2667 \n% rpt at 19 months: 0.15 + 7/12 (0.35 – 0.15) = 0.2667 \nIBNR = 5000 – 3000 = 2000 \nExpected emergence from 12/31/2013 to 7/31/2014 = 2000 / (1-.15) * (0.2667 – 0.15) = 275 \nReported claims at 7/31/2014 = 3000 + 275 = 3275",
        "insight": "Interpolate expected emergence between the 12- and 24-month cumulative development factors through July 31, 2014."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Describe why linear interpolation may not be appropriate for estimating the expected reported claims for an immature accident year.",
        "solution": "Linear interpolation assumes that claims developed evenly and uniformly throughout the period. \nReasons this assumptions may not hold include: \n• Additional claims being incurred as well as development on claims already reported as well \nas faster reported claims earlier in the year may cause the linear interpolation to \nunderestimate the expected claims (e.g. seasonality) \n• Highly leveraged development factors due to immature year  \n• Claim distribution is typically not a straight line, but rather a curve, similar to the following:",
        "insight": "Understand and/or demonstrate that linear interpolation assumes uniform distribution throughout the year and give at least an example of why this assumption may not hold."
      }
    ]
  },
  {
    "id": "fall-2014-23",
    "number": 23,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-9",
      "reserving-17"
    ],
    "points": 3.75,
    "questionPage": 26,
    "solutionPages": [
      81,
      82
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following information is available for an insurance company that began writing business in 2010:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2010",
            "198",
            "285",
            "325",
            "347"
          ],
          [
            "2011",
            "1,220",
            "1,763",
            "2,044",
            ""
          ],
          [
            "2012",
            "13,000",
            "18,750",
            "",
            ""
          ],
          [
            "2013",
            "11,060",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Paid ULAE"
        ],
        "rows": [
          [
            "2010",
            "23"
          ],
          [
            "2011",
            "59"
          ],
          [
            "2012",
            "814"
          ],
          [
            "2013",
            "688"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The actuary has selected a 24-month cumulative paid claim development factor of 1.25."
      },
      {
        "type": "line",
        "text": "• The initial expected claims for accident year 2013 are $31,500."
      },
      {
        "type": "line",
        "text": "• Case outstanding for accident year 2013 as of December 31, 2013 is $5,720."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Estimate IBNR for accident year 2013 as of December 31, 2013 using the paid Bornhuetter-Ferguson technique.",
        "solution": "24-Ult Paid = 1.25, selected 12-24=1.442 (simple avg) \n \nAY  12-24 \n’10   1.439 \n’11  1.445   \n’12  1.442 \n  1.442 \n \nAY 2013 B-F IBNR = 11,060 + (1-1/(1.442*1.25))*31500 \n   -11,060 -5720 = 8304.27",
        "insight": "Select a paid 12-to-24 factor, combine it with the selected 24-to-ultimate factor, and calculate paid Bornhuetter–Ferguson IBNR."
      },
      {
        "id": "b",
        "points": 1.25,
        "prompt": "Estimate unpaid ULAE for accident year 2013 as of December 31, 2013, using the classical technique and the results from part a. above.",
        "solution": "CY  Paid ULAE  Paid Claims  ULAE %  \n10  23   198   11.62% \n11  59   1307   4.52% \n12  814   13585   5.99% \n13  688   17113   4.02% \n \nNo obvious trend in %. 2010 High but very little weight given in weighted average \nSELECTED = 1589/32201=4.92% ~5.00% \n \nUnpaid ULAE for AY 2013 = 0.05 (1/2*5720 + 8304.27) = 558.21",
        "insight": "Select a ULAE ratio and apply the classical formula to half of case outstanding plus IBNR."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "State the key assumptions of the classical technique, and briefly comment on the appropriateness of utilizing the classical technique in estimating unpaid ULAE for this company.",
        "solution": "Assumptions: \n- 50% of ULAE incurred at opening of claim and 50% for closing claim. \n- The future cost and activity spent on unreported claims and reported and open claims is \nproportional to IBNR and case amount. \n- Paid ULAE to paid claim has reached a steady state. \n \nThe company is growing which raises a concern about using the classical technique. But the \ngrowth seems to slow down in 2012 and 2013. Hence a ratio using 12&13 may be appropriate.",
        "insight": "State the classical technique’s timing and stable-growth assumptions, and assess them for this rapidly growing insurer."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Describe a refinement to the classical technique that can be used to derive a reasonable estimate of unpaid ULAE for this company.",
        "solution": "The Kittel refinement was designed to handle a growing insurer. Instead of dividing the ratio by \nthe sum of paid claims, divide by the average of the sum of paid claims & incurred claims.",
        "insight": "Describe a classical-technique refinement, such as Kittel’s denominator, that accounts for rapid company growth."
      }
    ]
  },
  {
    "id": "fall-2014-24",
    "number": 24,
    "exam": "Fall 2014",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 2.25,
    "questionPage": 27,
    "solutionPages": [
      83,
      84,
      85
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurer's policyholders were exposed to a severe storm that occurred on December 1, 2013. As of December 31, 2013, the claims related to the storm have been recorded in the claims system, but payments on the claims have not yet been processed. The claim history does not include any severe storms."
      },
      {
        "type": "line",
        "text": "The following information is available for accident year 2013 as of December 31, 2013:"
      },
      {
        "type": "line",
        "text": "• Reported claims = $20,000."
      },
      {
        "type": "line",
        "text": "• Paid claims = $5,000."
      },
      {
        "type": "line",
        "text": "• Initial expected claims as of the beginning of the accident year= $100,000."
      },
      {
        "type": "line",
        "text": "• 12-month age-to-ultimate factor for reported claims = 8.000."
      },
      {
        "type": "line",
        "text": "• 12-month age-to-ultimate factor for paid claims = 20.000."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Identify a technique that will result in a reasonable estimate of ultimate claims. Calculate ultimate claims for accident year 2013 using the identified technique and briefly describe why the estimate is reasonable.",
        "solution": "The Reported BF technique will result in a reasonable estimate for ultimate claims \nB-F Ult = 20,000 + (1 – 1/8) * 100,000 = 107,500 \nThis estimate reflects the increased reported losses that resulted from the storm, but tempers \nthose immature reserve estimates with IBNR calculated using a priori expected losses. Thus it \ndoesn’t overreact to the storm losses but still reflects them.",
        "insight": "Choose a method that includes the reported storm loss while using expected claims to temper future development."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Identify a technique that will overstate the estimate of ultimate claims. Calculate ultimate claims for accident year 2013 using the identified technique and briefly describe why the estimate is overstated.",
        "solution": "Reported development technique will overestimate \nRpt Dev Ult = 20,000 * 8.0 = 160,000 \nThis method applies the historical development to the current year. Because there are no severe \nstorms in the experience used to calculate the Ult-CDF, it will treat the inflated 12-mo reported \nloss just like any other year and will result in an overestimate of the IBNR and thus the Ult loss.",
        "insight": "Show why applying historical reported factors to the storm-inflated claim amount overstates ultimate."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Identify a technique that will understate the estimate of ultimate claims. Calculate ultimate claims for accident year 2013 using the identified technique and briefly describe why the estimate is understated.",
        "solution": "Paid development method will underestimate losses. This is because severe storm losses have \nnot yet been paid (only reported) and historic LDF’s do not include severe storm losses. So \nsevere storm losses that occurred will not be taken into account at all. \nPaid Development Ultimate = 5000 * 20 = 100,000   (paid loss) x (paid loss CDF)",
        "insight": "Show why a paid-only method misses storm claims that were reported but not yet paid."
      }
    ]
  }
];

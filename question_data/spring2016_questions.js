// Transcribed from the official Spring 2016 exam PDF; point grid checked against the CBT workbook.
window.SPRING_2016_QUESTIONS = [
  {
    "id": "spring-2016-1",
    "number": 1,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-5",
      "ratemaking-6"
    ],
    "points": 2.5,
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
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Earned Premium ($000)",
          "Ultimate Losses ($000)"
        ],
        "rows": [
          [
            "2013",
            "1,500",
            "800"
          ],
          [
            "2014",
            "1,600",
            "800"
          ],
          [
            "2015",
            "1,800",
            "1,200"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• A benefit level change increased losses by 10% for policies written after April 1, 2013."
      },
      {
        "type": "line",
        "text": "• A second benefit level change decreased losses by 5% for accidents occurring after January 1, 2014."
      },
      {
        "type": "line",
        "text": "• A rate change of +5% was effective October 1, 2013"
      },
      {
        "type": "line",
        "text": "• Annual loss cost trend is +2%"
      },
      {
        "type": "line",
        "text": "• All policies have a term of one year."
      },
      {
        "type": "line",
        "text": "• The company writes policies uniformly throughout the year and files rates only one time per year."
      },
      {
        "type": "line",
        "text": "• Planned rate revision to be effective January 1, 2017."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Calculate the on-level loss ratio for accident year 2013 for the planned rate revision.",
        "solution": "Benefit On‐Level Factor \nBenefit Level 1.00:  Weighting of 1‐.28125 = .71875 \nBenefit Level 1.10:  Weighting of (.75)(.75)(.5) = .28125 \n \nLoss On‐Level Factor = 1.045 / [ (.28125)(1.1) + .71875] = 1.0164 \n \nRate On‐Level Factor \nRate Level 1.00:  Weighting of 1‐.03125 = 0.96875 \nRate Level 1.05:  Weighting of (.25)(.25)(0.5) = 0.03125 \n \nRate On‐Level Factor:  1.05 / [.96875 + (.03125)(1.05) = 1.0484 \n \n2013 EP x On‐Level Factor = 1500 x 1.0484 = 1572.54 = On‐Level EP \n \n2013 Loss x On‐Level Factor x Loss Trend = 800 x 1.0164 x (1.02) ^ 4.5 = 888.9 \n \nOn‐Level LR for AY 2013 = 888.9 / 1572.54 = 56.53%",
        "insight": "Know how to translate earned premium and incurred losses to current rate and benefit levels."
      }
    ]
  },
  {
    "id": "spring-2016-2",
    "number": 2,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-4",
      "ratemaking-5"
    ],
    "points": 2.5,
    "questionPage": 5,
    "solutionPages": [
      34,
      35,
      36
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "policies"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Policy",
          "Original Effective Date",
          "Original Expiration Date",
          "Transaction Effective Date",
          "Territory",
          "Full-Term Written Premium ($)",
          "Notes"
        ],
        "rows": [
          [
            "A",
            "January 1, 2015",
            "December 31, 2015",
            "January 1, 2015",
            "1",
            "1,000",
            "Start of New Policy"
          ],
          [
            "A",
            "January 1, 2015",
            "December 31, 2015",
            "July 1, 2015",
            "1",
            "N/A",
            "Policy Canceled"
          ],
          [
            "B",
            "July 1, 2015",
            "June 30, 2016",
            "July 1, 2015",
            "1",
            "$500",
            "Start of New Policy"
          ],
          [
            "B",
            "July 1, 2015",
            "June 30, 2016",
            "September 30, 2015",
            "2",
            "$400",
            "Relocated to Territory 2"
          ],
          [
            "C",
            "October 1, 2015",
            "March 31, 2016",
            "October 1, 2015",
            "2",
            "1,000",
            "Start of New Policy"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Full-term written premium represents the policy premium if policy characteristics shown were in place from original effective date to original expiration date."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the 2015 calendar year written premium as of December 31, 2015",
        "solution": "A   1000 – 500 = 500  \n   B   0.25*500 + 0.75*400 = 425 \n   C   1000 \n        1925",
        "insight": "Calculate the correct written premium for each policy."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Calculate the 2015 calendar year earned premium as of December 31, 2015",
        "solution": "A   500 \n   B   0.25*500 + 0.25*400 = 225 \n   C   500 \n        1225",
        "insight": "Calculate the correct earned premium for each policy."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Calculate the in-force premium as of October 1, 2015",
        "solution": "A: not in force  \n   B: 400 \n   C: 1000 \n  Total = 400 + 1000 = 1400",
        "insight": "Calculate the correct in‐force premium for each policy."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Calculate the 2015 calendar year earned exposures separately for Territory 1 and Territory 2 as of December 31, 2015.",
        "solution": "Policy    Terr1 earned expo         Terr2 earned expo\n   A             0.5                                        0 \n   B             0.25                                      0.25 \n   C             0                                           0.25 = (0.5/2) \n                  0.75                                      0.5",
        "insight": "Calculate the correct earned exposure for each policy, and the correct allocation by territory."
      }
    ]
  },
  {
    "id": "spring-2016-3",
    "number": 3,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-4",
      "ratemaking-9"
    ],
    "points": 2.25,
    "questionPage": 6,
    "solutionPages": [
      37,
      38,
      39
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A personal automobile insurance company is considering changing its exposure base from car-years to hours driven."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Evaluate hours driven using three criteria of a good exposure base.",
        "solution": "Sample Responses for “Proportional to Expected Loss” Criteria\n• Hours driven is proportional to expected loss. The more you drive the more likely you are \nto incur a loss  \n• Hours driven is not proportional to expected loss, since some areas have more traffic than \nothers, for example. For that reason, more hours driven does not translate to higher \nexpected loss, necessarily. \n \nSample Responses for “Practical” Criteria \n• Is objective but would be very costly to verify and could be subject to manipulation if \nobtained by self‐reporting  \n• Car‐years is very easy to determine, hours driven is not. It would require expensive \ntelematics to verify  \n• Hours driven is verifiable with telematics \n• Hours driven from an individual would be easy, inexpensive and objective to gain the \ninformation  \n \nSample Responses for “Historical Precedence” Criteria \n• The current exposure base is car‐years. If change to hours driven, it may cause large \npremium swings to insured \n• Since the insurer is changing the exposure base this can be very expensive and time \nconsuming to modify the current rating structure \n• It would be very expensive and difficult to change exposure bases. Would have to restate \nhistorical data if analysis of past was ever performed \n• It is not a preexisting exposure base used within the industry. Thus, there may not be \nindustry benchmark or other information",
        "insight": "Know the three criteria of a good exposure base and evaluate a potential exposure base using each criteria: Proportional to Expected Loss, Practical, and Historical Precedence."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "The company is also considering keeping its current exposure base as car-years but including hours driven in its risk classification system. Briefly discuss the appropriateness of adding this risk characteristic to the company’s risk classification system using three considerations from the Actuarial Standard of Practice No. 12: Risk Classification (for All Practice Areas).",
        "solution": "[Examiner’s note: many sample responses are provided below. Any 3 responses would receive \ncredit, provided 3 considerations from ASOP 12 were covered. In other words, candidates would \nnot receive full credit for providing two responses both discussing the “privacy” consideration.] \n \n• The risk characteristic should have a relationship to expected losses.  The hours driven is \nproportional to future cost since the more hours on the road, the higher likelihood of \nbeing involved in an accident. \n• Hours driven does not have a strong relationship to expected loss because people driving \non the highway will travel further than someone driving the same amount of time in the \ncity. \n• Objective: If hours driven is well defined and measured through a device (rather than self‐\nreported) if may be a good rating variable and not subjective. \n• It is not easy to verify and the cost of collecting it will be expensive. \n• Hours driven may not be appropriate to use because it can be manipulated by drivers if \nself‐reported. \n\n• Causality: Hours driven has a cause and effect relationship with losses. It is intuitive that \nmore hours driven would result in more accidents & more losses, thus public acceptance \nwould occur. \n• Legal: This is probably a legal variable but would want to confirm before implementing. \n• Regulators are likely to approve of this addition. No legal objections are likely.  \n• Hours driven hasn’t been commonly used as a rating characteristic for personal auto \ninsurance, thus it is less likely to be accepted by society. \n• Using hours driven may help avoid adverse selection – risks that drive much more than \naverage can be priced appropriately (rather than underpricing with the insurer attracting \nmany such risks) \n• Credibility: Classes can be made large enough to have enough drivers in them to provide \nreasonable credibility \n• A risk characteristic should be statistically significant meaning different subsets of hours \ndriven should have significantly different expected losses. \n• The classes can be homogeneous if they are created so that the risks within them are \nsimilar with no clear subclasses. \n• Homogeneity: Risks within some group should have similar expected loss. But hours \ndriven is not directly proportional to expected loss. With different speed, car type and \ndriving habits, same hours driven might show different expected loss. \n• Affordability: Using hours driven might make insurance unaffordable for low income \ninsureds with longer commutes. \n• Hours driven is controllable by the insured. They can drive less hours to keep their \npremium down. \n• Controllability: Insureds likely have little control over how much they drive, as many drive \nprimarily to work. Not a desirable characteristic. \n• Privacy: If devices are installed to track hours driven, could be seen as an invasion of \npersonal privacy. \n• Privacy: Hours driven is not private information so it’s likely to be accepted by the public.",
        "insight": "Evaluate hours driven as a risk classification variable based on three considerations from ASOP 12."
      }
    ]
  },
  {
    "id": "spring-2016-4",
    "number": 4,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 2.25,
    "questionPage": 7,
    "solutionPages": [
      40,
      41
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Claim",
          "Policy Effective Date",
          "Accident Date",
          "Report Date",
          "Transaction Date",
          "Claim Status",
          "Loss Payment ($)",
          "Case Reserve Change ($)"
        ],
        "rows": [
          [
            "1",
            "October 1, 2013",
            "December 15, 2013",
            "January 5, 2014",
            "January 7, 2014",
            "Open",
            "0",
            "5,000"
          ],
          [
            "",
            "",
            "",
            "",
            "March 1, 2014",
            "Open",
            "4,000",
            "-4,000"
          ],
          [
            "",
            "",
            "",
            "",
            "January 5, 2015",
            "Closed",
            "500",
            "-1,000"
          ],
          [
            "2",
            "November 1, 2013",
            "February 1, 2014",
            "February 10, 2014",
            "March 1, 2014",
            "Open",
            "0",
            "6,000"
          ],
          [
            "",
            "",
            "",
            "",
            "March 15, 2014",
            "Closed",
            "6,000",
            "-6,000"
          ],
          [
            "3",
            "January 1, 2014",
            "June 1, 2014",
            "June 5, 2014",
            "June 10, 2014",
            "Open",
            "0",
            "10,000"
          ],
          [
            "",
            "",
            "",
            "",
            "September 1, 2014",
            "Open",
            "1,000",
            "1,000"
          ],
          [
            "",
            "",
            "",
            "",
            "January 3, 2015",
            "Open",
            "4,000",
            "-5,000"
          ],
          [
            "4",
            "June 1, 2014",
            "August 15, 2014",
            "July 15, 2015",
            "July 20, 2015",
            "Open",
            "500",
            "5,000"
          ],
          [
            "",
            "",
            "",
            "",
            "March 1, 2016",
            "Open",
            "0",
            "5,000"
          ],
          [
            "",
            "",
            "",
            "",
            "June 1, 2016",
            "Open",
            "5,000",
            "7,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Calendar year 2014 earned premium = $50,000"
      },
      {
        "type": "line",
        "text": "• Calendar year 2015 earned premium = $60,000"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate the 2015 calendar year case incurred losses.",
        "solution": "500 – 1000 + 4000 – 5000 + 500 + 5000 = 4000",
        "insight": "Calculate the 2015 calendar year case incurred losses using the loss payment and case reserve change transactions provided for four claims, organized by policy effective, accident, report, and transaction dates."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the 2014 policy year case incurred losses, evaluated at December 31, 2014.",
        "solution": "10,000 + 1000 + 10000 = 21,000",
        "insight": "Calculate the 2014 policy year case incurred losses, evaluated at December 31, 2014, using the loss payment and case reserve change transactions provided for four claims, organized by policy effective, accident, report, and transaction dates."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Calculate the 2014 accident year case incurred loss ratio, evaluated at December 31, 2015.",
        "solution": "6000 + 6000 – 6000 + 10,000 + 1000 + 10000 + 4000 – 5000 + 5500 = .63\n                                                       50,000",
        "insight": "Calculate the 2014 accident year case incurred losses, evaluated at December 31, 2015, using the loss payment and case reserve change transactions provided for four claims, organized by policy effective, accident, report, and transaction dates."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Provide one advantage and one disadvantage of using policy year data in ratemaking analyses.",
        "solution": "Sample Responses for “Advantage” \n• Provides the best match of premium and losses \n• It provides a good match between exposures and losses \n• Can isolate changes in policy limits or underwriting guidelines \n \nSample Responses for “Disadvantage” \n• Takes longest to develop \n• PY is the least responsive with an extended time to become available for ratemaking \nanalysis \n• Policy year premium and loss need to develop to ult",
        "insight": "Know an advantage and a disadvantage of using policy year data in ratemaking."
      }
    ]
  },
  {
    "id": "spring-2016-5",
    "number": 5,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-16"
    ],
    "points": 1.5,
    "questionPage": 8,
    "solutionPages": [
      42,
      43
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insured had a mature claims-made policy with Insurer A in 2011 and 2012 before switching to an occurrence policy with Insurer B in 2013 and 2014. Below are the losses incurred over a 5-year period:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Date",
          "Report Date",
          "Claim Amount ($)"
        ],
        "rows": [
          [
            "July 1, 2010",
            "October 1, 2012",
            "1,000"
          ],
          [
            "August 1, 2010",
            "November 1, 2011",
            "2000"
          ],
          [
            "January 1, 2011",
            "March 1, 2014",
            "2000"
          ],
          [
            "April 1, 2011",
            "May 1, 2011",
            "3,000"
          ],
          [
            "June 1, 2012",
            "December 1, 2012",
            "4,000"
          ],
          [
            "March 1, 2013",
            "February 1, 2015",
            "5,000"
          ],
          [
            "April 1, 2013",
            "June 1, 2014",
            "3,000"
          ],
          [
            "April 1, 2014",
            "August 1, 2014",
            "2000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Policies are effective on January 1 of each year."
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Determine the loss amount each insurer pays.",
        "solution": "Insured A = 1000+2000+3000+4000=10,000  Insured B = 5000+3000+2000=10,000",
        "insight": "Apply the coverage triggers to identify which claims belong to each claims-made and occurrence policy."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly discuss two reasons why occurrence policy ultimate loss estimates are more volatile than claims-made policy ultimate loss estimates.",
        "solution": "• 1 ‐ When there is a sudden shift in reporting pattern, claims made will be affected very \nlittle while occurrence will be affected a lot. 2 – When there is an unexpected loss trend \nchange claims made will be less impacted and will not be significantly different compared \nto its estimate using the old trend.  In comparison, occurrence will be affected much and \nwill be very different from its estimate using the old trend. \n• One reason is that occurrence policies have pure IBNR, unlike claims‐made policies, so \nthere is a report lag that allows claims to develop further under occurrence policies.  A \nsecond reason is that because occurrence policies have a report and settlement lag, there \nis significantly more time for claims to be influenced by loss trends, so there is greater \nvolatility. \n• Reason 1 ‐ Occurrence policy has longer development period than claims‐made policy \nsince claims‐made policy does not have a report lag but the former one has.  Reason 2 – If \nthere is unexpected change in settlement rate or report",
        "insight": "Understand why occurrence policies are more volatile than claims made policies."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Discuss whether an occurrence policy or a claims-made policy is likely to earn more investment income, assuming a stable interest rate environment.",
        "solution": "• Assuming a stable interest rate environment, an occurrence policy is likely to earn more \ninvestment income since ultimate losses are impacted by both report lag and settlement \nlag, whereas ultimate losses on claims‐made policies are only impacted by settlement lag.  \nTherefore, occurrence policies have more time for premium to be invested. \n• In case of occurrence policies, reserves will have more time to generate investment \nincome.  Also, occurrence policies have to set reserve for both IBNR and IBNER, so larger \nthe amount available to invest, more will be the investment income.  So occurrence \npolicies will have more investment income as compared to claims made.",
        "insight": "Demonstrate why occurrence policies earn more investment income."
      }
    ]
  },
  {
    "id": "spring-2016-6",
    "number": 6,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-8",
      "ratemaking-12"
    ],
    "points": 2.25,
    "questionPage": 9,
    "solutionPages": [
      44,
      45
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following for an individual state:"
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
            "Selected Loss & ALAE Ratio",
            "105.5%"
          ],
          [
            "Expense & ULAE Ratio",
            "30.7%"
          ],
          [
            "Profit & Contingency Provision",
            "-5.0%"
          ],
          [
            "Number of Reported Claims",
            "109"
          ],
          [
            "Claims Required for Full Credibility Standard",
            "683"
          ],
          [
            "Countrywide Indicated Rate Change",
            "8.50%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Partial credibility is determined using the square root rule."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the credibility-weighted indicated rate change for this state.",
        "solution": "Credibility = √(109/683) = 39.95% \nComplement of credibility = 8.5% (countrywide indication) \nRate Indication (*assume all expense variable): \n105.5%/(1‐30.7%+5%) – 1 = 41.99% \nCredibility‐weighted Indicated Rate Change: \n41.99% x 39.95% + (1‐39.95%) x 8.5% = 21.88%",
        "insight": "Know how to calculate a credibility weighted rate level indication using the loss ratio method."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly describe a situation where the given profit and contingency provision may be appropriate.",
        "solution": "• For a long‐tailed line of business where there is a significant amount of investment income \n• Insurer has a negative profit target when they want to be competitive and gain new \nbusiness hoping they will make profit in later years. \n• If the company is forced by regulation to set the profit at this amount",
        "insight": "Understand the purpose of the profit factor in the loss ratio method calculation, that the target profit is a choice made by the insurer, and why an insurer might choose to have a negative profit provision."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "Discuss two situations where the pure premium method is preferable to the loss ratio method for calculating an indicated rate change.",
        "solution": "1. When it is a new business, pure premium method is preferable to loss ratio method, since \nthere is no existing rate. \n2. When new rating variables are introduced and they are not available in historical dataset. \nThus, it’s impossible to on‐level the premium.",
        "insight": "Know the differences between the pure premium method and the loss ratio method, and explain when it is appropriate to use each."
      }
    ]
  },
  {
    "id": "spring-2016-7",
    "number": 7,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 2.25,
    "questionPage": 10,
    "solutionPages": [
      46,
      47,
      48
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Expense Ratios by Calendar Year",
        "headers": [
          "Expense",
          "2013",
          "2014",
          "2015",
          "Percent Fixed"
        ],
        "rows": [
          [
            "General Expenses",
            "4.2%",
            "5.1%",
            "5.9%",
            "70%"
          ],
          [
            "Other Acquisition",
            "9.9%",
            "10.6%",
            "11.5%",
            "80%"
          ],
          [
            "Taxes, Licenses & Fees",
            "1.5%",
            "1.4%",
            "1.5%",
            "30%"
          ],
          [
            "Commission & Brokerage",
            "11.1%",
            "10.4%",
            "11.0%",
            "0%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Projected ultimate pure premium, including LAE = $600."
      },
      {
        "type": "line",
        "text": "• Underwriting profit provision= 12%."
      },
      {
        "type": "line",
        "text": "• Projected average premium per exposure= $1,000."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Calculate the indicated average rate using the premium-based projection method for determining expense provisions. Justify all selections.",
        "solution": "General expenses and other acquisitions are both increasing so the most recent data has been \nchosen. \nGeneral expenses: .059 \nOther Acquisitions: 0.115 \nTaxes, Licenses + fees and commissions + Brokerage do not have any clear pattern and all year \naverage was chosen \nTaxes Lisces + fees: (.015+.014+.015)/3 = . 0146ത \nCommissions + Brokerage: (.111+.104+.11)/3 = . 1083ത \n% fixed expenses \n.059*(.7)+115(.8)+. 0146ത(.3)+\t.1083ത(0) = .1377 \n% variable expenses \n.059*(.3)+115(.2)+. 0146ത(.7)+\t.1083ത(1) = .1593 \nAverage fixed expenses per exposure = (.1377)(1000)=137.7 \n600 ൅ 137.7\n1 െ .12 െ .1593݁ݐܽݎ\t݁݃ܽݎ݁ݒܽ\t݀݁ݐܽܿ݅݀݊ܫ",
        "insight": "Select appropriate expense ratios, accounting for observed trends and volatilities."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Management would like to achieve its targeted underwriting profit without changing rates. Discuss whether this is a reasonable expectation based on the information above.",
        "solution": "• This is not a reasonable expectation. The indicated rate is higher than the current rate. \nAdditionally, if the fixed expenses continue to increase as they have been, this would make \nthe indicated rate even higher, making the company even less likely to hit their target UW \nprofit without changing rates. \n• Using fundamental ins. Equation: \nPremium = Loss & ALAE + Expenses + UW Profit \nManagement could achieve this by lowering expenses (more effici ent processes), lowering \nlosses (tighter claim settlement practices) or by marketing/underwriting to lower risk \nindividuals/insureds. \n• This could be reasonable if the insurer did other things such as reduce expenses, target \nprofitable business to reduce expected losses, implement loss prevention/control programs \nthrough insureds, or layoffs (also ↓ expenses). \n• They will be able to achieve the target profit without changing rates. In fact, price are actually \ntoo high so they will even make a better profit than the target one. Only, General Expenses \nand Other Acquisition are to follow because they continue going  up. We will need to increase \nrates in the long run.",
        "insight": "Draw a conclusion on the feasibility of achieving the target underwriting profit provision, taking into consideration expense trend observations and offering specific alternatives to changing rates."
      }
    ]
  },
  {
    "id": "spring-2016-8",
    "number": 8,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-8",
      "reserving-7"
    ],
    "points": 4.75,
    "questionPage": 11,
    "solutionPages": [
      49,
      50,
      51,
      52
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for a book of business as of December 31, 2015:"
      },
      {
        "type": "table",
        "title": "Rate Change History",
        "headers": [
          "Effective Date",
          "Change"
        ],
        "rows": [
          [
            "October 1, 2013",
            "+4.5%"
          ],
          [
            "April 1, 2015",
            "+2.5%"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Measure",
          "2013",
          "2014",
          "2015"
        ],
        "rows": [
          [
            "Earned Premium",
            "1,870,000",
            "2,228,000",
            "2,404,000"
          ],
          [
            "Earned Exposures",
            "1,420",
            "1,530",
            "1,610"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Loss and ALAE ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2013",
            "2,150,000",
            "2,395,000",
            "3,495,000"
          ],
          [
            "2014",
            "925,000",
            "1,085,000",
            ""
          ],
          [
            "2015",
            "1,250,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Loss and ALAE Excluding Catastrophes ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2013",
            "750,000",
            "895,000",
            "975,000"
          ],
          [
            "2014",
            "825,000",
            "975,000",
            ""
          ],
          [
            "2015",
            "900,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• All policies are semi-annual."
      },
      {
        "type": "line",
        "text": "• Exposures are written evenly throughout each calendar year."
      },
      {
        "type": "line",
        "text": "• Annual severity trend = 5%."
      },
      {
        "type": "line",
        "text": "• Annual frequency trend= -1%."
      },
      {
        "type": "line",
        "text": "• Annual premium trend = 2%."
      },
      {
        "type": "line",
        "text": "• Fixed expense ratio = 5%."
      },
      {
        "type": "line",
        "text": "• Variable expense ratio = 22%."
      },
      {
        "type": "line",
        "text": "• Profit and contingencies provision = 6%."
      },
      {
        "type": "line",
        "text": "• ULAE provision = 7% of loss and ALAE."
      },
      {
        "type": "line",
        "text": "• Projected catastrophe load including ALAE = $235 per exposure."
      },
      {
        "type": "line",
        "text": "• There is no loss development beyond 36 months."
      },
      {
        "type": "line",
        "text": "• Rates are to be in effect for one year."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 4.75,
        "prompt": "Calculate the indicated rate change for policies effective January 1, 2017 using the latest three accident years of experience and assuming full credibility.",
        "solution": "Accident Year  Area A  Area B Area C \n2013  0.9375  0.0625 0 \n2014  0.0625  0.9375 0 \n2015  0  0.5 0.5 \nRate  1  1.045 1.071 \n \nAverage Rate  On Level Factor\n1.002813  1.0681\n1.04219  1.0278\n1.05806  1.01235\n \nAY  EP  OLF Trend Trended OLEP\n2013  1,870,000  1.0681 1.02^4.25 2,172,722\n2014  2,228,000  1.0278 1.02^3.25 2,442,161\n2015  2,404,000  1.01235 1.02^2.25 2,544,577\n    7,159,468\n \nI will use the data for losses & ALAE excluding catastrophes, since we are given a separate \ncatastrophe load. \n \nAY  12‐24  24‐36 36‐Ult \n2013  1.193  1.0894\n2014  1.182 \nSelected  1.1875  1.0894 1 \nATU  1.2937  1.0894 1 \n \nAY  Loss  ATU  Trend Trended Ult \nLoss \nLR \n2013  975,000  1  (0.99*1.05)^4.25 1,149,499 52.91% \n2014  975,000  1.0894  (0.99*1.05)^3.25 1,204,680 49.33% \n2015  900,000  1.2937  (0.99*1.05)^2.25 1,270,373 49.92% \n      3,624,552 50.63% \n \nThe loss ratios are pretty stable across the years. I’ll select the weighted LR of 50.63%. \n \nProjected CAT load including ALAE = $235/exposure. We can convert it to a ratio by dividing by \naverage trended OLEP for 3 years \nCAT load ratio = 235 / (7,159,460 / (1420+1530+1610)) = 14.97% \nIndicated Rate change = [(50.63%+14.97%)*1.07+5%]/[1‐22%‐6%] – 1 = 4.433%.",
        "insight": "Demonstrate an understanding of and perform the calculation for a rate level indication."
      }
    ]
  },
  {
    "id": "spring-2016-9",
    "number": 9,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-15"
    ],
    "points": 2,
    "questionPage": 12,
    "solutionPages": [
      53,
      54
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following are considerations for pricing a large deductible policy:"
      },
      {
        "type": "line",
        "text": "• Deductible = $750,000 per occurrence."
      },
      {
        "type": "line",
        "text": "• Expected total ground-up losses= $1,500,000."
      },
      {
        "type": "line",
        "text": "• ALAE = 12% of total ground-up losses."
      },
      {
        "type": "line",
        "text": "• Fixed expenses = $75,000."
      },
      {
        "type": "line",
        "text": "• Variable expenses = 15% of premium."
      },
      {
        "type": "line",
        "text": "• Underwriting profit provision = 3%."
      },
      {
        "type": "line",
        "text": "• Risk margin = 10% of excess losses."
      },
      {
        "type": "line",
        "text": "• Cost of processing losses below the deductible= 5% of losses below the deductible."
      },
      {
        "type": "line",
        "text": "• Credit risk= 1.5% of expected deductible payments."
      },
      {
        "type": "line",
        "text": "• Deductible applies to losses only and does not reduce ALAE."
      },
      {
        "type": "line",
        "text": "• Loss elimination ratios (LER) and excess ratios are:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Loss Limit ($000)",
          "Loss Elimination Ratio",
          "Excess Ratio"
        ],
        "rows": [
          [
            "$500",
            "85%",
            "15%"
          ],
          [
            "$750",
            "90%",
            "10%"
          ],
          [
            "1,000",
            "95%",
            "5%"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the large deductible premium.",
        "solution": "Expected Excess losses = 1,500,000 x 10% = 150,000 \nExpected deductible losses = 1,500,000 x 90% = 1,350,000 \nALAE = 12% x 1,500,000 = 180,000 \nRM = 10% x 150,000 = 15,000 \nCost of Processing deductible = 5% x 1,350,000 = 675,00 \nCR = 1.5% x 1,350,000 = 20,250 \nPremium = 150,000 + 180,000 + 75,000 + 15,000 + 67,500 + 20,250 \n                                            1 – 15% – 3%  \n= 619207",
        "insight": "Choose the correct loss elimination ratio from the table given and use it along with the other information given to calculate the large deductible premium."
      }
    ]
  },
  {
    "id": "spring-2016-10",
    "number": 10,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-9",
      "ratemaking-10"
    ],
    "points": 2.5,
    "questionPage": 13,
    "solutionPages": [
      55,
      56
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Class",
          "Premium at Current Rate Level ($)",
          "Reported Loss and ALAE ($)",
          "Number of Claims",
          "Current Relativity"
        ],
        "rows": [
          [
            "A",
            "1,257,600",
            "964,200",
            "924",
            "1.00"
          ],
          [
            "B",
            "879,500",
            "632,800",
            "623",
            "1.10"
          ],
          [
            "C",
            "254,900",
            "201,400",
            "185",
            "1.80"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Full credibility standard is 800 claims."
      },
      {
        "type": "line",
        "text": "• Partial credibility is determined based on the square root rule."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the indicated rate change for each class to achieve a revenue-neutral overall change.",
        "solution": "Class \nLoss \nRatio \nProposed \nRel \nChange \nIndicated \nRel  Cred \nCred Wtd \nInd Rel \nCred Wtd \nInd Rel \nRebased \nInd \nChange \nTotal \nChange \nA  76.7%  1.020  1.0200  100.0%  1.020  1.000  0.0%  2.13% \nB  71.9%  0.956  1.0516  88.2%  1.057  1.036  ‐5.8%  ‐3.80% \nC  79.0%  1.051  1.8920  48.1%  1.844  1.808  0.4%  2.59% \nTotal  75.2%                 ‐2.09%",
        "insight": "Calculate rating differentials for classification relativities using no change as the complement of credibility."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly discuss two benefits of multivariate classification ratemaking.",
        "solution": "• To account for the exposure correlations between variables \n• To provide diagnostic statistics to evaluate the model and variables \n• Multivariate ratemaking provides the ability to investigate possible interactions between \nmany different rating variables \n• Multivariate ratemaking attempts to focus on the “signal” of each variable and ignore the \n“noise” component \n• Considers all variables simultaneously and accounts for correlation among variables \n• It accounts for response correlation between rating variables",
        "insight": "Demonstrate an understanding of the benefits of multivariate methods."
      }
    ]
  },
  {
    "id": "spring-2016-11",
    "number": 11,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 1.75,
    "questionPage": 14,
    "solutionPages": [
      57,
      58,
      59
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following loss distribution for accident year 2015 by policy limit:"
      },
      {
        "type": "table",
        "title": "Loss Distribution by Policy Limit",
        "headers": [
          "Size of Loss",
          "$100,000 Limit — Claims",
          "$100,000 Limit — Losses ($000)",
          "$250,000 Limit — Claims",
          "$250,000 Limit — Losses ($000)",
          "$500,000 Limit — Claims",
          "$500,000 Limit — Losses ($000)"
        ],
        "rows": [
          [
            "X <= $100,000",
            "210",
            "14,000",
            "40",
            "3,000",
            "50",
            "3,000"
          ],
          [
            "$100,000 < X <= $250,000",
            "",
            "",
            "50",
            "9,000",
            "40",
            "7,000"
          ],
          [
            "$250,000 < X <= $500,000",
            "",
            "",
            "",
            "",
            "10",
            "4,000"
          ],
          [
            "Total",
            "210",
            "14,000",
            "90",
            "12,000",
            "100",
            "14,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Limit of Liability ($)",
          "Increased Limits Factor"
        ],
        "rows": [
          [
            "100,000",
            "1.00"
          ],
          [
            "250,000",
            "1.50"
          ],
          [
            "500,000",
            "1.90"
          ],
          [
            "750,000",
            "2.25"
          ],
          [
            "1,000,000",
            "2.50"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the increased limits factor for $250,000 assuming a basic limit of $100,000.",
        "solution": "LAS(100,000) = [14,000 + 3,000 + 3,000 +(50 + 40 + 10)(100)]*1000 / (210+90+100) = 75,000 \n \nLAS (150,000 ex. 100,000) = [9,000,000 + 7,000,000 – (50+40)(100,000) + 150,000(10)] / \n(50+40+10) = 85,000 \n \nPr(X>100,000) = (50 + 40 + 10) / (90 + 100) = .526 \n \nLAS(250,000) = 75,000 + .526(85,000) = 119,737 \n \nILF = 119,737 / 75,000 = 1.60",
        "insight": "Calculate an increased limits factor using censored data."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Assume a ground-up annual severity trend of 10% applies to the data above. Briefly discuss how the increased limits factor estimate would change for future accident years without performing any additional calculations.",
        "solution": "• The trend would have a greater impact in the excess layers because losses already at \nlimit would get the full trend in the excess and those just under would be pushed into \nthe excess layer. Since the excess would be increasing faster than the basic, the ILF would \nincrease. \n• The factor given in part (A) will be too low because excess loss trend is greater than the \ntrend for losses confined to the basic limit. \n• The increased limits factor would increase since the excess trend will be larger than the \nground up trend. \n• The ILF estimate would increase in future years due to the leveraged effect of the \nseverity trend on higher limit losses. \n• B/L Trend < Ground Up < XS Trend \nLAS(250K) will increase more than LAS(100K) due to the trend properties listed above \nand thus the ILF will increase.",
        "insight": "Explain why trend affects excess layers more strongly than basic limits and raises the increased limits factor."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Calculate the complement of credibility for the excess layer between $250,000 and $500,000 using the industry increased limits factors below.",
        "solution": "Utilize lower limits analysis since we know the losses capped at 100,000 for all policies and it is \nthe most stable given the small volume of data for all policies. It does however have a lower \nlogical relationship to the losses between 250 and 500 \n= losses capped at 100 * (1.9 – 1.5) / 1.00 \n= 30,000,000 * (1.9 – 1.5) / 1.00 \n= 12,000,000",
        "insight": "Select and support a credibility complement for the $250,000 excess of $250,000 layer."
      }
    ]
  },
  {
    "id": "spring-2016-12",
    "number": 12,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2.5,
    "questionPage": 15,
    "solutionPages": [
      60,
      61
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurer is proposing the following changes in order to address inadequate rates:"
      },
      {
        "type": "table",
        "title": "Building Type — Rating Factor",
        "headers": [
          "Building Type",
          "Current",
          "Proposed",
          "Exposures"
        ],
        "rows": [
          [
            "Commercial",
            "1.00",
            "1.00",
            "300"
          ],
          [
            "Large Industrial",
            "1.15",
            "1.15",
            "500"
          ],
          [
            "Small Industrial",
            "1.20",
            "1.40",
            "100"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Years Since Claim — Discount",
        "headers": [
          "Years Since Claim",
          "Current",
          "Proposed",
          "Exposures"
        ],
        "rows": [
          [
            "0",
            "0%",
            "0%",
            "50"
          ],
          [
            "1",
            "10%",
            "5%",
            "150"
          ],
          [
            "2+",
            "15%",
            "10%",
            "700"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Additive expense factor (after applying rating factors and discounts)= $20."
      },
      {
        "type": "line",
        "text": "• Base premium= $100."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Estimate the change to average premiums.",
        "solution": "Current Average Building Type rating factor = [(1)(300)+(1.15)(500)+(1.2)(100)]/900=1.1056 \nProposed Average Building Type rating factor = [(1)300+(1.15)(500)+(1.4)100)]/900=1.1278 \nCurrent Average discount factor = 1 – [(0)(50)+(.1)(150)+(.15)(700)]/900=.8667 \nProposed Average discount factor = 1 – [(0)(50)+(.05)(150)+(.1)(700)]/900=.9139 \nCurrent Average Premium = 100*1.1056*.8667 + 20 =$115.82 \nProposed Average Premium = 100*1.1278*.9134 + 20 =$123.07 \nChange to Average Premium = 123.07/115.82 – 1 = .063   6.3% Increase",
        "insight": "Calculate the current premium and proposed premium given two variables, a base rate and a fixed expense fee in order to calculate the change in average premium."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly explain a shortcoming with the calculation performed in part a. above.",
        "solution": "• The calculation above does not take into account the exposure correlation between the \ntwo variables.  \n• A shortcoming is estimating the average relativity change for both variables – it wouldn’t \nbe as accurate as rerating each exposure and comparing new actual prem. vs. old prem. \n• Does not take into effect that client base may change as result of rate change. \nDistribution likely not identical for future. \n• Does not consider variable interaction \n• Assumes independence of building type and discount. \n• It doesn’t account for distributional bias by variable.",
        "insight": "Know how using exposure weighted distribution of each variable to get average factor may lead to less than accurate result."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe two non-pricing solutions that can address inadequate rates.",
        "solution": "• Lower Expenses (ex: lay off employees) \n\n• Market to risks with better loss experience  \n• Underwriting guidelines can be strengthened to limit exposure to worse performing \nsegments \n• Insurer could require insureds to fulfill certain loss mitigating practices such as safety \nseminars/training. \n• Restrict coverage – i.e. require higher deductibles without changing rates. \n• Adopt a more aggressive investment strategy to increase investment income.",
        "insight": "Name two non‐pricing actions that would improve profitability and thus address inadequate rates."
      }
    ]
  },
  {
    "id": "spring-2016-13",
    "number": 13,
    "exam": "Spring 2016",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 3.0,
    "questionPage": 16,
    "solutionPages": [
      62,
      63,
      64,
      65
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company sells workers compensation insurance, which includes both indemnity and medical loss types. In preparation for its next rate filing, effective January 1, 2017, the company uses the following information about its book of business for accident year 2015, evaluated as of December 31, 2015:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Territory",
          "Exposures",
          "Indemnity Loss and ALAE ($)",
          "Medical Loss and ALAE ($)",
          "Workers Compensation Total Current Relativity"
        ],
        "rows": [
          [
            "A",
            "2,500",
            "2,000,000",
            "2,000,000",
            "1.20"
          ],
          [
            "B",
            "3,500",
            "3,000,000",
            "500,000",
            "0.90"
          ],
          [
            "C",
            "4,500",
            "4,000,000",
            "1,000,000",
            "1.00"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Indemnity development factor to ultimate = 2.50."
      },
      {
        "type": "line",
        "text": "• Medical development factor to ultimate= 1.50."
      },
      {
        "type": "line",
        "text": "• Indemnity annual loss and ALAE trend = 3%."
      },
      {
        "type": "line",
        "text": "• Medical annual loss and ALAE trend = 6%."
      },
      {
        "type": "line",
        "text": "• Accidents are evenly distributed throughout the experience period."
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• Rates are in effect for one year."
      },
      {
        "type": "line",
        "text": "• The base territory remains the same."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.25,
        "prompt": "Calculate the indicated territorial relativities to the base territory.",
        "solution": "Trend each loss type from July 1, 2015 to January 1, 2018 (2.5 years), then develop separately. Indemnity = observed losses × 2.50 × 1.03^2.5; medical = observed losses × 1.50 × 1.06^2.5. The total trended ultimate losses are about $8,853,931 for A, $8,942,832 for B, and $12,502,185 for C. Divide by exposures to get pure premiums of $3,541.57, $2,555.09, and $2,778.26. Relative to base territory C, the indicated relativities are 1.275, 0.919, and 1.000.",
        "insight": "Know how to trend losses, calculate the appropriate trend period, and develop losses to ultimate – treating Indemnity and Medical losses separately."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Determine the percent change by territory, assuming the indicated relativities are to be adopted and no overall premium change is desired.",
        "solution": "The current exposure-weighted average relativity is about 1.0143; the indicated average is about 1.0385. Use an off-balance factor of 1.0143/1.0385 ≈ 0.977 so total premium is unchanged. The territorial changes are (1.275/1.20) × 0.977 − 1 ≈ +3.7% for A, (0.919/0.90) × 0.977 − 1 ≈ −0.2% for B, and (1.000/1.000) × 0.977 − 1 ≈ −2.3% for C.",
        "insight": "Calculate the percentage change in relativities by territory that would result in no overall premium change."
      }
    ]
  },
  {
    "id": "spring-2016-14",
    "number": 14,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-7"
    ],
    "points": 1.75,
    "questionPage": 17,
    "solutionPages": [
      66,
      67,
      68,
      69
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data evaluated as of December 31, 2015:"
      },
      {
        "type": "table",
        "title": "Company Cumulative Paid Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2012",
            "850",
            "950",
            "1,950",
            "2,450"
          ],
          [
            "2013",
            "700",
            "2,200",
            "3,300",
            ""
          ],
          [
            "2014",
            "900",
            "1,600",
            "",
            ""
          ],
          [
            "2015",
            "1,000",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Industry Paid Claims Age-to-Age Factors",
        "headers": [
          "Accident Year",
          "12–24",
          "24–36",
          "36–48"
        ],
        "rows": [
          [
            "2012",
            "1.97",
            "1.24",
            "1.1"
          ],
          [
            "2013",
            "2.03",
            "1.27",
            ""
          ],
          [
            "2014",
            "2.03",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There is no development after 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the company's accident year 2015 ultimate claims using the paid claim development technique and the company's historical paid claim activity.",
        "solution": "One accepted selection uses the company paid age-to-age factors 1.939, 1.667, and 1.256, based on all-year weighted averages and the available 36-to-48 observation. Accident year 2015 ultimate claims = $1,000,000 × 1.939 × 1.667 × 1.256 ≈ $4,060,000. Other supported factor selections received credit because the company pattern is volatile.",
        "insight": "Calculate and select age‐to‐age LDFs and use them to determine ultimate development factors to derive an estimate of ultimate claims for AY 2015."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the company's accident year 2015 ultimate claims using the paid claim development technique and the industry claim development factors.",
        "solution": "Select industry paid age-to-age factors 2.01, 1.255, and 1.10 using the averages at each maturity. Accident year 2015 ultimate claims = $1,000,000 × 2.01 × 1.255 × 1.10 = approximately $2,774,805.",
        "insight": "Evaluate age‐to‐age LDFs and use them to determine ultimate development factors to derive an estimate of ultimate claims for AY 2015."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Recommend and briefly justify an estimate of the company's accident year 2015 ultimate claims.",
        "solution": "Use about $2.775 million from the industry factors. The company age-to-age factors fluctuate substantially, and its 12-month estimate is sensitive to a highly leveraged development factor. An estimate that blends company and industry results with a sound justification is also reasonable.",
        "insight": "Evaluate estimates of AY 2015 ultimate claims, make a recommended estimate of ultimate claims, and justify their recommendation."
      }
    ]
  },
  {
    "id": "spring-2016-15",
    "number": 15,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-1"
    ],
    "points": 1.5,
    "questionPage": 18,
    "solutionPages": [
      70,
      71
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Personal Auto: Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2013",
            "10,000",
            "12,500",
            "13,750"
          ],
          [
            "2014",
            "10,500",
            "13,120",
            ""
          ],
          [
            "2015",
            "11,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Commercial Auto: Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2013",
            "2000",
            "4,000",
            "5,000"
          ],
          [
            "2014",
            "4,000",
            "8,000",
            ""
          ],
          [
            "2015",
            "5,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The insurer began operating January 1, 2013."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate personal auto reported claims for each of the calendar years 2013, 2014, and 2015.",
        "solution": "Calendar Year 2013: 10,000 \nCalendar Year 2014: 13,000 (10,500+(12,500‐10,000)) \nCalendar Year 2015: 14,870 (11,000+(13,120‐10,500)+(13,750‐12,500))",
        "insight": "Calculate three years of calendar year losses from a loss triangle."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly discuss the appropriateness of using calendar year aggregation in estimating unpaid claims.",
        "solution": "• Due to its fixed nature, calendar year aggregation does not facilitate estimation of unpaid \nclaims.  Few techniques exist that employ calendar year aggregation. \n• Inappropriate – Because the claim losses at the end of the calendar year is fixed and there \nis no development.  There is no estimation on IBNR. \n• CY aggregation is not appropriate because losses are fixed at the end of the year, so it can \nbe difficult to account for future development. \n• It’s not appropriate. Since CY claim data will not develop.",
        "insight": "Candidates were expected understand appropriate and inappropriate usage of calendar year data."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly discuss the appropriateness of using accident year aggregation in estimating unpaid claims.",
        "solution": "• Accident year aggregation is commonly used, and many acceptable techniques exist for \nthe actuary to use in unpaid claim estimation.  Therefore, the use of accident year \naggregation appears appropriate. \n• Appropriate since it is common in the industry with benchmarks. \n• Accident year is more appropriate since claims still develop after year end and provides a \nbetter match of premium to losses than calendar year. \n• AY provides a better match to premium than CY as it allows development beyond a single \nyear. Also, using AY can allow the actuary to isolate AY’s with large claims and then \nproper adjustments can be made. Appropriate for auto.",
        "insight": "Candidates were expected understand appropriate and inappropriate usage of accident year data."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Evaluate the appropriateness of combining the two lines of business above when estimating unpaid claims for this insurer.",
        "solution": "• PA  age to age  12‐24 1.25; 24‐36 1.1 \nCA age to age 12‐24 2 ; 24‐36 1.25 \nNot appropriate.  CA has much different development pattern, and CA is growing much \nfaster than PA \n• Development pattern for commercial auto is longer and it is growing at a faster rate than \npersonal auto. This will distort development patterns and create inaccurate results.  The \nlines should not be combined. \n• It may appear reasonable because both lines are auto coverages and a lack of credibility \nmight suggest a combination is appropriate. \n• PA  LDF  12‐24 1.25; 24‐36 1.1 \nCA LDF 12‐24 2 ; 24‐36 1.25 \nThere is enough data in both lines of business to be credible, so I wouldn’t combine them \ntogether since their development patterns are not very similar. \n• I would not combine the two lines.  Although the commercial auto could benefit from \nhaving more data, the development patterns are clearly different and could cause \ndistortions, especially if the mix of business continues to change.",
        "insight": "Know when it is appropriate or not appropriate to combine two lines of insurance when estimating unpaid claims."
      }
    ]
  },
  {
    "id": "spring-2016-16",
    "number": 16,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-7",
      "reserving-8",
      "reserving-9"
    ],
    "points": 2.25,
    "questionPage": 19,
    "solutionPages": [
      72,
      73
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following as of December 31, 2015:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Cumulative Paid Claims",
          "Paid Development Ultimate Claims",
          "Paid Development Age-to-Ultimate Factor"
        ],
        "rows": [
          [
            "2012",
            "$600",
            "$720",
            "Not Provided"
          ],
          [
            "2013",
            "$500",
            "$625",
            "Not Provided"
          ],
          [
            "2014",
            "Not Provided",
            "Not Provided",
            "2.00"
          ],
          [
            "2015",
            "$150",
            "Not Provided",
            "3.75"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Accident year 2015 reported claims = $350."
      },
      {
        "type": "line",
        "text": "• Expected claim ratio = 65.0%."
      },
      {
        "type": "line",
        "text": "• Calendar year 2015 earned premium= $700."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the following for accident year 2015: i. Case outstanding ii. IBNR using the expected claims technique iii. Total unpaid claim estimate using the expected claims technique",
        "solution": "Case Outstanding = reported – paid = 350 – 150 = 200\nIBNR Using the Expected Claims Technique = Ultimate – Reported = 700*.65 – 350 = 105 \nTotal Unpaid Claim Estimate using the Expected Claims Technique = Ultimate – Paid = 700*.65 – \n305 = 305 or = case outstanding + IBNR = 200 + 105  = 305",
        "insight": "Know the definition of case outstanding, IBNR and unpaid as well as the expected claims technique."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Upon review, the 36-48 age-to-age claims development factor was corrected to be 1.4. Calculate the revised accident year 2015 ultimate claims using the correct factor and the paid development technique.",
        "solution": "AY     Cumulative Paid    Ult Paid Technique     CDF                      Implied LDF             New CDF\n12     600                          720                              1.2 = 720/600      1.2                             1.2 \n13     500                         625                              1.25 = 625/500     1.0417 (corrected) 1.68 \n14                                                                          2.0                          1.6                             2.688 \n15     150                        563 = 150*3.75           3.75                       1.875                         5.04 \n \nUltimate claims  \nAY 2015 = 5.04 * 150 = 756",
        "insight": "Understand the calculation of development factors, both age‐to‐age and age‐to‐ultimate."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Calculate the accident year 2015 ultimate claims using the paid Bornhuetter-Ferguson technique and the corrected age-to-age claims development factor in part b. above.",
        "solution": "AY 2015 ultimate losses = .65*700*(1‐1/5.04) {expected unpaid claims} + 150 {paid losses} = \n514.72",
        "insight": "Calculate ultimate losses using the paid B‐F technique and the LDF calculated in part b."
      }
    ]
  },
  {
    "id": "spring-2016-17",
    "number": 17,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-12"
    ],
    "points": 2.0,
    "questionPage": 20,
    "solutionPages": [
      74,
      75
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following as of December 31, 2015:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Reported Claims ($000)",
          "Paid Claims ($000)",
          "Reported Claim Count Development Factor to Ultimate"
        ],
        "rows": [
          [
            "2013",
            "15,000",
            "15,000",
            "1.0"
          ],
          [
            "2014",
            "12,000",
            "10,000",
            "1.1"
          ],
          [
            "2015",
            "7,000",
            "3,000",
            "2.0"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Age (months)",
          "Case Outstanding to Previous Case Outstanding",
          "Incremental Paid Claims to Previous Case Outstanding"
        ],
        "rows": [
          [
            "48",
            "0",
            "0"
          ],
          [
            "36",
            "0",
            "3.5"
          ],
          [
            "24",
            "0.5",
            "2.0"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Estimate the accident year 2015 unpaid claims using the case outstanding development technique.",
        "solution": "2015 unpaid: @ 12m = c/o = 7000‐3000 = 4000 \n  @ 24m = c/o = 4000*0.5 = 2000 \n  @ 36m = c/o = 0 \nPaid claim:   @ 12m = 3000 \n  @ 24m = 2*4000 \n  @ 36m = 3.5*2000 \nTotal unpaid: 2*4000 + 3.5*2000  = 15000",
        "insight": "Know how to apply the case outstanding development technique to calculate unpaid losses."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Assess whether the case outstanding development technique is appropriate for accident year 2015.",
        "solution": "• Method only valid for report year analysis or where most or all claims are reported in the \nfirst accident period.  The reported claim development factor is 2.0 means that all losses \nare not reported in the first accident period thus the method is not valid.   \n• Accident year 2015 has significant pure IBNR thus method is not appropriate. \n• Accident year 2015 has significant number of unreported claims thus method is not \nappropriate. \n• Accident year 2015 claim development factor highly leveraged thus method is not \nappropriate.",
        "insight": "Recognize when the case outstanding development technique is not appropriate."
      }
    ]
  },
  {
    "id": "spring-2016-18",
    "number": 18,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-9",
      "reserving-10"
    ],
    "points": 2.0,
    "questionPage": 21,
    "solutionPages": [
      76,
      77,
      78
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary is considering whether to use the Cape Cod technique or the Bornhuetter-Ferguson technique."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Briefly describe one similarity and one difference between the Cape Cod and Bornhuetter-Ferguson techniques.",
        "solution": "Sample Responses for “Similarity” \n• Both use a credibility weighted average of the development technique and an expected \nclaims technique. \n• Both use an ELR to determine IBNR \n• Both a credibility weighted average of the expected claims method and the chain ladder \nmethod. \n• Both have the same formula for computing the ultimate claims estimate = Actual \nReported + Expected Ultimate x % Unreported \n• Both methods assume that past data tells you nothing about loss development or IBNR \ngoing forward.  They assume that IBNR is better determined based off an expected claim \ntechnique. \n \nSample Responses for “Difference” \n• CC calculates ELR based on actual reported and OL earned premium.  BF takes ELR using \nan a prior estimate \n• The calculation of the ELR is different.  The BF method uses an a priori estimate whereas \nthe CC method uses ratio of reported claims to used up premium. \n• The ELR in the BF method can be judgmentally selected from industry or pricing data \nwhile the ELR in the CC method is calculated using historical data. \n• The ELR in the BF method is an a priori estimate while the CC uses the past data to \ncalculate the ELR \n• The process to determine the ELR is different.  BF uses an a priori estimate whereas the \nCC method calculates the ELR based on historical data.",
        "insight": "Know that the BF and CC method are similar in that both techniques credibility‐weight the development technique and the expected claims technique based on the % reported / % paid."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Identify two adjustments to reported claims that may be needed before applying either technique.",
        "solution": "• Need to trend losses for any severity/frequency trend.  Remove shock loses from data \nand apply a large loss load \n• Tort Reforms; Loss Trend \n• Benefit changes; Loss Trend \n• Loss Trend; For the CC technique, if there has been a change in claims payment pattern or \ncase reserve philosophy, the paid/incurred losses need to be adjusted to match the \ndevelopment patterns used to calculate the “used up” premium.",
        "insight": "Know that the historical losses underlying the ELR in the BF and CC technique should be comparable to the losses expected in the year for which the ultimate claims estimate is being calculated, and how to adjust the historical losses to achieve this."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Identify two adjustments to earned premium that may be needed before applying either technique.",
        "solution": "• Need to on‐level premiums for any rate changes.  Need to trend premiums to current \nlevel. \n• Adjust for historical rate changes; Adjust for premium trend \n• On‐Level premiums to current rate level.  For the CC method, you also need to calculate \n“used up” premium by multiplying OL premium by the % reported.",
        "insight": "Know that the historical premium underlying the ELR in the BF and CC technique should be comparable to the premium expected in the year for which the ultimate claims estimate is being calculated, and how to adjust the earned premium to achieve this."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "A court decision in 2014 resulted in larger payments to be paid to claimants. Justify which technique would be more appropriate for estimating the accident year 2015 IBNR.",
        "solution": "• Assumption: Court decision ruling will only affect 2014 \nAs such, BF would be more appropriate since I will calculate ELR on an a priori estimate, \n\n• The CC technique.  It would be more responsive to changes in payments. \n• Depends on if the court decision was related to a particular claim only or if it’s expected \nto impact claims going forward.  If it only applies to a single claim in 2014, BF technique \nwould be preferred since the ELR won’t be impacted by this large claim.  If we expect the \ncourt decision to impact claims going forward, the CC method is preferable because it is \nmore responsive. \n• The CC technique would be more appropriate if the ELR used in the BF method was not \nadjusted for the court decision.  The ELR in the CC method is more responsive. \n• The BF method is preferred because the ELR can be selected to reflect the new claims \nenvironment.  Unless adjustments are made to historical data, CC will underestimate the \nELR as majority of historical years do not reflect new claims environment after the court \nruling. \n• I would recommend the BF technique if adjustments are made to the ELR to account for \nthe new claims environment.",
        "insight": "Identify that accident year 2014 would have markedly different experience, and translate that finding into an appropriate recommendation based on how the candidate believed the claims environment would act going forward."
      }
    ]
  },
  {
    "id": "spring-2016-19",
    "number": 19,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 2.0,
    "questionPage": 22,
    "solutionPages": [
      79,
      80
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Discuss whether a frequency-severity technique is appropriate to estimate ultimate claims for the following:"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "A very long-tailed line of business.",
        "solution": "• It is appropriate because the freq & sev may change over time and using freq‐sev can help \nfor diagnosis of trending changes \n• Appropriate.  Select Frequency and Severity based on the long‐term trend is possible \nusing FS method. \n• Yes, as it mitigates very‐leveraged and uncertain development factors, particularly for \nimmature years.",
        "insight": "Know that the frequency‐severity techniques are especially useful for long tailed lines, where the development methods do not produce reliable indications for the most recent years."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "A line of business with a significant proportion of reopened claims.",
        "solution": "• It’s not suitable for significant reopen claims for the sev is calculated based on closed \nclaims payments.  Claim count definition need to be consistent. \n• Not Appropriate.  Not clear definition of claim count ==> hard to estimate frequency \n• If the claim count is defined clearly and objectively (re. reopened claims are not new \nclaims) then it may be appropriate.  However, they must be defined appropriately.  \nOtherwise, not appropriate.",
        "insight": "Know the underlying assumption of the F‐S methods regarding claim counts."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "A line of business with a recent increase in high severity claims during the experience period.",
        "solution": "• Yes.  It’s appropriate.  One can apply this new trend to restate the sev in the past \nexposure period.  One can use B‐F adjustments. \n• The freq‐sev technique can be appropriate if we adjust our incremental severity \nselections to account for the recent increase in severity.  Assuming consistent claim count \ndevelopment, we can use the same freq for all years and judgmentally select incremental \nseverities to reflect the recent increase for recent years with the disposal rate technique. \n• Not appropriate, F‐S technique require a stable mix of types of claims which isn’t satisfied \nhere w/ new bigger claims.",
        "insight": "Know that the F‐S methods assume a stable mix of claims and/or that the methods have the flexibility to allow for adjustment for higher severity claims."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "A line of business that has experienced changes in case reserving philosophy during the experience period.",
        "solution": "• Changes in reserve adequacy does not impact the paid claims development.  If paid claim \nsev‐freq is used, it’s appropriate.  If reported sev‐freq is used then the ult estimation may \nbe distorted if not adjusted properly. (B‐F for example can be used for adjustment.) \n• F‐S is valuable when there are changes in case reserve. The 3rd method of F‐S doesn’t \nrequire case reserve data, thus it is independent of case reserving philosophy \n• Changes in case reserves philosophy will not affect the incremental paid severities or the \ndevelopment of closed claim counts so the freq‐sev disposal rate method will be \nappropriate. \n• Appropriate: can use pd data only which won’t be impacted by case philosophy chgs",
        "insight": "Candidate were expected to know that there are several methods to applying the F‐S technique, which do not necessarily rely upon case reserve levels remaining consistent."
      }
    ]
  },
  {
    "id": "spring-2016-20",
    "number": 20,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-13"
    ],
    "points": 2.5,
    "questionPage": 23,
    "solutionPages": [
      81,
      82
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Cumulative Closed Claim Counts as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48",
          "Estimated Ultimate Claim Count"
        ],
        "rows": [
          [
            "2012",
            "3,314",
            "4,260",
            "4,340",
            "4,380",
            "4,380"
          ],
          [
            "2013",
            "3,390",
            "4,404",
            "4,550",
            "",
            "4,596"
          ],
          [
            "2014",
            "3,342",
            "4,365",
            "",
            "",
            "4,454"
          ],
          [
            "2015",
            "3,607",
            "",
            "",
            "",
            "4,509"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Selected Disposal Rate",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "Selected Disposal Rate",
            "0.800",
            "0.980",
            "0.990",
            "1.000"
          ]
        ]
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
            "2012",
            "7,760",
            "13,664",
            "15,515",
            "16,484"
          ],
          [
            "2013",
            "8,797",
            "13,543",
            "16,824",
            ""
          ],
          [
            "2014",
            "7,821",
            "13,928",
            "",
            ""
          ],
          [
            "2015",
            "9,113",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Parameter (a; b) for Two-Point Exponential Fit as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2012",
            "",
            "(1,069 ; 0.00060)",
            "(16 ; 0.00159)",
            "(22 ; 0.00151)"
          ],
          [
            "2013",
            "",
            "(2,080 ; 0.00043)",
            "(19 ; 0.00149)",
            ""
          ],
          [
            "2014",
            "",
            "(1,187 ; 0.00056)",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The relationship between the cumulative number of closed claims (\"X\") and cumulative paid claims (\"Y\") is: Y = ae^(bX)"
      },
      {
        "type": "line",
        "text": "• The adjusted paid claims for calendar year 2015 are the same as the unadjusted paid claims."
      },
      {
        "type": "line",
        "text": "• There is no development after 48 months."
      },
      {
        "type": "line",
        "text": "• An all-year volume weighted average is used to calculate claim development factors."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Calculate ultimate claims for accident year 2015 using the Berquist-Sherman paid claim development adjustment.",
        "solution": "Sample Calculations: \n3,504 = 0.8 * 4,380 \n3,677 = 0.8 * 4,596 \n \nConstruct the Cumulative Adjusted Paid Claims Triangle: \nThe latest diagonal is unadjusted \nAge 12 uses the parameters of age 24, and Age 24 uses parameters of age 36 (interpolation) \nAge  36 uses the parameters of age 36 (extrapolation) \n \n \nSample Calculations: \n8,751 =1,069 * exp(0.00060 * 3,504) \n15,785 = 16 * exp(0.00159 * 4,336) \n \nUltimate: \nUltimate = 9,113 * 1.8 = 16,403",
        "insight": "Adjust closed counts using the selected disposal rates, build the adjusted paid claims triangle, select development factors, and calculate the revised ultimate."
      }
    ]
  },
  {
    "id": "spring-2016-21",
    "number": 21,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-6",
      "reserving-13"
    ],
    "points": 1.75,
    "questionPage": 24,
    "solutionPages": [
      83,
      84,
      85
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2013",
            "5,500",
            "5,800",
            "6,000"
          ],
          [
            "2014",
            "4,800",
            "5,500",
            ""
          ],
          [
            "2015",
            "3,600",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2013",
            "6,000",
            "6,300",
            "6,000"
          ],
          [
            "2014",
            "5,400",
            "6,200",
            ""
          ],
          [
            "2015",
            "4,150",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Open Claim Counts as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2013",
            "25",
            "15",
            "15"
          ],
          [
            "2014",
            "30",
            "15",
            ""
          ],
          [
            "2015",
            "15",
            "",
            ""
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Create two diagnostic triangles and discuss whether there have been any changes in case reserve adequacy.",
        "solution": "Diagnostic #1 \n \nPaid to Reported \n                  12          24          36 \n2013      .917         .92            1                      .917 = 5500 / 6000 \n2014      .889       .887 \n2015      .867 \n \nOR  \n \nReported to Paid \n                  12          24          36 \n2013      1.09       1.09            1                       \n2014      1.13       1.13 \n2015      1.15 \n \nOR  \n \nCase to Reported \n                  12          24          36 \n2013      .08         .08            0                       \n2014      .11         .11 \n2015      .13 \n \nDiagnostic #2 \n \nAverage O/S \n                  12          24          36 \n2013         20     33.33            0                      20 = 500 / 25 \n2014         20     46.67 \n2015    36.67 \n \n‐ Paid to reported ratios have been decreasing which suggests an increase in case reserve \nadequacy \n‐ the latest diagonal of average o/s are much higher than in the past which indicates a reserve \nadequacy increase",
        "insight": "Identify and calculate two valid diagnostic triangles from the data given that would give the actuary an indication of whether or not there had been a change in case reserve adequacy."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Recommend and briefly justify an appropriate technique to determine ultimate claims based on the conclusion in part a. above.",
        "solution": "• Since it appears there has been an increase in case reserve adequacy, we can use the \nreported Berquist‐Sherman technique which adjusts prior diagonals for current levels of \nO/S adequacy and will lead to a reasonable estimate. \n\n• Use Berquist Sherman case O/S adjustment to restate previous years case o/s to current \nlevel so that LDFs will not be distorted and you can get a better estimate of ultimate.  \nWhen case o/s adequacy is strengthened, unadjusted development methods will \noverstate LDFs & the ultimate. \n• Since reported methods would be distorted by the change in case reserve adequacy, we \nsuggest using the paid development method if paid development and settlement rates \nare consistent. \n• An appropriate technique would be to use the expected claims technique.  This is \nunaffected by operational changes like changes in reserve adequacy or settlement rates, \nand as such will give an appropriate estimate of ultimate claims",
        "insight": "Identify a technique that would not be affected by the case reserve strengthening observed in part a."
      }
    ]
  },
  {
    "id": "spring-2016-22",
    "number": 22,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-16",
      "reserving-17"
    ],
    "points": 2.25,
    "questionPage": 25,
    "solutionPages": [
      86,
      87,
      88,
      89
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48",
          "60"
        ],
        "rows": [
          [
            "2011",
            "10,000",
            "20,000",
            "25,000",
            "27,000",
            "27,000"
          ],
          [
            "2012",
            "10,000",
            "20,000",
            "25,000",
            "27,000",
            ""
          ],
          [
            "2013",
            "10,000",
            "20,000",
            "25,000",
            "",
            ""
          ],
          [
            "2014",
            "10,000",
            "20,000",
            "",
            "",
            ""
          ],
          [
            "2015",
            "10,000",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Paid ALAE ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48",
          "60"
        ],
        "rows": [
          [
            "2011",
            "500",
            "1,500",
            "2,250",
            "2,700",
            "2,700"
          ],
          [
            "2012",
            "500",
            "1,500",
            "2,250",
            "2,475",
            ""
          ],
          [
            "2013",
            "500",
            "1,500",
            "1,875",
            "",
            ""
          ],
          [
            "2014",
            "500",
            "1,000",
            "",
            "",
            ""
          ],
          [
            "2015",
            "250",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Paid Claims Development Factors",
        "headers": [
          "Accident Year",
          "12–24",
          "24–36",
          "36–48",
          "48–60"
        ],
        "rows": [
          [
            "2011",
            "2.00",
            "1.25",
            "1.08",
            "1.00"
          ],
          [
            "2012",
            "2.00",
            "1.25",
            "1.08",
            ""
          ],
          [
            "2013",
            "2.00",
            "1.25",
            "",
            ""
          ],
          [
            "2014",
            "2.00",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Paid ALAE Development Factors",
        "headers": [
          "Accident Year",
          "12–24",
          "24–36",
          "36–48",
          "48–60"
        ],
        "rows": [
          [
            "2011",
            "3.00",
            "1.50",
            "1.20",
            "1.00"
          ],
          [
            "2012",
            "3.00",
            "1.50",
            "1.08",
            ""
          ],
          [
            "2013",
            "3.00",
            "1.25",
            "",
            ""
          ],
          [
            "2014",
            "2.00",
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
          "Earned Premium ($)",
          "Paid Claims ($)",
          "Paid ALAE ($)",
          "Paid ULAE ($)"
        ],
        "rows": [
          [
            "2011",
            "50,000",
            "27,000",
            "2,700",
            "3,240"
          ],
          [
            "2012",
            "50,000",
            "27,000",
            "2,700",
            "3,240"
          ],
          [
            "2013",
            "50,000",
            "27,000",
            "2,700",
            "3,240"
          ],
          [
            "2014",
            "50,000",
            "27,000",
            "2,700",
            "3,240"
          ],
          [
            "2015",
            "50,000",
            "27,000",
            "1,350",
            "4,212"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Prior to 2015, the insurer operated in a steady state environment. Data prior to accident year 2011 exists but is not shown above."
      },
      {
        "type": "line",
        "text": "• Claims and ALAE trend = 0%."
      },
      {
        "type": "line",
        "text": "• Total case outstanding as of December 31, 2015 = $21,000."
      },
      {
        "type": "line",
        "text": "• Total IBNR as of December 31, 2015 = $5,000."
      },
      {
        "type": "line",
        "text": "• In 2015, the insurer began to use its own legal department on more claims in an effort to reduce legal expenses."
      },
      {
        "type": "line",
        "text": "• Legal department salaries are not allocated to specific claims and thus are recorded as ULAE."
      },
      {
        "type": "line",
        "text": "• The legal fees from outside attorneys are billed to specific claims and recorded as ALAE."
      },
      {
        "type": "line",
        "text": "• The change in attorney expenses resulted in a 50% decline in ALAE and a 30% increase in ULAE; the new expense ratios are expected to persist through future calendar years."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Estimate the total unpaid ALAE as of December 31, 2015 for all accident years.",
        "solution": "Selected ALAE LDF’s based on steady state \nSelect Expected ALAE = 2,700 / 2 = 1,350 \nPerform BF on ALAE, this will precisely reflect the change \n \n        12‐24    24‐36    36‐48     48‐60 \nIncr   3.00      1.50      1.20        1.00 \nCum 5.40       1.80     1.20        1.00 \n \nUnpaid ALAE  \n2011 = 0 \n2012 = 0 \n2013 = (1 – 1 / 1.2) x 1,350 = 225 \n2014 = (1 – 1 / 1.8) x 1,350 = 600 \n2015 = (1 – 1 / 5.4) x 1,350 = 1,100 \nTotal = 1,925",
        "insight": "Recognize the change in development pattern is due to the change in the handling of legal expenses and then determine the unpaid ALAE using an approach that properly adjusts for the change going forward."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Estimate the total unpaid ULAE as of December 31, 2015 using the classical technique.",
        "solution": "Ratio of Paid ULAE to Paid Claims \n2011                       0.120 \n\n2012                       0.120 \n2013                       0.120 \n2014                       0.120  = 3,240 / 27,000 \n2015                       0.156  = 4,212 / 27,000 \nSelect 0.156 since this reflects the change \nUnpaid ULAE = 0.156 (0.5 x 21,000 + 5,000) = 2,418",
        "insight": "Use the classical technique for unpaid ULAE and select a ULAE ratio that reflects the new change going forward."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Assume that prior to the change in 2015, half of ULAE was sustained when claims were reported. Fully assess the reasonableness of the estimate provided in part b. above.",
        "solution": "• The estimate above also assumes ULAE is sustained 50% open and 50% when closed.  \nHowever since we change in 2015 to move later ALAE development to ULAE, the 50/50 \nassumption isn’t reasonable going forward.  Therefore our estimate of 2,418 unpaid \nULAE is too low. \n• Prior to change, the classical method seems reasonable, but the 30% increase with the \nchange will occur on the use of the legal department which occurs through the life of the \nclaim.  The 50% of ULAE at the beginning of the claim assumption of the classical will not \nbe reasonable.  The estimate in b is biased and more weight should be on the case O/S, \nso the estimate of unpaid is understated",
        "insight": "Recognize that the change in process would result in more ULAE being recognized after the claim is reported."
      }
    ]
  },
  {
    "id": "spring-2016-23",
    "number": 23,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-16"
    ],
    "points": 2.75,
    "questionPage": 27,
    "solutionPages": [
      90,
      91,
      92
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following information is available as of June 30, 2015 for an insurance company:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "6",
          "18",
          "30",
          "42"
        ],
        "rows": [
          [
            "2012",
            "3,450",
            "4,313",
            "4,528",
            "4,573"
          ],
          [
            "2013",
            "3,200",
            "4,000",
            "4,200",
            ""
          ],
          [
            "2014",
            "3,345",
            "4,181",
            "",
            ""
          ],
          [
            "2015",
            "2,950",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Paid ALAE ($000) as of (months)",
        "headers": [
          "Accident Year",
          "6",
          "18",
          "30",
          "42"
        ],
        "rows": [
          [
            "2012",
            "173",
            "345",
            "498",
            "549"
          ],
          [
            "2013",
            "160",
            "320",
            "462",
            ""
          ],
          [
            "2014",
            "187",
            "335",
            "",
            ""
          ],
          [
            "2015",
            "148",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There is no development beyond 42 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.25,
        "prompt": "Estimate the total ultimate unpaid ALAE for all accident years using a paid ALAE-to-paid claims only development technique.",
        "solution": "Additive Approach \npaid alae to paid claims \n  6  18  30  42 \n12  .05  .08  .11  .12 \n13  .05  .08  .11   \n14  .05  .08     \n15  .05       \n \nadditive ldfs \n  6‐18  18‐30  30‐42 42‐Ult\nSel = stgt avg  .03  .03  .01 0\n \npaid claim ldfs \n  6‐18  18‐30 30‐42  42‐ult\n12  1.25  1.05  1.01 \n13  1.25  1.05   \n14  1.25     \nSel  1.25  1.05  1.01  1\ncdf  1.326  1.0605  1.01  1\n \n  (1)  (2) (1) x (2) = (3) (4) = (3)  – paid to dt. \nAY  Ult claims  Ult ALAE ratio Ult ALAE Unpaid ALAE \n12  4,573  .12 549 0\n13  4,200 (1.01) = 4,242  .12 509 47\n14  4,181 (1.0605) = 4,434  .12 532 197\n15  2,950 (1.326) = 3,911  .12 469 321\n      565\n \nMultiplicative Approach \nALAE / pd Ratio \nAY  6  18  30  42 \n12  .05  .08  .11  .12 \n13  .05  .08  .11   \n14  .05  .08     \n15  .05       \n \nALAE/pd ratio ldfs \nAY  6‐18  18‐30  30‐42  42‐ult\n12  1.6  1.375  1.09  1\n13  1.6  1.375   \n\n14  1.6     \nSel  1.6  1.375  1.09  1\nCDF  2.398  1.499  1.09  1\n \npaid claim ldfs \nAY  6‐18  18‐30 30‐42  42‐ult\n12  1.25  1.05  1.01  1\n13  1.25  1.05   \n14  1.25     \nSel  1.25  1.05  1.01  1\ncdf  1.326  1.061  1.01  1\n \nAY  Ult ALAE Unpaid \n12  4,573 (1) x (.12 x 1)  – 549 = 0\n13  4,200 (1.01) x (.11 x 1.09)  – 462 = 46,616\n14  4,181 (1.061) x (.08 x 1.499)  – 335 = 196,970\n15  2,950 (1.326) x (.05 x 2.398)  – 149 = 320,013\n  563,599",
        "insight": "Know how to use the development technique and apply the ratio technique for ALAE / Paid Claims."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "This insurance company expects a significant change in their mix of business that will impact accident years 2015 and later. Briefly describe one advantage and one disadvantage of using the paid ALAE-to-paid claim only technique during this change in mix of business.",
        "solution": "Sample Responses for “Advantage” \n• During this change, we can recognize the inherent relationship between paid ALAE and \npaid claims. \n• Ratio can be judgmentally selected if calculated ratio doesn’t seem appropriate. \n• The development factors of paid ALAE to paid losses are less leveraged than the factors \nfor paid ALAE. \nSample Responses for “Disadvantage” \n• This mix of business change might bring with it claims that have low indemnity amounts \nbut substantial ALAE, which would probably render this method unreliable. \n• If the mix of business change causes ult claims estimate to be inaccurate → estimated ult \nALAE will also be inaccurate as it is a function of this estimate. \n• If the new mix of business does not maintain a similar ALAE to Paid ratio it could distort \nprojections. \n• If the mix of business increases settlement rate then we will be over‐projecting ultimate \nclaims and ultimate ALAE.",
        "insight": "Know an advantage and disadvantage of the paid ALAE / paid claim ratio method when there is a shift in the mix of business."
      }
    ]
  },
  {
    "id": "spring-2016-24",
    "number": 24,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 3.0,
    "questionPage": 28,
    "solutionPages": [
      93,
      94,
      95
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2011",
            "450",
            "650",
            "730",
            "750"
          ],
          [
            "2012",
            "500",
            "700",
            "780",
            ""
          ],
          [
            "2013",
            "500",
            "750",
            "",
            ""
          ],
          [
            "2014",
            "700",
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
          "Selected Ultimate Claims ($)",
          "Reported Claims ($) as of December 31, 2015"
        ],
        "rows": [
          [
            "2011",
            "750",
            "750"
          ],
          [
            "2012",
            "1,000",
            "950"
          ],
          [
            "2013",
            "1,050",
            "900"
          ],
          [
            "2014",
            "1,200",
            "950"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There is no development after 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Compare actual reported claim emergence to expected reported claim emergence in calendar year 2015 for accident years 2011 through 2014.",
        "solution": "AY  12‐24  24‐36 36‐48 48‐Ult \n2011  1.44  1.12 1.03\n2012  1.40  1.11\n2013  1.50   \nAll year avg.  1.45  1.12 1.03 1.00\nAge‐to‐ult.  1.66  1.15 1.03 1.00\n \n ( 1 )   (2) (3) (4) \nAY  IBNR  Age‐to‐Ult @ \n12/31/2014 \nAge‐to‐Ult @ \n12/31/2015 \n2015 Expected \nEmergence \n2011  0  1.00 1.00 0\n2012  1000‐780=220  1.03 1.00 220.00 \n2013  1050‐750=300  1.15 1.03 238.43 \n2014  1200‐700=500  1.66 1.15 337.26 \nTotal      795.69 \n%\tReported\tൌ\t\nଵ\nAge‐to‐Ult  \nሺ4ሻൌI B N R \t ൈ\n%\tReported\t2014\t‐\t%\tReported\t2015\t\n1‐%\tReported\t2015   \n \n ( 5 )   (6) (7)\nAY  Actual \nEmergence \nExpected \nEmergence \nDifference\n2011  0  0.00 0\n2012  950‐780=170  220.00 ‐50\n2013  900‐750=150  238.43 ‐88\n2014  950‐700=250  337.26 ‐87\nTotal      ‐226\n \nIn all the years, actual emergence came in below expected emergence. The total difference \nbetween them for 2011‐2014 is expected is 226 higher than actual emergence in CY 2015.",
        "insight": "Know either the formula or understand how to derive it."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "When considering actual emergence compared to expected emergence, the actuary can react in one of three ways: i. Reduce the recommended unpaid claims ii. Leave the recommended unpaid claims at the same expected level iii. Increase the recommended unpaid claims Identify and briefly justify a reserving technique that would generate each of the three potential reactions using the results of part a. above.",
        "solution": "i. The reported development technique would reduce unpaid claims because it will apply \nthe development factors to the lower‐than‐expected actual reported claims amount as of \n12/31/2015.  \nii. The Bornhuetter‐Ferguson technique will leave unpaid claims unchanged since it \ncontinues to project future claims according to the a priori expected claims ratio. \niii. The expected claims technique will increase the unpaid claims because it assumes that \nthe ultimate claims will not change. If actual emergence is low, then it just means actual \nemergence will be higher in future periods.",
        "insight": "Identify a technique where the historical pattern of favorable development is used."
      }
    ]
  },
  {
    "id": "spring-2016-25",
    "number": 25,
    "exam": "Spring 2016",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 2,
    "questionPage": 29,
    "solutionPages": [
      96,
      97
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following estimates of ultimate claims ($000):"
      },
      {
        "type": "table",
        "title": "Ultimate Claims Estimates ($000)",
        "headers": [
          "Accident Year",
          "Paid Development",
          "Reported Development",
          "Case Outstanding Development",
          "Paid Bornhuetter–Ferguson",
          "Reported Bornhuetter–Ferguson"
        ],
        "rows": [
          [
            "2013",
            "2,200",
            "2,100",
            "2,250",
            "2,050",
            "2,300"
          ],
          [
            "2014",
            "3,300",
            "3,400",
            "2,700",
            "2,500",
            "2,400"
          ],
          [
            "2015",
            "2,300",
            "3,100",
            "3,150",
            "2,400",
            "3,000"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Identify one potential scenario that explains the differences between estimates resulting from the techniques above for accident year 2014. Select and briefly justify an ultimate claims estimate for accident year 2014 given this scenario.",
        "solution": "• Since the paid and reported development techniques are larger than the case outstanding \nand both BF techniques, combined with the case outstanding, BF paid and BF reported \nmethods being in line with each other, I would estimate that a large paid loss has \nimpacted the paid and reported development techniques. I would select the Paid BF \nmethod which will capture the large paid losses, but not be influenced by it for calculating \nthe unpaid portion. \n• It is possible that there exists changes in LR. In this case, the LR is increasing and the EC \nwould understate the ultimate claims (development gives correct ultimate claims \nestimate). BF, which is the credibility weighted Dev and EC, will give understated ultimate \nclaims. Therefore, I will use reported development (3,400) as selection. \n• The could have been an increase in case reserve adequacy coupled with an increase in \nsettlement rates, causing both the reported and paid development method to be inflated \nbecause they are applying historical LDFS to higher reported/paids at early maturities. I \nwould suggest using one of the BF methods, as they will bring more stability to the \nestimates (relying more on unbiased EC) and are both similar.",
        "insight": "Observe the discrepancy between the results of both development methods when compared to the results of both Bornhuetter‐Ferguson methods, with development showing higher results."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Identify one potential scenario that explains the differences between estimates resulting from the techniques above for accident year 2015. Select and briefly justify an ultimate claims estimate for accident year 2015 given this scenario.",
        "solution": "• A large reported (unpaid) claim would explain the differences. With a large unpaid claim, \nthe reported development estimate would be high because the large reported amount \nmultiplied by LDF that assumes lower level or reported claims. I recommend the reported \nBF estimate of 3,000 because it includes the large unpaid claim, but the large unpaid \nclaim does not impact estimate of IBNR. \n• Since reported, case outstanding, and BF reported are all larger than the paid methods, \nthere must be an increase in case reserve adequacy. I would choose either the paid \ndevelopment or paid BF method (both close together) since it is not impacted by a \nchange in case reserve adequacy. \n• There could be a slowdown in settlement rates. This will cause the paid development \ntechnique to underestimate the true IBNR because it will apply historical LDFs to lower \nlevels of paid losses at early maturities. To remedy this, I would recommend using either \nthe reported development or reported BF techniques, as reported data is not affected by \nchanges in settlement rates.",
        "insight": "Observe the discrepancy between the results of methods that rely on case reserves and those that rely only on paid data, with all methods that rely on case reserves showing higher results."
      }
    ]
  }
];

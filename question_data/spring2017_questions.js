// Transcribed from the official Spring 2017 exam PDF; point grid checked against the CBT workbook.
window.SPRING_2017_QUESTIONS = [
  {
    "id": "spring-2017-1",
    "number": 1,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-4"
    ],
    "points": 1.25,
    "questionPage": 4,
    "solutionPages": [
      34
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company portfolio consists of the following:"
      },
      {
        "type": "line",
        "text": "• 1,000 two-year policies with an effective date of April 1, 2015."
      },
      {
        "type": "line",
        "text": "• 1,000 one-year policies with an effective date of July 1, 2015."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the following for calendar year 2015: i. Written exposures ii. Earned exposures",
        "solution": "Sample Response for written exposures:\n• 1000 * 2 + 1000 = 3000 \n \nSample Responses for earned exposures: \n• 1000 * .75 + 1000 * .5 = 1250 \n• 2 (1000) * 9/24 + 1000 * 6/12 = 1250",
        "insight": "Demonstrate how to calculate written and earned exposures for a portfolio of policies consisting of 1-year and 2-year policies in the calendar year the policies were effective."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the earned exposures for calendar year 2016.",
        "solution": "1000 * 1 + 1000 * .5 = 1500",
        "insight": "Demonstrate how to calculate earned exposures for a portfolio of policies consisting of 1-year and 2-year policies in year 2."
      }
    ]
  },
  {
    "id": "spring-2017-2",
    "number": 2,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-5"
    ],
    "points": 2.0,
    "questionPage": 5,
    "solutionPages": [
      35,
      36,
      37
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following policy year information:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Rate Change Effective Date",
          "Overall Average Rate Change"
        ],
        "rows": [
          [
            "October 1, 2015",
            "5%"
          ],
          [
            "April 1, 2016",
            "10%"
          ],
          [
            "October 1, 2016",
            "5%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• Policy year 2016 written premium = 100,000"
      },
      {
        "type": "line",
        "text": "• Policy year 2016 earned premium = 100,000"
      },
      {
        "type": "line",
        "text": "• Policy year 2016 ultimate losses including LAE = 80,000"
      },
      {
        "type": "line",
        "text": "• Loss trend = 0%"
      },
      {
        "type": "line",
        "text": "• Premium trend = 0%"
      },
      {
        "type": "line",
        "text": "• There are no fixed expenses."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the policy year 2016 earned premium at current rate level using the parallelogram method.",
        "solution": "PY 2016 EP @ Current (Annual policies) \n \nRegion Rate Level Area \nA 1.0 0.25 \nB 1.1 0.5 \nC 1.1 x 1.05 = 1.155 0.25 \n \nCurrent Rate Level = 1 x 1.1 x 1.05 =  1.155 \n \nAvg Rate Level = 0.25 (1) + 0.5 (1.1) + .25 (1.155) \n                           = 1.08875 \nOn-Level Factor = 1.155/1.08875 = 1.06085 \n \nPY 2016 EP @ Current Rate Level = 100,000 x 1.06085 = 106,085",
        "insight": "Calculate the appropriate on-level factor using the parallelogram method and apply to earned premium to develop policy year 2016 earned premium at current rate level."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Calculate the variable expense ratio that would earn an underwriting profit of 5% at the current rate level.",
        "solution": "LR = 80,000 / 106,085 = 0.75411 \nLR/[1-V-Q] = indicated rate change factor \n.75411/[1-V-.05] = 1.0 → .75411 = 1 – V - .05 \nV = 0.1959",
        "insight": "Estimate the variable expense ratio using the earned premium at current rate level calculated in part a."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Assume the company rapidly increased exposures throughout 2016. Explain whether the parallelogram method would overstate or understate a rate level indication.",
        "solution": "The exposures written towards the end of the year are at the new higher rate level. So the true \navg rate level is higher than the one calculated with the parallelogram method. Therefore, the \nOLF found in a) is overstated and leads to overstated OL Premium → understated loss ratio → \nunderstated RL indication",
        "insight": "Understand the underlying assumption of the parallelogram method is that premium is written evenly throughout the year and that the growth in exposures violated this assumption."
      },
      {
        "id": "d",
        "points": 0.25,
        "prompt": "Briefly describe a scenario in which policy year premium is not fixed at the completion of the policy year.",
        "solution": "Any one of the following: \n• When there is a premium audit after the end of a policy year \n• Retrospective rating policies have premium adjustments years after a completed policy \nyear due to loss development",
        "insight": "Differentiate between different premium aggregations and state the reasons for premium development after the end of the policy year."
      }
    ]
  },
  {
    "id": "spring-2017-3",
    "number": 3,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 2.0,
    "questionPage": 6,
    "solutionPages": [
      38,
      39
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information about two claims:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Claim Number",
          "Accident Date",
          "Transaction Date",
          "Incremental Payment ($)",
          "Ending Case Reserves ($)"
        ],
        "rows": [
          [
            "1",
            "January 1, 2015",
            "January 1, 2015",
            "$0",
            "20,000"
          ],
          [
            "1",
            "January 1, 2015",
            "January 1, 2016",
            "25,000",
            "$0"
          ],
          [
            "2",
            "April 1, 2015",
            "July 1, 2015",
            "$0",
            "50,000"
          ],
          [
            "2",
            "April 1, 2015",
            "October 1, 2015",
            "25,000",
            "75,000"
          ],
          [
            "2",
            "April 1, 2015",
            "April 1, 2016",
            "100,000",
            "20,000"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate the incurred losses for accident year 2015 as of May 1, 2016.",
        "solution": "Incurred = Paid + Change in Case Reserve  \n = (0+(20,000 – 0)) + (25,000  + ( 0 – 20,000) ) +(0 + (50,000 – 0)) + (25,000 + (75,000 – 50,000)) + \n   100,000 + (20,000 – 75,000)) = 170,000",
        "insight": "Know the definition of incurred loss as well as how to aggregate losses by accident year."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Calculate the incurred losses for calendar year 2015 and calendar year 2016.",
        "solution": "CY 2015:  ( 0 + (20,000 -0)) + (0 + (50,000 – 0)) + (25,000 + (75,000 – 50,000)) = 120,000 \n \nCY 2016: (25,000 + (0-20,000)) + (100,000 + (20,000 -75,000)) =  50,000",
        "insight": "Know the definition of incurred loss as well as how to aggregate losses by calendar years."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe one advantage and one disadvantage of calendar year aggregation.",
        "solution": "Sample Responses for “advantages”:\n• Data is known at the end of the year (very responsive) \n• There is no development after CY is over so it is the quickest to finish, can use latest CY \ndata \n• CY data is finalized at 12/31/yy so data is static and good for year-end financial reporting \n \nSample Responses for “disadvantages”: \n• Poor match of premium to losses \n• Does not perfectly match premium to losses \n• Doesn’t allow losses to develop, may not be appropriate for long-tailed lines of business  \n• Not useful in estimating IBNR",
        "insight": "Know an advantage and a disadvantage of calendar year aggregation."
      }
    ]
  },
  {
    "id": "spring-2017-4",
    "number": 4,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 2.25,
    "questionPage": 7,
    "solutionPages": [
      40,
      41,
      42,
      43
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for an insurance company:"
      },
      {
        "type": "table",
        "title": "($000)",
        "headers": [
          "Item",
          "Amount"
        ],
        "rows": [
          [
            "Written Premium",
            "15,000"
          ],
          [
            "Earned Premium",
            "12,000"
          ],
          [
            "Ultimate Losses and LAE",
            "10,000"
          ],
          [
            "Commissions and Brokerage",
            "2,250"
          ],
          [
            "Other Acquisition Costs",
            "750"
          ],
          [
            "Taxes, Licenses, and Fees",
            "300"
          ],
          [
            "General Expenses",
            "360"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• All expenses are variable"
      },
      {
        "type": "line",
        "text": "• Underwriting profit provision = -5%"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the following expense ratios to premium and briefly justify the selection of the premium basis used in each calculation: i. Commissions and brokerage ii. General expenses",
        "solution": "Commissions and brokerage are 2,250/15,000 = 15% of written premium because they are incurred when policies are written. General expenses are 360/12,000 = 3% of earned premium because they support policies throughout the coverage period.",
        "insight": "Calculate underwriting expense ratios, select the appropriate premium base for each expense ratio, and give an explanation as to why the premium base was an appropriate selection."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the permissible loss and LAE ratio.",
        "solution": "Other acquisition costs are 750/15,000 = 5% of written premium; taxes, licenses, and fees are 300/15,000 = 2%. With commissions at 15%, general expenses at 3%, and the underwriting profit provision at −5%, the permissible loss and LAE ratio is 1 − (15% + 3% + 5% + 2%) − (−5%) = 80%. The report prints 3% for taxes in one line, but its 25% total uses the correct 2%.",
        "insight": "Correctly identify the additional expense components of the total underwriting expense ratio, calculate them, and then calculate the permissible loss and LAE ratio (PLR)."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly explain how the company may return a profit with an underwriting profit provision less than 0%.",
        "solution": "Any one of the following: \n• The profit can be from investment. If the company has a good investment performance, \nthey can still have a positive total profit \n\n• Investment Income \n• Take a more aggressive investment strategy to offset a u/w profit provision less than 0% \n• In a long tailed LOB where there is more time to earn investment income, the investment \nincome + negative u/w profit can be net positive \n• Under the asset share pricing model, the company may gain a positive return in a long \nrun with a negative profit provision in the one-year horizon. \n• The company may be seeking growth in the short-run and profitability in the long run as \nrenewal expenses are lower than new business expenses. \n• Have low profit provision to gain market share now and increase profits later. \n• The company may have a favorable loss year where actual LR is well under permissible LR",
        "insight": "Explain how the total profit could be positive given that the business was priced using a negative underwriting profit provision."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Demonstrate whether or not the company met underwriting profit expectations.",
        "solution": "The actual loss and LAE ratio is 10,000/12,000 = 83.33%, above the 80% permissible ratio. The company did not meet its underwriting profit expectation.",
        "insight": "Perform a calculation and use its results to state and justify a conclusion as to whether or not the underwriting profit expectations were met."
      }
    ]
  },
  {
    "id": "spring-2017-5",
    "number": 5,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-8"
    ],
    "points": 2.0,
    "questionPage": 8,
    "solutionPages": [
      44,
      45
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "• Experience period on-level trended earned premium = 250,000"
      },
      {
        "type": "line",
        "text": "• Experience period trended and developed losses and LAE = 200,000"
      },
      {
        "type": "line",
        "text": "• Experience period earned exposure = 8,000"
      },
      {
        "type": "line",
        "text": "• Variable expense provision = 19%"
      },
      {
        "type": "line",
        "text": "• Fixed expenses for the experience period = 16,000"
      },
      {
        "type": "line",
        "text": "• Profit and contingency factor = 4%"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the indicated average rate level change using the loss ratio method.",
        "solution": "Ind rate chg = 200/250 + 16/250  -1 = 12.21% \n                                 1-.19-.04",
        "insight": "Calculate an indicated rate level change using the loss ratio method."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Calculate the indicated average rate using the pure premium method.",
        "solution": "Ind avg rate = 200/8 + 16/8  = $35.06 \n                             1-.19-.04",
        "insight": "Calculate an indicated rate level using the pure premium method."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe one situation where the loss ratio method cannot be used and one situation where the pure premium method cannot be used.",
        "solution": "Sample Responses for a situation where loss ratio method cannot be used\n• Loss Ratio method cannot be used in cases where you cannot on-level premium. \n• The loss ratio method gives a change, not an actual rate, so it cannot be used for a new \nterritory or line of business where there is no prior rate. \n• Use the pure premium method when premium information is unavailable (newer \nbusiness). \n• The loss ratio method cannot be used when historical loss ratio information is not \navailable. \n• Loss ratio method cannot be used if trends are uncertain or unknown for either premium \nof losses. This relies on accurate trends and would not be useful without them. \n• LR method cannot be used without earned premium. \n• Loss ratio cannot be used in a case where historical rate change information is not \navailable and therefore premium cannot be brought to the current rate level. \n \nSample Responses for a situation where pure premium method cannot be used \n• Pure premium method cannot be used in cases where exposures are not clearly defined \nover the exposure period. \n• The pure premium method cannot be used if exposure information is not available. \n• Pure premium method cannot be used if looking at a certain variable that is highly \ncorrelated with another. PP method assumes uniform dist between variables. Would \nneed to instead use Adjusted Pure Premium method. \n• The pure premium method cannot be used if exposure mix is changing and the exposure \nmix level of the experience period cannot be adjusted.  \n\n• PP method cannot be used for some commercial lines where there are multiple \nexposures=>not clear which exposure base to use. \n• Use the loss ratio method when there has been a change to the exposure base. \n• Pure premium cannot be used without exposures.",
        "insight": "Briefly describe a situation where the loss ratio method and the pure premium method cannot be used."
      }
    ]
  },
  {
    "id": "spring-2017-6",
    "number": 6,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 1.5,
    "questionPage": 9,
    "solutionPages": [
      46,
      47
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
          "Class",
          "Exposures",
          "Current Rate ($)",
          "True Expected Cost ($)",
          "Proposed Rate ($)"
        ],
        "rows": [
          [
            "A",
            "3,500",
            "$500",
            "$550",
            "$540"
          ],
          [
            "B",
            "8,000",
            "$400",
            "$350",
            "$370"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Scenario 1: If the proposed rates are implemented, the projected number of class A exposures will decrease to 3,150; the projected number of class B exposures will remain unchanged."
      },
      {
        "type": "line",
        "text": "• Scenario 2: If the proposed rates are not implemented, the projected number of class A exposures will increase to 4,500; the projected number of class B exposures will decrease to 7,000."
      },
      {
        "type": "line",
        "text": "• No other expenses are changed in either scenario."
      },
      {
        "type": "line",
        "text": "• Profit provision is 0% in the indicated rate."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the profit in each of the two scenarios.",
        "solution": "Scenario 1  \n(1) (2) (3) (4)\n(5)=(2)x[(3)-\n(4)] \nClass Exposures Prop. Rate Exp. Cost Profit \nA 3,150  540 550 (31,500) \nB 8,000  370 350 160,000  \n  Total 128,500  \n  \nScenario 2  \n(1) (2) (3) (4)\n(5)=(2)x[(3)-\n(4)] \nClass Exposures Prop. Rate Exp. Cost Profit \nA 4,500  500 550 (225,000) \nB 7,000  400 350 350,000  \n  Total 125,000",
        "insight": "Calculate profit by class for two scenarios by taking the proper (rate – expected cost) x exposures."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Explain whether the proposed rates should be implemented given a $10,000 implementation cost.",
        "solution": "The expected benefit to implement is 128,500 – 125,000 = 3,500.  However the implementation \ncost is 10,000 > 3,500.  The proposed rates should not be implemented because the overall \nbenefit does not outweigh the costs.",
        "insight": "Reflect the implementation cost in the proposed rating plan in comparing to the current rating plan and determine if the proposed rates should be implemented given the resulting profit."
      }
    ]
  },
  {
    "id": "spring-2017-7",
    "number": 7,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-12"
    ],
    "points": 2,
    "questionPage": 10,
    "solutionPages": [
      48,
      49
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
          "Earned Exposures",
          "Reported Loss and ALAE ($)",
          "Current Relativity"
        ],
        "rows": [
          [
            "A",
            "10,500",
            "512,000",
            "1.00"
          ],
          [
            "B",
            "5,200",
            "740,000",
            "1.50"
          ],
          [
            "C",
            "13,100",
            "632,000",
            "1.30"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Full credibility standard is 13,260 exposures."
      },
      {
        "type": "line",
        "text": "• Partial credibility is determined based on the square root rule."
      },
      {
        "type": "line",
        "text": "• The complement of credibility is no change."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the indicated rate change for each class that results in a revenue-neutral overall change.",
        "solution": "Pure        Indicated     Current    Normalized                            Cred Wtd \nClass    Premium   Relativity   Relativity     Curr Rel        Credibility       Ind Rel \nA              48.76          .7454          1.00             .8152                .89                .7531 \nB             142.31       2.1754          1.50           1.2228                .63              1.8193  \nC              48.24          .7375          1.30           1.0597                .99                .7394 \nTotal        65.42                            1.2267        1.0000                                     .9394 \n \n             Cred Wtd      Relativity   Change w/         \nClass    Normalized    Change     Off Balance \nA               .8017            -19.8%               -1.7% \nB              1.9367            29.1%              58.4% \nC               .7871            -39.5%              -25.7%  \nTotal        1.0000          -18.5%                0.0%",
        "insight": "Know how to generate rating differentials, apply credibility standards, and off-balance to rate neutral."
      }
    ]
  },
  {
    "id": "spring-2017-8",
    "number": 8,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-10"
    ],
    "points": 1.75,
    "questionPage": 11,
    "solutionPages": [
      50,
      51,
      52
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A company’s current rating plan for fire coverage for personal property insurance only includes territory. The following GLM outputs and experience are from a recent analysis of pure premium:"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Fully justify whether number of occupants would be an appropriate addition to the rating classification plan.",
        "solution": "Number of occupants would be an appropriate addition to the rating classification plan.   \n \nThere’s a clear upward trend in the indicated relativity with the increasing number of occupants \nclearly showing in the 1st graph and the CI is very small for # occupants 1-2 & 3-4 which has a \nclear different indicated relativity.  Even though the CI for >8 is quite wide, it’s due to lack of data.\n \nIn the second graph, the indicated relativity is very consistent through 2013-2016, which means \nthe number of occupants is a good rating variable.  The >8 variable is not consistent again due to \nlack of data. \n \nOverall the chi-squared percentage is small enough.",
        "insight": "Support the rating decision with the GLM relativity pattern, confidence intervals, year-to-year stability, and overall chi-square result."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Identify and briefly describe two types of insurance environments which may discourage use of multivariate methods.",
        "solution": "A tightly regulated department of insurance might disallow the use of multivariate methods and \nimpose restrictions on the local insurance environment. \n \nWhen entering a brand new type of insurance market, often data is too limited to be able to \naccurately implement a multivariate method and other approaches are preferred.",
        "insight": "Identify and briefly explain two environments where multivariate methods were discouraged."
      }
    ],
    "figure": {
      "src": "assets/exam-graphs/spring-2017-q8.png",
      "title": "GLM diagnostic graphs",
      "alt": "GLM output for number of occupants"
    }
  },
  {
    "id": "spring-2017-9",
    "number": 9,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-12"
    ],
    "points": 2.75,
    "questionPage": 13,
    "solutionPages": [
      53,
      54
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
          "State",
          "Class",
          "Exposures",
          "Losses ($)",
          "Current Pure Premium ($)"
        ],
        "rows": [
          [
            "A",
            "1",
            "200",
            "$800",
            "4.00"
          ],
          [
            "A",
            "2",
            "300",
            "2,100",
            "7.00"
          ],
          [
            "A",
            "Subtotal",
            "500",
            "2,900",
            "5.80"
          ],
          [
            "B",
            "1",
            "300",
            "$600",
            "2.00"
          ],
          [
            "B",
            "2",
            "300",
            "1,500",
            "5.00"
          ],
          [
            "B",
            "Subtotal",
            "600",
            "2,100",
            "3.50"
          ],
          [
            "C",
            "1",
            "500",
            "1,500",
            "3.00"
          ],
          [
            "C",
            "2",
            "750",
            "4,500",
            "6.00"
          ],
          [
            "C",
            "Subtotal",
            "1,250",
            "6,000",
            "4.80"
          ],
          [
            "All",
            "1",
            "1,000",
            "2,900",
            "2.90"
          ],
          [
            "All",
            "2",
            "1,350",
            "8,100",
            "6.00"
          ],
          [
            "All",
            "Subtotal",
            "2,350",
            "11,000",
            "4.68"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Full credibility standard is 1,500 exposures."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the credibility-weighted pure premium for class 2, state B using Harwayne’s method.",
        "solution": "Step 1 Pure Premiums at B Exposure\nB PP = 2100/6 = 3.5 \nA adjusted PP = (4*300 + 7*300) / 600 = 5.5 \nC adjusted PP = (3*300) + 6*300) / 600 = 4.5 \n \nStep 2 Adjustment factors \nA adjustment factor = 3.5/5.5 = .636 \nC adjustment factor = 3.5/4.5 = .778 \n \nStep 3 Adjusted Class 2 \nAdjusted A Class 2 = .636 * 7 = 4.45 \nAdjusted C Class 2 = .778 * 6 = 4.67 \n \nStep 4 Complement of Credibility \nWeighted Average A and C = (300 * 4.45 + 750 * 4.67) / 1050 = 4.6 \n \nStep 5 Credibility for B Class 2 \nCredibility = min(SQRT(300/1500),1) = .447 \n \nStep 6 Total Credibility Weighted  \nCredibility weighted PP B Class 2 = .447*5 + 4.61*(1-.447) = 4.78",
        "insight": "Calculate a credibility weighted pure premium for class 2, state B using Harwayne’s method."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Discuss the appropriateness of using Harwayne’s method for this company.",
        "solution": "This method is appropriate as it removes some distributional bias and since exposure volume is \nlow for B2.",
        "insight": "Evaluate the appropriateness of using Harwayne’s method for this company given the data listed in part a."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Evaluate Harwayne's method using three desirable qualities for a complement of credibility.",
        "solution": "Any 3 of the following:\n• It produces accurate estimates (close to the true value) \n• Unbiased – on average estimates are same as true value \n• Statically independent between complement & subject \n• Available – yes, the data is available \n• Easy to compute - It is NOT easy to compute, though doable, requires detail data; OR the \nmethod is relatively simple to use \n• Logical relationship to values being credibility weighted (using the same state’s \nexperience for other class adjusted for bias should be logical)",
        "insight": "Provide an evaluation of Harwayne’s method using three desirable qualities of a complement of credibility."
      }
    ]
  },
  {
    "id": "spring-2017-10",
    "number": 10,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 3.5,
    "questionPage": 14,
    "solutionPages": [
      55,
      56,
      57
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information about an insurance product:"
      },
      {
        "type": "table",
        "title": "Territory Factors",
        "headers": [
          "Territory",
          "Factor"
        ],
        "rows": [
          [
            "A",
            "0.85"
          ],
          [
            "B",
            "1.00"
          ],
          [
            "C",
            "1.35"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Fixed expense per exposure = $50"
      },
      {
        "type": "line",
        "text": "• Variable expense ratio = 17%"
      },
      {
        "type": "line",
        "text": "• Underwriting profit provision = 3%"
      },
      {
        "type": "line",
        "text": "• LAE provision = 16% of loss cost"
      },
      {
        "type": "line",
        "text": "• Base rate = $435"
      },
      {
        "type": "line",
        "text": "• Policy fee = $55"
      },
      {
        "type": "line",
        "text": "• Policy fee is an additive fee added to each exposure in the last step of the rate calculation."
      },
      {
        "type": "line",
        "text": "Based on a separate analysis, an actuary projects the following for calendar-accident year 2016"
      },
      {
        "type": "table",
        "title": "Calendar-Accident Year 2016",
        "headers": [
          "Territory",
          "Earned Exposures",
          "Ultimate Loss Cost ($)"
        ],
        "rows": [
          [
            "A",
            "150",
            "$300"
          ],
          [
            "B",
            "200",
            "$350"
          ],
          [
            "C",
            "100",
            "$500"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the projected total underwriting profit for calendar-accident year 2018.",
        "solution": "Total Premium = (150)(.85)(435) + 150(55) + (200)(1)(435) + 200(55) + (100)(1.35)(435) + 100(55) \n= 225,937.5 \nTotal Losses = 300(150) + 350(200) + 500(100) = 165,000 \n \n1 =((165,000/225,937.5)(1.16) + 50(450/225,937.5)) /(1 - .17 – Profit) \n \nProfit = 11.67%",
        "insight": "Use the pure premium formula to calculate the profit realized."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Calculate the indicated policy fee, indicated territory factors, and indicated base rate.",
        "solution": "• Indicated territory factors \nTerritory Ult Loss Cost Indicated Factors\nA 300 300/350 = 0.857\nB 350 1\nC 500 500/350=1.429\n• Indicated policy fee = fixed expense/(1-V-Q) = 50/(1-17%-3%) = 62.5 \n• Indicated base rate \nAssume the indicated base rate = B. Then, \n(150  X 0.857 + 200 x 1 + 100 x 1.429) x B x (1-V-Q) = 191,400 \n→ 239,250 = 471.45B => B = 507.5",
        "insight": "Know how to calculate territorial relativities, an indicated policy fee, and an indicated base rate."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Management suggests reaching the targeted profit by only increasing the base rate. Discuss this approach.",
        "solution": "Over time, this will lead to adverse selection as Terr C is underpriced and should have its \nrelativity increased. In the short term, this approach will not have a large impact and would \nmake for a simpler regulatory rate filing.",
        "insight": "Understand the implications of taking a simple base rate change instead of a more comprehensive rate change that results in more appropriate rates by territory."
      }
    ]
  },
  {
    "id": "spring-2017-11",
    "number": 11,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 2.5,
    "questionPage": 15,
    "solutionPages": [
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
        "title": "",
        "headers": [
          "Size of Loss ($000)",
          "Loss Distribution",
          "Average Reported Loss ($000)"
        ],
        "rows": [
          [
            "X <= 200",
            "20%",
            "100"
          ],
          [
            "200< X <= 400",
            "20%",
            "300"
          ],
          [
            "400< X <= 600",
            "20%",
            "500"
          ],
          [
            "600< X <= 800",
            "20%",
            "700"
          ],
          [
            "800< X <= 1,000",
            "20%",
            "900"
          ],
          [
            "Total",
            "100%",
            "500"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Expected claim frequency = 1%."
      },
      {
        "type": "line",
        "text": "• Expected losses are uniformly distributed."
      },
      {
        "type": "line",
        "text": "• A home is valued at $1,000,000."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the rate per $1,000 of coverage for the home at the following amounts of insurance: i. $1,000,000 ii. $600,000",
        "solution": "Sample Response for i. 1,000,000 AOI\nRate per $1000 = 1% x 500,000    = $5.00 \n      1,000,000/1000 \n  \nSample Response for ii. 600,000 AOI \nSeverity = 100,000 x 20% + 300,000 x 20% + 500,000 x 20% + 600,000 x 40% = 420,000 \nRate per $1000 = 1% x 420,000    = $7.00 \n      600,000/1000",
        "insight": "Calculate rates both with full insurance to value and with underinsurance."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly discuss a problem associated with underinsurance from the following perspectives: i. Insured ii. Insurer",
        "solution": "Sample Responses for i. Insured \n• Insured will not be fully covered for a total loss or near total loss \n• Insured will suffer coinsurance penalties for losses below the coinsurance requirement \n(i.e. not fully reimbursed for loss) \n \nSample Responses for ii. Insurer \n• If the insurer assumes all policies are insured to value, then rates will be inadequate for \nthose underinsured policies \n• If the insurer doesn’t recognize the underinsurance of some homes, it will charge them an \ninappropriate rate which will be too low to cover expected losses",
        "insight": "Identify a shortcoming of underinsurance from both the perspective of the insured and the insurer."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "The home is insured for $700,000 with no deductible and a coinsurance requirement of 80%. Calculate the indemnity payments and coinsurance penalties for the following losses: i. $600,000 ii. $850,000",
        "solution": "Sample Response for i. 600,000 \na = min(1, 700,000/(1,000,000 x 80%)) = 0.875 \nIndemnity = min(700,000, 600,000 x .875) = 525,000 \nPenalty = 600,000 – 525,000 = 75,000 \n \nSample Responses for ii. 850,000 \nIndemnity = min(700,000, 850,000 x .875) = 700,000 \nPenalty = 700,000 – 700,000 = 0 \nOR \nWhen loss > coinsurance requirement, there is no coinsurance penalty and the indemnity \npayment will be 700,000",
        "insight": "Calculate indemnity payments and coinsurance penalties for an underinsured policy given two loss scenarios."
      }
    ]
  },
  {
    "id": "spring-2017-12",
    "number": 12,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-15"
    ],
    "points": 1.25,
    "questionPage": 16,
    "solutionPages": [
      60,
      61
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information regarding an experience rating plan:"
      },
      {
        "type": "line",
        "text": "• Reported losses and ALAE limited by basic limits and maximum single limit per occurrence (MSL) for the policy being rated as of March 31, 2016 = 175,000"
      },
      {
        "type": "line",
        "text": "• Company subject basic limit loss and ALAE for experience period = 225,000"
      },
      {
        "type": "line",
        "text": "• Expected experience ratio = 0.875"
      },
      {
        "type": "line",
        "text": "• Expected percentage basic limit loss and ALAE for experience period unreported at March 31, 2016 = 0.425"
      },
      {
        "type": "line",
        "text": "• Credibility = 0.35"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the experience modification factor.",
        "solution": "Mod = Z* (AER – EER)/EER \n \nExpected Development of Loss = 225,000*0.875*0.425 = 83,672 \nAER = (175,000+83,672)/225,000 = 1.15 \nMod = (0.35*(1.15-0.875))/0.875 = 0.11",
        "insight": "Calculate the expected unreported losses and ALAE, the projected ultimate losses and ALAE (reported plus unreported), the actual experience ratio, and the experience modification factor."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly describe a scenario in which it would be appropriate for scheduling rating to be used in addition to experience rating.",
        "solution": "If there is a new safety program to be implemented by the insured, there was no performance \nthat would be displayed by this plan in the experience rating method. The actuary would \njudgmentally select a schedule rating in addition to the experience plan.",
        "insight": "Use schedule rating for individual risk features that matter prospectively but are not captured well by past experience."
      }
    ]
  },
  {
    "id": "spring-2017-13",
    "number": 13,
    "exam": "Spring 2017",
    "chapterIds": [
      "ratemaking-8",
      "reserving-7"
    ],
    "points": 5.5,
    "questionPage": 17,
    "solutionPages": [
      62,
      63,
      64,
      65,
      66
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for a book of business as of December 31, 2016:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Earned Premium ($000)"
        ],
        "rows": [
          [
            "2015",
            "3,910"
          ],
          [
            "2016",
            "4,410"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Rate Change History",
        "headers": [
          "Effective Date",
          "Average Rate Change"
        ],
        "rows": [
          [
            "July 1, 2014",
            "-2.0%"
          ],
          [
            "July 1, 2015",
            "4.2%"
          ],
          [
            "July 1, 2016",
            "3.6%"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported Loss and ALAE ($000) Capped at $100,000 as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "1,116",
            "1,448",
            "1,610"
          ],
          [
            "2015",
            "1,975",
            "2,572",
            ""
          ],
          [
            "2016",
            "2,145",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Excess Loss and ALAE ($000) History — Trended Reported Loss and ALAE",
        "headers": [
          "Accident Year",
          "Unlimited",
          "Excess of $100,000"
        ],
        "rows": [
          [
            "2009",
            "3,538",
            "718"
          ],
          [
            "2010",
            "3,193",
            "130"
          ],
          [
            "2011",
            "1,990",
            "234"
          ],
          [
            "2012",
            "4,580",
            "1,949"
          ],
          [
            "2013",
            "2,369",
            "120"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• Exposures are written evenly throughout each calendar year."
      },
      {
        "type": "line",
        "text": "• Annual premium trend = 2.8%."
      },
      {
        "type": "line",
        "text": "• Annual frequency trend = -2%."
      },
      {
        "type": "line",
        "text": "• Annual severity trend capped at $100,000 = 4%."
      },
      {
        "type": "line",
        "text": "• Fixed expense ratio = 4%."
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
        "text": "• ULAE provision = 6% of loss and ALAE."
      },
      {
        "type": "line",
        "text": "• Rates are to be in effect for one year."
      },
      {
        "type": "line",
        "text": "• There is no loss development beyond 36 months."
      },
      {
        "type": "line",
        "text": "• Assume full credibility."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the ultimate loss and ALAE capped at $100,000 for accident years 2015 and 2016.",
        "solution": "LDF’s based on capped losses to avoid instability from large claims.  \nAY 12-24 24-36 36-Ult \n2014 1.297 1.112 1.00 \n2015 1.303 \n  \nAvg 1.3 1.112 1.0 \nselected 1.3 1.112 1.0 \n  \nult loss+ALAE for AY 15 = 2572 x 1.112 x 1.0 = 2860 \nult loss+ALAE for AY 16 = 2145 x 1.3 x 1.112 x 1 = 3101",
        "insight": "Calculate ultimate losses, given a loss development triangle."
      },
      {
        "id": "b",
        "points": 4.5,
        "prompt": "Determine the indicated rate change effective July 1, 2017 using the results from part a. above.",
        "solution": "AY capped loss = unlimited - excess XS loss XS/capped loss \n09    3538 - 718 = 2820 718  \n10 3063 130  \n11 1756 234  \n12 2631 1949  \n13 2249 120  \nTotal 12519 3151 0.252 \n \nXS loss factor = 1.252 ← apply to capped loss to bring to uncapped level. \nTrend periods for loss: average accident date of exp period = 7/1/XX \n                                         “                                            future ”      = 7/1/18 \nTrend periods for prem: average accident date of exp period = 7/1/XX \n                                            “                                            future ”      = 7/1/18 \nOn-leveling: \n \nCRL = (0.98) x (1.042) x (1.036) = 1.058 \nAvg Rate level for CY15 = 0.125x(1.0) + 0.125x(0.98)x(1.042) +0.75x0.98 \n= 0.987645 \nOn-level factor = 1.058 / 0.987645 = 1.071 \nAvg RL for CY16 = 0.125x0.98 + 0.125xCRL + 0.75x1.042x0.98 \n= 1.0206 \nOLF CY 16 = 1.037  \n (1) (2) (3) (4) = (1) x (2) x (3) \nCY EP on level factor trend factor on level trended prem \n15 3910 1.071 (1.028)^3 4549 \n\n16 4410 1.037 (1.028)^2 4833 \n \n (5) (6) (7) (8) \nCY capped loss ult trend factor XS loss factor ULAE factor \n15 2860 [(0.98)(1.04)]^3 1.252 1.06 \n16 3101 [(0.98)(1.04)]^2 1.252 1.06 \n (9) = (5)(6)(7)(8) (10) = (9)/(4) \nCY ult trended loss loss ratio \n15 4018 88.3% \n16 4275 88.6% \n \nTotal LR (weighted all year) = 88.4% \nindicated rate change \n=  0.884 + .04 -1 = \n28.3% \n \n1 - 0.06 -\n0.22",
        "insight": "Calculate the rate change indication with the given loss, premium, and expense information provided."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly describe one reason the insurer might not take the full rate change determined in part b. above.",
        "solution": "Insurer may not decide to take full rate to be competitive in market.",
        "insight": "Briefly describe one reason the insurer might not take the full rate change determined in part b."
      }
    ]
  },
  {
    "id": "spring-2017-14",
    "number": 14,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-6"
    ],
    "points": 1.75,
    "questionPage": 19,
    "solutionPages": [
      67,
      68
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following accident year and report year information as of December 31, 2016:"
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "120",
            "200",
            "276"
          ],
          [
            "2015",
            "120",
            "200",
            ""
          ],
          [
            "2016",
            "60",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Incremental Reported Claim Counts as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "60",
            "10",
            "3"
          ],
          [
            "2015",
            "60",
            "10",
            ""
          ],
          [
            "2016",
            "60",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($000) by Report Year as of (months)",
        "headers": [
          "Report Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "120",
            "180",
            "240"
          ],
          [
            "2015",
            "140",
            "210",
            ""
          ],
          [
            "2016",
            "86",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• No claims are reported beyond 36 months."
      },
      {
        "type": "line",
        "text": "• Accident year 36-to-ultimate development factor = 1.06"
      },
      {
        "type": "line",
        "text": "• No claims occurred prior to January 1, 2014."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Calculate the claims incurred but not yet reported (IBNYR) in total for all years as of December 31, 2016.",
        "solution": "RY                        12-24                           24-36 \n2014                   180/120=1.5              240/180=1.33 \n2015                   210/140=1.5                    \nSelected LDF      1.5                               1.33 \nATU                     2.0                               1.33 \n \nUltimate  \n2014                  240 \n2015                  210*1.33=280 \n2016                  86*2=172 \nSum                   692 \n \nAY                        12-24                           24-36 \n2014                   200/120=1.667           276/200=1.38 \n2015                   200/120=1.667                     \nSelected LDF      1.667                          1.38 \nATU                      2.44                            1.46            1.06 \n \nUltimate  \n2014                  276*1.06=292.56 \n2015                  200*1.46=292 \n2016                  60*2.44=146   \nSum                  731 \n \nIBNYR=IBNR-IBNER=731-692=39",
        "insight": "Develop accident-year and report-year losses separately, then use their relationship to isolate incurred but not yet reported claims."
      }
    ]
  },
  {
    "id": "spring-2017-15",
    "number": 15,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-6",
      "reserving-13"
    ],
    "points": 2.25,
    "questionPage": 20,
    "solutionPages": [
      69,
      70
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2016:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "1,150",
            "2,250",
            "3,000"
          ],
          [
            "2015",
            "1,250",
            "2,400",
            ""
          ],
          [
            "2016",
            "1,550",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "5,150",
            "7,200",
            "8,000"
          ],
          [
            "2015",
            "4,800",
            "6,700",
            ""
          ],
          [
            "2016",
            "4,750",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claim Counts as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "102",
            "107",
            "108"
          ],
          [
            "2015",
            "96",
            "101",
            ""
          ],
          [
            "2016",
            "99",
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
            "2014",
            "52",
            "28",
            "12"
          ],
          [
            "2015",
            "46",
            "25",
            ""
          ],
          [
            "2016",
            "42",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Reported claim counts exclude claims closed without payment."
      },
      {
        "type": "line",
        "text": "• Historical claim cost inflation is 0%."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the paid to reported claim ratio triangle and briefly describe what it suggests about changes in: i. Settlement rates ii. Case reserve adequacy",
        "solution": "Paid to Rpt Claim Ratio \n     AY          12           24           36 \n     2014      22%       31%        38% \n     2015      26%       36% \n     2016      33% \n• It is possible that settlement rates are increasing as the triangle is increasing down the \ncolumns. \n• It is possible that case reserve adequacy is decreasing as the ratios in the triangle are \nincreasing down the columns.",
        "insight": "Compute a paid to reported claim ratio triangle and draw correct inferences on possible changes in settlement rates or case reserve adequacy."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Calculate the closed to reported claim count ratio triangle and the average case outstanding triangle and briefly describe what the triangles suggest about changes in: i. Settlement rates ii. Case reserve adequacy",
        "solution": "Closed to Rpt Claim Count Ratio \n     AY          12           24           36 \n     2014      49%       74%        89% \n     2015      52%       75% \n     2016      58% \n \n     Average Case Outstanding Triangle \n     AY          12           24           36 \n     2014      77         177        417 \n     2015      77         172 \n     2016      76 \n• The closed to reported claim count triangle is increasing down the columns.  So, it seems \na speedup in settlement has occurred. \n• There may have been a slight deterioration in case reserve adequacy in calendar year \n2016 since the last diagonal is lower than the previous diagonals.",
        "insight": "Compute a closed to reported claim count ratio triangle and an average case outstanding triangle."
      }
    ]
  },
  {
    "id": "spring-2017-16",
    "number": 16,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 2.75,
    "questionPage": 21,
    "solutionPages": [
      71,
      72,
      73
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for a private passenger auto insurer as of December 31, 2016:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Selected Ultimate Claim Counts",
          "Earned Premium ($000)",
          "Premium On-Level Adjustment Factor to 2016"
        ],
        "rows": [
          [
            "2012",
            "1,025",
            "132,500",
            "1.405"
          ],
          [
            "2013",
            "3,070",
            "275,250",
            "1.300"
          ],
          [
            "2014",
            "2,950",
            "330,750",
            "1.070"
          ],
          [
            "2015",
            "not provided",
            "360,825",
            "1.050"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Annual claim count trend = -2%"
      },
      {
        "type": "line",
        "text": "• Annual severity trend = 5%"
      },
      {
        "type": "line",
        "text": "• Accident year 2016 selected ultimate severity = 13,370"
      },
      {
        "type": "line",
        "text": "• Accident year 2015 cumulative reported claims as of December 31, 2016 = 30,880,900"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.25,
        "prompt": "Estimate the IBNR for accident year 2015 as of December 31, 2016 using a frequency-severity technique.",
        "solution": "AY 2016 On-level Premium (000)  Tr ended Claim counts  Frequen cy \n2012  186,162.5    1,025 x 0.98^4 = 946    0.00508 \n2013  357,825    3,070 x 0.98^3 = 2890    0.00808 \n2014  353,902.5    2,950 x 0.98^2 = 2833    0.00801 \n2015  378,866.25 \n \nAssuming 2012 as outlier, the frequency I chose is 0.008 \nAdjust frequency to 2015 level = 0.008 x 1.05 = 0.00857 \n               0.98 \nUlt AY 2015 = 13,370 x 1.05^-1 x 0.00857 x 360,825 = 39,374,908 \nIBNR for AY 2015 = 39,374,908 – 30,880,900 = 8,494,008",
        "insight": "Know how to calculate claim frequency, adjust frequency for claim count trend and book of business growth (after using on-level premium factors), adjust severity for severity trend."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe one situation where the frequency-severity techniques are useful and one situation where they are not useful.",
        "solution": "Sample Responses for “useful” situations\n• Useful when there is an inflation trend impacting claims since they are simple to include. \n• Frequency-severity techniques can incorporate frequency and severity trend in the \nestimation. \n• They are useful when there is a change in case reserve adequacy, the paid F-S method is \nnot impacted by changes in case reserve adequacy. \n\n• Useful for longer tail lines of business where earlier development can be highly \nleveraged. \n• These techniques are useful when frequency & severity are changing at different rates \nbecause the two pieces can be broken apart & analyzed separately. \n \nSample Responses for “not useful” situations \n• Not useful when claim count definition is not consistent over the years. \n• FS technique is not useful when there are significant partial payments, i.e. claims are not \nclosed when they are paid. \n• They are not useful when claims frequently reopen since there isn’t a consistent claim \ncount. \n• It is not useful if there has been a change to the exposure base or if it is difficult to know \nwhat counts as 1 exposure. \n• Not useful when attempting to use disposal rate technique when settlement rates are \nchanging \n• If the mix of business has recently changed & each segment has different \nfrequency/severity trends. \n• Not useful when we don’t have enough data to calculate accurate trends since this \nmethod is sensitive to trend selections.",
        "insight": "Describe situations that indicate the usefulness of frequency- severity methods (i.e."
      }
    ]
  },
  {
    "id": "spring-2017-17",
    "number": 17,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 2,
    "questionPage": 22,
    "solutionPages": [
      74,
      75,
      76
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for an insurance company as of December 31, 2016:"
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "68,600",
            "87,800",
            "100,000"
          ],
          [
            "2015",
            "72,800",
            "91,500",
            ""
          ],
          [
            "2016",
            "55,900",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claim Counts as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "80",
            "95",
            "100"
          ],
          [
            "2015",
            "85",
            "99",
            ""
          ],
          [
            "2016",
            "87",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There is no development after 36 months for reported claims or reported claim counts."
      },
      {
        "type": "line",
        "text": "• A new law limiting claimant benefits came into effect on January 1, 2016 and is applicable to accidents occurring on or after January 1, 2016. The expected impact is a 25% reduction in claim severity."
      },
      {
        "type": "line",
        "text": "• There is no loss trend."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Estimate ultimate claims for accident year 2016 as of December 31, 2016 using a frequency-severity technique.",
        "solution": "cumulative rptd cnts \n 12:24 24:36 36:ult \n2014 1.1875 1.0526 \n2015 1.1647  \nStraight Avg 1.1761 1.0526 1.0000 \n   \n rptd clms brought to current \n 12 24 36 \n2014 51450 65850 75000  75000 = 100000x0.75 \n2015 54600 68625 \n2016 55900  \n   \n severity = adj claims / rptd cnts \n 12 24 36 \n2014 643.13 693.16 750.00 \n2015 642.35 693.18 \n2016 642.53  \n   \n severity dev \n 12:24 24:36 36:ult \n2014 1.078 1.082 \n2015 1.079  \nStraight Avg 1.078 1.082 1.000 \n   \nUlt Cnts = 87 x 1.1761 x 1.0526 = 107.7 \nUlt Sev = 642.53 x 1.078 x 1.082 = 749.8 \nUlt Claims = 107.7 x 749.8 = 80753",
        "insight": "Perform a frequency-severity method, separately developing claim counts and severity to ultimate to determine the ultimate loss, or performing the incremental method."
      }
    ]
  },
  {
    "id": "spring-2017-18",
    "number": 18,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-8",
      "reserving-9"
    ],
    "points": 2.0,
    "questionPage": 23,
    "solutionPages": [
      77,
      78
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2016:"
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2013",
            "1,000",
            "1,350",
            "1,450",
            "1,480"
          ],
          [
            "2014",
            "4,500",
            "6,000",
            "6,400",
            ""
          ],
          [
            "2015",
            "4,800",
            "6,350",
            "",
            ""
          ],
          [
            "2016",
            "4,100",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported Claims Age-to-Age Factors",
        "headers": [
          "Accident Year",
          "12–24",
          "24–36",
          "36–48"
        ],
        "rows": [
          [
            "2013",
            "1.350",
            "1.074",
            "1.021"
          ],
          [
            "2014",
            "1.333",
            "1.067",
            ""
          ],
          [
            "2015",
            "1.323",
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
          "Earned Premium"
        ],
        "rows": [
          [
            "2013",
            "1,500"
          ],
          [
            "2014",
            "6,800"
          ],
          [
            "2015",
            "7,200"
          ],
          [
            "2016",
            "7,500"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Accident year 2016 paid claims as of December 31, 2016 = 2,775"
      },
      {
        "type": "line",
        "text": "• Expected claim ratio for all years = 75%"
      },
      {
        "type": "line",
        "text": "• There is no reported claims development after 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the IBNR and the total unpaid claims for accident year 2016 as of December 31, 2016 using the expected claims technique.",
        "solution": "AY 2016 Ult = .75*7500 = 5625 \nUnpaid = 5625-2775 = 2850 \nIBNR = 5625-4100 = 1525",
        "insight": "Understand and apply mechanics of the expected claims technique to calculate IBNR and total unpaid claims."
      },
      {
        "id": "b",
        "points": 1.25,
        "prompt": "Calculate the IBNR and the total unpaid claims for accident year 2016 as of December 31, 2016 using the reported Bornhuetter-Ferguson technique.",
        "solution": "Ultimate = 4100 + (.75)*(7500)*(1-1/1.458) = 5867 \nUnpaid = 3092 \nIBNR = 1766.97 \n \n 12-24 24-36 36-48 \nSelect LDFs 1.335 1.07 1.021 \nCDF 1.458 1.0925 1.021",
        "insight": "Understand and apply mechanics of the Bornhuetter-Ferguson technique to calculate IBNR and total unpaid claims."
      }
    ]
  },
  {
    "id": "spring-2017-19",
    "number": 19,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-7",
      "reserving-12"
    ],
    "points": 3.25,
    "questionPage": 24,
    "solutionPages": [
      79,
      80,
      81,
      82
    ],
    "sourceBlocks": [
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
            "2013",
            "1,000",
            "2000",
            "3,100",
            "3,410"
          ],
          [
            "2014",
            "1,500",
            "3,300",
            "4,785",
            ""
          ],
          [
            "2015",
            "2000",
            "3,600",
            "",
            ""
          ],
          [
            "2016",
            "2,500",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2013",
            "3,000",
            "3,600",
            "3,960",
            "4,000"
          ],
          [
            "2014",
            "4,200",
            "5,250",
            "5,775",
            ""
          ],
          [
            "2015",
            "5,100",
            "6,630",
            "",
            ""
          ],
          [
            "2016",
            "7,500",
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
            "2013",
            "2000",
            "1,600",
            "860",
            "590"
          ],
          [
            "2014",
            "2,700",
            "1,950",
            "990",
            ""
          ],
          [
            "2015",
            "3,100",
            "3,030",
            "",
            ""
          ],
          [
            "2016",
            "5,000",
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
        "points": 0.75,
        "prompt": "Calculate the expected incremental reported claims for accident year 2016 in calendar year 2019 using the reported claim development technique.",
        "solution": "AY 12-24 24-36 36-48 \n2013 1.20 1.10 1.01 \n2014 1.25 1.10   \n2015 1.30     \nAvg 1.25 1.10 1.01 \nSelected 1.25 1.10 1.01 \n \nAY 2016 Cumulative Reported Claims \n@12months = 7500 \n@24 months = 7500 x 1.25 = 9375 \n@36 months = 9375 x 1.10 = 10312 \n@48 months = 10312 x 1.01 = 10415 \n \nIncremental reported in 2019 = 10415 – 10312 = 103",
        "insight": "Know how to use the reported claims development technique given a triangle of cumulative reported claims."
      },
      {
        "id": "b",
        "points": 2,
        "prompt": "Calculate the expected incremental reported claims for accident year 2016 in calendar year 2019 using the incremental paid to previous case outstanding technique.",
        "solution": "Case Development  \nAY 12-24 24-36 36-48 \n2013 0.800 0.538 0.686 \n2014 0.722 0.508   \n2015 0.977     \nsel 0.832 0.523 0.686 \n \nAY 2016 Case Outstanding \n12 24 36 48 \n5000 4160 2176 1493 \n4160 = 5000 x .832  \n \nIncremental Paid   \nAY 12 24 36 48 \n2013 1000 1000 1100 310 \n2014 1500 1800 1485   \n2015 2000 1600   \n2016 2500       \n \nIncremental Paid to Case Outstanding \nAY 12-24 24-36 36-48 \n2013 0.500 0.688 0.360 \n2014 0.667 0.762   \n2015 0.516     \nsel 0.561 0.728 0.360 \n \nAY 2016 Incremental Paid \n12 24 36 48 \n2500 2805 3028 783 \n2805 = 5000 x 0.561 \n \nCumulative Paid \n12 \n24 36 48 \n2500 5305 8333 9116 \n \nCumulative Reported \n12 \n24 36 48 \n7500 9465 10509 10609 \n \nExpected Incremental Reported in CY 2019 = 10609 – 10509 = 100,000",
        "insight": "Know how the incremental paid to previous case outstanding technique worked and to interpret the outputs."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe whether the case outstanding technique is appropriate to project ultimate claims when performing an analysis on each of the following bases: i. Report year ii. Accident year",
        "solution": "Sample Responses for Report Year \n• More appropriate on a reporting basis because assumes all claims known in first year \n• Report year has no pure IBNR.  The technique assumes there is only IBNER, thus it is \nappropriate. \n• Case reserves set when claims reported, tracks with this technique \n \nSample Responses for Accident Year \n• Not appropriate for immature years where not all claims have been reported. \n• Appropriate if most claims are reported by the first maturity.",
        "insight": "Know when the incremental paid to previous case outstanding technique was appropriate to use given different data aggregation options."
      }
    ]
  },
  {
    "id": "spring-2017-20",
    "number": 20,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-7"
    ],
    "points": 2.25,
    "questionPage": 25,
    "solutionPages": [
      83
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data evaluated as of December 31, 2016:"
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
            "2013",
            "300",
            "550",
            "647",
            "700"
          ],
          [
            "2014",
            "500",
            "979",
            "Not Provided",
            ""
          ],
          [
            "2015",
            "400",
            "825",
            "",
            ""
          ],
          [
            "2016",
            "450",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2013",
            "500",
            "660",
            "700",
            "700"
          ],
          [
            "2014",
            "750",
            "900",
            "1,150",
            ""
          ],
          [
            "2015",
            "640",
            "810",
            "",
            ""
          ],
          [
            "2016",
            "700",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There is no development on paid or reported claims after 48 months."
      },
      {
        "type": "line",
        "text": "• The reported claim development technique projects IBNR that is $50,000 lower than the IBNR projected by the paid claim development technique for accident year 2016."
      },
      {
        "type": "line",
        "text": "• Age-to-age development factors are selected using an all year simple average."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.25,
        "prompt": "Calculate the total claims paid in calendar year 2016 for all accident years.",
        "solution": "Reported Claim Link Ratios \n 12-24 24-36 36-48 \n2013 1.32 1.06 1.00 \n2014 1.20 1.28  \n2015 1.27   \nAll-Year Straight \nAverage \n1.26 1.17 1.00 \n \n Paid Claim Link Ratios \n 12-24 24-36 36-48 \n2013 1.83 1.18 1.0819 \n2014 1.96 x / 979  \n2015 2.06   \nAll-Year Straight \nAverage \n1.95 (1.18 + x / 979 ) /  2 1.08 \n \nAY 2016 Reported Development   \nCDF = 1.475374053   \nUltimate(r) = 700 * 1.475 = 1033   \nIBNR(r) = 1033 – 700 = 333     \n \nAY 2016 Paid Development  \nUltimate(p) = 450 * 1.95 * (1.18 + x/979)/2 * 1.08 \nIBNR(p) = 450 * 1.95 * (1.18 + x/979)/2 * 1.08 - 700 \n \nIBNR(r)+ 50 = IBNR(p) \n333 + 50 = 450 * 1.95 * (1.18 + x/979)/2 * 1.08 - 700 \nSolve for x = 1080 \n \nPaid in calendar year 2016 = 450 + (825-400) + (1080-979) + (700-647) = 1029",
        "insight": "Demonstrate paid and reported claims development method knowledge, understand what IBNR includes, and correctly calculate the incremental paid claims in calendar year 2016."
      }
    ]
  },
  {
    "id": "spring-2017-21",
    "number": 21,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 1.5,
    "questionPage": 26,
    "solutionPages": [
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
        "title": "Ultimate Claim Estimates ($000) as of December 31, 2015 and 2016",
        "headers": [
          "Accident Year",
          "2015 Paid Development",
          "2015 Reported Development",
          "2016 Paid Development",
          "2016 Reported Development"
        ],
        "rows": [
          [
            "2013",
            "109",
            "107",
            "108",
            "110"
          ],
          [
            "2014",
            "107",
            "108",
            "105",
            "117"
          ],
          [
            "2015",
            "107",
            "108",
            "102",
            "122"
          ],
          [
            "2016",
            "-",
            "-",
            "100",
            "150"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The actuary selects age-to-age factors for each development technique using a five-year volume-weighted average."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Describe one scenario that could explain the change in estimates from the December 31, 2015 evaluation to the December 31, 2016 evaluation for accident years 2015 and prior.",
        "solution": "There could have been an increase in case reserve adequacy in CY 2016 → this would increase \nrep. development estimates while keeping paid estimates steady.",
        "insight": "Understand the differences between the paid and reported claim development techniques in the context of multiple calendar, accident, and evaluation years."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Describe one scenario impacting only accident year 2016 that could explain the difference between the two development techniques.",
        "solution": "There could be a large unpaid claim in AY 2016 which causes reported development to be higher \nthan past years while paid dev estimate remains steady.",
        "insight": "Understand the differences between the paid and reported claim development techniques for a single accident year."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly describe an adjustment or an alternate technique for estimating ultimate claims that is appropriate for the scenario identified in part a. above.",
        "solution": "The B-S reported adj. technique could be used to adj previous years case reserve adequacy to \ncurrent levels.  The rep dev technique could then be used on the adj rep triangle.",
        "insight": "Understand the weaknesses of the reported claim development technique and provide a brief description of an appropriate alternative technique."
      },
      {
        "id": "d",
        "points": 0.25,
        "prompt": "Briefly describe an adjustment or an alternate technique for estimating ultimate claims that is appropriate for the scenario identified in part b. above.",
        "solution": "Use reported Bornhuetter Ferguson method if large rep loss is expected to be paid.  This will \nrecognize the large loss but estimate IBNR based on expected claims estimate that is not \noverstated by large loss.",
        "insight": "Understand the weaknesses of the reported claim development technique and provide a brief description of an appropriate alternative technique."
      }
    ]
  },
  {
    "id": "spring-2017-22",
    "number": 22,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-13"
    ],
    "points": 2,
    "questionPage": 27,
    "solutionPages": [
      86,
      87
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data as of December 31, 2016:"
      },
      {
        "type": "table",
        "title": "Cumulative Closed Claim Counts as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "34",
          "48"
        ],
        "rows": [
          [
            "2013",
            "660",
            "959",
            "1,119",
            "1,154"
          ],
          [
            "2014",
            "768",
            "1,104",
            "1,317",
            ""
          ],
          [
            "2015",
            "620",
            "825",
            "",
            ""
          ],
          [
            "2016",
            "806",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claim Counts as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2013",
            "1,100",
            "1,155",
            "1,178",
            "1,178"
          ],
          [
            "2014",
            "1,200",
            "1,380",
            "1,463",
            ""
          ],
          [
            "2015",
            "1,000",
            "1,100",
            "",
            ""
          ],
          [
            "2016",
            "1,300",
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
        "points": 2,
        "prompt": "Justify whether the closed claim counts for each accident year at 12 months maturity will be increased, decreased, or not adjusted when applying the Berquist-Sherman technique with paid claim development adjustment.",
        "solution": "Sample #1 \n \nA to A Factors   \n    \nAY 12-24 24-36 36-48  \n2013               1.0 50                1.0 20               1.0 00  \n2014               1.150                1.060    \n2015               1.100       \n    \nAvg               1.100                1.040                1.0 00                1.000   \nCDF               1.144                1.040                1.0 00                1.000   \n* Assume no development past 48 months  \n    \nDisposal Rate   \n    \n660 / 1178 = .560  \n768 / 1463 = .525  \n620 / 1144 = .542  \n806 / 1487 = .542  \n    \n    \n2013 Decrease. Since .560 > .542       \n2014 Increase. Since .525 < .542   \n2015 No Change. Since .542 = .542   \n2016 No Change. Since latest diagonal     \n \nSample #2 \n   \nAY 12-24 24-36 36-48 \n2013 1.050 1.020 1.000 \n2014 1.150 1.060 \n2015 1.100 \n  \nVol \nWeighted 1.102 1.042 1.000 \nCDF 1.148 1.042 1.000 \n  \nAY Ultimate Closed DR \n2013 1,178 660 56.0% \n2014 1,463 768 52.5% \n2015 1,146 620 54.1% \n\n2016 1,492 806 54.0% \n  \nSelect latest diagonal \n  \nAY Adj Closed Count Change \n2013 636 -24 \n2014 790 22 \n2015 619 -1 \n2016 806 0",
        "insight": "Complete the initial steps required when performing a Berquist- Sherman adjustment for changes in the settlement rate of claims."
      }
    ],
    "notice": "The printed question labels the third closed-count column “34” months; the examiner report treats that column as 36 months."
  },
  {
    "id": "spring-2017-23",
    "number": 23,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-7",
      "reserving-10"
    ],
    "points": 3.0,
    "questionPage": 28,
    "solutionPages": [
      88,
      89,
      90
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data as of December 31, 2016:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims as of (months)",
        "headers": [
          "Accident Year",
          "Earned Premium",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2013",
            "2000",
            "390",
            "875",
            "1,135",
            "1,265"
          ],
          [
            "2014",
            "2,260",
            "425",
            "1,065",
            "1,355",
            ""
          ],
          [
            "2015",
            "2,730",
            "564",
            "1,267",
            "",
            ""
          ],
          [
            "2016",
            "3,215",
            "619",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• A court decision on December 31, 2014 led to a 20% increase in severity for all payments occurring after the decision."
      },
      {
        "type": "line",
        "text": "• The company took a rate change of +20% effective on January 1, 2014."
      },
      {
        "type": "line",
        "text": "• Policies are annual and are written evenly throughout the year."
      },
      {
        "type": "line",
        "text": "• There is no development beyond 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate accident year 2016 ultimate claims using the paid claim development technique, incorporating the impact of the court decision.",
        "solution": "Adjust the paid claims before 12/31/2014\n \n \nUltimate claims for AY 2016: 619 × 2.25 × 1.25 × 1.10 = 1,915",
        "insight": "Know the mechanics and assumptions associated with the paid loss development method."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Calculate the accident year 2016 ultimate claims using the Cape Cod technique, incorporating the impact of the court decision.",
        "solution": "Adjust pre-decision paid claims for the 20% severity increase and on-level earned premium for the January 2014 rate change. One accepted Cape Cod calculation uses adjusted paid claims of 4,766 and used-up on-level earned premium of 7,666, giving a 62.2% expected loss ratio. Accident-year 2016 ultimate is 619 + 3,215 × 62.2% × (1 − 1/(2.25 × 1.25 × 1.10)) ≈ 1,972.",
        "insight": "Know the mechanics and assumptions associated with Cape Cod method."
      }
    ]
  },
  {
    "id": "spring-2017-24",
    "number": 24,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-17"
    ],
    "points": 1.5,
    "questionPage": 29,
    "solutionPages": [
      91,
      92,
      93
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "For each of the following insurers, briefly describe why the classical technique is not optimal and briefly discuss an alternative technique that addresses the problem identified."
      },
      {
        "type": "line",
        "text": "• There is no inflation."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "An auto insurer expanding its operations by writing policies in two new states.",
        "solution": "As the Insurer is expanding his business, his book of business will grow and it will create an \nimmediate increase in ULAE. However, payment will be made at much later maturity. So a paid-\nto-paid ratio would be distorted. The Kittel approach corrects this distortion by using an average \nof paid and incurred loss as reserves will also increase right away like ULAE, and would create \nmore stable ratio.",
        "insight": "Diagnose why the classical method of ULAE analysis may provide a poor result when applied to a company writing business in two new states."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "A homeowners insurer located in a hurricane prone area.",
        "solution": "As payment in one calendar year may be artificially increased by a catastrophic event while ULAE \nwill not follow the same increase, it could distort paid to paid ratio. It would create low paid ULAE \nto paid claim for year with catastrophe and high ratio for year without catastrophe. The Mango-\nAllen approach would use the expected claim paid and would correct for unstable data.",
        "insight": "Diagnose why the classical method of ULAE analysis may provide a poor result when applied to a company writing business in a catastrophe-prone area."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "An insurer writing a long-tail line of business.",
        "solution": "For long-tailed lines, there are more ULAE spent on closing the claim than opening as these \nclaims will stay open for a long time and usually require several payments (maintenance). The \n50/50 assumption does not hold. However, the generalized Kittel approach works well in this \n\nsituation as it has the flexibility to select ULAE proportional to opening, maintaining, and closing \nclaims.",
        "insight": "Diagnose why the classical method of ULAE analysis may provide a poor result when applied to a company writing a long-tailed line of business."
      }
    ]
  },
  {
    "id": "spring-2017-25",
    "number": 25,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-16"
    ],
    "points": 1.5,
    "questionPage": 30,
    "solutionPages": [
      94
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company has experienced a large claim in accident year 2016. Given the following information for accident year 2016:"
      },
      {
        "type": "table",
        "title": "Estimated Ultimate ALAE Without Adjustment for Large Claim",
        "headers": [
          "Paid ALAE Development Technique",
          "Paid ALAE to Paid Claims Only Ratio"
        ],
        "rows": [
          [
            "11,000",
            "12,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Claims",
          "Paid Claims Only",
          "Paid ALAE",
          "Ultimate Claims Only",
          "Ultimate ALAE"
        ],
        "rows": [
          [
            "All Claims",
            "7,000",
            "2000",
            "30,000",
            "Not Provided"
          ],
          [
            "Large Claim",
            "$0",
            "1,500",
            "6,000",
            "2000"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Estimate ultimate ALAE for accident year 2016 using the paid ALAE development technique, including an adjustment for the large claim.",
        "solution": "Paid ALAE CDF = 11,000 / 2,000 = 5.5\nUltimate = (2000 – 1500) (5.5) + 2000 = 4750",
        "insight": "Compute the correct paid ALAE development technique CDF, apply that CDF to the non-large claim paid ALAE to get the all non-large claim ultimate ALAE, then add back in the large claim ultimate ALAE."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Estimate ultimate ALAE for accident year 2016 using the paid ALAE to paid claims ratio technique, including an adjustment for the large claim.",
        "solution": "Paid Ratio CDF = (12,000 / 30,000) / (2000 / 7000) = 1.4\nUltimate Ratio = 1.4 x (2000 – 1500) / 7000 = 0.1 \nUltimate ALAE = 0.1 x (30,000 – 6000) + 2000 = 4400",
        "insight": "Compute the paid ALAE to paid claims ratio technique CDF, apply the CDF to the ratio of all non-large paid ALAE to all large paid claims to get the ultimate ALAE to claims ratio."
      }
    ]
  },
  {
    "id": "spring-2017-26",
    "number": 26,
    "exam": "Spring 2017",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 1.5,
    "questionPage": 31,
    "solutionPages": [
      95,
      96
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following graph shows the results of four techniques for estimating the ultimate claim ratio for accident year 2013, as of December 31 for each year shown."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "The actuary selected an ultimate claim ratio of 100% as of December 31, 2013. Assess the reasonability of this estimate using only information known as of December 31, 2013.",
        "solution": "This seems reasonable.  Given the discrepancy between paid and reported methods, I suspect a \nlarge claim has been reported but not paid.  The actuary selected the reported BF method, which \nwould capture the impact of such a claim without allowing it to distort the IBNR estimate.",
        "insight": "Assess the reasonability of a claims ratio selection."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Discuss the relative position of the ultimate claim ratio for the reported Benktander technique versus the other techniques if the reported Benktander technique were added to the graph as of December 31, 2013.",
        "solution": "The reported Benktander technique would be higher than the reported BF but lower than the \nreported development techniques, because it is a weighted average of the two.",
        "insight": "Know the basic concept underlying the Benktander technique and relate that understanding to its position relative to the B-F and loss development techniques."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Identify two questions that the actuary should ask company management based on the results observed for all four evaluations of accident year 2013.",
        "solution": "Any two of the following: \n• Have there been any changes to strengthen or weaken the case reserves? \n• Are there any changes to claim settlement practices? \n• Was there a large unpaid claim in 2013 that was paid in 2016? \n• Has there been more focus on settling larger claims instead of smaller claims?",
        "insight": "Identify and articulate fundamental principles of company operations which impact claims reserving."
      }
    ],
    "figure": {
      "src": "assets/exam-graphs/spring-2017-q26.png",
      "title": "Ultimate claim ratio by evaluation year",
      "alt": "Four ultimate claim ratio estimates by evaluation year"
    }
  }
];

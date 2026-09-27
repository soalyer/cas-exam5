// Spring 2018 makeup CBT exam; rebuild with scripts/build_spring2018_makeup.py.
window.SPRING_2018_MAKEUP_QUESTIONS = [
  {
    "id": "spring-2018-makeup-1",
    "number": 1,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-5"
    ],
    "points": 1.25,
    "solutionPages": [
      3
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information on policy transactions:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Policy",
          "Transaction date",
          "Action",
          "Full-term written premium"
        ],
        "rows": [
          [
            "A",
            "January 1, 2015",
            "Policy Inception",
            "100"
          ],
          [
            "B",
            "February 1, 2015",
            "Policy Inception",
            "250"
          ],
          [
            "B",
            "August 1, 2015",
            "Endorsement",
            "60"
          ],
          [
            "B",
            "June 5, 2017",
            "Audit Premium",
            "50"
          ],
          [
            "C",
            "May 1, 2015",
            "Policy Inception",
            "150"
          ],
          [
            "C",
            "October 1, 2015",
            "Cancellation",
            "-150"
          ],
          [
            "D",
            "September 1, 2014",
            "Policy Inception",
            "175"
          ],
          [
            "D",
            "September 1, 2015",
            "Policy Renewal",
            "200"
          ],
          [
            "D",
            "March 1, 2016",
            "Endorsement",
            "80"
          ],
          [
            "E",
            "April 1, 2016",
            "Policy Inception",
            "75"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Full-term written premium represents the policy premium if policy characteristics shown were in place from original effective date date until original expiration date."
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
        "prompt": "Calculate the in-force premium as of September 15, 2015.",
        "solution": "In force: A $100, B $310 (the $60 full-term endorsement is not prorated for this snapshot), C $150, and D $200. Total $760.",
        "insight": "A policy snapshot includes the full-term value of the B endorsement and excludes expired D 2014 coverage."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Calculate the 2015 policy year written premium as of December 31, 2017.",
        "solution": "Policy-year 2015 written premium: A $100 + B [$250 + $60×6/12 + $50 audit] + C [$150 − $150×7/12] + D $200 = $692.50.",
        "insight": "Prorate the B endorsement and C cancellation over the affected term; assign B’s later audit to its 2015 policy year."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-2",
    "number": 2,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 1.75,
    "solutionPages": [
      4
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following payment and reserve information about two different claims on two different policies:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Policy",
          "Effective date",
          "Accident date",
          "Transaction date",
          "Incremental payment",
          "Ending case reserve"
        ],
        "rows": [
          [
            "A",
            "January 1, 2016",
            "July 3, 2016",
            "July 5, 2016",
            "0",
            "2,000"
          ],
          [
            "",
            "",
            "",
            "September 15, 2016",
            "1,000",
            "3,000"
          ],
          [
            "",
            "",
            "",
            "January 3, 2017",
            "3,500",
            "0"
          ],
          [
            "B",
            "October 1, 2016",
            "May 1, 2017",
            "May 1, 2017",
            "500",
            "5,000"
          ],
          [
            "",
            "",
            "",
            "November 2, 2017",
            "2,500",
            "3,000"
          ],
          [
            "",
            "",
            "",
            "January 2, 2018",
            "5,000",
            "0"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate the incurred losses for each of the following calendar years: i. 2016 ii. 2017",
        "solution": "Calendar-year 2016 incurred is $4,000 on A. Calendar-year 2017 change on A is $4,500−$4,000=$500; B adds $6,000, for $6,500. Ending case reserves are stocks, not incremental transactions.",
        "insight": "Compute each calendar year from changes in cumulative paid plus ending case."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the incurred losses for each of the following accident years evaluated as of December 31, 2017: i. 2016 ii. 2017",
        "solution": "At December 31, 2017, accident year 2016 has A: $4,500 paid plus zero case. Accident year 2017 has B: $3,000 paid plus $3,000 case = $6,000.",
        "insight": "Stop at the requested valuation date; B’s January 2018 payment is excluded."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Calculate the incurred losses for policy year 2016 evaluated as of December 31, 2017.",
        "solution": "Both claims arise from policies effective during 2016, so 2016 policy-year incurred is $4,500+$6,000=$10,500 at December 31, 2017.",
        "insight": "Group by policy effective year, including B’s 2017 accident."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Briefly descirbe one disadvantage and one advantage of using calendar year losses for ratemaking.",
        "solution": "Advantage: calendar-year losses are current and need no loss-development projection. Disadvantage: reserve changes and payments from many accident years can make one calendar year unrepresentative for prospective pricing.",
        "insight": "Address ratemaking, including calendar-year reserve changes, rather than a reserving use case."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-3",
    "number": 3,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 2.25,
    "solutionPages": [
      5
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information evaluated as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Year",
          "Earned premium ($000)",
          "On-level factor",
          "Ultimate ground-up losses ($000)",
          "Losses excess $750,000 ($000)"
        ],
        "rows": [
          [
            "2015",
            "94,824",
            "0.980",
            "81,518",
            "26,000"
          ],
          [
            "2016",
            "97,230",
            "1.010",
            "54,051",
            "0"
          ],
          [
            "2017",
            "94,098",
            "1.010",
            "63,413",
            "6,393"
          ]
        ]
      },
      {
        "type": "line",
        "text": "6% Unlimited loss trend 4% Limited loss trend 559,996 Ultimate trended ground-up losses for accident years 2008 - 2017 ($000s) 45,221 Ultimate trended losses excess of $750,000 for accident years 2008 - 2017 ($000s)"
      },
      {
        "type": "line",
        "text": "• There is no premium trend."
      },
      {
        "type": "line",
        "text": "• Policies are written on an annual basis."
      },
      {
        "type": "line",
        "text": "• Rates are in effect for one year."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the trended ultimate loss ratio for accident years 2015 to 2017 to be used to determine a rate change effective July 1, 2018.",
        "solution": "Limit each year at $750,000: ground-up less excess. The 10-year excess load is 1 + 45,221/(559,996−45,221) = 1.08785. Trend limited losses at 4% for 4, 3, and 2 years to the July 2019 average earned date, then apply the load. Trended loaded losses are about $70,654, $66,141, $67,091 thousand; on-level premiums are $92,927.52, $98,202.30, $95,038.98 thousand. Weighted ratio = 203,885.3/286,168.8 = 71.25%.",
        "insight": "Use the limited trend, an excess-loss load based on the 10-year limited base, and the correct prospective trend periods."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly explain whether or not it is appropriate to use a large loss adjustment in this situation.",
        "solution": "Yes. Large claims are volatile, so limiting annual experience and replacing the excess with a longer-term load stabilizes the indication while retaining an expected large-loss cost.",
        "insight": "Both the limiting step and the long-term load need a purpose."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-4",
    "number": 4,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 2.75,
    "solutionPages": [
      6
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following exposure and loss data relevant to a line of property insurance:"
      },
      {
        "type": "table",
        "title": "Cumulative reported claims ($) by age in months",
        "headers": [
          "Accident year",
          "Earned exposures",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "898",
            "363,572",
            "490,822",
            "564,445",
            "620,890"
          ],
          [
            "2015",
            "938",
            "387,362",
            "522,939",
            "601,380",
            ""
          ],
          [
            "2016",
            "980",
            "412,801",
            "557,281",
            "",
            ""
          ],
          [
            "2017",
            "1,024",
            "439,961",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Losses are fully developed at 48 months."
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Calculate the annual loss cost trend.",
        "solution": "Volume-weighted reported age factors are about 1.350, 1.150, and 1.100; applying them gives 2014–2017 ultimate loss costs about $691.41, $705.24, $719.35, $733.73 per exposure. These rise approximately 2.0% annually.",
        "insight": "Develop losses and divide by exposures before selecting loss-cost trend."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Calculate the projected loss cost per exposure for policies written between January 1, 2018 and December 31, 2018 given a new legislative reform that will increase loss costs for claims reported on or after January 1, 2018 by 20%.",
        "solution": "Trend the 2017 loss cost 1.5 years to the average accident date of 2018 annual policies, January 2019, and apply reform: $733.73×1.02^1.5×1.20 ≈ $907.03 per exposure. A consistently trended all-year selection gives the same result.",
        "insight": "Use a prospective earned date and the 1.20 reform multiplier."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly descirbe two factors that drive loss cost trends.",
        "solution": "Two drivers are claim severity inflation (repair materials or medical costs) and claim frequency changes (weather, traffic, safety, or exposure mix).",
        "insight": "Name causes of loss cost rather than expense or premium changes."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-5",
    "number": 5,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 2.5,
    "solutionPages": [
      7,
      8
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following:"
      },
      {
        "type": "table",
        "title": "Countrywide ($000 except count)",
        "headers": [
          "Year",
          "Policy count",
          "Written premium",
          "Earned premium",
          "Commission",
          "Other acquisition",
          "Taxes/fees",
          "General expense"
        ],
        "rows": [
          [
            "2015",
            "135,000",
            "98,000",
            "97,000",
            "6,860",
            "5,880",
            "3,920",
            "7,840"
          ],
          [
            "2016",
            "138,000",
            "100,000",
            "99,000",
            "7,000",
            "6,300",
            "3,900",
            "8,007"
          ],
          [
            "2017",
            "141,000",
            "102,500",
            "101,250",
            "7,175",
            "6,253",
            "4,203",
            "8,212"
          ]
        ]
      },
      {
        "type": "line",
        "text": "State A $725 Average Premium 6.2% Average Taxes, Licenses & Fees 7.0% Average Commission & Brokerage 67.2% Selected Projected Loss + ALAE Ratio"
      },
      {
        "type": "line",
        "text": "3.5% Profit Provision 6.0% ULAE Provision (of Loss + ALAE)"
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• Proposed effective date of rates is January 1, 2019."
      },
      {
        "type": "line",
        "text": "• Rates are in effect for one year."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the underwriting expense provision for State A using the all variable expense method.",
        "solution": "Using 2015–2017 countrywide data, other acquisition/written premium is 18,433/300,500=6.13% and general/earned premium is 24,059/297,250=8.09%. Add State A commission 7.0% and taxes/fees 6.2%: all-variable underwriting expense provision ≈27.42%.",
        "insight": "Use countrywide other acquisition and general expense with their proper bases, and State A commission and taxes."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the fixed and variable underwiting expense provisions for State A using the premium-based projection method, given the following: • 75% of Other Acquisition expenses are fixed. • 75% of General Expenses are fixed.",
        "solution": "Treat 75% of other acquisition and general expenses as fixed. Countrywide fixed cost per policy is 75%×($18,433k+$24,059k)/(135k+138k+141k)≈$76.98. The variable provision is 7%+6.2%+25%×6.13%+25%×8.09%≈16.76%.",
        "insight": "Split only acquisition and general expenses; retain State A commission and taxes as variable."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "Calculate the indicated rate change using the loss ratio method. Include a brief justification for the selected underwriting expenses.",
        "solution": "Using premium-based expenses, fixed expense ratio ≈$76.98/$725=10.62%. Loss plus ULAE ratio = 67.2%×1.06=71.232%. Indicated change = (71.232%+10.62%)/(1−16.76%−3.5%)−1 ≈2.64%. The mixed method better reflects per-policy fixed costs when premium size differs from the countrywide mix.",
        "insight": "ULAE multiplies loss and ALAE; explain the expense-method choice and solve for a rate change, not a rate level."
      }
    ],
    "notice": "The workbook point grid assigns 2.5 points; the examiner report heading says 2 points. The three part values total 2.5, so this library uses the workbook total."
  },
  {
    "id": "spring-2018-makeup-6",
    "number": 6,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-8",
      "reserving-9"
    ],
    "points": 4.5,
    "solutionPages": [
      9,
      10
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following as of December 31, 2017:"
      },
      {
        "type": "line",
        "text": "Rate Change History"
      },
      {
        "type": "table",
        "title": "Rate changes",
        "headers": [
          "Effective date",
          "Rate change"
        ],
        "rows": [
          [
            "July 1, 2016",
            "8%"
          ],
          [
            "July 1, 2017",
            "5%"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Calendar-year premium ($)",
        "headers": [
          "Measure",
          "2015",
          "2016",
          "2017"
        ],
        "rows": [
          [
            "Earned Premium",
            "$2,500,000",
            "$3,100,000",
            "$2,100,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative paid loss and ALAE ($)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2015",
            "1,000,000",
            "1,500,000",
            "1,725,000"
          ],
          [
            "2016",
            "1,100,000",
            "1,650,000",
            ""
          ],
          [
            "2017",
            "900,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "5% Annual loss and ALAE trend 2% Annual premium trend 6% Fixed expense ratio 20% Variable expense ratio 65% Expected Loss & ALAE Ratio 4% ULAE provision (% of loss and ALAE) 7% Indicated rate change for policies effective July 1, 2018 using the last three accident years of experience"
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
        "text": "• There is no development beyond 36 months."
      },
      {
        "type": "line",
        "text": "• Rates are to be in effect for one year."
      },
      {
        "type": "line",
        "text": "• The historical experience is fully credible."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the ultimate loss & ALAE for each accident year using the paid Bornhuetter-Ferguson technique.",
        "solution": "Paid age factors are 1.5 at 12–24 and 1.15 at 24–36, with no tail. Percent unpaid is 0%, 1−1/1.15=13.0435%, and 1−1/1.725=42.0290%. Paid BF ultimate: 2015 $1,725,000; 2016 $1,650,000+0.65×$3,100,000×13.0435%≈$1,912,826; 2017 $900,000+0.65×$2,100,000×42.0290%≈$1,473,696.",
        "insight": "Use actual earned premium, not on-level premium, in BF at historical accident-year level."
      },
      {
        "id": "b",
        "points": 3.5,
        "prompt": "Determine the profit and contingencies provision used to calculate the indicated rate change for policies effective July 1, 2018 using the ultimate loss & ALAE calculated in part a. above.",
        "solution": "On-level 2015–2017 premiums to the 1.08×1.05 current rate level; even annual writings imply historical earned rate indices about 1, 1.01, and 1.07675. On-level premiums are about $2.835m, $3.481m, and $2.212m. Trend each premium at 2% and each BF ultimate at 5% for 4, 3, and 2 years to July 2019: totals are about $9.063m and $5.936m, so R≈65.49%. Solve 1.07=[1.04R+0.06]/[1−0.20−P], giving profit provision P≈10.74%.",
        "insight": "Trend the full BF ultimate, not only IBNR; ULAE is 4% of loss and ALAE."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-7",
    "number": 7,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2,
    "solutionPages": [
      11
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company has determined that average commute time to work is a predictive rating variable in their risk classification system for personal automobile coverage, based on statistical criteria."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Evaluate whether this variable should be included in rating based on four other criteria for evaluating rating variables.",
        "solution": "Causality: longer commute may indicate more time in traffic, though route and mode matter. Verifiability: commute time is self-reported and may change with job or traffic. Administrative cost: monitoring changes is burdensome. Social acceptability: a commute surcharge may be difficult to explain or may penalize workers with limited travel choices.",
        "insight": "Evaluate four nonstatistical rating-variable criteria with commute-specific reasoning."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-8",
    "number": 8,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2,
    "solutionPages": [
      12
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurer is revising its class factors as part of their annual commercial general liability filing in a state."
      },
      {
        "type": "line",
        "text": "The actuary has calculated the indicated rate change for each class using the loss ratio method and the following information as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Class analysis",
        "headers": [
          "Class",
          "Collected premium",
          "On-level factor",
          "Current premium",
          "Reported loss",
          "Loss ratio",
          "Indicated change",
          "Current relativity",
          "Indicated relativity",
          "Relative to base",
          "Selected relativity",
          "Relativity change",
          "Final change"
        ],
        "rows": [
          [
            "A",
            "$1,212,729",
            "1.037",
            "$1,257,600",
            "$505,300",
            "40.2%",
            "-35.9%",
            "1.50",
            "0.96",
            "1.93",
            "1.93",
            "28.7%",
            "-3.5%"
          ],
          [
            "B",
            "$995,661",
            "1.037",
            "$1,032,500",
            "$1,134,500",
            "109.9%",
            "75.2%",
            "1.25",
            "2.19",
            "4.40",
            "2.00",
            "60.0%",
            "19.9%"
          ],
          [
            "C",
            "$622,179",
            "1.037",
            "$645,200",
            "$201,400",
            "31.2%",
            "-50.2%",
            "1.00",
            "0.50",
            "1.00",
            "1.00",
            "0.0%",
            "-25.0%"
          ],
          [
            "Total",
            "$2,830,569",
            "1.037",
            "$2,935,300",
            "$1,841,200",
            "62.7%",
            "0.0%",
            "",
            "",
            "",
            "",
            "33.4%",
            "0.0%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The company rates on class and territory only."
      },
      {
        "type": "line",
        "text": "• Class and territory factors have been revised every year."
      },
      {
        "type": "line",
        "text": "• The overall rate level is adequate."
      },
      {
        "type": "line",
        "text": "• Premium trend is 0%."
      },
      {
        "type": "line",
        "text": "• On-level factors reflect the overall historical rate changes for the state."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Discuss four potential shortcomings in this analysis.",
        "solution": "Four shortcomings: reported losses are undeveloped, so class ratios may understate ultimate costs differently by class; losses lack trend to the prospective period; the common on-level factor ignores past changes in class and territory relativities, distorting current-rate premiums by class; and class loss ratios are not adjusted for territory-mix differences or credibility before selecting relativities.",
        "insight": "The company rates on class and territory only; explain concrete analytical biases rather than requesting unrelated variables."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-9",
    "number": 9,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-12"
    ],
    "points": 1.5,
    "solutionPages": [
      13
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following exposures and losses for states A, B and C:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "State",
          "Class",
          "Exposure",
          "Losses",
          "Pure premium"
        ],
        "rows": [
          [
            "A",
            "1",
            "200",
            "7,000",
            "35.00"
          ],
          [
            "",
            "2",
            "225",
            "12,000",
            "53.33"
          ],
          [
            "",
            "Subtotal",
            "425",
            "19,000",
            "44.71"
          ],
          [
            "B",
            "1",
            "250",
            "10,000",
            "40.00"
          ],
          [
            "",
            "2",
            "300",
            "17,000",
            "56.67"
          ],
          [
            "",
            "Subtotal",
            "550",
            "27,000",
            "49.09"
          ],
          [
            "C",
            "1",
            "300",
            "14,000",
            "46.67"
          ],
          [
            "",
            "2",
            "350",
            "20,000",
            "57.14"
          ],
          [
            "",
            "Subtotal",
            "650",
            "34,000",
            "52.31"
          ],
          [
            "All",
            "1",
            "750",
            "31,000",
            "41.33"
          ],
          [
            "",
            "2",
            "875",
            "49,000",
            "56.00"
          ],
          [
            "",
            "Total",
            "1,625",
            "80,000",
            "49.23"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the complement of credibility for state A, class 1 using Harwayne's method.",
        "solution": "Harwayne balances other states to State A’s class mix. A has weights 200/425 and 225/425. Reweight B and C class pure premiums: B ≈$48.82; C ≈$52.21. Then weight those state-adjusted costs by their exposure volumes, 550 and 650: complement ≈$50.65 per exposure.",
        "insight": "Adjust each other state using State A exposure weights before combining them; do not use loss dollars as weights."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Evaluate an alternative complement of credibility for this company.",
        "solution": "The all-state Class 1 pure premium is $31,000/750=$41.33, a simpler complement, but it may be biased for State A because the state loss levels differ.",
        "insight": "Evaluate the alternative and its possible bias relative to Harwayne."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-10",
    "number": 10,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 2.0,
    "solutionPages": [
      14
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following censored loss data:"
      },
      {
        "type": "table",
        "title": "Censored losses",
        "headers": [
          "Loss size",
          "Claims, $100k limit",
          "Losses ($000), $100k",
          "Claims, $250k limit",
          "Losses ($000), $250k"
        ],
        "rows": [
          [
            "X <= $50,000",
            "600",
            "21,522",
            "700",
            "27,468"
          ],
          [
            "$50,000 < X <= $100,000",
            "550",
            "46,200",
            "500",
            "39,900"
          ],
          [
            "$100,000 < X <= $250,000",
            "",
            "",
            "200",
            "35,620"
          ]
        ]
      },
      {
        "type": "line",
        "text": "$50,000 Basic Limit"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the increased limits factor for a limit of $100,000.",
        "solution": "Across both policy limits, losses capped at $50,000 total $111,490 thousand: retain the under-$50k loss dollars and cap 1,250 higher claims at $50k. Losses capped at $100,000 total $155,090 thousand. ILF($100k)=$155,090/$111,490=1.3911.",
        "insight": "Use both policy groups, including $250k claims censored down to the desired limit, and consistent $000 units."
      },
      {
        "id": "b",
        "points": 1.25,
        "prompt": "Calculate the increased limits factor for a limit of $250,000.",
        "solution": "Use both portfolios for ground-up limited average severity: LAS($50k)=111,490/2,550=$43.7216k and LAS($100k)=155,090/2,550=$60.8196k. From the $250k-limit portfolio, probability of a claim above $100k is 200/1,400, and its mean $100k-to-$250k layer is (35,620−200×100)/200=$78.1k. Thus LAS($250k)=60.8196+(200/1,400)×78.1=$71.9768k, giving ILF($250k)=71.9768/43.7216=1.6463.",
        "insight": "Use both policy groups below $100k and only the $250k-limit group to estimate the probability and size of the censored upper layer."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-11",
    "number": 11,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-7",
      "ratemaking-8",
      "ratemaking-12"
    ],
    "points": 3.75,
    "solutionPages": [
      15
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "All values $000",
        "headers": [
          "Year",
          "Written premium",
          "Earned premium",
          "Ultimate claims",
          "General expense",
          "Acquisition expense",
          "Taxes/fees"
        ],
        "rows": [
          [
            "2014",
            "49,000",
            "43,000",
            "39,000",
            "3,250",
            "4,200",
            "350"
          ],
          [
            "2015",
            "48,000",
            "50,000",
            "43,000",
            "2,750",
            "2,000",
            "290"
          ],
          [
            "2016",
            "51,500",
            "49,000",
            "47,000",
            "1,900",
            "1,750",
            "200"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Territory",
          "In-force premium ($000)",
          "Current relativity",
          "Loss ratio",
          "Claim count"
        ],
        "rows": [
          [
            "A",
            "32,000",
            "1.00",
            "87%",
            "930"
          ],
          [
            "B",
            "14,000",
            "1.22",
            "105%",
            "450"
          ],
          [
            "C",
            "8,000",
            "1.35",
            "68%",
            "78"
          ]
        ]
      },
      {
        "type": "line",
        "text": "24,000 Exposures required for full credibility standard 3% Expected frequency per exposure 3.5% Target underwriting profit provision 1,000 One time commission included in 2014 expense data ($000)"
      },
      {
        "type": "line",
        "text": "• All expenses are variable."
      },
      {
        "type": "line",
        "text": "• There have been no rate changes in the past 5 years."
      },
      {
        "type": "line",
        "text": "• There are no premium or expense trends."
      },
      {
        "type": "line",
        "text": "• Territory A remains the base territory."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the permissible loss ratio. Briefly justify the selected expense ratio.",
        "solution": "Exclude the one-time $1,000k commission. Selected expense ratio = general/earned 7,900/142,000 + acquisition/written 6,950/148,500 + taxes/written 840/148,500 = 10.81%. Permissible loss ratio = 1−10.81%−3.5%=85.69%.",
        "insight": "Remove the one-time commission and match each expense category to its appropriate premium base."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the indicated overall rate change.",
        "solution": "Overall claim ratio is 129,000/142,000=90.85%. Indicated rate change = 90.85%/85.69%−1 = 6.01%.",
        "insight": "Use the selected permissible ratio, not the raw 2014 expense anomaly."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Calculate the credibility factor for each territory using the classical credibility approach.",
        "solution": "Full-credibility claim standard =24,000×0.03=720. Square-root credibility is min(1,sqrt(count/720)): A 1.000, B 0.791, C 0.329.",
        "insight": "Convert the exposure standard into a claim standard before applying claim counts."
      },
      {
        "id": "d",
        "points": 1.25,
        "prompt": "Calculate the indicated change to the base territory after revising the territory relativities and overall rate level.",
        "solution": "A is the base. Blend each territory loss ratio with the overall ratio using its credibility; indicated relativity for B and C equals current relativity×(blended territory LR / blended A LR). With A credibility 1, B≈1.431 and C≈1.293. The weighted relativity change is [32,000+14,000×1.431/1.22+8,000×1.293/1.35]/54,000≈1.03855. Base rate factor = overall 1.06015/1.03855≈1.02080, an indicated base change of +2.08%.",
        "insight": "Apply credibility to territorial loss ratios, normalize to base A, then preserve the indicated overall level through an off-balance adjustment."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-12",
    "number": 12,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-15"
    ],
    "points": 1.5,
    "solutionPages": [
      16
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following:"
      },
      {
        "type": "line",
        "text": "$500,000 Property value $350,000 Insured value 80% Coinsurance requirement"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the loss amount and coinsurance penalty at point X on the coinsurance penalty chart.",
        "solution": "Coinsurance requirement is 80%×$500,000=$400,000. At X, loss equals insured value $350,000. Payment before the policy limit is $350,000×$350,000/$400,000=$306,250, so the penalty is $43,750.",
        "insight": "At X the penalty peaks just before the insured-value cap changes the payment formula."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Calculate the loss amount at point Y on the coinsurance penalty chart.",
        "solution": "Y is the $400,000 loss where the insurer’s $350,000 limit is reached and the penalty falls to zero.",
        "insight": "Use the coinsurance requirement, not the property value."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Describe the consequence for an insured at loss amounts greater than Y.",
        "solution": "For losses above Y, the $350,000 policy limit binds. The insured bears the portion of the loss above the limit, even though the chart shows no further coinsurance penalty.",
        "insight": "Distinguish the disappearance of the coinsurance penalty from uninsured loss above the limit."
      }
    ],
    "notice": "The Question 12 worksheet labels part c as 0.5 point, but the point grid and examiner report assign 0.25 point; the question total is 1.5 points. This library uses the official 0.25-point value.",
    "figure": {
      "src": "assets/exam-graphs/spring-2018-makeup-q12.png",
      "title": "Coinsurance penalty",
      "alt": "Original exam chart: coinsurance penalty rises with loss amount to X, then falls to zero at Y and stays at zero."
    }
  },
  {
    "id": "spring-2018-makeup-13",
    "number": 13,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "ratemaking-8"
    ],
    "points": 1.5,
    "solutionPages": [
      17
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "1,000 Projected Fixed Expenses ($000) 7,000 Projected Losses ($000) 2,000 Projected LAE ($000) 40 Projected Exposures (000) 1.5 Expected Exposures per Policy 15% Variable Expense Ratio 5% Target Underwriting Profit %"
      },
      {
        "type": "line",
        "text": "• The company charges a fixed expense fee per policy written."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the indicated premium for a policy with four exposures.",
        "solution": "Loss+LAE per exposure = ($7,000+$2,000)/40=$225. Fixed cost per policy = $1,000/(40/1.5)=$37.50. For four exposures, indicated premium = (4×$225+$37.50)/(1−0.15−0.05)=$1,171.88.",
        "insight": "Apply the fixed fee once per policy and the variable/profit loading to the whole premium."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Describe a scenario where the company would prefer the pure premium method to the loss ratio method.",
        "solution": "The pure premium method is attractive for a new product with credible exposure and loss data but little reliable earned premium at current rates.",
        "insight": "Explain why an exposure-based calculation is preferable to a loss-ratio denominator in the scenario."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-14",
    "number": 14,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-1"
    ],
    "points": 1.0,
    "solutionPages": [
      18
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Company A and Company B have recently merged."
      },
      {
        "type": "line",
        "text": "Before the merger:"
      },
      {
        "type": "line",
        "text": "• Both companies are monoline homeowners' insurance carriers."
      },
      {
        "type": "line",
        "text": "• Both companies use the reported claim development technique to estimate ultimate claims."
      },
      {
        "type": "line",
        "text": "After the merger:"
      },
      {
        "type": "line",
        "text": "• The actuary performing the reserve review has combined the claims data for the two companies."
      },
      {
        "type": "line",
        "text": "• The actuary is estimating ultimate claims using the reported claim development technique."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Briefly describe two arguments for approach taken after the merger.",
        "solution": "Combining the data increases volume and can stabilize development-factor estimates. The carriers also write the same monoline homeowners coverage and already use the same broad reported-development method, so a pooled analysis is operationally consistent.",
        "insight": "Give two merger-specific arguments, including credibility and similar business."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe two potential deficiencies of the approach taken after the merger.",
        "solution": "Different case-reserve or claim-handling practices can create incompatible reported patterns. Different geographic or catastrophe mixes can also make the pooled factors unrepresentative for either legacy book.",
        "insight": "Identify two concrete sources of heterogeneity, not just that the companies differ."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-15",
    "number": 15,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-7"
    ],
    "points": 2.25,
    "solutionPages": [
      19
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
          "Accident date",
          "Report date",
          "Evaluation date",
          "Case reserve",
          "Cumulative paid"
        ],
        "rows": [
          [
            "1",
            "January 1, 2015",
            "July 1, 2015",
            "December 31, 2015",
            "$500",
            "$600"
          ],
          [
            "",
            "",
            "",
            "December 31, 2016",
            "$400",
            "$900"
          ],
          [
            "",
            "",
            "",
            "December 31, 2017",
            "$200",
            "$1,500"
          ],
          [
            "2",
            "August 1, 2016",
            "February 3, 2017",
            "December 31, 2017",
            "$700",
            "$400"
          ],
          [
            "3",
            "May 16, 2015",
            "September 30, 2015",
            "December 31, 2015",
            "$2,500",
            "$300"
          ],
          [
            "",
            "",
            "",
            "June 30, 2016",
            "$2,500",
            "$900"
          ],
          [
            "",
            "",
            "",
            "December 31, 2016",
            "$1,500",
            "$2,500"
          ],
          [
            "",
            "",
            "",
            "December 31, 2017",
            "$2,000",
            "$4,000"
          ],
          [
            "4",
            "April 1, 2017",
            "April 1, 2017",
            "December 31, 2017",
            "$4,500",
            "$500"
          ],
          [
            "5",
            "August 4, 2016",
            "September 1, 2016",
            "December 31, 2016",
            "$2,000",
            "$5,000"
          ],
          [
            "",
            "",
            "",
            "December 31, 2017",
            "$1,500",
            "$8,000"
          ],
          [
            "6",
            "September 1, 2015",
            "September 5, 2015",
            "September 30, 2015",
            "$5,000",
            "$0"
          ],
          [
            "",
            "",
            "",
            "December 31, 2015",
            "$0",
            "$100"
          ]
        ]
      },
      {
        "type": "line",
        "text": "1.1 36-to-ultimate reported claim development factor"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Construct the annual paid claim development triangle for accident years 2015 through 2017.",
        "solution": "Cumulative paid triangle by accident year, ages 12/24/36: 2015 $1,000/$3,500/$5,600; 2016 $5,000/$8,400; 2017 $500. Include the late-reported 2016 claim only at its 2017 evaluation.",
        "insight": "Use cumulative payments at each year-end; do not add ending reserves."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Construct the annual reported claim development triangle for accident years 2015 through 2017.",
        "solution": "Cumulative reported = paid + ending case. The triangle is 2015 $4,000/$5,400/$7,800; 2016 $7,000/$10,600; 2017 $5,000.",
        "insight": "The claim 6 reserve falls to zero in 2015; its reported value is then paid $100."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Estimate ultimate claims for accident year 2017 using the reported claim development technique.",
        "solution": "Volume-weighted reported factors are 2015+2016 age 12–24: ($5,400+$10,600)/($4,000+$7,000)=1.45455, and 2015 age 24–36: $7,800/$5,400=1.44444. With the 1.1 tail, AY 2017 ultimate = $5,000×1.45455×1.44444×1.1 ≈ $11,556.",
        "insight": "Apply both age factors and the supplied 36-to-ultimate tail."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-16",
    "number": 16,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-7"
    ],
    "points": 1.75,
    "solutionPages": [
      20
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Cumulative reported claims ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48",
          "60"
        ],
        "rows": [
          [
            "2013",
            "2,400",
            "4,800",
            "7,200",
            "8,640",
            "8,640"
          ],
          [
            "2014",
            "2,500",
            "5,000",
            "7,500",
            "9,000",
            ""
          ],
          [
            "2015",
            "3,025",
            "6,050",
            "9,075",
            "",
            ""
          ],
          [
            "2016",
            "2,750",
            "5,500",
            "",
            "",
            ""
          ],
          [
            "2017",
            "9,000",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There is only one large loss in the historical data, which occurred in 2017 and was reported in the first 12 months."
      },
      {
        "type": "line",
        "text": "• There is no development beyond 60 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the IBNR for each accident year using the reported claim development technique.",
        "solution": "Selected reported factors are 2.0, 1.5, 1.2, and 1.0 (48–60). Latest IBNR ($000): 2013 $0; 2014 $0; 2015 $9,075×(1.2−1)=$1,815; 2016 $5,500×(1.5×1.2−1)=$4,400; 2017 $9,000×(2×1.5×1.2−1)=$23,400.",
        "insight": "Show IBNR for every year and subtract the latest reported amount from ultimate."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Explain whether the technique used in part a. above is appropriate to estimate IBNR for accident year 2017 for this company.",
        "solution": "The 2017 large loss arrived unusually early. Multiplying that exceptional $9,000 by an ordinary 12-to-ultimate factor greatly overstates its future development, so an unadjusted chain ladder is inappropriate; separate the large claim or use an expected-loss method.",
        "insight": "Explain direction and mechanism of the large-loss distortion."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly describe a situation where the claims development techniques work well for projecting ultimate claims.",
        "solution": "Development works well when claim reporting, settlement, case reserving, and mix remain reasonably stable, so historical age patterns are predictive of current claims.",
        "insight": "Name underlying stable operations, not just a stable triangle."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-17",
    "number": 17,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 2,
    "solutionPages": [
      21
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurer has the following data evaluated as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Cumulative closed claim counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "170",
            "184",
            "190",
            "196"
          ],
          [
            "2015",
            "175",
            "186",
            "194",
            ""
          ],
          [
            "2016",
            "178",
            "190",
            "",
            ""
          ],
          [
            "2017",
            "185",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Incremental paid severities",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "7,500",
            "12,800",
            "18,000",
            "25,000"
          ],
          [
            "2015",
            "7,250",
            "13,000",
            "18,500",
            ""
          ],
          [
            "2016",
            "7,700",
            "13,450",
            "",
            ""
          ],
          [
            "2017",
            "7,950",
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
          "Accident year",
          "Ultimate claim counts"
        ],
        "rows": [
          [
            "2014",
            "196"
          ],
          [
            "2015",
            "195"
          ],
          [
            "2016",
            "198"
          ],
          [
            "2017",
            "200"
          ]
        ]
      },
      {
        "type": "line",
        "text": "3% Claim severity trend"
      },
      {
        "type": "line",
        "text": "• There are no partial payments."
      },
      {
        "type": "line",
        "text": "• There is no development beyond 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Estimate unpaid claims for accident year 2017 using a frequency-severity technique.",
        "solution": "Using a disposal-rate approach, 185 of 200 claims are closed at 12 months, leaving 15. Average historical conditional disposal rates are (14/26+11/20+12/20)/3=56.28% at 12–24 and (6/12+8/9)/2=69.44% at 24–36. Project incremental closures of 8.44, 4.55, and 2.00 at ages 24, 36, and 48. Trend historical incremental severities to 2017 and average by age: about $13,877, $19,648, and $27,318. Unpaid ≈8.44×13,877+4.55×19,648+2.00×27,318=$261,371.",
        "insight": "Use future closed counts and incremental paid severities, with 3% severity trend; do not treat severity entries as loss totals."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-18",
    "number": 18,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-10"
    ],
    "points": 1.5,
    "solutionPages": [
      22
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following:"
      },
      {
        "type": "table",
        "title": "Cumulative reported claims ($)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "750",
            "2,550",
            "5,300",
            "8,200"
          ],
          [
            "2015",
            "850",
            "3,200",
            "6,700",
            ""
          ],
          [
            "2016",
            "1,000",
            "3,500",
            "",
            ""
          ],
          [
            "2017",
            "1,200",
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
          "Calendar year",
          "On-level earned premium"
        ],
        "rows": [
          [
            "2014",
            "23,000"
          ],
          [
            "2015",
            "27,000"
          ],
          [
            "2016",
            "31,500"
          ],
          [
            "2017",
            "38,250"
          ]
        ]
      },
      {
        "type": "line",
        "text": "1.447 48-to-ultimate reported development factor"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate IBNR for accident year 2017 using the Cape Cod technique.",
        "solution": "Volume-weighted reported factors are 12–24 = 9,250/2,600=3.55769, 24–36 = 12,000/5,750=2.08696, and 36–48 = 8,200/5,300=1.54717; include the 1.447 tail. Age-to-ultimate factors for 2014–2017 are 1.447, 2.23875, 4.67218, and 16.62219. Cape Cod expected claims ratio = sum latest reported $19,600 / sum(premium/CDF) ≈52.98%. AY 2017 IBNR = $38,250×52.98%×(1−1/16.62219) ≈ $19,044.",
        "insight": "Use reported claims over used-up premium, not developed claims over total premium; calculate IBNR rather than ultimate."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-19",
    "number": 19,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-7"
    ],
    "points": 2.25,
    "solutionPages": [
      23
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
          "Calendar year",
          "Accident year",
          "Incremental reported claims"
        ],
        "rows": [
          [
            "2014",
            "2014",
            "950"
          ],
          [
            "2015",
            "2014",
            "2,150"
          ],
          [
            "2015",
            "2015",
            "1,100"
          ],
          [
            "2016",
            "2014",
            "700"
          ],
          [
            "2016",
            "2015",
            "2,400"
          ],
          [
            "2016",
            "2016",
            "900"
          ],
          [
            "2017",
            "2014",
            "700"
          ],
          [
            "2017",
            "2015",
            "1,200"
          ],
          [
            "2017",
            "2016",
            "1,900"
          ],
          [
            "2017",
            "2017",
            "700"
          ]
        ]
      },
      {
        "type": "line",
        "text": "1.03 48-to-ultimate development factor"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the company's accident year 2017 ultimate claims using the reported claim development technique.",
        "solution": "Cumulative reported triangle: 2014 950/3,100/3,800/4,500; 2015 1,100/3,500/4,700; 2016 900/2,800; 2017 700. Volume-weighted 12–24=(3,100+3,500+2,800)/(950+1,100+900)=3.18644; 24–36=(3,800+4,700)/(3,100+3,500)=1.28788; 36–48=4,500/3,800=1.18421. AY 2017 ultimate ≈700×3.18644×1.28788×1.18421×1.03 = $3,504.",
        "insight": "Build the cumulative triangle, select age factors, and include the 1.03 tail."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Describe how the estimate calculated in part a. may be distorted if the average policy effective date changed from July 1 to April 1 in 2017.",
        "solution": "An earlier average effective date moves accidents earlier, making 2017 losses older at December 31 than assumed. Applying the old, larger 12-month factor tends to overstate ultimate.",
        "insight": "State why maturity shifts and the direction of bias."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly describe an adjustment to the reported claim development technique that could improve the estimate in part a. above after the change in average effecctive date described in part b. above",
        "solution": "Align triangles by effective/accident maturity, for example use quarterly evaluations or interpolate percent reported to a comparable effective age before selecting factors.",
        "insight": "Adjust the development age rather than using a case-reserve correction."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-20",
    "number": 20,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-6"
    ],
    "points": 2.0,
    "solutionPages": [
      24
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for the company:"
      },
      {
        "type": "table",
        "title": "Cumulative paid loss + ALAE ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48",
          "60"
        ],
        "rows": [
          [
            "2013",
            "100",
            "550",
            "650",
            "670",
            "690"
          ],
          [
            "2014",
            "180",
            "800",
            "850",
            "860",
            ""
          ],
          [
            "2015",
            "270",
            "980",
            "1,050",
            "",
            ""
          ],
          [
            "2016",
            "300",
            "800",
            "",
            "",
            ""
          ],
          [
            "2017",
            "300",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative reported loss + ALAE ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48",
          "60"
        ],
        "rows": [
          [
            "2013",
            "400",
            "600",
            "675",
            "675",
            "700"
          ],
          [
            "2014",
            "500",
            "850",
            "871.2",
            "872.9424",
            ""
          ],
          [
            "2015",
            "570",
            "1,026",
            "1,100",
            "",
            ""
          ],
          [
            "2016",
            "650",
            "900",
            "",
            "",
            ""
          ],
          [
            "2017",
            "800",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative closed counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48",
          "60"
        ],
        "rows": [
          [
            "2013",
            "720",
            "1,215",
            "1,330",
            "1,421",
            "1,465"
          ],
          [
            "2014",
            "755",
            "1,242",
            "1,349",
            "1,431",
            ""
          ],
          [
            "2015",
            "750",
            "1,233",
            "1,330",
            "",
            ""
          ],
          [
            "2016",
            "780",
            "1,215",
            "",
            "",
            ""
          ],
          [
            "2017",
            "810",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative reported counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48",
          "60"
        ],
        "rows": [
          [
            "2013",
            "1,200",
            "1,350",
            "1,400",
            "1,450",
            "1,470"
          ],
          [
            "2014",
            "1,258",
            "1,380",
            "1,420",
            "1,440",
            ""
          ],
          [
            "2015",
            "1,250",
            "1,370",
            "1,350",
            "",
            ""
          ],
          [
            "2016",
            "1,300",
            "1,290",
            "",
            "",
            ""
          ],
          [
            "2017",
            "1,170",
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
        "points": 1.5,
        "prompt": "Discuss the appropriateness of the following techniques for estimating ultimate claims for accident year 2017: i. Reported development technique. ii. Paid development technique.",
        "solution": "Reported development is unreliable: average case outstanding per open claim rises sharply in calendar 2017, so past reported factors applied to stronger case values can overstate ultimate. Paid development is also unreliable because closure/disposal rates jump in 2017, accelerating payments relative to history and causing overdevelopment.",
        "insight": "Diagnose average case adequacy and claim disposal, not only triangle factor volatility."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Identify two questions to ask the claims department to better understand any operational changes based on the data above.",
        "solution": "Ask whether the claims unit changed case-reserve guidelines in 2017 and what changes were made. Separately ask whether staffing, settlement incentives, or closure procedures changed in 2017 and how those changes affected timing.",
        "insight": "Ask two distinct operational questions tied to the observed reserve and disposal changes."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-21",
    "number": 21,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-13"
    ],
    "points": 2.75,
    "solutionPages": [
      25,
      26
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Cumulative closed counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "13",
            "36",
            "61",
            "78"
          ],
          [
            "2015",
            "12",
            "34",
            "69",
            ""
          ],
          [
            "2016",
            "13",
            "38",
            "",
            ""
          ],
          [
            "2017",
            "18",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative paid claims ($)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "820",
            "2,050",
            "3,280",
            "4,100"
          ],
          [
            "2015",
            "780",
            "1,950",
            "3,120",
            ""
          ],
          [
            "2016",
            "760",
            "1,900",
            "",
            ""
          ],
          [
            "2017",
            "810",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Exponential parameter a",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "",
            "489",
            "1,042",
            "1,473"
          ],
          [
            "2015",
            "",
            "473",
            "1,235",
            ""
          ],
          [
            "2016",
            "",
            "472",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Exponential parameter b",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "",
            "0.0406",
            "0.0190",
            "0.0132"
          ],
          [
            "2015",
            "",
            "0.0425",
            "0.0135",
            ""
          ],
          [
            "2016",
            "",
            "0.0373",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "$4,100 Accident year 2014 ultimate claims"
      },
      {
        "type": "line",
        "text": "• The relationship between the adjusted cumulative closed claims (\"X\") and the adjusted cumulative paid claims (\"Y\") is: Y = a*e^(bX)"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.75,
        "prompt": "Calculate the ultimate claims estimate for accident year 2017 using a Berquist-Sherman technique, where paid claims are adjusted using a two-point exponential fit.",
        "solution": "The workbook omits ultimate counts, so a numeric result needs an assumption. One examiner-accepted approach uses volume-weighted closed-count factors 108/38, 130/70, and 78/61, with 2014 age-48 count 78 at ultimate. This gives selected ultimate counts about 78, 88.23, 90.24, and 121.49. Latest-diagonal disposal rates are about 14.82%, 42.11%, 78.21%, and 100%; apply these to restate older closed counts. Use each supplied a×exp(b×adjusted closed counts) for older paid entries while retaining the latest diagonal. The adjusted paid age factors are about 2.5634, 1.5521, and 1.2347, giving 2017 ultimate ≈$810×2.5634×1.5521×1.2347=$3,979.",
        "insight": "The report explicitly declared this question defective; unadjusted developed ultimate counts received credit, although that assumption is ordinarily questionable."
      }
    ],
    "notice": "The examiner report deemed this question defective because ultimate claim counts were omitted. It was excluded from the official 53.5-point score and pass mark. It remains here for optional practice; any result requires an explicit assumption about ultimate counts.",
    "excludedFromOfficialScore": true
  },
  {
    "id": "spring-2018-makeup-22",
    "number": 22,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-14"
    ],
    "points": 2.75,
    "solutionPages": [
      27
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Cumulative paid gross claims ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "300",
            "650",
            "785",
            "785"
          ],
          [
            "2015",
            "200",
            "605",
            "700",
            ""
          ],
          [
            "2016",
            "205",
            "330",
            "",
            ""
          ],
          [
            "2017",
            "150",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative salvage/subrogation received ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "30",
            "110",
            "156",
            "156"
          ],
          [
            "2015",
            "21",
            "103",
            "141",
            ""
          ],
          [
            "2016",
            "20",
            "56",
            "",
            ""
          ],
          [
            "2017",
            "15",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "450,000 Ultimate claims gross of salvage and subrogation for accident year 2017"
      },
      {
        "type": "line",
        "text": "• There is no development beyond 48 months."
      },
      {
        "type": "line",
        "text": "• A simple all-year average is used for all development factors."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Estimate the salvage and subrogation recoverable for accident year 2017 using the development technique.",
        "solution": "Salvage/subrogation age factors from simple all-year averages: 12–24 ≈3.7905, 24–36≈1.3936, 36–48=1. Ultimate 2017 recovery ≈$15k×3.7905×1.3936=$79.23k, so recoverable ≈$64.23k.",
        "insight": "Subtract the $15k already received; ultimate recovery alone is not recoverable."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Estimate the salvage and subrogation recoverable for accident year 2017 using a ratio approach.",
        "solution": "Develop gross claims with simple all-year age factors 2.2671 and 1.1824, and salvage/subrogation with 3.7905 and 1.3936. The resulting ultimate recovery/gross claim ratios for 2014–2017 are about 19.873%, 20.143%, 20.001%, and 19.706%; their simple all-year average is 19.9305%. Apply it to supplied 2017 gross ultimate $450k: ultimate recovery ≈$89.69k, less $15k already received = $74.69k recoverable.",
        "insight": "Match the ratio denominator to the supplied gross ultimate and subtract recoveries received."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly describe a reason why a ratio approach is preferred over the development technique when estimating salvage and subrogation recoverables.",
        "solution": "Salvage and subrogation receipts can be sparse and irregular, making their direct development factors volatile; a ratio to more stable gross ultimate claims can be more credible.",
        "insight": "Explain the comparative advantage of the ratio method."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-23",
    "number": 23,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-17"
    ],
    "points": 2.5,
    "solutionPages": [
      28
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Development pattern",
        "headers": [
          "Accident year",
          "Ultimate claim counts",
          "Age",
          "Reported % ultimate",
          "Closed % ultimate"
        ],
        "rows": [
          [
            "2014",
            "43,300",
            "12",
            "30%",
            "5%"
          ],
          [
            "2015",
            "41,300",
            "24",
            "65%",
            "35%"
          ],
          [
            "2016",
            "46,400",
            "36",
            "100%",
            "90%"
          ],
          [
            "2017",
            "45,800",
            "48",
            "100%",
            "100%"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Pending claim counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "",
            "",
            "",
            ""
          ],
          [
            "2015",
            "",
            "",
            "",
            "0"
          ],
          [
            "2016",
            "",
            "",
            "4,640",
            "0"
          ],
          [
            "2017",
            "",
            "13,740",
            "4,580",
            "0"
          ]
        ]
      },
      {
        "type": "line",
        "text": "$60,000 Average claim staff employee salary during calendar year 2017 3% Annual salary inflation 310 Opened, closed, or pending claim counts processed per employee per year"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Estimate the unpaid ULAE using the Mango-Allen claim staffing technique.",
        "solution": "Future opened+closed+pending workloads are 94,040 in calendar 2018, 50,440 in 2019, and 4,580 in 2020. For example, 2018 includes 4,130 AY2015 closures; AY2016 has 16,240 opened, 25,520 closed, 4,640 pending; AY2017 has 16,030 opened, 13,740 closed, 13,740 pending. Divide each workload by 310 and multiply by trended salary: 2018 $60,000×1.03=$61,800, 2019 $63,654, 2020 $65,563.62. Unpaid ULAE ≈$18,747,329+$10,357,122+$968,650=$30,073,100.",
        "insight": "Mango–Allen uses opened, closed, and pending workload by calendar year with nominal trended salary."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-24",
    "number": 24,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-7",
      "reserving-9",
      "reserving-16"
    ],
    "points": 2.0,
    "solutionPages": [
      29
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Cumulative paid ALAE ($)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48",
          "60",
          "Selected ultimate claims ($)"
        ],
        "rows": [
          [
            "2013",
            "420",
            "1,983",
            "2,975",
            "3,571",
            "3,750",
            "38,000"
          ],
          [
            "2014",
            "417",
            "2,220",
            "3,333",
            "4,000",
            "",
            "43,000"
          ],
          [
            "2015",
            "477",
            "2,336",
            "3,500",
            "",
            "",
            "45,000"
          ],
          [
            "2016",
            "494",
            "2,500",
            "",
            "",
            "",
            "48,000"
          ],
          [
            "2017",
            "1,250",
            "",
            "",
            "",
            "",
            "50,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "1.015 60-to-ultimate development factor 10% Expected paid ALAE-to-paid claim ratio"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Estimate accident year 2017 ultimate ALAE using the paid development technique.",
        "solution": "Volume-weighted paid ALAE factors are about 4.9994, 1.4999, 1.2002, and 1.0501; include the 1.015 tail. The 12-to-ultimate factor is ≈9.5931 and AY 2017 paid development ultimate is $1,250×9.5931 ≈$11,991.",
        "insight": "Include the 60-to-ultimate factor; the $1,250 first-year amount is an anomaly."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Estimate accident year 2017 ultimate ALAE using the Bornhuetter-Ferguson technique.",
        "solution": "Expected ultimate ALAE = 10%×$50,000=$5,000. Paid BF = paid to date + expected unpaid share = $1,250+$5,000×(1−1/9.5931)≈$5,729.",
        "insight": "Use the age-to-ultimate factor to compute the unpaid percentage."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Recommend and briefly justify an estimate of ultimate ALAE from the results of parts a. and b. above.",
        "solution": "Select about $5,729 from BF. The 2017 first-year paid ALAE is unusually high, so direct development magnifies the anomaly to nearly $12,000; BF adds only expected future emergence.",
        "insight": "Discuss the specific 2017 anomaly when choosing between estimates."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-25",
    "number": 25,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 2.5,
    "solutionPages": [
      30
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data valued as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Ultimate claims ratios",
        "headers": [
          "Accident year",
          "Paid development",
          "Reported development",
          "Paid BF",
          "Reported BF",
          "Expected"
        ],
        "rows": [
          [
            "2014",
            "80%",
            "81%",
            "78%",
            "81%",
            "65%"
          ],
          [
            "2015",
            "81%",
            "83%",
            "77%",
            "81%",
            "65%"
          ],
          [
            "2016",
            "85%",
            "91%",
            "78%",
            "84%",
            "70%"
          ],
          [
            "2017",
            "91%",
            "101%",
            "75%",
            "85%",
            "70%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The expected technique is derived from industry data."
      },
      {
        "type": "line",
        "text": "• There are no large losses observed."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Briefly describe two possible changing conditions in the data above.",
        "solution": "Possible changes: the insurer’s underlying claim cost ratio is increasing, and claims are being paid more quickly. The rising development estimates relative to expected and BF estimates, without large losses, support investigating these conditions.",
        "insight": "Identify two distinct changing conditions and the direction of each."
      },
      {
        "id": "b",
        "points": 2,
        "prompt": "Briefly describe how the two changing conditions described in part a. above affect each of the following techniques: i. Expected claims ii. Paid Bornhuetter-Ferguson iii. Reported Cape Cod iv. Reported Benktander",
        "solution": "Expected claims based on industry ratios may understate the insurer’s rising cost; faster payment does not affect that prior. Paid BF incorporates higher paid claims but may understate unreported cost from an outdated expected ratio; quicker payments can make it overstate if historical paid factors imply too much still unpaid. Reported Cape Cod responds to rising reported claims through its selected expected ratio, though old periods can dilute the increase; payment speed alone has little direct effect if case reserves fall as payments rise. Reported Benktander also responds to current reported experience but can lag the cost increase through its prior; payment acceleration alone should have little direct effect on reported claims when case estimates are otherwise stable.",
        "insight": "For each named technique, discuss both the cost-level change and quicker payments, including when a reported measure is unaffected."
      }
    ]
  },
  {
    "id": "spring-2018-makeup-26",
    "number": 26,
    "exam": "Spring 2018 Makeup",
    "chapterIds": [
      "reserving-6"
    ],
    "points": 1.75,
    "solutionPages": [
      31
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Cumulative reported claims ($000)",
        "headers": [
          "Accident year",
          "Dec 31, 2016",
          "Jun 30, 2017"
        ],
        "rows": [
          [
            "2014",
            "$71,000",
            "$73,000"
          ],
          [
            "2015",
            "$62,000",
            "$68,000"
          ],
          [
            "2016",
            "$40,000",
            "$48,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported claim factors",
        "headers": [
          "Pattern",
          "12–ultimate",
          "24–ultimate",
          "36–ultimate",
          "48–ultimate"
        ],
        "rows": [
          [
            "Scenario 1",
            "1.500",
            "1.200",
            "1.050",
            "1.000"
          ],
          [
            "Scenario 2",
            "1.770",
            "1.300",
            "1.070",
            "1.000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• A linear relationship exists for the interim percentage reported between valuation dates."
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
        "prompt": "Compare the actual versus expected claims reported between December 31, 2016 and June 30, 2017 for each accident year under each scenario.",
        "solution": "Actual six-month emergence ($000) is 2014 2,000; 2015 6,000; 2016 8,000. Interpolate percent reported, not CDFs. Scenario 1 expected is 1,775, 4,429, 5,000; scenario 2 expected is 2,485, 6,664, 7,231, respectively.",
        "insight": "Compare all three years over six months using reciprocals of age-to-ultimate factors."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly justify which of the two reported claim development patterns shown above better reflects the actual emergence of claims.",
        "solution": "Scenario 2 is closer for 2015 and 2016 and has a smaller total absolute deviation, so it better reflects observed interim emergence.",
        "insight": "Justify with actual-versus-expected closeness rather than whether a factor is high or low."
      }
    ]
  }
];

// Fall 2018: PDF-checked transcription; regenerate with scripts/build_fall2018.py.
window.FALL_2018_QUESTIONS = [
  {
    "id": "fall-2018-1",
    "number": 1,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-4"
    ],
    "points": 2.5,
    "questionPage": 4,
    "solutionPages": [
      31,
      32
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurer is considering changing the exposure base for boat owners line of business from boat-years to the insured value of the boat."
      },
      {
        "type": "line",
        "text": "The insurer offers the following coverages for boat owners:"
      },
      {
        "type": "line",
        "text": "i. Liability coverage pays for damages to another boat or injuries of people not on the insured's boat."
      },
      {
        "type": "line",
        "text": "ii. Physical damage coverage pays for damages to the insured's boat caused by common risks, such as sinking, fire, storms, theft, and collision."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Using three criteria for a good exposure base, evaluate the effectiveness of the proposed change in exposure base for both liability and physical damage coverages and provide a recommendation for the preferred exposure base.",
        "solution": "Assess proportionality to expected loss, practicality, and historical precedent. Boat value is not proportional to liability damage to others, but does relate to physical-damage repair or replacement severity. Value can be difficult to define and verify and may be manipulated; this affects both coverages. Changing the base also requires systems/data changes and may cause premium swings for both. Retain boat-years: more boats produce more claims, boat counts are objective and readily verified, and no conversion cost is needed.",
        "insight": "Evaluate all three criteria for both coverages and make a supported recommendation. Other justified recommendations were accepted."
      }
    ]
  },
  {
    "id": "fall-2018-2",
    "number": 2,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-5"
    ],
    "points": 2.0,
    "questionPage": 5,
    "solutionPages": [
      33,
      34
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following premium and loss information:"
      },
      {
        "type": "table",
        "title": "Premium Transactions",
        "headers": [
          "Policy",
          "Original Effective Date",
          "Original Expiration Date",
          "Transaction Effective Date",
          "Full-Term Premium ($)",
          "Notes"
        ],
        "rows": [
          [
            "A",
            "July 1, 2016",
            "June 30, 2017",
            "July 1, 2016",
            "800",
            "Start of New Policy"
          ],
          [
            "A",
            "July 1, 2016",
            "June 30, 2017",
            "April 1, 2017",
            "400",
            "Additional Premium for Endorsement"
          ],
          [
            "B",
            "April 1, 2017",
            "March 31, 2018",
            "April 1, 2017",
            "1,000",
            "Start of New Policy"
          ],
          [
            "C",
            "October 1, 2017",
            "September 30, 2018",
            "October 1, 2017",
            "500",
            "Start of New Policy"
          ],
          [
            "C",
            "October 1, 2017",
            "September 30, 2018",
            "April 1, 2018",
            "N/A",
            "Policy Canceled"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Loss Transactions",
        "headers": [
          "Policy",
          "Accident Date",
          "Payment Date",
          "Loss Payment ($)"
        ],
        "rows": [
          [
            "A",
            "October 1, 2016",
            "October 15, 2016",
            "500"
          ],
          [
            "A",
            "January 1, 2017",
            "January 15, 2017",
            "200"
          ],
          [
            "B",
            "October 1, 2017",
            "January 15, 2018",
            "500"
          ],
          [
            "C",
            "January 1, 2018",
            "January 15, 2018",
            "750"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Each claim is closed on the payment date."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the 2017 calendar year earned premium.",
        "solution": "2017 calendar year earned premium = 800 × 6/12 + 400 × 3/12 + 1,000 × 9/12 + 500 × 3/12 = $1,375.",
        "insight": "The $400 endorsement premium is full-term, so prorate it. The 2018 cancellation does not affect 2017 calendar-year earnings."
      },
      {
        "id": "b",
        "points": 1.25,
        "prompt": "Calculate the 2017 policy year loss ratio evaluated at December 31, 2018.",
        "solution": "Only Policies B and C belong to policy year 2017. Earned premium = 1,000 + 500 × 6/12 = $1,250 after C's cancellation. Losses = 500 + 750 = $1,250. Loss ratio = 1,250 / 1,250 = 100%.",
        "insight": "Include the cancellation and use policy-year membership, not calendar-year transactions."
      }
    ]
  },
  {
    "id": "fall-2018-3",
    "number": 3,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-5",
      "ratemaking-9"
    ],
    "points": 1.75,
    "questionPage": 6,
    "solutionPages": [
      35,
      36
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
          "Effective Date",
          "Overall Average Rate Change",
          "Rate Per Exposure ($)",
          "Class Factor X",
          "Class Factor Y",
          "Class Factor Z",
          "Expense Fee ($)"
        ],
        "rows": [
          [
            "January 1, 2016",
            "0.0%",
            "1,000",
            "1.2",
            "0.85",
            "1",
            "120"
          ],
          [
            "July 1, 2017",
            "10.0%",
            "1,112",
            "1.2",
            "0.85",
            "1",
            "120"
          ],
          [
            "October 1, 2017",
            "0.0%",
            "1,175",
            "1.1",
            "0.75",
            "1",
            "120"
          ],
          [
            "April 1, 2018",
            "1.0%",
            "1,175",
            "1.1",
            "0.75",
            "1",
            "132"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• All policies are semi-annual."
      },
      {
        "type": "line",
        "text": "• Exposures are written uniformly throughout the year."
      },
      {
        "type": "line",
        "text": "• Expense fee is a per exposure fee that is added in the last step of the rate calculation."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the on-level factor for calendar year 2017 earned premium using the parallelogram method.",
        "solution": "2017 average rate level = 0.75 × 1 + 0.25 × 1.10 = 1.025. Current rate level = 1.10 × 1.01 = 1.111. On-level factor = 1.111 / 1.025 = 1.0839.",
        "insight": "Use the semiannual-policy parallelogram weights and each applicable overall rate level."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the on-level factor for a policy effective on April 1, 2017 within Class Y using the extension of exposure method.",
        "solution": "Original premium = 1,000 × 0.85 + 120 = $970. Current premium = 1,175 × 0.75 + 132 = $1,013.25. On-level factor = 1,013.25 / 970 = 1.0446.",
        "insight": "Use Class Y and include the expense fee at both rate levels."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Assess the appropriateness of using the parallelogram method to calculate indicated class factors using the loss ratio method.",
        "solution": "An aggregate parallelogram adjustment is inappropriate because the overall average rate change does not capture the different class-factor changes on October 1, 2017. Applying the method separately by class using each class's own rate impact can be appropriate.",
        "insight": "Explain the difference between overall and class-specific rate changes."
      }
    ]
  },
  {
    "id": "fall-2018-4",
    "number": 4,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-16"
    ],
    "points": 1.5,
    "questionPage": 7,
    "solutionPages": [
      37,
      38
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Loss Costs by Report Year Lag ($)",
        "headers": [
          "Report Year",
          "0",
          "1",
          "2"
        ],
        "rows": [
          [
            "2015",
            "500",
            "300",
            "200"
          ],
          [
            "2016",
            "525",
            "330",
            "210"
          ],
          [
            "2017",
            "550",
            "365",
            "220"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.25,
        "prompt": "Calculate the report year 2015 loss costs for a claims-made policy.",
        "solution": "$1,000 = 500 + 300 + 200, covering all report-year 2015 loss costs.",
        "insight": "An answer of $500 required explicitly assuming a first-year claims-made policy."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Calculate the accident year 2015 loss costs for an occurrence policy.",
        "solution": "$1,050 = 500 + 330 + 220, following accident year 2015 through its reporting lags.",
        "insight": "Occurrence coverage follows the accident year across report years."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Compare the effect of an unexpected increase in underlying trend on the accuracy of the pricing for a claims-made policy and an occurrence policy. Briefly explain why one of the policies is impacted more than the other.",
        "solution": "Occurrence pricing is more affected because it is exposed to both reporting and settlement lag. Claims-made coverage removes the reporting lag, leaving a shorter period over which an unexpected trend increase can affect costs.",
        "insight": "Explain why the lag difference matters, rather than merely calling claims-made shorter-tailed."
      },
      {
        "id": "d",
        "points": 0.25,
        "prompt": "Briefly explain why the risk of reserve inadequacy is reduced for a claims-made policy relative to an occurrence policy.",
        "solution": "Claims-made coverage has no pure IBNR (IBNYR) for claims not yet reported under the policy; it retains IBNER from settlement development. Removing reporting uncertainty reduces reserve inadequacy risk.",
        "insight": "Distinguish IBNYR from IBNER; do not simply say there is no IBNR."
      },
      {
        "id": "e",
        "points": 0.25,
        "prompt": "Briefly describe why the investment income earned from claims-made policies is less than under occurrence policies.",
        "solution": "The period between premium collection and claim payment is shorter, so funds are invested for less time and earn less investment income.",
        "insight": "Compare premium collection to payment, not accident date to payment."
      }
    ]
  },
  {
    "id": "fall-2018-5",
    "number": 5,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 2,
    "questionPage": 8,
    "solutionPages": [
      39,
      40
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
          "Accident Year",
          "Incurred Loss and ALAE as of December 31, 2017 ($000s)"
        ],
        "rows": [
          [
            "2015",
            "15,000"
          ],
          [
            "2016",
            "8,000"
          ],
          [
            "2017",
            "2,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Year Ending Quarter",
          "Frequency",
          "Severity ($)",
          "Pure Premium ($)"
        ],
        "rows": [
          [
            "March 31, 2014",
            "0.055",
            "18,200",
            "1,001"
          ],
          [
            "June 30, 2014",
            "0.054",
            "18,000",
            "972"
          ],
          [
            "September 30, 2014",
            "0.056",
            "18,100",
            "1,014"
          ],
          [
            "December 31, 2014",
            "0.058",
            "18,300",
            "1,061"
          ],
          [
            "March 31, 2015",
            "0.058",
            "18,500",
            "1,073"
          ],
          [
            "June 30, 2015",
            "0.059",
            "19,000",
            "1,121"
          ],
          [
            "September 30, 2015",
            "0.062",
            "19,200",
            "1,190"
          ],
          [
            "December 31, 2015",
            "0.063",
            "19,500",
            "1,229"
          ],
          [
            "March 31, 2016",
            "0.065",
            "19,750",
            "1,284"
          ],
          [
            "June 30, 2016",
            "0.066",
            "19,885",
            "1,312"
          ],
          [
            "September 30, 2016",
            "0.066",
            "20,000",
            "1,320"
          ],
          [
            "December 31, 2016",
            "0.068",
            "20,250",
            "1,377"
          ],
          [
            "March 31, 2017",
            "0.069",
            "20,445",
            "1,411"
          ],
          [
            "June 30, 2017",
            "0.070",
            "20,882",
            "1,462"
          ],
          [
            "September 30, 2017",
            "0.069",
            "21,000",
            "1,449"
          ],
          [
            "December 31, 2017",
            "0.065",
            "21,250",
            "1,381"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Annual Exponential Trends",
        "headers": [
          "# of Points",
          "Frequency",
          "Severity",
          "Pure Premium"
        ],
        "rows": [
          [
            "16",
            "7%",
            "5%",
            "12%"
          ],
          [
            "12",
            "6%",
            "5%",
            "11%"
          ],
          [
            "8",
            "2%",
            "4%",
            "7%"
          ],
          [
            "6",
            "0%",
            "5%",
            "5%"
          ],
          [
            "4",
            "-7%",
            "5%",
            "-3%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• All policies are semi-annual."
      },
      {
        "type": "line",
        "text": "• Rates are to be in effect for 2 years."
      },
      {
        "type": "line",
        "text": "• There is no development after 36 months."
      },
      {
        "type": "line",
        "text": "• An underwriting change went into effect on July 1, 2017, materially changing the composition of the book of business."
      },
      {
        "type": "line",
        "text": "• A planned rate change will go into effect on January 1, 2019."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the projected 2015 accident year loss and ALAE to be used in the rate change analysis. Justify any trend selections.",
        "solution": "Select a stable 5% severity trend. Use 6% frequency trend to July 1, 2017 and −7% thereafter to reflect the underwriting change. The average future accident date is April 1, 2020 (two years of semiannual policies beginning January 1, 2019). Trend July 1, 2015 to July 1, 2017 for 2 years and then to April 1, 2020 for 2.75 years: 15,000 × (1.06 × 1.05)^2 × (0.93 × 1.05)^2.75 = 17,405.25 ($000s). No further development is needed at 36 months.",
        "insight": "Use two-step trending, justify both selections, and calculate the projection date for semiannual policies and a two-year rate period."
      }
    ]
  },
  {
    "id": "fall-2018-6",
    "number": 6,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 1.5,
    "questionPage": 9,
    "solutionPages": [
      41,
      42,
      43
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Two methods of deriving expense provisions in ratemaking include the premium-based projection method and the exposure-based projection method."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "For each method, briefly describe how both fixed and variable expenses are treated.",
        "solution": "Separate fixed and variable expenses. Premium-based: divide each portion by written or earned premium, matching when the expense is incurred, to obtain separate expense ratios. Exposure-based: divide fixed expenses by written or earned exposures (or policy count), producing dollars per exposure; variable expenses remain a ratio to premium. Project the selected provisions to the future period as appropriate.",
        "insight": "Explicitly distinguish fixed from variable costs and identify the fixed-expense denominator for each method."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe one shortcoming (or distortion) of each method.",
        "solution": "Premium-based: rate changes can alter the fixed-expense ratio even when fixed costs have not changed. Exposure-based: economies of scale in a changing book can make historical fixed expenses per exposure unrepresentative of future costs.",
        "insight": "Describe a specific distortion for each approach, not merely data availability concerns."
      }
    ]
  },
  {
    "id": "fall-2018-7",
    "number": 7,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-6",
      "ratemaking-8",
      "reserving-11"
    ],
    "points": 5.75,
    "questionPage": 10,
    "solutionPages": [
      44,
      45,
      46,
      47,
      48
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2017:"
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
            "2015",
            "480",
            "456",
            "447"
          ],
          [
            "2016",
            "560",
            "532",
            ""
          ],
          [
            "2017",
            "590",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Loss + ALAE ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2015",
            "7,200,000",
            "8,208,000",
            "8,850,600"
          ],
          [
            "2016",
            "8,120,000",
            "9,256,800",
            ""
          ],
          [
            "2017",
            "9,145,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Value",
          "Item"
        ],
        "rows": [
          [
            "$98,000",
            "Expected reinsurance recoveries"
          ],
          [
            "$318,000",
            "Cost of reinsurance (expected ceded premium)"
          ],
          [
            "3%",
            "Expected annual exposure increase"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Earned Exposures"
        ],
        "rows": [
          [
            "2015",
            "14,000"
          ],
          [
            "2016",
            "15,000"
          ],
          [
            "2017",
            "17,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Value",
          "Item"
        ],
        "rows": [
          [
            "5%",
            "ULAE provision as a percent of loss and ALAE"
          ],
          [
            "3%",
            "Annual pure premium trend"
          ],
          [
            "$21",
            "Projected fixed expenses per exposure"
          ],
          [
            "15%",
            "Variable expense ratio"
          ],
          [
            "10%",
            "Profit provision"
          ],
          [
            "2%",
            "Contingency Provision"
          ],
          [
            "$950",
            "On-leveled and projected earned premium per exposure"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Exposures are written evenly throughout each year."
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• There is no loss development or claim count development beyond 36 months."
      },
      {
        "type": "line",
        "text": "• The reinsurance contract has a 12 month term length and an effective date of January 1, 2019."
      },
      {
        "type": "line",
        "text": "• Rates are to be in effect for one year."
      },
      {
        "type": "line",
        "text": "• Rate revision is planned to be effective April 1, 2019."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the projected net reinsurance cost per exposure using a 12-month term for the reinsurance contract.",
        "solution": "Net reinsurance cost = 318,000 − 98,000 = $220,000. Project 2017 exposures two years to the 2019 reinsurance term: 17,000 × 1.03^2 = 18,035.3. Cost per exposure = 220,000 / 18,035.3 ≈ $12.20.",
        "insight": "Use the latest year's exposures and the reinsurance contract's period, not the rate revision period."
      },
      {
        "id": "b",
        "points": 2,
        "prompt": "Calculate the ultimate losses and ALAE for each accident year using an appropriate frequency-severity technique.",
        "solution": "Reported severities (12, 24, 36 months) are 2015: 15,000, 18,000, 19,800; 2016: 14,500, 17,400; 2017: 15,500. Select severity factors 1.20 and 1.10, with no tail. Count factors are 0.95 and approximately 0.98. Ultimate loss and ALAE: 2015 = $8,850,600; 2016 = 9,256,800 × 1.10 × 0.98 = $9,978,830; 2017 = 9,145,000 × 1.32 × 0.931 = $11,238,473.",
        "insight": "Develop counts and severities separately; a direct chain-ladder answer does not demonstrate the requested frequency-severity technique. Rounding produces accepted variations."
      },
      {
        "id": "c",
        "points": 1.75,
        "prompt": "Calculate the projected pure premium per exposure using even weights across the three accident years.",
        "solution": "Trend to April 1, 2020. Annual pure premiums are 8,850,600 / 14,000 × 1.03^4.75 ≈ $727; 9,978,830 / 15,000 × 1.03^3.75 ≈ $743; and 11,238,473 / 17,000 × 1.03^2.75 ≈ $717. Their equal-weight average is about $729 before ULAE, or about $765.7 including the 5% ULAE provision.",
        "insight": "Give equal weight to each year's pure premium. Do not trend the exposure denominators. ULAE may be included here or in part d, but not omitted or counted twice."
      },
      {
        "id": "d",
        "points": 1,
        "prompt": "Calculate the indicated rate change.",
        "solution": "Indicated premium ≈ (729 × 1.05 + 21 + 12.20) / (1 − 0.15 − 0.10 − 0.02) = $1,094. Indicated change ≈ 1,094 / 950 − 1 = 15.2% (about 15.16% with the report's rounding).",
        "insight": "Include net reinsurance cost, ULAE, and the contingency provision in their proper places."
      }
    ]
  },
  {
    "id": "fall-2018-8",
    "number": 8,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-13"
    ],
    "points": 2.25,
    "questionPage": 11,
    "solutionPages": [
      49,
      50,
      51
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
          "Value",
          "Item"
        ],
        "rows": [
          [
            "$500",
            "Current average premium"
          ],
          [
            "$600",
            "Indicated average premium"
          ],
          [
            "$510",
            "All competitors' average premium"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "List two likely consequences of the company implementing the indicated rate.",
        "solution": "Retention may fall as policyholders move to cheaper competitors. Profit per retained risk should increase as premium moves toward the indicated level.",
        "insight": "State two distinct consequences; adverse selection or a worsening loss ratio was not credited as an unsupported consequence."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe two factors that affect an insured's propensity to renew.",
        "solution": "Price: a large increase encourages customers to shop and choose a cheaper competitor. Service: satisfied customers are more likely to renew because they value the insurer's service and claims handling.",
        "insight": "Explain how each factor affects renewal rather than merely naming it."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "The company has decided to not implement the indicated rate. List three non-pricing solutions the company could implement to ensure profitability does not deteriorate.",
        "solution": "Reduce operating expenses; tighten underwriting to favor more profitable risks; introduce loss-mitigation programs to reduce claims.",
        "insight": "Give three non-pricing actions and specify the direction of any change in mix or coverage."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Identify an issue with comparing one company's premium to another and briefly propose a solution to this issue.",
        "solution": "Different risk and coverage mixes make average premiums incomparable. Compare quotes for the same risk profile and coverage, or re-rate the company's book under competitors' filed rating plans.",
        "insight": "The proposed solution must address the specific comparability issue identified."
      }
    ]
  },
  {
    "id": "fall-2018-9",
    "number": 9,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-10"
    ],
    "points": 2.0,
    "questionPage": 12,
    "solutionPages": [
      52,
      53
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An auto insurer is evaluating the variable \"number of vehicles\" for inclusion in a rating plan. Given the following Generalized Linear Model (GLM) output:"
      },
      {
        "type": "line",
        "text": "• Number of vehicles chi-square percentage: 10%"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Fully justify whether number of vehicles should be included in the rating plan.",
        "solution": "Do not include number of vehicles on this evidence. It fails the main-effect test: nearly all error ranges contain 1.00. It fails the consistency test: results vary materially across years outside the first few vehicle counts. The 10% chi-square percentage exceeds a 5% significance threshold, so the statistical test also fails.",
        "insight": "State a decision and correctly apply the main-effect, consistency and statistical tests to the supplied graphs."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Briefly discuss three challenges associated with performing GLM analysis on loss ratio data.",
        "solution": "Premiums must be on-leveled; there is no standard default distribution for loss ratios; and a rate change can make a fitted loss-ratio model obsolete.",
        "insight": "Give challenges specific to loss-ratio modeling rather than generic GLM difficulties."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "GLM analysis is widely accepted in classification ratemaking. Briefly discuss one reason that univariate analysis may be more appropriate than GLM analysis.",
        "solution": "Univariate analysis may be preferable for a simple rating plan because it is easier to explain and more transparent to stakeholders.",
        "insight": "Connect the reason explicitly to the comparison with GLM analysis."
      }
    ],
    "figure": {
      "src": "assets/exam-graphs/fall-2018-q9.png",
      "title": "Number of vehicles GLM output",
      "alt": "Two original GLM graphs: exposures and indicated relativity with upper and lower standard error bounds by number of vehicles; exposures and relativities for 2015, 2016 and 2017. Vehicle counts range from 1 to 7+, with a 1.0 reference line."
    }
  },
  {
    "id": "fall-2018-10",
    "number": 10,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 2.5,
    "questionPage": 13,
    "solutionPages": [
      54,
      55
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A company writes homeowners insurance in a large state divided in half by a mountain range. The company currently uses two geographic rating territories, one on either side of the mountains, as the range has an effect on weather patterns. Each territory has sufficient exposures for its loss experience to be considered fully credible."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Briefly discuss two disadvantages of the company's current territorial rating approach.",
        "solution": "Two broad territories ignore important within-territory differences such as urban versus rural risks. Weather alone also misses geographic variation in theft, fire and other perils, leaving heterogeneous risks grouped together.",
        "insight": "Provide two disadvantages of the existing approach."
      },
      {
        "id": "b",
        "points": 2,
        "prompt": "Discuss the process by which an actuary would develop new rating territory definitions for this state. Briefly explain a consideration for each step in the process.",
        "solution": "1. Define basic geographic units such as ZIP codes or counties; consider granularity and stability of boundaries. 2. Estimate systematic geographic risk with a GLM using demographic/physical variables; control for correlation with other rating factors. 3. Estimate and spatially smooth residual geographic risk; choose distance or adjacency weights suited to the peril. 4. Cluster the units into rating territories; consider the clustering method and desired exposure balance.",
        "insight": "Describe all four steps, with a consideration for each, including final clustering."
      }
    ]
  },
  {
    "id": "fall-2018-11",
    "number": 11,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-15"
    ],
    "points": 1.75,
    "questionPage": 14,
    "solutionPages": [
      56
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
          "Value",
          "Item"
        ],
        "rows": [
          [
            "$500,000",
            "Per occurrence deductible"
          ],
          [
            "90.0%",
            "Loss elimination ratio for a $500,000 deductible"
          ],
          [
            "10.0%",
            "ALAE/ground up loss ratio"
          ],
          [
            "$2,000,000",
            "Ground up loss estimate"
          ],
          [
            "$100,000",
            "Fixed expenses"
          ],
          [
            "12.0%",
            "Variable expenses as % of premium"
          ],
          [
            "4.0%",
            "Underwriting profit as % of premium"
          ],
          [
            "3.0%",
            "Deductible processing cost as a % of losses below the deductible"
          ],
          [
            "1.0%",
            "Credit risk as a % of losses below the deductible"
          ],
          [
            "7.0%",
            "Additional risk margin as a % of excess losses"
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
        "points": 1.75,
        "prompt": "Calculate the premium for the large deductible policy.",
        "solution": "Loss below deductible = 2,000,000 × 90% = $1,800,000; excess loss = $200,000; all ALAE = $200,000. Processing cost = 3% × 1,800,000 = $54,000; credit risk = $18,000; excess risk margin = 7% × 200,000 = $14,000. Premium = (200,000 + 200,000 + 100,000 + 54,000 + 18,000 + 14,000) / (1 − 0.12 − 0.04) = $697,619.",
        "insight": "Include all ALAE and fixed expenses; apply processing and credit costs to losses below the deductible and the risk margin to excess losses. The report's second sample has an arithmetic typo; its formula also yields $697,619."
      }
    ]
  },
  {
    "id": "fall-2018-12",
    "number": 12,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2.5,
    "questionPage": 15,
    "solutionPages": [
      57,
      58
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following for an insurance company:"
      },
      {
        "type": "line",
        "text": "Premium = (Base Rate) x (Rating Factor 1) x (Rating Factor 2)"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Variable 1 Segment",
          "Rating Factor 1"
        ],
        "rows": [
          [
            "A",
            "0.90"
          ],
          [
            "B",
            "2.00"
          ],
          [
            "C",
            "1.00"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Variable 2 Segment",
          "Rating Factor 2"
        ],
        "rows": [
          [
            "X",
            "0.75"
          ],
          [
            "Y",
            "0.95"
          ],
          [
            "Z",
            "1.00"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Earned Exposures",
        "headers": [
          "Variable 2",
          "A",
          "B",
          "C"
        ],
        "rows": [
          [
            "X",
            "800",
            "1,500",
            "600"
          ],
          [
            "Y",
            "300",
            "750",
            "500"
          ],
          [
            "Z",
            "500",
            "500",
            "1,500"
          ]
        ],
        "groups": [
          {
            "label": "",
            "span": 1
          },
          {
            "label": "Variable 1",
            "span": 3
          }
        ]
      },
      {
        "type": "table",
        "title": "Reported Loss & ALAE ($)",
        "headers": [
          "Variable 2",
          "A",
          "B",
          "C"
        ],
        "rows": [
          [
            "X",
            "320,000",
            "2,100,000",
            "400,000"
          ],
          [
            "Y",
            "170,000",
            "1,535,000",
            "500,000"
          ],
          [
            "Z",
            "305,000",
            "1,100,000",
            "1,600,000"
          ]
        ],
        "groups": [
          {
            "label": "",
            "span": 1
          },
          {
            "label": "Variable 1",
            "span": 3
          }
        ]
      },
      {
        "type": "line",
        "text": "• The base rate is $1,000."
      },
      {
        "type": "line",
        "text": "• The base classification for Variable 1 is C."
      },
      {
        "type": "line",
        "text": "• The proposed overall rate level change is 0%."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the indicated relativities for Variable 1 using the adjusted pure premium method.",
        "solution": "Adjust exposures using Variable 2 factors. A: 800 × .75 + 300 × .95 + 500 = 1,385; B: 1,500 × .75 + 750 × .95 + 500 = 2,337.5; C: 600 × .75 + 500 × .95 + 1,500 = 2,425. Loss totals are $795,000, $4,735,000 and $2,500,000. Adjusted pure premiums are $574.01, $2,025.67 and $1,030.93. Rebase to C: A = 0.5568, B = 1.9649, C = 1.0000.",
        "insight": "Use exposures adjusted for the other variable and rebase to C."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the proposed base rate assuming the company selects half of the indicated relativity change for each segment of Variable 1.",
        "solution": "Using rounded indicated factors 0.56, 1.96 and 1.00, selected factors are 0.73, 1.98 and 1.00. Preserve total premium: new base = 1,000 × (1,385 × .90 + 2,337.5 × 2 + 2,425) / (1,385 × .73 + 2,337.5 × 1.98 + 2,425) ≈ $1,035. Precise unrounded relativities give a slightly different accepted result.",
        "insight": "Use selected factors and adjusted exposure weights to offset the classification change."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe two social criteria for evaluating the appropriateness of rating variables.",
        "solution": "Affordability: insurance should remain affordable. Controllability: insureds should be able to influence their class and obtain a lower rate through their actions.",
        "insight": "Give social criteria rather than legal or operational criteria."
      }
    ]
  },
  {
    "id": "fall-2018-13",
    "number": 13,
    "exam": "Fall 2018",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 2.75,
    "questionPage": 16,
    "solutionPages": [
      59,
      60,
      61
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information about a home's propensity for loss:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Size of Loss",
          "Loss Distribution"
        ],
        "rows": [
          [
            "X ≤ $400,000",
            "50.0%"
          ],
          [
            "$400,000 < X ≤ $550,000",
            "25.0%"
          ],
          [
            "$550,000 < X ≤ $700,000",
            "10.0%"
          ],
          [
            "$700,000 < X ≤ $850,000",
            "10.0%"
          ],
          [
            "$850,000 < X ≤ $1,000,000",
            "2.5%"
          ],
          [
            "$1,000,000 < X ≤ $1,500,000",
            "2.5%"
          ],
          [
            "Total:",
            "100.0%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Expected claim frequency is 2%."
      },
      {
        "type": "line",
        "text": "• Expected losses are uniformly distributed within each layer of loss."
      },
      {
        "type": "line",
        "text": "• The home is valued at $1,500,000."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Calculate the rate per $1,000 of coverage for the home at the following amounts of insurance: i. $1,500,000 ii. $800,000",
        "solution": "At $1,500,000 coverage, mean severity = .5(200,000) + .25(475,000) + .1(625,000) + .1(775,000) + .025(925,000) + .025(1,250,000) = $413,125. Rate per $1,000 = 413,125 × .02 / 1,500 = $5.51. At $800,000, cap all losses at the limit. The $700,000–$850,000 layer has mean payment (2/3)750,000 + (1/3)800,000 = $766,666.67. Total capped severity is $397,916.67, giving 397,916.67 × .02 / 800 = $9.95 per $1,000.",
        "insight": "Use layer midpoints, cap the straddling layer correctly, retain higher-layer probability, and include frequency."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly discuss a problem associated with underinsurance from the following perspectives: i. Insured ii. Insurer",
        "solution": "Insured: a total or near-total loss may not be fully covered, leaving funds needed to rebuild. Insurer: rates based on full insurance-to-value underprice underinsured homes because expected loss does not decrease proportionally with the amount insured.",
        "insight": "Explain the directional problem from both perspectives."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "The home is insured for $1,000,000 with a coinsurance requirement of 80%. Calculate the indemnity payments and coinsurance penalties for the following losses: i. $800,000 ii. $1,200,000",
        "solution": "Coinsurance apportionment = min[1,000,000 / (1,500,000 × .80), 1] = 5/6. (i) $800,000 loss: indemnity = $666,666.67 and penalty = $133,333.33. (ii) $1,200,000 loss: indemnity = min(1,200,000 × 5/6, 1,000,000) = $1,000,000. Penalty = min(loss, limit) − indemnity = $0.",
        "insight": "The $200,000 above the policy limit in case ii is uninsured loss, not a coinsurance penalty."
      }
    ]
  },
  {
    "id": "fall-2018-14",
    "number": 14,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-1"
    ],
    "points": 1.5,
    "questionPage": 17,
    "solutionPages": [
      62,
      63
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "For each of the following stakeholders, describe the importance of having accurate unpaid claim estimates: i. Internal Management; ii. Investors; iii. Regulators."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "For Internal Management, describe the importance of having accurate unpaid claim estimates.",
        "solution": "Accurate unpaid claims support pricing, underwriting, reinsurance and strategy decisions. Overstated reserves can prompt unnecessary rate increases or tighter underwriting; understated reserves can delay needed corrective action.",
        "insight": "Describe consequences for management with sufficient detail, not just a brief label."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "For Investors, describe the importance of having accurate unpaid claim estimates.",
        "solution": "Investors rely on financial statements to assess strength, profitability and dividends. Incorrect reserves can make the insurer appear stronger or weaker than it is and distort investment decisions.",
        "insight": "Explain how reserve accuracy affects investors' decisions."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "For Regulators, describe the importance of having accurate unpaid claim estimates.",
        "solution": "Regulators use unpaid claims estimates to assess solvency and rate adequacy. Understated reserves can conceal financial weakness and delay intervention until insolvency is difficult to prevent.",
        "insight": "Describe the regulatory impact rather than saying regulators determine the reserve level."
      }
    ]
  },
  {
    "id": "fall-2018-15",
    "number": 15,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-1",
      "reserving-14"
    ],
    "points": 2.75,
    "questionPage": 18,
    "solutionPages": [
      64,
      65,
      66
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
          "Claim ID",
          "Accident Date",
          "Transaction Date",
          "Gross Amount Paid on Transaction Date ($)",
          "Gross Ending Case Outstanding ($)"
        ],
        "rows": [
          [
            "A",
            "May 30, 2015",
            "December 24, 2015",
            "1,000",
            "550"
          ],
          [
            "A",
            "May 30, 2015",
            "August 1, 2016",
            "500",
            "225"
          ],
          [
            "A",
            "May 30, 2015",
            "June 1, 2017",
            "725",
            "0"
          ],
          [
            "B",
            "August 28, 2015",
            "August 29, 2015",
            "300",
            "1,050"
          ],
          [
            "B",
            "August 28, 2015",
            "February 6, 2016",
            "600",
            "375"
          ],
          [
            "B",
            "August 28, 2015",
            "June 14, 2016",
            "450",
            "150"
          ],
          [
            "C",
            "April 21, 2016",
            "April 25, 2016",
            "1,200",
            "575"
          ],
          [
            "C",
            "April 21, 2016",
            "March 3, 2017",
            "700",
            "250"
          ],
          [
            "C",
            "April 21, 2016",
            "December 1, 2017",
            "200",
            "0"
          ],
          [
            "D",
            "October 11, 2016",
            "October 12, 2016",
            "400",
            "900"
          ],
          [
            "D",
            "October 11, 2016",
            "May 17, 2017",
            "800",
            "625"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Value",
          "Item"
        ],
        "rows": [
          [
            "60%",
            "Quota share ceded percentage for reinsurance that applies to claims occurring in 2015."
          ],
          [
            "$1,500",
            "Per claim excess of loss retention for reinsurance that applies to claims occurring in 2016."
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.25,
        "prompt": "Calculate calendar year 2015 reported claims, gross of reinsurance.",
        "solution": "2015 gross reported = (1,000 + 550) for A + (300 + 1,050) for B = $2,900.",
        "insight": "Reported claims equal paid claims plus the change in case outstanding; do not apply reinsurance."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Calculate calendar year 2016 paid claims, net of reinsurance.",
        "solution": "2016 net paid = (500 + 600 + 450) × .40 + 1,200 + 400 = $2,220. C and D remain below their individual paid-loss retentions.",
        "insight": "Retain 40%, not 60%, for 2015 claims and apply the $1,500 retention per 2016 claim."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Calculate calendar year 2016 reported claims, gross of reinsurance.",
        "solution": "2016 gross reported: A = 500 + 225 − 550 = 175; B = 600 + 450 + 150 − 1,050 = 150; C = 1,200 + 575 = 1,775; D = 400 + 900 = 1,300. Total = $3,400.",
        "insight": "Include the change in case outstanding for earlier claims and do not apply reinsurance."
      },
      {
        "id": "d",
        "points": 1,
        "prompt": "Calculate calendar year 2017 reported claims, net of reinsurance.",
        "solution": "A: .40 × (725 − 225) = $200. B: $0. C was already above the $1,500 reported retention at year-end 2016, so its net reported change is $0. D: min(400 + 800 + 625, 1,500) − (400 + 900) = $200. Total = $400.",
        "insight": "Apply quota share to A and compare capped cumulative reported amounts for C and D."
      }
    ]
  },
  {
    "id": "fall-2018-16",
    "number": 16,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-7",
      "reserving-8",
      "reserving-9",
      "reserving-15"
    ],
    "points": 2.0,
    "questionPage": 19,
    "solutionPages": [
      67,
      68,
      69
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company with a book of business (Book A) has recently acquired a smaller book of business (Book B) in the same state and line of business. Given the following as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Book A — Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "55,000",
            "92,000",
            "112,500",
            "123,700"
          ],
          [
            "2015",
            "54,800",
            "92,600",
            "111,100",
            ""
          ],
          [
            "2016",
            "57,000",
            "94,400",
            "",
            ""
          ],
          [
            "2017",
            "62,600",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Book A",
        "headers": [
          "Calendar Year",
          "Earned Premium ($000)"
        ],
        "rows": [
          [
            "2014",
            "175,200"
          ],
          [
            "2015",
            "179,400"
          ],
          [
            "2016",
            "182,800"
          ],
          [
            "2017",
            "184,200"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Value",
          "Item"
        ],
        "rows": [
          [
            "75%",
            "Book A expected claims ratio"
          ],
          [
            "1.06",
            "48 to ultimate reported claim development factor"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Book B — Reported Claims ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "2,600",
            "5,900",
            "6,700",
            "7,500"
          ],
          [
            "2015",
            "3,500",
            "4,300",
            "6,000",
            ""
          ],
          [
            "2016",
            "2,600",
            "2,700",
            "",
            ""
          ],
          [
            "2017",
            "4,400",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Book B",
        "headers": [
          "Calendar Year",
          "Earned Premium ($000)"
        ],
        "rows": [
          [
            "2014",
            "8,700"
          ],
          [
            "2015",
            "9,700"
          ],
          [
            "2016",
            "11,000"
          ],
          [
            "2017",
            "13,900"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the Book A ultimate claims for accident year 2015 using the reported development technique.",
        "solution": "36-to-48 factor = 123,700 / 112,500 ≈ 1.10. Including the 1.06 tail, 36-to-ultimate ≈ 1.166. Ultimate = 111,100 × 1.166 ≈ 129,543 ($000). Using unrounded factors gives about 129,491 ($000).",
        "insight": "Include the tail and use adjacent development ages; rounding variations were accepted."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calculate the Book A ultimate claims for accident year 2016 using the Bornhuetter-Ferguson technique.",
        "solution": "Select the average 24-to-36 factor: [(112,500 / 92,000) + (111,100 / 92,600)] / 2 ≈ 1.2114. The 24-to-ultimate factor is about 1.412. BF ultimate = 94,400 + 182,800 × .75 × (1 − 1/1.412) ≈ 134,400 ($000).",
        "insight": "Use the cumulative unreported proportion and the supplied 75% expected claims ratio."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Calculate the Book A ultimate claims for accident year 2017 using the expected claims technique.",
        "solution": "2017 expected ultimate claims = 184,200 × .75 = 138,150 ($000).",
        "insight": "Use the given expected claims ratio rather than estimating another one."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Recommend an approach for estimating ultimate claims for Book B in accident year 2015 without performing any calculations. Justify all assumptions.",
        "solution": "Use Book A's development pattern to develop Book B's 2015 reported claims. Book B is small and volatile; Book A is more credible and writes the same state and line. Explicitly assume the two books have comparable development patterns.",
        "insight": "Recommend a specific approach and justify borrowing Book A's experience."
      }
    ]
  },
  {
    "id": "fall-2018-17",
    "number": 17,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 3.5,
    "questionPage": 20,
    "solutionPages": [
      70,
      71
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Earned Premium ($000)",
          "On-Level Adjustment"
        ],
        "rows": [
          [
            "2014",
            "127,500",
            "0.710"
          ],
          [
            "2015",
            "117,600",
            "0.660"
          ],
          [
            "2016",
            "64,300",
            "0.850"
          ],
          [
            "2017",
            "58,900",
            "1.000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Ultimate Claim Counts",
          "Ultimate Severity ($)"
        ],
        "rows": [
          [
            "2014",
            "2,200",
            "32,600"
          ],
          [
            "2015",
            "1,970",
            "35,300"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Value",
          "Item"
        ],
        "rows": [
          [
            "-1.3%",
            "Annual claim count trend"
          ],
          [
            "6.0%",
            "Annual severity trend"
          ],
          [
            "15%",
            "Estimated savings on claims occurring after January 1, 2017 due to legislative change"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3,
        "prompt": "Estimate the ultimate claims for accident years 2016 and 2017 using an appropriate frequency-severity technique.",
        "solution": "Use on-level premium as the exposure proxy. Trend historical frequencies to 2017: 2,200 × .987^3 / (127,500 × .71) = .02336 and 1,970 × .987^2 / (117,600 × .66) = .02472 claims per $1,000 premium. Select approximately .024. Trend severities and apply the legislative factor: 32,600 × 1.06^3 × .85 ≈ $33,003 and 35,300 × 1.06^2 × .85 ≈ $33,714; select about $33,358. For 2016 reverse the 2017 adjustments: frequency ≈ .024 / .987 × .85 = .02067 per $1,000 historical premium; severity ≈ 33,358 / (1.06 × .85) = $37,024. Ultimate 2016 ≈ 64,300 × .0207 × 37,024 / 1,000 = 49,300 ($000). Ultimate 2017 is about 47,200 ($000), with the report showing 47,247 using its rounded count of 1,416.",
        "insight": "Apply frequency and severity trends separately, on-level premium consistently, and the 15% legislative saving only to 2017. The report's displayed 2016 frequency formula has a typographical error; .85 belongs in the numerator."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe two key assumptions of frequency-severity techniques.",
        "solution": "Claim-count definitions must be consistent across years. Claim mix must remain sufficiently homogeneous for historical frequency and severity patterns to represent future experience.",
        "insight": "State technique-specific assumptions, not generic data-quality requirements."
      }
    ]
  },
  {
    "id": "fall-2018-18",
    "number": 18,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-10"
    ],
    "points": 1.75,
    "questionPage": 21,
    "solutionPages": [
      72,
      73
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data as of December 31, 2017:"
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
            "2014",
            "500",
            "1,100",
            "1,800",
            "2,500"
          ],
          [
            "2015",
            "900",
            "1,700",
            "2,300",
            ""
          ],
          [
            "2016",
            "1,000",
            "1,900",
            "",
            ""
          ],
          [
            "2017",
            "1,100",
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
          "Earned Premium ($000)"
        ],
        "rows": [
          [
            "2014",
            "5,300"
          ],
          [
            "2015",
            "7,200"
          ],
          [
            "2016",
            "7,800"
          ],
          [
            "2017",
            "8,500"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Value",
          "Item"
        ],
        "rows": [
          [
            "1.3",
            "48 to ultimate reported claim development factor"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• In 2015 the company started writing a new class of insureds within this line of business."
      },
      {
        "type": "line",
        "text": "• Both existing and new classes of insureds are priced accurately."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Estimate ultimate claims for accident year 2017 using the reported Cape Cod technique.",
        "solution": "Using simple-average factors, select approximately 1.9963, 1.4932, 1.3889 and 1.3. CDFs at ages 12, 24, 36 and 48 are 5.3822, 2.6961, 1.8056 and 1.3. Used-up premium = 5,300/1.3 + 7,200/1.8056 + 7,800/2.6961 + 8,500/5.3822 ≈ 12,536.8. Expected claims ratio = (2,500 + 2,300 + 1,900 + 1,100)/12,536.8 ≈ .6222. Ultimate 2017 = 1,100 + 8,500 × .6222 × (1 − 1/5.3822) ≈ 5,406 ($000).",
        "insight": "Estimate the ratio from total reported claims divided by used-up premium, then add expected unreported claims to reported claims."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Discuss the effect the new class of insureds has on the reported Cape Cod technique for accident year 2017.",
        "solution": "Accurate pricing need not change the underlying expected claims ratio, but the new mix appears to report faster. Older, higher development factors understate used-up premium, overstate the Cape Cod expected claims ratio and unreported percentage, and therefore overstate 2017 ultimate claims.",
        "insight": "Address changed reporting patterns and the direction of bias, even when both classes are priced accurately."
      }
    ]
  },
  {
    "id": "fall-2018-19",
    "number": 19,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-7",
      "reserving-8",
      "reserving-10",
      "reserving-15"
    ],
    "points": 1.5,
    "questionPage": 22,
    "solutionPages": [
      74,
      75,
      76
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "One year ago, an automobile insurer implemented a mobile claims reporting platform. The company anticipated that this would lead to shorter reporting patterns."
      },
      {
        "type": "line",
        "text": "Since the mobile platform was implemented, the company has identified a shift in mix of business towards younger drivers, with younger drivers having a higher loss cost than older drivers."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Evaluate the effect on the IBNR estimated using each of the following techniques if no adjustments are made: i. Development Technique ii. Expected Claims Technique iii. Cape Cod Technique",
        "solution": "(i) Development: old factors are too high for the faster reporting pattern, so IBNR is overstated; higher reported loss from younger drivers amplifies the dollar effect. (ii) Expected claims: if each class is priced adequately, its premium reflects its loss cost, so the expected claims ratio remains appropriate and reporting speed does not bias the method. If younger drivers are underpriced, the mix shift can understate expected claims and IBNR. (iii) Cape Cod: excessive development factors understate used-up premium and inflate the estimated claims ratio and unreported proportion, overstating IBNR, generally less than the development technique.",
        "insight": "Address both reporting speed and business mix for all three techniques. State the premium-adequacy assumption for the expected claims technique."
      }
    ]
  },
  {
    "id": "fall-2018-20",
    "number": 20,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-6",
      "reserving-13"
    ],
    "points": 2.25,
    "questionPage": 23,
    "solutionPages": [
      77,
      78,
      79,
      80,
      81
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data as of December 31, 2017:"
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
            "2014",
            "50,400",
            "51,150",
            "35,100",
            "9,600"
          ],
          [
            "2015",
            "45,900",
            "64,500",
            "36,000",
            ""
          ],
          [
            "2016",
            "60,300",
            "68,400",
            "",
            ""
          ],
          [
            "2017",
            "62,100",
            "",
            "",
            ""
          ]
        ]
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
            "2014",
            "10,800",
            "21,600",
            "129,600",
            "276,000"
          ],
          [
            "2015",
            "9,800",
            "19,000",
            "125,000",
            ""
          ],
          [
            "2016",
            "10,350",
            "20,000",
            "",
            ""
          ],
          [
            "2017",
            "10,500",
            "",
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
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "360",
            "465",
            "270",
            "80"
          ],
          [
            "2015",
            "340",
            "430",
            "250",
            ""
          ],
          [
            "2016",
            "335",
            "450",
            "",
            ""
          ],
          [
            "2017",
            "345",
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
          "Value",
          "Item"
        ],
        "rows": [
          [
            "7.5%",
            "Selected annual severity trend"
          ],
          [
            "1.05",
            "48 to ultimate reported claim development factor"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Evaluate whether there has been a change in the adequacy of case outstanding over the experience period.",
        "solution": "Average case outstanding ($000) by development age: 2014 = 140, 110, 130, 120; 2015 = 135, 150, 144; 2016 = 180, 152; 2017 = 180. Changes down several columns differ from the 7.5% severity trend and generally indicate strengthening case adequacy.",
        "insight": "Examine multiple ages and compare changes with severity trend; a single age is insufficient."
      },
      {
        "id": "b",
        "points": 1.25,
        "prompt": "Estimate the ultimate claims for accident year 2017 using the Berquist-Sherman adjustment.",
        "solution": "Restate each age's prior average case outstanding from the latest diagonal using 7.5% annual severity trend, multiply by historical open counts, then add paid claims. Adjusted reported claims ($000) are approximately: 2014 = 62,961, 82,762, 165,767, 285,600; 2015 = 62,758, 79,800, 161,000; 2016 = 66,443, 88,400; 2017 = 72,600. Select factors about 1.305, 2.0105, 1.723 and 1.05. Ultimate 2017 = 72,600 × 1.305 × 2.0105 × 1.723 × 1.05 ≈ 344,608 ($000).",
        "insight": "Restate to the latest diagonal's adequacy level, detrend historical average case amounts correctly, and include the 1.05 tail."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly explain the effect of the Berquist-Sherman adjustment in part b. above when compared to the result using unadjusted data.",
        "solution": "The adjusted estimate is lower: applying historical unadjusted factors to strengthened current reported claims would overstate ultimate claims.",
        "insight": "Compare the direction of the adjusted result with the unadjusted result."
      },
      {
        "id": "d",
        "points": 0.25,
        "prompt": "Briefly describe a potential limitation to the Berquist-Sherman adjustment in part b. above.",
        "solution": "The result is highly sensitive to the judgmental severity trend selection; a wrong trend can materially distort the reserve estimate.",
        "insight": "Describe a limitation of the adjustment, not just a situation where it is unsuitable."
      }
    ]
  },
  {
    "id": "fall-2018-21",
    "number": 21,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-14"
    ],
    "points": 1.5,
    "questionPage": 24,
    "solutionPages": [
      82,
      83
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Cumulative Received Salvage and Subrogation (S&S) ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "4,700",
            "7,000",
            "7,200",
            "7,300"
          ],
          [
            "2015",
            "4,300",
            "6,600",
            "6,800",
            ""
          ],
          [
            "2016",
            "4,300",
            "6,800",
            "",
            ""
          ],
          [
            "2017",
            "4,900",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims Gross of S&S ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2014",
            "13,500",
            "16,800",
            "16,800",
            "16,800"
          ],
          [
            "2015",
            "13,300",
            "16,900",
            "16,900",
            ""
          ],
          [
            "2016",
            "13,200",
            "16,800",
            "",
            ""
          ],
          [
            "2017",
            "12,900",
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
          "Selected Ultimate Claims Gross of S&S ($000)"
        ],
        "rows": [
          [
            "2014",
            "16,800"
          ],
          [
            "2015",
            "16,900"
          ],
          [
            "2016",
            "16,800"
          ],
          [
            "2017",
            "16,400"
          ]
        ]
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
        "prompt": "Estimate ultimate salvage and subrogation for accident year 2017 using a ratio approach.",
        "solution": "Form cumulative S&S / cumulative paid gross claims ratios at each age. Select approximate multiplicative ratio-development factors 1.217, 1.0285 and 1.014, with no tail. Ultimate ratios for 2014–2016 are about .435, .408 and .4224; their average is about .4218. Treat the higher developed 2017 ratio (about .4823) as random fluctuation and select .4218. Ultimate 2017 S&S = .4218 × 16,400 = 6,917.52 ($000). Retaining the higher 2017 ratio with a justified trend selection was also accepted.",
        "insight": "Develop S&S-to-paid ratios, consider earlier years' ultimate ratios, and justify the final selection. Do not use ultimate claims as the denominator of the historical ratios."
      }
    ]
  },
  {
    "id": "fall-2018-22",
    "number": 22,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-11",
      "reserving-17"
    ],
    "points": 1.75,
    "questionPage": 25,
    "solutionPages": [
      84,
      85,
      86
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Paid Claims ($)",
          "Paid ULAE ($)"
        ],
        "rows": [
          [
            "2014",
            "21,300",
            "1,030"
          ],
          [
            "2015",
            "20,900",
            "1,040"
          ],
          [
            "2016",
            "20,800",
            "1,040"
          ],
          [
            "2017",
            "21,200",
            "1,090"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Paid Claims ($)",
          "Reported Claim Counts",
          "Closed Claim Counts",
          "Ultimate Claim Counts",
          "Ultimate Claims ($)"
        ],
        "rows": [
          [
            "2014",
            "20,800",
            "335",
            "335",
            "335",
            "20,800"
          ],
          [
            "2015",
            "18,000",
            "300",
            "270",
            "330",
            "21,400"
          ],
          [
            "2016",
            "12,000",
            "275",
            "190",
            "330",
            "21,500"
          ],
          [
            "2017",
            "5,000",
            "200",
            "80",
            "335",
            "21,800"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Value",
          "Item"
        ],
        "rows": [
          [
            "60%",
            "Percent of unallocated work that occurs when a claim is opened"
          ],
          [
            "40%",
            "Percent of unallocated work that occurs when a claim is closed"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Claims are fully settled and paid by 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Estimate the provision for claims incurred but not yet reported (IBNYR) for all accident years as of December 31, 2017.",
        "solution": "Use average severity on unsettled claims: (ultimate claims − paid claims)/(ultimate count − closed count), multiplied by ultimate count − reported count. IBNYR: 2014 = $0; 2015 = (21,400 − 18,000)/(330 − 270) × 30 = $1,700; 2016 = 9,500/140 × 55 ≈ $3,732; 2017 = 16,800/255 × 135 ≈ $8,894. Total ≈ $14,326.",
        "insight": "Estimate unreported claim dollars, not just counts or total unpaid claims. Other reasonable severity assumptions were accepted."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Estimate unpaid ULAE as of December 31, 2017.",
        "solution": "Select a 5% ULAE-to-paid-claims ratio from the calendar-year experience. Total unpaid claims = 3,400 + 9,500 + 16,800 = $29,700. Using part a, case outstanding plus IBNER ≈ 29,700 − 14,326 = $15,374. Unpaid ULAE = .05 × [14,326 + .40 × 15,374] ≈ $1,024.",
        "insight": "Apply 100% of ULAE effort to IBNYR and 40% to other unpaid claims; avoid double counting IBNYR."
      }
    ]
  },
  {
    "id": "fall-2018-23",
    "number": 23,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-16"
    ],
    "points": 2.25,
    "questionPage": 26,
    "solutionPages": [
      87,
      88
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims Only ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2014",
            "172,000",
            "464,400",
            "626,900"
          ],
          [
            "2015",
            "168,000",
            "453,600",
            ""
          ],
          [
            "2016",
            "170,000",
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
          "Calendar Year 2017 Paid Claims Only ($)"
        ],
        "rows": [
          [
            "2014",
            "75,200"
          ],
          [
            "2015",
            "158,800"
          ],
          [
            "2016",
            "289,000"
          ],
          [
            "2017",
            "172,000"
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
          "48"
        ],
        "rows": [
          [
            "2014",
            "5,500",
            "27,000",
            "40,000",
            "55,000"
          ],
          [
            "2015",
            "5,600",
            "26,000",
            "39,000",
            ""
          ],
          [
            "2016",
            "5,700",
            "26,000",
            "",
            ""
          ],
          [
            "2017",
            "5,600",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There is no development beyond 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.25,
        "prompt": "Calculate the last diagonal of the Cumulative Paid Claims Only triangle as of December 31, 2017.",
        "solution": "The new diagonal is 2014: 626,900 + 75,200 = $702,100; 2015: 453,600 + 158,800 = $612,400; 2016: 170,000 + 289,000 = $459,000; 2017: $172,000.",
        "insight": "Add each calendar-year payment to its matching accident year's prior diagonal."
      },
      {
        "id": "b",
        "points": 1.75,
        "prompt": "Estimate ultimate ALAE for Accident Year 2017 using an additive ratio approach.",
        "solution": "Construct paid ALAE / paid claims ratios. Approximate selected additive age-to-age changes are .024, .007 and .014; their sum is .045. The 2017 ultimate ratio is .033 + .045 = .078. Paid-claim factors are about 2.70, 1.35 and 1.12, yielding ultimate claims 172,000 × 2.70 × 1.35 × 1.12 = $702,172.80. Ultimate ALAE = 702,172.80 × .078 = $54,769.48.",
        "insight": "Use additive changes for the ALAE ratio and apply the ultimate ratio to ultimate claims, not current paid claims."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Identify one disadvantage of using a ratio technique to estimate ALAE.",
        "solution": "An incorrect ultimate claims estimate propagates into the ALAE estimate because the latter is a ratio of claims.",
        "insight": "Identify a disadvantage of the ratio method."
      }
    ]
  },
  {
    "id": "fall-2018-24",
    "number": 24,
    "exam": "Fall 2018",
    "chapterIds": [
      "reserving-7",
      "reserving-15"
    ],
    "points": 3.5,
    "questionPage": 27,
    "solutionPages": [
      89,
      90,
      91,
      92
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following information is available for an insurance company:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Age (Month)",
          "Cumulative Paid Development Factors to Ultimate",
          "Cumulative Reported Development Factors to Ultimate"
        ],
        "rows": [
          [
            "12",
            "2.44",
            "1.69"
          ],
          [
            "15",
            "2",
            "1.46"
          ],
          [
            "18",
            "1.65",
            "1.38"
          ],
          [
            "21",
            "1.49",
            "1.3"
          ],
          [
            "24",
            "1.38",
            "1.22"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Accident year 2017 as of March 31, 2018:",
        "headers": [
          "Value",
          "Item"
        ],
        "rows": [
          [
            "2400",
            "Reported claims ($)"
          ],
          [
            "1820",
            "Paid claims ($)"
          ],
          [
            "3300",
            "Selected ultimate claims ($)"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Accident year 2017 as of May 31, 2018:",
        "headers": [
          "Value",
          "Item"
        ],
        "rows": [
          [
            "2750",
            "Reported claims ($)"
          ],
          [
            "2050",
            "Paid claims ($)"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Loss emergence between evaluation points is linear."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Considering the data through March 31, 2018, compare the cumulative expected reported claims to the actual reported claims as of May 31, 2018 for accident year 2017.",
        "solution": "At 15 months the reported proportion is 1/1.46 = .68493; at 18 months it is 1/1.38 = .72464. Interpolate to 17 months: .68493 + (2/3)(.72464 − .68493) = .71139. Expected incremental reported = (3,300 − 2,400) × (.71139 − .68493)/(1 − .68493) ≈ $75.61. Expected cumulative ≈ $2,475.61; actual $2,750 is about $274 higher. The report gives $2,475.66 using rounded proportions.",
        "insight": "Interpolate percentages, not development factors; apply emergence to unreported claims and then add reported-to-date."
      },
      {
        "id": "b",
        "points": 1.25,
        "prompt": "Considering the data through March 31, 2018, compare the cumulative expected paid claims to the actual paid claims as of May 31, 2018 for accident year 2017.",
        "solution": "At 15 months the paid proportion is .50; at 18 months it is 1/1.65 = .60606. At 17 months it is .50 + (2/3)(.60606 − .50) = .570707. Expected incremental paid = (3,300 − 1,820) × (.570707 − .50)/.50 = $209.29. Expected cumulative = $2,029.29; actual $2,050 is only $20.71 higher.",
        "insight": "Use the unpaid amount and compare cumulative amounts after interpolation."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Describe a situation in which the actuary would revise the March 31, 2018 estimate of ultimate claims given the results calculated in parts a. and b. above.",
        "solution": "Increase the ultimate if the higher reported amount comes from a large unpaid claim expected to develop beyond the current IBNR provision.",
        "insight": "Identify a change in ultimate cost, rather than a change only in reporting or settlement timing."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Describe a situation in which the actuary would not revise the March 31, 2018 estimate of ultimate claims given the results calculated in parts a. and b. above.",
        "solution": "Do not revise the ultimate if the excess reported emergence comes from stronger case reserves while paid emergence remains close to expected. This changes the reported pattern without necessarily changing ultimate cost.",
        "insight": "An organizational timing or adequacy change can explain the discrepancy; an actual large loss would still affect this accident year's ultimate."
      }
    ]
  }
];

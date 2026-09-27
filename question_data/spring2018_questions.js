// Regular Spring 2018 CBT exam; rebuild with scripts/build_spring2018.py.
window.SPRING_2018_QUESTIONS = [
  {
    "id": "spring-2018-1",
    "number": 1,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-4"
    ],
    "points": 1.5,
    "solutionPages": [
      3,
      4
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following for an insurance company:"
      },
      {
        "type": "line",
        "text": "• The exposure base is number of occupants in the home per year."
      },
      {
        "type": "line",
        "text": "• The company writes a one-year homeowners policy effective April 1, 2017 for a home with four occupants."
      },
      {
        "type": "line",
        "text": "• On October 1, 2017, two occupants leave the home, and the home has only two occupants for the remainder of the policy term."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.25,
        "prompt": "Calculate the total written exposures for calendar year 2017.",
        "solution": "Written exposures in 2017 are 4 at issue, less 2 occupants for the remaining half-year: 4 - 2 × 0.5 = 3 occupant-years.",
        "insight": "Reflect the October endorsement; counting only the original four occupants overstates written exposure."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Calculate the total earned exposures for calendar year 2017.",
        "solution": "Earned exposures in 2017 are 4 × 6/12 from April through September plus 2 × 3/12 from October through December = 2.5 occupant-years.",
        "insight": "Earn only the portion of each exposure that falls in calendar year 2017."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Calculate the total policy year 2017 written exposures evaluated as of September 30, 2017.",
        "solution": "At September 30, 2017, the October change has not occurred. Policy year 2017 written exposure is 4 occupant-years.",
        "insight": "Use the policy-year valuation date rather than the later year-end information."
      },
      {
        "id": "d",
        "points": 0.75,
        "prompt": "Briefly evaluate the number of occupants based on the three criteria of an exposure base.",
        "solution": "Proportionality: occupant count may track household liability exposure, but home-property damage may depend more on the building. Practicality: count is definable but changes must be collected and verified. Historical precedence: switching from house-years would disrupt systems, create premium changes, and reduce comparability with prior and industry data.",
        "insight": "Evaluate all three criteria with a reason; naming them alone is insufficient."
      }
    ]
  },
  {
    "id": "spring-2018-2",
    "number": 2,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-12"
    ],
    "points": 1.25,
    "solutionPages": [
      5
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
          "Current rate review",
          "Value"
        ],
        "rows": [
          [
            "Number of Observations",
            "100"
          ],
          [
            "Indicated Average Premium before credibility",
            "$750"
          ],
          [
            "Expected Value of Process Variance",
            "7.5"
          ],
          [
            "Variance of Hypothetical Means",
            "0.45"
          ],
          [
            "Annual Loss Trend",
            "3%"
          ],
          [
            "Target Effective Date",
            "July 1, 2018"
          ],
          [
            "Current Average Premium at Present Rates",
            "$600"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Prior rate review",
          "Value"
        ],
        "rows": [
          [
            "Indicated Rate Change",
            "20%"
          ],
          [
            "Implemented Rate Change",
            "9%"
          ],
          [
            "Effective Date of Indication",
            "July 1, 2016"
          ],
          [
            "Actual Effective Date",
            "September 1, 2016"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The complement of credibility is trended present rates."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Calculate the credibility-weighted indicated premium using Buhlmann credibility.",
        "solution": "Bühlmann K = EPV/VHM = 7.5/0.45 = 16.667 and Z = 100/(100 + K) = 0.8571. Trended present-rate complement = $600 × (1.20/1.09) × 1.03² = $700.78. Credibility-weighted indicated premium = 0.8571 × $750 + 0.1429 × $700.78 = $742.97.",
        "insight": "Account for the unimplemented portion of the prior indication and the two-year trend period."
      }
    ]
  },
  {
    "id": "spring-2018-3",
    "number": 3,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 1.5,
    "solutionPages": [
      6
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company expanded its product offering into a new state last year."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Briefly discuss an advantage and disadvantage of using the following data to determine loss trend for this state: i. Competitor filings ii. Internal company data",
        "solution": "Competitor filings offer more years of state experience but can reflect a different risk and coverage mix. Internal data matches the company's own business but one year in the new state is thin and volatile; data from its other states may have different loss behavior.",
        "insight": "Discuss a concrete advantage and disadvantage for both sources, including credibility and comparability."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Explain the loss development and trending overlap fallacy.",
        "solution": "The overlap fallacy says loss development and trend duplicate one another. They do not: development estimates later emergence on claims from an accident period, while trend moves the expected cost level to a future period. Both adjustments can be needed.",
        "insight": "Explicitly reject overlap and describe what each adjustment measures."
      }
    ]
  },
  {
    "id": "spring-2018-4",
    "number": 4,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-12"
    ],
    "points": 1.75,
    "solutionPages": [
      7,
      8
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary uses classical credibility to develop full credibility standards for a private passenger auto indication."
      },
      {
        "type": "line",
        "text": "Given the following information for State A:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Coverage",
          "2015 exposures",
          "2016 exposures",
          "2017 exposures",
          "2015 claims",
          "2016 claims",
          "2017 claims"
        ],
        "rows": [
          [
            "Bodily Injury",
            "20,000",
            "24,000",
            "22,000",
            "1,020",
            "1,100",
            "950"
          ],
          [
            "Collision",
            "18,000",
            "21,000",
            "19,000",
            "1,700",
            "2,100",
            "1,975"
          ]
        ]
      },
      {
        "type": "line",
        "text": "1,082 Claim counts standard for full credibility"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate the number of exposures needed for full credibility for each coverage.",
        "solution": "Select pooled frequency by coverage. Bodily injury: (1,020 + 1,100 + 950)/(20,000 + 24,000 + 22,000) = 0.04652; full-credibility exposure standard = 1,082/0.04652 ≈ 23,261. Collision: 5,775/58,000 = 0.09957; standard ≈ 10,867 exposures.",
        "insight": "Calculate separate expected frequencies for the two coverages before converting the claim standard."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly explain why an actuary may prefer using an exposure standard for full credibility over a claim standard.",
        "solution": "Exposures may be more stable and available earlier than claim counts, so an exposure standard can be used to assess credibility before claims have fully emerged.",
        "insight": "Simply observing that exposures outnumber claims is not an advantage; their full-credibility standards differ too."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe one advantage and one disadvantage of using classical credibility.",
        "solution": "Advantage: classical credibility has a simple, transparent full-credibility standard. Disadvantage: its Poisson-frequency and constant-severity assumptions can miss overdispersion or heterogeneous losses.",
        "insight": "Give properties specific to classical credibility, not generic benefits of averaging."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Propose a complement of credibility for the indication analysis and briefly evaluate the proposed complement.",
        "solution": "Use a state-wide indication as the complement. It has more volume and may be stable, but its mix and loss level may differ from the specific coverage or segment being priced, so adjust for those differences.",
        "insight": "A proposed complement needs both a credibility rationale and a comparability limitation."
      }
    ]
  },
  {
    "id": "spring-2018-5",
    "number": 5,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 2.0,
    "solutionPages": [
      9
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following loss data for a property insurer:"
      },
      {
        "type": "table",
        "title": "Fire",
        "headers": [
          "Accident year",
          "Loss size",
          "Claim counts",
          "Ground-up losses ($)"
        ],
        "rows": [
          [
            "2014",
            "0-$500,000",
            "800",
            "80,000,000"
          ],
          [
            "",
            "> $500,000",
            "20",
            "12,000,000"
          ],
          [
            "2015",
            "0-$500,000",
            "780",
            "81,900,000"
          ],
          [
            "",
            "> $500,000",
            "10",
            "6,300,000"
          ],
          [
            "2016",
            "0-$500,000",
            "750",
            "82,687,500"
          ],
          [
            "",
            "> $500,000",
            "25",
            "13,891,500"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Flood",
        "headers": [
          "Accident year",
          "Loss size",
          "Claim counts",
          "Ground-up losses ($)"
        ],
        "rows": [
          [
            "2014",
            "0-$500,000",
            "50",
            "2,500,000"
          ],
          [
            "",
            "> $500,000",
            "30",
            "16,500,000"
          ],
          [
            "2015",
            "0-$500,000",
            "",
            ""
          ],
          [
            "",
            "> $500,000",
            "",
            ""
          ],
          [
            "2016",
            "0-$500,000",
            "",
            ""
          ],
          [
            "",
            "> $500,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Other",
        "headers": [
          "Accident year",
          "Loss size",
          "Claim counts",
          "Ground-up losses ($)"
        ],
        "rows": [
          [
            "2014",
            "0-$500,000",
            "1,500",
            "15,000,000"
          ],
          [
            "",
            "> $500,000",
            "",
            ""
          ],
          [
            "2015",
            "0-$500,000",
            "1,450",
            "15,225,000"
          ],
          [
            "",
            "> $500,000",
            "5",
            "4,020,000"
          ],
          [
            "2016",
            "0-$500,000",
            "1,550",
            "17,088,750"
          ],
          [
            "",
            "> $500,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "$500,000 Excess loss threshold used by the insurer for individual reported losses"
      },
      {
        "type": "line",
        "text": "The insurer's claims information relating to all major events that occurred in the past 3 years are:"
      },
      {
        "type": "line",
        "text": "• The definition of catastrophe losses is $25 million in losses across the industry."
      },
      {
        "type": "line",
        "text": "• All flood claims were caused by a single flood event that occurred in 2014, causing $500 million direct insured losses in the industry."
      },
      {
        "type": "line",
        "text": "• In 2016, one fire claim occurred for the insurer as the result of a forest fire, causing $25 million direct insured losses in the industry."
      },
      {
        "type": "line",
        "text": "• Ground-up loss of this fire claim is $1,000,000."
      },
      {
        "type": "line",
        "text": "• There is no further development on losses."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the excess loss factor.",
        "solution": "For a non-catastrophe selection, exclude the 2014 flood and the $1 million 2016 forest-fire claim. Losses limited to $500,000 total $336.40125 million; excess above $500,000 totals $7.2115 million. Excess loss factor = 1 + 7.2115/336.40125 = 1.02144. Including catastrophes with a consistent treatment was also accepted.",
        "insight": "Split each ground-up claim above $500,000 into a $500,000 limited portion and an excess portion; report a factor, not an excess ratio."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Describe one reason to use an excess loss factor when setting property insurance rates.",
        "solution": "Large claims and catastrophes make annual results volatile. Cap experience at the threshold and add a longer-term expected excess load to smooth rate indications.",
        "insight": "The factor addresses volatility in ratemaking, not missing or censored data."
      }
    ]
  },
  {
    "id": "spring-2018-6",
    "number": 6,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-16",
      "reserving-7"
    ],
    "points": 1.75,
    "solutionPages": [
      10
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for a medical association:"
      },
      {
        "type": "table",
        "title": "Cumulative reported claim counts (months)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48",
          "60",
          "72"
        ],
        "rows": [
          [
            "2010",
            "26",
            "52",
            "71",
            "80",
            "85",
            "89"
          ],
          [
            "2011",
            "37",
            "54",
            "70",
            "82",
            "84",
            "85"
          ],
          [
            "2012",
            "44",
            "81",
            "85",
            "100",
            "110",
            "112"
          ],
          [
            "2013",
            "19",
            "44",
            "59",
            "67",
            "70",
            ""
          ],
          [
            "2014",
            "15",
            "44",
            "72",
            "83",
            "",
            ""
          ],
          [
            "2015",
            "38",
            "59",
            "77",
            "",
            "",
            ""
          ],
          [
            "2016",
            "33",
            "65",
            "",
            "",
            "",
            ""
          ],
          [
            "2017",
            "30",
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
        "title": "",
        "headers": [
          "Claims-made year",
          "Step factor"
        ],
        "rows": [
          [
            "First",
            "30%"
          ],
          [
            "Second",
            "60%"
          ],
          [
            "Third",
            "80%"
          ],
          [
            "Fourth",
            "90%"
          ],
          [
            "Fifth",
            "95%"
          ],
          [
            "Six and more",
            "100%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The medical association had claims-made policy coverages up until December 31, 2014."
      },
      {
        "type": "line",
        "text": "• The claims-made policies have a retroactive date of January 1, 2010."
      },
      {
        "type": "line",
        "text": "• The medical association switches to occurrence policies on January 1, 2015."
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• All policies incept January 1."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.25,
        "prompt": "Calculate the total reported claim counts covered under claims-made policies.",
        "solution": "By December 31, 2014, claims-made coverage includes accident years 2010–2014 reported by then: 85 + 82 + 85 + 44 + 15 = 311 claims.",
        "insight": "Read the cumulative triangle at the 2014 calendar-year diagonal and respect the 2010 retroactive date."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Calculate the total reported claim counts covered under occurrence policies.",
        "solution": "Occurrence coverage beginning January 1, 2015 covers accident years 2015–2017 regardless of report date. Reported counts to date are 77 + 65 + 30 = 172.",
        "insight": "Use occurrence year, not claims-made reporting year, for the new coverage."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "Briefly describe the coverage gap and calculate the estimated number of ultimate claims falling in the gap for the medical association.",
        "solution": "The gap is claims occurring in 2010–2014 but reported after the claims-made policy ends. Develop latest 2017 counts using the step factors: 89 + 85 + 112 + 70/0.95 + 83/0.90 ≈ 451.91 ultimate old-year claims. Subtract 311 covered by 2014: about 141 claims fall in the gap.",
        "insight": "Develop the latest cumulative count for immature years, then subtract old-year claims reported before the switch."
      },
      {
        "id": "d",
        "points": 0.25,
        "prompt": "Briefly describe a solution for the medical association to address the coverage gap in part c. above.",
        "solution": "Buy an extended reporting period endorsement (tail coverage) on the claims-made policy to cover later reports of events during its covered years.",
        "insight": "Name the specific coverage mechanism; a vague 'gap endorsement' is insufficient."
      }
    ]
  },
  {
    "id": "spring-2018-7",
    "number": 7,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 1.75,
    "solutionPages": [
      11
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "Underwriting profit provision 5%"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Expense",
          "Amount ($000)",
          "% fixed"
        ],
        "rows": [
          [
            "Countrywide General Expenses",
            "3,648",
            "75%"
          ],
          [
            "Countrywide Other Acquisition Expenses",
            "4,368",
            "75%"
          ],
          [
            "State Tax, Licenses & Fees",
            "315",
            "25%"
          ],
          [
            "State Commission & Brokerage",
            "1,868",
            "0%"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Measure",
          "Countrywide",
          "State"
        ],
        "rows": [
          [
            "Earned Premium ($000)",
            "80,948",
            "18,036"
          ],
          [
            "Written Premium ($000)",
            "82,583",
            "18,498"
          ],
          [
            "Earned Exposures",
            "84,115",
            "19,712"
          ],
          [
            "Written Exposures",
            "87,476",
            "20,217"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Calculate the fixed expense fee per exposure.",
        "solution": "Fixed cost per exposure is 1,000 × [0.75(3,648)/84,115 + 0.75(4,368)/87,476 + 0.25(315)/20,217] = $73.87. The variable expense ratio is 0.25(3,648)/80,948 + 0.25(4,368)/82,583 + 0.75(315)/18,498 + 1,868/18,498 = 13.82%. Fee = $73.87/(1 - 0.1382 - 0.05) ≈ $91.00 per exposure.",
        "insight": "Use the correct written/earned and state/countrywide base for each expense, then gross up for variable expense and profit."
      }
    ]
  },
  {
    "id": "spring-2018-8",
    "number": 8,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-8",
      "reserving-10"
    ],
    "points": 6.5,
    "solutionPages": [
      12
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Cumulative reported loss + ALAE ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2015",
            "1,000",
            "1,167.5",
            "1,250"
          ],
          [
            "2016",
            "1,100",
            "1,285",
            ""
          ],
          [
            "2017",
            "1,050",
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
          "Earned premium ($000)"
        ],
        "rows": [
          [
            "2015",
            "1,900"
          ],
          [
            "2016",
            "2,085"
          ],
          [
            "2017",
            "2,100"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Assumption",
          "Value"
        ],
        "rows": [
          [
            "Annual loss and ALAE trend",
            "2%"
          ],
          [
            "Annual premium trend",
            "3%"
          ],
          [
            "Fixed Expense Ratio",
            "10%"
          ],
          [
            "Variable Expense Ratio",
            "30%"
          ],
          [
            "Profit and Contingencies Provision",
            "5%"
          ],
          [
            "ULAE Provision (as % of Loss and ALAE)",
            "7%"
          ],
          [
            "Rate change effective July 1, 2016 (only rate change in the past three years)",
            "4%"
          ],
          [
            "36 to ultimate reported claim development factor",
            "1.067"
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
        "text": "• Rates will be in effect for one year."
      },
      {
        "type": "line",
        "text": "• The historical experience is fully credible."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 4.25,
        "prompt": "Calculate the ultimate losses and ALAE for each accident year using the Cape Cod technique incorporating rate change and trend.",
        "solution": "Select reported 12–24 = 2,452.5/2,100 = 1.16786, 24–36 = 1,250/1,167.5 = 1.07066, and 36–ultimate = 1.067; age-to-ultimate factors are 1.067, 1.14240, and 1.33416 for 2015–2017. On-level earned premiums are approximately 1,976, 2,157.61, and 2,110.14 ($000), using 0%, 12.5%, and 87.5% at the new rate. Trend losses and premium to a common 2017 level; trended reported losses divided by used-up trended premium gives a Cape Cod ratio near 66.67%. De-trend that ratio for each year and add expected unreported losses to actual reported losses. One consistent selection gives ultimates about 1,334, 1,466, and 1,402 ($000).",
        "insight": "On-level premium and trend both sides consistently; use reported rather than developed losses in the Cape Cod ratio, and do not add trended reported losses to historical ultimates."
      },
      {
        "id": "b",
        "points": 2.25,
        "prompt": "Calculate the indicated rate change for policies effective January 1, 2019 using the latest three accident years of experience.",
        "solution": "Trend the three historical ultimates and on-level premiums to the January 2019 policy-effective cohort's average earned date, January 2020. With 2% loss and 3% premium trend, trended totals are about 4,504 and 6,922 ($000). Indication = [1.07 × 4,504 + 0.10 × 6,922]/[(1 - 0.30 - 0.05) × 6,922] - 1 ≈ 22.5%. Different internally consistent Cape Cod and trend selections may vary.",
        "insight": "The indication must use the ultimates from part a, future trend periods, ULAE, and fixed/variable expense and profit provisions."
      }
    ]
  },
  {
    "id": "spring-2018-9",
    "number": 9,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-13"
    ],
    "points": 1.75,
    "solutionPages": [
      13
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information for two personal automobile policies:"
      },
      {
        "type": "table",
        "title": "21-year-old driver",
        "headers": [
          "Year",
          "Age",
          "Premium ($)",
          "Loss ($)",
          "Expense ($)",
          "Renewal probability"
        ],
        "rows": [
          [
            "1",
            "21",
            "1,215",
            "1,200",
            "50",
            ""
          ],
          [
            "2",
            "22",
            "1,200",
            "1,125",
            "20",
            "75%"
          ],
          [
            "3",
            "23",
            "1,185",
            "1,050",
            "20",
            "75%"
          ],
          [
            "Total",
            "",
            "3,600",
            "3,375",
            "90",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "65-year-old driver",
        "headers": [
          "Year",
          "Age",
          "Premium ($)",
          "Loss ($)",
          "Expense ($)",
          "Renewal probability"
        ],
        "rows": [
          [
            "1",
            "65",
            "900",
            "795",
            "50",
            ""
          ],
          [
            "2",
            "66",
            "900",
            "839",
            "20",
            "95%"
          ],
          [
            "3",
            "67",
            "900",
            "859",
            "20",
            "95%"
          ],
          [
            "Total",
            "",
            "2,700",
            "2,493",
            "90",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "5% Annual discount rate"
      },
      {
        "type": "line",
        "text": "• Policies are written on January 1."
      },
      {
        "type": "line",
        "text": "• Premium is collected and the expense and losses are incurred on January 1."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Evaluate whether the 21 year-old or 65 year-old has a larger percentage return on premium over the three-year horizon.",
        "solution": "Use cumulative renewal and discount all cash flows. For age 21, weights are 1, 0.75/1.05, and 0.75²/1.05²; discounted premium ≈ $2,676.73 and profit ≈ $62.96, or 2.35%. For age 65, weights are 1, 0.95/1.05, and 0.95²/1.05²; discounted premium ≈ $2,451.02 and profit ≈ $109.29, or 4.46%. The 65-year-old has the larger percentage return.",
        "insight": "Apply renewal probability cumulatively in year three and divide discounted profit by discounted premium."
      }
    ]
  },
  {
    "id": "spring-2018-10",
    "number": 10,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2,
    "solutionPages": [
      14
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A company is considering whether to use vehicle color as a private passenger auto rating variable for bodily injury coverage."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Evaluate the use of vehicle color as a rating variable using two operational criteria.",
        "solution": "Objectivity/verifiability: vehicle color is observable, but repainting, wraps, and inconsistent color categories require clear rules and verification. Administrative cost: the insurer must collect color at application, update systems and policy changes, and audit data, which may outweigh its value.",
        "insight": "Give two distinct operational criteria and support each with a color-specific explanation."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Evaluate the use of vehicle color as a rating variable using two social criteria.",
        "solution": "Controllability: drivers can change color, but repainting may be costly, so a surcharge is not easily avoided. Social acceptability: a BI premium difference by color may seem arbitrary to insureds without an understandable link to loss risk, reducing perceived fairness.",
        "insight": "Explain the impact on insureds or society; legal and statistical criteria alone do not answer the social question."
      }
    ]
  },
  {
    "id": "spring-2018-11",
    "number": 11,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-13"
    ],
    "points": 1.5,
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
        "title": "",
        "headers": [
          "Risk",
          "True cost",
          "A risks",
          "A rate",
          "B risks",
          "B rate"
        ],
        "rows": [
          [
            "High",
            "170",
            "5,000",
            "160",
            "5,000",
            "150"
          ],
          [
            "Low",
            "130",
            "5,000",
            "140",
            "5,000",
            "150"
          ],
          [
            "Total",
            "150",
            "10,000",
            "150",
            "10,000",
            "150"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There are no underwriting expenses or profit provisions."
      },
      {
        "type": "line",
        "text": "• Market consists of 10,000 high risk insureds and 10,000 low risk insureds."
      },
      {
        "type": "line",
        "text": "• Both companies write only one line of business."
      },
      {
        "type": "line",
        "text": "• 20% of all insureds shop at renewal and base their purchasing decision on price."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the profitability for each company after one renewal cycle.",
        "solution": "Among the 20% who shop, 1,000 high-risk customers move from A ($160) to B ($150), and 1,000 low-risk customers move from B ($150) to A ($140). A now has 4,000 high and 6,000 low risks: 4,000(160-170) + 6,000(140-130) = +$20,000. B has 6,000 high and 4,000 low: 6,000(150-170) + 4,000(150-130) = -$40,000.",
        "insight": "Move shoppers by risk class and compare each company's charged rate with true expected cost."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe two possible actions for the company experiencing adverse selection to reduce the risk of insolvency.",
        "solution": "B could introduce risk-based rating that charges high risks more and low risks less as one coordinated correction. It could also tighten underwriting for high-risk submissions or use targeted risk-control measures to lower their expected loss.",
        "insight": "Give two distinct ways to improve B's loss position; expense cuts and investment income do not fit the stated assumptions."
      }
    ]
  },
  {
    "id": "spring-2018-12",
    "number": 12,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2.5,
    "solutionPages": [
      16
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
          "Class",
          "Earned exposures",
          "Reported loss + ALAE",
          "Claims",
          "Current relativity",
          "True relativity"
        ],
        "rows": [
          [
            "A",
            "15,271",
            "$864,000",
            "924",
            "1.00",
            "1.00"
          ],
          [
            "B",
            "7,250",
            "$732,000",
            "623",
            "1.10",
            "1.7255"
          ],
          [
            "C",
            "10,532",
            "$505,000",
            "185",
            "1.80",
            "0.7212"
          ]
        ]
      },
      {
        "type": "line",
        "text": "18,000 Full credibility standard for number of earned exposures"
      },
      {
        "type": "line",
        "text": "• Partial credibility is determined based on the square root rule."
      },
      {
        "type": "line",
        "text": "• Complement of credibility is equal to normalized current class relativities."
      },
      {
        "type": "line",
        "text": "• Class A remains the base class."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the indicated rate change for each class to achieve a revenue-neutral overall change.",
        "solution": "Pure premiums for A, B, C are $56.58, $100.97, and $47.95 per exposure, giving raw relativities 1.000, 1.785, and 0.847. Square-root credibility is 0.921, 0.635, and 0.765. Blend raw and current relativities to 1.000, 1.534, and 1.071, then apply a revenue-neutral off-balance factor of about 1.1201. Class rate changes are approximately +12.0% for A, +56.2% for B, and -33.3% for C.",
        "insight": "Use losses per earned exposure, normalize to A, blend with current relativities, and off-balance to preserve total premium."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly describe one possible reason why the indicated relativities do not match the true relativities.",
        "solution": "The classes may have different mixes of other rating variables. A univariate pure premium comparison then attributes those other variables' costs to this class variable, so indicated factors can differ from true factors.",
        "insight": "Identify distributional bias across other rating variables, rather than competitive or regulatory selection."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Briefly explain an adjustment to the univariate pure premium method to improve its result.",
        "solution": "For each class, divide losses by exposures adjusted for the exposure-weighted average relativity of the other rating variables before deriving this variable's relativities.",
        "insight": "Describe an adjustment to the univariate pure premium method itself."
      }
    ]
  },
  {
    "id": "spring-2018-13",
    "number": 13,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-10"
    ],
    "points": 2,
    "solutionPages": [
      17
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A company is implementing population density in its rating plan for a line of business. The company has three pieces of information."
      },
      {
        "type": "line",
        "text": "• An analysis the company performed using a generalized linear model (GLM) on internal data only."
      },
      {
        "type": "line",
        "text": "• The rating factors from a competitor's rate filing."
      },
      {
        "type": "line",
        "text": "• The rating factors from an external industry benchmark."
      },
      {
        "type": "table",
        "title": "Rating factors",
        "headers": [
          "Population density",
          "Internal GLM",
          "Competitor",
          "Industry"
        ],
        "rows": [
          [
            "Low",
            "1.5",
            "0.9",
            "0.4"
          ],
          [
            "Medium",
            "1.0",
            "1.0",
            "1.0"
          ],
          [
            "High",
            "1.3",
            "1.1",
            "1.6"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Provide a recommendation for the low and high level rating factors given the chart above and the external rating factors. Justify the recommendations considering: i. GLM diagnostics ii. Competitor iii. Industry benchmark",
        "solution": "Select a low-density factor near 0.9, relying more on the competitor (0.9) and industry (0.4) than the internal GLM (1.5): low-density exposure is sparse and the GLM error band is very wide. Select a high-density factor near 1.3: the internal GLM is more credible there, its narrower band supports a factor above 1.0, and it lies between competitor 1.1 and industry 1.6. Medium remains 1.0.",
        "insight": "Support both selections with GLM diagnostics and both external references, especially low-density credibility."
      }
    ],
    "figure": {
      "src": "assets/exam-graphs/spring-2018-q13.png",
      "title": "Population density relativities - internal GLM results",
      "alt": "Internal GLM factors for low, medium and high population density with upper and lower standard-error bounds and exposure bars. Low density has far fewer exposures and a much wider error band."
    }
  },
  {
    "id": "spring-2018-14",
    "number": 14,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 1.5,
    "solutionPages": [
      18
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information about a home:"
      },
      {
        "type": "line",
        "text": "$250,000 Home value $200,000 Insured value 90% Coinsurance requirement"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the coinsurance penalty for the following loss amounts: i. $50,000 ii. $220,000 iii. $250,000",
        "solution": "Required insurance is $250,000 × 90% = $225,000, so the coinsurance fraction is $200,000/$225,000 = 8/9. For a $50,000 loss, indemnity is $44,444.44 and penalty is $5,555.56. For $220,000, indemnity is $195,555.56 and penalty relative to the $200,000 policy limit is $4,444.44. For $250,000, indemnity is capped at $200,000 and the coinsurance penalty is $0; the remaining $50,000 is uninsured above the limit.",
        "insight": "Cap indemnity at the insured value and separate coinsurance penalty from loss above the policy limit."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe two problems with underinsurance.",
        "solution": "An insured can face a coinsurance penalty on a partial loss and can lack funds to rebuild after a large loss. For the insurer, underinsurance can make premiums inadequate because smaller losses remain covered while the insured value, on which premium is based, is too low relative to exposure.",
        "insight": "Tie both problems to the mechanics of partial losses, policy limits, or coinsurance."
      }
    ]
  },
  {
    "id": "spring-2018-15",
    "number": 15,
    "exam": "Spring 2018",
    "chapterIds": [
      "ratemaking-15"
    ],
    "points": 2.75,
    "solutionPages": [
      19
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following for a workers compensation policyholder:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Policy year",
          "Primary losses ($)",
          "Excess losses ($)",
          "Payroll ($)"
        ],
        "rows": [
          [
            "2015",
            "10,000",
            "120,000",
            "2,000,000"
          ],
          [
            "2016",
            "10,000",
            "80,000",
            "2,100,000"
          ],
          [
            "2017",
            "10,000",
            "60,000",
            "2,205,000"
          ],
          [
            "Total",
            "30,000",
            "260,000",
            "6,305,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Assumption",
          "Value"
        ],
        "rows": [
          [
            "Expected loss rate per $100 of payroll",
            "3.25"
          ],
          [
            "D-Ratio",
            "0.20"
          ],
          [
            "Ballast value",
            "40,000"
          ],
          [
            "Weighting value",
            "0.30"
          ],
          [
            "Minimum retrospective premium ratio",
            "0.70"
          ],
          [
            "Maximum retrospective premium ratio",
            "1.30"
          ],
          [
            "Loss conversion factor",
            "1.10"
          ],
          [
            "Per accident loss limitation",
            "100,000"
          ],
          [
            "Expense allowance (excludes tax multiplier)",
            "0.25"
          ],
          [
            "Expected loss ratio",
            "0.70"
          ],
          [
            "Tax multiplier",
            "1.05"
          ],
          [
            "Standard premium",
            "800,000"
          ],
          [
            "Insurance charge for maximum premium",
            "0.40"
          ],
          [
            "Insurance savings for minimum premium",
            "0.05"
          ],
          [
            "Limited reported losses",
            "200,000"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Calculate the experience rating modification factor.",
        "solution": "Expected losses = $6,305,000/$100 × 3.25 = $204,912.50; expected primary and excess are $40,982.50 and $163,930. With actual primary $30,000, actual excess $260,000, ballast $40,000, and weight 0.30, mod = (30,000 + 40,000 + 0.30×260,000)/(40,982.50 + 40,000 + 0.30×163,930) ≈ 1.137.",
        "insight": "Use payroll and the expected loss rate to split expected primary and excess; do not use the expected loss ratio here."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Calculate the retrospective premium.",
        "solution": "Basic premium = $800,000 × [0.25 - 0.70(1.10 - 1) + (0.40 - 0.05)×0.70×1.10] = $359,600. Converted limited losses = $200,000×1.10 = $220,000. Preliminary retrospective premium = ($359,600 + $220,000)×1.05 = $608,580; this is between the $560,000 minimum and $1,040,000 maximum, so final premium is $608,580.",
        "insight": "Use the supplied limited losses, calculate basic premium with the net insurance charge and LCF adjustment, then check the minimum and maximum."
      }
    ]
  },
  {
    "id": "spring-2018-16",
    "number": 16,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-1"
    ],
    "points": 1.5,
    "solutionPages": [
      20
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following transactional data:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Claim ID",
          "Accident date",
          "Transaction date",
          "Paid ($)",
          "Ending case ($)"
        ],
        "rows": [
          [
            "A",
            "October 31, 2014",
            "February 1, 2015",
            "200",
            "300"
          ],
          [
            "",
            "",
            "July 31, 2015",
            "300",
            "0"
          ],
          [
            "B",
            "April 28, 2015",
            "July 1, 2015",
            "0",
            "1000"
          ],
          [
            "",
            "",
            "October 15, 2015",
            "500",
            "500"
          ],
          [
            "",
            "",
            "August 28, 2016",
            "500",
            "200"
          ],
          [
            "C",
            "June 1, 2015",
            "July 7, 2015",
            "100",
            "650"
          ],
          [
            "",
            "",
            "January 15, 2016",
            "250",
            "400"
          ],
          [
            "",
            "",
            "May 15, 2017",
            "300",
            "0"
          ],
          [
            "D",
            "September 24, 2015",
            "March 1, 2016",
            "0",
            "325"
          ],
          [
            "",
            "",
            "December 19, 2017",
            "375",
            "250"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate accident year 2015 paid claims as of: i. 12 months ii. 24 months iii. 36 months",
        "solution": "Accident year 2015 cumulative paid claims at 12, 24, and 36 months (December 31 of 2015, 2016, and 2017) are $600, $1,350, and $2,025. Exclude claim A, whose accident occurred in 2014.",
        "insight": "Development ages run from the accident year's December 31, not each claim's accident date."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Calculate accident year 2015 reported claims as of: i. 12 months ii. 24 months iii. 36 months",
        "solution": "Cumulative reported = cumulative paid plus ending case outstanding. At 12 months: B $1,000 + C $750 = $1,750. At 24 months: B $1,200 + C $750 + D $325 = $2,275. At 36 months: B $1,200 + C $650 + D $625 = $2,475.",
        "insight": "Carry forward claim B's $200 case reserve at 36 months even without a 2017 transaction."
      }
    ]
  },
  {
    "id": "spring-2018-17",
    "number": 17,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-9"
    ],
    "points": 2.0,
    "solutionPages": [
      21
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following:"
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
            "4,850",
            "6,060",
            "6,670",
            "7,000",
            "7,000"
          ],
          [
            "2014",
            "5,800",
            "7,270",
            "8,000",
            "8,400",
            ""
          ],
          [
            "2015",
            "7,600",
            "9,500",
            "10,500",
            "",
            ""
          ],
          [
            "2016",
            "9,350",
            "11,700",
            "",
            "",
            ""
          ],
          [
            "2017",
            "11,800",
            "",
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
          "Earned premium ($000)"
        ],
        "rows": [
          [
            "2013",
            "10,000"
          ],
          [
            "2014",
            "12,000"
          ],
          [
            "2015",
            "15,000"
          ],
          [
            "2016",
            "18,000"
          ],
          [
            "2017",
            "22,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There have been no rate changes."
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
        "prompt": "Calculate ultimate claim ratios for each accident year using the reported Bornheutter-Ferguson technique with a 70% expected claims ratio.",
        "solution": "Select volume-weighted reported factors about 1.2511 (12–24), 1.1025 (24–36), 1.0498 (36–48), and 1.000 (48–ultimate). BF ultimate = reported + 70%×earned premium×(1 - 1/CDF). The 2013–2017 ultimates ($000) are about 7,000, 8,400, 10,998, 13,413, and 16,564; dividing by earned premium gives ultimate claim ratios 70.0%, 70.0%, 73.3%, 74.5%, and 75.3%.",
        "insight": "Report ultimate claim ratios, not only ultimate dollars, and divide by earned premium."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Evaluate the appropriateness of using the reported Bornhuetter-Ferguson technique as applied in part a. above.",
        "solution": "The most recent ultimate ratios rise above the assumed 70% and reach about 75%. If the underlying claims ratio is deteriorating, BF's fixed 70% expected ratio understates the immature years' expected unreported claims; update that prior assumption.",
        "insight": "Base the critique on the observed rising ratios, not an unsupported claim of case-reserve changes."
      }
    ]
  },
  {
    "id": "spring-2018-18",
    "number": 18,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 2.5,
    "solutionPages": [
      22
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Cumulative reported claims ($000)",
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
            "3,002",
            "3,585",
            "3,857",
            "4,020"
          ],
          [
            "2015",
            "3,440",
            "4,107",
            "4,522",
            ""
          ],
          [
            "2016",
            "3,427",
            "4,109",
            "",
            ""
          ],
          [
            "2017",
            "Not Provided",
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
          "48"
        ],
        "rows": [
          [
            "2014",
            "940",
            "975",
            "980",
            "980"
          ],
          [
            "2015",
            "1,060",
            "1,103",
            "1,106",
            ""
          ],
          [
            "2016",
            "1,053",
            "1,095",
            "",
            ""
          ],
          [
            "2017",
            "1,085",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Claim development factors",
        "headers": [
          "Accident year",
          "12–24",
          "24–36",
          "36–48"
        ],
        "rows": [
          [
            "2014",
            "1.1942",
            "1.0759",
            "1.0423"
          ],
          [
            "2015",
            "1.1939",
            "1.101",
            ""
          ],
          [
            "2016",
            "1.199",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Count development factors",
        "headers": [
          "Accident year",
          "12–24",
          "24–36",
          "36–48"
        ],
        "rows": [
          [
            "2014",
            "1.0372",
            "1.0051",
            "1.000"
          ],
          [
            "2015",
            "1.0406",
            "1.0027",
            ""
          ],
          [
            "2016",
            "1.0399",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "5% Claim severity trend 30% Claim severity reduction due to tort reform on claims occuring on or after January 1, 2017"
      },
      {
        "type": "line",
        "text": "• The tort reform has no effect on claim reporting."
      },
      {
        "type": "line",
        "text": "• There is no claim development after 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Estimate ultimate claims for accident year 2017 using a frequency-severity technique.",
        "solution": "Develop counts separately from severity. Volume-weighted count factors are about 1.0393, 1.00385, and 1.000, giving 2017 ultimate count ≈ 1,132. Develop historical reported severity (claims divided by counts) with factors about 1.1506, 1.0843, and 1.0423. Trend the developed 2014–2016 severities at 5% to 2017 and select about $4.63 thousand, then apply the 30% tort-reform reduction. Ultimate 2017 claims ≈ 1,132×4.63×0.70 = $3.67 million.",
        "insight": "The severity development pattern must be calculated independently of reported-claim factors, then trended and reduced for tort reform."
      }
    ]
  },
  {
    "id": "spring-2018-19",
    "number": 19,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-7",
      "reserving-9",
      "reserving-15"
    ],
    "points": 2.0,
    "solutionPages": [
      23
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Briefly evaluate the appropriateness of the paid development technique and the reported Bornhuetter-Ferguson technique in the following scenarios:"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "The company pays a large shock loss early in the life of the accident year.",
        "solution": "Paid development is distorted upward by an early shock payment, since it multiplies unusually high paid-to-date. Reported BF also incorporates the shock through reported-to-date, but does not multiply it by the full reported development factor; review whether its expected-loss prior includes the shock.",
        "insight": "Discuss the specified paid development and reported BF techniques, not paid BF."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "The company has difficulty compiling an accurate history of rate changes.",
        "solution": "Paid development uses claim payments and can still be applied if rate-change history is poor. Reported BF needs a credible expected-claims prior; without reliable on-level premium, obtain an independent prior or it may be unsuitable.",
        "insight": "Unreliable rate changes affect the BF prior, not the paid development pattern directly."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "The company begins to settle claims earlier.",
        "solution": "Earlier settlements accelerate paid emergence, so unadjusted historical paid factors applied to the newer fast-paying data tend to overstate ultimate. Reported BF is less affected if reported claims and its prior are stable.",
        "insight": "Distinguish changed payment timing from reported development."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Severity trend is higher than expected.",
        "solution": "Unexpectedly high severity makes historic paid development factors applied to current paid amounts less representative and may understate ultimate. Reported BF also understates unreported claims if its expected-loss prior uses too-low severity trend; revisit that prior.",
        "insight": "Explain how higher severity affects current experience and the expected-claims assumption."
      }
    ]
  },
  {
    "id": "spring-2018-20",
    "number": 20,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-12"
    ],
    "points": 1.25,
    "solutionPages": [
      24
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "After operating in a steady-state environment for multiple years, an insurer decides to increase the strength of outstanding case reserves in 2017."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Explain how this change will impact the following techniques if no adjustments are made. i. Reported claim development technique ii. Case outstanding development technique",
        "solution": "Stronger case reserves raise reported claims and case outstanding without an equivalent change in ultimate cost. Historical reported development factors applied to the stronger diagonal overstate ultimate; case-outstanding development likewise overstates because the current outstanding balance is inflated relative to its historical pattern.",
        "insight": "Both unadjusted techniques are biased high; identify how the stronger case reserve enters each."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Identify a technique that is not impacted by this change.",
        "solution": "A paid claims development technique is unaffected directly because paid claims do not include case outstanding.",
        "insight": "Specify paid, not an ambiguous development or BF technique."
      }
    ]
  },
  {
    "id": "spring-2018-21",
    "number": 21,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-13"
    ],
    "points": 2.5,
    "solutionPages": [
      25
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Cumulative paid loss + ALAE ($)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2013",
            "150,000",
            "450,000",
            "550,000",
            "620,000"
          ],
          [
            "2014",
            "170,000",
            "480,000",
            "560,000",
            "590,000"
          ],
          [
            "2015",
            "160,000",
            "470,000",
            "510,000",
            ""
          ],
          [
            "2016",
            "180,000",
            "270,000",
            "",
            ""
          ],
          [
            "2017",
            "90,000",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Average case outstanding ($)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2013",
            "300",
            "320",
            "290",
            "310"
          ],
          [
            "2014",
            "320",
            "310",
            "350",
            "200"
          ],
          [
            "2015",
            "310",
            "400",
            "250",
            ""
          ],
          [
            "2016",
            "450",
            "190",
            "",
            ""
          ],
          [
            "2017",
            "120",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Open claim counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2013",
            "193.6",
            "210.4",
            "142",
            "44"
          ],
          [
            "2014",
            "238",
            "225",
            "145",
            "110"
          ],
          [
            "2015",
            "222.7",
            "207.3",
            "192",
            ""
          ],
          [
            "2016",
            "259.6",
            "263.7",
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
            "2013",
            "1,006.4",
            "1,139.6",
            "1,258",
            "1,406"
          ],
          [
            "2014",
            "1,020",
            "1,155",
            "1,275",
            "1,350"
          ],
          [
            "2015",
            "1,026.8",
            "1,162.7",
            "1,208",
            ""
          ],
          [
            "2016",
            "1,040.4",
            "1,086.3",
            "",
            ""
          ],
          [
            "2017",
            "540",
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
          "48"
        ],
        "rows": [
          [
            "2013",
            "1,200",
            "1,350",
            "1,400",
            "1,450"
          ],
          [
            "2014",
            "1,258",
            "1,380",
            "1,420",
            "1,460"
          ],
          [
            "2015",
            "1,249.5",
            "1,370",
            "1,400",
            ""
          ],
          [
            "2016",
            "1,300",
            "1,350",
            "",
            ""
          ],
          [
            "2017",
            "1,350",
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
          "Ultimate counts"
        ],
        "rows": [
          [
            "2013",
            "1,480"
          ],
          [
            "2014",
            "1,500"
          ],
          [
            "2015",
            "1,510"
          ],
          [
            "2016",
            "1,530"
          ],
          [
            "2017",
            "1,600"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Berquist-Sherman adjusted paid claims ($)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2013",
            "150,000",
            "450,000",
            "550,000",
            "620,000"
          ],
          [
            "2014",
            "170,000",
            "480,000",
            "560,000",
            "623,643.76"
          ],
          [
            "2015",
            "160,000",
            "470,000",
            "557,892.24",
            ""
          ],
          [
            "2016",
            "180,000",
            "577,918.82",
            "",
            ""
          ],
          [
            "2017",
            "162,049.3",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "12% Annual severity trend 1.2 Adjusted paid 48-Ultimate development factor"
      },
      {
        "type": "line",
        "text": "• In 2016, the company undertook an effort to significantly increase the strength of their case reserves."
      },
      {
        "type": "line",
        "text": "• In 2017, the company experienced significant turnover in their claims department resulting in extreme distortions to case reserve and payment patterns."
      },
      {
        "type": "line",
        "text": "• As of the end of 2017 the staffing levels have returned to normal."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Calculate an appropriate estimate of the ultimate loss & ALAE for accident year 2017 using Berquist-Sherman adjustments with the calendar year 2016 diagonal as the basis for adjusting.",
        "solution": "Use the 2016 calendar-year diagonal as the reference for closure rates: about 80.03%, 84.87%, 89.79%, and 96.97% at ages 12, 24, 36, and 48. Restate open counts from each year's reported counts using these rates, and restate average case amounts from the 2016 diagonal with 12% severity trend. Add adjusted paid claims to adjusted open count × adjusted average case. This yields an adjusted 2017 12-month reported amount near $297,920. Volume-weighted adjusted reported age factors are about 2.196, 1.121, and 1.056. Assuming no reported development after 48 months gives 2017 ultimate loss + ALAE ≈ $774,321; a justified other tail assumption changes the result.",
        "insight": "Adjust both settlement rate and case adequacy using the 2016 diagonal. The given 1.2 tail is for adjusted paid claims, not automatically for adjusted reported claims."
      }
    ]
  },
  {
    "id": "spring-2018-22",
    "number": 22,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-7",
      "reserving-14"
    ],
    "points": 2.5,
    "solutionPages": [
      26
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2017:"
      },
      {
        "type": "table",
        "title": "Cumulative gross reported claims ($000)",
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
            "200",
            "400",
            "600",
            "720"
          ],
          [
            "2015",
            "240",
            "480",
            "720",
            ""
          ],
          [
            "2016",
            "300",
            "600",
            "",
            ""
          ],
          [
            "2017",
            "350",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "1.10 48-ultimate reported claim development factor 20% Percentage ceded by the company under a quota share treaty for each accident year"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident year",
          "Stop-loss attachment ($000)"
        ],
        "rows": [
          [
            "2014",
            "700"
          ],
          [
            "2015",
            "750"
          ],
          [
            "2016",
            "900"
          ],
          [
            "2017",
            "1,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The aggregate stop loss treaty is applied after the quota share for each year."
      },
      {
        "type": "line",
        "text": "• The stop loss treaty covers all losses above the attachment point."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Estimate the ultimate claims net of all reinsurance for accident years 2014 through 2017 using the development technique.",
        "solution": "Select gross reported age factors 2.0, 1.5, 1.2, then apply the 1.1 tail. Gross ultimates ($000) for 2014–2017 are 792, 950.4, 1,188, and 1,386. After the 20% quota share and the stop-loss cap, insurer net ultimates are 633.6, 750, 900, and 1,000 ($000), respectively.",
        "insight": "Apply quota share before aggregate stop loss and use cumulative age-to-ultimate factors including the tail."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Calculate the ceded IBNR for accident year 2017.",
        "solution": "For 2017, gross IBNR is 1,386 - 350 = 1,036 ($000). Current net reported is 0.8×350 = 280, and net ultimate is 1,000, so net IBNR is 720. Ceded IBNR = 1,036 - 720 = 316 ($000).",
        "insight": "Subtract net IBNR from gross IBNR; ceded ultimate alone is not ceded IBNR."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe the relationship between gross and net tail factors for each of the following reinsurance arrangements: i. Stop Loss ii. Quota Share",
        "solution": "Stop loss usually makes the insurer's net tail factor smaller than gross because late development above the attachment is ceded, though it need not be 1.0. A constant quota share scales claims at every maturity equally, so net and gross tail factors are equal.",
        "insight": "State the relationship from the insurer's net perspective for each treaty."
      }
    ]
  },
  {
    "id": "spring-2018-23",
    "number": 23,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-17"
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
        "title": "",
        "headers": [
          "Calendar year",
          "Paid ULAE ($)",
          "Paid claims ($)",
          "Incurred claims ($)"
        ],
        "rows": [
          [
            "2014",
            "25,000",
            "62,500",
            "250,000"
          ],
          [
            "2015",
            "50,000",
            "250,000",
            "500,000"
          ],
          [
            "2016",
            "75,000",
            "500,000",
            "750,000"
          ],
          [
            "2017",
            "90,000",
            "600,000",
            "900,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "Accident Year 2017 $150,000 Case outstanding $100,000 Total IBNR 60% Percent of total IBNR attributed to future case development on known claims"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Estimate unpaid ULAE for accident year 2017 using the classical technique where 100% of the paid to paid ratio is applied only to the claims incurred but not yet reported (IBNYR). Briefly justify the selected ULAE ratio.",
        "solution": "Paid ULAE/paid claims ratios are 40%, 20%, 15%, and 15% for 2014–2017. Treat 2014 as an outlier and select 15%. IBNYR is 40%×$100,000 = $40,000; IBNER is $60,000. Classical unpaid ULAE = 15%×[$40,000 + 50%×($60,000 + $150,000 case)] = $21,750.",
        "insight": "Use paid claims as the ratio denominator, justify excluding the 2014 outlier, and apply half the ratio to case plus IBNER."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Estimate unpaid ULAE for accident year 2017 using the Kittel refinement where 100% of the paid to paid ratio is applied only to the IBNYR.",
        "solution": "Kittel uses paid ULAE divided by the average of paid and incurred claims. The ratios for 2015–2017 are 13.33%, 12%, and 12%; select 12%. With the same IBNYR, IBNER, and case reserves, unpaid ULAE = 12%×[$40,000 + 50%×($60,000 + $150,000)] = $17,400.",
        "insight": "The Kittel denominator is the average of paid and incurred claims, not either one alone."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Identify a scenario that distorts the classical technique and briefly explain how it is addressed by the Kittel refinement.",
        "solution": "A major shift in claim settlement or case-reserve practices can change paid ULAE relative to paid claims and distort the classical ratio. Kittel's average paid-and-incurred denominator dampens that timing distortion by recognizing both payments and reported amounts.",
        "insight": "Identify a specific changing ULAE/claims relationship and explain the denominator's corrective role."
      }
    ]
  },
  {
    "id": "spring-2018-24",
    "number": 24,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-6"
    ],
    "points": 2.25,
    "solutionPages": [
      28
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Claims ($000)",
        "headers": [
          "Accident year",
          "Ultimate at Jun 30",
          "Reported at Jun 30",
          "Reported at Dec 31"
        ],
        "rows": [
          [
            "2014",
            "3,220",
            "3,126",
            "3,088"
          ],
          [
            "2015",
            "4,229",
            "3,248",
            "3,796"
          ],
          [
            "2016",
            "4,845",
            "2,018",
            "2,900"
          ],
          [
            "2017",
            "5,101",
            "697",
            "1,565"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Selected reported age-to-age factors",
        "headers": [
          "6–12",
          "12–18",
          "18–24",
          "24–30",
          "30–36",
          "36–42",
          "42–48",
          "48–ultimate"
        ],
        "rows": [
          [
            "1.870",
            "1.630",
            "1.430",
            "1.290",
            "1.170",
            "1.080",
            "1.030",
            "1.005"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Compare the actual versus expected claims reported between June 30, 2017 and December 31, 2017 for each accident year.",
        "solution": "Actual June-to-December reported emergence ($000) for 2014–2017 is -38, 548, 882, and 868. Use the selected ultimate and semiannual factors to calculate expected emergence = ultimate×(1/CDF after - 1/CDF before): approximately 93, 550, 863, and 603. Actual minus expected is about -131, -2, +19, and +265 ($000), respectively.",
        "insight": "Compare incremental emergence over the six months; the factors are semiannual, not annual."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe two scenarios that would result in reported claims emerging lower than expected.",
        "solution": "A shift toward longer-tailed claims can delay reports relative to the selected pattern. Stronger earlier case estimates followed by reductions or faster closures can also lower later reported emergence.",
        "insight": "Give two causal explanations with the direction of the deviation."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe two scenarios that would result in reported claims emerging higher than expected.",
        "solution": "A shift toward shorter-tailed claims can accelerate reporting. Unexpected large claims or case-reserve strengthening can raise reported claims beyond the expected emergence.",
        "insight": "Explain why the circumstances increase reported, not merely paid, claims."
      }
    ]
  },
  {
    "id": "spring-2018-25",
    "number": 25,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-16"
    ],
    "points": 2.25,
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
        "title": "Cumulative paid ALAE ($000)",
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
            "320",
            "1,920",
            "3,840",
            "4,224"
          ],
          [
            "2015",
            "280",
            "1,680",
            "3,360",
            ""
          ],
          [
            "2016",
            "330",
            "1,980",
            "",
            ""
          ],
          [
            "2017",
            "340",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative paid claims ($000)",
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
            "8,000",
            "24,000",
            "38,400",
            "42,240"
          ],
          [
            "2015",
            "7,000",
            "21,000",
            "33,600",
            ""
          ],
          [
            "2016",
            "8,250",
            "24,750",
            "",
            ""
          ],
          [
            "2017",
            "4,250",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Paid ALAE / paid claims",
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
            "0.04",
            "0.08",
            "0.10",
            "0.10"
          ],
          [
            "2015",
            "0.04",
            "0.08",
            "0.10",
            ""
          ],
          [
            "2016",
            "0.04",
            "0.08",
            "",
            ""
          ],
          [
            "2017",
            "0.08",
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
          "Reported development ultimate",
          "Selected ultimate ($000)",
          "Selected ultimate count"
        ],
        "rows": [
          [
            "2014",
            "42,240",
            "42,240",
            "3,600"
          ],
          [
            "2015",
            "36,960",
            "36,960",
            "3,000"
          ],
          [
            "2016",
            "43,560",
            "43,560",
            "3,400"
          ],
          [
            "2017",
            "35,000",
            "66,440",
            "3,500"
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
        "points": 0.75,
        "prompt": "Estimate ultimate ALAE for accident year 2017 using the paid ALAE development technique.",
        "solution": "Paid ALAE age factors are 1,920/320 = 6, 3,840/1,920 = 2, and 4,224/3,840 = 1.1, with no tail. Ultimate 2017 ALAE = 340×6×2×1.1 = $4,488 thousand.",
        "insight": "Develop the ALAE triangle itself, not paid claims or an ALAE-to-claims ratio."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Estimate ultimate ALAE for all accident years using the paid ALAE-to-paid claims only development technique with additive factors.",
        "solution": "Selected additive increases in the paid ALAE/paid claims ratio are +0.04 (12–24), +0.02 (24–36), and 0 (36–48). Ultimate ratios for 2014–2017 are 0.10, 0.10, 0.10, and 0.14. Apply them to selected ultimate claims of 42,240, 36,960, 43,560, and 66,440 ($000): ultimate ALAE = 4,224, 3,696, 4,356, and 9,301.6 ($000).",
        "insight": "Use additive ratio development for every accident year and multiply by selected ultimate claims."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Recommend and briefly justify an estimate of ultimate ALAE for accident year 2017 from the results of parts a. and b. above.",
        "solution": "Select $4,488 thousand from direct paid ALAE development for 2017. The ratio method produces $9,301.6 thousand largely because the selected 2017 ultimate claims value is much higher than the reported-development estimate; its sensitivity to that claim selection weakens the result. Other justified selections are possible.",
        "insight": "Explain a strength of the selected method or a data-specific weakness of the other; the report did not require one unique selection."
      }
    ]
  },
  {
    "id": "spring-2018-26",
    "number": 26,
    "exam": "Spring 2018",
    "chapterIds": [
      "reserving-6",
      "reserving-13",
      "reserving-15"
    ],
    "points": 2.0,
    "solutionPages": [
      30
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following table summarizes the results of various claim projection techniques as of December 31, 2017 in total for all accident years:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Projection technique",
          "Ultimate claims estimate"
        ],
        "rows": [
          [
            "Reported Development",
            "$6,500"
          ],
          [
            "Paid Development",
            "$4,800"
          ],
          [
            "Expected Claims",
            "$4,900"
          ],
          [
            "Reported Bornhuetter-Ferguson",
            "$6,100"
          ],
          [
            "Paid Bornhuetter-Ferguson",
            "$4,850"
          ],
          [
            "Reported Berquist-Sherman",
            "$4,900"
          ],
          [
            "Paid Berquist-Sherman",
            "$4,850"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• There are no large losses."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Describe how an operational change could be causing the variation in the ultimate claims estimates.",
        "solution": "Increasing case-reserve adequacy raises reported claims and inflates unadjusted reported development ($6,500) and reported BF ($6,100). Reported Berquist-Sherman adjusts the case-reserve change and returns about $4,900, in line with the paid-based estimates of $4,800–$4,850.",
        "insight": "The paid estimates' agreement supports a case-reserve change rather than a payment-pattern change."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Identify and briefly describe how two diagnostics could indicate the presence of the operational change identified in part a. above.",
        "solution": "First, inspect average case outstanding by maturity across calendar-year diagonals; an abrupt increase points to stronger case reserves. Second, inspect reported-to-paid claim ratios or the case-outstanding share of reported claims by maturity; a jump while paid patterns stay stable supports the same diagnosis.",
        "insight": "Describe how each diagnostic would reveal increasing case adequacy, not merely name it."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Identify and briefly describe a diagnostic that highlights the similarity between the paid development technique and paid Berquist-Sherman technique estimates.",
        "solution": "Compare cumulative closed claim counts to reported claim counts by development age (claim-disposal rates). If disposal rates are stable, the paid Berquist-Sherman settlement-rate adjustment changes little, explaining why paid development and paid Berquist-Sherman estimates are close.",
        "insight": "Use closed/reported for disposal rate and connect stable rates to the similar paid estimates."
      }
    ]
  }
];

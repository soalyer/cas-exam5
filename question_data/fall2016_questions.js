// Transcribed from the official Fall 2016 exam PDF; point grid checked against the CBT workbook.
window.FALL_2016_QUESTIONS = [
  {
    "id": "fall-2016-1",
    "number": 1,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-4"
    ],
    "points": 1.25,
    "questionPage": 4,
    "solutionPages": [
      33,
      34,
      35
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following automobile policies issued during calendar years 2013 through 2015:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Effective Date",
          "Expiration Date",
          "Number of Policies"
        ],
        "rows": [
          [
            "April 1, 2013",
            "September 30, 2013",
            "100"
          ],
          [
            "October 1, 2013",
            "March 31, 2014",
            "110"
          ],
          [
            "April 1, 2014",
            "September 30, 2014",
            "105"
          ],
          [
            "October 1, 2014",
            "March 31, 2015",
            "100"
          ],
          [
            "April 1, 2015",
            "September 30, 2015",
            "110"
          ],
          [
            "October 1, 2015",
            "March 31, 2016",
            "105"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• All policies have a 6-month term."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate the written car-years for calendar year 2014.",
        "solution": "Written Car-years for CY 2014 = (105+100) × 0.5 = 102.5",
        "insight": "Demonstrate how to calculate written exposures for 6-month policies."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Calculate the in-force car-years as of December 31, 2014.",
        "solution": "In-force car-years as of Dec 31, 2014 = 100 × 0.5 = 50",
        "insight": "Demonstrate how to calculate in-force exposures for 6-month policies."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Calculate the earned car-years for calendar year 2015.",
        "solution": "Earned Car-years for CY 2015 \n= (100 × 0.5 +110 + 105 × 0.5) × 0.5 \n=106.25",
        "insight": "Demonstrate how to calculate earned exposures for 6-month policies."
      }
    ]
  },
  {
    "id": "fall-2016-2",
    "number": 2,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-5"
    ],
    "points": 1.5,
    "questionPage": 5,
    "solutionPages": [
      36,
      37
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
          "Rate Change"
        ],
        "rows": [
          [
            "September 1, 2012",
            "-10%"
          ],
          [
            "September 1, 2013",
            "-5%"
          ],
          [
            "September 1, 2014",
            "-3%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• A law change mandated a rate decrease of 15% effective February 1, 2015 applicable to all in-force policies."
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the on-level factor to current rate level for calendar year 2014 earned premium.",
        "solution": "Period B C D \nWeight in CY 2014 = .5 x (8/12) x \n(8/12) = .2222 \n= 1 - Area \nB - Area D \n= .7222 \n= .5 x (4/12) \nx (4/12) = \n.0556 \nCumulative Rate \nLevel 1 0.95 = 0.95 x 0.97 \n= .9215 \n \n2014 Average Rate Level = .2222 x 1 + .7222 x .95 + .0556 x .9215 = .959528 \n     Current Cumulative Rate Level = 1 x .95 x .97 x .85 = .783275 \n     On-Level Factor for 2014 = .783275 / .959528 = .816313",
        "insight": "Demonstrate how to calculate an earned premium on-level factor using the parallelogram method."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Identify a weakness with the parallelogram method and briefly describe a solution.",
        "solution": "One weakness is the assumption of uniform writings of policies throughout the year. A way to \nimprove upon this is to use extension of exposures to rerate all policies using current \nrates/relativities.",
        "insight": "Know a weakness with the parallelogram method as well as a correct solution to the given weakness."
      }
    ]
  },
  {
    "id": "fall-2016-3",
    "number": 3,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-16"
    ],
    "points": 1.5,
    "questionPage": 6,
    "solutionPages": [
      38,
      39
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data for an insured"
      },
      {
        "type": "table",
        "title": "Reported Loss ($) by Report Year Lag",
        "headers": [
          "Report Year",
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "rows": [
          [
            "2011",
            "75,300",
            "84,000",
            "62,400",
            "59,000",
            "39,800"
          ],
          [
            "2012",
            "65,000",
            "63,200",
            "84,000",
            "80,200",
            "62,100"
          ],
          [
            "2013",
            "82,100",
            "49,900",
            "55,000",
            "60,600",
            "72,300"
          ],
          [
            "2014",
            "90,000",
            "77,000",
            "104,300",
            "45,000",
            "88,300"
          ],
          [
            "2015",
            "71,800",
            "89,000",
            "62,000",
            "91,500",
            "46,600"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Policies run from January 1 through December 31."
      },
      {
        "type": "line",
        "text": "• The insured's coverage changed from occurrence to claims-made on January 1, 2013 with a retroactive date of January 1, 2013."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.25,
        "prompt": "Calculate the reported losses for the 2012 occurrence policy as of December 31, 2015.",
        "solution": "65,000 + 49,900 + 104,300 + 91,500 = 310,700",
        "insight": "Know what losses would be covered under an occurrence policy."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Calculate the reported losses for the 2014 claims-made policy as of December 31, 2015.",
        "solution": "90,000 + 77,000 = 167,000",
        "insight": "Know what losses would be covered under a claims-made policy with a retroactive date."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Describe how a switch from occurrence to claims-made coverage could affect an insurer's loss reserve risk.",
        "solution": "Reduces the insurer’s reserve risk, because there is no IBNR to account for past the policy \nperiod for the C-M policy.",
        "insight": "Recognize the primary difference in reserving between claims- made and occurrence is in IBNR and tail length."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Describe how a switch from occurrence to claims-made coverage could affect the target underwriting profit provision.",
        "solution": "Would need to increase underwriting profit for C-M policy because C-M policy earns less \ninvestment income than Occurrence policy (due to shorter period between premium received \nand losses paid).",
        "insight": "Recognize that the shorter tail for claims-made would reduce investment income or would reduce risk, as well as how that would affect the target underwriting profit provision."
      }
    ]
  },
  {
    "id": "fall-2016-4",
    "number": 4,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 3.75,
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
          "Accident Year",
          "Frequency",
          "Severity ($)"
        ],
        "rows": [
          [
            "2011",
            "0.100",
            "25,000"
          ],
          [
            "2012",
            "0.090",
            "27,250"
          ],
          [
            "2013",
            "0.081",
            "30,248"
          ],
          [
            "2014",
            "0.082",
            "33,423"
          ],
          [
            "2015",
            "0.080",
            "36,599"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Ultimate Losses ($000)"
        ],
        "rows": [
          [
            "2013",
            "48,000"
          ],
          [
            "2014",
            "55,000"
          ],
          [
            "2015",
            "60,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Exposures are constant."
      },
      {
        "type": "line",
        "text": "• The company only writes semi-annual policies."
      },
      {
        "type": "line",
        "text": "• The rate filing will be effective on January 1, 2017."
      },
      {
        "type": "line",
        "text": "• Rates will be in effect for one year"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Calculate the average annual trended ultimate losses that should be used to determine the indicated rate change. Briefly justify the frequency trend and severity trend selections.",
        "solution": "Frequency \n2011 to 2012: 0.090/0.100 = 0.900 or -10.0% \n2012 to 2013: 0.081/.090 = 0.900 or -10.0% \n2013 to 2014: 0.082/.081 = 1.012 or +1.2% \n2014 to 2015: 0.080/.082 = 0.976 or -2.4% \n \nSeverity \n2011 to 2012: 27,250/25,000 = 1.090 or +9.0% \n2012 to 2013: 30,248/27,250 = 1.110 or +11.0% \n2013 to 2014: 33,423/30,248 = 1.105 or +10.5% \n2014 to 2015: 36,599/33,423 = 1.095 or +9.5% \n \nFrequency:  \nSelected -0.6% using AYs 2013-2015 given change in frequency from AY 2013 and forward.  \nFrequency seems stable in recent years so selected trend of 0%. \nSeverity: Stable so select average of all years of +10.0%.  \n \nTrend to average accident date of 10/1/2017 from 7/1/201x.  \n2013: 48,000 * (1.1*0.994)^(4.25 years) = 70,154 \n2014: 55,000 * (1.1*0.994)^(3.25 years) = 73,518 \n2015: 60,000 * (1.1*0.994)^(2.25 years) = 73,351 \n \nCalculate the average: $72,341",
        "insight": "Demonstrate how to calculate frequency and severity trends."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Discussions with the underwriting team reveal that changes in underwriting guidelines in the 2012 policy year resulted in lower claim counts. Describe how this information may change the estimate in part a. above without performing any additional calculations.",
        "solution": "This can change the selected frequency trend because we may choose to exclude accident years 11 and \n12 and have a frequency trend close to 1. It would bring trended ultimate losses higher by increasing \nthe frequency trend.",
        "insight": "Know how a change in underwriting policy which lowers claim counts impacts the frequency trend and trended ultimate losses."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Discussions with the underwriting team reveal that the company has been writing fewer high deductible policies, starting in policy year 2014. Fully describe how this information may change the estimate in part a. above without performing any additional calculations.",
        "solution": "Fewer high deductible policies mean that frequency will increase, since the high deductibles decrease \nfrequency since there are some claims not reported below the high deductibles. Severity will decrease, \nas high–deductible policies tend to have higher severities since there are no small nuisance claims. If \nthis is a trend that will continue in the future, severity trend should decrease, frequency trend should \nincrease, and pure premium trend increase resulting in projected ultimate losses increase.",
        "insight": "Know how a change in the mix of business to less high deductible policies impacts the frequency and severity trends and trended ultimate losses."
      }
    ]
  },
  {
    "id": "fall-2016-5",
    "number": 5,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-6",
      "reserving-14"
    ],
    "points": 2.25,
    "questionPage": 8,
    "solutionPages": [
      42,
      43
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company purchases per risk excess-of-loss reinsurance each year that covers individual claims that exceed the retention."
      },
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2015:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Earned Exposures",
          "Direct Ultimate Losses ($000)",
          "Claim Counts"
        ],
        "rows": [
          [
            "2013",
            "1,850",
            "185,000",
            "185"
          ],
          [
            "2014",
            "1,750",
            "190,000",
            "175"
          ],
          [
            "2015",
            "1,650",
            "199,500",
            "165"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Ultimate Value of Direct Claims Excess of $500,000",
        "headers": [
          "Accident Year",
          "Claim",
          "Direct Ultimate Loss of Individual Claims ($000)"
        ],
        "rows": [
          [
            "2013",
            "A",
            "18,400"
          ],
          [
            "2013",
            "B",
            "3,200"
          ],
          [
            "2014",
            "C",
            "5,700"
          ],
          [
            "2014",
            "D",
            "5,200"
          ],
          [
            "2015",
            "E",
            "9,500"
          ],
          [
            "2015",
            "F",
            "6,200"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Retention ($000)"
        ],
        "rows": [
          [
            "2013",
            "2000"
          ],
          [
            "2014",
            "5,000"
          ],
          [
            "2015",
            "10,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Policies are annual."
      },
      {
        "type": "line",
        "text": "• Policies are written uniformly throughout the year."
      },
      {
        "type": "line",
        "text": "• Rates are expected to be in effect for one year."
      },
      {
        "type": "line",
        "text": "• Planned rate revision to be effective January 1, 2017."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.25,
        "prompt": "Calculate the average trended pure premium net of reinsurance at the current $10,000,000 retention.",
        "solution": "Calculate or identify that there was no trend (or 0% trend) in frequency rate. Calculate the \naverage direct loss severity for each year (total direct losses divided by claim count), calculate the \nseverity trend, and select a trend rate:  \n \nAY Frequency Sev Trend \n2013 0.100 $100.00    \n2014 0.100 $108.57  8.6% \n2015 0.100 $120.91  11.4% \n        \n \nSelected Trend Rate: 10.0% \n \nIdentify the trend period: 7/1/xx – 1/1/2018 \n \nApply the severity trend to the large losses, and calculate the losses excess of the current \nreinsurance: \nAY Loss   \nTrend \nFactor   \nTrended \nUltimate   \nXS of \ncurrent \nReinsur \n2013 18,400 x 1.1^4.5 = 28,254   18,254 \n2013 3,200 x 1.1^4.5 = 4,914   0 \n2014 5,700 x 1.1^3.5 = 7,957   0 \n2014 5,200 x 1.1^3.5 = 7,259   0 \n2015 9,500 x 1.1^2.5 = 12,056   2,056 \n2015 6,200 x 1.1^2.5 = 7,868   0 \n \nApply the severity trend to the direct losses, and calculate the net losses by removing the trended \nexcess of current reinsurance. And finally, divide by exposures to calculate the historical net pure \npremium and select a pure premium estimate. \n \n \n \n \n \n \nAY Direct Loss\nTrend \nFactor\nTrended \nDirect\nXS of Curr \nReins\nTrended \nNet Loss Exposure\nPure \nPremium\n2013 185,000 x 1.1^4.5 = 284,079 - 18,254 = 265,824 / 1,850 = 143.69\n2014 190,000 x 1.1^3.5 = 265,233 - 0 = 265,233 / 1,750 = 151.56\n2015 199,500 x 1.1^2.5 = 253,177 - 2,056 = 251,121 / 1,650 = 152.19\n782,179 5,250 148.99\n148.99Selected Pure Premium:",
        "insight": "Demonstrate their ability to calculate and select trend rates, and identify the trending period."
      }
    ]
  },
  {
    "id": "fall-2016-6",
    "number": 6,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 1.25,
    "questionPage": 9,
    "solutionPages": [
      44,
      45
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following information is available for a single-state, mono-line insurer:"
      },
      {
        "type": "table",
        "title": "Calendar Year ($000)",
        "headers": [
          "Expense",
          "2013",
          "2014",
          "2015"
        ],
        "rows": [
          [
            "General Expense",
            "4,525",
            "4,175",
            "3,875"
          ],
          [
            "Other Acquisition",
            "5,220",
            "6,000",
            "6,750"
          ],
          [
            "Commissions/Brokerage",
            "8,700",
            "8,000",
            "7,500"
          ],
          [
            "Taxes, Licenses and Fees",
            "3,480",
            "3,200",
            "3,000"
          ],
          [
            "Total Expenses",
            "21,925",
            "21,375",
            "21,125"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Calendar Year ($000)",
        "headers": [
          "Premium",
          "2013",
          "2014",
          "2015"
        ],
        "rows": [
          [
            "Written Premium",
            "87,000",
            "80,000",
            "75,000"
          ],
          [
            "Earned Premium",
            "90,500",
            "83,500",
            "77,500"
          ]
        ]
      },
      {
        "type": "line",
        "text": "The company's pricing actuary is asked to calculate an expense provision for 2016, and does so using a ratio of three years' total expense to three years' earned premium as follows:"
      },
      {
        "type": "line",
        "text": "Expense Provision = (21,925,000 + 21,375,000 + 21,125,000) = 25.6% (90,500,000 + 83,500,000 + 77,500,000)"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Briefly discuss three reasons why the actuary's approach is not appropriate.",
        "solution": "Sample Answers (need three distinct responses for full credit): \n• Actuary’s approach divides all expenses by earned premium which assumes that all \nexpenses are incurred over duration of policy when in fact commissions/brokerage and \nother acquisition expenses tend to be incurred at policy inception  \n• Shouldn’t use all variable expense assumption, since the premium is decreasing/not \nstable. Should split fixed expense and variable expense  \n• The book is shrinking, so using a total avg gives more weight to older years which is likely \ninappropriate as recent years are likely more reflective \n• The actuary should calculate the expense ratios by year for each expense category \n(dividing by the appropriate written or earned premium), to see if any trends/patterns \nexist within each expense category that might influence the selected “best estimate” \nfuture expense ratio for that category  \n• The expense ratio for each year is slightly higher than the previous year. The actuary \nshould consider expense trend may be higher than premium trend, and may need to \nadjust.",
        "insight": "Know how expense types are typically incurred as well as the potential distortions caused by the All Variable Expense Method."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Identify an alternative approach to calculate the expense provision and briefly explain its benefit relative to the actuary's approach without performing any additional calculations.",
        "solution": "Use the exposure based approach, which divides total dollar amount of fixed expense by \nexposures, and then use % to premium for variable expenses. The benefit is the fixed expenses \nare the same, isn’t affected by premium change. If use all variable expense approach, will \novercharge when premium is above average, and undercharge when low premium",
        "insight": "Demonstrate an understanding of expense ratio calculation methods, citing an appropriate advantage to justify their selection of an alternative method."
      }
    ]
  },
  {
    "id": "fall-2016-7",
    "number": 7,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 1.75,
    "questionPage": 10,
    "solutionPages": [
      46
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A regulator wants to benchmark the underwriting profit provisions between companies."
      },
      {
        "type": "line",
        "text": "For Company A's rate filing, the following is assumed:"
      },
      {
        "type": "line",
        "text": "Projected total fixed costs 50,000 Projected total loss and LAE 600,000 Projected exposures 2000 Indicated rate per exposure $500"
      },
      {
        "type": "line",
        "text": "For Company Bs rate filing, the following is assumed:"
      },
      {
        "type": "line",
        "text": "Projected total fixed costs 50,000 Projected total loss and LAE 600,000 Projected premium at current rates 900,000 Indicated rate change 16.50%"
      },
      {
        "type": "line",
        "text": "• The variable expense ratio is the same for each company."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Determine which company's filing includes the higher underwriting profit provision.",
        "solution": "Company A: 500 = ((600+50)/2)/(1-V-QA)     0.65 = 1-V-QA \nCompany B: 0.165 = ((600+50)/900)/(1-V-QB) -1     0.62 = 1-V-QB \nSince the variable expense ratios are the same, QB is 3% higher than QA",
        "insight": "Setup the overall rate indication calculations for both companies and compare the profit provisions between the companies."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "List two reasons the underwriting profit provision might differ between companies with the same loss, LAE and expense experience.",
        "solution": "If 1 company has longer-tail business and expects more investment income to make up for lower \nUW profit. \nA company may choose a lower UW provision if they want to grow their business quickly.",
        "insight": "Identify reasons that would cause companies to target different profit provisions."
      }
    ]
  },
  {
    "id": "fall-2016-8",
    "number": 8,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-8",
      "reserving-7"
    ],
    "points": 3.5,
    "questionPage": 11,
    "solutionPages": [
      47,
      48,
      49
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information about an insurance product:"
      },
      {
        "type": "line",
        "text": "• The product launched on January 1, 2012."
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• The rating algorithm is exposures multiplied by a fixed manual rate."
      },
      {
        "type": "line",
        "text": "• The average written manual rate per exposure in 2013 = $5,000."
      },
      {
        "type": "line",
        "text": "• Exposures are written uniformly throughout the year."
      },
      {
        "type": "line",
        "text": "• A large loss of $2 million occurred and was paid in 2014. Underwriting guidelines have been revised such that further losses of this type are not expected."
      },
      {
        "type": "line",
        "text": "• Losses do not develop after 36 months."
      },
      {
        "type": "line",
        "text": "• The age-to-age factors in the latest diagonal are representative of future loss development."
      },
      {
        "type": "line",
        "text": "• Rates will be in effect for two years."
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
            "Annual loss cost trend",
            "5%"
          ],
          [
            "Annual premium trend",
            "0%"
          ],
          [
            "Fixed expense ratio",
            "0%"
          ],
          [
            "Variable expense ratio",
            "22%"
          ],
          [
            "Profit and contingencies provision",
            "6%"
          ],
          [
            "ALAE provision (% of loss)",
            "12%"
          ],
          [
            "ULAE provision (% of loss)",
            "7%"
          ]
        ]
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
            "July 1, 2014",
            "7.5%"
          ],
          [
            "July 1, 2015",
            "3.0%"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Measure",
          "2012",
          "2013",
          "2014",
          "2015"
        ],
        "rows": [
          [
            "Written Exposures",
            "805",
            "850",
            "825",
            "875"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Loss ($000) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2013",
            "",
            "1,100",
            "1,150"
          ],
          [
            "2014",
            "2,940",
            "4,210",
            ""
          ],
          [
            "2015",
            "1,020",
            "",
            ""
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3.5,
        "prompt": "Calculate the indicated rate change for policies effective between July 1, 2017 and July 1, 2019 based on the most recent three accident years of experience and assuming full credibility.",
        "solution": "Current Rate Level \n5,536 = \n5,000*1.075*1.03 \n      \n        Earned Exposures \n      \nCY \nEarned \nExposure     \n  2013 827.5 = 805 * 50% + 850 * 50% \n   2014 837.5 = 850 * 50% + 825 * 50% \n   2015 850.0 = 825 * 50% + 875 * 50% \n   \n        On-leveled Earned Premium \n     \nCY \nEarned \nExposures \nCurrent \nRate \nLevel OL EP \n    2013 827.5  5,536 4,581,247 \n    2014 837.5  5,536 4,636,609 \n    2015 850.0  5,536 4,705,813 \n    \n   \n13,923,669 \n    \n        Calculate Loss Development Factors \n    \n \n12 24 36 \n    2013 \n \n1,100 1,150 \n    2014 940 2,210 \n \n<< Adjusted to exclude $2m Loss in 2014 \n2015 1,020 \n      \n        \n \nLDFs \n  \nCDFs \n   12 to 24 2.351 \n \n12 to Ult 2.458 \n   24 to 36 1.045 \n \n24 to Ult 1.045 \n   \n        \n        Trended Ultimate Loss \n     \nAY \nIncurred \n(000s) CDF Loss Trend \nTrend \nPeriod \nTrended \nUlt Loss \n  2013 1,150 1.000 1.05 5.5 1,504 \n  2014 2,210 1.045 1.05 4.5 2,878 \n  2015 1,020 2.458 1.05 3.5 2,974 \n  \n     \n7,355,635 \n  \n        Calculate Loss Ratio \n \n52.8% = 7,355,635 / 13,923,669 \n \n        Indicated Rate Change -12.7% = 52.8% * (1 + .12 + .07) / (1 - .22 - .06) - 1",
        "insight": "On-Leveled Premium Calculation know how to calculate CY earned exposures from PY written exposures as well as calculate and apply the current rate level to calculate on-leveled EP."
      }
    ]
  },
  {
    "id": "fall-2016-9",
    "number": 9,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-7",
      "ratemaking-8"
    ],
    "points": 1,
    "questionPage": 12,
    "solutionPages": [
      50
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following:"
      },
      {
        "type": "line",
        "text": "General Expenses 225,000 Written Premium 3,750,000 Earned Premium 3,000,000 Other Acquisition Expense 8.0% Commission 12.0% Taxes, Licenses & Fees 3.0%"
      },
      {
        "type": "line",
        "text": "Projected Ultimate Loss and LAE Ratio 62.0% Target Underwriting Profit Ratio 5.0%"
      },
      {
        "type": "line",
        "text": "• All expenses are paid at policy inception."
      },
      {
        "type": "line",
        "text": "• Commission and Taxes, Licenses & Fees are 100% variable."
      },
      {
        "type": "line",
        "text": "• All other expense categories are 50% variable."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the indicated rate change assuming the data is fully credible.",
        "solution": "Category Total % Fixed Expenses % Variable Expenses % \nGeneral Expenses 225k/3750k=6% 3% 3% \nOther Acquisition Expense 8% 4% 4% \nCommission & Brokerage 12%  12% \nTaxes, Licence & Fees 3%  3% \n  7% 22% \n \n \nIndicated Rate change =  62% + 7%\n1 − 22% − 5% − 1 = − 5.48%",
        "insight": "Determine appropriate general expenses ratio using written premium, appropriately separate the expense ratios into fixed and variable components, and determine the indicated rate change."
      }
    ]
  },
  {
    "id": "fall-2016-10",
    "number": 10,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 1,
    "questionPage": 13,
    "solutionPages": [
      51
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A homeowners insurance company is considering utilizing number of vehicles in the household as an additional risk characteristic within its risk classification system."
      },
      {
        "type": "line",
        "text": "Briefly discuss the appropriateness of adding this risk characteristic to the company's risk classification system using four considerations from the Actuarial Standard of Practice No. 12: Risk Classification (for All Practice Areas)."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Briefly discuss the appropriateness of adding this risk characteristic to the company's risk classification system using four considerations from the Actuarial Standard of Practice No. 12: Risk Classification (for All Practice Areas).",
        "solution": "Causality – the number of vehicles does not seem to have an intuitive relationship to \nhomeowners’ losses, so this criteria may be violated \n \nEasy to verify – this would be easy to verify by checking vehicle records \n \nExisting Law – there is no current law which prohibits the use of number of vehicles in the risk \nclassification system \n \nObjective – the number of vehicles is well defined and unambiguous.",
        "insight": "Be knowledgeable of the characteristics of an exposure base/rating variable."
      }
    ]
  },
  {
    "id": "fall-2016-11",
    "number": 11,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 3.25,
    "questionPage": 14,
    "solutionPages": [
      52,
      53,
      54
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following ground-up uncapped loss profile for a book of business:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Claim Type",
          "Number of Claims",
          "Loss Amount of Each Claim ($)"
        ],
        "rows": [
          [
            "A",
            "200",
            "5,000"
          ],
          [
            "B",
            "100",
            "20,000"
          ],
          [
            "C",
            "10",
            "100,000"
          ],
          [
            "D",
            "10",
            "400,000"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Calculate the increased limits factor for an increased limit of $25,000 and a basic limit of $10,000.",
        "solution": "LAS(10K) = [200*5K+(100+10+10)*10K]/[200+100+10+10] = 6.875K \nLAS(25K) = [200*5K+100*20K+(10+10)*25K]/[200+100+10+10] = 10.9375K \nILF(25K) = 10.9375/6.875 = 1.591",
        "insight": "Know how to calculate an increased limits factor."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Calculate the severity trend for the layer excess of $50,000 assuming a ground-up severity trend of 10% over the next year.",
        "solution": "XS 50,000 Trended Claim Amount New XS 50,000 \n0 5,500 0 \n0 22,000 0 \n50,000*(10) 110,000 60,000*(10) \n350,000*(10) 440,000 390,000*(10) \n4,000,000  4,500,000 \nSeverity trend = 4,500,000/4,000,000 = 12.5%",
        "insight": "Apply the ground up trend factor to the ground up losses, then calculate either the average claim size or the total claim amount excess of $50k both before and after trend."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Provide one reason why the data above would not be appropriate to determine an increased limits factor for $100,000 and suggest an alternative source that could be used.",
        "solution": "There are too few losses above $100,000 to be credible. One could use industry ILF factors \ninstead.",
        "insight": "Note the small amount of claims excess of $100k and comment on the lack of credibility in the data due to size."
      }
    ]
  },
  {
    "id": "fall-2016-12",
    "number": 12,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-10"
    ],
    "points": 1.0,
    "questionPage": 15,
    "solutionPages": [
      55,
      56
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following graph provides the output from a generalized linear model (GLM):"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Briefly explain whether this variable should be included in the rating plan.",
        "solution": "Yes. It seems that all years exhibit similar downward slope for this rating factor. So it seems the \nrating variable has predictive power",
        "insight": "Recognize the consistent downward pattern across accident years between two levels in this consistency test of Rating Variable 1."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly discuss two reasons why GLM analysis is typically performed on loss cost data instead of loss ratios.",
        "solution": "1) No need to on-level premiums, which can be difficult at the granular level \n2) There is no standard probability distribution for loss ratios",
        "insight": "Recall two reasons that Actuaries generally model loss costs instead of loss ratios in GLMs."
      }
    ],
    "figure": {
      "src": "assets/exam-graphs/fall-2016-q12.png",
      "title": "GLM output",
      "alt": "Generalized linear model diagnostic graph"
    }
  },
  {
    "id": "fall-2016-13",
    "number": 13,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-9",
      "ratemaking-12"
    ],
    "points": 3.0,
    "questionPage": 16,
    "solutionPages": [
      57,
      58,
      59
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company is considering updating its territorial relativities given the following information:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Territory",
          "Number of Exposures",
          "Trended and Ultimate Incurred Losses and ALAE ($)",
          "Current Territorial Relativity"
        ],
        "rows": [
          [
            "1",
            "30,000",
            "3,000,000",
            "1.100"
          ],
          [
            "2",
            "50,000",
            "4,000,000",
            "1.000"
          ],
          [
            "3",
            "25,000",
            "1,500,000",
            "0.850"
          ],
          [
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The base territory remains the same."
      },
      {
        "type": "line",
        "text": "• Exposures are homogeneous within each territory."
      },
      {
        "type": "line",
        "text": "• The full credibility standard = 45,000 exposures."
      },
      {
        "type": "line",
        "text": "• Partial credibility is determined by the square root rule."
      },
      {
        "type": "line",
        "text": "• Complement of credibility is equal to normalized current territorial relativities."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the credibility weighted territorial relativities using the pure premium approach.",
        "solution": "Sample Answer  \nTerritory  \nPure \nPremium Credibility  Ind PP Rel \nNorm Curr \nTerr Rel \nCred Wtd \nRel \nCred Wtd \nRel @ Base \nTerr \n1 100  81.6% 1.235 1.108 1.212 1.226 \n2 80  100.0% 0.988 1.007 0.988 1.000 \n3 60  74.5% 0.741 0.856 0.770 0.780 \nTotal 81   0.993  1.012 \n \nCalculations for Terr 1: \nPure Premium = Ult Inc Loss & ALAE/Exposures = 3,000,000/30,000 =100 (Total = 80.95) \nCredibility = (30,000/45,000)^(1/2) = .816 \nInd PP Rel = 100/80.95 = 1.235 \nNorm Curr Rel = Curr Rel/Tot Avg Curr Rel = 1.1/.993 = 1.108 \nCred Wtd Rel  \n     =Cred*Ind PP Rel + (1-Cred)*Norm Curr Rel=.816*1.235+(1-.816)*1.108=1.212 \nCred Wtd Rel @ Base Terr = 1.212/.988 = 1.226 \nAll Totals are exposure weighted",
        "insight": "Know how to calculate territorial relativities using the pure premium approach, including calculating partial credibility, the credibility-weighted indicated relativities."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Determine the percent change by territory, assuming the indicated relativities are to be adopted and no overall premium change is desired.",
        "solution": "Territory  \nInd Terr \nRel Chg \nOffset = \n1/(1.013) \n% Chg \nwith Off-\nBalance \n1 11.5%    0.987  10.0% \n2 0.0%    0.987  -1.3% \n3 \n \n-8.3% \n \n   0.987  \n \n-9.5% \n \nCalculations for Terr 1: \nInd Terr Rel Chg  \n    = Cred Wtd Rel @Base Terr/Curr Rel -1 = 1.226/1.10 = +11.5% \nExp Wtd Total = (30,000 * 11.5% + 50,000 * 0% + 25,000 * -8.3%)/(105,000) = 1.3% \nOffset = 1/(1+Exp Wtd Total) = 1/(1+.013) = .987 \n% Change with Off-Balance = (1 + Ind Terr Rel Chg)*Offset -1= (1.115*0.987)-1=10.0%",
        "insight": "Calculate each territorial change, then offset the base rate so the overall premium remains unchanged."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Briefly discuss three reasons why proposed rate changes might deviate from indicated rate changes.",
        "solution": "Sample Answers (needed three reasons for full credit) \n• Regulation might restrict large rate increases or decreases \n• Large premium swings might be avoided to avoid customers leaving \n• Competitive concerns: the company may be worried that an increase in rates could \nreduce market share \n• Insurer might look at the lifetime profitability of the business and realize losses are \nusually higher for new policies than for renewal policies and may choose a long-term \npricing approach \n \n \n• For volatiles lines of business where very large indications are expected due to the \nvolatility and credibility of data, actuarial judgment may be used to propose a more \nreasonable change \n• The insurer has decided to address the imbalance in rates by revising underwriting \nguidelines to restrict business from being written at inadequate rates \n• Indicated rates may not be fully implemented due to system/operational constraints like \na factor requiring new systems \n \nNote that this list is not exhaustive, and other reasonable answers were accepted provided they \nwere adequately supported.",
        "insight": "Know why, generally, proposed changes might deviate from indicated changes."
      }
    ]
  },
  {
    "id": "fall-2016-14",
    "number": 14,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 1.25,
    "questionPage": 17,
    "solutionPages": [
      60,
      61
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insured purchases a $400,000 policy on a property valued at $500,000."
      },
      {
        "type": "line",
        "text": "• The coinsurance requirement for the policy is 90% of property value."
      },
      {
        "type": "line",
        "text": "• No deductible applies."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.25,
        "prompt": "Calculate the coinsurance penalty for a $300,000 loss.",
        "solution": "400000/(0.9*500000) = 0.889 \n(1-0.889)*300000 = 33,300",
        "insight": "Know how to calculate a coinsurance penalty."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Calculate the maximum coinsurance penalty.",
        "solution": "0.9*500000 = 450000 \n400000*(1-0.889) = 44,400",
        "insight": "Know how to calculate a coinsurance penalty."
      },
      {
        "id": "c",
        "points": 0.25,
        "prompt": "Calculate the coinsurance apportionment ratio, assuming the property is valued at $425,000 instead of $500,000.",
        "solution": "a = min (F / (c * V), 1) = min (400,000/(425,000 * 0.9), 1) = 1",
        "insight": "Know how to correctly calculate a coinsurance apportionment ratio."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Briefly describe two issues associated with underinsured properties.",
        "solution": "Insured’s will not be fully insured for a loss \nExpected losses are higher for underinsured policies when partial losses are possible",
        "insight": "Demonstrate an understanding of the issues associated with underinsurance."
      }
    ]
  },
  {
    "id": "fall-2016-15",
    "number": 15,
    "exam": "Fall 2016",
    "chapterIds": [
      "ratemaking-15"
    ],
    "points": 1.75,
    "questionPage": 18,
    "solutionPages": [
      62,
      63
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following for a workers compensation policyholder:"
      },
      {
        "type": "line",
        "text": "Individual Claims Reported During the Experience Period 19,000 3,000 102,500 11,000"
      },
      {
        "type": "line",
        "text": "• Standard premium = $435,000."
      },
      {
        "type": "line",
        "text": "• 3-year payroll = $14,590,000."
      },
      {
        "type": "line",
        "text": "• Expected loss rate = 2.40 per $100 of payroll."
      },
      {
        "type": "line",
        "text": "• D-ratio= 0.19."
      },
      {
        "type": "line",
        "text": "• Primary loss cap = $5,000."
      },
      {
        "type": "line",
        "text": "• Primary credibility = 0.75."
      },
      {
        "type": "line",
        "text": "• Excess credibility = 0.15."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Calculate the policy's premium under an experience rating plan.",
        "solution": "Ap = 5000 + 3000 + 5000 + 5000 = 18,000 \nAe = 14,000 + 0 + 97,500 + 6000 = 117,500 \n \nExp Loss = 2.4 (14,590,000/100) = 350,160 \nEp = .19 (350,160) = 66,530.4 \nEe = (1-.19) (350,160) = 283,629.6 \n \nPrem = 435,000 x 18,000 (.75) + 66530.4 (.25) + 117,500 (.15) + 283,629.6 (.85) \n350,160 \n= 358,826.25",
        "insight": "The be able to calculate: • Primary (i.e."
      }
    ]
  },
  {
    "id": "fall-2016-16",
    "number": 16,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-6"
    ],
    "points": 2.5,
    "questionPage": 19,
    "solutionPages": [
      64,
      65,
      66
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
          "2013 Payments",
          "2013 Ending Case Outstanding",
          "2014 Payments",
          "2014 Ending Case Outstanding",
          "2015 Payments",
          "2015 Ending Case Outstanding"
        ],
        "rows": [
          [
            "1",
            "January 1, 2013",
            "80",
            "150",
            "25",
            "100",
            "100",
            "-"
          ],
          [
            "2",
            "June 1, 2013",
            "20",
            "50",
            "25",
            "50",
            "100",
            "-"
          ],
          [
            "3",
            "May 1, 2014",
            "",
            "",
            "100",
            "50",
            "50",
            "50"
          ],
          [
            "4",
            "December 15, 2014",
            "",
            "",
            "50",
            "250",
            "150",
            "100"
          ],
          [
            "5",
            "April 1, 2015",
            "",
            "",
            "",
            "",
            "50",
            "50"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Construct an accident year cumulative paid claims triangle.",
        "solution": "Cumulative Paid Claim Triangle \n \nAccident Year 12 24 36 \n2013 100 150 350 \n2014 150 350  \n2015 50",
        "insight": "Build accident year paid claim triangles using transactional claim data."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Construct an accident year cumulative reported claims triangle.",
        "solution": "Cumulative Reported Claim Triangle \nAccident Year 12 24 36 \n2013 300 300 350 \n2014 450 500  \n2015 100",
        "insight": "Build accident year reported claim triangles using transactional claim data."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "In 2015 the claims department began paying claims faster without changing the adequacy of case reserves. Produce and briefly discuss a triangle that demonstrates that this action has been successfully executed.",
        "solution": "Paid-to-Reported Triangle \nAccident Year 12 24 36 \n2013 0.333 0.5 1.0 \n2014 0.333 0.7  \n2015 0.5   \n \nThe paid-to-reported triangle shows an increase in the paid-to-reported ratio in calendar year \n2015 (latest diagonal) supporting the claims department statement that claims are being paid \nfaster without changing case reserves.",
        "insight": "Create a paid/reported diagnostic triangle to demonstrate the claims department has been paying claims faster."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Recommend and briefly justify a technique for calculating ultimate claims for this dataset, given the change noted in part c. above",
        "solution": "I would recommend using the reported development technique as the payment pattern has \nchanged so paid LDFs would not be accurate in predicting ultimate claims so the paid \ndevelopment technique is not accurate. The reported LDFs should still be accurate because it is \nnot affected by payment patterns and case adequacy has not changed.",
        "insight": "Know how to adjust the data and estimation techniques when there is a change in the claims handling process."
      }
    ]
  },
  {
    "id": "fall-2016-17",
    "number": 17,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-1"
    ],
    "points": 2,
    "questionPage": 20,
    "solutionPages": [
      67,
      68
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Actuary A and Actuary B are each performing a reserve analysis for a small insurance company. To enhance credibility:"
      },
      {
        "type": "line",
        "text": "• Actuary A relies only on internal data, aggregated across all lines of business."
      },
      {
        "type": "line",
        "text": "• Actuary B supplements internal data with industry data separately by line of business."
      },
      {
        "type": "line",
        "text": "Describe the benefits and deficiencies of each of these two strategies."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Describe the benefits and deficiencies of each of these two strategies.",
        "solution": "Actuary A Benefits: Combining [all lines of business] will give credibility if the mix of claims and \nproduct characteristics are relatively similar along with similar loss distribution and development \npatterns. \n \nActuary A Deficiencies: Different lines of business can have drastically different rates of \nsettlement, different claim severity and frequency, etc. Combining them will distort estimates. \nAlso, most estimation methods do not perform well where the mix of business is changing. \n \nActuary B Benefits: The benefit for Actuary B is that the industry data separated by lines of \nbusiness will keep the data homogeneous in the treatment of claims, keeping long-tailed lines \nand short-tailed lines separate. \n \nActuary B Deficiencies: The deficiency for Actuary B is that the underwriting and claim reserve \nstrategy may not be the same for the company and the industry which could cause inaccurate \nreserves.",
        "insight": "Understand the role of homogeneity and credibility of data in the process of estimating unpaid claims."
      }
    ]
  },
  {
    "id": "fall-2016-18",
    "number": 18,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-8",
      "reserving-9"
    ],
    "points": 2.75,
    "questionPage": 21,
    "solutionPages": [
      69,
      70,
      71
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary is estimating unpaid claims for a company using the data below as of December 31, 2015."
      },
      {
        "type": "table",
        "title": "Unpaid Claims Estimate",
        "headers": [
          "Accident Year",
          "On-Level Earned Premium",
          "Paid Claims ($000)",
          "Paid Bornhuetter–Ferguson ($000)",
          "Paid Development ($000)"
        ],
        "rows": [
          [
            "2012",
            "2000",
            "1,450",
            "0",
            "0"
          ],
          [
            "2013",
            "2000",
            "1,000",
            "102",
            "100"
          ],
          [
            "2014",
            "2000",
            "700",
            "373",
            "350"
          ],
          [
            "2015",
            "2000",
            "400",
            "622",
            "500"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The actuary uses the same expected claims ratio for all years."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate the expected claims ratio used in the Bornhuetter-Ferguson technique.",
        "solution": "AY Paid CDF % Unpaid ECR \n12 1 0 NA \n13 1.1 9.09% 0.561 \n14 1.5 33.30% 0.5595 \n15 (500+400)/400 = 2.25 1 - 1/2.25 = 55.5% 0.5598 \n    \n  \nAvg =  0.5601 \n \nECR = .56 is approximately equal for each AY. Selected avg and rounded to .01.",
        "insight": "Use their knowledge of the development and BF technique to back into the ECR used in the expected claims method."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Select an unpaid claims estimate for accident year 2015 from the two techniques given above and justify the selection.",
        "solution": "The implied 12-ultimate CDF from the paid development method is 900/400 = 2.25, which is somewhat \nhigh and could be leveraged to impact our ultimates and unpaid. Furthermore, the paid BF method \nconsistently produces higher estimates than the paid development method despite no change in \npremiums, thus I assume there was a decrease in the settlement rate. The BF method won't react to this \nas much so I will select its AY 2015 unpaid amount, $622,000.",
        "insight": "Choose one of two provided unpaid claim estimates and use their knowledge of either the paid development method or the BF method to justify their selection."
      },
      {
        "id": "c",
        "points": 1.5,
        "prompt": "After constructing these estimates, the actuary learns of a change in the claims department in 2014 that has led to slower claims payments. Discuss whether the unpaid claims estimate from each technique below would be overstated or understated when calculated without making any adjustments to recognize the slower claims payments: i. Expected claims technique ii. Paid Bornhuetter-Ferguson technique iii. Paid development technique",
        "solution": "Subpart (i) \nUnpaid claims would be correct; emergence is low because of slower payments, but we still expect the \nsame ultimate. E(claims) ultimate is unresponsive to emergence. \n \nSubpart (ii) \n\nThe paid BF technique will underestimate unpaid claims as the % unpaid will be too high (development \nfactors too low). The BF will underestimate less than paid development as the unpaid amounts are \ndetermined by an a priori claims ratio and % unpaid.",
        "insight": "Slower payments leave expected-claims ultimate unchanged and correctly raise its unpaid estimate. Paid Bornhuetter–Ferguson and paid development understate unpaid claims if old payment patterns are used."
      }
    ]
  },
  {
    "id": "fall-2016-19",
    "number": 19,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-7",
      "reserving-12"
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
        "text": "A company that self-insures has the following limited historical information:"
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
            "2012",
            "4,000",
            "6,000",
            "7,500",
            "8,250"
          ],
          [
            "2013",
            "5,000",
            "7,500",
            "9,375",
            ""
          ],
          [
            "2014",
            "6,000",
            "9,000",
            "",
            ""
          ],
          [
            "2015",
            "7,500",
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
            "2012",
            "1,600",
            "4,000",
            "6,000",
            "7,500"
          ],
          [
            "2013",
            "2000",
            "5,000",
            "7,500",
            ""
          ],
          [
            "2014",
            "2,400",
            "6,000",
            "",
            ""
          ],
          [
            "2015",
            "3,000",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Industry Benchmark Claims Development Factors",
        "headers": [
          "Age to Age",
          "Reported",
          "Paid"
        ],
        "rows": [
          [
            "60-Ult",
            "1.015",
            "1.100"
          ],
          [
            "48-60",
            "1.025",
            "1.150"
          ],
          [
            "36-48",
            "1.050",
            "1.250"
          ],
          [
            "24-36",
            "1.150",
            "1.500"
          ],
          [
            "12-24",
            "1.250",
            "2.500"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Case outstanding for accident year 2011 as of December 31, 2015 = $500,000."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Use the industry benchmark claims development factors to estimate the unpaid claims for accident year 2011 as of December 31, 2015.",
        "solution": "Case Development Factor = [paid CDF * (reported CDF – 1)]/[paid CDF – reported CDF] +1 \n= [1.1 * (1.015-1.1)]/(1.1-1.015) = 1.194 \nUnpaid Claims = Factor * case outstanding \n=1.194 * 500,000 = 597,059",
        "insight": "Calculate unpaid claims for AY 2011 using the case outstanding technique."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Assess the reasonableness of using the industry benchmark reported and paid claims development factors for this company.",
        "solution": "Reported Age-to-Age \nAY  12-24  24-36  36-48 \n12  1.5  1.25  1.1 \n13  1.5  1.25 \n14  1.5 \nSelected 1.5  1.25  1.1 \nIndustry 1.25  1.15  1.05 \nThe reported claims are developing much faster than the industry benchmarks. \n \nPaid Age-to-Age \nAY  12-24  24-36  36-48 \n12  2.5  1.5  1.25 \n13  2.5  1.5 \n14  2.5 \nSelected 2.5  1.5  1.25 \nIndustry 2.5  1.5  1.25 \nThe paid development/settlement pattern is in line with the industry. \n \nThe industry reported development CDF’s should not be used for this company. The industry paid \nCDF’s are appropriate to be used for this company. Overall, there is a difference in case reserve \nphilosophy for this company versus industry.",
        "insight": "Calculate development factors for the company using the given historical company data and then compare the calculated company factors to given industry benchmark factors."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Given the response to part b. above, discuss the reasonableness of the estimate in part a. above.",
        "solution": "The response in a) is not reasonable given that the reported LDF for the industry are not \nrepresentative for the company. Likely this LDF is too low, meaning the estimate in a) was too \nlow (understated).",
        "insight": "Indicate that the estimate in a) would be understated and therefore unreasonable."
      }
    ]
  },
  {
    "id": "fall-2016-20",
    "number": 20,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 1.5,
    "questionPage": 23,
    "solutionPages": [
      74,
      75
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary is calculating ultimate claim estimates for a long-tailed line of business using the frequency-severity technique using disposal rates. Given the following information:"
      },
      {
        "type": "line",
        "text": "• This line of business commonly has partial payments made on claims."
      },
      {
        "type": "line",
        "text": "• Recently the statute of limitations was extended, resulting in a significant increase in claim counts at later development periods compared to previous years."
      },
      {
        "type": "line",
        "text": "• The claims department has been strengthening case reserves for the last several years."
      },
      {
        "type": "line",
        "text": "• There has been significant claim inflation over the last several years."
      },
      {
        "type": "line",
        "text": "• The claims department has been attempting to settle claims faster."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Briefly describe two reasons the frequency-severity technique using disposal rates may be appropriate in the current situation.",
        "solution": "A disposal rate analysis uses only paid claims and will not be affected by the change in case \nreserves.",
        "insight": "Explain which conditions favor a disposal-rate frequency-severity method and why; naming a condition alone is insufficient."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe two reasons the frequency-severity technique using disposal rates may not be appropriate in the current situation",
        "solution": "Frequency development is distorted by the recent change in claims processing and increase of \nstatute of limitations. Historical frequency data may not be predictive of future frequency.",
        "insight": "Understand the third frequency severity method using disposal rates and understand what factors in the problem are inappropriate for the method."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly describe an adjustment to the frequency-severity technique using disposal rates for each of the issues listed in part b. above.",
        "solution": "Use Berquist-Sherman method to restate data based on changes to claim settlement rates and \nthen apply the frequency severity disposal rates technique.",
        "insight": "Candidates are expected to understand the third frequency severity method using disposal rates and understand adjustments can be made to the items listed in part b) to allow the method to be used."
      }
    ]
  },
  {
    "id": "fall-2016-21",
    "number": 21,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-9",
      "reserving-10"
    ],
    "points": 2.0,
    "questionPage": 24,
    "solutionPages": [
      76,
      77
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary is estimating the IBNR for a company using the data below, as of December 31, 2015."
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Reported Claims ($000)",
          "On-Level Earned Premium ($000)",
          "Reported Development Ultimate ($000)"
        ],
        "rows": [
          [
            "2012",
            "1,275",
            "2,400",
            "1,339"
          ],
          [
            "2013",
            "1,152",
            "2,300",
            "1,355"
          ],
          [
            "2014",
            "932",
            "2,200",
            "1,370"
          ],
          [
            "2015",
            "604",
            "2,100",
            "1,332"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The actuary estimates the expected claims ratio to be 60% for all years."
      },
      {
        "type": "line",
        "text": "• There is no loss trend."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Estimate the accident year 2015 IBNR using the Bornhuetter-Ferguson technique.",
        "solution": "2015 % Unreported = (1332 - 604) / 1332 = 0.5465 \n \n2015 IBNR = 0.5465 × 0.6 × 2100 = 688.65",
        "insight": "Calculate IBNR by calculating a percent unreported by constructing development patterns and then multiplying the given expected claims ratio by the premium."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Fully assess the reasonableness of the 60% expected claims ratio assumption.",
        "solution": "AY Claims Ratio \n2012 0.558 \n2013 0.5891 \n2014 0.6227 \n2015 0.6343 \n \nThe claims ratio appears to be steadily increasing and a 60% selection is understated for both \n2014 and 2015. I do not think it is a reasonable selection since the BF technique assumes the \nclaims ratio is constant.",
        "insight": "List out the claims ratios for the 4 accident years, note an upward trend, and opine that the upward trend in claim ratio invalidated the 60% ECR."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Recommend and briefly justify a technique that would be more appropriate than the Bornhuetter-Ferguson for this data set.",
        "solution": "The Cape Cod technique will use a claims ratio that is calculated from experience data. It will be \nmore responsive to the deteriorating claims ratio.",
        "insight": "Argue for either the Cape Cod method or the Reported Development method (the Paid Development method was also accepted)."
      }
    ]
  },
  {
    "id": "fall-2016-22",
    "number": 22,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 3.0,
    "questionPage": 25,
    "solutionPages": [
      78,
      79,
      80,
      81
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary working at an insurance company is using a frequency-severity technique to estimate ultimate claims. The company made an effort to close claims more quickly starting in 2014. Given the following information:"
      },
      {
        "type": "table",
        "title": "Closed Claim Counts as of (months)",
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
            "435",
            "600",
            "670",
            "705"
          ],
          [
            "2013",
            "520",
            "700",
            "740",
            ""
          ],
          [
            "2014",
            "600",
            "650",
            "",
            ""
          ],
          [
            "2015",
            "620",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Paid Claims ($000) as of (months)",
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
            "393",
            "650",
            "765",
            "776"
          ],
          [
            "2013",
            "511",
            "697",
            "744",
            ""
          ],
          [
            "2014",
            "637",
            "825",
            "",
            ""
          ],
          [
            "2015",
            "722",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported Claim Counts as of (months)",
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
            "600",
            "670",
            "720",
            "730"
          ],
          [
            "2013",
            "640",
            "715",
            "750",
            ""
          ],
          [
            "2014",
            "620",
            "690",
            "",
            ""
          ],
          [
            "2015",
            "650",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported Claims ($000) as of (months)",
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
            "560",
            "720",
            "780",
            "790"
          ],
          [
            "2013",
            "580",
            "720",
            "760",
            ""
          ],
          [
            "2014",
            "670",
            "850",
            "",
            ""
          ],
          [
            "2015",
            "760",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• 48-Ultimate reported claim count factor = 1.03."
      },
      {
        "type": "line",
        "text": "• 48-Ultimate closed claim count factor = 1.06."
      },
      {
        "type": "line",
        "text": "• 48-Ultimate paid severity factor = 1.15."
      },
      {
        "type": "line",
        "text": "• 48-Ultimate reported severity factor = 1.02."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Determine whether evidence exists to support that claims are closing more quickly starting in 2014.",
        "solution": "Paid to Rpt Triangle \nAY 12 24 36 48 \n12 0.70 0.903 0.981 0.982 \n13 0.88 0.968 0.979  \n14 0.951 0.971   \n15 0.95    \nIncrease in CY 14 & 15 closed claims (last 2 diagonals). This matches company’s effort.",
        "insight": "Use the available data to create one of three triangles that can provide evidence of increased claim closure rates and accurately interpret the triangle created in reference to the question posed."
      },
      {
        "id": "b",
        "points": 2.5,
        "prompt": "Calculate an appropriate frequency-severity estimate of ultimate claims for accident years 2014 and 2015.",
        "solution": "Since the rate of payment is increasing, I will use reported data to mitigate the effect of this \nchange. \nReported counts \nAY 12-24 24-36 36-48 48-Ult \n2012 1.117 1.075 1.014  \n2013 1.117 1.045   \n2014 1.113    \nSelected 1.116 1.062 1.014 1.03 \nAll-year average used since factors are similar. \n \nReported Severity \nAY 12 24 36 48 \n2012 0.933 1.075 1.083 1.082 \n2013 0.906 1.007 1.013  \n2014 1.081 1.232   \n2015 1.169    \n  \nReported Severity Age-Age \nAY 12-24 24-36 36-48 48-Ult. \n2012 1.152 1.007 0.999  \n2013 1.111 1.006   \n2014 1.140    \nSelected 1.139 1.007 0.999 1.02 \nAll-year average used since factors are similar \n \nAY 2014 Ult. Count = 690*1.067*1.014*1.03 \n                  = 765 \n          Ult, Sev. = 1.232*1.007*.999*1.02 \n                  = 1.264 \n        Ult. Claims = 967,000 \n \nAY 2015 Ult. Count = 650*1.116*1.062*1.014*1.03 \n                  = 805 \n          Ult, Sev. = 1.169*1.134*1.007*.999*1.02 \n                  = 1.36 \n        Ult. Claims = 1,095,000",
        "insight": "Recognize that the change in claim closure rate requires the use of reported rather than paid/closed data in the frequency-severity estimate."
      }
    ]
  },
  {
    "id": "fall-2016-23",
    "number": 23,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-9",
      "reserving-13"
    ],
    "points": 2.75,
    "questionPage": 26,
    "solutionPages": [
      82,
      83,
      84,
      85
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2015:"
      },
      {
        "type": "table",
        "title": "Case Outstanding ($) as of (months)",
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
            "3,970",
            "4,115",
            "2,730",
            "1,347"
          ],
          [
            "2013",
            "3,685",
            "3,760",
            "4,560",
            ""
          ],
          [
            "2014",
            "3,690",
            "7,380",
            "",
            ""
          ],
          [
            "2015",
            "6,230",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Paid Claims ($) as of (months)",
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
            "3,680",
            "7,360",
            "11,040",
            "13,800"
          ],
          [
            "2013",
            "3,520",
            "7,040",
            "10,560",
            ""
          ],
          [
            "2014",
            "3,360",
            "6,720",
            "",
            ""
          ],
          [
            "2015",
            "3,520",
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
            "2012",
            "238",
            "245",
            "171",
            "63"
          ],
          [
            "2013",
            "222",
            "230",
            "179",
            ""
          ],
          [
            "2014",
            "220",
            "255",
            "",
            ""
          ],
          [
            "2015",
            "270",
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
          "Written Premium"
        ],
        "rows": [
          [
            "2014",
            "34,500"
          ],
          [
            "2015",
            "37,500"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Annual severity trend = 10.0%"
      },
      {
        "type": "line",
        "text": "• Claims are fully developed by 48 months."
      },
      {
        "type": "line",
        "text": "• Accident year 2015 initial expected claim ratio = 65.0%"
      },
      {
        "type": "line",
        "text": "• Policies are annual, and are written uniformly throughout the year."
      },
      {
        "type": "line",
        "text": "• There have been no rate changes since 2013."
      },
      {
        "type": "line",
        "text": "• There is no premium trend."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.75,
        "prompt": "Calculate the unpaid claims for accident year 2015 using the reported Bornhuetter-Ferguson technique adjusting for the change in case reserve adequacy.",
        "solution": "Detrend average case outstanding by 10% per year to a common severity level, multiply by open counts, and add paid claims to build the adjusted reported triangle. Selected 12-to-ultimate factor = 1.985. Calendar-year 2015 earned premium = (34,500 + 37,500)/2 = 36,000. Bornhuetter–Ferguson IBNR = 0.65 × 36,000 × (1 − 1/1.985) ≈ 11,612. Add the 2015 case outstanding of 6,230: unpaid claims ≈ $17,842.",
        "insight": "Trend average case outstanding, rebuild reported claims, and use the adjusted pattern in Bornhuetter–Ferguson. Derive earned premium and add case outstanding to IBNR."
      }
    ]
  },
  {
    "id": "fall-2016-24",
    "number": 24,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-14"
    ],
    "points": 2.5,
    "questionPage": 27,
    "solutionPages": [
      86,
      87,
      88
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2014:"
      },
      {
        "type": "table",
        "title": "Paid Claims ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2011",
            "200",
            "560",
            "570"
          ],
          [
            "2012",
            "150",
            "250",
            "400"
          ],
          [
            "2013",
            "150",
            "350",
            ""
          ],
          [
            "2014",
            "50",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Received Salvage and Subrogation ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2011",
            "20",
            "90",
            "100"
          ],
          [
            "2012",
            "16",
            "40",
            "70"
          ],
          [
            "2013",
            "15",
            "56",
            ""
          ],
          [
            "2014",
            "5",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Ultimate claims for accident year 2014 = $150."
      },
      {
        "type": "line",
        "text": "• There is no development beyond 36 months."
      },
      {
        "type": "line",
        "text": "• A simple all-year average is used for all development factors."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Estimate the ultimate salvage and subrogation for accident year 2014 using the development technique.",
        "solution": "S&S - Age-to-Age Factors \nAccident Year 12-24 24-36  \n2011 4.500 1.111  2012 2.500 1.750  2013 3.733   \n    Selected AtA 3.578 1.431 \n AtU 5.118 1.431 \n \n    2014 Ult S&S : 5 x 3.578 x 1.431 = $25.59",
        "insight": "Calculate the ultimate salvage and subrogation using the development technique given paid claims and received salvage and subrogation triangles."
      },
      {
        "id": "b",
        "points": 1.25,
        "prompt": "Estimate the ultimate salvage and subrogation for accident year 2014 using a ratio approach.",
        "solution": "Ratio of S+S to Paid Claims \nAccident Year 12 24 36 \n2011 0.100 0.161 0.175 \n2012 0.107 0.160 0.175 \n2013 0.100 0.160  2014 0.100   \n    Ratio Development \nAccident Year 12-24 24-36  \n2011 1.607 1.092  2012 1.500 1.094  2013 1.600   2014    \n    Selected AtA 1.569 1.093 \n AtU 1.714 1.093 \n \n    Ultimate \nRatio: 0.100 x 1.714 = 0.1714 \n \n    2014 Ult S&S \n: 150 x 0.1714 = $25.72",
        "insight": "Calculate the ultimate salvage and subrogation using the ratio approach."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Given the following additional information for accident year 2015 as of December 31, 2015: • Ultimate claims = $175 • Salvage and subrogation received = $12 Recommend and briefly justify an ultimate salvage and subrogation estimate for accident year 2015.",
        "solution": "I recommend applying a selected S/S ratio of 0.1 with the S/S ratio CDF to get au ultimate of \n175(0.1)(1.1714) = $30 . The direct S/S development technique would be highly leveraged and \nwould overstate the estimate of S/S. The ratio approach is more stable and would produce a \nmore reasonable estimate.",
        "insight": "Recognize that the development factors in part a) were highly leveraged and would result in a more volatile answer whereas the ratio approach provided stability."
      }
    ]
  },
  {
    "id": "fall-2016-25",
    "number": 25,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-7",
      "reserving-16"
    ],
    "points": 1.75,
    "questionPage": 28,
    "solutionPages": [
      89,
      90,
      91
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Reported Claims Only ($) as of (months)",
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
            "9,000",
            "10,500"
          ],
          [
            "2014",
            "7,500",
            "11,250",
            ""
          ],
          [
            "2015",
            "9,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported ALAE ($) as of (months)",
        "headers": [
          "Accident Year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2013",
            "150",
            "900",
            "1,575"
          ],
          [
            "2014",
            "300",
            "1,125",
            ""
          ],
          [
            "2015",
            "525",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The 36 to ultimate development factor for reported claims only is 1.143."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Use the reported development technique to calculate ultimate claims only for all accident years.",
        "solution": "Reported Indemnity Claims - Age-to-Age \nFactors \nAccident \nYear 12-24 24-36 36-Ult \n2013 1.500 1.167  2014 1.500   2015    \n    Selected AtA 1.500 1.167 1.143 \nAtU 2.000 1.334 1.143 \n    Ultimate Indemnity Claims \nAccident \nYear \n   2013 12,000  \n  2014 15,000  \n  2015 18,000",
        "insight": "Calculate age-to-age factors using the reported claim triangle given, select age-to-ultimate factors and appropriately apply the LDFs to each accident year."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Evaluate the reasonableness of combining the reported claims only and reported ALAE provided above to estimate total unpaid liabilities.",
        "solution": "The development patterns appear noticeably different, and the ratio of ALAE to indemnity \nappears to be strengthening (or consistent after 24 Mos), Ideally, indemnity and ALAE would be \nestimated separately in this situation (or combine if consistent after 24 Mos).",
        "insight": "Compare ALAE and claims development factors, their ratio, and ALAE size before deciding whether to develop them together."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Assess the appropriateness of applying the development technique to the reported ALAE data provided above.",
        "solution": "The ratio of ALAE to indemnity appears to be increasing at 12 months, but not at 24 months in \nthe available data. This suggests the claims department may be recognizing future ALAE spend \nfaster than in prior years, and this change distorts the development technique.",
        "insight": "Evaluate if development method/chain ladder method is appropriate to develop reported ALAE, using the data given."
      }
    ]
  },
  {
    "id": "fall-2016-26",
    "number": 26,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-17"
    ],
    "points": 2.25,
    "questionPage": 29,
    "solutionPages": [
      92,
      93,
      94
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
          "Accident Year",
          "Exposures",
          "Ultimate Claims ($)"
        ],
        "rows": [
          [
            "2012",
            "10,000",
            "1,000,000"
          ],
          [
            "2013",
            "10,000",
            "1,020,000"
          ],
          [
            "2014",
            "10,000",
            "1,040,000"
          ],
          [
            "2015",
            "10,000",
            "1,061,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Reported Claims ($)",
          "Paid Claims ($)",
          "Paid ULAE ($)"
        ],
        "rows": [
          [
            "2012",
            "995,000",
            "990,000",
            "100,000"
          ],
          [
            "2013",
            "1,015,000",
            "1,010,000",
            "110,000"
          ],
          [
            "2014",
            "1,035,000",
            "1,030,000",
            "121,000"
          ],
          [
            "2015",
            "1,056,000",
            "1,051,000",
            "133,100"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Case outstanding as of December 31, 2015 = $180,000."
      },
      {
        "type": "line",
        "text": "• IBNR as of December 31, 2015 = $50,000."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Using the classical paid-to-paid technique, estimate the unpaid ULAE as of December 31, 2015.",
        "solution": "Calendar Paid Paid ULAE \nYear Claims ULAE Ratio \n2012 990,000 100,000 0.101 \n2013 1,010,000 110,000 0.109 \n2014 1,030,000 121,000 0.117 \n2015 1,051,000 133,100 0.127 \n \nSince ratio increases each year, pic, most recent ratio of 0.127 \n \nUnpd ULAE = 0.127*(50,000+180,000*.5)=17,780",
        "insight": "Know how to calculate ULAE ratios by calendar year using the classical paid-to-paid technique and make a ULAE ratio selection."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Fully discuss how a key assumption of the classical technique is being violated in part a. above.",
        "solution": "Classical technique assumes ULAE inflation is the same as claims inflation \n \n \nPd Pd \nCY ULAE Claims \n2012-2013 10% 2.02% \n2013-2014 10% 1.98% \n2014-2015 10% 2.04% \n   \nULAE inflates at 10% per year, while claims inflate about 2% per year => pd to pd approach isn’t \nappropriate",
        "insight": "Know the key assumption that is being violated."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Discuss whether or not the Kittel refinement will correct the issue identified in part b. above.",
        "solution": "Kittel Refinement will not correct the issue as it also assumes claims and ULAE inflate at same \nrate \nKittel refinement is intended to correct for increasing book size, which isn’t evident since \nexposures are constant",
        "insight": "Know the Kittel refinement and discuss if the refinement will correct the violated issue."
      }
    ]
  },
  {
    "id": "fall-2016-27",
    "number": 27,
    "exam": "Fall 2016",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 1.75,
    "questionPage": 30,
    "solutionPages": [
      95,
      96
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Claim Count Estimates as of December 31, 2014 and 2015",
        "headers": [
          "Accident Year",
          "2014 Selected Ultimate Claim Counts",
          "2014 Reported Claim Counts",
          "2015 Reported Claim Counts"
        ],
        "rows": [
          [
            "2013",
            "7,500",
            "1,000",
            "3,500"
          ],
          [
            "2014",
            "8,600",
            "600",
            "3,400"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Maturity (months)",
          "Cumulative Percent of Claim Counts Reported"
        ],
        "rows": [
          [
            "36",
            "55%"
          ],
          [
            "24",
            "30%"
          ],
          [
            "12",
            "8%"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Compare actual reported claim count emergence to expected claim count emergence on reported claim counts in calendar year 2015.",
        "solution": "AY 2013: (7,500 – 1000) * (0.55 – 0.30) / (1 - 0.30) = 2,321 \nAY 2014: (8,600 – 600) * (0.30 – 0.08) / (1 – 0.08) = 1,913 \nTotal Expected Emergence in CY 2015 = 2,321 + 1,913 = 4,234 \n \nAY 2013: (3,500 – 1000) = 2,500 \nAY 2014: (3,400 – 600) = 2,800 \nTotal Actual Emergence in CY 2015 = 2,500 + 2,800 = 5,300 \n \n5,300 > 4,234 \n \nBoth accident years greatly underestimate the expected emergence",
        "insight": "Calculate expected and actual 2015 claim-count emergence for both accident years and compare their levels."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Briefly describe a potential limitation of the actual vs. expected calculation performed in part a. above and propose an alternative calculation that addresses this limitation.",
        "solution": "We know that claims tend to be reported earlier in the year, however this approach looks at the \nyear as a whole. Claims reported is high at the beginning but decreases throughout the year. I \nwould instead look at shorter time increments.",
        "insight": "Name a limitation of actual-versus-expected emergence and describe an alternative calculation that addresses it."
      }
    ]
  }
];

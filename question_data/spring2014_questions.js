// Official Spring 2014 PDF; CBT point grid.
window.SPRING_2014_QUESTIONS = [
  {
    "id": "spring-2014-1",
    "number": 1,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-5"
    ],
    "points": 3.5,
    "questionPage": 3,
    "solutionPages": [
      28,
      29,
      30
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company writes annual policies. The history of rate changes is as follows:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Effective Date",
          "Overall Rate Change"
        ],
        "rows": [
          [
            "January 1, 2010",
            "+4.2%"
          ],
          [
            "March 1, 2010",
            "+0.3%"
          ],
          [
            "January 1, 2012",
            "-1.7%"
          ],
          [
            "June 1, 2013",
            "+1.0%"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Calculate the on-level factor to current rate level for calendar year 2011 earned premium, assuming all policies are written uniformly throughout the year.",
        "solution": "The on-level factor for calendar-year 2011 earned premium is current rate level 1.03763 divided by the historical average rate level 1.04309, or 0.99477. The +4.2% change may be included in both numerator and denominator or cancelled consistently.",
        "insight": "Be able to calculate on-level factors to re-state calendar year premium at the current rate level, using the parallelogram method."
      },
      {
        "id": "b",
        "points": 2,
        "prompt": "Assume that 25% of policies are written on the first day of the year and the remaining policies are written evenly throughout the year. Calculate the on-level premium factor to current rate level for policies in-force on February 1, 2012.",
        "solution": "For policies in force on February 1, 2012, account for 25% written on January 1 and the remaining 75% written uniformly. The weighted historical average rate level is 1.03938; current rate level is 1.03763. The on-level factor is 1.03763 / 1.03938 = 0.99832.",
        "insight": "Be able to calculate on-level factors to re-state in-force premium at the current rate level, using the parallelogram method."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Assuming all policies are written uniformly throughout the year, and without performing additional calculations, discuss the effect on the on-level premium factor for calendar year 2011 if the policy term was 2 years instead of annual.",
        "solution": "A two-year policy term delays the earning of prior rate levels. The weight on the older 1.04513 rate level falls and the weight on 1.000 rises, so the historical average rate level falls and the on-level factor increases.",
        "insight": "Longer policy terms change the historical average rate level and therefore the on-level factor; explain the direction without recalculating."
      }
    ]
  },
  {
    "id": "spring-2014-2",
    "number": 2,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 3.25,
    "questionPage": 4,
    "solutionPages": [
      31,
      32
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A workers compensation insurance company uses the following data for ratemaking:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Year",
          "Industry Loss Cost Premium ($000)",
          "Annual Payroll Level Change",
          "Historical Average Experience Modification Factor"
        ],
        "rows": [
          [
            "2011",
            "2,100",
            "2.50%",
            "0.99"
          ],
          [
            "2012",
            "2,500",
            "2.00%",
            "0.98"
          ],
          [
            "2013",
            "2,600",
            "1.00%",
            "0.97"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Year",
          "Reported Indemnity Claims ($000)",
          "Annual Impact on Indemnity Claims Due to Benefit Level Changes",
          "Indemnity Development Factor to Ultimate",
          "Projected Ultimate Medical-Only Claims ($000)"
        ],
        "rows": [
          [
            "2011",
            "850",
            "2.00%",
            "1.2",
            "735"
          ],
          [
            "2012",
            "670",
            "1.50%",
            "1.8",
            "834"
          ],
          [
            "2013",
            "460",
            "0.50%",
            "2.7",
            "900"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Expected future wage level change = 1.5% per year."
      },
      {
        "type": "line",
        "text": "• Expected effect on indemnity claims due to future benefit level changes = 1 .0% per year."
      },
      {
        "type": "line",
        "text": "• Projected average experience modification factor= 0.98."
      },
      {
        "type": "line",
        "text": "• Projected LAE percentage (as a percent of losses) = 15.0%."
      },
      {
        "type": "line",
        "text": "• Assume no other loss cost inflation other than indemnity benefit level changes."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3.25,
        "prompt": "Calculate the projected ultimate loss & LAE ratio for year 2015.",
        "solution": "Premium: \nYear  Premium  Payroll chg  Mod  Trend  Total \n2011  2100  X 1.02 x 1.01  X .98 / .99  X 1.015^2  = 2206.296 \n2012  2500  X 1.01  X .98 / .98  X 1.015^2  = 2601.318 \n2013  2600   X .98 / .97  X 1.015^2  = 2706.199 \nTotal = 7513.813 \nLoss & LAE: \nYear  Loss  Benefit chg  Dev  Trend  Total Indem Medical  LAE  Total \n2011  850  X 1.015 x 1.005  X 1.2  X 1.01^2  = 1661.39  + 735  = x 1.15  = 2065.849 \n2012  670  X 1.005  X 1.8  X 1.01^2  = 1236.392  + 834  = x 1.15  = 2380.951 \n2013  460   X 2.7  X 1.01^2  = 1266.964  + 900  = x 1.15  = 2492.009 \nTotal  = 6938.809 \n6938.809/7513.8153 = 92.35% \nNote: For the trending adjustments, a trending period of either 2.0 or 2.5 years was considered \nacceptable, as long as the same trending period was used for both calculations.",
        "insight": "Know how to adjust historical data to current level and then to expected future benefit levels."
      }
    ]
  },
  {
    "id": "spring-2014-3",
    "number": 3,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-4"
    ],
    "points": 2.25,
    "questionPage": 5,
    "solutionPages": [
      33,
      34,
      35
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "For a single personal auto policy with an annual policy term:"
      },
      {
        "type": "line",
        "text": "• A = Calendar year 2013 written exposures as of December 31, 2013."
      },
      {
        "type": "line",
        "text": "• B = Calendar year 2012 earned exposures + calendar year 2013 earned exposures as of February 1, 2013."
      },
      {
        "type": "line",
        "text": "• C = Calendar year 2013 unearned exposures as of February 1, 2013."
      },
      {
        "type": "line",
        "text": "• D = In-force exposures as of February 1, 2013."
      },
      {
        "type": "line",
        "text": "• A < 0 < B < C < D."
      },
      {
        "type": "line",
        "text": "• Exposure is earned uniformly throughout the policy term."
      },
      {
        "type": "line",
        "text": "• This policy cancels mid-term."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Provide the range of valid effective dates for this policy.",
        "solution": "Policy is effective in 2012 since A<0.  Since C > B and this is an annual term there must be no less than 6 \nmonths left in the policy term on 2/1/13. Valid range 8/2/12 – 12/31/12.  8/2/12 was used since C \nstrictly greater than B.",
        "insight": "A very common error was the failure to correctly interpret the inequality B<C to recognize that 8/2/12 and not 8/1/12 was the correct start date."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Provide the range of valid dates of the mid-term cancellation for this policy.",
        "solution": "Must be written no later than Dec 31, 2012 => latest cancellation date = Dec 30, 2013 \nInforce at Feb 1, 2013 => earliest cancellation date = Feb 2,2013 \nSo Feb 2, 2013 through Dec 30, 2013",
        "insight": "Candidates often incorrectly interpreted “mid-term cancellation” to mean the exact mid-point of the policy term causing them to determine 6/30/13 or 7/1/13 as the last possible cancellation date."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Demonstrate that it would never be possible to have A < O < B < C < D if B, C, and D were as of July 1, 2013 instead of February 1, 2013.",
        "solution": "If B,C,D were as of 7/1/2013 and given the policy was written in 2012 (A<0) and cancelled in 2013 but \nwas still in effect on 7/1/2013 (D>0): then B, total portion of the policy earned as of 7/1/2013 is ≥ 1/2 .  \nIn that case, C (portion of policy unearned) cannot be greater than B, since B+C = 1.",
        "insight": "Support the date ordering with the policy effective date, observation date, cancellation date, and their constraints."
      }
    ]
  },
  {
    "id": "spring-2014-4",
    "number": 4,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 2.0,
    "questionPage": 6,
    "solutionPages": [
      36,
      37,
      38,
      39
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A product manager is proposing to revise rates in the scenarios described below. As an actuary, briefly assess the approach taken in each scenario and, if necessary, recommend an adjustment."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "The loss provision in the indicated rate for next year is calculated as historical reported loss divided by exposure.",
        "solution": "• I would use developed to ultimate and trended losses, divided by trended exposures. Untrended \nand historical losses and exposures will not give an accurate loss cost for the projected period in \nwhich the rates will be in effect. \n• Ok to use loss/exp if doing pure premium method but losses should be trended and fully \ndeveloped. If not, rates will be distorted. (understated)",
        "insight": "Assess that using unadjusted historical data will not produce an accurate prospective estimate of the rate being calculated."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "The indicated rate for next year is calculated using projected losses and loss adjustment expenses based on historical experience. In the next month, the company will be revising its underwriting guidelines, increasing the minimum deductible from $500 to $1,000.",
        "solution": "• Loss, LAE provision will be overstated since increase in min deductible will lead to fewer covered \nlosses. Restate historical losses and LAE with $1000 min deductible. \n• The indicated rate is based on historical losses projected to future level. If the trend used to \nproject the losses already incorporates the expected change of deductibles, then no adjustment \nis needed. \n• Should evaluate the appropriateness of the deductible factors used. If correct, the trend should \nnot be a problem.",
        "insight": "Assess that, with the increased deductible, losses would be overstated in the future period."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "The indicated rate for a classification is calculated based on one year of historical data that includes 25 earned car years.",
        "solution": "• Data has low credibility due to low number of exposures. Extend experience period to include \nmore than one year to increase credibility. \n• Include more relevant data from benchmarks such as ISO or use competitor’s info to calculate a \ncomplement of credibility. The 25 earned car years and 1 year of historical data is not enough to \nprovide a stable and accurate forecast for future experience. \n• There is insufficient data to produce a credible classification (both in terms of number of car and \nin terms of number of year). The classification can be pooled with other similar, larger groups to \nform a more statistical significant group.",
        "insight": "Assess that the data given was not credible enough to be used on its own."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "The indicated rate change is calculated using the ratio of developed, trended historical losses capped at $100,000 to on-level total earned premium. Loss trend factors and loss development factors are determined using data limited to $100,000. The company has a significant number of claims in excess of $100,000.",
        "solution": "• The losses above $100,000 still need to be added back in as a large loss load. If the analysis \nexcludes these large losses all together, then losses will be underestimated and rates will be \ninadequate. \n• Since the company has a significant number of claims in excess of $100,000, we should use \nuncapped historical losses data to calculate the indication rate. The capped data does not reflect \nthe true experience, and the rate might be too low by using the capped data. \n\n• I would use the higher capping than 100K.The goal of ratemaking is to include as many losses as \npossible into the project process as long it doesn’t introduce to much volatility.  I would increase \nthe capping and for the “shock” losses above a higher capping say 250K or 500K. I would add an \nILF factor or large loss load.",
        "insight": "Assess that not including the losses would make the rate inadequate."
      }
    ]
  },
  {
    "id": "spring-2014-5",
    "number": 5,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-8",
      "ratemaking-12"
    ],
    "points": 6.5,
    "questionPage": 7,
    "solutionPages": [
      40,
      41,
      42
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A countrywide insurer's rate filing for a state contains the following:"
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• The filed rates are planned to be in effect for policy year 2015."
      },
      {
        "type": "line",
        "text": "• There was a rate change of +7.5%, effective 7/1/2013. The prior rate change before that was in 2009."
      },
      {
        "type": "line",
        "text": "• Loss trend is 3% annually."
      },
      {
        "type": "line",
        "text": "• ULAE as a ratio of loss and ALAE = 10%."
      },
      {
        "type": "line",
        "text": "• Profit and contingencies provision = 5%."
      },
      {
        "type": "line",
        "text": "• Variable expense ratio = 20%."
      },
      {
        "type": "line",
        "text": "• The company purchased new software in 2010 to assist with the processing of claims."
      },
      {
        "type": "line",
        "text": "• Use an average of 2012 and 2013 for the rate level indication."
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Earned Premium ($000)",
          "Accident Year",
          "Reported Loss & ALAE ($000)"
        ],
        "rows": [
          [
            "2012",
            "1,250",
            "2012",
            "750"
          ],
          [
            "2013",
            "1,400",
            "2013",
            "500"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Current Level Average Policy Premium",
          "Fixed Expense Ratio"
        ],
        "rows": [
          [
            "2009",
            "$600",
            "10%"
          ],
          [
            "2010",
            "$520",
            "23%"
          ],
          [
            "2011",
            "$540",
            "15%"
          ],
          [
            "2012",
            "$560",
            "12%"
          ],
          [
            "2013",
            "$583",
            "10%"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported Loss & ALAE Development Factors",
        "headers": [
          "Accident Year",
          "12-24 Months",
          "24 - 36 Months",
          "36-48 Months",
          "48-60 Months",
          "60+ Months"
        ],
        "rows": [
          [
            "2006",
            "1.45",
            "1.35",
            "1.10",
            "1.02",
            "1.00"
          ],
          [
            "2007",
            "1.50",
            "1.30",
            "1.15",
            "1.08",
            "1.00"
          ],
          [
            "2008",
            "1.40",
            "1.35",
            "1.10",
            "1.03",
            "1.00"
          ],
          [
            "2009",
            "1.50",
            "1.30",
            "1.08",
            "1.02",
            ""
          ],
          [
            "2010",
            "1.85",
            "1.15",
            "1.10",
            "",
            ""
          ],
          [
            "2011",
            "1.75",
            "1.15",
            "",
            "",
            ""
          ],
          [
            "2012",
            "1.80",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported Loss & ALAE Development Factor Averages",
        "headers": [
          "Selection",
          "12–24",
          "24–36",
          "36–48",
          "48–60",
          "60–Ultimate"
        ],
        "rows": [
          [
            "All Year Average",
            "1.61",
            "1.25",
            "1.11",
            "1.04",
            "1.00"
          ],
          [
            "5 Year Average",
            "1.66",
            "1.23",
            "1.11",
            "NA",
            "NA"
          ],
          [
            "3 Year Average",
            "1.80",
            "1.20",
            "1.09",
            "1.04",
            "1.00"
          ],
          [
            "Average Excluding High/Low",
            "1.60",
            "1.25",
            "1.10",
            "1.03",
            "1.00"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 5.5,
        "prompt": "Calculate the indicated rate change. Justify the selections of premium trend, all development factors, and the fixed expense ratio.",
        "solution": "Premium \n2012: 1250*(1.075/1.00)*1.04^3.5=1541 \n2013: 1400*(1.075/((1/8)*1.075+(7/8)))*1.04^2.5=1645 \nTrend using CL APP = 4% \nTrend period 7/1/## to 1/1/2016 \n \nLosses \n2012: 750*1.30295(24-ult)*1.03^3.5 (loss trend) * 1.1 (ULAE)=1192 \n2013: 2.3453*10.3^2.5*1.1=1389 \nTrend 7/1/## \nto 1/1/2016 \n \nAge to age \n12-24: 1.8 – used 3 yr. avg because of new software impact (past no longer ind. of future or similar) \n24-36: 1.15 – 2009 and prior is different due to new software \n36-48: 1.10 – used avg x Hi/Low as experience seems to\n be similar even with software change \n48-60: 1.03 \n60-Ult: 1.00 – no tail \n \nFixed Expense \n-exclude 2010 (likely high due to new software) \n-simple avg = 11.75% \n \nLR 2012: 0.774 \nLR 2013: 0.844 \nAvg: 0.809 \n \nInd = (0.809 + 0.1175)/(1-.05-.2) – 1 = 23.5%",
        "insight": "Premium: The candidate was expected to be able to bring premiums to current rate level using the parallelogram method and to select and apply a one-step premium trend."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "The chief actuary is concerned about the credibility of company data in this state and would like to begin using credibility weighting with the company's countrywide loss costs. Assess this approach, considering two desirable qualities of a credibility complement.",
        "solution": "Using large groups containing subject experience for rate indications makes sense, so long as the state \ndata does not represent a large portion of CW loss cost so that there is some independence in \ncomplement. Also CW data is usually available, easy to compute",
        "insight": "Understand desirable qualities of a credibility complement and to evaluate the use of countrywide data with respect to each of the two qualities."
      }
    ]
  },
  {
    "id": "spring-2014-6",
    "number": 6,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2.5,
    "questionPage": 8,
    "solutionPages": [
      43,
      44
    ],
    "sourceBlocks": [],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "An auto insurance company is designing a risk classification system. The actuary has determined that the number of hours a driver sleeps each night is a predictive rating variable. Recommend whether the company should include this variable in their risk classification system. Justify this recommendation with respect to four relevant considerations.",
        "solution": "1. This would be hard to obtain and verify. You would have to rely on self-reporting which would be \nsubject to unintentional mis-measurement or would encourage moral hazard and people would lie \nabout it. Once they report it, it would be very difficult to verify. On this criteria, I would not \nrecommend it. \n2. Privacy- information about sleeping habits would be considered a personal and unnecessarily \nintrusive question. People may be reluctant to discuss such matters with an insurance company. \nThis criteria would not recommend it. \n3. This would seem to have a causal relationship to auto losses. People would be able to understand \nthat not sleeping can increase the risk of losses. So from this standpoint, it would seem ok. \n4. Controllability- People will be more accepting if they can control to some extent what level of rating \nvariable they belong to. Because you can adjust the hours you sleep, using this criteria, it may be \nmore accepted. \n \nOverall I would not use this rating variable. The privacy and moral hazard issues would outweigh the \nbenefits.",
        "insight": "Candidates needed to know criteria for evaluating rating variables that are considered for use in a risk classification system."
      }
    ]
  },
  {
    "id": "spring-2014-7",
    "number": 7,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-12"
    ],
    "points": 2.25,
    "questionPage": 9,
    "solutionPages": [
      45,
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
          "Limit",
          "Premium",
          "Increased Limits Factor"
        ],
        "rows": [
          [
            "100,000",
            "1,000,000",
            "1.00"
          ],
          [
            "250,000",
            "500,000",
            "2.00"
          ],
          [
            "500,000",
            "400,000",
            "2.75"
          ],
          [
            "750,000",
            "300,000",
            "3.25"
          ],
          [
            "1,000,000",
            "200,000",
            "3.50"
          ],
          [
            "TOTAL",
            "1,900,000",
            ""
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Given that the losses capped at $250,000 are $1,500,000, calculate a complement of credibility for the losses in the layer between $500,000 and $750,000.",
        "solution": "Complement = ( (3.25 – 2.75) / 2.00 )* $1,500,000 = $375,000",
        "insight": "Apply the equation defined by the method in the article and apply it correctly."
      },
      {
        "id": "b",
        "points": 1.25,
        "prompt": "Assume that the expected total limits loss ratio is 65%. Using the limits analysis approach, calculate the complement of credibility for the layer between $500,000 and $750,000.",
        "solution": "Complement = 0.65 [ 300,000 ((3.25 – 2.75) /3.25) + 200,000 ((3.25 – 2.75) / 3.5)] = $30,000 + $18,571 = \n$48,571",
        "insight": "Use the equation defined by the method in the article and apply it correctly."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Provide two criticisms of using the limits analysis approach to develop a complement of credibility.",
        "solution": "Accepted answers included any one of the following: \n• Assumes the same expected loss ratio for all levels \n• Not logically related to the losses in the layer \n• Biased \n• Inaccurate \n• Volatile and thin data in the upper layers may not be reliable \n• Takes time to compute \n• Losses below the attachment point may not be clearly related to losses above the attachment \npoint \n• Does not use actual losses in calculating the complement – could be inaccurate \n• Distribution of excess losses may be very different from the loss distribution underlying the ILFs \n• Relies on industry factors that may not apply to the company",
        "insight": "State two distinct criticisms of the limits analysis approach, which was to be applied in part b."
      }
    ]
  },
  {
    "id": "spring-2014-8",
    "number": 8,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2.25,
    "questionPage": 10,
    "solutionPages": [
      48,
      49
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A private passenger auto insurance company uses only two rating variables: territory and gender. The distribution of earned exposures is:"
      },
      {
        "type": "table",
        "title": "Earned Exposures",
        "headers": [
          "Territory",
          "Male",
          "Female"
        ],
        "rows": [
          [
            "1",
            "180",
            "120"
          ],
          [
            "2",
            "500",
            "500"
          ],
          [
            "3",
            "350",
            "150"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Loss and LAE ($) by Territory",
        "headers": [
          "Territory",
          "Loss and LAE ($)"
        ],
        "rows": [
          [
            "1",
            "11,127"
          ],
          [
            "2",
            "51,335"
          ],
          [
            "3",
            "32,983"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Current Territory Relativities",
        "headers": [
          "Territory",
          "Relativity"
        ],
        "rows": [
          [
            "1",
            "0.75"
          ],
          [
            "2",
            "1"
          ],
          [
            "3",
            "1.125"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Current Gender Relativities",
        "headers": [
          "Gender",
          "Relativity"
        ],
        "rows": [
          [
            "Male",
            "1"
          ],
          [
            "Female",
            "0.8"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Assume no adjustments are made to the relativities for expense considerations."
      },
      {
        "type": "line",
        "text": "• Assume territory 2 remains the base territory."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.25,
        "prompt": "For a revenue neutral overall change, calculate an indicated relativity change for policyholders in territory 3, accounting for any distortion that gender rating may cause.",
        "solution": "Territory  Loss & LAE  Adj Exp  PP  Ind Rel  Ind Rel to \nBase \n1  11,127  276  40.315  0.6953  0.7068 \n2  51,335  900  57.039  0.9837  1.0 \n3  32,983  470  70.177  1.2102  1.2303 \n  95,445  1,646  57.986    \n \nAdj Exp = Male Exp (1.0) + Female Exp (0.8) \nPP = (Loss + LAE)/Adj Exp \nInd Rel = PP/(total PP) \nInd Rel to Base = Ind Rel/ territory 2 Ind Rel \n \nTerritory 3 indicated relativity change: \n1.2303/1.125 – 1 = 9.36%",
        "insight": "The candidates needed to know how to use the adjusted pure premium method to calculate the indicated relativity change by territory or to calculate the overall revenue neutral rate change by territory."
      }
    ]
  },
  {
    "id": "spring-2014-9",
    "number": 9,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-10"
    ],
    "points": 2,
    "questionPage": 11,
    "solutionPages": [
      50,
      51
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurer is considering using credit score to further segment its homeowners book of business. The insurer has developed a generalized linear model to evaluate different variables' contribution to expected frequency of wind claims. The following diagnostic chart displays the results of a countrywide analysis performed on one year of data from a generalized linear model:"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Using the generalized linear model output, as well as other considerations, justify whether the insurer should add credit score to the homeowners rating plan for the wind peril.",
        "solution": "The GLM analysis shows that credit score is a statistically significant variable for wind frequency.  All \nlevels have standard errors close to the indicated relativity and moving in the same direction.  For the \npoor level, both standard errors are higher than the fair level, which suggest these levels are significantly \ndifferent.  The poor level does not have a lot of volume (around 5% of total volume), thus it is not very \ncredible compared to the other two levels.  This has to be taken into account when selecting relativities.   \nThis variable is objective, well-defined, easy to verify, and cannot be manipulated.  Therefore, it is very \npractical to use it and it is recommended for this criteria.  \nThe insured can improve her credit score with time, thus she would have the power to control this in the \nfuture and has a financial incentive to do so.  Socially, this variable is not always well perceived as \ninsured often lack of understanding of its relation to expected loss.  Also, it may make insurance more \nunaffordable if poor credit risks are significantly overcharged. \nOverall, strong predictive power and easiness of use of this variable outweigh potential shortcomings, \ntherefore it is suggested that it is used.",
        "insight": "Know how to interpret GLM output as provided in the question."
      }
    ],
    "figure": {
      "src": "assets/exam-graphs/spring-2014-q9.png",
      "title": "Credit score GLM diagnostic",
      "alt": "Wind frequency relativity and exposures by credit score, with two-standard-error bounds"
    }
  },
  {
    "id": "spring-2014-10",
    "number": 10,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2.25,
    "questionPage": 12,
    "solutionPages": [
      52,
      53,
      54,
      55
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A company is implementing a recently approved private passenger automobile rate revision. The indicated rate change was 20% while the requested rate change was 8%."
      },
      {
        "type": "table",
        "title": "Multiplicative Rating Factor 1",
        "headers": [
          "Rating factor",
          "Exposures (000)",
          "Rate differential"
        ],
        "rows": [
          [
            "1",
            "150",
            "1.350"
          ],
          [
            "2",
            "500",
            "1.000"
          ],
          [
            "3",
            "100",
            "0.990"
          ],
          [
            "Overall",
            "750",
            "1.069"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Multiplicative Rating Factor 2",
        "headers": [
          "Rating factor",
          "Exposures (000)",
          "Rate differential"
        ],
        "rows": [
          [
            "A",
            "250",
            "0.870"
          ],
          [
            "B",
            "300",
            "1.250"
          ],
          [
            "C",
            "200",
            "1.000"
          ],
          [
            "Overall",
            "750",
            "1.057"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Additive Discount",
          "Exposures (000)",
          "Rate Differential"
        ],
        "rows": [
          [
            "Yes",
            "450",
            "0.050"
          ],
          [
            "No",
            "300",
            "0.000"
          ],
          [
            "Overall",
            "750",
            "0.030"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Briefly describe three reasons the company may have decided to propose a rate increase substantially lower than the indicated rate change.",
        "solution": "Answers receiving full credit include: \n• Regulatory reasons.  Examples: \no There may be regulatory restrictions that don’t allow companies to take over an 8% \nchange. \no May be subjected to a maximum rate increase from DOI. \no If a rate change of 20% was allowed, the company may be required to notify \npolicyholders who are having a rate increase of x% or more.  This could impact renewals, \nand the added cost of this may not be worth it. \no Regulators may not agree with an underlying assumption used in the rate indication and \nsuggest a different assumption that produces a lower rate indication. \no Might require public disclosure or press conference to implement a 20% change. \n• Operational reasons.  Examples: \no It may be costly to implement the whole rate change in the system, especially if the \nrates change substantially. \no The rate increase may require a major change to rating systems and the company does \nnot have resources to do that at this time. \n• Customer impacts/retention reasons.  Examples: \no Company may not want to lose policyholders who would be prompted to shop for lower \nrates if rate increases excessively. \no Perhaps they want to keep the rate change at below double digits to avoid customers \nfrom shopping around, and they’ll increase rates more next year. \n• Competitive/marketing reasons.  Examples: \no They may want to remain competitive to target new business. \no For competitive reasons, the company may decide to limit the amount of a rate \nincrease. \n• Longer term pricing reasons.  Examples: \no Lifetime value of customer – perhaps the future value of writing customers now \noutweighs the value of implementing the full rate change. \no Asset Share Pricing used – long term profitability has been predicted, so although rates \nmay produce a net loss this renewal, could be profitable in the future if policies are \nretained.",
        "insight": "Give distinct business reasons for proposing less than the indicated increase, such as competitive position, retention, or implementation limits."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly discuss two actions the company could take to offset the pricing shortfall.",
        "solution": "Answers receiving full credit include: \n• Expense reductions.  Examples: \no Can lower the expenses, such as less advertising or lowering wages of employees. \no They can reduce expenses to try and make up for the shortfall. \no Decrease expenses (fixed or variable). \n• Loss cost reductions (exceeding premium reductions).  Examples: \no The company could offer incentives to educate drivers about safety features or courses \nand attempt to decrease losses that way. \no The company could try and reduce overall coverage without taking an offsetting rate \nchange. \no Implement better safety incentives for insureds to help control losses. \n• Increase investment income.  Example: \no Adopt a more aggressive investment strategy. \n• Reduce underwriting profit target.  Example: \no Accept a lower profit provision to balance the fundamental insurance equation. \n• Legal action.  Example: \no By legal actions to challenge regulations \n• Shift to more profitable business.  Examples: \no Focus on marketing to groups that are appropriately priced; avoid underpriced groups. \no Change underwriting guidelines to write more profitable business.",
        "insight": "Identify two practical ways to address the pricing shortfall outside the proposed rate change."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "Calculate the proposed base rate to achieve the overall 8% rate increase assuming no change in any rate differentials. Use the following information from the company's rate filing: • Current average premium per vehicle = $450. Vehicles are rated as follows: • Indicated rate change = 20%. Pp = (B * R1 * R2 * (1-D) + Ap) • Requested rate change = 8%. Where Pp = Proposed policy premium • Fixed expense per vehicle = $35. B = Base Rate R1 = Multiplicative Rating Factor 1 R2 = Multiplicative Rating Factor 2 D = Additive Discount Ap = Additive Per Exposure Expense Fee",
        "solution": "Proposed Base Rate * 1.069 * 1.057 * (1-0.030) + 35 = 450 * 1.080 \nProposed Base Rate = 411.48",
        "insight": "Use the exposure-weighted rating factors to solve for the base rate that yields an 8% overall increase."
      }
    ]
  },
  {
    "id": "spring-2014-11",
    "number": 11,
    "exam": "Spring 2014",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 2.0,
    "questionPage": 13,
    "solutionPages": [
      56,
      57,
      58,
      59
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "A large commercial insured purchased a retrospectively rated annual policy to cover its workers compensation exposure in 2014. The first computation of the retrospective premium will occur on April 1, 2015, based on the following information and provisions:"
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
            "Limited Reported Losses valued as of April 1, 2015",
            "200,000"
          ],
          [
            "Standard Premium",
            "695,000"
          ],
          [
            "Net Insurance Charge",
            "0.181"
          ],
          [
            "Minimum Retrospective Premium Ratio",
            "75%"
          ],
          [
            "Maximum Retrospective Premium Ratio",
            "125%"
          ],
          [
            "Loss Conversion Factor",
            "1.08"
          ],
          [
            "Expense Allowance (excludes tax multiplier)",
            "15%"
          ],
          [
            "Tax Multiplier",
            "1.04"
          ],
          [
            "Expected Loss Ratio",
            "62%"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the retrospective premium for this policy as of April 1, 2015, including any necessary adjustments for minimum and maximum premium provisions.",
        "solution": "Basic Premium = (15% - .62% * (1.08 - 1) + .181) * 695,000 = 195,573 \nconverted losses = 200000 * 1.08 = 216,000 \n \n==> retro rates = (195,000 + 216,000) * 1.04 =428,035.92 \n        max retro prem =1.25 * 695,000 = 868,750 \n        min retro prem = .75 * 695,000 = 521,750 \n==> retro premium as of 4/1/15 = 521,250",
        "insight": "Calculate the retrospective premium and then apply the policy minimum and maximum; avoid double counting expenses already in the loss conversion factor."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe two elements that the basic premium is intended to cover for a retrospectively rated policy.",
        "solution": "It is intended to cover non-tax, non-loss related expenses, such as the following: \n1. Underwriting expenses \n2. Costs associated with limiting premium at the maximum, and savings\n associated with meeting the \nminimum premium requirement. \n \nNote: The phrase “non-tax, non-loss related expenses” was required to receive full credit under this \nsolution.",
        "insight": "The basic premium covers target underwriting profit and expenses outside the loss conversion factor and tax multiplier, plus the cost of the minimum and maximum limits."
      }
    ]
  },
  {
    "id": "spring-2014-12",
    "number": 12,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-1",
      "reserving-7"
    ],
    "points": 1,
    "questionPage": 14,
    "solutionPages": [
      60,
      61
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company has the following information available for the four different geographic regions within the same line of business:"
      },
      {
        "type": "line",
        "text": "Earned Exposures by Accident Year Ultimate Claim Counts by Accident Year"
      },
      {
        "type": "table",
        "title": "Earned Exposures by Accident Year",
        "headers": [
          "Region",
          "2011",
          "2012",
          "2013"
        ],
        "rows": [
          [
            "1",
            "21,900",
            "22,560",
            "22,125"
          ],
          [
            "2",
            "2,575",
            "2,460",
            "2,520"
          ],
          [
            "3",
            "18,000",
            "17,460",
            "17,800"
          ],
          [
            "4",
            "4,450",
            "10,720",
            "27,500"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Ultimate Claim Counts by Accident Year",
        "headers": [
          "Region",
          "2011",
          "2012",
          "2013"
        ],
        "rows": [
          [
            "1",
            "2,075",
            "2,143",
            "2010"
          ],
          [
            "2",
            "126",
            "124",
            "125"
          ],
          [
            "3",
            "880",
            "895",
            "877"
          ],
          [
            "4",
            "227",
            "580",
            "1,330"
          ]
        ]
      },
      {
        "type": "line",
        "text": "Observed Average Age to Age Paid Claim Development Factors (age in months)"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Region",
          "12-24",
          "24-36",
          "36-48",
          "48-60",
          "60-Ult"
        ],
        "rows": [
          [
            "1",
            "7.67",
            "3.07",
            "1.75",
            "1.30",
            "1.10"
          ],
          [
            "2",
            "3.20",
            "1.70",
            "1.28",
            "1.10",
            "1.06"
          ],
          [
            "3",
            "3.19",
            "1.73",
            "1.31",
            "1.12",
            "1.04"
          ],
          [
            "4",
            "4.10",
            "2.28",
            "1.52",
            "1.05",
            "1.03"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "Justify an appropriate grouping of the regional data for estimating the insurer's unpaid claims for the total book of business.",
        "solution": "Region 4 is growing (can be seen in increase in earned exposure and inc. ultimate clm counts). Should be \ngrouped on its own because growth will affect ult.  The development is also not similar to region 1, 2 or \n3. \nCombine 2 & 3:  2 might be too small to stand on its own; both regions appear to be stable (no growth \ntrend) and the development trends similarly. \nRegion 1 on its own as it appears credible on its own and its development is higher than the other \nregions at all valuations.",
        "insight": "Explain why regions 1 & 4 should remain ungrouped and regions 2 & 3 should be grouped."
      }
    ]
  },
  {
    "id": "spring-2014-13",
    "number": 13,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-7"
    ],
    "points": 3.0,
    "questionPage": 15,
    "solutionPages": [
      62,
      63,
      64
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company has reported the following information:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "As of Date",
          "Reported Claims ($000)"
        ],
        "rows": [
          [
            "2011",
            "December 31, 2011",
            "25,000"
          ],
          [
            "2011",
            "December 31, 2012",
            "45,000"
          ],
          [
            "2011",
            "December 31, 2013",
            "56,250"
          ],
          [
            "2012",
            "December 31, 2012",
            "30,000"
          ],
          [
            "2012",
            "December 31, 2013",
            "51,000"
          ],
          [
            "2013",
            "December 31, 2013",
            "21,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "Assume there is no development beyond 36 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Calculate the ultimate claims for accident year 2013 using the reported claim development technique.",
        "solution": "This was a “calculation” question.  The responses below give examples of a thorough response with all \nnecessary components as well as a very efficient response that still illustrates full knowledge of the \nrequired steps.  The first response uses a simple average and the second response uses a volume \nweighted average.  These were the only two averages used by candidates that were accepted.   \n\nCumulative Reported Claims (000s) \nAY   12   24   36 \n2011  25,000   45,000   56,250 \n2012  30,000   51,000 \n2013  21,000 \n \nAge to Age Factors \nAY     12-24   24-36   36-Ult \n2011     1.8   1.25 \n2012     1.7 \nSelected (2 Yr Avg)  1.75   1.25   1.00 \nCumulative   2.188   1.25   1.00 \n \nAY 2013 Ult Claims = 21,000 x 2.188 = 45,938",
        "insight": "Have knowledge about the full process for reported claim development method."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "State two assumptions of the reported claim development technique.",
        "solution": "Answers receiving full credit include: \n• Assumes that claims will develop the same way into the future as they did in historical period. \n• The past is indicative of the future. \n• It assumes a stable mix of claims \n• Stable case reserve adequacy \n• Claims handling & processing has not changed. \n• Claims observed in an immature AY tells something about claims yet to be observed. \n• Consistent mix of policy limits and deductibles throughout the experience period.",
        "insight": "Be able to list at least two assumptions of the reported claim development method."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "For each assumption identified in part b. above, identify and briefly describe an alternative technique that may be utilized when the assumption does not hold.",
        "solution": "Answers receiving full credit include: \n• If you do not believe losses will continue to develop in the future consistent with historical \ndevelopment, you could use the expected claims technique as it uses an a priori assumption of \nultimate losses and does not rely on losses paid to date. \n• Use expected loss method.  When selecting ELR, make sure ELR is corresponding to the new mix \nof claim type. \n• Could use the paid development method since it will be unaffected by a change in case reserves. \n• The Berquist-Sherman method for case outstanding adjustments should be used.  Historical case \noutstanding is adjusted based on the level of case reserves after the changes, from which \nadjusted reported claims are derived and the reported development method is performed on \nthe adjusted claims. \n• BF method can be used when reported claims are not related to IBNR.  BF method assumes that \nIBNR is more closely related to expected claims, independent of reported losses.  IBNR = % \nunreported loss x Expected Loss \n• Use expected claims method.  The unpaid claims rely on a priori estimate.  I can select a new a \npriori loss estimate for new policy limit.",
        "insight": "Know two of the many alternative methods or techniques."
      }
    ]
  },
  {
    "id": "spring-2014-14",
    "number": 14,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-9",
      "reserving-15"
    ],
    "points": 2.75,
    "questionPage": 16,
    "solutionPages": [
      65,
      66
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The actuary for an insurer has estimated the following results for accident year 2013 as of December 31, 2013:"
      },
      {
        "type": "line",
        "text": "• Percentage unpaid at 12 months = 80%."
      },
      {
        "type": "line",
        "text": "• Accident year 2013 case outstanding= $22,000."
      },
      {
        "type": "line",
        "text": "• Ultimate claims estimate based on the reported claim development technique = $102,500."
      },
      {
        "type": "line",
        "text": "• Ultimate claims estimate based on the paid claim development technique= $95,000."
      },
      {
        "type": "line",
        "text": "• Ultimate claims estimate based on the expected claims technique = $100,000."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Estimate ultimate claims using the reported Bornhuetter-Ferguson technique for accident year 2013 as of December 31, 2013.",
        "solution": "Paid Claims=(1-% Unpaid)*Ultimate Paid Claims \n(1-0.8)*(95,000) = 19,000 \nIncurred Claims = 19,000 + 22,000 = 41,000 \n% unreported = 1 – (41,000/102,500) = 0.6 \nBF Ultimate Claim = 41,000 +.6 * 100,000 =101,000",
        "insight": "Use the reported development factor to derive the unreported percentage; do not substitute the paid percentage."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Identify two situations when the ultimate claims estimate from the reported claim development technique will equal the ultimate claims estimate from the reported Bornhuetter-Ferguson technique.",
        "solution": "Answers receiving full credit include: \n• For accident years, when the % unreported is 0, the reported BF will equal the reported claim \ndevelopment technique  \nor \n• When the CDF = 1 or when CDF<1 and use 1. \n \n• When actual losses to date are \nequal to expected losses to date \nor \n• When actual cumulative losses are equal to expected cumulative losses  \nor \n• When the actual loss ratio to date is equal to the expected loss ratio to date",
        "insight": "Understand and communicate when the two methods are equal • Two scenarios were needed for full credit • Common errors made by candidates: o Many candidates mistakenly restated the question in answer form."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "Identify two situations when the Bornhuetter-Ferguson technique is preferable to the claim development technique and briefly explain why.",
        "solution": "Answers receiving full credit include:  \n• Highly leveraged LDF: For some long tail line of business, the LDFs can become so big that the \nultimate claim estimate can vary greatly.  The BF technique mitigates this by relying more on \nexpected claims for early years. \n• When the data is volatile, thin or both. BF technique is less influenced by fluctuations in actual \ndata since it relies on expected claims for IBNR calculation. \n• If operating in new line of business, can use benchmark LDFs usage of expected LR and reflect \nactual experience. \n• In early maturities, BF is preferable since large or unusual (CAT) claims will distort the claim \ndevelopment method while BF is based on expected a priori added to the actual which will be \nmore stable \n\n• In case of strengthening the case reserves, the development method will be very affected and \nproject ultimate claims that are too high.  The BF technique, because it is weighted with the \nexpected claims will also tend to overstate ultimate claims but not by as much as the \ndevelopment method.",
        "insight": "Identify two situations where the BF technique is preferable to the reported claim development technique and briefly explain why."
      }
    ]
  },
  {
    "id": "spring-2014-15",
    "number": 15,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-10"
    ],
    "points": 2.75,
    "questionPage": 17,
    "solutionPages": [
      67,
      68
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
          "Earned Premium ($000)",
          "On-Level Earned Premium Factors",
          "Reported Claims ($000)",
          "Reported Development Factor to Ultimate"
        ],
        "rows": [
          [
            "2010",
            "1,100",
            "1.35",
            "700",
            "1.1"
          ],
          [
            "2011",
            "1,300",
            "1.3",
            "750",
            "1.4"
          ],
          [
            "2012",
            "1,400",
            "1.2",
            "500",
            "1.7"
          ],
          [
            "2013",
            "1,800",
            "1",
            "750",
            "2"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Annual pure premium trend: 5%."
      },
      {
        "type": "line",
        "text": "• Bornhuetter-Ferguson expected claims ratio: 57%."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calculate the accident year 2013 IBNR using the Bornhuetter-Ferguson technique as of December 31, 2013.",
        "solution": "% unreported = 1 - ½ = 50% \n.5 x .57 x 1800 = 513,000",
        "insight": "Know how to compute a B-F estimate for IBNR, given all the necessary inputs for the calculation."
      },
      {
        "id": "b",
        "points": 1.75,
        "prompt": "Calculate the accident year 2013 IBNR using the Cape Cod technique as of December 31, 2013.",
        "solution": "(1)  (2)  (3)  (4)  (5)  (6)  (7) \nYear  OLEP  %Rep  Used Up Premium \n(2) x (3) \nReported \nClaims \nTrend  Trended Claims\n(5)x(6) \n10  1100x 1.35 \n= 1485 \n91%  1350  700  1.05^3  810 \n11  1690  71%  1207  750  1.05^2  827 \n12  1680  58%  988  500  1.05^1  525 \n13  1800  50%  900  750  1.00  750 \nTotal     4445     2912 \n \nECR = 2912/4445 = 65.5% \nIBNR = 1800 * .5 (% unreported) * .655 = 590,000",
        "insight": "Know how to compute a Cape-Cod estimate for IBNR, given all the necessary inputs for the calculation."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Briefly explain whether the Bornhuetter-Ferguson or the Cape Cod technique is more appropriate in the following scenarios: i. Decrease in underlying claims ratio. ii. Thin or volatile data.",
        "solution": "• Cape Cod is better since it uses reported claims to derive the ECR, it will capture the change in \nthe claims ratio, while B-F will not.  \nor \n• B-F is more appropriate as we can make a selection to account for the decrease in underlying \nclaims ratio.  The Expected Claims Ratio calculated by Cape Cod will be too high. \n \n• B-F is better; if the data is volatile, it’s better to use an a priori estimate of the claims ratio (B-F), \nrather than calculating ECR from the data (CC)",
        "insight": "Choose between Bornhuetter-Ferguson and Cape Cod under each scenario and explain how the expected claim assumption affects the choice."
      }
    ]
  },
  {
    "id": "spring-2014-16",
    "number": 16,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-11",
      "reserving-14"
    ],
    "points": 2.75,
    "questionPage": 18,
    "solutionPages": [
      69,
      70
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company writes general liability insurance and purchases excess-of-loss reinsurance. On January 1, 2013, the insurance company implemented a new reserving process which resulted in a large increase in the average case outstanding for claims occurring in 2013."
      },
      {
        "type": "line",
        "text": "The following information is available as of December 31, 2013:"
      },
      {
        "type": "table",
        "title": "Reported Claim Counts",
        "headers": [
          "Accident Year",
          "Revenue ($000)",
          "Ground-Up",
          "Excess of Reinsurance Attachment Point"
        ],
        "rows": [
          [
            "2011",
            "3,400",
            "1,750",
            "220"
          ],
          [
            "2012",
            "3,500",
            "1,700",
            "140"
          ],
          [
            "2013",
            "3,600",
            "1,500",
            "90"
          ]
        ]
      },
      {
        "type": "line",
        "text": "Reported Claim Count Development Factor to Ultimate (Prior to operational change)"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Age (months)",
          "Ground-Up",
          "Excess of Reinsurance Attachment Point"
        ],
        "rows": [
          [
            "36-Ult",
            "1.000",
            "1.500"
          ],
          [
            "24-Ult",
            "1.040",
            "2.500"
          ],
          [
            "12-Ult",
            "1.200",
            "6.000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Annual revenue trend: 3%."
      },
      {
        "type": "line",
        "text": "• Annual total frequency trend: 2%."
      },
      {
        "type": "line",
        "text": "• Annual excess frequency trend: 5%."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.75,
        "prompt": "Calculate the insurer's ultimate claim counts that do not exceed the attachment point for accident year 2013.",
        "solution": "It’s safe to use the ground-up claim counts and ldf in 2013 to calculate the ultimate 2013 ground up \nclaims, since CDF-ult was developed prior to change. \nUlt Ground-up counts:  1500 x 1.2 = 1800 \nFor excess level, the rpt claims count is distorted for 2013 due to case strengthening.  I will use trended \n2011 and 2012 experience. \n  Revenue    Trend  Clm Cts LDF  Freq Trend  Proj Freq = (3) x (4) / [ (1) x (2)] x (5) \n  (1)        (2)   (3)  (4)     (5) \n2011  3400       1.03^2  220  1.5  1.05^2   0.101 \n2012  3500     1.03   140  2.5  1.05   0.102 \nAverage Selected:  0.1015 \nExcess claim counts = 3600 x 0.1015 = 365 \nThe claim counts not exceeding attachment point is 1800 – 365 = 1435",
        "insight": "Candidates needed to recognize that using a straightforward development method would not be appropriate for counts above the attachment point and that instead they needed to use the second frequency development approach."
      }
    ]
  },
  {
    "id": "spring-2014-17",
    "number": 17,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 2,
    "questionPage": 19,
    "solutionPages": [
      71
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The actuary has observed that the adequacy of case outstanding is increasing for an insurer. Describe how each of the following would be influenced by this change and briefly explain why:"
      },
      {
        "type": "line",
        "text": "i. Reported Claim Development Technique"
      },
      {
        "type": "line",
        "text": "ii. Expected Claim Technique"
      },
      {
        "type": "line",
        "text": "iii. Reported Bornhuetter-Ferguson Technique"
      },
      {
        "type": "line",
        "text": "iv. Reported Cape Cod Technique"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "The actuary has observed that the adequacy of case outstanding is increasing for an insurer. Describe how each of the following would be influenced by this change and briefly explain why: i. Reported Claim Development Technique ii. Expected Claim Technique iii. Reported Bornhuetter-Ferguson Technique iv. Reported Cape Cod Technique",
        "solution": "• Reported Development method \no This technique will overstate IBNR because the CDF will be higher and it is multiplied by \na reported loss that is at a higher level. \n• Expected Claim Method \no This technique will produce accurate IBNR since it is based on an a priori estimate of \nfuture claims. Change in case adequacy will not change its result \n• Reported Bornhuetter-Ferguson \no This technique will overstate IBNR because increased case adequacy will produce higher \nCDFs which will then result in higher % unreported. This will give a higher IBNR estimate. \no Overestimate but less than reported development method, since it is the weighted \naverage of reported development and expected claim method. \n• Reported Cape Cod \no This technique will overstate IBNR for the same reason as BF method: the higher CDFs \nwill give a higher % unreported and lower % reported which will overstate IBNR. \no Overestimated since method uses the ECR which is calculated by the ratio of reported \nclaims and used up premium. Reported claims overestimated and ECR overestimated.",
        "insight": "Explain how increasing case reserve adequacy affects reported development, paid development, and the resulting unpaid estimates."
      }
    ]
  },
  {
    "id": "spring-2014-18",
    "number": 18,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-6",
      "reserving-11"
    ],
    "points": 4,
    "questionPage": 20,
    "solutionPages": [
      72,
      73,
      74,
      75
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company has the following claims information as of December 31, 2013:"
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims ($000)",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2011",
            "1,000",
            "1,500",
            "1,815"
          ],
          [
            "2012",
            "1,020",
            "1,530",
            ""
          ],
          [
            "2013",
            "1,040",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Reported Claims ($000)",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2011",
            "1,100",
            "1,650",
            "1,815"
          ],
          [
            "2012",
            "1,220",
            "1,830",
            ""
          ],
          [
            "2013",
            "1,340",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Case Outstanding Claims ($000)",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2011",
            "100",
            "150",
            "0"
          ],
          [
            "2012",
            "200",
            "300",
            ""
          ],
          [
            "2013",
            "300",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Open Claim Counts",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2011",
            "1,000",
            "1,100",
            "1,155"
          ],
          [
            "2012",
            "1,000",
            "1,100",
            ""
          ],
          [
            "2013",
            "1,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Closed Claim Counts",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2011",
            "900",
            "1,080",
            "1,155"
          ],
          [
            "2012",
            "900",
            "1,080",
            ""
          ],
          [
            "2013",
            "900",
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
        "prompt": "Estimate ultimate claims for accident year 2013 using two reserving techniques that are consistent with a diagnostic review of the data.",
        "solution": "U =  1.414  1.131  1\nult count = 900 x1.283 = 1155 \nult sev = 1.156 x 1.414 = 1.635 \nult claims = ult count x ult sev = 1155 x 1.635=1,888,425",
        "insight": "Recognize the rising case reserve adequacy in the diagnostic data and select reserve techniques consistent with that pattern."
      }
    ]
  },
  {
    "id": "spring-2014-19",
    "number": 19,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-8"
    ],
    "points": 1.75,
    "questionPage": 21,
    "solutionPages": [
      76,
      77
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2013:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "Earned Premium ($000)",
          "On-Level Earned Premium ($000)"
        ],
        "rows": [
          [
            "2010",
            "5,044",
            "5,000"
          ],
          [
            "2011",
            "6,278",
            "6,000"
          ],
          [
            "2012",
            "6,895",
            "6,500"
          ],
          [
            "2013",
            "8,000",
            "8,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Reported Claims ($000)",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months",
          "48 Months"
        ],
        "rows": [
          [
            "2010",
            "665",
            "1,426",
            "2,616",
            "3,118"
          ],
          [
            "2011",
            "915",
            "1,828",
            "3,140",
            ""
          ],
          [
            "2012",
            "890",
            "1,840",
            "",
            ""
          ],
          [
            "2013",
            "904",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Annual claims trend = - 2%."
      },
      {
        "type": "line",
        "text": "• Assume no development beyond 48 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Estimate ultimate claims for accident year 2013 using the expected claims technique.",
        "solution": "Age-to \nAge   12-24     24-36     36-48  \n2010                       2.144                        1.835                        1.192  \n2011                       1.998                       1.718  \n2012                       2.067      \nAverage  2.070  1.777 1.192\n2013 Level: \n2010 LR =  (3118 * 0.98^3)/5000 = 0.587 \n2011 LR =  (3140 * 1.192 * 0.98^2)/6000 = 0.599 \n2012 LR =  (1840 * 1.777 * 1.192 * 0.98)/6500 = 0.588 \nAverage =  0.591 = 2013 LR \n \n8,000,000 * 0.591 = 4,730,666.667",
        "insight": "Understand how to apply the expected claims technique to estimate ultimate claims."
      }
    ]
  },
  {
    "id": "spring-2014-20",
    "number": 20,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-14"
    ],
    "points": 2.25,
    "questionPage": 22,
    "solutionPages": [
      78,
      79
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following data as of December 31, 2013:"
      },
      {
        "type": "table",
        "title": "Incremental Paid Claims Gross of Salvage & Subrogation ($000)",
        "headers": [
          "Accident Year",
          "0-12 Months",
          "12-24 Months",
          "24-36 Months"
        ],
        "rows": [
          [
            "2011",
            "4,000",
            "1,000",
            "500"
          ],
          [
            "2012",
            "4,500",
            "1,125",
            ""
          ],
          [
            "2013",
            "5,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Incremental Received Salvage & Subrogation ($000)",
        "headers": [
          "Accident Year",
          "0-12 Months",
          "12-24 Months",
          "24-36 Months"
        ],
        "rows": [
          [
            "2011",
            "800",
            "950",
            "450"
          ],
          [
            "2012",
            "900",
            "1,609",
            ""
          ],
          [
            "2013",
            "1,250",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Assume no development beyond 36 months of age for either paid claims or salvage and subrogation."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.25,
        "prompt": "Estimate the ultimate salvage and subrogation for accident year 2013 using a ratio approach.",
        "solution": "Cumulative \nPaid \n12  24  36 \n2011  4,000  5,000  5,500 \n2012  4,500  5,625 \n2013  5,000 \nA-A \n12  24  36 \n2011  1.25  1.10  1.00 \n2012  1.25 \nA-A  1.25  1.10  1.00 \nA-U \n12  24 \n1.375  1.1 \nUlt Loss  6,875  (5,000 * 1.375) \nCumulative \nS&S \n12  24  36 \n2011  800  1,750  2,200 \n2012  900  2,509 \n2013  1,250 \nPaid to Paid \n12  24  36 \n2011  0.200  0.350  0.400 \n2012  0.200  0.446 \n2013  0.250 \n      \n      \n      \n      \n\nA-A \n12  24  36 \n2011  1.75  1.14  1.00 \n2012  2.23 \nA-A  1.99  1.14  1.00 \nA-U \n12  24 \n2.274  1.143 \nUlt S&S  3,909  (6,875 * 0.25 * 2.274)",
        "insight": "Candidates were required to develop losses to ultimate, and also to be able to apply the Ratio Approach."
      }
    ]
  },
  {
    "id": "spring-2014-21",
    "number": 21,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-16"
    ],
    "points": 1.5,
    "questionPage": 23,
    "solutionPages": [
      80,
      81,
      82
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An actuary is tasked with estimating legal expense reserves as of December 31, 2013 for an insurance company's general liability line of business."
      },
      {
        "type": "line",
        "text": "The following information is available:"
      },
      {
        "type": "line",
        "text": "• The company recently began dedicating more legal resources to defend claims at earlier stages in the claim cycle in an attempt to reduce ultimate claim costs."
      },
      {
        "type": "line",
        "text": "• Prior to this claims initiative, the company had a relatively stable claim history."
      },
      {
        "type": "line",
        "text": "• Paid legal expenses are tracked separately and are considered allocated claim adjustment expenses for the company."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Describe a potential challenge of using the paid development technique to estimate unpaid allocated claim adjustment expenses for this company.",
        "solution": "Answers receiving full credit include: \n• Historically the defense ALAE was spread out over a longer period of time.  The development \nratio calculated from these will be too large for the new front-loading of legal expenses.  Until \nnew defense strategy is reflected in experience long enough to generate accurate ALAE CDFs, \nALAE development method will overstate unpaid ALAE. \n• As the company changed the way claims are being handled, i.e. more resources at the beginning \nof the claim cycle, we will expect there will be more paid ALAE at the earlier development \nperiod.  Using paid development technique to estimate unpaid ALAE will then overstate the \nunpaid ALAE (historically stable pattern is applied to larger ALAE-to-date), even if we do expect \nthe ult ALAE to be higher due to this initiative.",
        "insight": "Paid ALAE development can be distorted when the pace of legal expense payments differs from the historical pattern."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Describe a potential challenge of using a paid ALAE-to-paid claims only ratio technique to estimate unpaid allocated claim adjustment expenses for this company.",
        "solution": "Answers receiving full credit include: \n• Initial ALAE at early maturities will be higher.  Expect ultimate claims to decrease due to increase \nin litigation.  Ultimate estimated ALAE to paid claims ratio will be distorted by these two effects.  \nInitial ALAE to paid is higher than usual \no Developed to higher ultimate ALAE to paid ratio \no Apply ratio to lower ultimate paid \no Questionable ultimate effect \n• The historical paid ALAE to paid claim ratios will again show too long of a development CDF.  At \nearly maturities ratio will be lower than now and development factors will be too large.  \nMoreover, the effect of the new strategy may reduce ultimate claims, so we would expect a \nchanging ultimate ALAE to claim ratio as well. \n• Prior to the initiative, we can expect stable ALAE-to-paid claims ratio.  However, the initiative \nwill likely result in higher paid ALAE and lower ultimate claim paid.  Here we will see the ratio \nproduced will be higher as compared to historical position.  Again, the higher ratio will then be \nmultiplied with the development factors and depending on the accuracy of ultimate claim paid \nestimated, the unpaid ALAE may be overstated as well.",
        "insight": "The current paid ALAE-to-paid claim ratio differs from the historical ratio, so a historical ratio can misstate future ALAE."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Comment on whether using a frequency-severity technique is appropriate to estimate legal expense reserves for this company.",
        "solution": "Answers receiving full credit include: \n• Frequency should remain mostly unchanged.  May see additional claims with no pay due to \nbetter, faster defense, lowering overall frequency. \nUltimate severity of ALAE expense may remain steady, just incurred at earlier stages.   \nIt may be appropriate to use the frequency severity technique, if proper adjustments are made \nto available data for operational changes and both frequency and severity are monitored on an \nongoing basis. \n• I do not think using a frequency-severity technique would be appropriate to estimate ultimate \nALAE for the company.  Frequency and severity technique works best when there is stable \nclaims practices and mix of business and consistent claims definition.  TO estimate the upcoming \nALAE using frequency & severity technique would be inappropriate as changes to claims settling \nhave recently begun and this will result in inaccurate ultimate and inaccurate ALAE reserves. \n• Yes.  Claim counts will be stable because the change will not affect the number of claims being \nreported.  The change in severity will have the isolated change in legal practices which we can \nincorporate into the estimate.",
        "insight": "A frequency-severity method can be applied to legal expenses if claim counts and average legal cost are suitable for projection."
      }
    ]
  },
  {
    "id": "spring-2014-22",
    "number": 22,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-6",
      "reserving-15"
    ],
    "points": 3.5,
    "questionPage": 24,
    "solutionPages": [
      83,
      84,
      85,
      86,
      87
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
          "Month",
          "Paid Development Factors to Ultimate",
          "Reported Development Factors to Ultimate"
        ],
        "rows": [
          [
            "12-Ult",
            "2.220",
            "1.540"
          ],
          [
            "15-Ult",
            "1.820",
            "1.330"
          ],
          [
            "18-Ult",
            "1.500",
            "1.250"
          ],
          [
            "21-Ult",
            "1.350",
            "1.180"
          ],
          [
            "24-Ult",
            "1.250",
            "1.110"
          ]
        ]
      },
      {
        "type": "line",
        "text": "Accident year 2013 as of March 31, 2014:"
      },
      {
        "type": "line",
        "text": "• Reported claims: $2,200"
      },
      {
        "type": "line",
        "text": "• Paid claims: $1,650"
      },
      {
        "type": "line",
        "text": "• Selected ultimate claims: $3,000"
      },
      {
        "type": "line",
        "text": "Accident year 2013 as of May 31, 2014:"
      },
      {
        "type": "line",
        "text": "• Reported claims: $2,500"
      },
      {
        "type": "line",
        "text": "• Paid claims: $1,875"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Considering the data through March 31, 2014, compare the cumulative expected reported claims to the actual reported claims as of May 31, 2014 for accident year 2013.",
        "solution": "Age  Reported CDF  Reported % \n12  1.54   64.94% \n15  1.33   75.19% \n18  1.25   80% \n21  1.18   84.75% \n24  1.11   90.09% \nAs of 3/31/14 IBNR = 3000 - 2200 = 800 \nLinear interpolated reported % at month 17: 75.19% ൅ሺ80% െ 75.19%ሻ∗\t 2 3ൗ \t ൌ \t78.49%  \n@17 CDF = 1.276 \nExpected loss 3/31~5/31: 800 ∗\n଻଼.ସ%ି଻ହ.ଵଽ%\nଵି଻ହ.ଵଽ%ൌ 103.51 \nCumulative expected as of 5/31: 2200 + 103.51 = 2303.51 \nActual as of 5/31: 2500 \nDifference: 2303.51 – 2500 = -196.49",
        "insight": "Interpolate reported development factors to May 31 and compare actual reported emergence with the expected amount."
      },
      {
        "id": "b",
        "points": 1.25,
        "prompt": "Considering the data through March 31, 2014, compare the cumulative expected paid claims to the actual paid claims as of May 31, 2014 for accident year 2013.",
        "solution": "Age  Paid CDF  Paid % \n12  2.22   45.05% \n15  1.82   54.95% \n18  1.5   66.67% \nAs of 3/31/14 Unpaid = 3000 – 1650 = 1350 \nLinear interpolated paid % at month 17: 54.95% ൅ሺ66.67% െ 54.95%ሻ∗\t 2 3ൗ ൌ 62.76% \nExpected loss paid 3/31~5/31: 1350 ∗\n଺ଶ.଻଺%ିହସ.ଽହ%\nଵିହସ.ଽହ%ൌ 234.04 \nCumulative expected as of 5/31: 1350 + 234.04 = 1884.04 \nActual as of 5/31: 1875 \nDifference: 1884.04 – 1875 = 9.04",
        "insight": "Interpolate paid development factors to May 31 and compare actual paid emergence with the expected amount."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Given the results calculated in parts a. and b. above, describe a situation in which the actuary would revise the March 31, 2014 estimate of ultimate claims.",
        "solution": "Answers receiving full credit include: \n• If it was found that the higher than expected reported claims was due to actual changes in \nunderlying loss ratio that just hadn’t yet shown up in the data at 15 months then the actuary \nshould change the estimate of 2013 ultimate. \n• If there was an influx of claims explaining the increase (such as unusually stormy season) would \nhave to adjust the ultimates to reflect the expected increase in ultimate claims. \n• It could be a large loss reported but not paid.  Since this is not anticipated, increase estimate. \n• If you think there has been a material change causing reported to come in higher than expected \nsuch as change in laws to increase minimum limits which may not show in paid claims \nimmediately (will show in reported before paid) we may want to increase our ultimate to \nreflect the higher ultimate implied by actual reported emergence.",
        "insight": "Explain a plausible change in claim experience or handling that makes the actual-versus-expected result warrant revising ultimate claims."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Given the results calculated in parts a. and b. above, describe a situation in which the actuary would not revise the March 31 , 2014 estimate of ultimate claims.",
        "solution": "Answers receiving full credit include: \n• Actuary would not revise the estimate if there was a change in case reserve philosophy \n(strengthening).  Paid losses (actual) were in line with expected, and reported increase is due to \ncase strengthening with no expected impact on ultimate settlement value. \n• Claims reporting pattern change but no impact on ultimate settlement (ie more reported \nearlier) \n\n• If there was a change in the claims department to get claims into the system quicker (claims in \ntransit was previously higher) there would be no reason to change the ultimate.",
        "insight": "Explain why the observed variance could be temporary or timing-related, leaving the prior ultimate estimate appropriate."
      }
    ]
  },
  {
    "id": "spring-2014-23",
    "number": 23,
    "exam": "Spring 2014",
    "chapterIds": [
      "reserving-6",
      "reserving-15"
    ],
    "points": 1.75,
    "questionPage": 25,
    "solutionPages": [
      88,
      89,
      90
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information as of December 31, 2013:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Accident Year",
          "Selected Ultimate Claims",
          "Reported Claims",
          "Paid Claims"
        ],
        "rows": [
          [
            "2013",
            "1,150",
            "$500",
            "$250"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Age in Months",
          "Selected Cumulative Percent Reported",
          "Selected Cumulative Percent Paid"
        ],
        "rows": [
          [
            "36",
            "100%",
            "100%"
          ],
          [
            "24",
            "80%",
            "55%"
          ],
          [
            "12",
            "A",
            "20%"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• The expected reported claims for accident year 2013 during calendar year 2014 are $433."
      },
      {
        "type": "line",
        "text": "• The expected paid claims for accident year 2013 during calendar year 2014 are $394."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.75,
        "prompt": "Calculate \"A\", the selected cumulative percent reported at 12 months.",
        "solution": "Original IBNR is 1,150 − 500 = 650. Let A be the selected cumulative percent reported at 12 months. Expected emergence of 433 from 12 to 24 months satisfies 433 = 650 × (0.80 − A)/(1 − A). Solving gives A = 0.40, or 40%.",
        "insight": "Use expected emergence between 12 and 24 months to solve for the 12-month reported percentage."
      },
      {
        "id": "b",
        "points": 1,
        "prompt": "Assume that the actual paid and reported claims for accident year 2013 in calendar year 2014 are equal to the expected paid and reported claims for accident year 2013 in calendar year 2014. Calculate the unpaid claim estimate for accident year 2013 as of December 31, 2014 using the case outstanding development technique.",
        "solution": "At December 31, 2014, reported claims are 500 + 433 = 933 and paid claims are 250 + 394 = 644, so case outstanding is 289. At 24 months, selected reported and paid percentages are 0.80 and 0.55. The case outstanding technique gives unpaid = 289 × [1 + (1 − 0.80)/(0.80 − 0.55)] = 289 × 1.8 = $520.20.",
        "insight": "Know the case outstanding development technique and be able to apply it."
      }
    ]
  }
];

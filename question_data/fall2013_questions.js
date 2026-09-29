// Official Fall 2013 PDF; CBT point grid.
window.FALL_2013_QUESTIONS = [
  {
    "id": "fall-2013-1",
    "number": 1,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-4"
    ],
    "points": 1.5,
    "questionPage": 3,
    "solutionPages": [
      41,
      42
    ],
    "sourceBlocks": [],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "An insurance company is considering changing its exposure base for workers compensation from payroll to hours worked. Evaluate the merits of this change based on three different criteria of a good exposure base.",
        "solution": "1. Proportional to expected loss. Hours worked is proportional  to expected loss but only in terms of \nfrequency input. Payroll is better at being proportional to loss because is better related to both \nfrequency and severity because the benefits based on wages.  \n \n2. Practical: well-defined objective and easy to verify. Both payroll and hours worked are objective and \nwell defined, but hours worked is harder to verify then payroll (W-2 tax forms).  \n \n3. Historical Precedence.  Payroll is already used in the industry while hours worked is not. Changing to \nhours worked could cause costly changes to IT systems, rating algorithms, and lead to large \npremium swings. \n \nI would not switch to hours worked because the cost of verifiable and implementation outweigh any \nbenefits. Payroll is better at meeting all three objectives above.",
        "insight": "For example, with the proportionality criteria, simply stating that ‘hours worked is proportional to expected loss’ without further explanation was not given full credit."
      }
    ]
  },
  {
    "id": "fall-2013-2",
    "number": 2,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-5"
    ],
    "points": 2,
    "questionPage": 4,
    "solutionPages": [
      43,
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
        "text": "• All policies have six-month terms."
      },
      {
        "type": "line",
        "text": "• Policies are written uniformly during each six-month period and cannot be cancelled."
      },
      {
        "type": "line",
        "text": "• The rating algorithm is base rate x class factor + expense fee."
      },
      {
        "type": "line",
        "text": "• The proposed effective date of the next rate change is July 1 , 2013."
      },
      {
        "type": "line",
        "text": "• A rate review is performed every six months."
      },
      {
        "type": "table",
        "title": "Rate History",
        "headers": [
          "Effective date",
          "Base rate per exposure",
          "Class A factor",
          "Class B factor",
          "Expense fee"
        ],
        "rows": [
          [
            "January 1, 2011",
            "$480",
            "1.0",
            "0.7",
            "$45"
          ],
          [
            "July 1, 2011",
            "$488",
            "1.0",
            "0.7",
            "$45"
          ],
          [
            "January 1, 2012",
            "$504",
            "1.0",
            "0.7",
            "$50"
          ],
          [
            "July 1, 2012",
            "$500",
            "1.0",
            "0.75",
            "$50"
          ],
          [
            "January 1, 2013",
            "$500",
            "1.0",
            "0.8",
            "$55"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Written Exposures (000)",
        "headers": [
          "Policy Effective Dates",
          "Class A",
          "Class B"
        ],
        "rows": [
          [
            "January 1, 2011 - June 30, 2011",
            "125",
            "50"
          ],
          [
            "July 1, 2011 - December 31, 2011",
            "150",
            "100"
          ],
          [
            "January 1, 2012 - June 30, 2012",
            "175",
            "150"
          ],
          [
            "July 1, 2012 - December 31, 2012",
            "200",
            "200"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Using the extension of exposures method, calculate the calendar year 2012 earned premium at current rate level.",
        "solution": "At current January 2013 rates, premium per exposure is 500 × 1.00 + 55 = $555 for class A and 500 × 0.80 + 55 = $455 for class B. After applying half-year earnings to the six-month policies, 2012 earned exposures are 350 thousand for A and 300 thousand for B. Calendar-year 2012 earned premium at current rate level is 350 × $555 + 300 × $455 = $330,750 thousand, or $330.75 million.",
        "insight": "Some common errors were assuming the latest 2 years exposures were fully earned or assuming the expense fee is fully earned immediately."
      }
    ]
  },
  {
    "id": "fall-2013-3",
    "number": 3,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 1.5,
    "questionPage": 5,
    "solutionPages": [
      46
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "When aggregating data for ratemaking purposes, two of the three general objectives are:"
      },
      {
        "type": "line",
        "text": "• To accurately match losses and premiums for the policy."
      },
      {
        "type": "line",
        "text": "• To use the most recent data available."
      },
      {
        "type": "line",
        "text": "Briefly discuss how well the following methods of data aggregation achieve these two general objectives."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Calendar year",
        "solution": "Least match premium and losses as it only aggregate data based on transactions data regardless the \neffective or loss data, thus mismatch.   Readily available as premium/losses are fixed as soon as CY \nends. No development, thus data readily available.",
        "insight": "Calendar-year aggregation aligns premium and loss by accounting period, but mixes policy and accident periods."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Calendar/accident year",
        "solution": "Better match than CY aggregate, as it aggregate losses based on accident date in the 12-mos period, \nand premium based on transaction date.   Not readily available, as the losses data is subject to \ndevelopment due to pure IBNR and IBNER.",
        "insight": "Explain how calendar/accident-year aggregation matches earned premium to accident-year losses."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Policy year",
        "solution": "Best match for premium and losses. It is the exact amount. If it was written in the policy year it will \nlook at all the losses in that policy year regardless if it happened in another accident year.  Not the \nmost recent data because it is extended over 24 months. Policy year has an extended time frame to \naccount for all policies written within a 1 year policy period.",
        "insight": "Policy-year aggregation follows policies written in a period and requires development as those policies earn and losses emerge."
      }
    ]
  },
  {
    "id": "fall-2013-4",
    "number": 4,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-8"
    ],
    "points": 7.5,
    "questionPage": 6,
    "solutionPages": [
      47,
      48,
      49,
      50,
      51,
      52,
      53
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "• The insurance company entered the market in State X at the beginning of 2008."
      },
      {
        "type": "line",
        "text": "• All policies are annual."
      },
      {
        "type": "line",
        "text": "• Rates will be in effect for 12 months beginning on July 1, 2014."
      },
      {
        "type": "line",
        "text": "• Rate change history:"
      },
      {
        "type": "line",
        "text": "    ◦ +5% effective July 1, 2010."
      },
      {
        "type": "line",
        "text": "    ◦ +7% effective April 1, 2012."
      },
      {
        "type": "line",
        "text": "• Premiums are expected to increase at an inflationary rate of 2% annually."
      },
      {
        "type": "line",
        "text": "• Annual loss cost trend= +4%."
      },
      {
        "type": "line",
        "text": "• ULAE provision = 12% of loss and ALAE."
      },
      {
        "type": "line",
        "text": "• Fixed expense ratio= 7%."
      },
      {
        "type": "line",
        "text": "• Variable expense ratio = 21%."
      },
      {
        "type": "line",
        "text": "• Underwriting profit and contingencies provision = 8%."
      },
      {
        "type": "line",
        "text": "• To simplify calculations, assume premium is earned evenly throughout the year."
      },
      {
        "type": "line",
        "text": "• Assume no loss development after 48 months."
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar Year",
          "State X Earned Premium",
          "State X Earned Exposures",
          "State X Written Premium",
          "State X Written Exposures"
        ],
        "rows": [
          [
            "2010",
            "400,000",
            "400",
            "630,000",
            "600"
          ],
          [
            "2011",
            "2,200,000",
            "2000",
            "3,105,000",
            "2,700"
          ],
          [
            "2012",
            "16,800,000",
            "14,000",
            "18,750,000",
            "15,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "State X Incurred Losses & ALAE",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months",
          "48 Months"
        ],
        "rows": [
          [
            "2008",
            "$0",
            "$200",
            "$800",
            "1,000"
          ],
          [
            "2009",
            "50,000",
            "61,300",
            "78,200",
            "80,000"
          ],
          [
            "2010",
            "380,500",
            "587,000",
            "624,486",
            ""
          ],
          [
            "2011",
            "671,600",
            "1,316,239",
            "",
            ""
          ],
          [
            "2012",
            "9,706,667",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Countrywide Incurred Losses & ALAE",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months",
          "48 Months"
        ],
        "rows": [
          [
            "2007",
            "",
            "",
            "123,600,000",
            "125,000,000"
          ],
          [
            "2008",
            "",
            "62,700,000",
            "68,600,000",
            "70,000,000"
          ],
          [
            "2009",
            "75,000,000",
            "83,300,000",
            "88,200,000",
            "90,000,000"
          ],
          [
            "2010",
            "80,500,000",
            "87,000,000",
            "93,000,000",
            ""
          ],
          [
            "2011",
            "71,600,000",
            "78,800,000",
            "",
            ""
          ],
          [
            "2012",
            "86,900,000",
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
        "points": 6.25,
        "prompt": "Calculate the indicated rate level change for State X using the loss ratio method. Use two-step trending to project premiums.",
        "solution": "Avg. factor     Adj. factor for earned \n2010:  1/8(1.05) + 7/8(1) = 1.00625 1.1165 \n2011:  1/8(1) + 7/8(1.05) = 1.04375 1.0764 \n2012: 9/32(1.1235) + 23/32(1.05) = 1.070672 1.04934 \n \nAdj. for 2012 written =     1.1235                     = 1.016627078 \n ¼(1.05) + ¾(1.1235) \n \n2012 avg. written @ CRL = 18.75(1.016627078)/1500 = 1270.78 \nYear Step 1 Prem = earned \nexp. 1270.78 \nStep 2 Trend Final Prem \n10 508313.54 (1.02)2.5 534111.72 \n11 2541567.70 (1.02)2.5 2670558.60 \n12 17790973.87 (1.02)2.5 13593910.16 \n Total = 21898580.48 \nTrend from 1/1/2010 – 7/1/2012 – 2.5 years \nState x LDFs  \nAY 12-24 24-36 36-48 \n08 X 4 1.25 \n09 1.226 1.277 1.023 \n10 1.543 1.064  \n11 1.96   \n \nCW LDFs \nAY 12-24 24-36 36-48 \n07 X X 1.011 \n08 X 1.094 1.0204 \n09 1.111 1.059 1.0204 \n10 1.081 1.069  \n11 1.101   \nAvg. =  1.097 1.074 1.017 \n \nBecause there is exp. growth in state X, and LDFs are volatile, should use more stable CW development \nfactors. Use state X LDFS will skew projection (most likely too low due to older LDFs) \nCW  CDFS        12           24           36        48 \n1.198    1.0923    1.017       1 \n \n \nYear Loss + ALAE CDF ULAE Trend Find loss and LAE \n10 624486 1.017 1.12 (1.04) 5 865422.89 \n11 1316239 1.0923 1.12 (1.04) 4 18833770.83 \n12 9706607 1.198 1.12 (1.04) 3 14650248.64 \n     Total = 17399442.16 \nTrend from 7/1/10 to 7/1/15 5 \n  11        4 years \n  12 3    \n \nLR = 0.7945 \nRate change = .7945 + .07   -1 = 21.77% \n                           1-.21-.03 \n \n  \nStep 2 trend \n7/1/12 trend from 1/1/15 trend to (2.5 years trend) \n \nEarned prem \nYear 10: 446,608 x 1.13787 x 1.022.5 = 533,973 \nYear 11: 2,368,102 x 1.07348 x 1.022.5 = 2,671,129 \nYear 12: 17,628,912 x 1.00953 x 1.022.5 = 18,700,153 \n               21,905,255   \n     \nLoss \nDev – Use all years weighted avg. for CDFS \n \n12-24           24-36          36-48 \n1.78254 x   1.08479 x   1.02532 \nTo ult 1.98264 1.11225 1.02532 \n \nLoss trend: avg. date of loss in hist. period  avg. date of loss in prospective period \n7/1/XX  7/1/15 (same as prem avg. earned date) \n \nLoss  \nYear 10: 624,486 x 1.02532 x 1.04\n5 x 1.12 = 872503 \nYear 11: 1,316,239 x 1.11225 x 1.044 x 1.12 = 1918176 \nYear 12: 970,667 x 1.98264 x 1.043 x 1.12 = 24,245,550 \n 27,036,229 \n \nLoss ratio = 27,036,229 = 1.23424 \n                     21,905,225 \n \nIndication = 1.23424 + .07   - 1 = 83.695% \n                     1 - .21 - .08",
        "insight": "Candidates did struggle with the premium trend, with common mistakes of missing the trend period or applying to written premium."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "The assumption that the premium is earned evenly should not hold for State X given that it is a new book of business. Briefly describe two alternatives to the traditional parallelogram method that would improve the accuracy of the estimated projected premiums.",
        "solution": "The most accurate method for on-leveling premium would be the extension of exposures \nmethod. This technique requires very granular data and involves re-pricing each policy to the \ncurrent rate level. A second alternative would be to break the premium data down into \nquarterly or monthly data. This would make for a more accurate on-leveling of a growing book \nof business.",
        "insight": "Candidates were often able to identify alternatives like extension of exposure or using more refined time periods, but some did lose points for lack of description."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Fully discuss the impact to the rate level indication for State X by assuming the premium is earned evenly. Include the directional change to the rate level indication that would result if adjusting for the actual earning of the premium.",
        "solution": "Assuming that premium earns evenly assumes that less of the premium has received the benefit \nof the rate changes. Thus, it results in on-level premium that is too high, and the resulting \nindication is too low. If actual earning is used, more prem has received the rate changes, so OLFs \nwould be lower, projected prem would be lower, and the indication would be higher.",
        "insight": "Candidates were often able to identify the impact on the indication given a premium change, but lacked the discussion leading up to the reason behind the premium change."
      }
    ]
  },
  {
    "id": "fall-2013-5",
    "number": 5,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-6"
    ],
    "points": 2.75,
    "questionPage": 8,
    "solutionPages": [
      54
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "• All policies are annual, and rate level is reviewed annually."
      },
      {
        "type": "line",
        "text": "• Rate change takes effect on January 1 , 2013."
      },
      {
        "type": "line",
        "text": "• Unlimited annual loss frequency trend = -1%."
      },
      {
        "type": "line",
        "text": "• Unlimited annual loss severity trend = +5%."
      },
      {
        "type": "line",
        "text": "• Annual average written premium trend per exposure = 0%."
      },
      {
        "type": "line",
        "text": "• Assume the exposures are inflation sensitive."
      },
      {
        "type": "line",
        "text": "• Annual exposure trend = + 1%."
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Calendar/Accident Year",
          "On-Level Earned Premium ($000)",
          "Reported Losses as of December 31, 2012 ($000)",
          "Reported Losses Excess of $1 Million as of December 31, 2012 ($000)",
          "Unlimited Loss Development Factor"
        ],
        "rows": [
          [
            "2003",
            "60,612",
            "34,054",
            "$456",
            "1.00"
          ],
          [
            "2004",
            "61,941",
            "44,617",
            "4,888",
            "1.00"
          ],
          [
            "2005",
            "66,893",
            "41,086",
            "5,348",
            "1.00"
          ],
          [
            "2006",
            "67,092",
            "39,025",
            "8,774",
            "1.00"
          ],
          [
            "2007",
            "65,960",
            "45,646",
            "8,134",
            "1.00"
          ],
          [
            "2008",
            "65,037",
            "36,383",
            "$0",
            "1.00"
          ],
          [
            "2009",
            "65,242",
            "38,487",
            "1,398",
            "1.00"
          ],
          [
            "2010",
            "67,732",
            "36,799",
            "$0",
            "1.03"
          ],
          [
            "2011",
            "69,450",
            "38,608",
            "2002",
            "1.08"
          ],
          [
            "2012",
            "67,213",
            "45,295",
            "9,000",
            "1.20"
          ],
          [
            "Total",
            "657,172",
            "400,000",
            "40,000",
            "N/A"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "For accident year 2012, determine the trended ultimate loss ratio to use in the January 1, 2013 rate level analysis incorporating a large loss adjustment for claims above $1 million.",
        "solution": "Large loss Adj Factor \n= 40k/(400k – 40k) – 11.1% \n \nAssumed LDF Trend Period  = 7/1/12 – 1/1/14 = 1.5 yrs \n \n     Large Loss Factor \nA + 12 Ult. LR = (45,295 – 9000)(1.20)(099 x 1.05)1.5(1.111) \n                                                  (672)(1.01)1.5 \n  = 0.752",
        "insight": "Candidates most often determined the appropriate trend period of 1.5 years."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Discuss the appropriateness of using a large loss adjustment in part a. above.",
        "solution": "Given that the amount of excess losses varied considerably from year to year, it makes sense to do a \nlarge loss adjustment to smooth the losses.",
        "insight": "Candidates needed to identify the volatility in the data and the benefit of stability in the indications."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Assume the rate associated with the first $1 million of coverage is analyzed using only the data above. Briefly discuss three modifications to loss and premium elements that would produce a more accurate rate analysis.",
        "solution": "(1) Adj. prem to reflect only 1M of limits offered; adj. may vary by year. \n(2) Adj. LDF to reflect lower development due to loss capping. \n(3) Adj. severity trend to reflect lower trend due to loss capping.",
        "insight": "Candidates often were able to identify 3 different enhancements, receiving full credit."
      }
    ]
  },
  {
    "id": "fall-2013-6",
    "number": 6,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-8",
      "reserving-13"
    ],
    "points": 3.25,
    "questionPage": 9,
    "solutionPages": [
      55
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "• All policies have six-month terms."
      },
      {
        "type": "line",
        "text": "• New rates will take effect on January 1, 2014."
      },
      {
        "type": "line",
        "text": "• Rates will be in effect for one year."
      },
      {
        "type": "line",
        "text": "• Selected frequency trend = 0%."
      },
      {
        "type": "line",
        "text": "• Selected severity trend = +5%."
      },
      {
        "type": "line",
        "text": "• Selected ULAE provision = 10% of loss and ALAE."
      },
      {
        "type": "line",
        "text": "• Two accident years with equal weights are used to calculate the pure premium."
      },
      {
        "type": "line",
        "text": "• Assume no further development after 36 months."
      },
      {
        "type": "table",
        "title": "Cumulative Paid Loss & ALAE ($000)",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2009",
            "6,000",
            "17,200",
            "25,800"
          ],
          [
            "2010",
            "4,500",
            "12,200",
            ""
          ],
          [
            "2011",
            "7,900",
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
            "2009",
            "190",
            "160",
            "75"
          ],
          [
            "2010",
            "120",
            "110",
            ""
          ],
          [
            "2011",
            "165",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Outstanding Case Loss and ALAE Reserves ($000)",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2009",
            "16,500",
            "13,000",
            "5,500"
          ],
          [
            "2010",
            "10,000",
            "6,500",
            ""
          ],
          [
            "2011",
            "9,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Earned Exposures (000)",
        "headers": [
          "Calendar year",
          "Earned exposures (000)"
        ],
        "rows": [
          [
            "2010",
            "200"
          ],
          [
            "2011",
            "300"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 3.25,
        "prompt": "Use the Berquist-Sherman case outstanding adjustment technique to calculate the projected ultimate loss and LAE pure premium of the rate level indication.",
        "solution": "Average case outstanding change \n 12 24 36 \n2009 86,842 81,250 73,333 \n2010 83,333 59,091  \n2011 54,545   \n \nAdjust this by trending the diagonal back at 5% per year \n 12 24 36 \n2009 49,474 56,277 73,333 \n2010 51,948 59,091  \n2011 54,545   \n \nAdjust reported = adjusted case outstanding x open claim count + paid losses  \n 12 24 36 \n2009 15,400 26,204 31,300 \n2010 10,734 18,700  \n2011 16,900   \n \n 12-24 24-36 36-ult. \n2009 1.7016 1.1945  \n2010 1.7421   \nSelect all year \nsimple avg. \n1.7219 1.1945 1.000 \nCDF 2.0568 1.1945 1.000 \n \nAY 2010 loss trend = 7/1/2010  10/1/2014 = 4.25 years \nAY 2011 loss trend = 7/1/2011  10/1/2014 = 3.25 years \n \nC/AY Rep Loss CDF Trend ULAE Proj. Ult. EE PP \n2010 18,700,000 1.1945 1.054.25 1.1 30,232,583 200,000 151.16 \n2011 16,900,000 2.0588 1.053.25 1.1 44,806,052 300,000 149.35 \nProj. Ult. L+LAE PP = 151.16 * .5 + 149.35 * .5 = 150.26  \nExam 5",
        "insight": "Adjust historical case reserves for changes in reserve adequacy before developing losses and calculating projected pure premium."
      }
    ]
  },
  {
    "id": "fall-2013-7",
    "number": 7,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-7"
    ],
    "points": 1.5,
    "questionPage": 10,
    "solutionPages": [
      56
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Two methods of deriving expense provisions in ratemaking include the Premium-Based Projection Method and the"
      },
      {
        "type": "line",
        "text": "Exposure/Policy-Based Projection Method."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "For each method, briefly describe how both fixed and variable expenses are treated.",
        "solution": "Premium-based: fixed expenses and variable expenses are separated then divided by either written \nor earned premium to get expense ratios.  \n \nExposure-based: Variable expenses are separated out and divided by either earned or written \npremium for a variable expense ratio. Fixed expenses are separated out and divided by either \nearned or written exposures to get an average fixed expense. This can be trended if necessary.",
        "insight": "Distinguish how the pure-premium and loss-ratio methods treat fixed versus variable expenses."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Briefly describe one shortcoming (or distortion) of each method.",
        "solution": "If using an all variable prem method, a shortcoming is that policies with large premium are \novercharging expenses and vice versa for policies with small premium. \nA shortcoming of the fixed expense per exposure is that it doesn’t take into account that fixed \nexpenses sometime vary. For example, a renewal would have less fixed expense than a new policy.",
        "insight": "A common mistake was referencing a shortcoming of the pure premium or loss ratio methods, which aren’t necessarily shortcomings of the methods for deriving expense provisions."
      }
    ]
  },
  {
    "id": "fall-2013-8",
    "number": 8,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-8",
      "ratemaking-12"
    ],
    "points": 2,
    "questionPage": 11,
    "solutionPages": [
      57
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
          "Calendar/Accident Year",
          "Earned Exposures",
          "Non-Catastrophe Number of Claims",
          "Non-Catastrophe Reported Losses & ALAE ($000)",
          "Reported Loss & ALAE Development Factor",
          "Loss Trend Factor"
        ],
        "rows": [
          [
            "2010",
            "20,725",
            "350",
            "11,446",
            "1.000",
            "1.145"
          ],
          [
            "2011",
            "21,220",
            "310",
            "12,757",
            "1.006",
            "1.121"
          ],
          [
            "2012",
            "23,015",
            "320",
            "11,295",
            "1.068",
            "1.080"
          ]
        ]
      },
      {
        "type": "line",
        "text": "• ULAE = 2% of loss and ALAE."
      },
      {
        "type": "line",
        "text": "• Regional non-catastrophe pure premium (including LAE) = $602."
      },
      {
        "type": "line",
        "text": "• Non-modeled catastrophe pure premium (including LAE) = $30."
      },
      {
        "type": "line",
        "text": "• Modeled catastrophe pure premium (including LAE) = $75."
      },
      {
        "type": "line",
        "text": "• Projected net reinsurance cost per exposure = $22."
      },
      {
        "type": "line",
        "text": "• Projected fixed expense per exposure = $35."
      },
      {
        "type": "line",
        "text": "• Profit and contingency provision = 5.0%."
      },
      {
        "type": "line",
        "text": "• Variable expense provision = 16.0%."
      },
      {
        "type": "line",
        "text": "• Projected on-level average premium = $945."
      },
      {
        "type": "line",
        "text": "• Claims required for full credibility for all three years combined = 1,082."
      },
      {
        "type": "line",
        "text": "• The insurer uses the square root rule to determine partial credibility."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Calculate the credibility-weighted indicated rate change.",
        "solution": "CY/AY EE Trend+Dev Ult Non Cat ULAE PP \n2010 20,725 11,446k (1)(1.145) = 13,105,670 X 1.02 = 13,367,783 645 \n2011 21,220 12,757k (1.006)(1.121) = 14,386,401 X 1.02 = 14,674,129 671.5 \n2012  23,015 11,295k (1.068)(1.08) = 13,028,105 X 1.02 = 13,288,667 577.4 \n     \n         3 year avg.  637.92 \nZ = √(980/1082) = 0.9517 \nCred wtd  non-CAT PP \n637.97(0.9517) + 602(1-0.9517) = 636.2366 \n \nInd. Rate = 636.2366 + 30 + 75 + 22 + 35      = 1010.43 \n 1-0.05-0.16 \n \nInd. Change = 1010.43/945 = 1.0692 \n6.92%",
        "insight": "Use total credibility for the catastrophe provision and apply the modeled and non-modeled pieces without double counting."
      }
    ]
  },
  {
    "id": "fall-2013-9",
    "number": 9,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2.5,
    "questionPage": 12,
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
          "Territory",
          "Premium",
          "Current Relativity",
          "Indicated Relativity"
        ],
        "rows": [
          [
            "1",
            "195,000",
            "0.85",
            "0.75"
          ],
          [
            "2",
            "475,000",
            "1.00",
            "1.00"
          ],
          [
            "3",
            "330,000",
            "1.30",
            "1.20"
          ],
          [
            "Total",
            "1,000,000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "Management is requiring that both of the following objectives are achieved with the upcoming rate change:"
      },
      {
        "type": "line",
        "text": "• Target an overall rate level increase of 20%."
      },
      {
        "type": "line",
        "text": "• Revise territorial relativities to the indicated relativity, while capping any territory rate impact at 25% overall."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.5,
        "prompt": "Calculate the territorial relativities that will be implemented with the rate change.",
        "solution": "Territory Prem Curr Rel Proposed Rel Prop/Curr Rev Neutral \nChange \n1 195,000 .85 .75 .88235 .927156 \n2 476,000 1.00 1.00 1.0000 1.05078 \n3 330,000 1.3 1.2 .923077 .96995 \n 1,000,000   .951674  \n     Wtd w prem \n \nTerritory Target Overall chg Total chg Prem above cap \n1 1.2 1.11259 -  \n2 1.2 1.260936 5,194.6 \n3 1.2 1.16394 -  \n \n \nAdj to base due to cap = 1.25/1.260936 = .991327 \nProp prem territory 1 and 3 = 1.11259(195,000) + 1.16394 (330,000) = 601,055.25 \nAdj to territory 1 and 3 due to prem cap = 5194.6/601,055.25+1  = 1.008642 \nTotal adj to territory 1 and 3 = 1/.991327 x 1.008642 = 1.017467 \n \nTerritory Adjusted Rel \n1 .75 x 1017467 = .76310 \n2 1.000   = 1.000 \n3 1.2 x 1.017467 = 1.22096",
        "insight": "When attempting to calculate the premium shortfall due to the cap on territory 2, some candidates failed to identify the correct premium to which the excess ratio should be applied."
      }
    ]
  },
  {
    "id": "fall-2013-10",
    "number": 10,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 2.0,
    "questionPage": 13,
    "solutionPages": [
      60
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company develops territorial indications using a univariate pure premium analysis and has the following experience:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Territory",
          "Earned Exposures",
          "Reported Loss & ALAE ($000)",
          "Current Relativity"
        ],
        "rows": [
          [
            "A",
            "100,000",
            "60,000",
            "1"
          ],
          [
            "B",
            "250,000",
            "300,000",
            "1.4"
          ],
          [
            "Total",
            "350,000",
            "360,000",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Exposures",
        "headers": [
          "Amount of Insurance Group",
          "Charged Factor",
          "Territory A",
          "Territory B"
        ],
        "rows": [
          [
            "Low",
            "0.75",
            "50,000",
            "25,000"
          ],
          [
            "Medium",
            "1",
            "30,000",
            "75,000"
          ],
          [
            "High",
            "1.5",
            "20,000",
            "150,000"
          ],
          [
            "Total",
            "",
            "100,000",
            "250,000"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Describe how distortion can occur using a univariate approach.",
        "solution": "A univariate indication assumes the other rating variables are distributed uniformly across territories. Here amount-of-insurance mix differs by territory, so the univariate pure premiums reflect both territory and amount of insurance; using them directly would double count part of the latter effect.",
        "insight": "When candidates did lose points they correctly identified key ideas regarding exposure distributions or correlation of variables but misstated the concept in some way."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Calculate the indicated pure premium relativities, while accounting for distortion that may be occurring due to amount of insurance differences by territory.",
        "solution": "Adjust each territory’s exposures for the amount-of-insurance factors. Territory A: 50,000×0.75 + 30,000×1.00 + 20,000×1.50 = 97,500. Territory B: 25,000×0.75 + 75,000×1.00 + 150,000×1.50 = 318,750. Adjusted pure premiums are 60,000,000/97,500 = 615.38 and 300,000,000/318,750 = 941.18. Divide by the base Territory A value: indicated relativity A = 1.000, B ≈ 1.529.",
        "insight": "Adjust for amount-of-insurance mix before comparing territorial pure premiums; an unadjusted comparison confounds the variables."
      }
    ]
  },
  {
    "id": "fall-2013-11",
    "number": 11,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-11"
    ],
    "points": 2.25,
    "questionPage": 14,
    "solutionPages": [
      61,
      62
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Policy-Limit Loss Experience",
        "headers": [
          "Size of loss",
          "Claims at $100,000 limit",
          "Losses at $100,000 limit ($)",
          "Claims at $250,000 limit",
          "Losses at $250,000 limit ($)",
          "Claims at $500,000 limit",
          "Losses at $500,000 limit ($)"
        ],
        "rows": [
          [
            "X <= $100,000",
            "100",
            "8,000,000",
            "35",
            "1,800,000",
            "35",
            "1,800,000"
          ],
          [
            "$100,000 < X <= $250,000",
            "",
            "",
            "40",
            "7,400,000",
            "25",
            "3,900,000"
          ],
          [
            "$250,000 < X <= $500,000",
            "",
            "",
            "",
            "",
            "15",
            "5,200,000"
          ]
        ]
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Limit",
          "Indicated Factor (pure premium generalized linear model analysis)"
        ],
        "rows": [
          [
            "100,000",
            "1.00"
          ],
          [
            "250,000",
            "0.95"
          ],
          [
            "500,000",
            "1.15"
          ]
        ]
      },
      {
        "type": "line",
        "text": "For the $250,000 policy limit:"
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "Calculate the indicated increased limits factor, assuming a basic limit of $100,000.",
        "solution": "LAS(100k) = 8000k + 1800k + 1800k + (40 + 25 + 15) x 100k = 19,600k/250 = 78,400 \n100 + 35 + 35 + 60 + 25 + 15 \n \nLAS (100k – 250k) = 7400k – 40 x 100k + 3900k – 25 x 100k + (250k – 100k) x 15 = 7050k/80 = 88,125 \n   40 + 25 + 15 \n \nLAS(250k) = 78,400 + 88,125 x 80 / (80 + 35 + 35 )= 125,600 \nILF (250k) = 125,600/78,600 = 1.599",
        "insight": "Calculate the traditional increased-limits factor from loss experience at each policy limit relative to the basic limit."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Explain the difference between the indicated increased limits factor calculated in part a. above and the generalized linear model results.",
        "solution": "The calculation in part A assumes equivalent claimant behavior and frequency throughout each level \nwhereas a GLM will account for the differences in the model. The GLM will sometimes create results \nthat are counter intuitive.",
        "insight": "Explain that the GLM can reflect limit-related frequency or behavioral effects that the traditional increased-limits method omits."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Select an increased limit factor and briefly explain the rationale for the selection.",
        "solution": "I would select a factor of 1.09375 = (150/400)(.15) + 1 \nIt is not reasonable to assume uniform frequency. However, due to the reversal in the GLM, I \ninterpolated linearly between the indicated factor for $100k and $500k.",
        "insight": "Justify the selected increased-limits factor; the GLM result should be challenged if it is inconsistent with neighboring limits."
      }
    ]
  },
  {
    "id": "fall-2013-12",
    "number": 12,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-13"
    ],
    "points": 2,
    "questionPage": 15,
    "solutionPages": [
      63,
      64
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "An insurance company has recently entered a new state and plans to invest heavily on marketing in an attempt to aggressively grow its homeowners book of business. Relative to the low initial premium in the state, these marketing expenses will be significant."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "The company's senior management proposes that the actuary develop a rate level where the expense provisions reflect only the typical variable costs. Construct a thorough argument in support of this proposal.",
        "solution": "It makes sense to use only a typical variable expense cost in the rate level indication. The marketing \nexpenses initially incurred will most likely not continue into the future. Also given that initial premium \nwill be small it would be difficult to quantify based on the empirical premium what the future expense \nwill be. This company seems to be using an asset sharing pricing model approach. Under this model the \nlong term profitability is considered. It is understood the initial cost of obtaining business can cause \nlosses. But as the book grows and matures it will become more profitable. Renewal business tends to \nhave better loss ratios and maintaining a book is less expensive than growing. The company knows the \ncurrent market expense will not continue.",
        "insight": "To provide a thorough argument, candidates needed to have at least two well vetted points or at least four basically discussed points."
      }
    ]
  },
  {
    "id": "fall-2013-13",
    "number": 13,
    "exam": "Fall 2013",
    "chapterIds": [
      "ratemaking-9"
    ],
    "points": 1.5,
    "questionPage": 16,
    "solutionPages": [
      65,
      66
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The chief underwriter of a company offering homeowners insurance informs the chief actuary that an analysis has been performed on the replacement costs of all properties in the book of business. The book of business contains only two territories, A and B."
      },
      {
        "type": "line",
        "text": "The analysis indicates that for the past 10 years, all properties in territory A have been uniformly underinsured by 20% while all properties in territory B have been adequately insured. The current insurance contract at the insurance company does not include any guaranteed cost replacement endorsement or coinsurance clause. The chief actuary is aware that the rating structure has been fully reviewed in the past year."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.5,
        "prompt": "Discuss the overall premium adequacy, territorial premium adequacy, and the premium equity among the insureds.",
        "solution": "Since this situation has been ongoing for 10 years, we can expect that all rates have been calculated \nbased on these existing levels of insurance to value. Furthermore, we can assume that each territory has \na rating differential that accounts for differences in loss cost by territory, and this territory differential \nwill capture the effect of the level of ITV in each territory (should be a higher territory factor for A all \nelse equal). \n \nSo premium at both the overall and territory level should be adequate.    \n \nIn terms of premium equity among insured, since the homes in territory in A are uniformly \nunderinsured, their rates should be equitable with people in territory B because the higher territory \ndifferential will account for the difference in ITV. \n \nNote* If Territory A was not uniformly underinsured, rates would not be equitable within Territory A.",
        "insight": "Partial credit was given for stating overall premium inadequacy due to the underinsurance/inadequate rate in Territory A."
      }
    ]
  },
  {
    "id": "fall-2013-14",
    "number": 14,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-6"
    ],
    "points": 2.0,
    "questionPage": 17,
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
        "title": "Incremental Payments in Calendar Year",
        "headers": [
          "Claim ID",
          "Accident Date",
          "Report Date",
          "2010",
          "2011",
          "2012"
        ],
        "rows": [
          [
            "1",
            "June 15, 2010",
            "July 1, 2010",
            "$100",
            "$400",
            "$0"
          ],
          [
            "2",
            "December 15, 2010",
            "January 15, 2011",
            "$0",
            "$300",
            "$150"
          ],
          [
            "3",
            "April 1, 2011",
            "May 1, 2011",
            "",
            "$200",
            "$200"
          ],
          [
            "4",
            "November 15, 2011",
            "January 1, 2012",
            "",
            "$0",
            "$500"
          ],
          [
            "5",
            "April 1, 2012",
            "May 1, 2012",
            "",
            "",
            "$200"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Construct an annual incremental accident year paid loss triangle as of December 31, 2012.",
        "solution": "Paid Incremental \n \nAY 12 24 36 \n10 100 700 150 \n11 200 700 \n12 200",
        "insight": "Allocate paid claims to accident year and development interval, then show incremental rather than cumulative amounts."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Construct an annual cumulative report year paid loss triangle as of December 31, 2012.",
        "solution": "Paid cumulative \n \nRY 12 24 36 \n 10 100 500 500 \n 11 500 850 \n 12 700",
        "insight": "Allocate paid claims to report year and cumulate payments by development age."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Assess whether an accident year approach or a report year approach is more appropriate for reserving auto liability insurance.",
        "solution": "Accident year more approach as it’s a long tailed line of business.  The reporting nature of this line \nof business, we need to project IBNR for this line of business. Report year method doesn’t project \npure IBNR.",
        "insight": "Another common incorrect answer was that report year should be used since auto has a long tail or large reporting lag."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Assess whether annual or quarterly triangles are more appropriate for a small company selling a long-tailed line of business.",
        "solution": "Annual triangle as the data is more credible (less fluctuation) because larger volume compared to \nquarterly data. More volatile and thin data will cause the LDF to be more volatile.",
        "insight": "Some responded that quarterly is more appropriate because there can be seasonality in the claims which was not accepted."
      }
    ]
  },
  {
    "id": "fall-2013-15",
    "number": 15,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 4.5,
    "questionPage": 18,
    "solutionPages": [
      68,
      69,
      70,
      71,
      72,
      73,
      74
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "COMPANY A COMPANY B"
      },
      {
        "type": "table",
        "title": "Company A — Paid Losses ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2009",
            "$400",
            "2,400",
            "9,600",
            "12,000"
          ],
          [
            "2010",
            "$400",
            "2,400",
            "9,600",
            ""
          ],
          [
            "2011",
            "$400",
            "2,400",
            "",
            ""
          ],
          [
            "2012",
            "$400",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Company B — Paid Losses ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2009",
            "$12",
            "$45",
            "$176",
            "$230"
          ],
          [
            "2010",
            "$4",
            "$39",
            "$192",
            ""
          ],
          [
            "2011",
            "$6",
            "$51",
            "",
            ""
          ],
          [
            "2012",
            "$8",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Company A — Reported Losses ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2009",
            "$800",
            "4,800",
            "12,800",
            "14,400"
          ],
          [
            "2010",
            "$800",
            "4,800",
            "12,800",
            ""
          ],
          [
            "2011",
            "$800",
            "4,800",
            "",
            ""
          ],
          [
            "2012",
            "$800",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Company B — Reported Losses ($000)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2009",
            "$50",
            "$144",
            "$264",
            "$278"
          ],
          [
            "2010",
            "$34",
            "$144",
            "$288",
            ""
          ],
          [
            "2011",
            "$34",
            "$147",
            "",
            ""
          ],
          [
            "2012",
            "$40",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Company A — Reported Claim Counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2009",
            "2000",
            "3,000",
            "3,000",
            "3,000"
          ],
          [
            "2010",
            "2000",
            "3,000",
            "3,000",
            ""
          ],
          [
            "2011",
            "2000",
            "3,000",
            "",
            ""
          ],
          [
            "2012",
            "2000",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Company B — Reported Claim Counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2009",
            "40",
            "60",
            "60",
            "60"
          ],
          [
            "2010",
            "40",
            "60",
            "60",
            ""
          ],
          [
            "2011",
            "40",
            "60",
            "",
            ""
          ],
          [
            "2012",
            "40",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Company A — Closed Claim Counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2009",
            "1,000",
            "1,500",
            "2000",
            "2,500"
          ],
          [
            "2010",
            "1,000",
            "1,500",
            "2000",
            ""
          ],
          [
            "2011",
            "1,000",
            "1,500",
            "",
            ""
          ],
          [
            "2012",
            "1,000",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Company B — Closed Claim Counts",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36",
          "48"
        ],
        "rows": [
          [
            "2009",
            "20",
            "30",
            "40",
            "50"
          ],
          [
            "2010",
            "20",
            "30",
            "40",
            ""
          ],
          [
            "2011",
            "20",
            "30",
            "",
            ""
          ],
          [
            "2012",
            "20",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Both Company A and Company B write primary auto liability policies."
      },
      {
        "type": "line",
        "text": "• On December 31, 2012, the two merge to form Company C."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1,
        "prompt": "According to the Statement of Principles Regarding Property and Casualty Loss and Loss Adjustment Expense Reserves, discuss two actuarial considerations for designing a reserve study for Company C.",
        "solution": "Homogeneity \nWe need to check if the data between Company A and B has the similar characteristics. \n \nCredibility \nIf there are enough data in Company C to obtain credible and reliable results.",
        "insight": "Candidates needed both the consideration and something to tie it to either the data or an explanation of why it was important."
      },
      {
        "id": "b",
        "points": 1.5,
        "prompt": "Calculate three key diagnostics that an actuary would review to determine whether to combine historical data for Company A and Company B.",
        "solution": "Avg. paid per closed claim = paid/closed count \n(A) (B) \nAY 12 24 36 48 \n2009 0.4 1.6 4.8 4.8 \n2010 0.4 1.6 4.8  \n2011 0.4 1.6   \n2012 0.4    \n \nNo trend  or any other change It seems avg. dollar paid per closed claim has a drop and \nduring 2009  2008, but increase during 2010 – 2014 \nPaid to incurred ratio to check case adequacy = paid/reported. \n(A) (B) \n \nAY 12 24 36 48 \n2009 0.5 0.5 0.75 0.833 \n2010 0.5 0.5 0.75  \n2011 0.5 0.5   \n2012 0.5    \n \nNo trend  or any other change It seems there is an increase in case (may be case \nstrengthen) in Year 2010 and 2011 @ 12 and 24 with \nthe level drop back in latest year \nClosed counts to reported counts to check settlement rates \n(A) (B) \nAY 12 24 36 48 \n2009 0.5 0.5 0.67 0.83 \n2010 0.5 0.5 0.67  \n2011 0.5 0.5   \n2012 0.5    \n \nNo trend  and exact match!  It seems both settlement rates have not been changed \n  \nAY 12 24 36 48 \n2009 0.6 1.5 4.4 4.6 \n2010 0.2 1.3 4.8  \n2011 0.3 1.7   \n2012 0.4    \nAY 12 24 36 48 \n2009 0.24 0.3125 0.67 0.827 \n2010 0.118 0.271 0.67  \n2011 0.176 0.347   \n2012 0.2    \nAY 12 24 36 48 \n2009 0.5 0.5 0.67 0.83 \n2010 0.5 0.5 0.67  \n2011 0.5 0.5   \n2012 0.5",
        "insight": "Simply listing three valid diagnostics received some credit, with some dialog on how each related to the data receiving more credit (but not full credit)."
      },
      {
        "id": "c",
        "points": 1,
        "prompt": "Assume the mix of business is comparable (i.e. similar limits, classes, territories, etc.) for Company A and Company B. Argue whether or not it is appropriate to combine the historical data to estimate unpaid claims for accident years 2012 and prior as of December 31, 2012 for CompanyC.",
        "solution": "From this settlement speed, each age is similar for A and B. Therefore it says that A and B can be \ncombined. I think it is appropriate if you adjust case adequacy because severities similar, settlement \npatterns similar and B has little data so may not be credible to stand alone. Need to look into case \nadequacy though.",
        "insight": "Arguments either for or against combining the data were accepted, provided they were valid and logical."
      },
      {
        "id": "d",
        "points": 1,
        "prompt": "Assume that Company C's claims department will adopt Company A's claims practices. Argue whether or not it is appropriate to combine historical data to estimate unpaid claims for accident year 2013 as of December 31, 2013 for Company C.",
        "solution": "It would be appropriate if we use the past development techniques. The reported development \ntechniques we need to adjust though B’s case outstanding method for the historical not enough to \nmake an accurate estimate.",
        "insight": "Some candidates may not have read the question correctly, arguing why B should or should not use A’s case reserving philosophy."
      }
    ]
  },
  {
    "id": "fall-2013-16",
    "number": 16,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-11"
    ],
    "points": 2,
    "questionPage": 20,
    "solutionPages": [
      75,
      76,
      77
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "table",
        "title": "Reported Claim Counts (excluding closed with no payment)",
        "headers": [
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months"
        ],
        "rows": [
          [
            "2010",
            "291",
            "274",
            "273"
          ],
          [
            "2011",
            "301",
            "289",
            ""
          ],
          [
            "2012",
            "254",
            "",
            ""
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
          "36 Months"
        ],
        "rows": [
          [
            "2010",
            "11,058",
            "12,300",
            "12,375"
          ],
          [
            "2011",
            "11,739",
            "13,005",
            ""
          ],
          [
            "2012",
            "13,970",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "Assume no further development after 36 months."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Using a frequency-severity technique, estimate the IBNR for all accident years.",
        "solution": "Cumulative Severity Triangle \nAY 12 24 36 \n10 38,000 45,000 45,330 \n11 39,000 45,000  \n12 55,000   \n \nAge-to-age sev. \nAY 12-24 24-36 \n10 1.184 1.007 \n11 1.154  \nSelected (avg) 1.169 1.007 \n \nAge-to-Ult. Selections \n12-ult. 24-ult. 36-ult. \n1.177 1.007 1.000 \n \nClaim Count Age-to-Age \nAY 12-24 24-36 \n10 .942 .996 \n11 .960  \nSelected (avg) .951 .996 \n \nClaim count Age-to-Ult. Selections \n12-ult 24-ult 36-ult \n.947 .996 1.000 \n \n \nAY (1) \nClaim \nCount \n(2) \nReptd \nSeverity \n(3) \nUlt Claim \nCount \n(4) \nUlt Sever. \n(5) \nUlt. Loss \n(6) \nReported \nloss \n(7) \nIBNR \n10 273 45,330 273 45,330 12,375 12,375 0 \n11 289 45,000 288 45,313 13,051 13,005 46,000 \n12 254 55,000 241 64,735 15,601 13,970 1,631,000 \n 1,677,000 \n(3) = (1) x Age to Ult \n(4) = (2) x Age to Ult \n(5) = (3) x (4) \n(7) = (5) – (6)",
        "insight": "Full credit was given for considering the claims as either incremental or cumulative as long as both the counts and dollars were both used as either cumulative or incremental."
      }
    ]
  },
  {
    "id": "fall-2013-17",
    "number": 17,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-9"
    ],
    "points": 2.0,
    "questionPage": 21,
    "solutionPages": [
      78,
      79
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
          "Earned Premium",
          "Expected Claim Ratio",
          "Reported Claims",
          "Reported CDF to Ultimate"
        ],
        "rows": [
          [
            "2010",
            "19,800",
            "50%",
            "6,900",
            "1.400"
          ],
          [
            "2011",
            "18,900",
            "50%",
            "5,800",
            "1.700"
          ],
          [
            "2012",
            "21,200",
            "50%",
            "3,200",
            "3.100"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.75,
        "prompt": "Estimate the unpaid claim amount as of December 31 , 2012 using the Benktander technique for accident years 2010 through 2012.",
        "solution": "AY EP (1) ECR (2) Rpt clms (3) Rpt CDF (4) Benktander \nUnpaid (5) \n 10 19800 50% 6900 1.400 2780 \n11 18900 50% 5800 1.700 3900 \n12 21200 50% 3200 3.100 7032 \nTotal                       13,802",
        "insight": "Apply the Benktander update for each accident year and sum the resulting unpaid amounts."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Estimate the unpaid claim amount as of December 31, 2012 using the Benktander technique with 1,000 iterations for accident year 2012.",
        "solution": "Benktander after 1000 iterations ≈ Development technique estimate. \nAY 2012 unpaid claims = 3200 x (3.100 – 1) = $6720",
        "insight": "With high level of iterations, the result will converge to the development technique."
      }
    ]
  },
  {
    "id": "fall-2013-18",
    "number": 18,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-15"
    ],
    "points": 2.0,
    "questionPage": 22,
    "solutionPages": [
      80,
      81,
      82,
      83
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "For each scenario described below, justify an appropriate reserving technique for estimating the unpaid claim liabilities at 12 months maturity."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Excess of loss reinsurance with an average attachment point of $100 million on product liability policies.",
        "solution": "Bornhuetter Ferguson method because at 12 month data will fluctuate a lot and will be thin and \nvolatile. Unreported ultimate @ 12 months will be based on expected claims.",
        "insight": "For excess layers, consider claim count, severity, and attachment effects when choosing a reserve technique."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Basic limits auto liability for an insurer that has recently implemented a new claims processing system to make faster payments to insureds without changing the company's reserving methodology.",
        "solution": "Berquist-Sherman settlement rate adjustment because it will adjust the paid triangle for faster \npayments.",
        "insight": "The candidate needed to acknowledge there would be a change in the claim reporting pattern and select a method that would account for this appropriately, such as the paid Berquist-Sherman method."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Self-insured workers compensation for a large corporation in a state where the statute of limitations for filing a claim has been recently reduced.",
        "solution": "Paid and reported triangle both will be affected. Using expected claim will be most appropriate \nas it relies on a prior than on claims observed in past.",
        "insight": "Some candidates incorrectly interpreted the change in statute of limitations as a change in benefit limits (instead of a reduction in the time to file a claim)."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "Property catastrophe coverage in a year with higher-than-expected catastrophe losses reported to the insurer but not yet paid.",
        "solution": "Bornhuetter Ferguson paid method because you don’t want to include the catastrophe effect on \ndata because it will distort age to age factors. Because it is at 12 months want to use BF because \nLDF are highly leveraged. You do have to add provision for expected loss to BF paid method.",
        "insight": "For points to be awarded for justification, the candidate needed to demonstrate that they understood that there was a distortion due to the higher than normal catastrophe activity but at the same time incorporate that into the method."
      }
    ]
  },
  {
    "id": "fall-2013-19",
    "number": 19,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-15",
      "reserving-16",
      "reserving-17"
    ],
    "points": 2.0,
    "questionPage": 23,
    "solutionPages": [
      84
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Within the last year, an insurer implemented a new claims processing system that resulted in faster payment of claims. However, the claims department failed to communicate this change to the actuarial department, and the actuary continues to use the paid loss development method to select the insurer's ultimate losses."
      },
      {
        "type": "line",
        "text": "For each item below, discuss the impact of using the actuary's calculation of ultimate losses on the following estimates."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Ultimate ALAE calculated using a paid ALAE to paid claims ratio method.",
        "solution": "The ultimate claims based on the paid loss development will be overstated. The ultimate paid \nALAE-to-paid claims ratio will be applied to overstated ultimate claims, resulting in overstated \nultimate ALAE.",
        "insight": "However, a common mistake was not to explain appropriately how this would lead to higher ALAE (it is the application of the historical paid to paid ratio to the overstated ultimate that produces the overstated ALAE result)."
      },
      {
        "id": "b",
        "points": 0.5,
        "prompt": "Ultimate ULAE calculated using the Wendy Johnson method.",
        "solution": "Wendy Johnson method assumes same amount of ULAE is spent on similar transactions \nregardless of claim size. Because this is a count-based technique, there is no impact from the \nactuary’s calculation of ultimate losses using the paid due technique.",
        "insight": "Most candidates did not receive credit for this part."
      },
      {
        "id": "c",
        "points": 0.5,
        "prompt": "Rates calculated for the upcoming policy year using the pure premium method.",
        "solution": "Since ultimate losses are overstated, the pure premium method will indicate a rate that is too \nhigh.",
        "insight": "The most common error was to indicate that the ultimate losses/ pure premium increased, but not mention anything about the rates themselves increasing."
      },
      {
        "id": "d",
        "points": 0.5,
        "prompt": "The reinsurance recoverable for the underlying business on an excess-of-loss reinsurance contract where the retention has been exceeded but the limit has not yet been exhausted.",
        "solution": "Estimate of reinsurance recoverable will also be overstated because the projection of ultimate \nL/ALAE will be overstated. Higher L/ALAE above retention in the xs layer. The limit is not \nexhausted  recovery is possible for losses, retention.",
        "insight": "A common error was a lack of detail, with credit lost if candidates did not mention the fact that the retention was exceeded or that the limit had not yet been reached."
      }
    ]
  },
  {
    "id": "fall-2013-20",
    "number": 20,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-10"
    ],
    "points": 2,
    "questionPage": 24,
    "solutionPages": [
      85
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
          "Earned Premium",
          "On-Level Adjustment",
          "Reported Claims",
          "Pure Premium Trend Factors",
          "Tort Reform Factors",
          "Reported CDF to Ultimate"
        ],
        "rows": [
          [
            "2010",
            "50,000",
            "0.90",
            "25,000",
            "1.061",
            "0.750",
            "1.250"
          ],
          [
            "2011",
            "52,000",
            "0.95",
            "20,000",
            "1.030",
            "0.900",
            "1.750"
          ],
          [
            "2012",
            "54,000",
            "1.00",
            "10,000",
            "1.000",
            "1.000",
            "2.500"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2,
        "prompt": "Using the Cape Cod technique, estimate the IBNR for accident year 2011.",
        "solution": "Re-state to AY 2011 level \nAY GP On-\nlevel \nadj \nOn-\nlevel GP \nUsed \nup \nprem \n2010 50 0.9474 47.368 37.894 \n2011 52 1 52 29.714 \n2012 54 1.0526 56.84 22.736 \n \n \nAY Reported Trend Tort Adj \nreported \n2010 25 1.03 0.833 21.449 \n2011 20 1 1 20 \n2012 10 0.9709 1.111 10.787 \n                         52.287 \n \nECR = 52.87/(37.814 + 29.714 + 22.736) = 0.5787 \nIBNR = 52000 x 0.5787(1 – 1/1.75) = 52000 x 0.248 = 12896.7",
        "insight": "Some common mistakes were: • Forgot to adjust the estimated claim ratio to bring it to the 2011 level."
      }
    ]
  },
  {
    "id": "fall-2013-21",
    "number": 21,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-11",
      "reserving-13"
    ],
    "points": 2.75,
    "questionPage": 25,
    "solutionPages": [
      86
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
          "Accident Year",
          "12 Months",
          "24 Months",
          "36 Months",
          "48 Months"
        ],
        "rows": [
          [
            "2009",
            "250",
            "400",
            "450",
            "500"
          ],
          [
            "2010",
            "225",
            "360",
            "405",
            ""
          ],
          [
            "2011",
            "250",
            "500",
            "",
            ""
          ],
          [
            "2012",
            "175",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "title": "Cumulative Paid Claims ($000)",
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
            "2,800",
            "4,340",
            "5,425"
          ],
          [
            "2010",
            "2,100",
            "3,360",
            "4,872",
            ""
          ],
          [
            "2011",
            "2000",
            "3,750",
            "",
            ""
          ],
          [
            "2012",
            "1,600",
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
            "2009",
            "500"
          ],
          [
            "2010",
            "450"
          ],
          [
            "2011",
            "625"
          ],
          [
            "2012",
            "700"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 2.75,
        "prompt": "Using the Berquist-Sherman paid adjustment to the paid claim development technique, estimate the ultimate claims for accident year 2012 as of December 31, 2012. Use linear interpolation to calculate adjusted paid claims.",
        "solution": "1. Disposal rate \n \n \n \nObserve slow down of claim closure at 12 mos., take latest CY disposal rate. \n \n2. Adj . cumulative paid claim \nAY 12 24 36 48 \n2009 1000 2800 4340 48 \n2010 1050 3360 4872  \n2011 1250 3750   \n2012 1600    \n \nEx 1250 = (2000 – 0) / (.4 – 0) *.25 \nAge 24 on not adjusted cause no change in disposal rates \n \n3. Paid development \n 12-24 24-36 36-48 48-ult. \nAge to \nage \n3.003 1.495 1.25 1.0 \nUlt. 5.614 1.869 1.25 1.0 \n \nAY 2012 ult. = 1600 x 5.614 = 8982.4k \n  \nAY 12 24 36 48 \n2009 0.5 0.8 0.9 1 \n2010 0.5 0.8 0.9  \n2011 0.4 0.8   \n2012 0.25",
        "insight": "The most common errors were: • Incorrectly interpolating age 12."
      }
    ]
  },
  {
    "id": "fall-2013-22",
    "number": 22,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-14"
    ],
    "points": 2.0,
    "questionPage": 26,
    "solutionPages": [
      87
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "Given the following information:"
      },
      {
        "type": "line",
        "text": "Reported Losses Gross of Reinsurance ($000,000)"
      },
      {
        "type": "table",
        "title": "Reported Losses Gross of Reinsurance ($ millions)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2010",
            "$20",
            "$40",
            "$60"
          ],
          [
            "2011",
            "$15",
            "$30",
            ""
          ],
          [
            "2012",
            "$18",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "Reported Losses Net of Reinsurance ($000,000)"
      },
      {
        "type": "table",
        "title": "Reported Losses Net of Reinsurance ($ millions)",
        "headers": [
          "Accident year",
          "12",
          "24",
          "36"
        ],
        "rows": [
          [
            "2010",
            "$16",
            "$32",
            "$30"
          ],
          [
            "2011",
            "$14",
            "$24",
            ""
          ],
          [
            "2012",
            "$11",
            "",
            ""
          ]
        ]
      },
      {
        "type": "line",
        "text": "• Each accident year has a 20% quota share reinsurance treaty."
      },
      {
        "type": "line",
        "text": "• Each accident year has an aggregate stop loss treaty attaching at $30 million applied after quota share."
      },
      {
        "type": "line",
        "text": "• Assume the gross data is correct."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Review the loss triangles above and briefly discuss whether the net data is reasonable based on both reinsurance treaties.",
        "solution": "No, it is not. AY 2011 and 2012 at age 12 do not reflect a 20% quota share (lower in 2011 and higher \nin 2012). In addition, AY 2010 at age 24 is $32M, which is too high given the loss treaty (but correctly \ndecreases at 36 mos.).",
        "insight": "Check whether gross and net reported losses move consistently with both reinsurance treaties and their attachment points."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Explain and justify an approach for estimating gross, ceded, and net ultimate claim estimates.",
        "solution": "Would use development method on the gross data (assume to be correct) and calculate impact of \nreinsurance to define net ultimate claims. Net data is defective so cannot use it. Difference between \ngross ult and net ult is ceded ult.",
        "insight": "Choose a coherent gross, ceded, and net projection approach, accounting for treaty limits and loss development."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Predict the relationship between the gross reported loss tail factor and the ceded reported loss tail factor. Explain the impact of both the quota share agreement and the stop loss agreement.",
        "solution": "The ceded reported loss tail factor will be greater. The quota share will not impact the tail factor but \nthe stop loss treaty does. As the gross increases beyond $30M, all of those losses will go into the \nceded triangle. The increase pattern of losses is greater in the tail compared to gross due to this \nreasoning.",
        "insight": "A majority of candidates misread the question and assumed that it asked them to compare gross and net tail factors."
      }
    ]
  },
  {
    "id": "fall-2013-23",
    "number": 23,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-6",
      "reserving-15"
    ],
    "points": 2.0,
    "questionPage": 27,
    "solutionPages": [
      88
    ],
    "sourceBlocks": [
      {
        "type": "line",
        "text": "The following table summarizes the results of various ultimate claim projection techniques as of December 31, 2012 in total for all accident years:"
      },
      {
        "type": "table",
        "title": "",
        "headers": [
          "Technique",
          "Ultimate Claims"
        ],
        "rows": [
          [
            "Reported Development",
            "10,000"
          ],
          [
            "Paid Development",
            "8,000"
          ],
          [
            "Expected Loss",
            "8,300"
          ],
          [
            "Reported Bornhuetter-Ferguson",
            "9,500"
          ],
          [
            "Paid Bornhuetter-Ferguson",
            "8,100"
          ],
          [
            "Reported Berquist-Sherman",
            "8,350"
          ],
          [
            "Paid Berquist-Sherman",
            "8,150"
          ]
        ]
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 0.5,
        "prompt": "Describe a potential operational change that explains the results above.",
        "solution": "Reported is higher than paid so potentially a slow down in closure. This is supported by BS being \nmore accurate.",
        "insight": "Some common errors were: • A simple repeat of the operational change."
      },
      {
        "id": "b",
        "points": 0.75,
        "prompt": "Identify three questions that the reserving actuary should ask the claims department to better understand the impact of the operational change identified in part a. above on the unpaid claims estimate.",
        "solution": "Did you change the case outstanding philosophy?  \nIs there any change in the claim system (automatic case outstanding formula)? \nDid you hire more experienced adjusters or change the claim adjuster team?",
        "insight": "Ask three specific claims-department questions that reveal how the operational change affects claim reporting and settlement."
      },
      {
        "id": "c",
        "points": 0.75,
        "prompt": "Briefly define three diagnostic tools that can be used to test the reasonability of ultimate claim selections.",
        "solution": "Implied Avg. Severity – Resulting ult. Claims/projected claim counts  \nImplied avg. frequency – resulting ult. Claim counts/exposures \nMonitor expected claim emergence vs. actual claim emergence to determine overall accuracy and \nbias.",
        "insight": "The common errors include stating disposal rates, statistics related to paid, reported, case."
      }
    ]
  },
  {
    "id": "fall-2013-24",
    "number": 24,
    "exam": "Fall 2013",
    "chapterIds": [
      "reserving-6",
      "reserving-15"
    ],
    "points": 3.0,
    "questionPage": 28,
    "solutionPages": [
      89,
      90
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
          "Selected Ultimate Claims as of December 31, 2011",
          "Actual Reported Claims as of December 31, 2011",
          "Actual Reported Claims as of December 31, 2012"
        ],
        "rows": [
          [
            "2009",
            "5,000",
            "5,000",
            "5,500"
          ],
          [
            "2010",
            "5,000",
            "3,333",
            "5,033"
          ],
          [
            "2011",
            "5,000",
            "2,500",
            "4,000"
          ]
        ]
      },
      {
        "type": "line",
        "text": "The selected ultimate claims as of December 31. 2011 were determined using the reported development technique."
      }
    ],
    "parts": [
      {
        "id": "a",
        "points": 1.25,
        "prompt": "For accident years 2009 through 2011, compare actual claim emergence to expected reported claim emergence between December 31, 2011 and December 31, 2012.",
        "solution": "Implied AA \n 12-24 24-36 36-ult. \nA-A 1.333 1.5 1 \nA-U 2 1.5 1 \n \nAcc \nyear \nActual \nEmergence \nExp \nEmergence \nDifference  % Diff \n2009 500 0 500 ∞ \n2010 1700 1667 33 1.02 \n2011 1500 833 667 1.8",
        "insight": "Credit was given if comparison based on Age-to-Age factors (actual vs expected)."
      },
      {
        "id": "b",
        "points": 0.25,
        "prompt": "Briefly discuss what change, if any, the actuary should make to the reported claim development factors based on the actual claim emergence as of December 31, 2012.",
        "solution": "It appears that 12-24 A-A selection may be too low and 36-ult. Needs to be increased from 1.0 as \nsignificant development occurred.",
        "insight": "Compare actual with expected emergence before changing the selected reported development factors."
      },
      {
        "id": "c",
        "points": 1.5,
        "prompt": "For each accident year, justify what changes, if any, the actuary should make to the ultimate claim selections based on the actual claim emergence as of December 31, 2012.",
        "solution": "2009: Increase ultimate to 5500 and assume that no more development will occur. \n2010: Add in factor for 36-ult of 1.1 to reach new ult. of  5536. \n2011: Maintain 24-36 factor and add 36-ult of 1.1 for new ult of (4000*1.5*1.1) = 6600.",
        "insight": "Candidates that did not receive full credit were those who either specified a change in the ultimate or justified how to make a change to the ultimate, but not both."
      }
    ]
  }
];

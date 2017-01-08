Ext.define('ExtMinPanel.store.Kpi', {
    extend: 'Ext.data.Store',
    alias: 'store.kpi',

    model: 'ExtMinPanel.model.Kpi',
    remoteFilter: true,

    proxy: {
        type: 'memory',
        reader: 'array',

        data: [
            [0,"clicks", "May 2010",              53.34321776,     100.1152082     ],
            [1,"clicks", "June 2010",             54.69016005,     65.56494967     ],
            [2,"clicks", "July 2010",             40.01984409,     92.45624175     ],
            [3,"clicks", "August 2010",           40.48879141,     74.98233893     ],
            [4,"clicks", "September 2010",        42.51196856,     103.072319      ],
            [5,"clicks", "October 2010",          50.32381328,     104.1799186     ],
            [6,"clicks", "November 2010",         34.11898341,     109.5350601     ],
            [7,"clicks", "December 2010",         32.44976606,     74.50063758     ],
            [8,"clicks", "January 2011",          17.18056779,     90.10920358     ],
            [9,"clicks", "February 2011",         52.05881614,     80.56466246     ],
            [10,"clicks","March 2011",            33.27167155,     97.60633968     ],
            [11,"clicks","April 2011",            38.07067955,     105.371117      ],
            [12,"clicks","May 2011",              46.49595093,     84.51678662     ],
            [13,"clicks","June 2011",             39.91110551,     77.25970637     ],
            [14,"clicks","July 2011",             67.3152342,      91.84850199     ],
            [15,"clicks","August 2011",           59.07162381,     54.38332355     ],
            [16,"clicks","September 2011",        56.17994668,     69.71565887     ],
            [17,"clicks","October 2011",          86.89161062,     92.34486077     ],
            [18,"clicks","November 2011",         78.35182808,     51.11323053     ],
            [19,"clicks","December 2011",         82.87141076,     66.11631926     ],
            [20,"clicks","January 2012",          84.60309841,     80.74901845     ],
            [21,"clicks","February 2012",         99.93719758,     83.13372022     ],
            [22,"clicks","March 2012",            106.8555931,     56.50678243     ],
            [23,"clicks","April 2012",            113.7228817,     42.16283367     ],
            [24,"clicks","May 2012",              111.8776603,     49.61530679     ],
            [25,"clicks","June 2012",             113.3106602,     34.18390743     ],
            [26,"clicks","July 2012",             93.03780957,     70.9560489      ],
            [27,"clicks","August 2012",           83.78071344,     65.6660914      ],
            [28,"clicks","September 2012",        95.24924696,     41.32918343     ],
            [29,"clicks","October 2012",          98.31825149,     64.05028156     ],
            [30,"clicks","November 2012",         72.63151964,     30.51735086     ],
            [31,"clicks","December 2012",         50.01413835,     29.69314915     ],
            [32,"clicks","January 2013",          81.64955519,     42.51919158     ],
            [33,"clicks","February 2013",         71.72912679,     49.68210264     ],
            [34,"clicks","March 2013",            64.65410192,     13.15671922     ],
            [35,"clicks","April 2013",            29.19237586,     42.43020025     ],
            [36,"clicks","May 2013",              61.06066066,     37.64644143     ],
            [37,"clicks","June 2013",             31.44137843,     30.01199757     ],
            [38,"clicks","July 2013",             18.68048338,     10.61947258     ],
            [39,"clicks","August 2013",           32.41391034,     57.03027991     ],
            [40,"clicks","September 2013",        23.68248581,     32.62967179     ],
            [41,"clicks","October 2013",          48.44376178,     32.4745558      ],
            [42,"clicks","November 2013",         56.66840028,     29.69863069     ],
            [43,"clicks","December 2013",         52.81059068,     32.36336121     ],
            [44,"clicks","January 2014",          53.39771093,     40.35770028     ],
            [45,"clicks","February 2014",         57.10482161,     19.42807449     ],
            [46,"clicks","March 2014",            68.81738952,     25.83296209     ],
            [47,"clicks","April 2014",            66.75458934,     60.95396364     ],
            [48,"clicks","May 2014",              65.81284993,     56.13067955     ],
            [49,"clicks","June 2014",             67.14098525,     29.50360539     ],
            [50,"redemption","May 2010",          68.78541952,     73.83796415     ],
            [51,"redemption","June 2010",         93.0330805,      50.50989887     ],
            [52,"redemption","July 2010",         68.5655515,      40.64627161     ],
            [53,"redemption","August 2010",       70.02212232,     77.06353224     ],
            [54,"redemption","September 2010",    78.55269212,     54.1042314      ],
            [55,"redemption","October 2010",      86.66990821,     44.29521389     ],
            [56,"redemption","November 2010",     81.8131907,      62.99555981     ],
            [57,"redemption","December 2010",     111.3518215,     82.98311324     ],
            [58,"redemption","January 2011",      81.40584334,     61.4311016      ],
            [59,"redemption","February 2011",     107.4753853,     67.54600755     ],
            [60,"redemption","March 2011",        93.12697373,     73.64983026     ],
            [61,"redemption","April 2011",        82.51686506,     87.54406398     ],
            [62,"redemption","May 2011",          68.22382804,     55.63187259     ],
            [63,"redemption","June 2011",         55.04843989,     74.2730431      ],
            [64,"redemption","July 2011",         54.26079274,     88.26477984     ],
            [65,"redemption","August 2011",       82.65834077,     73.94778064     ],
            [66,"redemption","September 2011",    74.06675502,     106.9787484     ],
            [67,"redemption","October 2011",      45.06887458,     105.8754961     ],
            [68,"redemption","November 2011",     53.71012185,     74.62697483     ],
            [69,"redemption","December 2011",     45.76945567,     93.52929645     ],
            [70,"redemption","January 2012",      40.28806254,     84.46406374     ],
            [71,"redemption","February 2012",     45.11947706,     59.76149632     ],
            [72,"redemption","March 2012",        53.15990555,     76.54852        ],
            [73,"redemption","April 2012",        18.47822684,     62.40871735     ],
            [74,"redemption","May 2012",          26.88677677,     56.37902614     ],
            [75,"redemption","June 2012",         53.07958455,     82.16612394     ],
            [76,"redemption","July 2012",         51.12003141,     70.56996924     ],
            [77,"redemption","August 2012",       40.37637935,     81.00815834     ],
            [78,"redemption","September 2012",    51.25610804,     49.96693153     ],
            [79,"redemption","October 2012",      56.33808173,     74.69503745     ],
            [80,"redemption","November 2012",     68.82095221,     83.38837354     ],
            [81,"redemption","December 2012",     49.80140757,     64.9313425      ],
            [82,"redemption","January 2013",      66.95842846,     62.6332992      ],
            [83,"redemption","February 2013",     72.33846037,     56.51947925     ],
            [84,"redemption","March 2013",        94.35737603,     35.99155828     ],
            [85,"redemption","April 2013",        97.71415293,     42.80623324     ],
            [86,"redemption","May 2013",          103.9686145,     53.72375476     ],
            [87,"redemption","June 2013",         85.34685203,     38.82037102     ],
            [88,"redemption","July 2013",         98.73416455,     62.15346433     ],
            [89,"redemption","August 2013",       75.32157973,     23.66379738     ],
            [90,"redemption","September 2013",    89.72719705,     62.24478753     ],
            [91,"redemption","October 2013",      81.8442231,      40.25135437     ],
            [92,"redemption","November 2013",     101.3772379,     22.24866309     ],
            [93,"redemption","December 2013",     75.63304388,     60.02298886     ],
            [94,"redemption","January 2014",      97.43899851,     31.43154371     ],
            [95,"redemption","February 2014",     93.51713151,     30.88595132     ],
            [96,"redemption","March 2014",        83.14395398,     58.95084719     ],
            [97,"redemption","April 2014",        66.7850417,      14.93916416     ],
            [98,"redemption","May 2014",          60.9905471,      51.16786536     ],
            [99,"redemption","June 2014",         54.65355603,     41.00113419     ],
            [100,"sales","May 2010",              39.31109289,     57.59563546     ],
            [101,"sales","June 2010",             40.91728573,     42.88747711     ],
            [102,"sales","July 2010",             58.94113927,     23.32729559     ],
            [103,"sales","August 2010",           52.95083591,     24.33871661     ],
            [104,"sales","September 2010",        21.11758313,     29.60587097     ],
            [105,"sales","October 2010",          53.53800894,     30.04906835     ],
            [106,"sales","November 2010",         42.4397106,      47.04612536     ],
            [107,"sales","December 2010",         26.2095974,      62.47743488     ],
            [108,"sales","January 2011",          30.58255141,     31.75990875     ],
            [109,"sales","February 2011",         36.9349803,      60.36200593     ],
            [110,"sales","March 2011",            62.87394313,     36.02085794     ],
            [111,"sales","April 2011",            37.30938123,     60.48191826     ],
            [112,"sales","May 2011",              40.70512909,     48.20802472     ],
            [113,"sales","June 2011",             59.86076756,     47.70589603     ],
            [114,"sales","July 2011",             77.09829898,     56.44902327     ],
            [115,"sales","August 2011",           73.17741965,     51.96340706     ],
            [116,"sales","September 2011",        88.49624711,     85.02357507     ],
            [117,"sales","October 2011",          64.96186053,     39.00235783     ],
            [118,"sales","November 2011",         83.15030445,     60.93368341     ],
            [119,"sales","December 2011",         95.81160565,     62.36677091     ],
            [120,"sales","January 2012",          110.5874922,     45.90456046     ],
            [121,"sales","February 2012",         98.92823288,     95.60247828     ],
            [122,"sales","March 2012",            110.2900286,     73.3366203      ],
            [123,"sales","April 2012",            92.55486463,     101.5348455     ],
            [124,"sales","May 2012",              92.11265903,     70.25968567     ],
            [125,"sales","June 2012",             73.93842828,     56.07893064     ],
            [126,"sales","July 2012",             79.13436817,     66.78420555     ],
            [127,"sales","August 2012",           72.20594524,     66.36218002     ],
            [128,"sales","September 2012",        94.64694384,     69.88200656     ],
            [129,"sales","October 2012",          91.37790858,     102.7245038     ],
            [130,"sales","November 2012",         79.69172287,     83.01390904     ],
            [131,"sales","December 2012",         59.66054702,     81.60650432     ],
            [132,"sales","January 2013",          52.23557286,     72.38299569     ],
            [133,"sales","February 2013",         36.80411006,     88.2101845      ],
            [134,"sales","March 2013",            55.75359373,     88.1473107      ],
            [135,"sales","April 2013",            62.30057718,     98.41657376     ],
            [136,"sales","May 2013",              39.83018157,     82.65405281     ],
            [137,"sales","June 2013",             23.17592912,     69.92175223     ],
            [138,"sales","July 2013",             21.52257814,     70.54505329     ],
            [139,"sales","August 2013",           36.50127445,     84.81871541     ],
            [140,"sales","September 2013",        27.1861296,      74.011619       ],
            [141,"sales","October 2013",          26.57600151,     80.70238741     ],
            [142,"sales","November 2013",         23.98446771,     49.44929297     ],
            [143,"sales","December 2013",         46.86933142,     56.64978486     ],
            [144,"sales","January 2014",          39.18567788,     67.38300221     ],
            [145,"sales","February 2014",         53.65804691,     44.7934002      ],
            [146,"sales","March 2014",            50.69153581,     50.2677763      ],
            [147,"sales","April 2014",            61.31902897,     74.90533031     ],
            [148,"sales","May 2014",              58.46350145,     59.35572525     ],
            [149,"sales","June 2014",             81.42597583,     74.26703681     ],
            [150,"goalsmet","May 2010",           95.04829084,     47.23706597     ],
            [151,"goalsmet","June 2010",          73.78333039,     45.11085271     ],
            [152,"goalsmet","July 2010",          94.3604361,      51.34704992     ],
            [153,"goalsmet","August 2010",        105.2655568,     70.96460688     ],
            [154,"goalsmet","September 2010",     79.14537763,     43.02033715     ],
            [155,"goalsmet","October 2010",       98.37533162,     29.29104543     ],
            [156,"goalsmet","November 2010",      104.796126,      62.32855994     ],
            [157,"goalsmet","December 2010",      97.51240042,     38.74872847     ],
            [158,"goalsmet","January 2011",       102.6453565,     49.64005545     ],
            [159,"goalsmet","February 2011",      102.1994732,     30.0025852      ],
            [160,"goalsmet","March 2011",         73.39559191,     50.47642849     ],
            [161,"goalsmet","April 2011",         61.27119773,     59.07263871     ],
            [162,"goalsmet","May 2011",           73.31990505,     47.33338594     ],
            [163,"goalsmet","June 2011",          58.29569167,     25.72339495     ],
            [164,"goalsmet","July 2011",          55.33111777,     59.6825653      ],
            [165,"goalsmet","August 2011",        71.80238112,     19.25548321     ],
            [166,"goalsmet","September 2011",     34.97347316,     39.75761826     ],
            [167,"goalsmet","October 2011",       52.30827648,     28.2533373      ],
            [168,"goalsmet","November 2011",      60.03874429,     31.42127572     ],
            [169,"goalsmet","December 2011",      43.95755597,     27.92200989     ],
            [170,"goalsmet","January 2012",       24.81828778,     38.29926118     ],
            [171,"goalsmet","February 2012",      47.12463933,     43.30320703     ],
            [172,"goalsmet","March 2012",         50.98797045,     43.40231933     ],
            [173,"goalsmet","April 2012",         37.41880312,     69.2630494      ],
            [174,"goalsmet","May 2012",           42.9862138,      54.77940011     ],
            [175,"goalsmet","June 2012",          33.04961008,     65.52333076     ],
            [176,"goalsmet","July 2012",          24.85540873,     52.80462406     ],
            [177,"goalsmet","August 2012",        44.00374943,     66.06202895     ],
            [178,"goalsmet","September 2012",     34.78215431,     61.77950311     ],
            [179,"goalsmet","October 2012",       56.29075538,     82.71717255     ],
            [180,"goalsmet","November 2012",      67.34190039,     52.40606649     ],
            [181,"goalsmet","December 2012",      54.10378896,     57.37141322     ],
            [182,"goalsmet","January 2013",       64.16040062,     83.59736046     ],
            [183,"goalsmet","February 2013",      79.90361832,     86.24452685     ],
            [184,"goalsmet","March 2013",         84.00004303,     55.05804615     ],
            [185,"goalsmet","April 2013",         106.4863033,     75.97050499     ],
            [186,"goalsmet","May 2013",           95.15372223,     75.71648299     ],
            [187,"goalsmet","June 2013",          78.62504017,     63.06792229     ],
            [188,"goalsmet","July 2013",          83.23920266,     67.80856788     ],
            [189,"goalsmet","August 2013",        88.22784647,     85.88663488     ],
            [190,"goalsmet","September 2013",     104.6384174,     93.35448609     ],
            [191,"goalsmet","October 2013",       107.3812999,     89.49969638     ],
            [192,"goalsmet","November 2013",      69.63749081,     99.29657118     ],
            [193,"goalsmet","December 2013",      84.60019278,     84.93156692     ],
            [194,"goalsmet","January 2014",       86.90236866,     103.9079136     ],
            [195,"goalsmet","February 2014",      63.41599588,     100.2525362     ],
            [196,"goalsmet","March 2014",         58.48243609,     107.2668902     ],
            [197,"goalsmet","April 2014",         71.55836864,     98.57697173     ],
            [198,"goalsmet","May 2014",           71.98521015,     82.93367643     ],
            [199,"goalsmet","June 2014",          44.21288092,     86.46717701     ]
        ]
    }
});

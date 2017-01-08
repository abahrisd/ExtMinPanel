Ext.define('ExtMinPanel.view.minobrtab.MinObrTabModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.minobrtab',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],
	data: {
		minobrgridstore1:[
			{ Indicator: 'Субсидии на финансовое обеспечение выполнения государственного задания', SvodRosp: 198147.90, BudgObyaz: 185010.70, CashIspRash: 183394.50, CashPerfPerc: 92.6},
			{ Indicator: 'Субсидии на иные цели', SvodRosp: 69300.70, BudgObyaz: 66764.70, CashIspRash: 60230.40, CashPerfPerc: 86.9},
			{ Indicator: 'Межбюджетные трансферты', SvodRosp: 55162.50, BudgObyaz: 54971.70, CashIspRash: 50567.00, CashPerfPerc: 91.7},
			{ Indicator: 'Инвестиционные расходы (за исключением межбюджетных трансфертов)', SvodRosp: 13173.50, BudgObyaz: 10096.50, CashIspRash: 6466.70, CashPerfPerc: 49.1},
			{ Indicator: 'Прочие расходы', SvodRosp: 60466.80, BudgObyaz: 53689.70, CashIspRash: 47122.90, CashPerfPerc: 77.9}
		],
		minobrgridstore2:[
			{ Indicator: 'Субсидии на финансовое обеспечение выполнения государственного задания', SvodRosp: 196697.20, BudgObyaz: 190512.50, CashIspRash: 187257.50, CashPerfPerc: 95.20},
			{ Indicator: 'Субсидии на иные цели', SvodRosp: 70592.60, BudgObyaz: 67437.40, CashIspRash: 66540.20, CashPerfPerc: 94.26},
			{ Indicator: 'Межбюджетные трансферты', SvodRosp: 55007.60, BudgObyaz: 54985.50, CashIspRash: 54165.30, CashPerfPerc: 98.47},
			{ Indicator: 'Инвестиционные расходы (за исключением межбюджетных трансфертов)', SvodRosp: 13221.00, BudgObyaz: 11208.40, CashIspRash: 7229.80, CashPerfPerc: 54.68},
			{ Indicator: 'Прочие расходы', SvodRosp: 58838.10, BudgObyaz: 54928.90, CashIspRash: 51346.80, CashPerfPerc: 87.27}
		],
		minobrgridstore3:[
			{ Indicator: 'Субсидии на финансовое обеспечение выполнения государственного задания', SvodRosp: 196162.40, BudgObyaz: 196429.60, CashIspRash: 196147.90, CashPerfPerc: 99.99},
			{ Indicator: 'Субсидии на иные цели', SvodRosp: 69291.20, BudgObyaz: 69329.90, CashIspRash: 69279.50, CashPerfPerc: 99.98},
			{ Indicator: 'Межбюджетные трансферты', SvodRosp: 55029.60, BudgObyaz: 55017.40, CashIspRash: 54801.80, CashPerfPerc: 99.59},
			{ Indicator: 'Инвестиционные расходы (за исключением межбюджетных трансфертов)', SvodRosp: 13106.10, BudgObyaz: 12920.90, CashIspRash: 10511.40, CashPerfPerc: 80.20},
			{ Indicator: 'Прочие расходы', SvodRosp: 57794.90, BudgObyaz: 57401.90, CashIspRash: 57348.80, CashPerfPerc: 99.23}
		]
	},
    stores: {
	    otchetPeriod: {
		    storeId: 'periods',
		    fields: [
			    'Period_id',
			    'Period_Name'
		    ],
		    data: [
			    {Period_id: 1, Period_Name: '03.11.2015'},
			    {Period_id: 2, Period_Name: '01.12.2015'},
			    {Period_id: 3, Period_Name: '30.12.2015'}
		    ]
	    },
	    minobrgridstore: {
		    fields:[ 'Indicator', 'SvodRosp', 'BudgObyaz', 'CashIspRash', 'CashPerfPerc', 'name'],
		    data: [
			    { Indicator: 'Субсидии на финансовое обеспечение выполнения государственного задания', SvodRosp: 196162.40, BudgObyaz: 196429.60, CashIspRash: 196147.90, CashPerfPerc: 99.99},
			    { Indicator: 'Субсидии на иные цели', SvodRosp: 69291.20, BudgObyaz: 69329.90, CashIspRash: 69279.50, CashPerfPerc: 99.98},
			    { Indicator: 'Межбюджетные трансферты', SvodRosp: 55029.60, BudgObyaz: 55017.40, CashIspRash: 54801.80, CashPerfPerc: 99.59},
			    { Indicator: 'Инвестиционные расходы (за исключением межбюджетных трансфертов)', SvodRosp: 13106.10, BudgObyaz: 12920.90, CashIspRash: 10511.40, CashPerfPerc: 80.20},
			    { Indicator: 'Прочие расходы', SvodRosp: 57794.90, BudgObyaz: 57401.90, CashIspRash: 57348.80, CashPerfPerc: 99.23}
		    ]
	    }
    }
});

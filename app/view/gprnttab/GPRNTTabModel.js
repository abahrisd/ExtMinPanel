Ext.define('ExtMinPanel.view.gprnttab.GPRNTTabModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.gprnttab',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],
	data: {
		gprntgridstore1:[
			{ Indicator: 'Субсидии на финансовое обеспечение выполнения государственного задания', SvodRosp: 78319.2, CashIspRash: 74714.4, CashPerfPerc: 95.4},
			{ Indicator: 'Субсидии на иные цели', SvodRosp: 23752, CashIspRash: 21295.7, CashPerfPerc: 89.7},
			{ Indicator: 'ФЦП «Исследования и разработки по приоритетным направлениям развития научно-технологического комплекса России на 2014-2020 годы»', SvodRosp: 21390.2, CashIspRash: 16179.2, CashPerfPerc: 75.6},
			{ Indicator: 'Имущественный взнос Российскому научному фонду', SvodRosp: 15494.4, CashIspRash: 15494.4, CashPerfPerc: 100.0},
			{ Indicator: 'Прочие расходы', SvodRosp: 12665.1, CashIspRash: 10043, CashPerfPerc: 79.3}
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
			    [1, '01.12.2015']
		    ]
	    },
	    gprntgridstore: {
		    fields:[ 'Indicator', 'SvodRosp', 'CashIspRash', 'CashPerfPerc', 'name'],
		    data: [
			    { Indicator: 'Субсидии на финансовое обеспечение выполнения государственного задания', SvodRosp: 78319.2, CashIspRash: 74714.4, CashPerfPerc: 95.4},
			    { Indicator: 'Субсидии на иные цели', SvodRosp: 23752, CashIspRash: 21295.7, CashPerfPerc: 89.7},
			    { Indicator: 'ФЦП «Исследования и разработки по приоритетным направлениям развития научно-технологического комплекса России на 2014-2020 годы»', SvodRosp: 21390.2, CashIspRash: 16179.2, CashPerfPerc: 75.6},
			    { Indicator: 'Имущественный взнос Российскому научному фонду', SvodRosp: 15494.4, CashIspRash: 15494.4, CashPerfPerc: 100.0},
			    { Indicator: 'Прочие расходы', SvodRosp: 12665.1, CashIspRash: 10043, CashPerfPerc: 79.3}
		    ]
	    }
    }
});

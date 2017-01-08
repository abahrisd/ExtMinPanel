Ext.define('ExtMinPanel.view.investtab.InvestTabModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.investtab',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],
	data: {
		investgridstore1:[
			{ Indicator: 'Строительство и реконструкция МДЦ "Артек" в рамках ФЦП "Социально-экономическое развитие Республики Крым и г. Севастополя до 2020 года"', SvodRosp: 2300.6, BudgObyaz: 2292.1, CashIspRash: 694, CashPerfPerc: 30.2},
			{ Indicator: 'Строительство школ в рамках ФЦП "Юг России (2014-2020 годы)"', SvodRosp: 8985.4, BudgObyaz: 8985.4, CashIspRash: 8596.3, CashPerfPerc: 95.7},
			{ Indicator: 'Реконструкция и строительство учебно-лабораторных корпусов, библиотек в рамках ФЦП развития образования на 2011-2015', SvodRosp: 5140.1, BudgObyaz: 3828.7, CashIspRash: 3371, CashPerfPerc: 65.6},
			{ Indicator: 'Строительство общежитий  в рамках ФЦП развития образования на 2011-2015', SvodRosp: 1345.8, BudgObyaz: 1291.7, CashIspRash: 1013.6, CashPerfPerc: 75.3},
			{ Indicator: 'Прочие расходы', SvodRosp: 5475.5, BudgObyaz: 4038.3, CashIspRash: 2459.9, CashPerfPerc: 44.9}
		],
		investgridstore2:[
			{ Indicator: 'Строительство и реконструкция МДЦ "Артек" в рамках ФЦП "Социально-экономическое развитие Республики Крым и г. Севастополя до 2020 года"', SvodRosp: 2636.2, BudgObyaz: 2636.2, CashIspRash: 694, CashPerfPerc: 26.3},
			{ Indicator: 'Строительство школ в рамках ФЦП "Юг России (2014-2020 годы)"', SvodRosp: 8985.4, BudgObyaz: 8985.4, CashIspRash: 8596.3, CashPerfPerc: 95.7},
			{ Indicator: 'Реконструкция и строительство учебно-лабораторных корпусов, библиотек в рамках ФЦП развития образования на 2011-2015', SvodRosp: 5012.6, BudgObyaz: 4293.1, CashIspRash: 3543.8, CashPerfPerc: 70.7},
			{ Indicator: 'Строительство общежитий  в рамках ФЦП развития образования на 2011-2015', SvodRosp: 1459.3, BudgObyaz: 1294.8, CashIspRash: 1031.2, CashPerfPerc: 70.7},
			{ Indicator: 'Прочие расходы', SvodRosp: 5117.6, BudgObyaz: 3988.9, CashIspRash: 2692.8, CashPerfPerc: 52.6}
		],
		investgridstore3:[
			{ Indicator: 'Строительство и реконструкция МДЦ "Артек" в рамках ФЦП "Социально-экономическое развитие Республики Крым и г. Севастополя до 2020 года"', SvodRosp: 2636.2, BudgObyaz: 2627.6, CashIspRash: 1444.2, CashPerfPerc: 54.8},
			{ Indicator: 'Строительство школ в рамках ФЦП "Юг России (2014-2020 годы)"', SvodRosp: 8985.4, BudgObyaz: 8985.4, CashIspRash: 8804.4, CashPerfPerc: 98.0},
			{ Indicator: 'Реконструкция и строительство учебно-лабораторных корпусов, библиотек в рамках ФЦП развития образования на 2011-2015', SvodRosp: 5012.6, BudgObyaz: 4928.2, CashIspRash: 4762.7, CashPerfPerc: 95.0},
			{ Indicator: 'Строительство общежитий  в рамках ФЦП развития образования на 2011-2015', SvodRosp: 1459.3, BudgObyaz: 1458.1, CashIspRash: 1330.5, CashPerfPerc: 91.2},
			{ Indicator: 'Прочие расходы', SvodRosp: 5024.5, BudgObyaz: 4921.6, CashIspRash: 3988.5, CashPerfPerc: 79.4}
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
			    [1, '18.11.2015'],
			    [2, '01.12.2015'],
			    [3, '30.12.2015']
		    ]
	    },
	    investgridstore: {
		    fields:[ 'Indicator', 'SvodRosp', 'BudgObyaz', 'CashIspRash', 'CashPerfPerc', 'name'],
		    data: [
			    { Indicator: 'Строительство и реконструкция МДЦ "Артек" в рамках ФЦП "Социально-экономическое развитие Республики Крым и г. Севастополя до 2020 года"', SvodRosp: 2636.2, BudgObyaz: 2627.6, CashIspRash: 1444.2, CashPerfPerc: 54.8},
			    { Indicator: 'Строительство школ в рамках ФЦП "Юг России (2014-2020 годы)"', SvodRosp: 8985.4, BudgObyaz: 8985.4, CashIspRash: 8804.4, CashPerfPerc: 98.0},
			    { Indicator: 'Реконструкция и строительство учебно-лабораторных корпусов, библиотек в рамках ФЦП развития образования на 2011-2015', SvodRosp: 5012.6, BudgObyaz: 4928.2, CashIspRash: 4762.7, CashPerfPerc: 95.0},
			    { Indicator: 'Строительство общежитий  в рамках ФЦП развития образования на 2011-2015', SvodRosp: 1459.3, BudgObyaz: 1458.1, CashIspRash: 1330.5, CashPerfPerc: 91.2},
			    { Indicator: 'Прочие расходы', SvodRosp: 5024.5, BudgObyaz: 4921.6, CashIspRash: 3988.5, CashPerfPerc: 79.4}
		    ]
	    }
    }
});

Ext.define('ExtMinPanel.utils.BaseModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.basemodel',

	data: {
		gprogridstore1:[
			{ Indicator: '�������� �� ���������� ����������� ���������� ���������������� �������', SvodRosp: 289695.80, CashIspRash: 279935.90, CashPerfPerc: 96.6},
			{ Indicator: '�������� �� ���� ����', SvodRosp: 96125.90, CashIspRash: 91669.40, CashPerfPerc: 95.4},
			{ Indicator: '����������� ������������� (�� ����������� ������������ �����������)', SvodRosp: 16338.40, CashIspRash: 12517.33, CashPerfPerc: 76.6},
			{ Indicator: '������������ ����������', SvodRosp: 34326.20, CashIspRash: 34167.40, CashPerfPerc: 99.5},
			{ Indicator: '������ �������', SvodRosp: 11329.20, CashIspRash: 8273.37, CashPerfPerc: 73.0}
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
		gprogridstore: {
			fields:[ 'Indicator', 'SvodRosp', 'CashIspRash', 'CashPerfPerc', 'name'],
			data: [
				{ Indicator: '�������� �� ���������� ����������� ���������� ���������������� �������', SvodRosp: 289695.80, CashIspRash: 279935.90, CashPerfPerc: 96.6},
				{ Indicator: '�������� �� ���� ����', SvodRosp: 96125.90, CashIspRash: 91669.40, CashPerfPerc: 95.4},
				{ Indicator: '����������� ������������� (�� ����������� ������������ �����������)', SvodRosp: 16338.40, CashIspRash: 12517.33, CashPerfPerc: 76.6},
				{ Indicator: '������������ ����������', SvodRosp: 34326.20, CashIspRash: 34167.40, CashPerfPerc: 99.5},
				{ Indicator: '������ �������', SvodRosp: 11329.20, CashIspRash: 8273.37, CashPerfPerc: 73.0}
			]
		}
	}

	//TODO - add data, formulas and/or methods to support your view
});
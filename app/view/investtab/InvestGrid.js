/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.investtab.InvestGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'investgrid',
	cls: 'dynamic-pl-grid',
	flex: 1,
	layout:{
		type: 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'stndartgrid',
		reference: 'InvestGrid',
		columns: {
			defaults: {
				flex: 1,
				align: 'center',
				cellWrap: true,
				format: '0,000.0',
				menuDisabled: true,
				summaryType: 'sum',
				summaryRenderer: 'basicSummary',
				sortable: false
			},
			items: [{
				text: 'Наименование показателя',
				flex: 2,
				summaryRenderer: 'totalSummary',
				dataIndex: 'Indicator'
				},{
					xtype:'numbercolumn',
					//xtype: 'text',
					text: 'Сводная бюджетная роспись, млн.руб.',
					dataIndex: 'SvodRosp'
				},
				{
					flex: 1,
					xtype:'numbercolumn',
					text: 'Принятые бюджетные обязательства, млн.руб.',
					dataIndex: 'BudgObyaz'
				},
				{
					xtype:'numbercolumn',
					text: 'Кассовое исполнение расходов, млн.руб.',
					dataIndex: 'CashIspRash'
				},
				{
					xtype:'numbercolumn',
					text: '% кассового исполнения от СБР',
					summaryType: 'average',
					dataIndex: 'CashPerfPerc'
				}]
		},
		bind: {
			store: '{investgridstore}'
		}
	}]
});
/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.gprnttab.GPRNTGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'gprntgrid',
	cls: 'dynamic-pl-grid',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'stndartgrid',
		reference: 'gprntGrid',
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
			store: '{gprntgridstore}'
		}
	}]
});
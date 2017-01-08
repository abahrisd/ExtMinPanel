/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.gprotab.GPROGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'gprogrid',
	cls: 'dynamic-pl-grid',
	flex: 1,
	layout: {
		type: 'vbox',
		//align: 'center'
		align: 'stretch'
	},
	items:[{
		xtype: 'stndartgrid',
		reference: 'gproGrid',
		//scrollable: true,
		columns: {
			defaults: {
				flex: 1,
				cellWrap: true,
				align: 'center',
				menuDisabled: true,
				summaryType: 'sum',
				format: '0,000.0',
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
				text: 'Сводная бюджетная роспись, млн.руб.',
				dataIndex: 'SvodRosp'
			},{
				xtype:'numbercolumn',
				text: 'Кассовое исполнение расходов, млн.руб.',
				dataIndex: 'CashIspRash'
			},{
				xtype:'numbercolumn',
				text: '% кассового исполнения от СБР',
				summaryType: 'average',
				dataIndex: 'CashPerfPerc'
			}]
		},
		bind: {
			store: '{gprogridstore}'
		}
	}]
});
/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.transfertab.TransferGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'transfergrid',
	cls: 'dynamic-pl-grid',
	flex: 1,
	layout: {
		type: 'vbox',
		//align: 'center'
		align: 'stretch'
	},
	items:[{
		xtype: 'stndartgrid',
		reference: 'transferGrid',
		columns: {
			defaults: {
				flex: 1,
				menuDisabled: true,
				cellWrap: true,
				align: 'center',
				format: '0,000.0',
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
					text: 'Перечислено в субъекты РФ, млн.руб.',
					dataIndex: 'Perechisleno'
				},
				{
					xtype:'numbercolumn',
					text: 'Освоено субъектами РФ, млн.руб.',
					dataIndex: 'Osvoeno'
				},
				{
					xtype:'numbercolumn',
					text: 'Остатки средств в бюджетах субъектов РФ, млн. руб.',
					summaryType: 'average',
					dataIndex: 'Ostatki'
				}]
		},
		bind: {
			store: '{transfergridstore}'
		}
	}]
});
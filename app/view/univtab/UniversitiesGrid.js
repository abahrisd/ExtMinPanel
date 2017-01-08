/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.univtab.UniversitiesGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'universitiesgrid',
	cls: 'dynamic-pl-grid',
	flex: 1,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'grid',
		reference: 'universitiesGrid',
		enableColumnMove: false,
		enableColumnResize: false,
		scrollable: false,
		columns: {
			defaults: {
				flex: 1,
				menuDisabled: true,
				cellWrap: true,
				align: 'center',
				format: '0,000.0',
				sortable: false
			},
			items: [{
				text: '№ п/п',
				flex: 0,
				width: 60,
				dataIndex: 'Index'
			},{
				text: 'Наименование показателя',
				flex: 2,
				dataIndex: 'Indicator'
			},{
				xtype:'numbercolumn',
				text: '2013 г.',
				dataIndex: 'Year2013'
			},{
				xtype:'numbercolumn',
				text: '2014 г.',
				dataIndex: 'Year2014'
			},{
				xtype:'numbercolumn',
				text: '2015 г.',
				dataIndex: 'Year2015'
			},{
				xtype:'numbercolumn',
				text: '2016 г.',
				dataIndex: 'Year2016'
			}]
		},
		bind: {
			store: '{universitiesgridstore}'
		}
	}]
});
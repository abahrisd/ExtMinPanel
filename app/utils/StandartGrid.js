/**
 * Created by SABAhri on 17.02.2016.
 */
Ext.define('ExtMinPanel.utils.StandartGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'stndartgrid',
	enableColumnMove: false,
	enableColumnResize: false,
	scrollable: false,
	features: [{
		ftype: 'summary',
		dock: 'top'
	}],
	flex: 1
});
Ext.define('ExtMinPanel.view.transfertab.TransferTabController', {
    extend: 'ExtMinPanel.utils.BaseController',
    alias: 'controller.transfertab',
	onPeriodChange: function(combo, newValue, oldValue, eOpts){

		var grid = this.lookupReference('transferGrid'),
			model = this.getViewModel(),
			store = model.data['transfergridstore' + newValue];

		grid.getStore().loadData(store, false);
	}
});

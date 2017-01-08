Ext.define('ExtMinPanel.view.gprnttab.GPRNTTabController', {
    extend: 'ExtMinPanel.utils.BaseController',
    alias: 'controller.gprnttab',
	onPeriodChange: function(combo, newValue, oldValue, eOpts){

		var grid = this.lookupReference('gprntGrid'),
			model = this.getViewModel(),
			store = model.data['gprntgridstore' + newValue];

		grid.getStore().loadData(store, false);

	}
});

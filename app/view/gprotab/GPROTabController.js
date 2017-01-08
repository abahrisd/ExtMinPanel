Ext.define('ExtMinPanel.view.gprotab.GPROTabController', {
    extend: 'ExtMinPanel.utils.BaseController',
    alias: 'controller.gprotab',
	onPeriodChange: function(combo, newValue, oldValue, eOpts){

		var grid = this.lookupReference('gproGrid'),
			model = this.getViewModel(),
			store = model.data['gprogridstore' + newValue];

		grid.getStore().loadData(store, false);
	}
});

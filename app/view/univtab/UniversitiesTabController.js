Ext.define('ExtMinPanel.view.univtab.UniversitiesTabController', {
    extend: 'ExtMinPanel.utils.BaseController',
    alias: 'controller.univtab',
	onPeriodChange: function(combo, newValue, oldValue, eOpts){

		var grid = this.lookupReference('universitiesGrid'),
			model = this.getViewModel(),
			store = model.data['universitiesgridstore' + newValue];

		grid.getStore().loadData(store, false);
	}
});

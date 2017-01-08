Ext.define('ExtMinPanel.view.investtab.InvestTabController', {
    extend: 'ExtMinPanel.utils.BaseController',
    alias: 'controller.investtab',
	onPeriodChange: function(combo, newValue, oldValue, eOpts){

		var grid = this.lookupReference('InvestGrid'),
			model = this.getViewModel(),
			store = model.data['investgridstore' + newValue];

		grid.getStore().loadData(store, false);
	}
});

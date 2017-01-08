Ext.define('ExtMinPanel.view.minobrtab.MinObrTabController', {
    extend: 'ExtMinPanel.utils.BaseController',
    alias: 'controller.minobrtab',
	onPeriodChange: function(combo, newValue, oldValue, eOpts){

		var grid = this.lookupReference('MinObrGrid'),
			model = this.getViewModel(),
			store = model.data['minobrgridstore' + newValue];

		grid.getStore().loadData(store, false);
	}
});

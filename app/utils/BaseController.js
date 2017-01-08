Ext.define('ExtMinPanel.utils.BaseController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.basecontroller',
	basicSummary: function(value, summaryData, dataIndex) {
		return "<strong>"+Ext.util.Format.number(value, '0,000.0')+"</strong>";
	},
	totalSummary: function(value, summaryData, dataIndex) {
		return "<strong>"+'ВСЕГО'+"</strong>";
	},
	renderChartLabel: function(text, sprite, config, rendererData, index) {
		return {text: Ext.util.Format.number(rendererData.store.getAt(index).get('SvodRosp'), '0,000.0')};
	},
	renderWrapLabel: function(label) {
		 return label.split(' ').map(function(el){
			 if (el.length > 4){
			 return el + '\n';
			 } else {
			 return el + ' '
			 }
		 }).join('');
	},
	onAxisLabelRender: function (axis, label, layoutContext) {
		var value = layoutContext.renderer(label) / 1000;
		return value === 0 ? '0' : Ext.util.Format.number(value, '0 млн.');
	},
	basicLabelRenderer:function (value) {
		return Ext.util.Format.number(value, '0,000.0');
	}
});
/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.gprotab.GPROChart', {
	extend: 'Ext.panel.Panel',
	xtype: 'gprochart',
	requires: [
		'Ext.chart.theme.DefaultGradients'
	],
	layout: 'fit',
	/*layout: {
		type: 'vbox',
		align: 'stretch'
	},*/
	initComponent: function(){

		var width = 10;
		this.items = [{
			xtype: 'polar',
			theme: 'default-gradients',
			disabled: true, //в связке с x-mask(gb:transparent, )что бы скролилось по легенде, TODO реализовать возможность скрола на тач девайсах без этого костыля
			height: 600,
			margin: '20 0 0  0',
			insetPadding: 50,
			//margin: '50 50',
			legend: {
				/*itemTpl: [
					'<tpl if="value != 0">', // <= template condition
					'<span class="x-legend-item-marker {[values.disabled?\'x-legend-inactive\':\'\']}" style="background:{mark};"></span>',
					'</tpl>'
				],*/
				docked: 'top',
				orientation: '',
				tpl: [//style="margin:5px;padding:0px;cursor:pointer;text-overflow:clip;white-space: normal
					'<div class="', Ext.baseCSSPrefix, 'legend-container">',
					'<tpl for=".">',
					'<div class="', Ext.baseCSSPrefix, 'legend-item">',
					'<span ',
					'class="', Ext.baseCSSPrefix, 'legend-item-marker {[ values.disabled ? Ext.baseCSSPrefix + \'legend-inactive\' : \'\' ]}" ',
					'style="background:{mark};">',
					'</span>{name}',
					'</div>',
					'</tpl>',
					'</div>'
				],
				setDocked: function (docked) {
					var me = this,
						panel = me.ownerCt,
						layout;

					me.docked = docked;

					switch (docked) {
							/*me.addCls(Ext.baseCSSPrefix + 'horizontal');
							layout = 'hbox';
							break;*/
						case 'top':
						case 'bottom':
						case 'left':
						case 'right':
							me.removeCls(Ext.baseCSSPrefix + 'horizontal');
							layout = 'vbox';
							break;
					}

					if (panel) {
						panel.setDock(docked);
					}
				}
				/*plugins: 'responsive',
				responsiveConfig: {
					/!*'width < 600': {
						docked: 'top'
					},
					'width > 600': {
						docked: 'right'
					}*!/
					/!*'tall': {
					 docked: 'bottom'
					 },
					 'wide': {
					 docked: 'right'
					 }*!/
					'landscape & width > 900': {
						docked: 'right'
					 },
					'landscape & width < 900': {
						docked: 'top'
					 },
					 'portrait & width > 600': {
					    docked: 'right'
					 },
					 'portrait & width < 600': {
						 docked: 'top'
					 }
				}*/
			},
			bind:{
				store: '{gprogridstore}'
			},
			series: [{
				type: 'pie',
				angleField: 'CashIspRash',
				label: {
					renderer: 'renderChartLabel',
					field: 'Indicator',
					calloutLine: {
						//color: 'rgba(0,0,0,0)' // Transparent to hide callout line
						length: 20,
						width: 1,
						color: '#9E9E9E'

					},
					//display: 'inside',
					orientation: '',//vertical horizontal
					fillStyle: 'black',
					//fontWeight: 'bold',
					fontSize: 12,
					fontFamily: '"Noto Sans", "Trebuchet MS", "Droid Sans"'
				}
				//highlight: true
			}]
		}];

		this.callParent();
	}
});
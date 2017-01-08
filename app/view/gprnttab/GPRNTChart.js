/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.gprnttab.GPRNTChart', {
	extend: 'Ext.panel.Panel',
	xtype: 'gprntchart',
	requires: [
		'Ext.chart.theme.DefaultGradients'
	],
	initComponent: function(){

		this.items = [{
			xtype: 'polar',
			disabled: true, //в связке с x-mask(gb:transparent, )что бы скролилось по легенде, TODO реализовать возможность скрола на тач девайсах без этого костыля
			theme: 'default-gradients',
			height: 600,
			margin: '20 0 0  0',
			insetPadding: 50,
			legend: {
				docked: 'top',
				orientation: '',
				tpl: [//overflow:auto; text-overflow: clip;
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
			},
			bind:{
				store: '{gprntgridstore}'
			},
			series: [{
				type: 'pie',
				//animation: false,
				angleField: 'CashIspRash',
				label: {
					renderer: 'renderChartLabel',
					field: 'Indicator',
					calloutLine: {
						length: 20,
						width: 1,
						color: '#9E9E9E'

					},
					orientation: '',
					fillStyle: 'black',
					fontSize: 12,
					fontFamily: '"Noto Sans", "Trebuchet MS", "Droid Sans"'
				}
			}]
		}];

		this.callParent();
	}
});
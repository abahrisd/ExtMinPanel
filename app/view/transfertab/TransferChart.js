/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.transfertab.TransferChart', {
	extend: 'Ext.panel.Panel',
	xtype: 'transferchart',
	bodyCls: 'redemption-body no-shadow',
	cls: 'kpi-meta-charts',
	initComponent: function(){

		this.items = [{
			xtype: 'cartesian',
			height: 400,
			animation: true,
			disabled: true, //в связке с x-mask(gb:transparent, )что бы скролилось по легенде, TODO реализовать возможность скрола на тач девайсах без этого костыля
			legend: {
				/*itemTpl: [
				 '<tpl if="value != 0">', // <= template condition
				 '<span class="x-legend-item-marker {[values.disabled?\'x-legend-inactive\':\'\']}" style="background:{mark};"></span>',
				 '</tpl>'
				 ],*/
				tpl: [//style="margin:5px;padding:0px;cursor:pointer;
					'<div class="', Ext.baseCSSPrefix, 'legend-container">',
					'<tpl for=".">',
					'<div style="overflow:auto; text-overflow: clip; white-space: normal; vertical-align: top" class="', Ext.baseCSSPrefix, 'legend-item">',
					'<span ',
					'class="', Ext.baseCSSPrefix, 'legend-item-marker {[ values.disabled ? Ext.baseCSSPrefix + \'legend-inactive\' : \'\' ]}" ',
					'style="background:{mark};">',
					'</span>{name}',
					'</div>',
					'</tpl>',
					'</div>'
				],
				docked: 'top',
				//columnWidth:.25,
				orientation: '',
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
			},/*
			legend: {
				docked: 'top'
			},*/
			innerPadding: 20,
			//margin: '20 0 0  0',
			insetPadding: 20,
			axes: [{
				type: 'numeric',
				position: 'left',
				grid: true,
				style: {
					majorTickSize : 0,
					strokeStyle : '#9E9E9E'
				},
				fields: [ 'Perechisleno', 'Osvoeno', 'Ostatki'],
				label: {
					//hidden: true,
					display: 'inside',
					orientation: '',
					fillStyle: '#9E9E9E',
					fontSize: 13,
					fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
				}
				//renderer: 'onAxisLabelRender'
			}, {
				type: 'category',
				style: {
					majorTickSize : 0,
					strokeStyle : '#9E9E9E'
				},
				position: 'bottom',
				fields: ['Indicator'],
				renderer: function(layout, label, lastLabel) {
					return label.split(' ').map(function(el){
						return el + '\n';
						/*if (el.length > 4){

						} else {
							return el + ' '
						}*/
					}).join('');
				},
				label: {
					fontSize: 12,
					fontFamily: 'Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
				}
			}],
			bind:{
				store: '{transfergridstore}'
			},
			series: [{
				type: 'line',
				xField: 'Indicator',
				yField: [ 'Perechisleno'/*, 'BudgObyaz', 'CashIspRash', 'CashPerfPerc'*/],
				colors: ['#ff512f'/*, '#dee2e7'*/],
				title:'Перечислено в субъекты РФ',
				style: {
					lineWidth: 4
				},
				marker: {
					radius: 3
				}/*,
				label: {
					field: 'SvodRosp',
					display: 'over'
				}*/
			},{
				type: 'line',
				xField: 'Indicator',
				yField: [ 'Ostatki'/*, 'BudgObyaz', 'CashIspRash', 'CashPerfPerc'*/],
				colors: ['#673ab7'/*, '#dee2e7'*/],
				title:'Остатки средств в бюджетах субъектов РФ',
				style: {
					lineWidth: 4
				},
				marker: {
					radius: 3
				}/*,
				label: {
					field: 'SvodRosp',
					display: 'over'
				}*/
			}]
		}];

		this.callParent();
	}
});
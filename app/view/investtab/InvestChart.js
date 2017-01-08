/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.investtab.InvestChart', {
	extend: 'Ext.panel.Panel',
	xtype: 'investchart',
	bodyCls: 'redemption-body no-shadow',
	cls: 'kpi-meta-charts',
	initComponent: function(){

		this.items = [{
			xtype: 'cartesian',
			height: 700,
			insetPadding: {
				right: 20
			},
			flipXY: true,
			disabled: true, //в связке с x-mask(gb:transparent, )что бы скролилось по легенде, TODO реализовать возможность скрола на тач девайсах без этого костыля
			legend: {
				docked: 'top'
			},
			bind:{
				store: '{investgridstore}'
			},
			axes: [{
				type: 'numeric',
				//position: 'left',
				position: 'bottom',
				grid: true,
				//majorTickSteps: 8,
				maximum: 10000,
				majorTickSteps: 10,
				style: {
					majorTickSize : 0,
					strokeStyle : '#9E9E9E'
				},
				fields: [ 'SvodRosp', 'CashIspRash'],
				label: {
					display: 'inside',
					orientation: '',
					fillStyle: '#9E9E9E',
					fontSize: 13,
					fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
				}
			}, {
				type: 'category',
				style: {
					majorTickSize : 0,
					strokeStyle : '#9E9E9E'
				},
				position: 'left',
				//position: 'bottom',
				fields: 'Indicator',
				renderer: function(layout, label, lastLabel) {
					return label.split(' ').map(function(el){
						if (el.indexOf('-') > 0) {
							return el.substring(0, el.indexOf('-') + 1) + '\n' + el.substring(el.indexOf('-') + 1, el.length) + '\n';
						} else if (el.length > 3){
							return el + '\n';
						} else {
							return el + ' '
						}
					}).join('');
				},
				label: {
					fontSize: 7,
					fontFamily: 'Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
				}
			}],
			series: [{
				type: 'bar',
				xField: 'Indicator',
				yField: 'SvodRosp',
				colors: ['#ff512f'],
				title:'Утверждено',
				style: {
					minGapWidth: 50,
					minBarWidth: 40,
					maxBarWidth: 40
				}
			},{
				type: 'line',
				xField: 'Indicator',
				yField: 'CashIspRash',
				colors: ['#673ab7'],
				title:'Исполнено',
				style: {
					lineWidth: 4
				},
				marker: {
					radius: 3
				}
			}]}/*{
			xtype: 'cartesian',
			height: 700,
			animation: true,
			flipXY: true,
			legend: {
				docked: 'top'
			},
			axes: [{
				type: 'numeric',
				//position: 'left',
				position: 'bottom',
				grid: true,
				majorTickSteps: 10,
				style: {
					majorTickSize : 0,
					strokeStyle : '#9E9E9E'
				},
				fields: [ 'SvodRosp', 'CashIspRash'],
				label: {
					display: 'inside',
					orientation: '',
					fillStyle: '#9E9E9E',
					fontSize: 13,
					fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
				},
				renderer: 'onAxisLabelRender'
			}, {
				type: 'category',
				style: {
					majorTickSize : 0,
					strokeStyle : '#9E9E9E'
				},
				position: 'left',
				//position: 'bottom',
				fields: 'Indicator',
				renderer: function(layout, label, lastLabel) {
					return label.split(' ').map(function(el){
							if (el.indexOf('-') > 0) {
								return el.substring(0, el.indexOf('-') + 1) + '\n' + el.substring(el.indexOf('-') + 1, el.length) + '\n';
							} else if (el.length > 2){
								return el + '\n';
							} else {
								return el + ' '
							}
					}).join('');
				},
				label: {
					fontSize: 7,
					fontFamily: 'Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
				}
			}],
			bind:{
				store: '{investgridstore}'
			},
			series: [{
				type: 'bar',
				xField: 'SvodRosp',
				yField: 'Indicator',
				colors: ['#ff512f'],
				title:'Утверждено',
				style: {
					minGapWidth: 50,
					minBarWidth: 40,
					maxBarWidth: 40
				}
			}/!*,{
				type: 'line',
				xField: 'CashIspRash',
				yField: 'Indicator',
				colors: ['#673ab7'],
				title:'Исполнено',
				style: {
					lineWidth: 4
				},
				marker: {
					radius: 3
				}
			}*!/]
		}*/];

		this.callParent();
	}
});
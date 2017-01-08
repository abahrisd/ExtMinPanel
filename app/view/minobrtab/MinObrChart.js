/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.minobrtab.MinObrChart', {
	extend: 'Ext.panel.Panel',
	xtype: 'minobrchart',
	bodyCls: 'redemption-body no-shadow',
	cls: 'kpi-meta-charts',
	initComponent: function(){

		this.items = [{
			xtype: 'cartesian',
			disabled: true, //в связке с x-mask(gb:transparent, )что бы скролилось по легенде, TODO реализовать возможность скрола на тач девайсах без этого костыля
			height: 350,
			animation: true,
			legend: {
				docked: 'top'
			},
			axes: [{
				type: 'numeric',
				position: 'left',
				grid: true,
				style: {
					majorTickSize : 0,
					strokeStyle : '#9E9E9E'
				},
				fields: [ 'SvodRosp', 'BudgObyaz', 'CashIspRash', 'CashPerfPerc'],
				label: {
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
					}).join('');
				},
				label: {
					fontSize: 7,
					fontFamily: 'Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
				}
			}],
			bind:{
				store: '{minobrgridstore}'
			},
			series: [{
				type: 'bar',
				xField: 'Indicator',
				yField: [ 'SvodRosp'],
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
				yField: [ 'CashIspRash'],
				colors: ['#673ab7'],
				title:'Исполнено',
				style: {
					lineWidth: 4
				},
				marker: {
					radius: 3
				}
			}]
		}];

		this.callParent();
	}
});
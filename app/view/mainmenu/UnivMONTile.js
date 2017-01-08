/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.mainmenu.UnivMonTile', {
	extend: 'Ext.panel.Panel',
	requires: [
		'Ext.draw.Sprite'
	],
	xtype: 'univmontile',
	reference: 'univmontileRef',
	listeners: {
		render: 'menuTileRenderer'
	},
	config: {
		responsiveCls: ''
	},
	bodyCls: 'redemption-body',
	cls: 'kpi-meta-charts',
	height: 292,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	bodyPadding: 10,
	items:[{
		xtype: 'label',
		html: '<span style="width:60%">Вузы, подведомственные Минобрнауки России</span><span>на 30.12.2015</span>',
		cls: 'minpanel-label'
	},{
		xtype: 'cartesian',
		flex: 1,
		animation: true,
		innerPadding: {
			top: 15
		},
		legend: {
			tpl: [
				'<div class="', Ext.baseCSSPrefix, 'legend-container">',
				'<tpl for=".">',
				'<div style="font-size:10px" class="', Ext.baseCSSPrefix, 'legend-item">',
				'<span ',
				'class="', Ext.baseCSSPrefix, 'legend-item-marker {[ values.disabled ? Ext.baseCSSPrefix + \'legend-inactive\' : \'\' ]}" ',
				'style="background:{mark};">',
				'</span>{name}',
				'</div>',
				'</tpl>',
				'</div>'
			],
			toggleable: false,
			docked: 'top'
		},
		axes: [{
			type: 'numeric',
			position: 'left',
			hidden: true,
			//grid: true,
			label: {
				//hidden: true,
				fillStyle: '#9E9E9E'
			},
			style: {
				majorTickSize : 0,
				strokeStyle : '#9E9E9E'
			},
			fields: [
				'gz',
				'gray1',
				'else',
				'gray2'
			],
			minimum: 0,
			maximum: 200
		}, {
			type: 'category',
			style: {
				majorTickSize : 0,
				strokeStyle : '#9E9E9E'
			},
			position: 'bottom',
			fields: [
				'type'
			],
			label: {
				//hidden: true,
				field: 'type',
				fillStyle: '#9E9E9E',
				fontWeight: 'regular',
				fontSize: 9,
				fontFamily: 'Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
			}
		}],
		bind: {
			store: '{univmontile}'
		},
		series: [{
			type: 'bar',
			stacked: false,
			title: ['Субсидии на ГЗ', 'Субсидии на иные цели'],
			xField: 'type',
			yField: ['gz', 'else'],
			colors: [ '#542faa', '#ff512f'],
			label: {
				field: ['gz', 'else'],
				fill: '#69708a',
				orientation: 'horizontal',
				fontSize: 10,
				renderer: 'basicLabelRenderer',
				fontWeight: 'regular',
				display: 'outside'
			},
			style: {
				inGroupGapWidth: 7,
				maxGapWidth: 100,
				minGapWidth: 20,
				maxBarWidth: 50
			}
		}]
	}]
});
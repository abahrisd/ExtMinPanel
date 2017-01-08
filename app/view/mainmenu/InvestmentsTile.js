/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.mainmenu.InvestmentsTile', {
	extend: 'Ext.panel.Panel',
	requires: [
		'Ext.draw.Sprite'
	],
	xtype: 'investtile',
	reference: 'investtileRef',
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
		html: '<span>Инвестиции</span><span>на 30.12.2015</span>',
		cls: 'minpanel-label'
	}, {
		xtype: 'container',
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		flex: 1,
		items: [{
			xtype: 'polar',
			flex: 1,
			animation: true,
			donut: true,/*
			innerPadding: {
				left: 15,
				right: 15
			},*/
			gradients: [{
				id: 'investmentGradient',
				type: 'linear',
				//type: 'radial',
				angle: 180,
				stops: {
					0: {color: '#11ffbd'},
					100: {color: '#aaffa9'}
				}
			}],
			bind: {
				store: '{investtile}'
			},
			listeners: {
				boxready: 'onBoxIsReadyInvest',
				move: 'onChartMoveBasic'
			},
			series: [{
				type: 'pie',
				xField: 'data2',
				colors: ['#11ffbd', '#dee2e7'],
				renderer: 'investmentRenderer',
				subStyle: {
					//strokeStyle: ['white'],
					//strokeStyle: ['transparent'],
					lineWidth: [0]
				},
				radiusFactor: 98,
				donut: 85
			}]
		}, {
			xtype: 'container',
			margin: '10px 0 0 0',
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [{
				xtype: 'container',
				layout: {
					type: 'vbox',
					align: 'stretch'
				},
				items: [
					{
						xtype: 'label',
						html: '<span>23,0</span><span> млрд руб.</span>',
						cls: 'minpanel-hl invest-color'
					}, {
						xtype: 'label',
						html: '<span>План</span>',
						cls: 'minpanel-sign'
					}
				]
			},{
				xtype: 'container',
				padding: '20px 0 0 0',
				layout: {
					type: 'vbox',
					align: 'stretch'
				},
				items: [
					{
						xtype: 'label',
						html: '<span>22,8</span><span> млрд руб.</span>',
						cls: 'minpanel-hl invest-color'
					}, {
						xtype: 'label',
						html: '<span>Принято бюджетных</span></br><span>обязательств</span>',
						cls: 'minpanel-sign'
					}
				]
			}]
		}]
	}]
});
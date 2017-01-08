/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.mainmenu.MinObrTile', {
	extend: 'Ext.panel.Panel',

	requires: [
		'Ext.draw.Sprite'
	],
	xtype: 'minobrtile',
	config: {
		responsiveCls: ''
	},
	bodyCls: 'redemption-body',
	cls: 'kpi-meta-charts',
	height: 292,
	reference: 'minobrtileRef',
	listeners: {
		render: 'menuTileRenderer'
	},
	//Определяем конфиг что бы работало адаптивное назначение класса при использовании компонента
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	bodyPadding: 10,
	items:[{
		xtype: 'label',
		html: '<span>Минобрнауки России</span><span>на 30.12.2015</span>',
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
			donut: true,
			gradients: [{
				id: 'minObrGradient',
				type: 'linear',
				//type: 'radial',
				angle: 180,
				stops: {
					0: {color: '#1970db'},
					100: {color: '#00c6ff'}
				}
			}],
			bind: {
				store: '{minobrtile}'
			},
			listeners: {
				boxready: 'onBoxIsReadyMO',
				move: 'onChartMoveBasic'
			},
			series: [{
				type: 'pie',
				xField: 'data1',
				colors: ['#2ac8ef', '#dee2e7'],
				renderer: 'minObrRenderer',
				subStyle: {
					strokeStyle: ['transparent'],
					lineWidth: [0]
				},
				/*style: {
					lineWidth: 2,
					radius: 5
				},*/
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
						html: '<span>391,4</span><span> млрд руб.</span>',
						cls: 'minpanel-hl minobr-color'
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
						html: '<span>391,1</span><span> млрд руб.</span>',
						cls: 'minpanel-hl minobr-color'
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
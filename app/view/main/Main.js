/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtMinPanel.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',
	requires: [
		'Ext.plugin.Viewport',
		'ExtMinPanel.utils.BaseController',
		'Ext.chart.plugin.ItemEvents',
		//charts
		'Ext.draw.modifier.Highlight',
		'Ext.chart.axis.Time',
		'Ext.chart.interactions.ItemHighlight',
		'Ext.chart.CartesianChart',
		'Ext.chart.axis.Numeric',
		'Ext.chart.axis.Category',
		'Ext.chart.series.Line',
		'Ext.chart.series.Scatter',
		'Ext.chart.interactions.ItemEdit',

		//Overrides
		'overrides.chart.axis.sprite.Axis',
		'overrides.chart.LegendBase',
		'overrides.container.Viewport',

		'ExtMinPanel.view.main.MainController',
		'ExtMinPanel.view.main.MainModel',
		'ExtMinPanel.utils.StandartGrid'

		//'Ext.chart.*'
	],

	controller: 'main',
	viewModel: 'main',
	ui: 'navigation',
	cls: 'exec-menu-navigation',
	reference: 'usersTabPanel',
	tabBarHeaderPosition: 1,
	titleRotation: 0,
	tabRotation: 0,
	header: {
		style: {
			borderBottom: '2px solid #ececec !important'
		},
		plugins: 'responsive',
		responsiveConfig: {
			'width < 1000': {
				height: 70
			},
			'width >= 1000': {
				//iconCls: 'm-ico-logo',
				height: 120
			}
		},
		iconCls: 'm-ico-logo',
		layout: {
			align: 'stretchmax'
		},
		title: {
			plugins: 'responsive',
			responsiveConfig: {
				'width < 1000': {
					margin: '0 0 0 10',
					height: 70
				},
				'width >= 1000': {
					margin: '0 0 0 36',
					height: 120
				}
			},
			itemId: 'headerTitle',
			text: 'АК КСУФ',
			textAlign: 'center',
			flex: 0,
			minWidth: 160
		},
		listeners: {
			click: 'onHeaderTitleClick'
		},
		tools: [{
			type: 'gear',
			plugins: 'responsive',
			width: 65,
			height: 70,
			handler: 'onSwitchTool',
			responsiveConfig: {
				'width < 1000': {
					visible: true
				},
				'width >= 1000': {
					visible: false
				}
			}
		}]
	},
	tabBar: {
		flex: 1,
		layout: {
			align: 'stretch',
			overflowHandler: 'none'
		}
	},
	responsiveConfig: {
		tall: {
			headerPosition: 'top'
			//headerPosition: 'left'
		},
		wide: {
			headerPosition: 'top'
		}
	},
	defaults: {
		tabConfig: {
			plugins: 'responsive',
			responsiveConfig: {
				wide: {
					iconAlign: 'top',
					textAlign: 'center',
					flex: 1
				},
				tall: {
					iconAlign: 'top',
					textAlign: 'center',
					flex: 1
				},
				'width < 1000': {
					visible: false
				},
				'width >= 1000': {
					visible: true
				}
			}
		}
	},
	activeTab: 0,
	items: [{
		// This page has a hidden tab so we can only get here during initialization. This
		// allows us to avoid rendering an initial activeTab only to change it immediately
		// by routing
		//xtype: 'component',
		tabConfig: {
			hidden: true
		},
		scrollable: true,
		items: [{
			xtype: 'mainmenu'
		}]
	},{
		//xtype: 'kpi',
		title: 'Минобрнауки России',
		iconCls: 'm-ico-min',
		scrollable: true,
		bodyStyle:{"background-color":"white"},
		cls: 'bottom-line-menu',
		items: [{
			xtype: 'minobrtab'
		}]
	}, {
		title: 'Расходы на ГПРО',
		iconCls: 'm-ico-gpro',
		scrollable: true,
		items: [{
			xtype: 'gprotab'
		}]
	}, {
		title: 'Расходы на ГПРНТ',
		iconCls: 'm-ico-science',
		scrollable: true,
		items: [{
			xtype: 'gprnttab'
		}]
	}, {
		title: 'Межбюджетные трансферты',
		iconCls: 'm-ico-money',
		scrollable: true,
		items: [{
			xtype: 'transfertab'
		}]
	}, {
		title: 'Вузы',
		iconCls: 'm-ico-university',
		scrollable: true,
		items: [{
			xtype: 'univtab'
		}]
	}, {
		title: 'Паспорт региона',
		iconCls: 'm-ico-region',
		bind: {
			html: '{loremIpsum}'
		}
	}, {
		title: 'Инвестиции',
		iconCls: 'm-ico-invest',
		scrollable: true,
		layout:'auto',
		items: [{
			xtype: 'investtab'
		}]
	}],
	// This object is a config for the popup menu we present on very small form factors.
	// It is used by our controller (MainController).
	assistiveMenu: {
		items: [{
			text: 'Минобрнауки России',
			height: 50,
			iconCls: 'm-ico-min'
		},{
			text: 'Расходы на ГПРО',
			height: 50,
			iconCls: 'm-ico-gpro'
		},{
			text: 'Расходы на ГПРНТ',
			height: 50,
			iconCls: 'm-ico-science'
		},{
			text: 'Межбюджетные трансферты',
			height: 50,
			iconCls: 'm-ico-money'
		},{
			text: 'Вузы',
			height: 50,
			iconCls: 'm-ico-university'
		},{
			text: 'Паспорт региона',
			height: 50,
			iconCls: 'm-ico-region'
		},{
			text: 'Инвестиции',
			height: 50,
			iconCls: 'm-ico-invest'
		}],
		listeners: {
			click: 'onMenuClick'
		}
	}
});

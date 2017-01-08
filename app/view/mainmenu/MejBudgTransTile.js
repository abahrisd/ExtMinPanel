/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.mainmenu.MejBudgTransTile', {
	extend: 'Ext.panel.Panel',
	xtype: 'mejbudgtranstile',
	reference: 'mejbudgtranstileRef',
	listeners: {
		render: 'menuTileRenderer'
	},
	config: {
		responsiveCls: ''
	},
	//bodyCls: 'redemption-body',
	cls: 'kpi-meta-charts',
	bodyStyle:{"background-color":"#ececec"},
	height: 292,
	//bodyPadding: 10,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	//bodyPadding: 10,
	defaults: {
		height: 74,
		cls: 'body-shadow',
		//bodyCls: 'redemption-body',
		layout: {
			type: 'hbox'
			//align: 'center',
			//pack: 'start'
		}
	},
	items:[{
		height: 39,
		//margin: '10 0 0 0',
		//padding: '10 0 0 0',
		layout: {
			type: 'vbox',
			align: 'stretch'
			//pack: 'start'
		},
		items: [{
			margin: '10 10 0 20',
			//marginTop: '10',
			xtype: 'label',
			html: '<span>Межбюджетные трансферты</span><span>на 30.12.2015</span>',
			cls: 'minpanel-label'
			//cls: 'kpi-in-store'
		}]
	},{
		margin: '10 0 0 0',
		items: [{
			margin: '20 0 0 20',
			//align: 'left',
			xtype: 'label',
			width: '30%',
			html: '<span>55,0</span></br><span>млрд руб.</span>',
			cls: 'minpanel-bottom-bars-hl'
		},{
			margin: '30 0 0 20',
			xtype: 'label',
			html: '<span>План</span>',
			cls: 'minpanel-sign-bottom'
		}]
	}, {
		margin: '10 0 0 0',
		items: [{
			margin: '20 0 0 20',
			width: '30%',
			xtype: 'label',
			html: '<span>3,3</span></br><span>млрд руб.</span>',
			cls: 'minpanel-bottom-bars-hl'
		},{
			margin: '20 0 0 20',
			xtype: 'label',
			//align: 'top',
			html: '<span>Остатки средств в бюджетах субьектов РФ</span>',
			cls: 'minpanel-sign-bottom'
		}]
	}, {
		margin: '10 0 0 0',
		items: [{
			margin: '20 0 0 20',
			xtype: 'label',
			width: '30%',
			html: '<span>0,0</span></br><span>млрд руб.</span>',
			cls: 'minpanel-bottom-bars-hl'
		},{
			margin: '30 0 0 20',
			xtype: 'label',
			html: '<span>Не перечислено в субьекты РФ</span>',
			cls: 'minpanel-sign-bottom'
		}]
	}]
});
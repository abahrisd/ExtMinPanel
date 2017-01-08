/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.transfertab.TransferHeader', {
	extend: 'Ext.panel.Panel',

	requires: [
		//'Ext.draw.Sprite'
	],
	xtype: 'transferheader',

	bodyCls: 'redemption-body no-shadow',
	//bodyStyle:{"background-color":"white"},
	cls: 'kpi-meta-charts',
	//height: 160,
	layout: {
		type: 'vbox',
		//align: 'center'
		align: 'stretch'
	},
	//bodyPadding: 10,
	items:[{
		xtype: 'container',
		cls: 'tabs-header',
		items: [{
			xtype: 'label',
			html: '<span>Источник: </span><span>по данным Департамента бухгалтерского учёта</span>',
			cls: 'tabs-header'
		}]
	},{
		xtype: 'container',
		cls: 'tabs-header',
		items: [{
			xtype: 'label',
			html: '<span>Статус: </span><span>Данные корректны</span>',
			cls: 'tabs-header'
		}]
	},{
		margin: '10 0',
		xtype: 'label',
		html: '<span>Освоение межбюджетных трансфертов Минобрнауки России субъектами РФ, млн руб.</span>',
		cls: 'tabs-main-header'
	},{
		xtype: 'container',
		layout: {
			type: 'vbox',
			align: 'center'
		},
		items: [{
			xtype: 'combobox',
			value: 1,
			labelCls: 'sign-label',
			labelStyle:'padding: 10px 0 0 0',
			fieldLabel: '* Отчетный период',
			labelWidth: 160,
			editable: false,
			displayField: 'Period_Name',
			valueField: 'Period_id',
			listeners: {
				change: 'onPeriodChange'
			},
			bind: {
				store: '{otchetPeriod}'
			},
			queryMode: 'local'
		}]
	}]
});
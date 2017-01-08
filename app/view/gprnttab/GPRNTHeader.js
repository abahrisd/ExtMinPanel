/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.gprnttab.GPRNTHeader', {
	extend: 'Ext.panel.Panel',
	xtype: 'gprntheader',

	bodyCls: 'redemption-body no-shadow',
	cls: 'kpi-meta-charts',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'container',
		cls: 'tabs-header',
		items: [{
			xtype: 'label',
			html: '<span>Источник: </span><span>по оперативным данным Казначейства России (из ГАСУ)</span>',
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
		html: '<span>Основные направления расходов на ГП РФ «Развитие науки и технологий на 2014-2020 годы», млн руб.</span>',
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
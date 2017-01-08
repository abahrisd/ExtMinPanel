/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.univtab.UniversitiesHeader', {
	extend: 'Ext.panel.Panel',
	xtype: 'universitiesheader',

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
			html: '<span>Источник: </span><span>по данным МЭИ </span><span>Статус: </span><span>Данные корректны</span>',
			cls: 'tabs-header'
		}]
	},{
		xtype: 'container',
		cls: 'tabs-header',
		items: [{
			xtype: 'label',
			html:'<span>Данные за 2013 г. по состоянию на: </span><span>14.11.14 </span><span>Данные за 2014 г. по состоянию на: </span><span>26.01.16 </span><span>Данные за 2015 г. по состоянию на: </span><span>28.01.16 </span><span>Данные за 2016 г. по состоянию на: </span><span>01.02.16</span>',
			cls: 'tabs-header'
		}]
	},{
		margin: '10 0',
		xtype: 'label',
		html: '<span>Финансовое обеспечение высших учебных заведений, подведомственных Минобрнауки России</span>',
		cls: 'tabs-main-header'
	},{
		xtype: 'container',
		layout: {
			type: 'vbox',
			align: 'middle'
		},
		items: [{
			xtype: 'combobox',
			value: 2,
			labelWidth: 50,
			plugins: 'responsive',
			responsiveConfig: {
				'width < 1000': {
					width: '100%'
				},
				'width >= 1000': {
					width: '70%'
				}
			},
			labelStyle:'color: #9E9E9E;font-size: 15px;',
			fieldLabel: '* Вуз',
			editable: false,
			displayField: 'University_Name',
			valueField: 'University_id',
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
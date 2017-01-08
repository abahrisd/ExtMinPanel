Ext.define('ExtMinPanel.view.gprotab.GPROTab', {
    extend: 'Ext.container.Container',
	xtype: 'gprotab',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

	cls: 'kpi-main',
	//bodyStyle:{"background-color":"white"},
    controller: 'gprotab',
    viewModel: {
        type: 'gprotab'
    },

    layout: 'responsivecolumn',

    listeners: {
        hide: 'onHideView'
    },
    items: [
        {
            xtype: 'gproheader',
            // 60% width when viewport is big enough,
            // 100% when viewport is small
            responsiveCls: 'big-100 small-100'
        },
        {
            xtype: 'gprogrid',
            responsiveCls: 'big-50 small-100'
        },
        {
            xtype: 'gprochart',
	        responsiveCls: 'big-50 small-100'
        }/*,
        {
	        margin: '10 0',
	        xtype: 'label',
	        html: '<a href="#"><span>Подробнее</span><a>',
	        cls: 'tab-more',
	        responsiveCls: 'big-60 small-100'
        }*/
    ]
});

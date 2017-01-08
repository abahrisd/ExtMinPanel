Ext.define('ExtMinPanel.view.gprnttab.GPRNTTab', {
    extend: 'Ext.container.Container',
	xtype: 'gprnttab',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

	cls: 'kpi-main',
	//bodyStyle:{"background-color":"white"},
    controller: 'gprnttab',
    viewModel: {
        type: 'gprnttab'
    },

    layout: 'responsivecolumn',

    listeners: {
        hide: 'onHideView'
    },
    items: [
        {
            xtype: 'gprntheader',
            // 60% width when viewport is big enough,
            // 100% when viewport is small
            responsiveCls: 'big-100 small-100'
        },
        {
            xtype: 'gprntgrid',
            responsiveCls: 'big-50 small-100'
        },
        {
            xtype: 'gprntchart',
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

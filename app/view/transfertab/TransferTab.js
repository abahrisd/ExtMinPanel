Ext.define('ExtMinPanel.view.transfertab.TransferTab', {
    extend: 'Ext.container.Container',
	xtype: 'transfertab',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

	cls: 'kpi-main',
	//bodyStyle:{"background-color":"white"},
    controller: 'transfertab',
    viewModel: {
        type: 'transfertab'
    },

    layout: 'responsivecolumn',

    listeners: {
        hide: 'onHideView'
    },
    items: [
        {
            xtype: 'transferheader',
            // 60% width when viewport is big enough,
            // 100% when viewport is small
            responsiveCls: 'big-100 small-100'
        },
        {
            xtype: 'transfergrid',
            responsiveCls: 'big-50 small-100'
        },
        {
            xtype: 'transferchart',
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

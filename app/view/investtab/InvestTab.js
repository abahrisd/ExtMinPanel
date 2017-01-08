Ext.define('ExtMinPanel.view.investtab.InvestTab', {
    extend: 'Ext.container.Container',
	xtype: 'investtab',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

	cls: 'kpi-main',
    controller: 'investtab',
    viewModel: {
        type: 'investtab'
    },

    layout: 'responsivecolumn',

    listeners: {
        hide: 'onHideView'
    },
    items: [
        {
            xtype: 'investheader',
            responsiveCls: 'big-100 small-100'
        },
        {
            xtype: 'investgrid',
            responsiveCls: 'big-60 small-100'
        },
        {
            xtype: 'investchart',
	        responsiveCls: 'big-40 small-100'
        }
    ]
});

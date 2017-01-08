Ext.define('ExtMinPanel.view.minobrtab.MinObrTab', {
    extend: 'Ext.container.Container',
	xtype: 'minobrtab',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

	cls: 'kpi-main',
    controller: 'minobrtab',
    viewModel: {
        type: 'minobrtab'
    },

    layout: 'responsivecolumn',

    listeners: {
        hide: 'onHideView'
    },
    items: [
        {
            xtype: 'minobrheader',
            responsiveCls: 'big-100 small-100'
        },
        {
            xtype: 'minobrgrid',
            responsiveCls: 'big-60 small-100'
        },
        {
            xtype: 'minobrchart',
	        responsiveCls: 'big-40 small-100'
        }
    ]
});

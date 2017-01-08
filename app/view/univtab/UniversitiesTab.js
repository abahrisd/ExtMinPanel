Ext.define('ExtMinPanel.view.univtab.UniversitiesTab', {
    extend: 'Ext.container.Container',
	xtype: 'univtab',
    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],
	cls: 'kpi-main',
    controller: 'univtab',
    viewModel: {
        type: 'univtab'
    },

    layout: 'responsivecolumn',

    listeners: {
        hide: 'onHideView'
    },
    items: [
        {
            xtype: 'universitiesheader',
            responsiveCls: 'big-100 small-100'
        },
        {
            xtype: 'universitiesgrid',
            responsiveCls: 'big-100 small-100'
        }
    ]
});

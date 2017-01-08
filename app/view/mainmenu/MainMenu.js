Ext.define('ExtMinPanel.view.mainmenu.MainMenu', {
    extend: 'Ext.container.Container',
	xtype: 'mainmenu',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

	cls: 'kpi-main lite-bg',
    controller: 'mainmenu',
    viewModel: {
        type: 'mainmenu'
    },

    layout: 'responsivecolumn',
	//bodyStyle:{"background-color":"#ececec"},
    listeners: {
        hide: 'onHideView'
    },
    items: [
        {
            xtype: 'minobrtile',
	        plugins: 'responsive',
	        responsiveConfig: {
		        'width < 620': {
			        responsiveCls: 'big-33 small-100'
		        },
		        'height < 620 && wide': {
			        responsiveCls: 'big-33 small-100'
		        },
		        'width >= 620 && tall': {
			        responsiveCls: 'big-33 small-50'
		        },
		        'height >= 620 && wide': {
			        responsiveCls: 'big-33 small-50'
		        }
	        }
        },
        {
            xtype: 'gosprogtile',
            responsiveCls: 'big-66 small-100'
        },
        {
            xtype: 'mejbudgtranstile',
	        plugins: 'responsive',
	        responsiveConfig: {
		        'width < 620': {
			        responsiveCls: 'big-33 small-100'
		        },
		        'height < 620 && wide': {
			        responsiveCls: 'big-33 small-100'
		        },
		        'width >= 620 && tall': {
			        responsiveCls: 'big-33 small-50'
		        },
		        'height >= 620 && wide': {
			        responsiveCls: 'big-33 small-50'
		        }
	        }
        },
        {
            xtype: 'univmontile',
	        plugins: 'responsive',
	        responsiveConfig: {
		        'width < 620': {
			        responsiveCls: 'big-33 small-100'
		        },
		        'height < 620 && wide': {
			        responsiveCls: 'big-33 small-100'
		        },
		        'width >= 620 && tall': {
			        responsiveCls: 'big-33 small-50'
		        },
		        'height >= 620 && wide': {
			        responsiveCls: 'big-33 small-50'
		        }
	        }
        },
        {
            xtype: 'investtile',
	        plugins: 'responsive',
	        responsiveConfig: {
		        'width < 620': {
			        responsiveCls: 'big-33 small-100'
		        },
		        'height < 620 && wide': {
			        responsiveCls: 'big-33 small-100'
		        },
		        'width >= 620 && tall': {
			        responsiveCls: 'big-33 small-50'
		        },
		        'height >= 620 && wide': {
			        responsiveCls: 'big-33 small-50'
		        }
	        }
        }
    ]
});

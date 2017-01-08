Ext.define('ExtMinPanel.view.mainmenu.MainMenuModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainmenu',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],

    stores: {
	    minobrtile: {
		    fields: ['name', 'data1'],
		    data: [
			    {name: 'metric one', data1: 99.2},
			    {name: 'metric two', data1: 0.8}
		    ]
	    },
	    investtile: {
		    fields: ['name', 'data2'],
		    data: [
			    {name: 'cassIsp', data2: 87.9},
			    {name: 'else', data2: 12.1}
		    ]
	    },
	    gosprogtile: {
		    fields: ['category1', 'category2', 'gpro', 'gpro2'],
		    data: [
			    { category1: 'ГПРО', gpro: 420},
			    { category2: 'ГПРНТ', gprnt: 150.8}
		    ]
	    },
	    gosprogpolartile: {
		    fields: ['name', 'data1', 'data2', 'empty'],
		    data: [
			    { name: 'metric one', data1: 70 },
			    { name: 'metric two', data1: 5 },
			    { name: 'empty', data1: 25 },
			    { name: 'metric one', data2: 65 },
			    { name: 'metric two', data2: 10 },
			    { name: 'empty', data2: 25 }
		    ]
	    },
	    univmontile: {
		    fields: ['type1', 'type', 'gz', 'else', 'gray', 'gray2'],
		    data: [
			    { type: 'План, млрд руб.', gz: 180, else: 50},
			    { type: 'Израсходовано,\nмлрд руб.', gz: 175, else: 45},
			    { type: 'Остаток\nМинобрнауки\nРоссии, млрд руб.', gz: 5, else: 5}
		    ]
	    }/*,
	    investtile: {
		    fields: ['x','value'],
		    data: [
			    { x: 0,   value: 0.00},
			    { x: 10,  value: 0.17},
			    { x: 20,  value: 0.34},
			    { x: 30,  value: 0.50},
			    { x: 40,  value: 0.64},
			    { x: 50,  value: 0.77},
			    { x: 60,  value: 0.87},
			    { x: 70,  value: 0.94},
			    { x: 80,  value: 0.98},
			    { x: 90,  value: 1.00},
			    { x: 100, value: 0.98},
			    { x: 110, value: 0.94},
			    { x: 120, value: 0.87},
			    { x: 130, value: 0.77},
			    { x: 140, value: 0.64},
			    { x: 150, value: 0.50},
			    { x: 160, value: 0.34},
			    { x: 170, value: 0.17},
			    { x: 180, value: 0.00},
			    { x: 190, value: -0.17},
			    { x: 200, value: -0.34},
			    { x: 210, value: -0.50},
			    { x: 220, value: -0.64},
			    { x: 230, value: -0.77},
			    { x: 240, value: -0.87},
			    { x: 250, value: -0.94},
			    { x: 260, value: -0.98},
			    { x: 270, value: -1.00},
			    { x: 280, value: -0.98},
			    { x: 290, value: -0.94},
			    { x: 300, value: -0.87},
			    { x: 310, value: -0.77},
			    { x: 320, value: -0.64},
			    { x: 330, value: -0.50},
			    { x: 340, value: -0.34},
			    { x: 350, value: -0.17},
			    { x: 360, value: 0.00}
		    ]
	    }*/
    }
});

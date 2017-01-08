Ext.define('ExtMinPanel.view.transfertab.TransferTabModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.transfertab',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],
	data: {
		transfergridstore1:[
			{ Indicator: 'Субсидии на финансовое обеспечение выполнения государственного задания', SvodRosp: 198147.90, Perechisleno: 185010.70, Osvoeno: 183394.50, Ostatki: 92.6},
			{ Indicator: 'Субсидии на иные цели', SvodRosp: 69300.70, Perechisleno: 66764.70, Osvoeno: 60230.40, Ostatki: 86.9},
			{ Indicator: 'Межбюджетные трансферты', SvodRosp: 55162.50, Perechisleno: 54971.70, Osvoeno: 50567.00, Ostatki: 91.7},
			{ Indicator: 'Инвестиционные расходы (за исключением межбюджетных трансфертов)', SvodRosp: 13173.50, Perechisleno: 10096.50, Osvoeno: 6466.70, Ostatki: 49.1},
			{ Indicator: 'Прочие расходы', SvodRosp: 60466.80, Perechisleno: 53689.70, Osvoeno: 47122.90, Ostatki: 77.9}
		],
		transfergridstore2:[
			{ Indicator: 'Субсидии на финансовое обеспечение выполнения государственного задания', SvodRosp: 196697.20, Perechisleno: 190512.50, Osvoeno: 187257.50, Ostatki: 95.20},
			{ Indicator: 'Субсидии на иные цели', SvodRosp: 70592.60, Perechisleno: 67437.40, Osvoeno: 66540.20, Ostatki: 94.26},
			{ Indicator: 'Межбюджетные трансферты', SvodRosp: 55007.60, Perechisleno: 54985.50, Osvoeno: 54165.30, Ostatki: 98.47},
			{ Indicator: 'Инвестиционные расходы (за исключением межбюджетных трансфертов)', SvodRosp: 13221.00, Perechisleno: 11208.40, Osvoeno: 7229.80, Ostatki: 54.68},
			{ Indicator: 'Прочие расходы', SvodRosp: 58838.10, Perechisleno: 54928.90, Osvoeno: 51346.80, Ostatki: 87.27}
		],
		transfergridstore3:[
			{ Indicator: 'Субсидии на финансовое обеспечение выполнения государственного задания', SvodRosp: 196162.40, Perechisleno: 196429.60, Osvoeno: 196147.90, Ostatki: 99.99},
			{ Indicator: 'Субсидии на иные цели', SvodRosp: 69291.20, Perechisleno: 69329.90, Osvoeno: 69279.50, Ostatki: 99.98},
			{ Indicator: 'Межбюджетные трансферты', SvodRosp: 55029.60, Perechisleno: 55017.40, Osvoeno: 54801.80, Ostatki: 99.59},
			{ Indicator: 'Инвестиционные расходы (за исключением межбюджетных трансфертов)', SvodRosp: 13106.10, Perechisleno: 12920.90, Osvoeno: 10511.40, Ostatki: 80.20},
			{ Indicator: 'Прочие расходы', SvodRosp: 57794.90, Perechisleno: 57401.90, Osvoeno: 57348.80, Ostatki: 99.23}
		]
	},
    stores: {
	    otchetPeriod: {
		    //model: 'KitchenSink.model.State',
		    storeId: 'periods',
		    fields: [
			    'Period_id',
			    'Period_Name'
		    ],
		    data: [
			    [1, '19.11.2015']
		    ]
	    },
	    transfergridstore: {
		    fields:[ 'Indicator', 'Perechisleno', 'Osvoeno', 'Ostatki', 'name'],
		    data: [
			    { Indicator: 'МБТ на реализацию мероприятий ГП РФ «Социальная поддержка граждан»', Perechisleno: 7912.1, Osvoeno: 4374.6, Ostatki: 3559},
			    { Indicator: 'Субсидии на модернизацию региональных систем дошкольного образования', Perechisleno: 30000, Osvoeno: 18026, Ostatki: 15135.7},
			    { Indicator: 'Субсидии на реализацию мероприятий ГП РФ «Доступная среда»', Perechisleno: 2946.3, Osvoeno: 2165.8, Ostatki: 1752.5},
			    { Indicator: 'Прочие МБТ', Perechisleno: 13106.7, Osvoeno: 8391.1, Ostatki: 6341.6}
		    ]
	    }
    }
});

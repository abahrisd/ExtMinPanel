Ext.define('ExtMinPanel.view.kpi.KpiController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kpi',

    init: function (view) {
        // We provide the updater for the activeState config of our View.
        view.updateActiveState = this.updateActiveState.bind(this);
    },

    onToggleKpi: function(button) {
        if (button.pressed) {
            var view = this.getView();
            view.setActiveState(button.filter);
        }
    },

    updateActiveState: function (activeState) {
        var refs = this.getReferences();
        var viewModel = this.getViewModel();

        refs[activeState].setPressed(true);
        viewModel.set('kpiCategory', activeState);

        this.fireEvent('changeroute', this, 'kpi/' + activeState);
    },

	//	BAR chart

	yearTotal: {},

	onPreview: function() {
		var chart = this.lookupReference('chart');

		chart.preview();
	},

	getYearTotal: function (record) {
		var map = this.yearTotal,
			year = record.get('year'),
			total = map[year];

		if (!total) {
			map[year] = total =
				record.get('to') +
				record.get('gm') +
				record.get('vw') +
				record.get('hy') +
				record.get('fo');
		}

		return total;
	},

	onBarTipRender: function (tooltip, record, item) {
		var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
			manufacturer = item.series.getTitle()[fieldIndex],
			percent = record.get(item.field) / this.getYearTotal(record) * 100;

		/*console.log('fieldIndex');
		console.log(fieldIndex);
		console.log('item.series.getYField()');
		console.log(item.series.getYField());*/

		if (fieldIndex == 1){
			tooltip.setHtml('');
			tooltip.hide();
		} else {
			tooltip.setHtml(manufacturer + ' in ' + record.get('year') + ': ' + percent.toFixed(1) + '%');
		}
	},

	onGridMonthRender: function (value) {
		return value;
	},

	onGridValueRender: function (value) {
		return value + '%';
	},

	onAxisLabelRender: function (axis, label, layoutContext) {
		// Custom renderer overrides the native axis label renderer.
		// Since we don't want to do anything fancy with the value
		// ourselves except appending a '%' sign, but at the same time
		// don't want to loose the formatting done by the native renderer,
		// we let the native renderer process the value first.
		return layoutContext.renderer(label) + '%';
	},

	onBotttomAxisLabelRender: function (axis, label, layoutContext) {
		// Custom renderer overrides the native axis label renderer.
		// Since we don't want to do anything fancy with the value
		// ourselves except appending a '%' sign, but at the same time
		// don't want to loose the formatting done by the native renderer,
		// we let the native renderer process the value first.
		return '';
	}
/*
	onAfterRender: function () {
		var chart = this.lookupReference('chart');

		var highSeries = {
				type: 'bar',
				xField: 'month',
				yField: 'highF',
				yAxis: 'fahrenheit-axis',
				style: {
					minGapWidth: 10,
					strokeStyle: 'rgb(52, 52, 53)'
				},
				subStyle: {
					fillStyle: 'url(#rainbow)'
				}
			},
			lowSeries = Ext.apply({}, {
				yField: ['lowF'],
				subStyle: {
					fillStyle: 'none'
				}
			}, highSeries);

		chart.setSeries([
			highSeries,
			lowSeries
		]);
	}*/
});

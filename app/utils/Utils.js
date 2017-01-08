/**
 * Created by SABAhri on 17.02.2016.
 */
Ext.define('ExtMinPanel.utils.Utils', {

	/*
	 //События в чартах
	 //'Ext.chart.plugin.ItemEvents',
	plugins: {
	 ptype: 'chartitemevents',
	 moveEvents: true
	 },*/

	//методы для отрисовки тултипов
	showTooltip: function(series, item, event, eOpts){
		this.onBarSeriesTooltipRender(series.getTooltip(), item.record).showAt(event.xy);
	},
	onBarSeriesTooltipRender: function (tooltip, record, item) {

		var fieldName = record.get('name'),
			categoryName = record.get('category'),
			gprntColor,
			color,
			value;

		//Определяем цвета
		switch(true){
			case (categoryName == 'Субсидии на ГЗ'):
				color = '#542faa';
				break;
			case (categoryName == 'Субсидии на иные цели'):
				color = '#ff512f';
				break;
			case (fieldName == 'ГПРНТ'):
				color = '#4776e6';
				break;
			case (fieldName == 'ГПРО'):
				color = '#24c6dc';
				break;
		}

		if (Ext.isEmpty(fieldName)) {
			fieldName = 'Кассовое исполнение';
		}

		var valArray = ['gz', 'else', 'gpro', 'gpro2'];

		valArray.forEach(function(el){
			if (!Ext.isEmpty(record.get(el))){
				value = record.get(el);
			}
		});

		var htmlText = '<div style="color:black; line-height: 1.2;">' +
			'<div style="font-weight: bold">' + fieldName +'</div>';

		//Добавляем категорию для нижних диаграмм
		if (!Ext.isEmpty(categoryName)) {
			htmlText += '<div style="">' + categoryName +'</div>'
		}


		switch(true){
			case (!Ext.isEmpty(value)):
				htmlText += '<div style="line-height: 0.9; color:'+color+';">' +
					'<span style="font-size: 30px;color:'+color+';">' + value + '</span>' + '<br>' +
					'<span style="">' + 'млрд руб.' + '</span>' +
					'</div>'
					+ '</div>';
				break;
			//для инвестиций
			default:
				htmlText += '<div style="line-height: 0.9; color:#09a8f2;">' +
					'<span style="font-size: 30px;color:#91FF8F">' + record.get('value') + '%' + '</span>'
					+ '</div>';

		}

		tooltip.setHtml(htmlText);

		return tooltip;

	},
	//Рендерере series для группировки столбцов
	univMonRenderer: function(sprite, config, rendererData, index){
		var w = config.width;
		config.width = 20;
		config.x = config.x + (w-20)/2;

		//<--- -7 for first bar and + 7 for second
		if (index%2===0){
			config.x += 7;
		} else {
			config.x -= 7;
		}
	}
});

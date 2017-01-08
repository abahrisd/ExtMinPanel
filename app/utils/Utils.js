/**
 * Created by SABAhri on 17.02.2016.
 */
Ext.define('ExtMinPanel.utils.Utils', {

	/*
	 //������� � ������
	 //'Ext.chart.plugin.ItemEvents',
	plugins: {
	 ptype: 'chartitemevents',
	 moveEvents: true
	 },*/

	//������ ��� ��������� ��������
	showTooltip: function(series, item, event, eOpts){
		this.onBarSeriesTooltipRender(series.getTooltip(), item.record).showAt(event.xy);
	},
	onBarSeriesTooltipRender: function (tooltip, record, item) {

		var fieldName = record.get('name'),
			categoryName = record.get('category'),
			gprntColor,
			color,
			value;

		//���������� �����
		switch(true){
			case (categoryName == '�������� �� ��'):
				color = '#542faa';
				break;
			case (categoryName == '�������� �� ���� ����'):
				color = '#ff512f';
				break;
			case (fieldName == '�����'):
				color = '#4776e6';
				break;
			case (fieldName == '����'):
				color = '#24c6dc';
				break;
		}

		if (Ext.isEmpty(fieldName)) {
			fieldName = '�������� ����������';
		}

		var valArray = ['gz', 'else', 'gpro', 'gpro2'];

		valArray.forEach(function(el){
			if (!Ext.isEmpty(record.get(el))){
				value = record.get(el);
			}
		});

		var htmlText = '<div style="color:black; line-height: 1.2;">' +
			'<div style="font-weight: bold">' + fieldName +'</div>';

		//��������� ��������� ��� ������ ��������
		if (!Ext.isEmpty(categoryName)) {
			htmlText += '<div style="">' + categoryName +'</div>'
		}


		switch(true){
			case (!Ext.isEmpty(value)):
				htmlText += '<div style="line-height: 0.9; color:'+color+';">' +
					'<span style="font-size: 30px;color:'+color+';">' + value + '</span>' + '<br>' +
					'<span style="">' + '���� ���.' + '</span>' +
					'</div>'
					+ '</div>';
				break;
			//��� ����������
			default:
				htmlText += '<div style="line-height: 0.9; color:#09a8f2;">' +
					'<span style="font-size: 30px;color:#91FF8F">' + record.get('value') + '%' + '</span>'
					+ '</div>';

		}

		tooltip.setHtml(htmlText);

		return tooltip;

	},
	//��������� series ��� ����������� ��������
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

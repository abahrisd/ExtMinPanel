Ext.define('ExtMinPanel.view.mainmenu.MainMenuController', {
    extend: 'ExtMinPanel.view.main.MainController',
    alias: 'controller.mainmenu',

    requires: [
        'Ext.util.TaskRunner'
    ],
	//MinObrTile sprites
	onBoxIsReadyMO: function(chart, width, height, eOpts) {

		var txt99 =  {
				type: 'text',
				x: 0,
				y: 0,
				text: '99,2%',
				font: '35px 300 Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
				'text-anchor': 'middle',
				fillStyle: '#69708a'
			},
			txtCass = {
				type: 'text',
				x: 0,
				y: 0,
				text: "Кассовое\nисполнение",
				font: '11px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
				'text-anchor': 'middle',
				fillStyle: '#9E9E9E'
			};

		chart.getSurface().add(txt99).show(true);
		chart.getSurface().add(txtCass).show(true);
		this.onChartMoveBasic(chart);
	},
	onChartMoveBasic: function( chart, x, y, eOpts){

		//пока нет surface - выходим
		if (Ext.isEmpty(chart.getSurface().getItems()[0])){
			return;
		}

		var chartWidth = chart.getWidth(),
			chartHeight = chart.getHeight(),
			initWidth = chartWidth/2,
			initHeight = chartHeight/2,
			spriteWidth = chart.getSurface().getItems()[0].getBBox().width,
			dSprite = spriteWidth/ 2,
			dText = chart.getSurface().getItems()[0].getBBox().width/ 2,
			spriteHeight = chart.getSurface().getItems()[0].getBBox().height,

			//Корректировтаь расположение и масштаб спрайтов будем в относительных величинах
			dw = chartWidth/100, //% ширины
			dh = chartHeight/100, //% высоты
			scale = (chartWidth < chartHeight)?initWidth/spriteWidth*1.1:initHeight/spriteWidth*1.1;

		var dy = 0;

		var deltax = dSprite;
		//Первым вдёт спрайт с процентами, вторым - с тектом
		chart.getSurface().getItems().forEach(function(el){
			el.setAttributes({
				x: initWidth - deltax*0.15,
				y: initHeight + dy - 5*dh,
				scale: {
					x: scale,
					y: scale
				}
			});

			deltax = dText*1.3;
			//Текст располагаем чуть ниже
			dy += 30*scale;
			scale = 1;
		});

		chart.redraw();
	},

	//InvestmentsTile sprites
	onBoxIsReadyInvest: function(chart, width, height, eOpts) {

		var txt99 =  {
				type: 'text',
				x: 0,
				y: 0,
				text: '87,9%',
				font: '35px 300 Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
				'text-anchor': 'middle',
				fillStyle: '#69708a'
			},
			txtCass = {
				type: 'text',
				x: 0,
				y: 0,
				text: "Кассовое\nисполнение",
				font: '11px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
				'text-anchor': 'middle',
				fillStyle: '#9E9E9E'
			};

		chart.getSurface().add(txt99).show(true);
		chart.getSurface().add(txtCass).show(true);
		this.onChartMoveBasic(chart);
	},
	/*onChartMoveBasic: function( chart, x, y, eOpts){

		//пока нет surface - выходим
		if (Ext.isEmpty(chart.getSurface().getItems()[0])){
			return;
		}

		var chartWidth = chart.getWidth(),
			chartHeight = chart.getHeight(),
			initWidth = chartWidth/2,
			initHeight = chartHeight/2,
			spriteWidth = chart.getSurface().getItems()[0].getBBox().width,
			dSprite = spriteWidth/ 2,
			dText = chart.getSurface().getItems()[0].getBBox().width/ 2,
			spriteHeight = chart.getSurface().getItems()[0].getBBox().height,

			//Корректировтаь расположение и масштаб спрайтов будем в относительных величинах
			dw = chartWidth/100, //% ширины
			dh = chartHeight/100, //% высоты
			scale = (chartWidth < chartHeight)?initWidth/spriteWidth*1.1:initHeight/spriteWidth*1.1;

		var dy = 0;

		var deltax = dSprite;
		//Первым вдёт спрайт с процентами, вторым - с тектом
		chart.getSurface().getItems().forEach(function(el){
			el.setAttributes({
				x: initWidth - deltax*0.15,
				y: initHeight + dy - 5*dh,
				scale: {
					x: scale,
					y: scale
				}
			});

			deltax = dText*1.3;
			//Текст располагаем чуть ниже
			dy += 30*scale;
			scale = 1;
		});

		chart.redraw();
	},*/

	//GosProgTilePlan sprites
	onBoxIsReadyGP: function(chart, width, height, eOpts) {

		var sprites = [{
			type: 'text',
			x: 62,
			y: 21,
			text: '99,8%',
			zIndex: 100,
			font: '15px 300 Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
			fillStyle: '#24c6dc'
		}, {
			type: 'text',
			x: 110,
			y: 21,
			text: "ГПРО",
			zIndex: 100,
			font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
			fillStyle: '#9E9E9E'
		},{
			type: 'text',
			x: 62,
			y: 41,
			text: '99,2%',
			zIndex: 100,
			font: '15px 300 Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
			fillStyle: '#673ab7'
		}, {
			type: 'text',
			x: 110,
			y: 41,
			text: "ГПРНТ",
			zIndex: 100,
			font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
			fillStyle: '#9E9E9E'
		}, {
			type: 'text',
			x: 155,
			y: 115,
			text: "Кассовое\nисполнение",
			zIndex: 100,
			font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
			'text-anchor': 'middle',
			fillStyle: '#9E9E9E'
		}];

		sprites.forEach(function(spr){
			chart.getSurface().add(spr).show(true);
		});

		this.onChartMoveGP(chart);
	},
	onChartMoveGP: function( chart, x, y, eOpts){

		//пока нет surface - выходим
		if (Ext.isEmpty(chart.getSurface().getItems()[0])){
			return;
		}

		var chartWidth = chart.getWidth(),
			chartHeight = chart.getHeight(),
			initWidth = chartWidth/ 2,
			initHeight = chartHeight/ 2,
			scale = 1,
			heightCorrect = 0,
			widthCorrect = 0,
			dw,
			dh;
			//spriteWidth = chart.getSurface().getItems()[0].getBBox().width,

		//Корректировтаь расположение и масштаб спрайтов будем в относительных величинах
		if (chartWidth > chartHeight){
			dw = chartWidth/100; //% ширины
			dh = chartHeight/100; //% высоты
		} else {
			dw = chartHeight/100; //% ширины
			dh = chartWidth/100; //% высоты
			scale = 0.6;
			heightCorrect = 3*dh;
			widthCorrect = 0.5*dw;
		}

		//scale = initWidth/spriteWidth*1.1;

		var dx = 0,
			dy = 0;

		//Порядок спрайтов - 99,8 , ГПРО, 99,2 , ГПРНТ , касс.
		var orderer = 1;
		chart.getSurface().getItems().forEach(function(el){
			switch(orderer){
				case 1:
					dx = 33*dw - 4*widthCorrect;
					dy = 44.5*dh;
					break;
				case 2:
					dx = 19*dw;
					dy = 44.5*dh;
					break;
				case 3:
					dx = 33*dw - 4*widthCorrect;
					dy = 36.5*dh;
					break;
				case 4:
					dx = 19*dw + widthCorrect;
					dy = 36.5*dh;
					break;
				case 5:
					dx = 5*dw;
					dy = 7*dh;
					break;
			}
			orderer += 1;

			el.setAttributes({
				x: initWidth - dx,
				y: initHeight - dy - heightCorrect,
				scale: {
					x: scale,
					y: scale
			    }
			});
		});

		chart.redraw();
	},
	minObrRenderer: function (sprite, storeItem, barAttr, i, store) {

		if (i == 0) {
			barAttr.fill = "url(#minObrGradient)";
			return barAttr;
		}

	},
	investmentRenderer: function (sprite, storeItem, barAttr, i, store) {

		if (i == 0) {
			barAttr.fill = "url(#investmentGradient)";
			return barAttr;
		}

	},
	gosProgRenderer: function (sprite, config, rendererData, index) {

		if (index == 0) {
			rendererData.fill = "url(#v-1)";
		} else {
			rendererData.fill = "url(#v-2)";
		}
		return rendererData;
	},
	gosProgPieInnerRenderer: function (sprite, storeItem, barAttr, i, store) {
		if (i == 3) {
			barAttr.fill = "url(#innerGrad)";
			return barAttr;
		}
	},
	gosProgPieOuterRenderer: function (sprite, storeItem, barAttr, i, store) {
		if (i == 0) {
			barAttr.fill = "url(#outerGrad)";
			return barAttr;
		}
	}
});

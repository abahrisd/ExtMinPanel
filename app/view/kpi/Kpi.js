/**
 * This view is the primary, KPI (Key Performance Indicators) view.
 */
Ext.define('ExtMinPanel.view.kpi.Kpi', {
	extend: 'Ext.panel.Panel',
	xtype: 'kpi',
	itemId: 'kpi', // for setActiveTab(id)

	cls: 'kpi-main',

	requires: [
		'Ext.ux.layout.ResponsiveColumn',
		'Ext.chart.axis.Numeric',
		'Ext.chart.axis.Category',
		'Ext.chart.series.Area',
		'Ext.chart.series.Pie',
		'Ext.chart.series.Bar',
		'Ext.chart.interactions.PanZoom',
		'Ext.chart.interactions.Rotate'
	],

	/*config: {
	 activeState: null,
	 defaultActiveState: 'clicks'
	 },*/

	controller: 'kpi',

	viewModel: {
		type: 'kpi'
	},

	//layout: 'fit',
	//layout: 'anchor',

	layout: {
		//type: 'card',
		type: 'anchor'
		//anchor: '100% 100%'
	},
	/*layout: {
		 type: 'vbox',
		 align: 'stretch'
	},*/

	//scrollable: true,
	//flex: 1,
	//autoScroll: true,
	//height: 'auto',
	//autoHeight: 'true',
	//minWidth: 600,
	minHeight: 600,
	items: [{
		height: 292,
		cls: 'kpi-meta-charts',

		layout: {
			type: 'hbox',
			align: 'stretch'
		},

		items: [{
			margin: '0 15px 0 0',
			width: 320,
			//width: 352,
			bodyCls: 'redemption-body margin-right-15',

			layout: {
				type: 'vbox',
				align: 'stretch'
			},

			items: [{
				xtype: 'label',
				html: '<span>Минобрнауки России</span><span>на 30.12.2015</span>',
				cls: 'minpanel-label'
				//cls: 'kpi-in-store'
			},{
				xtype: 'container',
				layout: {
					type: 'hbox',
					align: 'stretch'
				},
				flex: 1,
				items:[/*{
					xtype: 'polar',
					flex: 1,
					animation: true,
					padding: '10px 0 10px 10px',
					donut: true,
					interactions: ['rotate'],
					colors: ['#2ac8ef', '#ececec'],

					store: {
						fields: ['name', 'data1'],
						data: [
							{ name: 'metric one', data1: 99.2 },
							{ name: 'metric two', data1: 0.8 }
						]
					},
					sprites: [{
						type: 'text',
						x: 40,
						y: 107,
						text: '99,2',
						font: '35px 300 Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						fillStyle: '#69708a'
					},{
						type: 'text',
						x: 108,
						y: 107,
						text: '%',
						font: '21px 300 Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						fillStyle: '#69708a'
					},{
						type: 'text',
						x: 80,
						y: 137,
						text: "Кассовое\nисполнение",
						font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						'text-anchor': 'middle',
						fillStyle: '#9E9E9E'
					}],

					series: [{
						type: 'pie',
						xField: 'data1',
						colors: ['#2ac8ef', 'white'],
						subStyle: {
							strokeStyle: ['white'],
							lineWidth: [0]
						},
						style: {
							lineWidth: 2,
							//maxBarWidth: 12,
							//stroke: 'tomato',
							//fill: 'mistyrose',
							radius: 5
						},
						renderer: function (sprite, config, rendererData, index) {
							console.log('rendererData');
							console.log(rendererData);
							rendererData.radius=5;
							return rendererData;
						},
						donut: 87
					}]
				},*/{
					xtype: 'container',
					margin: '10px 0 0 0',
					//cls: 'minpanel-uper-margin',
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					items:[{
						xtype: 'container',
						padding: '20px 0 0 0',
						//cls: 'minpanel-uper-padding',
						layout: {
							type: 'vbox',
							align: 'stretch'
						},
						items:[
							{
								xtype: 'label',
								html: '<span>391,1</span><span> млрд руб.</span>',
								cls: 'minpanel-hl'
							},{
								xtype: 'label',
								html: '<span>Принято бюджетных</span></br><span>обязательств</span>',
								cls: 'minpanel-sign'
							}
						]
					},{
						xtype: 'container',
						layout: {
							type: 'vbox',
							align: 'stretch'
						},
						items:[
							{
								xtype: 'label',
								html: '<span>391,4</span><span> млрд руб.</span>',
								cls: 'minpanel-hl'
							},{
								xtype: 'label',
								html: '<span>План</span>',
								cls: 'minpanel-sign'
							}
						]
					}]
				}]
			}]
		},{
			//margin: '20px 10px 0 20px',
			width: 655,
			bodyCls: 'redemption-body',

			layout: {
				type: 'vbox',
				align: 'stretch'
			},

			items: [{
				xtype: 'label',
				html: '<span>Государственные программы развития</span>',
				cls: 'minpanel-label'
				//cls: 'kpi-in-store'
			},{
				xtype: 'container',
				layout: {
					type: 'hbox',
					align: 'stretch'
				},
				flex: 1,
				items:[{
					xtype: 'cartesian',
					//width: 200,
					flex: 1,
					animation: true,
					padding: '10px 0 10px 10px',
					//interactions: ['rotate'],
					/*interactions: {
					 type: 'itemedit',
					 tooltip: {
					 renderer: 'onEditTipRender'
					 }/!*,
					 renderer: 'onColumnEdit'*!/
					 },*/
					axes: [{
						type: 'numeric',
						position: 'left',
						grid: true,
						style: {
							majorTickSize : 0,
							strokeStyle : '#9E9E9E'
						},
						fields: [ 'to1', 'gm1', 'to2', 'gm2'],
						minimum: 0,
						maximum: 460,
						label: {
							//field: 'label',
							display: 'inside',
							orientation: '',
							fillStyle: '#9E9E9E',
							//fontWeight: 'bold',
							//fontColor: 'grey',
							fontSize: 13,
							fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
						}
						//renderer: 'onAxisLabelRender'
					}, {
						type: 'category',
						style: {
							majorTickSize : 0,
							strokeStyle : '#9E9E9E'
						},
						position: 'bottom',
						label: {
							//hidden: true,
							field: 'label',
							display: 'inside',
							orientation: '',
							fillStyle: 'white',
							fontWeight: 'bold',
							fontSize: 13,
							fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
							//renderer: 'onLabelRender2012'
						}
						//renderer: 'onBotttomAxisLabelRender'
					}],
					sprites: [{
						type: 'text',
						x: 170,
						y: 205,
						text: "План",
						font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						'text-anchor': 'middle',
						fillStyle: '#9E9E9E'
					}],
					store: {
						fields: ['gpr1','gpr2', 'to1', 'gm1', 'to2', 'gm2'],
						data: [
							{ gpr1: 'ГПРО', to1: 420, gm1: 40},
							{ gpr2: 'ГПРНТ', to2: 150.8, gm2: 309.2}
						]
					},
					series: [{
						type: 'bar',
						stacked: true,
						//fullStack: true,

						title: [ 'ГПРО', 'ost'],
						xField: 'gpr1',
						yField: [ 'to1', 'gm1'],
						//colors:['#f23f3f','#ff8809','#ff0','#0039a6','#00ee88','#ff8aed'],
						colors: ['#24c6dc', '#dee2e7'],
						style: {
							minGapWidth: 80,
							maxBarWidth: 30
						},
						/*highlight: {
						 fillStyle: '#ff512f'
						 },*/
						listeners: {
							itemclick: 'seriesItemClick'
						}/*,
						 tooltip: {
						 trackMouse: true,
						 //width: 620,
						 //height: 170,
						 //layout: 'fit',
						 listeners: {
						 beforeShow: 'tooltipBeforeShow'
						 },
						 //items: [pieChart, grid],
						 renderer: 'onBarTipRender'
						 }*/
					},{
						type: 'bar',
						stacked: true,
						//fullStack: true,
						title: [ 'ГПРНТ', 'ost'],
						xField: 'gpr2',
						yField: [ 'to2', 'gm2'],
						colors: ['#673ab7', '#dee2e7'],
						style: {
							minGapWidth: 80,
							maxBarWidth: 30
						}
						/*highlight: {
						 fillStyle: '#ff512f'
						 },*/
						/*tooltip: {
						 listeners: {
						 beforeShow: 'tooltipBeforeShow'
						 },
						 trackMouse: true,
						 renderer: 'onBarTipRender'
						 }*/
					}]
				},{
					xtype: 'polar',
					flex: 1,
					animation: true,
					padding: '10px 0 10px 10px',
					donut: true,
					interactions: ['rotate'],
					colors: ['#2ac8ef', '#ececec'],

					store: {
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
					sprites: [{
						type: 'text',
						x: 62,
						y: 21,
						text: '99,8%',
						font: '15px 300 Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						fillStyle: '#24c6dc'
					},{
						type: 'text',
						x: 110,
						y: 21,
						text: "ГПРО",
						font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						fillStyle: '#9E9E9E'
					},{
						type: 'text',
						x: 62,
						y: 41,
						text: '99,2%',
						font: '15px 300 Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						fillStyle: '#673ab7'
					},{
						type: 'text',
						x: 110,
						y: 41,
						text: "ГПРНТ",
						font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						fillStyle: '#9E9E9E'
					},{
						type: 'text',
						x: 155,
						y: 115,
						text: "Кассовое\nисполнение",
						font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						'text-anchor': 'middle',
						fillStyle: '#9E9E9E'
					}],

					series: [{
						type: 'pie',
						xField: 'data2',
						colors: ['#673ab7', '#dee2e7', '#ffffff'],
						subStyle: {
							strokeStyle: ['white'],
							lineWidth: [2]
						},
						//colors: ['#2ac8ef', '#ececec'],
						radiusFactor: 80,
						donut: 67
					},{
						type: 'pie',
						xField: 'data1',
						colors: ['#2ac8ef', '#dee2e7', '#ffffff'],
						subStyle: {
							strokeStyle: ['white'],
							lineWidth: [2]
						},
						//colors: ['#2ac8ef', '#ececec'],
						//radiusFactor: 85,
						donut: 87
					}]

				}]
			}]
		}]
	},{
		height: 292,
		cls: 'kpi-meta-charts',
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		items: [{
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items:[{
				height: 56,
				//cls: 'kpi-meta-charts',
				layout: {
					type: 'hbox',
					align: 'stretch'
				},
				items: [{
					margin: '0 15px 0 0',
					//margin: '20px 10px 0 20px',
					//cls: 'kpi-meta-charts',
					width: 320,
					//width: 352,
					bodyCls: 'redemption-body',
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					items: [{
						xtype: 'label',
						html: '<span>Межбюджетные трансферты</span>',
						cls: 'minpanel-label'
						//cls: 'kpi-in-store'
					}]
				}]
			}, {
				height: 79,
				//cls: 'kpi-meta-charts',
				layout: {
					type: 'hbox',
					align: 'stretch'
				},
				items: [{
					//margin: '10px 0 0 20px',
					//cls: 'kpi-meta-charts',
					width: 320,
					//width: 352,
					bodyCls: 'redemption-body',
					//cls: 'kpi-meta-charts',
					layout: {
						type: 'hbox',
						align: 'stretch'
					},
					items: [{
						xtype: 'label',
						html: '<span>55</span></br><span>млрд руб.</span>',
						cls: 'minpanel-bottom-bars-hl'
						//cls: 'kpi-in-store'
					},{
						xtype: 'label',
						html: '<span>План</span>',
						cls: 'minpanel-sign-bottom'
						//cls: 'kpi-in-store'
					}]
				}]
			}, {
				height: 79,
				//cls: 'kpi-meta-charts',

				layout: {
					type: 'hbox',
					align: 'stretch'
				},

				items: [{
					//margin: '10px 0 0 20px',
					//cls: 'kpi-meta-charts',
					width: 320,
					//width: 352,
					bodyCls: 'redemption-body',

					layout: {
						type: 'hbox',
						align: 'stretch'
					},
					items: [{
						xtype: 'label',
						html: '<span>3,3</span></br><span>млрд руб.</span>',
						cls: 'minpanel-bottom-bars-hl'
						//cls: 'kpi-in-store'
					},{
						xtype: 'label',
						html: '<span>Остатки средств в бюджетах субьектов РФ</span>',
						cls: 'minpanel-sign-bottom'
						//cls: 'kpi-in-store'
					}]
				}]
			}, {
				height: 79,
				//cls: 'kpi-meta-charts',

				layout: {
					type: 'hbox',
					align: 'stretch'
				},

				items: [{
					//margin: '10px 0 0 20px',
					//cls: 'kpi-meta-charts',
					width: 320,
					//width: 352,
					bodyCls: 'redemption-body',

					layout: {
						type: 'hbox',
						align: 'stretch'
					},
					items: [{
						xtype: 'label',
						html: '<span>0</span></br><span>млрд руб.</span>',
						cls: 'minpanel-bottom-bars-hl'
						//cls: 'kpi-in-store'
					},{
						xtype: 'label',
						html: '<span>Не перечислено в субьекты РФ</span>',
						cls: 'minpanel-sign-bottom'
						//cls: 'kpi-in-store'
					}]
				}]
			}]
		},{
			margin: '0 15px 0 0',
			//margin: '20px 10px 0 20px',
			width: 320,
			//width: 352,
			bodyCls: 'redemption-body',

			layout: {
				type: 'vbox',
				align: 'stretch'
			},

			items: [{
				xtype: 'label',
				html: '<span>Вузы подведомственные МОН</span><span>на 30.12.2015</span>',
				cls: 'minpanel-label'
				//cls: 'kpi-in-store'
			},{
				layout: {
					type: 'hbox',
					align: 'stretch'
				},
				//background:
				bodyCls: 'kpi-tiles-color',
				padding: '0 0 0 10px',
				items:[{
					xtype: 'label',
					html: '<span>Субсидии на ГЗ</span>',
					//cls: 'kpi-in-store'
					cls: 'legend-gz'
				}, {
					xtype: 'label',
					html: '<span>Субсидии на иные цели</span>',
					cls: 'legend-else'
				}]
			},{
				xtype: 'cartesian',
				//width: 200,
				flex: 2,
				animation: true,
				padding: '10px 0 10px 10px',
				axes: [{
					type: 'numeric',
					position: 'left',
					grid: true,
					style: {
						majorTickSize : 0,
						strokeStyle : '#9E9E9E'
					},
					fields: [
						'gz',
						'gray1',
						'else',
						'gray2'
					],
					minimum: 0,
					maximum: 200,
					label: {
						field: 'label',
						display: 'inside',
						orientation: '',
						fillStyle: '#9E9E9E',
						fontSize: 13,
						fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
					}
				}, {
					type: 'category',
					style: {
						majorTickSize : 0,
						strokeStyle : '#9E9E9E'
					},
					position: 'bottom',
					label: {
						//hidden: true,
						field: 'label',
						display: 'inside',
						orientation: '',
						fillStyle: 'white',
						fontWeight: 'bold',
						fontSize: 13,
						fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
						//renderer: 'onLabelRender2012'
					}
					//renderer: 'onBotttomAxisLabelRender'
				}],
				sprites: [{
					type: 'text',
					x: 81,
					y: 180,
					text: "План",
					font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
					'text-anchor': 'middle',
					fillStyle: '#9E9E9E'
				},{
					type: 'text',
					x: 168,
					y: 180,
					text: "Израсходовано",
					font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
					'text-anchor': 'middle',
					fillStyle: '#9E9E9E'
				},{
					type: 'text',
					x: 258,
					y: 180,
					text: "Остаток МОН",
					font: '12px Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
					'text-anchor': 'middle',
					fillStyle: '#9E9E9E'
				}],
				store: {
					fields: ['type', 'gz', 'else', 'gray1', 'gray2'],
					data: [
						{ type: '1', gz: 180, gray1: 20},
						{ type: '2', else: 50, gray2: 150},
						{ type: '3', gz: 175, gray1: 25},
						{ type: '4', else: 45, gray2: 155},
						{ type: '5', gz: 5, gray1: 195},
						{ type: '6', else: 5, gray2: 195}
					]
				},
				series: [{
					type: 'bar',
					stacked: true,
					xField: 'type',
					yField: [ 'gz', 'gray1'],
					colors: ['#673ab7', '#dee2e7'],
					/*highlight: {
					 fillStyle: 'yellow'
					 },*/
					listeners: {
						itemclick: 'seriesItemClick'
					},
					label: {
						field: ['else', 'gray2']
						//display: 'insideEnd'
					},
					tooltip: {
						trackMouse: true,
						//width: 620,
						//height: 170,
						//layout: 'fit',
						listeners: {
							beforeShow: 'tooltipBeforeShow'
						}
						//items: [pieChart, grid],
						//renderer: 'onBarTipRender'
					},
					renderer: function(sprite, config, rendererData, index){
						var w = config.width;
						config.width = 20;
						config.x = config.x + (w-20)/2 + 10; //<--- -20 for first bar and + 20 for second

					}
				},{
					type: 'bar',
					stacked: true,
					//fullStack: true,
					//title: [ 'ГПРО', 'ost'],
					xField: 'type',
					yField: [ 'else', 'gray2'],
					colors: ['#ff512f', '#dee2e7'],
					/*style: {
					 minGapWidth: 5,
					 maxBarWidth: 15
					 },*/
					label: {
						field: ['gz', 'gray2']
						//display: 'insideEnd'
					},
					/*highlight: {
					 fillStyle: 'yellow'
					 },*/
					listeners: {
						itemclick: 'seriesItemClick'
					},
					tooltip: {
						trackMouse: true,
						//width: 620,
						//height: 170,
						//layout: 'fit',
						listeners: {
							beforeShow: 'tooltipBeforeShow'
						}
						//items: [pieChart, grid],
						//renderer: 'onBarTipRender'
					},
					renderer: function(sprite, config, rendererData, index){
						var w = config.width;
						config.width = 20;
						config.x = config.x + (w-20)/2 - 10; //<--- -20 for first bar and + 20 for second

					}
				}]
			}]
		},{
			//margin: '20px 10px 0 20px',
			width: 320,
			//width: 352,
			bodyCls: 'redemption-body',

			layout: {
				type: 'vbox',
				align: 'stretch'
			},

			items: [{
				xtype: 'label',
				html: '<span>Инвестиции</span><span>на 30.12.2015</span>',
				cls: 'minpanel-label'
				//cls: 'kpi-in-store'
			},{
				xtype: 'cartesian',
				//width: 200,
				flex: 2,
				animation: true,
				padding: '10px 0 10px 10px',
				store: {
					fields: ['x','y'],
					data: [
						{ x: 0, y: 0.00, cos: 1.00, tan: 0.00 },
						{ x: 10, y: 0.17, cos: 0.98, tan: 0.18 },
						{ x: 20, y: 0.34, cos: 0.94, tan: 0.36 },
						{ x: 30, y: 0.50, cos: 0.87, tan: 0.58 },
						{ x: 40, y: 0.64, cos: 0.77, tan: 0.84 },
						{ x: 50, y: 0.77, cos: 0.64, tan: 1.19 },
						{ x: 60, y: 0.87, cos: 0.50, tan: 1.73 },
						{ x: 70, y: 0.94, cos: 0.34, tan: 2.75 },
						{ x: 80, y: 0.98, cos: 0.17, tan: 5.67 },
						{ x: 90, y: 1.00, cos: 0.00, tan: false },
						{ x: 100, y: 0.98, cos: -0.17, tan: -5.67 },
						{ x: 110, y: 0.94, cos: -0.34, tan: -2.75 },
						{ x: 120, y: 0.87, cos: -0.50, tan: -1.73 },
						{ x: 130, y: 0.77, cos: -0.64, tan: -1.19 },
						{ x: 140, y: 0.64, cos: -0.77, tan: -0.84 },
						{ x: 150, y: 0.50, cos: -0.87, tan: -0.58 },
						{ x: 160, y: 0.34, cos: -0.94, tan: -0.36 },
						{ x: 170, y: 0.17, cos: -0.98, tan: -0.18 },
						{ x: 180, y: 0.00, cos: -1.00, tan: 0.00 },
						{ x: 190, y: -0.17, cos: -0.98, tan: 0.18 },
						{ x: 200, y: -0.34, cos: -0.94, tan: 0.36 },
						{ x: 210, y: -0.50, cos: -0.87, tan: 0.58 },
						{ x: 220, y: -0.64, cos: -0.77, tan: 0.84 },
						{ x: 230, y: -0.77, cos: -0.64, tan: 1.19 },
						{ x: 240, y: -0.87, cos: -0.50, tan: 1.73 },
						{ x: 250, y: -0.94, cos: -0.34, tan: 2.75 },
						{ x: 260, y: -0.98, cos: -0.17, tan: 5.67 },
						{ x: 270, y: -1.00, cos: 0.00, tan: false },
						{ x: 280, y: -0.98, cos: 0.17, tan: -5.67 },
						{ x: 290, y: -0.94, cos: 0.34, tan: -2.75 },
						{ x: 300, y: -0.87, cos: 0.50, tan: -1.73 },
						{ x: 310, y: -0.77, cos: 0.64, tan: -1.19 },
						{ x: 320, y: -0.64, cos: 0.77, tan: -0.84 },
						{ x: 330, y: -0.50, cos: 0.87, tan: -0.58 },
						{ x: 340, y: -0.34, cos: 0.94, tan: -0.36 },
						{ x: 350, y: -0.17, cos: 0.98, tan: -0.18 },
						{ x: 360, y: 0.00, cos: 1.00, tan: 0.00 }
					]
				},
				axes: [{
					type: 'numeric',
					position: 'left',
					grid: true,
					style: {
						majorTickSize : 0,
						strokeStyle : '#9E9E9E'
					},
					fields: [ 'to1', 'gm1', 'to2', 'gm2'],
					label: {
						field: 'label',
						display: 'inside',
						orientation: '',
						fillStyle: '#9E9E9E',
						fontSize: 13,
						fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
					},
					minimum: 0,
					maximum: 100
				}, {
					type: 'category',
					style: {
						majorTickSize : 0,
						strokeStyle : '#9E9E9E'
					},
					position: 'bottom',
					label: {
						hidden: true
					}
				}],
				series: [{
					type: 'line',
					xField: 'x',
					yField: 'y',
					fill: true,
					smooth: true,
					colors: ['#aaffa9'],
					style: {
						smooth: true,
						miterLimit: 3,
						lineCap: 'miter',
						strokeOpacity: 1,
						fillOpacity: 0.7,
						lineWidth: 1.5
					}
				}]
			}]
		}]
	}]
});

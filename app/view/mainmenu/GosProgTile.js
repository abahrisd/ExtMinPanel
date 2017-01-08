/**
 * Created by SABAhri on 09.02.2016.
 */
Ext.define('ExtMinPanel.view.mainmenu.GosProgTile', {
	extend: 'Ext.panel.Panel',
	xtype: 'gosprogtile',
	config: {
		responsiveCls: ''
	},
	bodyCls: 'redemption-body',
	cls: 'kpi-meta-charts',
	height: 292,
	bodyPadding: 10,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	initComponent: function(){

		this.items = [{
			xtype: 'label',
			html: '<span>Государственные программы</span><span>на 30.12.2015</span>',
			cls: 'minpanel-label'
		},{
			xtype: 'container',
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			flex: 1,
			items:[{
				xtype: 'cartesian',
				reference: 'gosprogLeftRef',
				listeners: {
					render: 'menuTileRenderer'
				},
				flex: 1,
				animation: true,
				//Что бы было видно лейбл
				innerPadding: {
					top: 20
				},
				legend: {
					tpl: [//style="margin:5px;padding:0px;cursor:pointer;
						'<div class="', Ext.baseCSSPrefix, 'legend-container">',
						'<tpl for=".">',
						'<div style="font-size:10px" class="', Ext.baseCSSPrefix, 'legend-item">',
						'<span ',
						'class="', Ext.baseCSSPrefix, 'legend-item-marker {[ values.disabled ? Ext.baseCSSPrefix + \'legend-inactive\' : \'\' ]}" ',
						'style="background:{mark};">',
						'</span>{name}',
						'</div>',
						'</tpl>',
						'</div>'
					],
					toggleable: false,
					docked: 'top'
				},
				bind:{
					store: '{gosprogtile}'
				},
				gradients: [{
					id: 'innerGrad',
					angle: 0,
					stops: {
						0: {color: '#4776e6'},
						100: {color: '#8e54e9'}
					}
				},{
					id: 'outerGrad',
					angle: 0,
					stops: {
						0: {color: '#56bacc'},
						100: {color: '#24c6dc'}
					}
				}],
				axes: [{
					type: 'numeric',
					position: 'left',
					hidden: true,//#9E9E9E
					//grid: true,
					style: {
						majorTickSize : 0,
						strokeStyle : '#9E9E9E'
					},
					minimum: 0,
					maximum: 460,
					label: {
						hidden: true,
						display: 'inside',
						orientation: '',
						fillStyle: '#9E9E9E',
						fontSize: 13,
						fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
					}
				}, {
					type: 'category',
					position: 'bottom',
					style: {
						majorTickSize : 0,
						strokeStyle : '#9E9E9E'
					},
					title: {
						text: 'План, млрд руб.',
						fontSize: 12,
						fill: '#9E9E9E'
					},
					label: {
						hidden: true,
						field: 'label',
						display: 'inside',
						orientation: '',
						fillStyle: 'white',
						fontWeight: 'bold',
						fontSize: 13,
						fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"'
					}
				}],
				series: [{
					type: 'bar',
					//stacked: true,
					xField: 'category1',
					yField: 'gpro',
					colors: ['#24c6dc'],
					renderer: 'gosProgRenderer',
					title: 'ГПРО',
					style: {
						maxGapWidth: 100,
						minGapWidth: 20,
						maxBarWidth: 50
					},
					label: {
						field: 'gpro',
						orientation: 'horizontal',
						fillStyle: '#69708a',
						fontWeight: 'regular',
						fontSize: 14,
						renderer: 'basicLabelRenderer',
						display: 'outside',
						fontFamily: 'Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
					}
				},{
					type: 'bar',
					//stacked: true,
					xField: 'category2',
					yField: 'gprnt',
					colors: ['#4776e6'],
					renderer: 'gosProgRenderer',
					title: 'ГПРНТ',
					label: {
						field: 'gprnt',
						orientation: 'horizontal',
						fillStyle: '#69708a',
						fontWeight: 'regular',
						fontSize: 14,
						//lineHeight: '0.7',
						renderer: 'basicLabelRenderer',
						fontFamily: 'Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						display: 'outside'
					},
					style: {
						maxGapWidth: 100,
						minGapWidth: 20,
						maxBarWidth: 50
					}
				}]
			},{
				xtype: 'polar',
				reference: 'gosprogRighttRef',
				bodyStyle:{"background-color":"white"},
				flex: 1,
				gradients: [{
					id: 'v-1',
					angle: 90,
					stops: {
						0: {color: '#24c6dc'},
						100: {color: '#56bacc'}
					}
				}, {
					id: 'v-2',
					angle: 90,
					stops: {
						0: {color: '#4776e6'},
						100: {color: '#8e54e9'}
					}
				}],
				listeners: {
					boxready: 'onBoxIsReadyGP',
					render: 'menuTileRenderer',
					move: 'onChartMoveGP'
				},
				animation: true,
				padding: '10px 0 10px 10px',
				donut: true,
				colors: ['#2ac8ef', '#ececec'],
				bind: {
					store: '{gosprogpolartile}'
				},
				series: [{
					type: 'pie',
					xField: 'data2',
					renderer: 'gosProgPieInnerRenderer',
					colors: ['#673ab7', '#dee2e7', 'transparent'],
					subStyle: {
						strokeStyle: ['transparent'],
						lineWidth: [2]
					},
					radiusFactor: 80,
					donut: 67
				},{
					type: 'pie',
					xField: 'data1',
					renderer: 'gosProgPieOuterRenderer',
					colors: ['#2ac8ef', '#dee2e7', 'transparent'],
					subStyle: {
						strokeStyle: ['transparent'],
						lineWidth: [2]
					},
					donut: 87
				}]

			}]
		}];

		this.callParent();
	}
});
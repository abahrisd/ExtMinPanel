/**
 *
 */
Ext.define('overrides.chart.LegendBase', {
	override: 'Ext.chart.LegendBase',
	minWidth:0,

	minHeight:0,

	getBBox:function () {
		var me = this;

		if (me.width < me.minWidth)
			me.width = me.minWidth;


		if (me.height < me.minHeight)
			me.height = me.minHeight;


		return {
			x:Math.round(me.x) - me.boxStrokeWidth / 2,
			y:Math.round(me.y) - me.boxStrokeWidth / 2,
			width:me.width,
			height:me.height
		};
	}
});
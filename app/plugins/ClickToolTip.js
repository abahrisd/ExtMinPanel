/**
 * Created by SABAhri on 16.02.2016.
 */
// Author : Rahul Jain
// Extend Tooltip component to override the behaviour
// of on mouseover to on click

Ext.define('ExtMinPanel.plugins.ClickToolTip', {
	extend : 'Ext.ToolTip',
	//alias : 'clicktooltip',
	initTarget : function(target){
		var t;
		if((t = Ext.get(target))){
			if(this.target){
				var tg = Ext.get(this.target);
				this.mun(tg, 'click', this.onTargetOver, this);
				//this.mun(tg, 'mouseover', this.onTargetOver, this);
				this.mun(tg, 'mouseout', this.onTargetOut, this);
				this.mun(tg, 'mousemove', this.onMouseMove, this);
			}
			this.mon(t, {
				//mouseover: this.onTargetOver,
				click: this.onTargetOver,
				mouseout: this.onTargetOut,
				mousemove: this.onMouseMove,
				scope: this
			});
			this.target = t;
		}
		if(this.anchor){
			this.anchorTarget = this.target;
		}
	}
});
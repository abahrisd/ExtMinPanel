/**
 *
 */
Ext.define('overrides.container.Viewport', {
	override: 'Ext.container.Viewport',
	onRender: function() {
		var me = this;

		me.callParent(arguments);

		// Important to start life as the proper size (to avoid extra layouts)
		// But after render so that the size is not stamped into the body,
		// although measurement has to take place before render to avoid
		// causing a reflow.
		me.width  = me.initialViewportWidth;
		me.height = me.initialViewportHeight;

		me.initialViewportWidth = me.initialViewportHeight = null;

		// prevent touchmove from panning the viewport in mobile safari
		if (Ext.supports.TouchEvents) {
			me.mon(Ext.getDoc(), {
				touchmove: function(e) {
					window.document.dispatchEvent(e.event);
					//return false;
					//e.preventDefault();
				},
				translate: false,
				delegated: false
			});
		}
	}
});
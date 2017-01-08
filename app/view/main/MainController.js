/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtMinPanel.view.main.MainController', {
    extend: 'ExtMinPanel.utils.BaseController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
	menuTileRenderer: function(c) {
		var reference = c.getReference(),
			activeTab;

		var tabPanel = Ext.ComponentQuery.query('app-main')[0];
		c.el.on('click', function(event) {
			switch(reference){
				case 'minobrtileRef':
					activeTab = 1;
					break;
				case 'gosprogLeftRef':
					activeTab = 2;
					break;
				case 'gosprogRighttRef':
					activeTab = 3;
					break;
				case 'mejbudgtranstileRef':
					activeTab = 4;
					break;
				case 'univmontileRef':
					activeTab = 5;
					break;
				case 'investtileRef':
					activeTab = 7;
					break;
			}
			tabPanel.setActiveTab(activeTab);
		});
	},
	/*routes: {
		'!:id': {
			action: 'onNavigate',
			before: 'beforeNavigate'
		},

		'!:id/:state': {
			action: 'onNavigateDeep',
			before: 'beforeNavigateDeep'
		}
	},

	listen: {
		controller: {
			'*': {
				// We delegate all changes of router history to this controller by firing
				// the "changeroute" event from other controllers.
				changeroute: 'changeRoute',

				unmatchedroute: 'onUnmatchedRoute'
			}
		}
	},*/
	init: function(){
		Ext.util.Format.thousandSeparator  = " ";
		Ext.util.Format.decimalSeparator  = ",";
		Ext.util.Format.currenyPrecision  = 1;
	},
	onHeaderTitleClick: function(header, event, opts){
		var t = event.getTarget('.x-title-item', 1, true) || event.getTarget('.x-title-icon', 1, true);
		if (t){
			this.getView().setActiveTab(0);
		}
	},
	destroy: function () {
		Ext.destroyMembers(this, 'menu');
		this.callParent();
	},
	beforeNavigate: function (id, action) {
		var view = this.getView();
		var tab = view.getComponent(id);

		if (tab) {
			action.resume();
		} else {
			this.onBadRoute();
		}
	},

	beforeNavigateDeep: function (id, state, action) {
		var view = this.getView();
		var tab = view.getComponent(id);
		var valid;

		if (tab.isValidState) {
			valid = tab.isValidState(state);
		}

		if (valid) {
			action.resume();
		} else {
			this.onBadRoute();
		}
	},

	changeRoute: function (controller, route) {
		// Since we parse
		if (route.substring(0, 1) !== '!') {
			route = '!' + route;
		}

		this.redirectTo(route);
	},

	getTabRoute: function (tab) {
		var route = tab.xtype;

		if (tab.getActiveState) {
			route += '/' + (tab.getActiveState() || tab.getDefaultActiveState());
		}

		return route;
	},

	onBadRoute: function () {
		var app = ExecDashboard.app.getApplication();
		this.changeRoute(this, app.getDefaultToken());
	},

	onNavigate: function (id) {
		//Ext.log('navigate: ' + id);
		var tabs = this.getView();

		var tab = tabs.setActiveTab(id);
		if (tab) {
			// if we changed active tabs...
			var route = this.getTabRoute(tab);
			if (route && route !== id) {
				this.changeRoute(this, route);
			}
		}
	},

	onNavigateDeep: function (id, state) {
		//Ext.log('navigate: ' + id + ' / ' + state);
		var tabs = this.getView();
		var tab = tabs.setActiveTab(id) || tabs.getActiveTab();

		tab.setActiveState(state);
	},

	onTabChange: function (mainView, newTab) {
		var route = this.getTabRoute(newTab);
		this.changeRoute(this, route);
	},

	onMenuClick: function (menu, item) {
		this.getView().setActiveTab(menu.items.indexOf(item) + 1); // +1 for invisible first tab
	},

	onSwitchTool: function (e) {
		var menu = this.menu;

		if (!menu) {
			menu = this.getView().assistiveMenu;
			this.menu = menu = new Ext.menu.Menu(menu);
		}

		menu.showAt(e.getXY());
	},

	onUnmatchedRoute: function(token) {
		if (token) {
			this.onBadRoute();
		}
	},

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
	tooltipBeforeShow: function(item){
		return !Ext.isEmpty(item.html);
	}

});

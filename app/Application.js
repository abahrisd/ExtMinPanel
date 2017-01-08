function log(msg){
	console.log(msg);
}
/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ExtMinPanel.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ExtMinPanel',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
        //screen.orientation.lock('landscape');
	    //console.log('ola!');
    },

    onAppUpdate: function () {
	    Ext.Msg.confirm({
		    title: 'Обновление приложения',
		    icon: Ext.MessageBox.QUESTION,
		    message: 'Приложение было обновлено, перезагрузить?',
		    buttons: Ext.MessageBox.YESNO,
		    closable: false,
		    callback: function (choice) {
			    if (choice === 'yes') {
				    window.location.reload();
			    }
		    }
	    });

        /*Ext.Msg.confirm({closable:false},'Обновление прложения', 'Приложение было обновлено, перезагрузить?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );*/
    }
});

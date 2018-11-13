/*
let bootstrap = (function () {
    function causesManager() {
    }

    let initialize = function () {
        console.debug("bootstrap.initialize invoked.")
    };

    function somePrivateMethod() {
    }

    return bootstrap;
}());
*/
let bootstrap;

(function (bootstrap) {
    /*
    var sessionManager = new core.SessionManager(window['VERSION']);
    var settingsManager = new core.SettingsManager();
    sessionManager.onLogin().add(function () {
        settingsManager.load();
    });
    var page = new layout.MainLayout(sessionManager);
    var routing = new core.Routing();
    var mainApplication;
    */
    function initialize() {
        console.log("bootstrap.initialize invoked.");

        isc.Button.create({
            title: "Click me",
            width: 200
        });

        //setupSmartClient();

        /*
        mainApplication = new core.MainApplication(sessionManager, page, routing, window['VERSION'], settingsManager);
        global.setApplication(mainApplication);
        var loadOptionValues = rpc.RPCManager.call(new command.system.option_value.GetOptionValueCommand(), function (values) {
            window['default_value'] = values;
        });
        var permissionValues = rpc.RPCManager.call(new command.system.acl.GetPermissionsCommand(), function (permissions) {
            core.AccessControl.instance.__initialize(permissions);
        });
        Q.all([loadOptionValues, permissionValues, settingsManager.load()]).then(function () {
            mainApplication.run();
            routing._detectHashChange();
            routing.onChange.add(function (route) {
                sessionManager.suppressLoginCheck = route.anonymous ? true : false;
            });
            if (routing.getCurrentRoute().anonymous)
                sessionManager.suppressLoginCheck = true;
            sessionManager.init();
            setInterval(function () { routing._detectHashChange(); }, 300);
            setInterval(function () { sessionManager.checkSession(); }, 120000);
        });
        sessionManager.onOldVersionDetected.add(function (newVersion, oldVersion) {
            var dialog = document.getElementById('error-new-version-detected');
            dialog.style.opacity = "0";
            dialog.style.display = null;
            isc.Timer.setTimeout(function () { return dialog.style.opacity = null; }, 100);
        });
        */
    }
    bootstrap.initialize = initialize;
    function setupSmartClient() {
        let isc = window['isc'];
        isc.setAutoDraw(false);// Disable automatic drawing for all items.
        isc.RPCManager.defaultTimeout = 1000 * 60;// * max RPC default time out is 1 min.
        //smartclient.PatchesManager.initializeAll();
        isc.Page.setAppImgDir('img/');
        isc.UploadItem.addProperties({ multiple: false });
        isc.UploadItem.addProperties({ _propagateMultiple: false });
        isc.DateItem.DEFAULT_END_DATE = isc.Date.createLogicalDate(2030, 11, 31);
    }
})(bootstrap || (bootstrap = {}));

Java.perform(function () {
    var znClass = Java.use('zn');
    var okGoClass = Java.use('com.lzy.okgo.OkGo');

    // Hook the NC method of zn class
    znClass.NC.overload('zn$oE').implementation = function (oEInstance) {
        console.log('[zn] NC called with zn$oE instance:', oEInstance);
        // Log properties of oEInstance if possible
        return this.NC(oEInstance); // Call the original method
    };

    // Hook network request methods in OkGo
    okGoClass.post.overload('java.lang.String').implementation = function (url) {
        console.log('[OkGo] post called with URL:', url);
        // You can add more logic here to log headers or post data
        return this.post(url); // Call the original method
    };

    // Assuming OkGo uses a method get to send HTTP GET requests
    okGoClass.get.overload('java.lang.String').implementation = function (url) {
        console.log('[OkGo] get called with URL:', url);
        return this.get(url); // Call the original method
    };
});

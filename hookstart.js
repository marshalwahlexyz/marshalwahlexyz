Java.perform(function () {
    // Hook Start_Activity methods
    var StartActivity = Java.use("com.loancloud.nigeria.easycash.activity.Start_Activity");

    StartActivity.onCreate.overload('android.os.Bundle').implementation = function (bundle) {
        console.log("Start_Activity.onCreate called");
        this.onCreate(bundle);
    };

    StartActivity.onStart.implementation = function () {
        console.log("Start_Activity.onStart called");
        this.onStart();
    };

    // Assuming K4 is an inner class of Start_Activity and is responsible for initiating some processes
    var K4 = Java.use("com.loancloud.nigeria.easycash.activity.Start_Activity$K4");
    K4.run.implementation = function () {
        console.log("K4.run called");
        this.run();
    };

    // Hook ji class methods (UpLoadPhoneBookManager in obfuscated form)
    var UpLoadPhoneBookManager = Java.use("defpackage.ji");
    UpLoadPhoneBookManager.sd.overload('android.content.Context').implementation = function (context) {
        console.log("ji.sd(Context) called");
        var result = this.sd(context);
        console.log("ji.sd(Context) returned " + result);
        return result;
    };

    UpLoadPhoneBookManager.sd.overload('android.content.Context', 'java.lang.String').implementation = function (context, str) {
        console.log("ji.sd(Context, String) called with string: " + str);
        this.sd(context, str);
    };
});

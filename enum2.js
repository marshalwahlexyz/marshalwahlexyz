Java.perform(function () {
    Java.enumerateLoadedClasses({
        onMatch: function (className) {
            if (className.includes('ji')) {
                console.log('Class found:', className);
                hookClass(className);
            }
        },
        onComplete: function () {
            console.log('Class enumeration completed.');
        }
    });

    function hookClass(className) {
        var UpLoadPhoneBookManager = Java.use(className);

        // Hook methods of UpLoadPhoneBookManager here
        // For example:
        UpLoadPhoneBookManager.sd.overload('android.content.Context').implementation = function (context) {
            console.log(className + '.sd(Context) called');
            var result = this.sd(context);
            // Additional logging or processing...
            return result;
        };
    }
});

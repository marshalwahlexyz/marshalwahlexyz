Java.perform(function () {
    console.log("Starting script...");

    // Delay to handle class loading
    setTimeout(function() {
        console.log("Hooking classes...");

        // Hook the 'ji' class methods
        var jiClass = Java.use("ji");
        console.log("Hooking 'ji' class methods...");

        jiClass.sd.overload('android.content.Context', 'java.lang.String').implementation = function (context, data) {
            console.log("[ji.sd] Context: " + context + ", Data: " + data);
            var result = this.sd(context, data);
            console.log("[ji.sd] Result: " + result);
            return result;
        };

        jiClass.NC.implementation = function () {
            console.log("[ji.NC] Singleton instance method called");
            return this.NC();
        };

        // Attempt to hook the network request method in 'zn.oE' class
        var znClass = Java.use("zn.oE");
        console.log("Hooking 'zn.oE' class methods...");

        // Since zn.oE might not have a direct method, we need to ensure it exists before hooking
        if (znClass.NC) {
            znClass.NC.overload('java.util.Map').implementation = function (map) {
                console.log("[zn.oE.NC] Map: " + map.toString());
                var result = this.NC(map);
                console.log("[zn.oE.NC] Network request sent. Result: " + result);
                return result;
            };
        }

        // Additional hook to capture onSuccess behavior if it processes the network response
        var NCClass = Java.use("zn$NC");
        if (NCClass.onSuccess) {
            NCClass.onSuccess.implementation = function (responseString, responseString2) {
                console.log("[zn$NC.onSuccess] Response: " + responseString);
                this.onSuccess(responseString, responseString2);
            };
        }

    }, 10000); // Delay to ensure classes are loaded, adjust as necessary

});

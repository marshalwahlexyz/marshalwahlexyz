Java.perform(function () {
    setTimeout(function() {
        Java.enumerateLoadedClasses({
            onMatch: function (className) {
                if (className.includes('ji')) {
                    console.log("Found class: " + className);
                    var targetClass = Java.use(className);
                    console.log("Methods of " + className + ":");
                    targetClass.class.getDeclaredMethods().forEach(function (method) {
                        console.log("- " + method);
                    });
                }
            },
            onComplete: function () {
                console.log("Class enumeration complete.");
            }
        });
    }, 5000);
});

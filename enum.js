Java.perform(function () {
    Java.enumerateLoadedClasses({
        onMatch: function (className) {
            if (className.includes('m.ji')) {
                console.log(className);
            }
        },
        onComplete: function () {
            console.log('Class enumeration complete.');
        }
    });
});

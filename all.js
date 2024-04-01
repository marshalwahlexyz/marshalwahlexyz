Java.perform(function () {
    // Hook all methods of a class
    function hookAllMethodsOfClass(className) {
        var clazz = Java.use(className);
        var methods = clazz.class.getDeclaredMethods();
        methods.forEach(function (method) {
            var methodName = method.getName();
            var overloads = clazz[methodName].overloads;
            overloads.forEach(function (overload) {
                var proto = '(' + overload.argumentTypes.map(function (type) {
                    return type.className;
                }).join(', ') + ')';
                console.log('Hooking ' + className + '.' + methodName + proto);
                overload.implementation = function () {
                    console.log('Called: ' + className + '.' + methodName + proto);
                    return this[methodName].apply(this, arguments);
                };
            });
        });
    }

    // Enumerate and hook all loaded classes and their methods
    Java.enumerateLoadedClasses({
        onMatch: function (className) {
            console.log('Loaded class: ' + className);
            try {
                hookAllMethodsOfClass(className);
            } catch (err) {
                console.error('Error hooking: ' + className + '\n' + err);
            }
        },
        onComplete: function () {
            console.log('Class enumeration complete.');
        }
    });
});

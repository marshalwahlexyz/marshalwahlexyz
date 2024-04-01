// Define the package and class names
var packageName = 'com.example.appcontact';
var className = 'MainActivity';

Java.perform(function () {
    // Obtain a reference to the target class
    var TargetClass = Java.use(packageName + '.' + className);

    // Hook the loadContacts method
    TargetClass.loadContacts.implementation = function () {
        // Call the original method
        var result = this.loadContacts();

        // Log the retrieved contacts information
        console.log('Contacts retrieved: ' + result);

        // Return the result to ensure the original method's behavior is unchanged
        return result;
    };
});

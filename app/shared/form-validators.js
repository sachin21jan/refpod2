"use strict";
var FormValidators = (function () {
    function FormValidators() {
    }
    FormValidators.validateEmail = function (control) {
        var email = control.value;
        if (email == '' || email === undefined) {
            return null;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = re.test(email);
        return valid ? null : { "invalidEmail": true };
    };
    FormValidators.passwordStrength = function (control) {
        var password = control.value;
        if (password == '' || password === undefined) {
            return null; //required validator will take care of this
        }
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var valid = re.test(password);
        return valid ? null : { "passwordNotStrong": true };
    };
    FormValidators.match = function (group) {
        return group.get('password').value === group.get('password2').value
            ? null : { 'mismatch': true };
    };
    return FormValidators;
}());
exports.FormValidators = FormValidators;
//# sourceMappingURL=form-validators.js.map
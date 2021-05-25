import { FormGroup, FormControl } from '@angular/forms';

export function emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        let password= group.controls[passwordKey];
        let passwordConfirmation= group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({mismatchedPasswords: true})
        }
    }
}

export function NumbersOnlyValidator(control: FormControl): {[key: string]: any} {
    var numExpression = /[0-9]$/; 
    
    var str=JSON.stringify(control.value);  
    //console.log(str.length);
    if (control.value && !numExpression.test(control.value)) {
        return {invalidNumber: true};
    }

    if (str.length<12) {
        return {length: true};
    }
}
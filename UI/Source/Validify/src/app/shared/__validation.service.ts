
/*
import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

    constructor() { }
  
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'is required',
            'invalidEmail': 'must be a valid email',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'invalidString' : 'must be a string'
        };
        return config[validatorName];
    }
    

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if(!control.value) return null;
        if (control.value.match(/^[a-zA-Z]*$/)) {
            return null;
        } else {
            return { 'invalidString': true };
        }
    }


    // Starting...
    static string(control) {        
        if(!control.value) return null;
        if (control.value.match(/^[a-zA-Z ]*$/)) {
            return null;
        } else {
            return { 'invalidString': true };
        }
    }

    static email(control) {
        // RFC 2822 compliant regex
        if(!control.value) return null;
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmail': true };
        }
    }
}
*/
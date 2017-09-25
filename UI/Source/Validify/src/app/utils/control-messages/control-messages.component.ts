import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './../validation.service';


@Component({
  selector: 'evn-control-messages',
  templateUrl: './control-messages.component.html'
})


export class ControlMessagesComponent implements OnInit {

  constructor() {
  }


  ngOnInit() {}


  @Input() control: FormControl;
  @Input() label: String;


  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }



}

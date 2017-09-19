import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  createAddressString(addressObj) {
    let addressText = "";
    if (addressObj.lane1) addressText += addressObj.lane1;
    if (addressObj.lane2) addressText += (addressText) ? ", " + addressObj.lane2 : addressObj.lane2;
    if (addressObj.city) addressText += (addressText) ? ", " + addressObj.city : addressObj.city;
    if (addressObj.states && addressObj.states.state_name) addressText += (addressText) ? ", " + addressObj.states.state_name : addressObj.states.state_name;
    if (addressObj.country && addressObj.country.name) addressText += (addressText) ? ", " + addressObj.country.name : addressObj.country.name;
    if (addressObj.postal_code) addressText += (addressText) ? ", " + addressObj.postal_code : addressObj.postal_code;
    return addressText;
  }

  generateShortName(nameObj) {
    if (!nameObj) return "";
    let shortName = "";
    if (nameObj.first_name || nameObj.last_name) {
      let firstName = "", lastName = "";
      if (nameObj.first_name) firstName = nameObj.first_name.trim().charAt(0).toUpperCase();
      if (nameObj.last_name) lastName = nameObj.last_name.trim().charAt(0).toUpperCase();
      return firstName + lastName;
    }

    if (nameObj.company_name) {
      let companyNameArr = nameObj.company_name.split(" ");
      companyNameArr = companyNameArr.filter(companyName =>{ return companyName } );
      if (companyNameArr) {
        let iteration = (companyNameArr.length < 3) ? companyNameArr.length : 3;
        for (let i = 0; i < iteration; i++) {
          shortName += companyNameArr[i].charAt(0).toUpperCase();
        }
        return shortName;
      }
    }

    if (nameObj.display_name) {
      let displayNameArr = nameObj.display_name.split(" ");
      displayNameArr = displayNameArr.filter(displayName =>{ return displayName } );
      if (displayNameArr) {
        let iteration = (displayNameArr.length < 2) ? displayNameArr.length : 2;
        for (let i = 0; i < iteration; i++) {
          shortName += displayNameArr[i].charAt(0).toUpperCase();
        }
        return shortName;
      }
    }
  }

  getWorkorderStatus(i) {
    let statuses = {
      1: 'Open',
      2: 'Assigned',
      3: 'Cancelled',
      4: 'Completed',
      5: 'Posted',
      6: 'Travelling'
    }
    return statuses[i] || "";
  }
}

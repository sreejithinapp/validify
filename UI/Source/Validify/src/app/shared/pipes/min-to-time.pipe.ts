
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToTime'
})

export class MinToTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {

		let time: string = '';
		let hours = Math.floor(value / 60);

		if (hours < 10){
			time = '0' + hours;
		} else {
			time = '' + hours;
		}

		time += ":";

		let mins = value % 60;

		if (mins < 10) {
			time += '0' + mins;			
		} else {
			time += '' + mins;
		}

    return time;

  }

}


//import { MinToTimePipe } from './shared/pipes/min-to-time.pipe';
//pipes: [MinToTimePipe]
//<tr *ngFor="let item of  records | category: searchText | orderBy: {property: column, direction: direction}">

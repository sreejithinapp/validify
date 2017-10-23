
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

	transform(value: string, args: string): string {		

		let limit = parseInt(args);	

		let trail = args.length > 1 ? args[1] : '...';

		return value.length > limit ? value.substring(0, limit) + trail : value;

	}

}


//import { TruncatePipe } from './shared/pipes/truncate.pipe';
//pipes: [TruncatePipe]
//<p>{{doc.description | truncate:25}}</p>

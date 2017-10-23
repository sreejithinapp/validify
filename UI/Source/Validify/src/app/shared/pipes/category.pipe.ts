
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'category' 
})

export class CategoryPipe implements PipeTransform {

  transform(categories: any, searchText: any): any {

    if (searchText == null) return categories;

    return categories.filter(function(category){
      return category.CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });

  }

}

//import { CategoryPipe } from './shared/pipes/category.pipe';
//pipes: [CategoryPipe]
//<tr *ngFor="let item of records | category: searchText">
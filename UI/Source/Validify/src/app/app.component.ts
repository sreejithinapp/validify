
import { Component } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  

    constructor(private messageService:MessageService) {
      //constructor
      this.clearMessageService();
    } 
    private clearMessageService(){
        this.messageService.clear();
    } 

}
//.......................................................................



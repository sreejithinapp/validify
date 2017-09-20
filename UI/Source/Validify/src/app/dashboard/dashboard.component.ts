
import { Component } from '@angular/core';

import { LoggerService } from "app/utils/logger.service";

//import * as _ from "lodash";


@Component({
    selector: 'vfy-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {   

    constructor(private logger:LoggerService ) {
        //logger.$log(this,"Test");
        //logger.$log(this,_.VERSION);        
    }

}


/*
data: any;  bardata: any;  chartOptions:any;
this.chartOptions = {responsive:false,maintainAspectRatio: false}
this.data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{label: 'Work Order',data: [28, 48, 40, 19, 86, 27, 90],fill: false, borderColor: '#565656'}]
}   
this.bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{label: 'First Week',backgroundColor: '#42A5F5',borderColor: '#1E88E5',data: [65, 59, 80, 81, 56, 55, 40]},
        {label: 'Second Week',backgroundColor: '#9CCC65',borderColor: '#7CB342',data: [28, 48, 40, 19, 86, 27, 90]}
    ]
}
<p-chart type="bar" [data]="bardata" [height]="200" [options]="chartOptions"></p-chart>
*/
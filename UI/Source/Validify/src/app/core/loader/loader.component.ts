import { Component, OnInit } from '@angular/core';

import { SharedService } from "app/core/shared.service";
import { LoggerService } from "app/utils/logger.service";

@Component({
  selector: 'evn-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {
  constructor() {
    //constructor
  }
  ngOnInit() {
  }
}

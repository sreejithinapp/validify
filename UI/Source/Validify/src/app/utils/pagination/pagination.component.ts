/*
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'evn-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() onPageChanged: EventEmitter<any> = new EventEmitter<any>();

  @Input() itemsPerPage: number = 5;
  @Input() currentPage: number = 1;
  @Input() pageSize = 5;
  @Input() from = 0;
  @Input() to = 0;
  @Input() totalItems = 0; 
  maxSize: number = 5;
  public noPages = [
    { label: "5", value: 5 },
    { label: "15", value: 15 },
    { label: "25", value: 25 },
    { label: "50", value: 50 },
    { label: "100", value: 100 },
  ];



  private page = 1;

  private pageOptions: any = { page: 1, itemsPerPage: 5 }

  constructor() { }

  onLimitChange() {

    this.pageOptions.page = this.page;
    this.pageOptions.itemsPerPage = this.itemsPerPage;
    //this.calculateFromTo();
    this.onPageChanged.emit(this.pageOptions);
  }
  pageChanged(event) {
    //console.log("paginator", event)
    this.pageOptions = event;
    this.page = event.page;
    //this.calculateFromTo();
    this.onPageChanged.emit(this.pageOptions);
  }

  ngOnInit() {
    this.pageOptions.page = this.page;
    this.pageOptions.itemsPerPage = this.itemsPerPage;
  }

}
*/
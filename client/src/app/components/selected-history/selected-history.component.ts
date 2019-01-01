import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-history',
  templateUrl: './selected-history.component.html',
  styleUrls: ['./selected-history.component.css']
})
export class SelectedHistoryComponent implements OnInit {
  selectedHistory: any;
  selectWord;
  constructor() { }

  ngOnInit() {
     const marker = JSON.parse(localStorage.getItem('markers'));
     this.selectWord = marker.keyword;
     this.selectedHistory = marker.imgUrls;

  }

}

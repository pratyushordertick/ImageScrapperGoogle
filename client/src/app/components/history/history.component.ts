import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  searchMe() {
    const ajdc: any = this.http.get('http://localhost:9090/routes/new' ).toPromise()
    .then((response) => {
      console.log(response);
      this.history = response.imgDate;
      console.log(this.history);
    } );
    console.log(ajdc  );
    return ajdc;
  }
}

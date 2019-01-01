import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
ok: any;
  history: any;
  markers ;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  test(event, item) {
    console.log(item.keyword);
    localStorage.clear();

    localStorage.setItem('markers', JSON.stringify(item));
    this.router.navigateByUrl('selected');
  }
  searchMe() {
    const ajdc: any = this.http.get('http://localhost:8080/routes/new' ).toPromise()
    .then((response) => {
      console.log(response);
      this.ok = response;
      this.history = this.ok.imgDate;
      console.log(this.history);
    } );
    console.log(ajdc  );
    return ajdc;
  }
}

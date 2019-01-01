import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customersObservable: Observable<Response[]>;
  imagekey;
  dataImage: any;
ok: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    localStorage.clear();
    return this.http.get('http://localhost:9090/routes/new');
 //   this.customersObservable = this.httpClient.get("http://127.0.0.1:3000/customers", {params});
  }
  searchMe(): Observable<any> {
    const ajdc: any = this.http.get('http://localhost:8080/routes/newApi?searchKey=' + this.imagekey).toPromise()
    .then((response) => {
      console.log(response);
    this.ok = response;
     this.dataImage = this.ok.data;
      console.log(this.dataImage);
    } );
    console.log(ajdc  );
    return ajdc;
  }


}

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

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    return this.http.get('http://localhost:9090/routes/new');
 //   this.customersObservable = this.httpClient.get("http://127.0.0.1:3000/customers", {params});
  }
  searchMe(): Observable<any> {
    const ajdc: any = this.http.get('http://localhost:9090/routes/newApi?searchKey=' + this.imagekey).toPromise()
    .then((response) => {
      console.log(response);
      this.dataImage = response.data.imgUrls;
      console.log(this.dataImage);
    } );
    console.log(ajdc  );
    return ajdc;
  }

}

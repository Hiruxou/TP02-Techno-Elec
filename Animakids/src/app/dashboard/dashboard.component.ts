import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imagetsons: any;

  constructor(private http: HttpClient, private router: Router) {
    if (!localStorage.getItem("jwtToken"))
    {
      this.router.navigate(['/connection']);
    }
   }

  ngOnInit() {
    this.http.get('/api/images').subscribe(data => {
      this.imagetsons = data;
      console.log(data);      
    });
  }

}

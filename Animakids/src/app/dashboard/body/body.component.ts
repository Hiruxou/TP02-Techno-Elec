import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  imgetson: any;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.imgetson = data;
    });
  }
}

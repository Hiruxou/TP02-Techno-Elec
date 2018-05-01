import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-jeu1',
  templateUrl: './jeu1.component.html',
  styleUrls: ['./jeu1.component.css']
})
export class Jeu1Component implements OnInit {
  score: any;
  imagetsons: any;
  did: any[];
  response: any[];
  imageUrl: any;
  x: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/images').subscribe(data => {
      this.imagetsons = data;
      this.x = Math.floor((Math.random() * 15));
      this.imageUrl = "assets/images/"+this.imagetsons[this.x].image;
    });


  }

}

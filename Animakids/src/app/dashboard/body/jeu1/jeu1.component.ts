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
  did: number[];
  response: any[];
  imageUrl: any;
  x: number;


  constructor(private http: HttpClient) { }

  changeUrl() {
    console.log(this.did.indexOf(this.x));
    console.log(this.x);
    console.log(this.did);
     while (this.did.indexOf(this.x)!= -1)
     {
      this.x = Math.floor((Math.random() * 15));
     }
     
      console.log("assets/images/"+this.imagetsons[this.x].image);
     this.imageUrl = "assets/images/"+this.imagetsons[this.x].image;
     this.did.push(this.x);
    }

  ngOnInit() {
    this.did = new Array();
    this.http.get('/api/images').subscribe(data => {
      this.imagetsons = data;
      this.x = Math.floor((Math.random() * 15));
      this.imageUrl = "assets/images/"+this.imagetsons[this.x].image;
      this.did.push(this.x);

    });


  }

}

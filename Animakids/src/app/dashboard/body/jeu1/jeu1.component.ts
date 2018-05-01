import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Text } from '@angular/compiler';

@Component({
  selector: 'app-jeu1',
  templateUrl: './jeu1.component.html',
  styleUrls: ['./jeu1.component.css']
})
export class Jeu1Component implements OnInit {
  score: any;
  result: any;
  imagetsons: any;
  did: number[];
  response: number;
  imageUrl: any;
  x: number;
  responses: String[];


  constructor(private http: HttpClient) { }

  changeUrl(id) {
    if (this.did.length == 10 && this.result == "")
    {
      if (id == this.response)
        this.score++;
      this.result = "ton score est de " + this.score + "/10";
    }
    else if (this.result == "")
    {
      if (id == this.response)
        this.score++;
      while (this.did.indexOf(this.x)!= -1)
      {
        this.x = Math.floor((Math.random() * 15));
      }
      this.imageUrl = "assets/images/"+this.imagetsons[this.x].image;
      this.did.push(this.x);
      this.response = Math.floor((Math.random() * 4))
      var y = Math.floor((Math.random() * 15))
      this.responses.length = 0;
      for (var i = 0; i < 4; i++)
      {
        if (i == this.response)
        {
          this.responses.push(this.imagetsons[this.x].image.toString().substring(0, this.imagetsons[this.x].image.toString().length -4));
        }
        else
        {
        while (y == this.x || this.responses.indexOf(this.imagetsons[y].image.toString().substring(0, this.imagetsons[y].image.toString().length - 4)) != -1)
          {
            y = Math.floor((Math.random() * 15));
            }
            this.responses.push(this.imagetsons[y].image.toString().substring(0, this.imagetsons[y].image.toString().length - 4));
          }
      }
    }
   }

  ngOnInit() {
    this.did = new Array();
    this.responses = new Array();
    this.result = "";
    this.score = 0;
    this.http.get('/api/images').subscribe(data => {
      this.imagetsons = data;
      this.x = Math.floor((Math.random() * 15));
      this.imageUrl = "assets/images/"+this.imagetsons[this.x].image;
      this.did.push(this.x);
      this.response = Math.floor((Math.random() * 4))
      var y = Math.floor((Math.random() * 15))
      this.responses.length = 0;
      for (var i = 0; i < 4; i++)
      {
        if (i == this.response)
        {
          this.responses.push(this.imagetsons[this.x].image.toString().substring(0, this.imagetsons[this.x].image.toString().length -4));
        }
        else
        {
          while (y == this.x || this.responses.indexOf(this.imagetsons[y].image.toString().substring(0, this.imagetsons[y].image.toString().length - 4)) != -1)
          {
            y = Math.floor((Math.random() * 15));
            }
            this.responses.push(this.imagetsons[y].image.toString().substring(0, this.imagetsons[y].image.toString().length - 4));
          }
      }
    });


  }

}

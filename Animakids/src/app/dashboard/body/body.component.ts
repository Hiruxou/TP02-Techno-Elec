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
    // server.get('/usersList', function(req, res) {
    //   userInfo.find({}, function(err, users) {
    //     var userMap = {};
    
    //     users.forEach(function(user) {
    //       userMap[user._id] = user;
    //     });
    
    //     res.send(userMap);  
    //   });
    // });
    // this.http.get('/api').subscribe(data => {
    //   this.imgetson = data;
    // });
  }
}

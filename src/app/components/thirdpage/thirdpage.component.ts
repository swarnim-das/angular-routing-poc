import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit {

  public id;
  constructor(private router: Router, private activated: ActivatedRoute) {
    this.activated.params.subscribe(params => {
      this.id = params['parVal']
    })
  }

  ngOnInit() {
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router) { }

  public parVal;
  ngOnInit() {
  }

  public NavSecondPage(){
    this.router.navigateByUrl('/secondpage');
  }

  public SetValue(id: string){
    this.parVal = id;
  }

  public navThirdPage(){
    this.router.navigate(['/thirdpage', this.parVal]);
  }

}

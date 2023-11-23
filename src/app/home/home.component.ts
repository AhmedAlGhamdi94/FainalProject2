import { Component, OnInit, Input, Type } from '@angular/core';
import { Router } from '@angular/router';
// import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrService } from 'ngx-toastr';
import { CityService } from '../Service/city.service';
import { City } from '../model/city.module';



@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 closeResult = '';
 cityList: City[] = [];
 constructor(
  private router: Router,
  private cityService: CityService) { }

 ngOnInit(): void {
  this.getAllCity();
 }

 async getAllCity() {
  this.cityService.viewCity().subscribe((data: any) => {
   if (data != null && data.body != null) {
    var resultData = data.body;
    if (resultData) {
     this.cityList = resultData;
     console.log(resultData);
    }
   }
  },
   (error: any) => {
    if (error) {
     if (error.status == 404) {
      if (error.error && error.error.message) {
       this.cityList = [];
      }
     }
    }
   });
 }
}
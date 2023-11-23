import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/auth.service2';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  cities: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCities().subscribe((data: any) => {
      this.cities = data;
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  age: number = 40;

  constructor(private dataService: DataService) {}

  updateAge() {
    this.dataService.age = this.age;
  }
}

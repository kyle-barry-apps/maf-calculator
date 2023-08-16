import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  age: number = 40;
  recovering: boolean = false;
  injured: boolean = false;
  training: boolean = false;
  improving: boolean = false

  constructor(private dataService: DataService) {}

  updateAge() {
    this.dataService.age = this.age;
  }
  updateRecovering() {
    this.dataService.recovering = this.recovering
  }
  updateInjured() {
    this.dataService.injured = this.injured  }

  updateTraining() {
    this.dataService.training = this.training  }

  updateImproving() {
    this.dataService.improving = this.improving  }
}

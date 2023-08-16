import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-heart-rate',
  templateUrl: './heart-rate.component.html',
  styleUrls: ['./heart-rate.component.css']
})

export class HeartRateComponent {
  calculatedHR: number = 140;

  constructor(private dataService: DataService) {
  }

  get age(): number {
    return this.dataService.age;
  }

  get recovering(): boolean {
    return this.dataService.recovering
  }

  get injured(): boolean {
    return this.dataService.injured
  }

  get training(): boolean {
    return this.dataService.training
  }

  get improving(): boolean {
    return this.dataService.improving
  }


}

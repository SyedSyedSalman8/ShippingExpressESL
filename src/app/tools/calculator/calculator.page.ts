import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  calCBM: FormGroup;
  cbm: number;
  width: number;
  length: number;
  height: number;

  constructor() { }

  ngOnInit() {

  }

  calculateCBM() {
    this.cbm = (this.width * this.length * this.height) / 1000000;
    console.log(this.cbm);
  }
}

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
  weight: number;
  qty: number;
  volume: any;
  tweight: any;
  vweight: any;

  constructor() { }

  ngOnInit() {

  }

  calculateCBM() {
    this.cbm = (this.width * this.length * this.height) / 1000000;
    console.log(this.cbm);
    this.volume = (this.cbm * this.qty).toFixed(5);
    this.tweight = this.weight * this.qty;
    this.vweight = (this.length * this.height * this.qty * this.width) / 5000;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
})
export class ChipComponent implements OnInit {
  @Input() text = 'sample';
  @Input() textColor = 'white';
  @Input() bgColor = '#424242';
  @Input() chipClick: any; //Should be a function

  constructor() {}

  ngOnInit(): void {}
}

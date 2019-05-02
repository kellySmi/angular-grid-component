import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.css']
})
export class GridDisplayComponent implements OnInit {
  @Input() gridData: any[];
  @Input() gridKeys:string[];
  constructor() { }

  ngOnInit() {
  }
 

}

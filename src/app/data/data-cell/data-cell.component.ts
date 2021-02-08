import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {

  @Input() cellValue;
  @Output() cellValueChange: EventEmitter<any> = new EventEmitter();
  @Input() col;

  constructor() { }

  ngOnInit(): void {
  }

  changeCellValue(event: Event): void
  {
    this.cellValueChange.emit((event.target as HTMLInputElement).value);
  }

}

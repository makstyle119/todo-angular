import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TodoItem } from '../../shared/models/todoItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const Filters = [
  (item: TodoItem) => item,
  (item: TodoItem) => !item.isCompleted,
  (item: TodoItem) => item.isCompleted,
];

@Component({
  selector: 'todo-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css',
})
export class TodoFilterComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateFilter('0');
  }
  listFilter: '0' | '1' | '2' = '0';

  // changeFilter(value: any) {
  //   this.filter.emit(Filters[value]);
  // }
  updateFilter(value: any) {
    this.filter = Filters[value];
    this.filterChange.emit(this.filter);
  }
}

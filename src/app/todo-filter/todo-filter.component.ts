import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() filter = new EventEmitter<any>();

  ngOnInit(): void {
    this.filter.emit(Filters[0]);
  }
  listFilter: '0' | '1' | '2' = '0';

  changeFilter(value: any) {
    this.filter.emit(Filters[value]);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../shared/models/todoItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  @Input() items: TodoItem[] = [];

  ngOnInit(): void {}

  toggleItem(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
  }
}

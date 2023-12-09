import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/models/todoItem';
import { FormsModule } from '@angular/forms';

const Filters = [
  (item: TodoItem) => item,
  (item: TodoItem) => !item.isCompleted,
  (item: TodoItem) => item.isCompleted,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: TodoItem[] = [
    new TodoItem('To Learn Angular'),
    new TodoItem('Get Coffee', true),
    new TodoItem('wakeUp early 🥴'),
  ];

  title = 'todo-angular';
  newTodoItem: string = '';
  filter: '0' | '1' | '2' = '0';

  get visibleItem(): TodoItem[] {
    return this.items.filter(Filters[this.filter]);
    // let value = this.filter;
    // if (value == '0') {
    //   return this.items;
    // } else if (value == '1') {
    //   return this.items.filter((item) => !item.isCompleted);
    // } else {
    //   return this.items.filter((item) => item.isCompleted);
    // }
  }

  toggleItem(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
  }

  addItem() {
    this.items.push(new TodoItem(this.newTodoItem));
    this.newTodoItem = '';
  }
}

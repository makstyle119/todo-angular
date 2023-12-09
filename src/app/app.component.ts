import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/models/todoItem';
import { FormsModule } from '@angular/forms';

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

  visibleItem: TodoItem[] = this.items;

  toggleItem(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
  }

  addItem() {
    this.items.push(new TodoItem(this.newTodoItem));
    this.newTodoItem = '';
  }

  updateList(value: '0' | '1' | '2') {
    if (value == '0') {
      this.visibleItem = this.items;
    } else if (value == '1') {
      this.visibleItem = this.items.filter((item) => !item.isCompleted);
    } else {
      this.visibleItem = this.items.filter((item) => item.isCompleted);
    }
  }
}

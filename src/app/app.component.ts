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
    // new TodoItem('To Learn Angular'),
    // new TodoItem('Get Coffee', true),
    // new TodoItem('wakeUp early 🥴'),
  ];
  title = 'todo-angular';
  newTodoItem = '';
  toggleItem(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
  }

  addItem() {
    this.items.push(new TodoItem(this.newTodoItem));
    this.newTodoItem = '';
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/models/todoItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
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
  toggleItem(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
  }
}

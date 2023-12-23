import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../shared/models/todoItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css',
})
export class AddTodoFormComponent implements OnInit {
  @Output() addWish = new EventEmitter<TodoItem>();

  ngOnInit(): void {}
  newTodoItem: string = '';

  addItem() {
    // this.items.push(new TodoItem(this.newTodoItem));
    this.addWish.emit(new TodoItem(this.newTodoItem));
    this.newTodoItem = '';
  }
}

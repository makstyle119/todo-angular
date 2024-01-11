import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/models/todoItem';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { EventService } from '../shared/services/EventService';
import { TodoService } from '../shared/services/Todo/todo.service';
import { HttpClientModule } from '@angular/common/http';

// const Filters = [
//   (item: TodoItem) => item,
//   (item: TodoItem) => !item.isCompleted,
//   (item: TodoItem) => item.isCompleted,
// ];

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    TodoListComponent,
    AddTodoFormComponent,
    TodoFilterComponent,
    HttpClientModule,
  ],
  providers: [EventService, TodoService],
})
export class AppComponent implements OnInit {
  items: TodoItem[] = [
    // new TodoItem('To Learn Angular'),
    // new TodoItem('Get Coffee', true),
    // new TodoItem('wakeUp early 🥴'),
  ];

  constructor(events: EventService, private todoService: TodoService) {
    events.listen('removeItem', (item: TodoItem) => {
      // remove item
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
      // console.log(item);
    });
  }

  ngOnInit(): void {
    this.todoService.getItems().subscribe((items: any) => {
      this.items = items;
    });
  }

  // title = 'todo-angular';
  // newTodoItem: string = '';
  // filter: '0' | '1' | '2' = '0';

  // filter = () => {};
  filter: any;

  // get visibleItem(): TodoItem[] {
  //   return this.items.filter(this.filter);
  //   // return this.items.filter(Filters[this.filter]);
  //   // let value = this.filter;
  //   // if (value == '0') {
  //   //   return this.items;
  //   // } else if (value == '1') {
  //   //   return this.items.filter((item) => !item.isCompleted);
  //   // } else {
  //   //   return this.items.filter((item) => item.isCompleted);
  //   // }
  // }

  // addItem() {
  //   this.items.push(new TodoItem(this.newTodoItem));
  //   this.newTodoItem = '';
  // }
}

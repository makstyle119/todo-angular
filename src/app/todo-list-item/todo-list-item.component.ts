import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import events from '../../shared/services/EventService';

@Component({
  selector: 'todo-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItemComponent {
  @Input() name!: string;
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return {
      'strikeout text-muted': this.fulfilled,
    };
  }

  constructor() {}

  ngOnInit() {}

  toggleItem() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

  removeItem() {
    events.emit('removeItem', this.name);
  }
}

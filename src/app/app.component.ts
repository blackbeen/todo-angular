import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <div>
    <input type="text" placeholder="Task name here" [(ngModel)]="newTodoText" (keyup.enter)="addTodo()">
    <input type="submit" value="新增" (click)="addTodo()"/>
    <ul>
      <li *ngFor="let todo of todoList; let i=index">
        <span>{{todo}}</span>
        <input type="button" value="删除" (click)="removeTodo(todo, i)">
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoList = [];
  newTodoText = '';

  addTodo(): void {
    if (this.newTodoText) {
      this.todoList.push(this.newTodoText)
      this.newTodoText = ''
    }
  };

  removeTodo(item: string, index: number) : void {
    this.todoList.splice(index, 1);
  }
}

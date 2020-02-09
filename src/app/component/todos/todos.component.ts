import { Component, OnInit } from "@angular/core";
import { Todo } from "../todos/todos.component.spec";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    //Update the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Update the server
    this.todoService.deleteTodo(todo).subscribe();
  }

  //Add todo
  addTodo(todo: Todo) {
    //Post request
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  //Input property
  @Input() todo: Todo;
  //Emit something
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  //Set dynamic classes for strikethrough
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    //Set UI
    todo.completed = !todo.completed;
    //Update service
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo) {
    //Emit the todo because it needs to go to the parent component
    this.deleteTodo.emit(todo);
  }
}

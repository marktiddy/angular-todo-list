import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  getTodos() {
    return [
      {
        id: 1,
        title: "something to do",
        completed: false
      },
      {
        id: 2,
        title: "something else to do",
        completed: true
      }
    ];
  }
}

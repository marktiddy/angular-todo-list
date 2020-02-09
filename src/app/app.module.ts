import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./component/todos/todos.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { AddToDoComponent } from "./components/add-to-do/add-to-do.component";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from './components/pages/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddToDoComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

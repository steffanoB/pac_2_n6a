import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsignaComponent } from './consigna/consigna.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from './todos.service';
import { TodoComponent } from './components/todos/todos.component';
import { PruebaComponent } from './prueba/prueba.component';
import { FormsModule } from '@angular/forms';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    ConsignaComponent,
    PruebaComponent,
    TodoDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}

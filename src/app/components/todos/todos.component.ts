import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodoComponent implements OnInit {
  todos: any[] = [];
  searchQuery: string = '';

  constructor(private todosService: TodosService, private router: Router) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todosService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  toggleSearchButtonVisibility(): void {
    
  }

  filterTodos(): any[] {
    if (!this.searchQuery.trim()) {
      return this.todos;
    }
    return this.todos.filter(todo => {
      return todo.title.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  viewDetails(todo: any): void {
    
    this.router.navigate(['/todos', todo.id]);
  }
}

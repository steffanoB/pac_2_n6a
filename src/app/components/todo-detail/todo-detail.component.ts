import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the todo ID from route params
    this.fetchTodoDetail(id);
  }

  fetchTodoDetail(id: string | null): void {
    if (id) {
      const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
      this.http.get<any>(url).subscribe(todo => {
        this.todo = todo;
      });
    }
  }
}

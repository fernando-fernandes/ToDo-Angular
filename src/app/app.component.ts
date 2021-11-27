import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: any[] = []
  public title: string = 'Minhas tarefas'
  public form: FormGroup

  constructor( private fb: FormBuilder) {

    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })

    this.todos.push(new Todo(1, "Colocar ração para a Nina", false))
    this.todos.push(new Todo(2, 'Fechar as janelas', true))
    this.todos.push(new Todo(3, 'Jogar o lixo', false))

  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if(index !== -1) {
      this.todos.splice(index, 1)
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false
  }
}

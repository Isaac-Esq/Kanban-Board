import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tareas: Tarea[] = [];
  public todo: Tarea[] =[];
  public on: Tarea[] = [];
  public done: Tarea[] = [];
  public input: string="";
  constructor() { }

  ngOnInit(): void {
  }

  addToBacklog(){
    if(this.input!=""){
      var tarea: Tarea={
        nombre: this.input,
        posicion: "back"
      }
      this.tareas.push(tarea);
    }else{
      alert("No escribiste el nombre de la tarea");
    }
  }

  remove(nombre, posicion){
    switch(posicion){
      case "back":
        this.tareas.forEach((element,index) => {
          if(element.nombre == nombre){
            this.tareas.splice(index,1);
          }
        });
        break;
      case "todo":
        this.todo.forEach((element,index) => {
          if(element.nombre == nombre){
            this.todo.splice(index,1);
          }
        });
        break;
      case "on":
        this.on.forEach((element,index) => {
          if(element.nombre == nombre){
            this.on.splice(index,1);
          }
        });
        break;
      case "done":
        this.done.forEach((element,index) => {
          if(element.nombre == nombre){
            this.done.splice(index,1);
          }
        });
        break;
    }

  }

  add(nombre,posicion){
    switch(posicion){
      case "back":
        this.tareas.forEach((element,index)=> {
          if(element.nombre == nombre){
            //element.posicion='todo';
            var auxTodo: Tarea={
              nombre: nombre,
              posicion: "todo"
            }
            this.todo.push(auxTodo);
            this.tareas.splice(index,1);
          }
        });
        break;
      case "todo":
        this.todo.forEach((element,index) =>{
          if(element.nombre == nombre){
            var auxNext: Tarea={
              nombre: nombre,
              posicion: "on"
            }
            this.on.push(auxNext);
            this.todo.splice(index,1);
          }
        });
        break;
      case "on":
        this.on.forEach((element,index) =>{
          if(element.nombre == nombre){
            var auxNext: Tarea={
              nombre: nombre,
              posicion: "done"
            }
            this.done.push(auxNext);
            this.on.splice(index,1);
          }
        });
        break;
        case "done":
          alert("No puedes avanzar Mas");
          break;
    }
  }

  left(nombre,posicion){
    switch(posicion){
      case "back":
        alert("No puedes ir para atras");
        break;
      case "todo":
        this.todo.forEach((element,index) =>{
          if(element.nombre == nombre){
            var auxNext: Tarea={
              nombre: nombre,
              posicion: "back"
            }
            this.tareas.push(auxNext);
            this.todo.splice(index,1);
          }
        });
        break;
      case "on":
        this.on.forEach((element,index) =>{
          if(element.nombre == nombre){
            var auxNext: Tarea={
              nombre: nombre,
              posicion: "todo"
            }
            this.todo.push(auxNext);
            this.on.splice(index,1);
          }
        });
        break;
        case "done":
          this.done.forEach((element,index) => {
            if(element.nombre == nombre){
              var auxNext: Tarea={
                nombre: nombre,
                posicion: "on"
              }
              this.on.push(auxNext);
              this.done.splice(index,1);
            }
          });
          break;
    }
  }

}

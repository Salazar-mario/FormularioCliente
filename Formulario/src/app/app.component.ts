import { Component, OnInit } from '@angular/core';
import { clientes } from './clientes/clientes';
import { ClientesServices } from './clientes/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee: ClientesServices[] = [
    
];
openForEdit(employee: ClientesServices) {
  this.cliente = employee;
}


selectedEmployee: clientes = new clientes ();
  clientes:any;

  addOrEdit(){

    if(this.selectedEmployee.id ===0){
      this.selectedEmployee.id = this.employee.length + 1;
    this.employee.push(this.cliente);
    }

    

    this.selectedEmployee = new clientes();
  }

  constructor(public cliente:ClientesServices){}

  ngOninit(){
    this.clientes.getClientes().susbcribe
    (
       (r: any) => { this.clientes = r; console.log(r)},
       (e: any) => { console.error(e)}

    )
  }
}

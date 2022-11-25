import { Component } from '@angular/core';
import { ApiClienteService } from '../services/api-cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {
  listClientes: any[];
  constructor(private apiCliente: ApiClienteService) {
    this.listClientes = [];
  }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.apiCliente.getClientes().subscribe(
      (response) => {
        this.listClientes = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

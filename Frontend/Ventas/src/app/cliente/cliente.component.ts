import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiClienteService } from '../services/api-cliente.service';
import { DialogClienteComponent } from './dialog/dialog.cliente.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {
  listClientes: any[];
  public columnas: string[];

  constructor(
    private apiCliente: ApiClienteService,
    private dialog: MatDialog //Dialog Material Angular
  ) {
    this.listClientes = [];
    this.columnas = ['id', 'nombre'];
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

  onClick() {
    //esto llama al componente DialogCliente
    const dialogRef = this.dialog.open(DialogClienteComponent, {
      width: '260px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getClientes(); //actualizar la lista luego de agregar un cliente
    });
  }
}

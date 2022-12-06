import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from '../common/delete/dialog.delete.component';
import { Cliente } from '../models/cliente';
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
  readonly width: string;

  constructor(
    private apiCliente: ApiClienteService,
    private dialog: MatDialog, //Dialog Material Angular
    public snackBar: MatSnackBar //SnackBar Material Angular
  ) {
    this.listClientes = [];
    this.columnas = ['id', 'nombre', 'accion'];
    this.width = '260px';
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
      width: this.width,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getClientes(); //actualizar la lista luego de agregar un cliente
    });
  }

  onUpdate(cliente: Cliente) {
    const dialogRef = this.dialog.open(DialogClienteComponent, {
      width: this.width,
      data: cliente,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getClientes(); //actualizar la lista luego de agregar un cliente
    });
  }

  /*Esta función, a diferencia de las otras, gestiona el dialog desde acá, porque el DialogDelete
    es generico y debe ser usado en varios componentes.
    Entonces el snackBar lo hago desde acá  
  */
  onDelete(cliente: Cliente) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiCliente.delete(cliente.id).subscribe((response) => {
          if (response.exito == 1) {
            this.snackBar.open('Cliente eliminado con éxito', '', {
              duration: 2000,
            });
            this.getClientes(); //actualizar la lista luego de eliminar  un cliente
          }
        });
      }
    });
  }
}

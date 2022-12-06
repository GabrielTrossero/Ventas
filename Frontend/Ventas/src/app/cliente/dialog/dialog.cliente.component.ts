import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from 'src/app/models/cliente';
import { ApiClienteService } from 'src/app/services/api-cliente.service';

@Component({
  templateUrl: './dialog.cliente.component.html',
})
export class DialogClienteComponent {
  public nombre: string;
  constructor(
    public dialogRef: MatDialogRef<DialogClienteComponent>, //Dialog Material Angular
    public apiCliente: ApiClienteService,
    public snackBar: MatSnackBar, //SnackBar Material Angular
    @Inject(MAT_DIALOG_DATA) public cliente: Cliente //traigo los datos del cliente en caso de ser Editar
  ) {
    if (this.cliente !== null) {
      this.nombre = cliente.nombre;
    } else this.nombre = '';
  }

  close() {
    this.dialogRef.close();
  }

  addCliente() {
    const cliente: Cliente = { id: 0, nombre: this.nombre };
    this.apiCliente.add(cliente).subscribe((response) => {
      if (response.exito == 1) {
        this.dialogRef.close();
        this.snackBar.open('Cliente agregado con éxito', '', {
          duration: 2000,
        });
      }
    });
  }

  updateCliente() {
    const cliente: Cliente = { id: this.cliente.id, nombre: this.nombre };
    this.apiCliente.update(cliente).subscribe((response) => {
      if (response.exito == 1) {
        this.dialogRef.close();
        this.snackBar.open('Cliente actualizado con éxito', '', {
          duration: 2000,
        });
      }
    });
  }
}

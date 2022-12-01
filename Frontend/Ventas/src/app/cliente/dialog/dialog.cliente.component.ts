import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
    public snackBar: MatSnackBar //SnackBar Material Angular
  ) {
    this.nombre = '';
  }

  close() {
    this.dialogRef.close();
  }

  addCliente() {
    const cliente: Cliente = { nombre: this.nombre };
    this.apiCliente.add(cliente).subscribe((response) => {
      if (response.exito == 1) {
        this.dialogRef.close();
        this.snackBar.open('Cliente agregado con éxito', '', {
          duration: 2000,
        });
      }
    });
  }
}

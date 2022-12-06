import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogClienteComponent } from 'src/app/cliente/dialog/dialog.cliente.component';

@Component({
  templateUrl: './dialog.delete.component.html',
})
export class DialogDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogClienteComponent> //Dialog Material Angular
  ) {}
}

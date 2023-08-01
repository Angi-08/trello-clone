import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { Card } from '@models/card.model';

interface InputData {
  card: Card;
}

interface OutputData {
  card: Card;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  card: Card;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.card = data.card;
  }

  close() {
    this.saveCardChanges();
    this.dialogRef.close();
  }

  saveCardChanges() {
    // Aquí envías los datos actualizados de la tarjeta al componente padre (BoardComponent)
    // Crea un objeto con los datos actualizados para enviarlo en la respuesta.
    const updatedCard: Card = {
      ...this.card, // Mantenemos las demás propiedades de la tarjeta
      // Aquí puedes agregar más propiedades que desees actualizar.
    };
    this.dialogRef.close({ card: updatedCard });
  }
}

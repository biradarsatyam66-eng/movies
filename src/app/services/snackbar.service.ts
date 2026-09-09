import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar : MatSnackBar) { }

  onShowSnackbar(message:string){
    this._snackbar.open(message,'close',{
      'duration':3000,
      'verticalPosition':'top',
      'horizontalPosition':'left'
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-content',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule,CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  sportValue:string=''
  sports:string[]=[]
  private _snackBar = inject(MatSnackBar);
  addToSports(sport:any)
  {
    let sport_index=this.sports.findIndex((element)=>element===sport)
    if(sport_index==-1)
    {
      this.sports.push(sport);
      this._snackBar.open('Added Successfully', 'Undo', {
        duration: 3000
      })
    }
    else
    {
        this._snackBar.open('Already Exist', 'Undo', {
          duration: 3000
        })
    }
  }
  removeSport(sport:any)
  {
    let sport_index=this.sports.findIndex((element)=>element===sport)
    this.sports.splice(sport_index,1);
    this._snackBar.open('Removed Successfully', 'Undo', {
      duration: 3000
    })
  }
}


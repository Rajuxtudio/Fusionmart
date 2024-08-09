import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FloatLabelType, matFormFieldAnimations, MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';





@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
  ],
  exports: [MatInputModule, FormsModule, MatButtonModule,MatFormFieldModule,FormsModule,MatInputModule,
    CommonModule,MatToolbarModule , MatIconModule, MatButtonModule,
  ],
  
})
export class MatRegModule { }

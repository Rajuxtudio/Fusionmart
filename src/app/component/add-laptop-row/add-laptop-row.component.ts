import {
  Component,
  ChangeDetectionStrategy,
  inject,
  model,
  signal,
} from '@angular/core';
import { MatRegModule } from '../../mat-reg/mat-reg.module';
import { DialogRef } from '@angular/cdk/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

export interface DialogData {
  productName: string;
  productPrice: number;
  productDescription: string;
  deliveryTimeSpan: string;
  productImageUrl: string;
  categoryName: string;
}

@Component({
  selector: 'app-add-laptop-row',
  standalone: true,
  imports: [
    // MatRegModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
  ],
  templateUrl: './add-laptop-row.component.html',
  styleUrl: './add-laptop-row.component.scss',
})
export class AddLaptopRowComponent {
  itemForm: FormGroup;
  deliveryDays: number[] = [1, 2, 3, 4, 5, 6, 7];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddLaptopRowComponent>) {
    this.itemForm = this.fb.group({
      productName: ['', [Validators.required]],
      productPrice: [
        '',
        [Validators.required, , Validators.pattern('^[0-9]*$')],
      ],
      deliveryTimeSpan: ['', [Validators.required]],
      productImageUrl: ['', [Validators.required]],
      productDescription: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('click');
    if (this.itemForm.valid) {
      this.dialogRef.close(this.itemForm.value);
    } else {

      this.itemForm.markAllAsTouched();
    }

  }

  closeDialog() {
    this.dialogRef.close();
  }
}

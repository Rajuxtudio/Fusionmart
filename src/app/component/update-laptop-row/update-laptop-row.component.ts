import { Component, Inject, Input } from '@angular/core';
import { MatRegModule } from '../../mat-reg/mat-reg.module';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-update-laptop-row',
  standalone: true,
  imports: [
    MatRegModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './update-laptop-row.component.html',
  styleUrl: './update-laptop-row.component.scss',
})
export class UpdateLaptopRowComponent {
  @Input() FormFieldData: any;

  itemForm: FormGroup;

  deliveryDays: number[] = [1, 2, 3, 4, 5, 6, 7];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateLaptopRowComponent>,
    private _dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.itemForm = this.fb.group({
      productName: ['', [Validators.required]],
      productPrice: ['',[Validators.required, , Validators.pattern('^[0-9]*$')],],
      deliveryTimeSpan: ['', [Validators.required]],
      productImageUrl: ['', [Validators.required]],
      productDescription: ['', [Validators.required]],
    });
    var product = _dataService.get(data);
    this.itemForm.patchValue(product)
  }
  onUpdate(): void {
    console.log('click');
    if (this.itemForm.valid) {
      this._dataService.update(this.data,this.itemForm.value)
      this.dialogRef.close(true);
    } else {
      this.itemForm.markAllAsTouched();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

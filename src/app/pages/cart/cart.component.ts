import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRegModule } from '../../mat-reg/mat-reg.module';
import {MatCardModule} from '@angular/material/card';
import { DataService } from "../../data.service";
import { MainHeaderComponent } from "../../landing/main-header/main-header.component";


export interface LaptopModel {
  productName: string;
  productPrice: number;
  productDescription: string;
  deliveryTimeSpan: string;
  productImageUrl: string;
  categoryName: string;
  quantity?: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatRegModule, MatCardModule, MainHeaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  ItemCardData: LaptopModel[] = [];

  searchTerm: string = '';

  address = {
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  };

  constructor( private _dataService: DataService) {
  }

  ngOnInit(): void {
    this.getAllLaptops();
  }

  getAllLaptops() {
    this.ItemCardData = this._dataService.getAllLaptops(this.searchTerm);
  }

  removeItem(index: number) {
    this.ItemCardData.splice(index, 1);
  }

  selectPaymentOption(option: string) {
    console.log('Selected payment option:', option);
  }

}
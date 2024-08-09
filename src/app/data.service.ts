import { Injectable } from '@angular/core';
import { laptopjs } from './Entities/globalConstants';

export interface LaptopModel {
  productName: string;
  productPrice: number;
  productDescription: string;
  deliveryTimeSpan: string;
  productImageUrl: string;
  categoryName: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private get laptops(): Array<LaptopModel> {
    var laptops = localStorage.getItem('laptops');
    if (laptops == null) {
      localStorage.setItem('laptops', JSON.stringify(laptopjs));
      return laptopjs;
    } else {
      return JSON.parse(laptops);
    }
  }

  private set laptops(newData: Array<LaptopModel>) {
    localStorage.setItem('laptops', JSON.stringify(newData));
  }
  getAllLaptops(searchTerm: string): Array<LaptopModel> {
    var filterlaptops = [...this.laptops];

    if (searchTerm != null && searchTerm != undefined && searchTerm != '') {
      searchTerm = searchTerm.toLowerCase();

      filterlaptops = filterlaptops.filter((LaptopData: LaptopModel) => {
        // Convert all properties of the country to a string and concatenate them
        const laptopDataString = Object.values(LaptopData)
          .join(' ')
          .toLowerCase();
        return laptopDataString.includes(searchTerm);
      });
    }
    return filterlaptops;
  }

  get(index: number): LaptopModel {
    return this.laptops[index];
  }

  update(index: number, updatedLaptopData: LaptopModel) {
    var existingLaptops = this.laptops;
    existingLaptops[index] = updatedLaptopData;
    this.laptops = existingLaptops;
  }

  add(laptopData: LaptopModel) {
    var existingLaptops = this.laptops;
    existingLaptops.push(laptopData);
    this.laptops = existingLaptops;
  }

  delete(index: any) {
    var existingLaptops = this.laptops;
    existingLaptops.splice(index, 1);
    this.laptops = existingLaptops;
  }
}

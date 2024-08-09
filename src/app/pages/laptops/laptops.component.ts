import { Component } from '@angular/core';
import { ItemCardComponent } from "../../component/item-card/item-card.component";
import { laptopjs } from '../../Entities/globalConstants';
import { HeaderQuickActionComponent } from "../../landing/header-quick-action/header-quick-action.component";
import { MainHeaderComponent } from "../../landing/main-header/main-header.component";
import { LaptopModel, DataService } from "../../data.service";

@Component({
  selector: 'app-laptops',
  standalone: true,
  imports: [ItemCardComponent, HeaderQuickActionComponent, MainHeaderComponent],
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.scss'
})
export class LaptopsComponent {
  
  term:any;
  searchTerm: string = '';
  
  ItemCardData : LaptopModel [] = [];

  constructor( private _dataService: DataService) {
  }

  ngOnInit(): void {
    this.getAllLaptops();
  }
  
  getAllLaptops() {
    this.ItemCardData = this._dataService.getAllLaptops(this.searchTerm);
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.getAllLaptops();
  }
}

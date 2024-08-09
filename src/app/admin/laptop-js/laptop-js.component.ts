import {
  AfterViewInit,
  Input,
  Output,
  OnInit,
  Component,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { HeaderQuickActionComponent } from '../../landing/header-quick-action/header-quick-action.component';
import { MatRegModule } from '../../mat-reg/mat-reg.module';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataService } from '../../data.service';
import { AddLaptopRowComponent } from '../../component/add-laptop-row/add-laptop-row.component';
import { UpdateLaptopRowComponent } from '../../component/update-laptop-row/update-laptop-row.component';
import { MatDialog } from '@angular/material/dialog';

export interface LaptopModel {
  productName: string;
  productPrice: number;
  productDescription: string;
  deliveryTimeSpan: string;
  productImageUrl: string;
  categoryName: string;
}

@Component({
  selector: 'app-laptop-js',
  standalone: true,
  imports: [
    HeaderQuickActionComponent,
    MatRegModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    AddLaptopRowComponent,
    UpdateLaptopRowComponent,
  ],
  templateUrl: './laptop-js.component.html',
  styleUrl: './laptop-js.component.scss',
})
export class LaptopJSComponent {

  displayedColumns: string[] = [
    'productName',
    'productImageUrl',
    'productDescription',
    'deliveryTimeSpan',
    'productPrice',
    'Action',
  ];

  @Input() cardData: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  term: any;

  searchTerm: string = '';

  dataSource: LaptopModel[] = [];

  enterSearchValue: string = '';

  constructor(private dialog: MatDialog, private _dataService: DataService) {}

  ngOnInit(): void {
    this.getAllLaptops();
  }

  getAllLaptops() {
    this.dataSource = this._dataService.getAllLaptops(this.searchTerm);
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.getAllLaptops();
  }
  deleteItem(data: any) {
    this._dataService.delete(data);
    this.getAllLaptops();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddLaptopRowComponent, {
      data: {},
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(result);
        this._dataService.add(result);
        this.getAllLaptops();
      } else {
        console.log('Dialog was closed without any data');
      }
    });
  }
  openDialogUpdate(index: number) {    
    const dialogRef = this.dialog.open(UpdateLaptopRowComponent, {
      data: index,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      if (result) {
        this.getAllLaptops();
      }
    });
  }
}

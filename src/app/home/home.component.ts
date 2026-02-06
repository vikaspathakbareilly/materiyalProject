import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'role'];
  
  // Initialize your data source with your array
  dataSource = new MatTableDataSource<UserData>([
    { id: 101, name: 'Zebra Tech', role: 'Admin' },
    { id: 102, name: 'Apple Inc', role: 'User' },
    { id: 103, name: 'Banana Corp', role: 'Editor' },
  ]);

  // Use @ViewChild to get a reference to the matSort in HTML
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    // Connect the sorting logic to the data source
    this.dataSource.sort = this.sort;
  }
  

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [MatSortModule,
    CommonModule,MatButtonModule,MatIconModule,MatToolbarModule,MatIcon,MatListModule,MatTableModule,MatTableModule
  ],exports: [MatSortModule,
   MatButtonModule,MatIconModule,MatToolbarModule,MatIcon,MatListModule,MatTableModule,MatTableModule
  ]
})
export class MaterialModule { }

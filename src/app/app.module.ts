import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent, DialogOverviewExampleDialog } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]

})
export class AppModule { }

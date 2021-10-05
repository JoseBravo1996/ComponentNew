import { BrowserModule } from '@angular/platform-browser';
import { ReadMoreComponent } from './../read-more/read-more.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { DateAgoPipe } from './pipe/date-ago.pipe';
import { ReadMoreDirective } from '../read-more/read-more.directive';
import { ReadMore2Component } from '../read-more2/read-more2.component';
import { ReadMoreModule } from 'ng-readmore';
import { FormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [NotificationComponent, DateAgoPipe, ReadMoreComponent,ReadMoreDirective],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReadMoreModule
  ],
  exports: [NotificationComponent, ReadMoreComponent]
})
export class NotificationModule { }

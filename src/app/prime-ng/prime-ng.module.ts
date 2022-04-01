import { NgModule } from '@angular/core';

// PrimeNg modules
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    InputTextModule,
    TableModule,
    MessagesModule,
    MessageModule,
    ProgressSpinnerModule,
    DividerModule,
    ButtonModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    TableModule,
    MessagesModule,
    MessageModule,
    ProgressSpinnerModule,
    DividerModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }

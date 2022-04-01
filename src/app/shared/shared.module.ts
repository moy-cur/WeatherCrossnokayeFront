import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import { ShareModule } from 'ngx-sharebuttons';

import { MenuComponent } from './menu/menu.component';
import { SocialComponent } from './social/social.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    MenuComponent,
    SocialComponent
  ],
  imports: [
    MenubarModule,
    ShareModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent,
    SocialComponent
  ]
})
export class SharedModule { }

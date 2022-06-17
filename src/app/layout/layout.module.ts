import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  AboutComponent,
  AbcComponent,
  MessagesComponent,
  PathNotFoundComponent
} from './components';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ AboutComponent, AbcComponent, MessagesComponent, PathNotFoundComponent]
})
export class LayoutModule {}

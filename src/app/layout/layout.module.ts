import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AboutComponent,
  AbcComponent,
  PathNotFoundComponent
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [ AboutComponent, AbcComponent, PathNotFoundComponent]
})
export class LayoutModule {}

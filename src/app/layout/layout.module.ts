import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AboutComponent,
  AbcComponent,
  HomeComponent,
  PathNotFoundComponent
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, AboutComponent, AbcComponent, PathNotFoundComponent]
})
export class LayoutModule {}

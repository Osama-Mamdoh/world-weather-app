import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ...fromComponents.components,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}

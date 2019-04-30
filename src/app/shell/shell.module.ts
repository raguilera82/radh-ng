import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellModule { }

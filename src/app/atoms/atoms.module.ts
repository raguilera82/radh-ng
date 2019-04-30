import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete.component';
import { ColorPickerExampleComponent } from './components/color-picker-example.component';
import { CounterExampleComponent } from './components/counter-example.component';
import { HelloExampleComponent } from './components/hello-example.component';
import { InputValidationExampleComponent } from './components/input-validation-example.component';
import { LazyImagesExampleComponent } from './components/lazy-images-example.component';
import { ModalExampleComponent } from './components/modal-example.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'hello', pathMatch: 'full' },
      { path: 'hello', component: HelloExampleComponent },
      { path: 'color-picker', component: ColorPickerExampleComponent },
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'input-validation', component: InputValidationExampleComponent },
      { path: 'lazy-images', component: LazyImagesExampleComponent },
      { path: 'counter', component: CounterExampleComponent },
      { path: 'modal', component: ModalExampleComponent }
    ]
  }
];

@NgModule({
  declarations: [
    HelloExampleComponent,
    ColorPickerExampleComponent,
    AutocompleteComponent,
    InputValidationExampleComponent,
    LazyImagesExampleComponent,
    CounterExampleComponent,
    ModalExampleComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AtomsModule {



}

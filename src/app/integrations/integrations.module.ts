import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsExampleComponent } from './components/charts-example.component';
import { D3ExampleComponent } from './components/d3-example.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'd3', component: D3ExampleComponent },
      { path: 'charts', component: ChartsExampleComponent }
    ]
  }
];

@NgModule({
  declarations: [D3ExampleComponent, ChartsExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntegrationsModule { }

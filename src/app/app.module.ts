import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';



const routes: Routes = [
  { path: '', redirectTo: 'atoms', pathMatch: 'full' },
  { path: 'atoms', loadChildren: './atoms/atoms.module#AtomsModule' },
  { path: 'integrations', loadChildren: './integrations/integrations.module#IntegrationsModule' },
  { path: 'applications', loadChildren: './applications/applications.module#ApplicationsModule' },
  { path: '**', redirectTo: 'atoms' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShellModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

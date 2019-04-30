import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CodeExampleComponent } from './components/code-example/code-example.component';
import { CodeExampleService } from './components/code-example/code-example.service';
import { SearchRepositoriesComponent } from './components/search-repositories/search-repositories.component';
import { SearchRepositoriesProxyService } from './components/search-repositories/search-repositories.proxy.service';
import { UserExampleComponent } from './components/user-example.component';
import { UsersExampleComponent } from './components/users-example.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'user-search', component: UserExampleComponent },
      { path: 'list-users', component: UsersExampleComponent },
      { path: 'code', component: CodeExampleComponent },
      { path: 'search-repositories', component: SearchRepositoriesComponent }
    ]
  }
];

@NgModule({
  declarations: [UserExampleComponent, UsersExampleComponent, CodeExampleComponent, SearchRepositoriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CodeExampleService, SearchRepositoriesProxyService]
})
export class ApplicationsModule { }

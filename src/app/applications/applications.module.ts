import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CodeExampleComponent } from './code-example/code-example.component';
import { CrudPostsComponent } from './crud-posts/crud-posts.component';
import { SearchRepositoriesComponent } from './search-repositories/search-repositories.component';
import { UserExampleComponent } from './user-example/user-example.component';
import { UsersExampleComponent } from './users-example/users-example.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'user-search', component: UserExampleComponent },
      { path: 'list-users', component: UsersExampleComponent },
      { path: 'code', component: CodeExampleComponent },
      { path: 'search-repositories', component: SearchRepositoriesComponent },
      { path: 'crud-posts', component: CrudPostsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    UserExampleComponent,
    UsersExampleComponent,
    CodeExampleComponent,
    SearchRepositoriesComponent,
    CrudPostsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationsModule { }

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeExampleService } from './code-example.service';
import { UserCard } from './model';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CodeExampleComponent implements OnInit {

  users$: Observable<UserCard[]>;

  constructor(private service: CodeExampleService) { }

  ngOnInit() {
    this.users$ = this.service.getUsers();
  }

}

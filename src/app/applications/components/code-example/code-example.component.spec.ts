import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeExampleComponent } from './code-example.component';
import { CodeExampleService } from './code-example.service';
import { CodeExampleServiceFake } from './code-example.service.fake';


describe('CodeExampleComponent', () => {
  let component: CodeExampleComponent;
  let fixture: ComponentFixture<CodeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeExampleComponent],
      providers: [
        { provide: CodeExampleService, useClass: CodeExampleServiceFake }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set users', () => {
    component.ngOnInit();
    component.users$.subscribe(
      users => expect(users.length).toBe(3)
    );
  });

});

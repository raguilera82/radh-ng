import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { CodeExampleService } from './code-example.service';


describe('CodeExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [CodeExampleService]
  }));

  it('should be created', () => {
    const service: CodeExampleService = TestBed.get(CodeExampleService);
    expect(service).toBeTruthy();
  });

  it('should get users', async(() => {
    const service: CodeExampleService = TestBed.get(CodeExampleService);
    service.getUsers().subscribe(users => expect(users).toBeDefined());
  }));

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs'


import { TodosComponent } from './todos.component'
import { TodoService } from './todo.service'

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent)
    component = fixture.componentInstance
  })

  it('should load todos from the server', async(() => {
    let service = TestBed.get(TodoService)
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1,2,3]))
    
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3)
    })
  }))
})

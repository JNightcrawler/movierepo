import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcomponentComponent } from './searchcomponent.component';

describe('SearchcomponentComponent', () => {
  let component: SearchcomponentComponent;
  let fixture: ComponentFixture<SearchcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

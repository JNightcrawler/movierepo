import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewdataComponent } from './tableviewdata.component';

describe('TableviewdataComponent', () => {
  let component: TableviewdataComponent;
  let fixture: ComponentFixture<TableviewdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableviewdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableviewdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

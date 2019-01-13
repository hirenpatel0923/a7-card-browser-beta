import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListStartComponent } from './group-list-start.component';

describe('GroupListStartComponent', () => {
  let component: GroupListStartComponent;
  let fixture: ComponentFixture<GroupListStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupListStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupListStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListEndComponent } from './group-list-end.component';

describe('GroupListEndComponent', () => {
  let component: GroupListEndComponent;
  let fixture: ComponentFixture<GroupListEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupListEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupListEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

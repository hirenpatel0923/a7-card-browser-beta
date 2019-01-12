import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIconListComponent } from './group-icon-list.component';

describe('GroupIconListComponent', () => {
  let component: GroupIconListComponent;
  let fixture: ComponentFixture<GroupIconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAppsFoundComponent } from './no-apps-found.component';

describe('NoAppsFoundComponent', () => {
  let component: NoAppsFoundComponent;
  let fixture: ComponentFixture<NoAppsFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAppsFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAppsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

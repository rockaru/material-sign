import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSignComponent } from './material-sign.component';

describe('MaterialSignComponent', () => {
  let component: MaterialSignComponent;
  let fixture: ComponentFixture<MaterialSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThfButtonComponent } from './thf-button.component';

describe('ThfButtonComponent', () => {
  let component: ThfButtonComponent;
  let fixture: ComponentFixture<ThfButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThfButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

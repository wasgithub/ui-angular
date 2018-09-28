import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThfButtonGroupComponent } from './thf-button-group.component';

describe('ThfButtonGroupComponent', () => {
  let component: ThfButtonGroupComponent;
  let fixture: ComponentFixture<ThfButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThfButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThfButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

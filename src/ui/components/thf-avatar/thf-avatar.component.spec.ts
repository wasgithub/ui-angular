import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThfAvatarComponent } from './thf-avatar.component';

describe('ThfAvatarComponent', () => {
  let component: ThfAvatarComponent;
  let fixture: ComponentFixture<ThfAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThfAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThfAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

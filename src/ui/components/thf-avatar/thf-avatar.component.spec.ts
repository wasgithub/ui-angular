import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThfAvatarComponent } from './thf-avatar.component';

describe('ThfAvatarComponent', () => {
  const THF_AVATAR_DEFAULT_SRC = 'src/assets/images/ninja-simple-512.png';

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

  it('should update `t-src`', () => {
    component.ngOnInit();

    expect(component.src).toEqual(THF_AVATAR_DEFAULT_SRC);

  });

  it('should do not update `t-src`', () => {
    const img = 'img_test';

    component.src = img;

    expect(component.src).toEqual(img);
  });

  it('should call `error()` component.src should be equal a THF_AVATAR_DEFAULT_SRC', () => {
    component.onError();

    expect(component.src).toEqual(THF_AVATAR_DEFAULT_SRC);

  });

});

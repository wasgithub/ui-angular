import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThfButtonComponent } from './thf-button.component';
import { ThfButtonBaseComponent } from './thf-button-base.component';
import { expressionType } from '@angular/compiler/src/output/output_ast';

describe('ThfButtonComponent', () => {
  let component: ThfButtonComponent;
  let fixture: ComponentFixture<ThfButtonComponent>;
  let nativeElement: HTMLElement;

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

    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component instanceof ThfButtonComponent).toBeTruthy();
    expect(component instanceof ThfButtonBaseComponent).toBeTruthy();
  });

  it('should only start with the default classes and elements, should`n have variations', () => {
    expect(nativeElement.querySelector('.thf-button')).toBeTruthy();
    expect(nativeElement.querySelector('.thf-text-elllipsis')).toBeTruthy();
    expect(nativeElement.querySelector('.thf-button-danger')).toBeFalsy();
    expect(nativeElement.querySelector('.thf-button-link')).toBeFalsy();
    expect(nativeElement.querySelector('thf-button-sm')).toBeFalsy();
  });

  it('should contain the property `aria-hidden`', () => {
    expect(nativeElement.querySelector('.thf-button').getAttribute('type')).toEqual('button');
  });

  it('should apply the icon class `thf-icon` and the class the icon `thf-totvs`', () => {
    component.icon = 'thf-totvs';

    fixture.detectChanges();

    expect(nativeElement.querySelector('span.thf-icon.thf-totvs')).toBeTruthy();
  });

  // tslint:disable-next-line:no-identical-functions
  it('should contain a `button` with a `span` inside it.', () => {
    component.icon = 'thf-totvs2';

    fixture.detectChanges();

    expect(nativeElement.querySelector('button > span')).toBeTruthy();
  });

  it('should update `t-label`', () => {
    component.label = 'was button';

    fixture.detectChanges();
    expect(nativeElement.querySelector('.thf-button-label').innerHTML).toContain('was button');
  });

  it('should add the class `thf-button-sm` when `t-small` is `true`', () => {
    component.small = true;

    fixture.detectChanges();

    expect(nativeElement.querySelector('.thf-button-sm')).toBeTruthy();
  });

  it('should add the class `thf-button-danger` when `t-type` is `danger` and remove `thf-button-primary` and `thf-button-link`', () => {
    component.type = 'danger';

    fixture.detectChanges();

    expect(nativeElement.querySelector('.thf-button-danger')).toBeTruthy();
  });

  // tslint:disable-next-line:no-identical-functions
  it('should add span with an icon when `t-icon` is defined', () => {
    component.icon = 'thf-icon-totvs';

    fixture.detectChanges();

    expect(nativeElement.querySelector('span.thf-icon')).toBeTruthy();
  });

  it('should simulate button click.', () => {
    spyOn(component.click, 'emit');

    component.onClick();

    expect(component.click.emit).toHaveBeenCalled();
  });

});

import { ThfButtonBaseComponent } from './thf-button-base.component';
import { expectPropertiesValues } from '../../util-test/util-expect.spec';

describe('ThfButtonBaseComopnent', () => {
  const component = new ThfButtonBaseComponent();

  const booleanValidTrueValues = [true, 'true', 1, ''];
  const booleanValidfalseValues = [false, 'false', 0];

  it('should be created', () => {
    expect(component instanceof ThfButtonBaseComponent).toBeTruthy();
  });

  describe('Properties:', () => {

    it('should contain pre-written `t-label`', () => {
      component.label = 'click';

      expect(component.label).toEqual('click');
    });

    it('should contain pre-written`t-icon`', () => {
      component.icon = 'thf-icon-totvs';
      expect(component.icon).toEqual('thf-icon-totvs');
    });

    it('should update property `t-disabled` with valid values', () => {
      expectPropertiesValues(component, 'disabled', booleanValidTrueValues, true);
      expectPropertiesValues(component, 'disabled', booleanValidfalseValues, false);
    });

    it('should update property `t-small` with valid values', () => {
      expectPropertiesValues(component, 'small', booleanValidTrueValues, true);
      expectPropertiesValues(component, 'small', booleanValidfalseValues, false);
    });

  });

});

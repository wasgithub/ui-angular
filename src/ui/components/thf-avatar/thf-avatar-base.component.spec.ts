import { ThfAvatarBaseComponent } from './thf-avatar-base.component';
import { expectPropertiesValues } from '../../util-test/util-expect.spec';

describe('ThfAvatarBaseComponent', () => {
  const component = new ThfAvatarBaseComponent();

  it('should be created', () => {
    expect(component instanceof ThfAvatarBaseComponent).toBeTruthy();
  });

  it('should update property `t-size` with `md` when invalid values', () => {
    const invalidValues = [undefined, null, '', true, false, 0, 1, 'string', [], {}];

    expectPropertiesValues(component, 'size', invalidValues, 'md');
  });

  it('should update property `t-size` with valid values', () => {
    const validValues = ['xs', 'sm', 'md', 'lg', 'xl'];

    expectPropertiesValues(component, 'size', validValues, validValues);
  });
});

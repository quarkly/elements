import { normolizeProps, getOmitProps } from './index';

describe('normolizeProps', () => {
  test('as', () => {
    expect(normolizeProps({})).toStrictEqual({});
    expect(normolizeProps({ some: 123 })).toStrictEqual({ some: 123 });
    expect(normolizeProps({ as: 1, some: 123 })).toStrictEqual({ some: 123 });
    expect(normolizeProps({ as: true, some: 123 })).toStrictEqual({ some: 123 });
    expect(normolizeProps({ as: false, some: 123 })).toStrictEqual({ some: 123 });
    expect(normolizeProps({ as: 'p', some: 123 })).toStrictEqual({ some: 123, as: 'p' });
  });
});

describe('getOmitProps', () => {
  test('defaults', () => {
    expect(getOmitProps()).toStrictEqual({
      qstate: true,
    });
    expect(getOmitProps({})).toStrictEqual({
      qstate: true,
    });
    expect(getOmitProps({ some: 123 })).toStrictEqual({
      qstate: true,
      some: 123,
    });
    expect(getOmitProps({ some: 123, qstate: false })).toStrictEqual({
      qstate: false,
      some: 123,
    });
  });
});

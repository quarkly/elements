import { normalizeProps, getOmitProps } from './index';

describe('normalizeProps', () => {
  test('as', () => {
    expect(normalizeProps({})).toStrictEqual({});
    expect(normalizeProps({ some: 123 })).toStrictEqual({ some: 123 });
    expect(normalizeProps({ as: 1, some: 123 })).toStrictEqual({ some: 123 });
    expect(normalizeProps({ as: true, some: 123 })).toStrictEqual({ some: 123 });
    expect(normalizeProps({ as: false, some: 123 })).toStrictEqual({ some: 123 });
    expect(normalizeProps({ as: 'p', some: 123 })).toStrictEqual({ some: 123, as: 'p' });
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

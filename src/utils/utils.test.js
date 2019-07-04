import { getOmitProps } from './index';

describe('getOmitProps', () => {
  test('defaults', () => {
    expect(getOmitProps()).toStrictEqual({
      qstate: true,
      quarkinfo: true,
      slottype: true,
      theme: true,
    });
    expect(getOmitProps({})).toStrictEqual({
      qstate: true,
      quarkinfo: true,
      slottype: true,
      theme: true,
    });
    expect(getOmitProps({ some: 123 })).toStrictEqual({
      qstate: true,
      quarkinfo: true,
      slottype: true,
      theme: true,
      some: 123,
    });
    expect(getOmitProps({ some: 123, qstate: false })).toStrictEqual({
      qstate: false,
      quarkinfo: true,
      slottype: true,
      theme: true,
      some: 123,
    });
  });
});

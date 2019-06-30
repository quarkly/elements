export const omitPropsDefault = {
  qstate: true,
  quarkinfo: true,
  slottype: true,
};

export default props => ({ ...omitPropsDefault, ...props });

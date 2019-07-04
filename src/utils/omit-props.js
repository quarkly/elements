export const omitPropsDefault = {
  qstate: true,
  quarkinfo: true,
  slottype: true,
  theme: true,
};

export default props => ({ ...omitPropsDefault, ...props });

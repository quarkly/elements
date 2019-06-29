export const omitPropsDefault = {
  qstate: true,
};

export default props => ({ ...omitPropsDefault, ...props });

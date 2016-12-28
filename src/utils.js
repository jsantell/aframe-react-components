export function omit (obj, omitAttrs=[]) {
  const result = {};
  const keys = Object.keys(obj);

  for (let key of keys) {
    if (omitAttrs.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  }

  return result;
};

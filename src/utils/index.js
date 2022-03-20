export const cleanObject = (object) => {
  console.log(object);
  const result = { ...object };
  Object.keys(object).forEach((v) => {
    if (!object[v] && object[v] !== 0) {
      delete result[v];
    }
  });
  return result;
};

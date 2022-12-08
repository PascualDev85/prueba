export const filter = (initialValue, value) => {
  const category = initialValue.find((category) => category.name === value);
  return category ? category.widge : [];
};

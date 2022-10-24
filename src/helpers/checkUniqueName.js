export const checkUniqueName = (newName, items) => {
  const normalyzeName = newName.toLocaleLowerCase();
  return items.find(({ name }) => name.toLocaleLowerCase() === normalyzeName);
};

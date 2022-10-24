export const numberFormatting = number => {
  const array = [...number];
  for (let i = 3; i < array.length - 1; i += 3) {
    array.splice(i, 0, '-');
  }
  console.log();
  return array.join('');
};

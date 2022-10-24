import { checkUniqueName, numberFormatting } from '../helpers/';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

export const createValidContact = (data, pevItems) => {
  const { name, number } = data;
  const newName = checkUniqueName(name, pevItems);
  const formatedNumber = numberFormatting(number);
  if (newName) {
    toast.error(`Name ${name} is already in contacts`);
    return;
  }
  const contact = {
    id: nanoid(),
    name,
    number: formatedNumber,
  };

  return contact;
};

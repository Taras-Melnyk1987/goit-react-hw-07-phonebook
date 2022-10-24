export function showfilteredContacts(items, filter) {
  const normalizedFilter = filter.toLocaleLowerCase();

  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}

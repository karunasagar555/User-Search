export function searchFilter(users, searchTerm) {
  if (!searchTerm) return []; // Return an empty array if no search term is provided.

  return users.filter(user =>
    user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.pincode.includes(searchTerm) || // Assuming pincode is numeric or string that does not require case insensitive matching
    (user.items && user.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())))
  );
}
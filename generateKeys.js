// Function to generate a random string
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Generate a new value for APP_KEYS
const newAppKeysValue = generateRandomString(64); // You can adjust the length as needed

console.log('New APP_KEYS value:', newAppKeysValue);

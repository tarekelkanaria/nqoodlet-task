export function generateRandomFourDigits(): string {
  const randomNumber = Math.floor(1000 + Math.random() * 9000); // Ensures a 4-digit number
  return randomNumber.toString();
}

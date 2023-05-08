/**
 * This function generates a random ID consisting of groups of hexadecimal digits separated by dashes.
 * @returns A string representing the generated random ID.
 */
function generateRandomId(): string {
  /**
   * This is a nested function that generates a group of 4 random hexadecimal digits.
   * @returns A string representing the generated group of 4 random hexadecimal digits.
   */
  const S4 = (): string => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  // Concatenate the groups of random hexadecimal digits to form the final ID.
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}

export default generateRandomId;

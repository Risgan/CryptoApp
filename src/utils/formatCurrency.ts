/**
 * Formats a given number as a currency string, with two decimal places and a dollar sign.
 *
 * @param amount - The numeric value to be formatted as currency.
 * @returns A string representing the formatted currency (e.g., "$123.45").
 */
export const formatCurrency = (amount: number): string =>
    `$${amount.toFixed(2)}`;

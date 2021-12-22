/**
 * Hash weekday and hour to generate an id
 * for a heat table cell
 * @param {number} weekday
 * @param {number} hour
 * @returns {number}
 */
export const hash = (
  weekday: number,
  hour: number,
): number => weekday * 100 + hour;

/**
 * Unhash an id to get a weekday
 * @param {number} hash
 * @returns {number}
 */
export const unhashWeekday = (hash: number): number => Math.floor(hash / 100);

/**
 * Unhash an id to get an hour
 * @param {number} hash
 * @returns {number}
 */
export const unhashHour = (hash: number): number => hash % 100;

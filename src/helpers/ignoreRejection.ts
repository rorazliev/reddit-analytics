/**
 * Prevents default behavior of unhandled rejections
 * @param {PromiseRejectionEvent} event
 * @returns {void}
 */
const ignoreRejection = (event: PromiseRejectionEvent): void => {
  event.preventDefault();
};

export default ignoreRejection;

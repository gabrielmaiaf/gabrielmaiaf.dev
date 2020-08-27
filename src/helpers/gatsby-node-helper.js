/**
 *
 * @param {string} str
 */
function removeAccents(str) {
  let from = 'ÀÁÂÃÄÅàáâãäåÇçÐÈÉÊËèéêëÌÍÎÏìíîïÑñÒÓÔÕÖØòóôõöøÙÚÛÜùúûüŠšŸÝÿýŽž';
  let to = 'AAAAAAaaaaaaCcDEEEEeeeeIIIIiiiiNnOOOOOOooooooUUUUuuuuSsYYyyZz';
  for (let i = 0; i < from.length; i++)
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));

  return str;
}

/**
 *
 * @param {string} str
 */
function slugMaker(str) {
  return removeAccents(str)
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-e-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

module.exports = {
  slugMaker,
};

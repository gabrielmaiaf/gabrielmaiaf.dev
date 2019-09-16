import 'core-js'; // Polyfill for ES6 methods not supported by IE
/* eslint-disable */
// IE polyfill for ChildNode.remove() method (https://developer.mozilla.org/pt-BR/docs/Web/API/ChildNode/remove#Polyfill)
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove'))
      return;

    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
/* eslint-enable */

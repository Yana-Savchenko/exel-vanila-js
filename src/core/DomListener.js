/** @description DOMListener class
 */
export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root providd for DomListener!');
    }
    this.$root = $root;
  }
}

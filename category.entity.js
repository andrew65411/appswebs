/**
 * @class Category
 * @description Represents a category for organizing events or content.
 */
export class Category {
  /**
   * @constructor
   * @param {Object} data - Raw category data from API
   * @param {string} data.id - Unique ID of the category
   * @param {string} data.name - Name of the category
   * @param {string} data.description - Description of the category
   */
  constructor({ id = '', name = '', description = '' }) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

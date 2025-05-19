
import httpInstance from '../../../../shared/services/http.instance.js';
import { Category } from '../model/category.entity.js';

/**
 * @class CategoryService
 * @description Service class to handle CRUD operations for categories
 */
export class CategoryService {
  resourceEndpoint = '/categories';

  /**
   * Fetch all categories
   * @returns {Promise<Array<Category>>}
   */
  async getAll() {
    const response = await httpInstance.get(this.resourceEndpoint);
    return response.data.map(category => new Category(category));
  }

  /**
   * Get category by ID
   * @param {string} id
   * @returns {Promise<Category>}
   */
  async getById(id) {
    const response = await httpInstance.get(`${this.resourceEndpoint}/${id}`);
    return new Category(response.data);
  }

  /**
   * Create a new category
   * @param {Object} resource - The category object to create
   * @returns {Promise<Category>}
   */
  async create(resource) {
    const response = await httpInstance.post(this.resourceEndpoint, resource);
    return new Category(response.data);
  }

  /**
   * Update an existing category
   * @param {string} id
   * @param {Object} resource
   * @returns {Promise<Category>}
   */
  async update(id, resource) {
    const response = await httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    return new Category(response.data);
  }

  /**
   * Delete a category
   * @param {string} id
   * @returns {Promise<void>}
   */
  async delete(id) {
    await httpInstance.delete(`${this.resourceEndpoint}/${id}`);
  }
}

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1/posts'
});

export default {
  async getAll() {
    const response = await apiClient.get('/');
    return response.data.map(post => new Post(post));
  },

  async getPostById(id: string) {
    const response = await apiClient.get(`/${id}`);
    return new Post(response.data);
  },

  async updateLikes(id: string, likes: number) {
    await apiClient.patch(`/${id}`, { likes });
  }
};

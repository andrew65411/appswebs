<template>
  <div class="category-management-page">
    <h1>{{ $t('categories') }}</h1>

    <div class="actions mb-4">
      <button @click="onNewItem">{{ $t('newCategory') }}</button>
    </div>

    <table v-if="categories.length > 0" class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>{{ $t('name') }}</th>
          <th>{{ $t('description') }}</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
          <td>
            <button @click="onEditItem(category)">{{ $t('edit') }}</button>
            <button @click="onDeleteItem(category)">{{ $t('delete') }}</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else>{{ $t('noCategoriesFound') }}</p>

    <!-- Modal para crear/editar -->
    <div v-if="showModal" class="modal">
      <category-form
        :item="selectedCategory"
        :edit="isEdit"
        @save="onSaveRequested"
        @cancel="onCancelRequested"
      />
    </div>
  </div>
</template>

<script>
import { Category } from '@/publishing/model/category.entity.js'
import { CategoryService } from '@/publishing/services/category.service.js'
import CategoryForm from '@/publishing/components/category-form.component.vue'

export default {
  name: 'CategoryManagementPage',
  components: {
    CategoryForm
  },
  data() {
    return {
      categories: [],
      showModal: false,
      selectedCategory: new Category({}),
      isEdit: false
    }
  },
  methods: {
    async loadCategories() {
      const service = new CategoryService()
      this.categories = await service.getAll()
    },

    onNewItem() {
      this.selectedCategory = new Category({})
      this.isEdit = false
      this.showModal = true
    },

    onEditItem(item) {
      this.selectedCategory = new Category(item)
      this.isEdit = true
      this.showModal = true
    },

    onDeleteItem(item) {
      if (confirm('¿Estás seguro de eliminar esta categoría?')) {
        const service = new CategoryService()
        service.delete(item.id).then(() => {
          this.loadCategories()
        })
      }
    },

    onSaveRequested(item) {
      const service = new CategoryService()

      if (this.isEdit) {
        service.update(item.id, item)
      } else {
        service.create(item)
      }

      this.showModal = false
      this.loadCategories()
    },

    onCancelRequested() {
      this.showModal = false
    }
  },
  mounted() {
    this.loadCategories()
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 20%;
  left: 30%;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  z-index: 100;
}
</style>

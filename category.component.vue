
<template>
  <div class="category-form">
    <h3>{{ edit ? $t('editCategory') : $t('newCategory') }}</h3>

    <form @submit.prevent="onSave">
      <div class="field mt-5">
        <label for="name">{{ $t('name') }}</label>
        <input id="name" v-model="item.name" type="text" required />
      </div>

      <div class="field mt-5">
        <label for="description">{{ $t('description') }}</label>
        <textarea id="description" v-model="item.description"></textarea>
      </div>

      <div class="buttons mt-4">
        <button type="submit">{{ $t('save') }}</button>
        <button type="button" @click="onCancel">{{ $t('cancel') }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CategoryForm',
  props: {
    item: {
      type: Object,
      default: () => new (require('../model/category.entity.js').Category)({})
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  emits: ['save', 'cancel'],
  methods: {
    onSave() {
      this.$emit('save', this.item);
    },
    onCancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
.category-form {
  max-width: 600px;
  margin: auto;
}

.field {
  text-align: left;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttons button {
  margin-right: 0.5rem;
}
</style>

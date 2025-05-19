<template>
  <div class="post-card">
    <img :src="post.image" :alt="post.title" />
    <h3>{{ post.title }}</h3>
    <p>{{ post.summary }}</p>
    <button @click="$emit('see-more', post.id)">See More</button>
  </div>
</template>

<script>
import { Post } from '@/public/model/post.model';

export default {
  name: 'CardPost',
  props: {
    post: {
      type: Object as () => Post,
      required: true
    }
  }
};
</script>

<style scoped>
.post-card {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  margin: 1rem;
}

.post-card img {
  max-width: 100%;
  height: auto;
}
</style>

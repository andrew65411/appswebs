<template>
  <div class="post-page">
    <pv-toolbar />

    <h1>{{ post.title }}</h1>
    <img :src="post.image" :alt="post.title" />
    <p>{{ post.summary }}</p>
    <p>{{ post.content }}</p>

    <div class="likes">
      <span>Likes: {{ post.likes }}</span>
      <button @click="handleLike">Like</button>
    </div>
  </div>
</template>

<script>
import { Post } from '@/public/model/post.model';
import postService from '@/shared/services/post.service';

export default {
  name: 'PostPage',
  data() {
    return {
      post: {} as Post
    };
  },
  async created() {
    const postId = this.$route.params.postId;
    this.post = await postService.getPostById(postId);
  },
  methods: {
    async handleLike() {
      this.post.likes += 1;
      await postService.updateLikes(this.post.id, this.post.likes);
    }
  }
};
</script>

<style scoped>
.post-page {
  max-width: 800px;
  margin: auto;
  padding: 1rem;
}

.likes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
</style>

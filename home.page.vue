<template>
  <div class="home-page">
    <pv-toolbar />

    <h1>Popular Posts</h1>
    <div class="grid">
      <card-post
        v-for="post in popularPosts"
        :key="post.id"
        :post="post"
        @see-more="onSeeMore"
      />
    </div>

    <h1>Our Posts</h1>
    <div class="grid">
      <card-post
        v-for="post in otherPosts"
        :key="post.id"
        :post="post"
        @see-more="onSeeMore"
      />
    </div>
  </div>
</template>

<script>
import CardPost from '@/public/components/card-post.component.vue';
import { Post } from '@/public/model/post.model';
import postService from '@/shared/services/post.service';

export default {
  name: 'HomePage',
  components: {
    CardPost
  },
  data() {
    return {
      posts: [] as Post[],
      popularPosts: [] as Post[],
      otherPosts: [] as Post[]
    };
  },
  async created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      this.posts = await postService.getAll();
      this.popularPosts = this.posts.slice(0, 3);
      this.otherPosts = this.posts.slice(3);
    },
    onSeeMore(postId) {
      this.$router.push(`/posts/${postId}`);
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
</style>

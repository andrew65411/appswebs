<template>
  <div class="pv-toolbar">
    <img :src="logoUrl" alt="Food Truck Lovers Logo" width="40" />
    <span>Food Truck Lovers</span>

    <nav>
      <router-link to="/home">Home</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PvToolbar',
  data() {
    return {
      logoUrl: 'https://logo.clearbit.com/foodtrucklovers.io '
    };
  }
};
</script>

<style scoped>
.pv-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

nav {
  display: flex;
  gap: 1rem;
}
</style>

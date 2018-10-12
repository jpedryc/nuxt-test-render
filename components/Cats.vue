<template>
  <div class="row">
    <div class="col">
      <ul v-if="cats">
        <li v-for="cat in cats" :key="cat.id">{{ cat.name }}</li>
      </ul>
      <h3 v-if="!cats">No cats passed</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cats',
    props: {
      cats: {
        type: Array,
        required: false,
      }
    }
  };
</script>

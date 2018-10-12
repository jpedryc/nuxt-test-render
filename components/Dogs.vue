<template>
  <div class="row">
    <div class="col">
      <ul v-if="dogs">
        <li v-for="dog in dogs" :key="dog.id">{{ dog.name }}</li>
      </ul>
      <h3 v-if="!dogs">No dogs passed</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dogs',
    props: {
      dogs: {
        type: Array,
        required: false,
      }
    }
  };
</script>

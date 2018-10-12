<template>
  <section class="container">
    <dogs></dogs>
    <cats></cats>
    <div ref="layout-container" class="row"></div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Vue from 'vue';
  import Dogs from '@/components/Dogs';
  import Cats from '@/components/Cats';

  export default {
    components: {
      Dogs,
      Cats
    },
    fetch({ store }) {
      store.dispatch('landing/updateContent');
    },
    computed: {
      ...mapGetters({
        content: 'landing/content',
      })
    },
    beforeCreate() {
      Vue.component('dogs', Dogs);
      Vue.component('cats', Cats);
    },
    created() {

    },
    mounted() {
      this.content.forEach((item) => {
        const CompClass = Vue.component(item.component);
        const instance = new CompClass({ propsData: item.props }).$mount();
        this.$refs['layout-container'].appendChild(instance.$el);
      })
    }
  };
</script>

<style>

</style>

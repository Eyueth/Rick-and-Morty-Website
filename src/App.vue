<template>
  <router-view/>
</template>
 <script>
import Footer from './components/Footer'
import WebHeader from './components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    WebHeader,
    Footer
  },

}

</script>
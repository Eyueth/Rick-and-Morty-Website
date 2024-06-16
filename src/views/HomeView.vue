<template>
<WebHeader />
  <CarouselSlide/>
  <Information />
  <EpisodeLink />
  <CharacterList/>
  <LocationList/>
  <WebFooter />
</template>

<script>
import CarouselSlide from '../components/CarouselSlide.vue';
import Information from '../components/information.vue';
import WebFooter from '../components/Footer.vue'
import WebHeader from '@/components/Header.vue';
import EpisodeLink from '@/components/EpisodeLink.vue';
import CharacterList from '@/components/CharacterList.vue';
import LocationList from '@/components/LocationList.vue';

export default {
  name: 'HomeView',
  components: {
    WebHeader,
      CarouselSlide,
      Information,
      EpisodeLink,
      CharacterList,
      LocationList,
      WebFooter
  },

}
</script>

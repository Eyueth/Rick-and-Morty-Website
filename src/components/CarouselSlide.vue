<template>
  <div class="p-4 pt-20 bg-gray-900">
    <Carousel
      id="gallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
      class="w-full mb-4"
    >
      <Slide v-for="image in images" :key="image.id">
        <div class="flex justify-center">
          <img :src="image.src" class="object-cover w-full h-96">
        </div>
      </Slide>
    </Carousel>
    
    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
      class="w-full"
    >
      <Slide v-for="image in images" :key="image.id">
        <div class="cursor-pointer carousel__item" @click="slideTo(image.id - 1)">
          <img :src="image.src" class="object-cover w-full h-60">
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
      images: [
        { id: 1, src: require('../assets/carousel/1.jpg') },
        { id: 2, src: require('../assets/carousel/2.jpg') },
        { id: 3, src: require('../assets/carousel/6.jpg') },
        { id: 4, src: require('../assets/carousel/7.jpg') },
      ],
      autoScrollInterval: null,
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
      }, 4000);
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    },
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeUnmount() {
    this.stopAutoScroll();
  },
});
</script>


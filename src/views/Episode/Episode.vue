<template>
  <PageHeader/>
  <div class="min-h-screen pt-16 bg-gray-900">
    <p v-if="error" class="text-red-500">Error loading episode data.</p>
    <p v-if="loading" class="text-gray-500">Loading...</p>
    <div v-else class="container p-4 mx-auto sm:p-6 lg:p-10">
      <div v-for="episode in result.episodes.results" :key="episode.id">
        <div v-if="episode.id === id">
          <div class="p-4 mb-6 bg-gray-800 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-white">{{ episode.name }}</h2>
            <p class="text-gray-400">Air Date: {{ episode.air_date }}</p>
            <p class="text-gray-400">Episode: {{ episode.episode }}</p>
            <p class="text-gray-400">Created: {{ episode.created }}</p>
          </div>
          <h3 class="mb-8 text-xl font-bold text-white">Characters in this episode:</h3>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="character in episode.characters" :key="character.id" class="p-4 transition-all duration-300 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700">
              <img :src="character.image" alt="Character Image" class="object-cover w-full h-48 mb-2 rounded">
              <h4 class="text-lg font-semibold text-white">{{ character.name }}</h4>
              <p class="text-gray-400">{{ character.status }} - {{ character.species }}</p>
              <p class="text-gray-400">{{ character.gender }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <webFooter />
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import webFooter from '../../components/Footer.vue';
import PageHeader from '../../components/PageHeader.vue'
const EPISODE_QUERY = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
        episode
        created
        characters {
          name
          status
          species
          gender
          image
        }
      }
    }
  }
`;

export default {
  name: 'Episode',
  components:{ 
  PageHeader,
    webFooter
  },
  setup() {
    const { result, loading, error } = useQuery(EPISODE_QUERY);
    return {
      result,
      loading,
      error
    };
  },
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

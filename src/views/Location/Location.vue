<template>
  <PageHeader />
  <div class="min-h-screen p-6 text-white bg-gray-900">
    <p v-if="error" class="text-red-500">Error loading data</p>
    <p v-if="loading" class="text-yellow-500">Loading...</p>
    <div v-else>
      <div v-for="location in result.locations.results" :key="location.id">
        <div v-if="location.id == id">
          <div class="mb-6">
            <h2 class="mb-2 text-3xl font-bold text-center">{{ location.name }}</h2>
            <p class="text-lg text-center text-gray-400">{{ location.type }}</p>
            <p class="text-lg text-center text-gray-400">{{ location.dimension }}</p>
            <p class="text-sm text-center text-gray-500">Created: {{ location.created }}</p>
          </div>
          <div class="mt-8">
            <h3 class="mb-4 text-2xl font-semibold">Residents:</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div v-for="character in location.residents" :key="character.id" class="flex p-4 bg-gray-800 rounded-lg shadow-lg">
                <img :src="character.image" alt="Character Image" class="w-24 h-24 mr-4 rounded-full">
                <div>
                  <h4 class="text-xl font-bold">{{ character.name }}</h4>
                  <p class="text-gray-400">{{ character.status }} - {{ character.species }}</p>
                  <p class="text-gray-400">{{ character.gender }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <webFooter />
</template>

  

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import webFooter from '../../components/Footer.vue'
    import PageHeaader from '../../components/PageHeader.vue'
import PageHeader from '../../components/PageHeader.vue';

const LOCATION_QUERY = gql`
  query Locations {
    locations {
      results {
        id
        name
        type
        dimension
        created
        residents {
          id
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
  name: 'Location',
  components: {
    PageHeaader,
        webFooter    
        },
  setup() {
    const { result, loading, error } = useQuery(LOCATION_QUERY);
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

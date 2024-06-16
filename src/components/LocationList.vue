<template>
  <div class="mx-auto bg-gray-900">
    
    <div id="location" class="container min-h-screen p-4 mx-auto text-white sm:p-6 lg:p-10">
      <h2 class="h-10 m-5 text-2xl font-bold text-center">Location List</h2>
    <p v-if="error" class="text-red-500">Error loading locations</p>
  <p v-if="loading" class="text-yellow-500">Loading...</p>
    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <RouterLink
        v-for="location in result.locations.results"
      :key="location.id"
        :to="{ name: 'Location', params: { id: location.id } }"
        class="block p-4 transition duration-300 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700"
      >
        <div class="flex flex-col items-center text-center">
          <h3 class="mb-2 text-lg font-semibold sm:text-xl">{{ location.name }}</h3>
        <p class="text-gray-400">Dimension: {{ location.dimension }}</p>
      </div>
    </RouterLink>
  </div>
</div>
</div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { RouterLink } from 'vue-router';

const LOCATION_QUERY = gql`
  query Locations {
    locations {
      results {
        id
        name
        dimension
      }
    }
  }
`;

export default {
  name: 'LocationList',
  setup() {
    const { result, loading, error } = useQuery(LOCATION_QUERY);
    return {
      result,
      loading,
      error
    };
  }
};
</script>

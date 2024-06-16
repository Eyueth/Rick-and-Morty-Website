<template>
  <div id="episode" class="min-h-screen p-4 text-white bg-gray-900 sm:p-8 lg:p-16">
    <h2 class="h-10 m-5 text-2xl font-bold text-center">Episode List</h2>
    <p v-if="error" class="text-red-500">Something went wrong...</p>
    <p v-if="loading" class="text-gray-500">Loading...</p>
    <div v-else class="container mx-auto">
      <div v-for="(episodes, season) in groupedEpisodes" :key="season" class="mb-8">
        <h3 class="mb-4 text-xl font-bold sm:text-2xl">Season {{ season }}</h3>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <RouterLink
            v-for="episode in episodes"
            :key="episode.id"
            :to="{ name: 'Episode', params: { id: episode.id } }"
            class="p-4 transition-all duration-300 bg-gray-800 rounded-lg hover:bg-gray-700"
          >
            <div>
              <div class="mb-4">
                <img src="../assets/rickandmorty.jpg" alt="Rick and Morty" class="object-cover w-full h-40 rounded-t-lg sm:h-48 lg:h-64">
              </div>
              <div>
                <p class="text-lg font-semibold sm:text-xl">{{ episode.name }}</p>
                <p class="text-gray-400">{{ episode.episode }}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const EPISODE_QUERY = gql`
  query {
    episodes {
      results {
        name
        id
        episode
      }
    }
  }
`;

export default {
  name: 'info',
  setup() {
    const { result, loading, error } = useQuery(EPISODE_QUERY);
    const groupedEpisodes = computed(() => {
      if (!result.value) return {};
      return result.value.episodes.results.reduce((acc, episode) => {
        const season = episode.episode.match(/S(\d+)E\d+/)[1];
        if (!acc[season]) {
          acc[season] = [];
        }
        acc[season].push(episode);
        return acc;
      }, {});
    });

    return {
      result,
      loading,
      error,
      groupedEpisodes
    };
  }
};
</script>

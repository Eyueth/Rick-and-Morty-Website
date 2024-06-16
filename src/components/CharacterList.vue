<template>
  <div id="character" class="min-h-screen p-4 text-white bg-gray-900 sm:p-6 lg:p-10">
    <h2 class="h-10 m-5 text-2xl font-bold text-center">Character List</h2>
    <p v-if="error" class="text-red-500">Error</p>
    <p v-if="loading" class="text-gray-500">Loading...</p>
    <div v-else class="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      <RouterLink
        v-for="character in result.characters.results"
        :key="character.id"
        :to="{ name: 'Character', params: { id: character.id } }"
        class="transition-all duration-300 bg-gray-700 rounded-lg hover:bg-gray-600"
      >
        <div class="p-4">
          <img :src="character.image" alt="Character Image" class="object-cover w-full h-48 rounded-t-lg">
          <p class="mt-2 text-lg font-semibold text-center">{{ character.name }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script scoped>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

const CHARACTER_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default {
  name: 'CharacterList',
  setup() {
    const { result, loading, error } = useQuery(CHARACTER_QUERY);

    return {
      result,
      loading,
      error
    };
  }
};
</script>

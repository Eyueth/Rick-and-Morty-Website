<template>
    <div id="character"class="min-h-screen p-6 text-white bg-gray-900">     
  <h2 id="character" class="m-5 text-xl font-bold">Character list:</h2>
      <p v-if="error">Error</p>
      <p v-if="loading">Loading...</p>
      <div v-else class="grid grid-cols-5 gap-4">
        <RouterLink v-for="character in result.characters.results" 
        :key="character.id"
        :to="{name: 'Character', params: {id: character.id}}"
        >
          <div class="p-4 transition-all duration-300 bg-gray-800 rounded-lg hover:bg-gray-700">
            <img :src="character.image" class="">
            <p>{{ character.name }}</p>
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
    

<template>
    <div class="min-h-screen p-6 text-white bg-gray-900">
      <p v-if="error" class="text-red-500">Error</p>
      <p v-if="loading" class="text-yellow-500">Loading...</p>
      <div v-else>
        <div v-for="character in result.characters.results" :key="character.id" class="mb-6">
          <div v-if="character.id === id" >
            <div class="flex flex-col overflow-hidden bg-gray-800 rounded-lg shadow-lg md:flex-row ">
                
                <img :src="character.image" alt="" class="object-cover md:w-1/3 ">
                <div class="flex flex-col justify-between p-6">
                    <div>
                        <h2 class="mb-2 text-2xl font-bold">{{ character.name }}</h2>
                        <p class="mb-2 text-gray-400">{{ character.status }} - {{ character.species }}</p>
                        <p class="text-gray-400">Last Known Location:</p>
                        <p class="mb-4 text-gray-200">{{ character.location.name }}</p>
                    </div>
                </div>
            </div>
            
            <div>
                
                <h2 class="mt-8 text-2xl font-bold">Episodes participated in:</h2>
                <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
                  <div v-for="episode in character.episode" :key="episode.id" class="p-4 bg-gray-800 rounded-lg shadow-lg">
                    <h3 class="mb-2 text-xl font-bold">{{ episode.name }}</h3>
                    <p class="text-gray-400">{{ episode.episode }}</p>
                    <p class="text-gray-400">{{ episode.air_date }}</p>
                    <p class="text-gray-400">Created on:</p>
                    <p class="text-gray-200">{{ episode.created }}</p>
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
        
    const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
        results {
        id
        name
        status
        species
        gender
        image
        episode {
            id
            name
            air_date
            episode
            created
        }
        location {
            name
        }
        }
  }
  }
`;

    export default {
        name: 'Character',
        components: {
        webFooter    
        },
    setup () {
        const { result, loading, error } = useQuery(CHARACTERS_QUERY);
        return {
            result,
            loading, 
            error
        }
    },
    data(){
        return {
            id: this.$route.params.id
        }
    }
}

</script>
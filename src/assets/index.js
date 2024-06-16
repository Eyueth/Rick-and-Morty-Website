import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Episode from '../views/Episode/Episode.vue'
import Character from '../views/Character/Character.vue'
import Location from '../views/Location/Location.vue'
import CharacterList from '@/components/CharacterList.vue'
import EpisodeLink from '@/components/EpisodeLink.vue'
import LocationList from '@/components/LocationList.vue'
import { component } from 'vue/types/umd'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '../components/EpisodeLink.vue',
    name: 'EpisodeLink',
    component: EpisodeLink
  },
  {
    path: '../components/CharacterList.vue',
    name: 'CharacterList',
    component: CharacterList
  },
  {
    path: '../components/LocationList.vue',
    name: 'LocationList',
    component: LocationList
  },
  {
    path: '/Episode/:id',
    name: 'Episode',
    component: Episode
  },
  {
    path: '/Character/:id',
    name: 'Character',
    component: Character
  },
  {
    path: '/Location/:id',
    name: 'Location',
    component: Location
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

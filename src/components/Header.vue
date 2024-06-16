<template>
    <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 mb-10 text-white bg-gray-800 shadow-lg">
      <div class="text-xl font-bold">Rick and Morty</div>
      <nav class="">
        <a href="#episode" class="p-4 hover:text-gray-500"> Episode</a>
        <a href="#character" class="p-4 hover:text-gray-500"> Character</a>
        <a href="#location" class="p-4 mb-10 hover:text-gray-500"> Location</a>
      </nav>
    </header>
</template>

<script>
export default {
    name: 'Web-Header'
}
</script>
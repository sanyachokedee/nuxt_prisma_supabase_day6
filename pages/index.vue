<script setup lang="ts">

    useHead({
        title: 'Home',
        meta: [
        { 
            name: 'keywords', 
            content: 'Home, Nuxt 3, Backend'
        },
        {
            name: 'Description',
            content: 'Home Nuxt 3,  IT Genius Engineering'
        }
        ]
  })

</script>

<template>
    
    <section class="flex flex-col items-center py-24 space-y-8 text-center bg-base-200">
        <h1 class="text-4xl font-bold">Engage with your <br /> customers on a new level</h1>
        <p class="max-w-md text-lg">
        World among the stalks, and grow familiar with the countless indescribable forms of the insects and flies
        </p>
        <div class="flex space-x-4">
        <button class="btn btn-primary">Try NuxtPrisma for free</button>
        <button class="btn btn-outline">View demo</button>
        </div>
        <img src="public/images/mockup.jfif" alt="Mockup" class="max-w-2xl rounded-lg shadow-lg" />
    </section>

    <section  class="container grid items-center grid-cols-1 gap-8 px-4 py-6 mx-auto md:grid-cols-2">
      <img
        src="/public/images/feature1.jfif"
        alt="Image 1"
        class="rounded-lg shadow-lg"
      />
      <div>
        <h2 class="mb-4 text-2xl font-bold">
          So if on advanced addition absolute received replying
        </h2>
        <p class="text-gray-600">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the waiting be females upper surface of the
          impenetrable foliage of my trees
        </p>
      </div>
    </section >

    <section  class="container grid items-center grid-cols-1 gap-8 px-4 py-6 mx-auto md:grid-cols-2">
      <div class="order-2 md:order-1">
        <h2 class="mb-4 text-2xl font-bold">
          So if on advanced addition absolute received replying
        </h2>
        <p class="text-gray-600">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the waiting be females upper surface of the
          impenetrable foliage of my trees
        </p>
      </div>
      <img
        src="/public/images/feature2.jfif"
        alt="Image 2"
        class="order-1 rounded-lg shadow-lg md:order-2"
      />
    </section >
</template>

<style scoped>

</style>
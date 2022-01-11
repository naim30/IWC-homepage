<template>
  <div class="w-72 text-white bg-secondary-200 rounded-2xl">
    <section class="h-72 p-4">
      <img class="h-full rounded-2xl" :src="imgurl" :alt="name" />
    </section>
    <h3 class="px-4 text-xl font-bold font-poppins mb-2">{{ name }}</h3>
    <p class="text-xs leading-5 text-secondary-400 px-4 pb-4 font-poppins">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel fugiat
      quod voluptate recusandae odio impedit nesciunt
    </p>
    <section
      class="bg-secondary-300 w-full rounded-b-2xl flex justify-between items-center px-4 py-3"
    >
      <div class="text-xs">
        <i class="fas fa-map-marker-alt text-sm mr-2"></i
        >{{ location.length > 15 ? location.slice(0, 15) + '...' : location }}
      </div>
      <button
        class="text-xs font-poppins py-2 px-3 bg-secondary-200 rounded-full"
      >
        View Profile
        <i class="fas fa-chevron-right text-xs ml-2 hover:text-primary-100"></i>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    imgurl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>

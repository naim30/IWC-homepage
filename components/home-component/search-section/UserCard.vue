<template>
  <div class="w-full text-white bg-secondary-200 rounded-2xl">
    <section
      :class="[
        'm-4 mb-5 flex justify-center items-center overflow-hidden rounded-2xl',
        $style.imageContainer,
      ]"
    >
      <img
        :class="['w-full transition-all', $style.image]"
        :src="imgurl"
        :alt="name"
      />
    </section>

    <h3 class="px-5 text-xl font-bold font-poppins mb-3">{{ name }}</h3>

    <p class="text-xs leading-5 text-secondary-400 px-5 pb-5 font-poppins">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel fugiat
      quod voluptate recusandae odio impedit ipsum dolor sit amet.
    </p>

    <section
      class="bg-secondary-300 w-full rounded-b-2xl flex justify-between items-center px-5 py-3"
    >
      <div class="text-xs">
        <i class="fas fa-map-marker-alt text-sm mr-2"></i
        >{{ location.length > 15 ? location.slice(0, 15) + '...' : location }}
      </div>

      <button
        class="text-xs font-poppins py-2 px-3 bg-secondary-200 rounded-full"
      >
        View Profile
        <i
          class="fas fa-chevron-right text-xs ml-2 transition-all hover:text-primary-100"
        ></i>
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

<style lang="css" module>
.imageContainer {
  height: 280px;
}

.image:hover {
  transform: scale(1.1);
}
</style>

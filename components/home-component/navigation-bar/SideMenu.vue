<template>
  <section class="fixed z-30">
    <transition name="slideLeft">
      <div
        v-if="showMenu"
        class="fixed w-56 bg-secondary-100 top-0 bottom-0 left-0 text-white p-4 z-40"
      >
        <button
          class="text-xl float-right hover:text-primary-100"
          @click="$emit('closeMenu')"
        >
          <i class="far fa-times-circle"></i>
        </button>

        <ul class="flex flex-col mt-10 space-y-1 font-poppins">
          <li
            class="border px-3 py-2 rounded-md border-transparent hover:border-gray-700 hover:text-primary-100"
          >
            <a href="#"><i class="far fa-file-alt mr-3"></i>About</a>
          </li>
          <li
            class="border px-3 py-2 rounded-md border-transparent hover:border-gray-700 hover:text-primary-100"
          >
            <a href="#"><i class="fas fa-edit mr-3"></i>Nominate</a>
          </li>
          <li
            class="border px-3 py-2 rounded-md border-transparent hover:border-gray-700 hover:text-primary-100"
          >
            <a href="#"><i class="fab fa-twitter mr-3"></i>Twitter</a>
          </li>
        </ul>
      </div>
    </transition>

    <transition name="fadeCustom">
      <div
        v-if="showMenu"
        class="fixed top-0 w-full bottom-0 left-0 bg-black opacity-70"
      ></div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    showMenu: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['closeMenu'],
}
</script>

<style scoped>
.fadeCustom-enter-active,
.fadeCustom-leave-active {
  transition: opacity 0.5s;
}
.fadeCustom-enter,
.fadeCustom-leave-to {
  opacity: 0;
}
</style>

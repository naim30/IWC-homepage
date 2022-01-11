<template>
  <nav
    class="h-16 px-7 flex items-center justify-between w-full border-b border-secondary-200 bg-secondary-100 z-10"
  >
    <transition name="slideLeft">
      <div
        v-if="showMenu"
        class="fixed w-56 bg-secondary-100 top-0 bottom-0 left-0 text-white p-4 z-40"
      >
        <button
          class="text-xl float-right hover:text-primary-100"
          @click="closemenu"
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
        class="fixed top-0 w-full bottom-0 left-0 bg-black opacity-70 z-30"
      ></div>
    </transition>

    <section
      class="text-white text-base font-poppins space-x-5 items-center hidden z-20 lg:flex"
    >
      <a href="#" class="hover:text-primary-100">About</a>
      <a href="#" class="hover:text-primary-100">Nominate</a>
      <a href="#" class="hover:text-primary-100">
        <i class="fab fa-twitter text-xl"></i>
      </a>
    </section>

    <section class="z-20 lg:hidden" @click="openMenu">
      <button class="text-white hover:text-primary-100">
        <i class="fas fa-bars"></i>
      </button>
    </section>

    <section
      class="text-white text-base font-bold font-poppins text-center lg:text-xl absolute left-0 right-0"
    >
      Indians Who Code
    </section>

    <section
      class="text-white text-base font-poppins text-right hidden z-20 lg:flex"
    >
      <a href="#" class="hover:text-primary-100"> Suggest a Feature </a>
    </section>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    openMenu() {
      this.showMenu = true
    },
    closemenu() {
      this.showMenu = false
    },
  },
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

<template>
  <nav
    class="h-16 px-7 flex items-center justify-between w-full border-b border-secondary-200 bg-secondary-100 z-10"
  >
    <side-menu :show-menu="showMenu" @closeMenu="closeMenu" />

    <section class="z-20 lg:hidden" @click="openMenu">
      <button class="text-white hover:text-primary-100">
        <i class="fas fa-bars"></i>
      </button>
    </section>

    <section
      class="text-white text-base font-poppins space-x-5 items-center hidden z-20 lg:flex"
    >
      <a href="#" class="hover:text-primary-100">About</a>
      <a href="#" class="hover:text-primary-100">Nominate</a>
      <a href="#" class="hover:text-primary-100">
        <i class="fab fa-twitter text-xl"></i>
      </a>
    </section>

    <section
      class="text-white text-base font-bold font-poppins text-center lg:text-xl absolute left-0 right-0"
    >
      Indians Who Code
    </section>

    <section
      class="text-white text-base font-poppins text-right hidden z-20 lg:flex mr-5"
    >
      <a href="#" class="hover:text-primary-100"> Suggest a Feature </a>
    </section>
  </nav>
</template>

<script>
import SideMenu from './SideMenu.vue'

export default {
  name: 'NavBar',
  components: {
    SideMenu,
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    openMenu() {
      this.showMenu = true
    },
    closeMenu() {
      this.showMenu = false
    },
  },
}
</script>

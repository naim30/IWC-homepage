<template>
  <nav
    class="h-16 px-7 flex items-center justify-between w-full border-b border-secondary-200 bg-secondary-100 z-10"
  >
    <section
      class="text-white text-base font-poppins space-x-5 flex items-center w-1/3"
    >
      <a href="#" class="hover:text-primary-100">About</a>
      <a href="#" class="hover:text-primary-100">Nominate</a>
      <a href="#" class="hover:text-primary-100">
        <i class="fab fa-twitter text-xl"></i>
      </a>
    </section>
    <section
      class="text-white text-xl font-bold font-poppins w-1/3 text-center"
    >
      Indians Who Code
    </section>
    <section class="text-white text-base font-poppins w-1/3 text-right">
      <a href="#" class="hover:text-primary-100"> Suggest a Feature </a>
    </section>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

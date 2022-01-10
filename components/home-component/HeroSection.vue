<template>
  <main
    :class="[
      'h-screen flex justify-center relative mx-20',
      $style.heroContainer,
    ]"
  >
    <section
      :class="[
        'text-white font-poppins font-bold w-1/2 text-center mt-20',
        $style.heroText,
      ]"
    >
      Lets Make This
      <span class="text-primary-100">Developers Directory</span> Better Togather
    </section>
  </main>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style lang="css" module>
.heroText {
  font-size: 40px;
  line-height: 72px;
}

.heroContainer::before {
  content: '';
  background-image: url('/assets/images/hero-bg.png');
  @apply bg-contain bg-no-repeat w-full top-8 bottom-0 absolute;
}
</style>

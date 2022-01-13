<template>
  <main
    :class="[
      ' flex flex-col items-center relative mx-7 lg:mx-20 ',
      $style.heroContainer,
    ]"
  >
    <section
      :class="[
        'text-white font-poppins font-bold w-full text-center mt-14 text-xl lg:mt-20',
        $style.heroText,
      ]"
    >
      Lets Make This
      <span class="text-primary-100">Developers Directory</span> Better Togather
    </section>

    <lottie-player
      :class="['mt-10 mb-3 w-full max-w-md', $style.animation]"
      src="https://assets8.lottiefiles.com/packages/lf20_u5nd9awf.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
  </main>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style lang="css" module>
@screen lg {
  .heroText {
    font-size: 40px;
    line-height: 72px;
    width: 600px;
  }

  .heroContainer::before {
    content: '';
    background-image: url('/assets/images/hero-bg.png');
    @apply bg-contain bg-no-repeat w-full top-8 bottom-0 absolute;
  }

  .animation {
    width: 500px;
  }
}
</style>

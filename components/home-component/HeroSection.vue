<template>
  <main
    :class="['flex flex-col items-center relative mx-7', $style.heroContainer]"
  >
    <section
      :class="[
        'text-white font-poppins font-bold w-full text-center mb-2 text-xl',
        $style.heroText,
      ]"
    >
      Lets Make This
      <span class="text-primary-100">Developers Directory</span> Better Togather
    </section>

    <lottie-player
      :class="[
        'mt-6 w-full max-w-md h-[300px] lg:h-[420px] lg:w-[420px]',
        $style.animation,
      ]"
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
.heroText {
  margin-top: 60px;
}

/* .animation {
  height: 300px;
} */

@screen lg {
  .heroContainer {
    margin-left: 72px;
    margin-right: 72px;
  }

  .heroText {
    font-size: 40px;
    line-height: 72px;
    width: 600px;
    @apply mt-20;
  }

  .heroContainer::before {
    content: '';
    background-image: url('/assets/images/hero-bg.png');
    height: 380px;
    top: 25px;
    @apply bg-contain bg-no-repeat bg-center w-full bottom-0 absolute;
  }

  /* .animation {
    height: 420px;
    width: 420px;
  } */
}
</style>

<template>
  <section
    ref="tags"
    :class="[
      'flex overflow-x-scroll w-full scrollbar-hide mt-8 mb-9 lg:mt-9 lg:mb-10',
      $style.scrollSmooth,
    ]"
  >
    <button
      :class="[
        'h-16 w-16 rounded-full border border-secondary-300 bg-secondary-200 hover:bg-secondary-300 absolute -left-6 -mt-3 text-white hover:text-primary-100',
        scrollLeft > 0 ? 'hidden sm:inline-block' : 'hidden',
      ]"
      @click="onScrollLeft"
    >
      <i class="fas fa-chevron-left pl-3"></i>
    </button>

    <button
      :class="[
        'h-16 w-16 rounded-full border border-secondary-300 bg-secondary-200 hover:bg-secondary-300 absolute -right-6 -mt-3 text-white hover:text-primary-100',
        scrollLeft < maxScrollWidth ? 'hidden sm:inline-block' : 'hidden',
      ]"
      @click="onScrollRight"
    >
      <i class="fas fa-chevron-right pr-3"></i>
    </button>

    <button
      v-for="(tag, i) in tags"
      :key="i"
      :class="[
        'px-3 mx-2 whitespace-nowrap rounded-lg font-poppins border border-secondary-300 text-white',
        $style.tags,
        tag.selected
          ? 'bg-primary-100 hover:bg-primary-100'
          : 'bg-secondary-200 hover:bg-secondary-300',
      ]"
      @click="$emit('tagUsers', i)"
    >
      {{ tag.name }}
    </button>
  </section>
</template>

<script>
export default {
  name: 'SearchSection',
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  emits: ['tagUsers'],
  data() {
    return {
      scrollLeft: 0,
      maxScrollWidth: Infinity,
    }
  },
  methods: {
    onScrollLeft() {
      this.$refs.tags.scrollLeft = this.scrollLeft - 200
      this.scrollLeft = this.scrollLeft - 200 < 0 ? 0 : this.scrollLeft - 200
    },

    onScrollRight() {
      this.maxScrollWidth =
        this.$refs.tags.scrollWidth - this.$refs.tags.clientWidth

      this.$refs.tags.scrollLeft = this.scrollLeft + 200
      this.scrollLeft =
        this.maxScrollWidth > this.scrollLeft + 200
          ? this.scrollLeft + 200
          : this.maxScrollWidth
    },
  },
}
</script>

<style lang="css" module>
.scrollSmooth {
  scroll-behavior: smooth;
}
.tags {
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>

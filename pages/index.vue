<template>
  <div class="bg-secondary-100">
    <announcement-bar />
    <nav-bar class="sticky top-0" />
    <hero-section />
    <footer-section />
  </div>
</template>

<script>
import AnnouncementBar from '../components/home-component/AnnouncementBar.vue'
import NavBar from '../components/home-component/NavBar.vue'
import FooterSection from '../components/home-component/FooterSection.vue'
import HeroSection from '../components/home-component/HeroSection.vue'

export default {
  name: 'IndexPage',
  components: {
    AnnouncementBar,
    NavBar,
    HeroSection,
    FooterSection,
  },
}
</script>

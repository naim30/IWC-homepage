<template>
  <div class="bg-secondary-100">
    <announcement-bar />
    <nav-bar class="sticky top-0" />
    <hero-section />
    <search-section />
    <footer-section />
  </div>
</template>

<script>
import AnnouncementBar from '../components/home-component/AnnouncementBar.vue'
import NavBar from '../components/home-component/NavBar.vue'
import HeroSection from '../components/home-component/HeroSection.vue'
import SearchSection from '../components/home-component/SearchSection.vue'
import FooterSection from '../components/home-component/FooterSection.vue'

export default {
  name: 'IndexPage',
  components: {
    AnnouncementBar,
    NavBar,
    HeroSection,
    SearchSection,
    FooterSection,
  },
}
</script>

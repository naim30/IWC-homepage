<template>
  <div class="bg-secondary-100">
    <AnnouncementBar />
    <NavBar class="sticky top-0" />
    <HeroSection />
    <Footer />
  </div>
</template>

<script>
import AnnouncementBar from '../components/home-component/AnnouncementBar.vue'
import NavBar from '../components/home-component/NavBar.vue'
import Footer from '../components/home-component/Footer.vue'
import HeroSection from '../components/home-component/HeroSection.vue'

export default {
  name: 'IndexPage',
  components: {
    AnnouncementBar,
    NavBar,
    HeroSection,
    Footer,
  },
}
</script>

<template>
  <footer
    class="text-white flex justify-center h-20 items-center bg-secondary-200 font-poppins mt-24"
  >
    <h5 :class="['text-xl', $style.footerText]">Follow us on</h5>

    <ul class="flex space-x-6 text-xl items-center">
      <li>
        <a href="#"
          ><i class="fab fa-twitter transition-all hover:text-primary-100"></i
        ></a>
      </li>
      <li>
        <a href="#"
          ><i class="fab fa-instagram transition-all hover:text-primary-100"></i
        ></a>
      </li>
      <li>
        <a href="#"
          ><i class="far fa-envelope transition-all hover:text-primary-100"></i
        ></a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>

<style lang="css" module>
.footerText {
  padding-right: 10px;
}
</style>

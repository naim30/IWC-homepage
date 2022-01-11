<template>
  <div
    class="border-t border-secondary-200 flex flex-col items-center relative overflow-x-hidden"
  >
    <section
      ref="tags"
      class="flex overflow-x-scroll w-full scrollbar-hide my-9"
    >
      <button
        :class="[
          'h-16 w-16 rounded-full border border-secondary-300 bg-secondary-200 hover:bg-secondary-300 absolute -left-5 -mt-3',
          scrollLeft > 0 ? 'hidden sm:inline-block' : 'hidden',
        ]"
        @click="onScrollLeft"
      >
        <i class="fas fa-chevron-left text-white pl-3"></i>
      </button>
      <button
        :class="[
          'h-16 w-16 rounded-full border border-secondary-300 bg-secondary-200 hover:bg-secondary-300 absolute -right-5 -mt-3',
          scrollLeft < maxWidth ? 'hidden sm:inline-block' : 'hidden',
        ]"
        @click="onScrollRight"
      >
        <i class="fas fa-chevron-right text-white pr-3"></i>
      </button>
      <button
        v-for="(tag, i) in tags"
        :key="i"
        :class="[
          'px-3 py-2 mx-2 whitespace-nowrap rounded-lg font-poppins border border-secondary-300 text-white',
          tag.selected
            ? 'bg-primary-100 hover:bg-primary-100'
            : 'bg-secondary-200 hover:bg-secondary-300',
        ]"
        @click="tagUsers(i)"
      >
        {{ tag.name }}
      </button>
    </section>
    <section class="grid grid-cols-auto-fit gap-5 w-full justify-center">
      <user-card
        v-for="user in users"
        :key="user.login.uuid"
        :imgurl="user.picture.large"
        :name="user.name.first + ' ' + user.name.last"
        :location="user.location.city"
      />
    </section>
    <button
      class="font-poppins text-white border border-white w-80 py-2 rounded-lg mt-12 hover:text-secondary-100 hover:bg-white lg:w-auto lg:px-44"
      @click="loadUsers"
    >
      Load more developers
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import UserCard from './UserCard.vue'

export default {
  name: 'SearchSection',
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
      tags: [
        { name: 'Android', selected: false },
        { name: 'Angular', selected: false },
        { name: 'Blockchain', selected: false },
        { name: 'Dart', selected: false },
        { name: 'Django', selected: false },
        { name: 'Docker', selected: false },
        { name: 'Electron', selected: false },
        { name: 'Flask', selected: false },
        { name: 'Flutter', selected: false },
        { name: 'Go Lang', selected: false },
        { name: 'GraphQL', selected: false },
        { name: 'Java', selected: false },
        { name: 'javaScript', selected: false },
        { name: 'Laravel', selected: false },
        { name: 'MongoDB', selected: false },
        { name: 'Node.js', selected: false },
        { name: 'Nuxt.js', selected: false },
        { name: 'PHP', selected: false },
        { name: 'PostgreSQL', selected: false },
        { name: 'Python', selected: false },
        { name: 'React', selected: false },
        { name: 'React Native', selected: false },
        { name: 'Vue.js', selected: false },
      ],
      scrollLeft: 0,
      maxWidth: 0,
    }
  },
  created() {
    axios.get('https://randomuser.me/api/?results=40').then((response) => {
      this.users = response.data.results
    })
  },
  mounted() {
    this.maxWidth = this.$refs.tags.offsetWidth
  },
  methods: {
    tagUsers(index) {
      const updatedTags = this.tags
      updatedTags[index].selected = !updatedTags[index].selected
      this.tags = updatedTags

      axios.get('https://randomuser.me/api/?results=40').then((response) => {
        this.users = response.data.results
      })
    },
    loadUsers() {
      axios.get('https://randomuser.me/api/?results=40').then((response) => {
        this.users = [...this.users, ...response.data.results]
      })
    },
    onScrollLeft() {
      this.$refs.tags.style.scrollBehavior = 'smooth'
      this.$refs.tags.scrollLeft = this.scrollLeft - 200
      this.scrollLeft = this.scrollLeft - 200 < 0 ? 0 : this.scrollLeft - 200
    },

    onScrollRight() {
      this.$refs.tags.style.scrollBehavior = 'smooth'
      this.$refs.tags.scrollLeft = this.scrollLeft + 200
      this.scrollLeft =
        this.maxWidth > this.scrollLeft + 200
          ? this.scrollLeft + 200
          : this.maxWidth
    },
  },
}
</script>

<style lang="css" module></style>

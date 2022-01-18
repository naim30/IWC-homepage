<template>
  <div
    class="border-t border-secondary-200 flex flex-col items-center relative overflow-x-hidden"
  >
    <search-component :tags="tags" @tagUsers="tagUsers" />

    <section
      class="grid grid-cols-auto-fit-sm sm:grid-cols-auto-fit-lg lg:grid-cols-auto-fit-xl gap-5 w-full justify-center"
    >
      <search-bar @searchUser="searchUser" />
      <user-card
        v-for="user in users"
        :key="user.login.uuid"
        :imgurl="user.picture.large"
        :name="user.name.first + ' ' + user.name.last"
        :location="user.location.city"
      />
      <section class="col-span-full text-center">
        <button
          :class="[
            'font-poppins text-white border w-full border-white rounded mt-7 hover:text-secondary-100 hover:bg-white transition-all',
            $style.btn,
          ]"
          @click="loadUsers"
        >
          Load more developers
        </button>
      </section>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Fuse from 'fuse.js'

import UserCard from './UserCard.vue'
import SearchComponent from './ScrollComponent.vue'
import SearchBar from './SearchBar.vue'

export default {
  name: 'SearchSection',
  components: {
    UserCard,
    SearchComponent,
    SearchBar,
  },
  data() {
    return {
      allUsers: [],
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
        { name: 'JavaScript', selected: false },
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
      fuse: null,
    }
  },

  created() {
    axios.get('https://randomuser.me/api/?results=40').then((response) => {
      this.allUsers = response.data.results
      this.users = response.data.results
      this.fuse = new Fuse(this.allUsers, {
        keys: ['name.first', 'name.last', 'location.city'],
        threshold: 0.3,
      })
    })
  },

  methods: {
    tagUsers(index) {
      const updatedTags = this.tags
      updatedTags[index].selected = !updatedTags[index].selected
      this.tags = updatedTags

      axios.get('https://randomuser.me/api/?results=40').then((response) => {
        this.allUsers = response.data.results
        this.users = response.data.results
      })
    },
    loadUsers() {
      axios.get('https://randomuser.me/api/?results=40').then((response) => {
        this.allUsers = [...this.allUsers, ...response.data.results]
        this.users = [...this.allUsers, ...response.data.results]
      })
    },
    searchUser(value) {
      if (value === '') {
        this.users = this.allUsers
      } else {
        this.users = this.fuse.search(value).map((user) => user.item)
      }
    },
  },
}
</script>

<style lang="css" module>
.btn {
  padding-top: 6px;
  padding-bottom: 6px;
  max-width: 300px;
}

@screen lg {
  .btn {
    max-width: 500px;
  }
}
</style>

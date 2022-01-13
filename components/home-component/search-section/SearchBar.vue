<template>
  <section class="w-full flex justify-center items-center p-3">
    <div class="w-full max-w-md bg-secondary-200 rounded-lg">
      <i class="fas fa-search text-lg text-gray-400 ml-3"></i>
      <input
        class="px-4 py-2 text-lg bg-transparent outline-none text-white"
        type="text"
        placeholder="search user.."
        @input="$emit('searchUser', $event.target.value)"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
  emits: ['searchUser'],
}
</script>

<style></style>

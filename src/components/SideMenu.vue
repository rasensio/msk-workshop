<template>
  <aside class="menu">
    <!-- <div class="control">
      <input class="input" type="text" placeholder="Search..." v-model="search">
    </div> -->
    <p class="menu-label">General</p>
    <ul class="menu-list">
      <li>
        <a>Streams</a>
      </li>
      <li>
        <a>Kafka Concepts</a>
      </li>
    </ul>
    <p class="menu-label">Getting started</p>
    <ul class="menu-list">
      <li>
        <router-link to="/getting-started/create-role">Create a Role</router-link>
      </li>
      <li>
        <router-link to="/getting-started/setup-ide">Setup your IDE</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style>

aside {
  border-right: 1px solid lightgrey;
}
</style>

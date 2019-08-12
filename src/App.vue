<template>
  <div id="app">
    <Navbar></Navbar>

    <div class="container is-fluid">
      <div class="content">
        <div class="columns">
          <div class="column is-2">
            <SideMenu></SideMenu>
          </div>
          <div class="column is-10">
            <router-view />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";

export default {
  components: { Navbar, SideMenu }
};
</script>


<style lang="scss">
</style>

<template>
  <div id="app">
    <app-header/>
    <router-view :key="$route.path"/>
    <app-footer/>
  </div>
</template>

<style lang="scss">
  @import "/scss/helpers";
  @import "/scss/base";
</style>

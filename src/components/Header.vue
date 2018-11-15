<template>
  <header>
    <router-link exact tag="svg" to="/projects" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="1000px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
       <path d="M406.586,500c0.105,1.823,0.145,3.65,0.116,5.477c-0.638,41.243-34.588,74.161-75.831,73.523
       	c-1.826,0.028-3.653-0.011-5.477-0.116c-41.179-2.388-72.625-37.705-70.237-78.884c-0.106-1.823-0.145-3.65-0.116-5.477
       	c0.637-41.243,34.587-74.16,75.83-73.523c1.827-0.028,3.654,0.011,5.478,0.116C377.527,423.504,408.974,458.821,406.586,500z
       	 M1000,500c0,276.143-223.857,500-500,500C223.858,1000,0,776.143,0,500S223.857,0,500,0S1000,223.857,1000,500z M503.543,500
       	c0-96.972-75.215-163.215-172.672-163.215C233.415,336.785,158.2,403.015,158.2,500s75.214,163.214,172.671,163.214
       	C428.328,663.214,503.543,596.972,503.543,500z M841.8,341.986h-95.571v111.656H633.172V341.986H537.6v315.542h95.572V536.9h113.057
       	v120.628H841.8V341.986z"/>
    </router-link>
    <nav>
      <router-link tag="a" class="caps" to="/projects">Projects</router-link>
      <router-link tag="a" class="caps" to="/about">About</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  header {
      align-items: center;
      display: flex;
      padding: 2rem 2rem 0;

      svg {
          border-radius: 100%;
          cursor: pointer;
          fill: $color-dark;
          height: 70px;
          transform: translateX(-.1rem);
          transition: transform 1s cubic-bezier(.19, 1, .22, 1);
          width: auto;

          @include small {
              height: 56px;
          }

          &:hover {
              transform: translateX(-.1rem) scale(1.075);

              &.router-link-exact-active {
                  transform: translateX(-.1rem);
              }
          }
      }

      nav {
          margin-left: auto;
          margin-top: -4px;

          a {
              &:first-of-type {
                  margin-right: 1.5rem;

                  @include small {
                      margin-right: 1rem;
                  }
              }

              &::before {
                  display: none;
              }

              &::after {
                  width: 30px;
              }
          }
      }

      &.inverted,
      .inverted & {
          svg {
              background: $color-dark;
              fill: $color-light;
          }
      }

      &.inverted {
          background: 0;

          nav a::after {
              background: $color-light;
          }
      }
  }
</style>

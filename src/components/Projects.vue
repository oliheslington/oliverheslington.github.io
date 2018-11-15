<template>
  <main class="container projects">
    <div class="container">
      <h1>Hi. I’m Oli. Graphic Designer &amp; Creative Thinker.</h1>
    </div>
    <section>
      <router-link tag="div" class="tile inverted" :style="{ background: project.color }" :to="'/projects/' + project.id" v-for="project in projects" :data="project" :key="project.id">
        <div class="overlay">
          <h2 v-html="project.title"></h2>
          <p>Explore project</p>
        </div>
        <img :src="'/static/img/' + project.id + '-ft.png'" :alt="project.title">
      </router-link>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  main {
      padding-bottom: 0;
      text-align: center;
      width: 100%;

      .container {
          margin-bottom: 9.5rem;
          max-width: 900px;

          @include medium {
              max-width: 600px;
          }

          @include small {
              margin-bottom: 6rem;
          }
      }

      section {
          padding-bottom: 2rem;

          .tile {
              cursor: pointer;
              overflow: hidden;
              padding: 4rem 2rem 0;

              @include medium {
                  padding: 4rem 2rem 0;
              }

              &:hover {
                  p::after {
                      transform: scale3d(1, 1, 1);
                  }

                  img {
                      transform: scale3d(1.025, 1.025, 1.025);
                      transform-origin: bottom;
                  }
              }

              p {
                  display: inline-block;
                  margin-bottom: 1rem;
                  position: relative;

                  @include medium {
                      margin-bottom: 2rem;
                  }

                  &::after {
                      background: $color-light;
                      bottom: -.2rem;
                      content: '';
                      height: 2px;
                      position: absolute;
                      right: 0;
                      transform: scale3d(0, 1, 1);
                      transform-origin: right;
                      transition: all .3s cubic-bezier(.19, 1, .22, 1);
                      width: 100%;
                  }
              }

              img {
                  max-width: 900px;
                  transition: transform 2s cubic-bezier(.19, 1, .22, 1);
                  width: 70%;

                  @include small {
                      width: 80%;
                  }

                  @include small {
                      width: 90%;
                  }
              }
          }
      }
  }
</style>

<script>
  import json from '../projects.json'

  export default {
    name: 'Projects',
    data() {
      return {
        projects: json
      }
    },
    mounted() {
      document.title = "Oli Heslington — Graphic Designer"
    }
  }
</script>

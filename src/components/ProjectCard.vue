<template>
  <div class="project-card">
    <!-- Display Project Data -->
    <div class="grid GradientLockup_root__sBkgs mb-20">
      <div
        class="col-start-2 col-end-3 lg:col-start-1 lg:col-end-5 row-start-2 row-end-4 lg:row-end-5 lg:py-10 xl:py-16 flex -ml-8 pr-4 sm:ml-0 sm:pr-0"
      >
        <!--<div class="bg-gray-100 w-full flex-none rounded-3xl"></div>-->
        <div
          class="w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-yellow-300 to-pink-600 rotate-1"
        ></div>
      </div>
      <div :class="[classProject]">
        <div
          class="relative z-10 bg-white rounded-tr-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 xl:mr-4"
        >
          <article class="text-gray-600 leading-6">
            <h2
              class="text-2xl sm:text-3xl font-semibold text-black px-4 py-6 sm:px-6 pb-1"
            >
              {{ project.title }}
            </h2>
            <dl
              class="flex flex-wrap divide-y divide-gray-200 border-b border-gray-200"
            >
              <div class="px-4 sm:px-6 pb-6">
                <dt class="sr-only">Description</dt>
                <dd class="text-sm sm:text-base">
                  {{ project.description }}
                </dd>
              </div>
              <div class="w-full flex-none flex items-baseline py-4">
                <dt
                  class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide"
                >
                  Type
                </dt>
                <dd class="text-black text-sm sm:text-base">
                  {{ project.category }}
                </dd>
              </div>
              <div class="w-full flex-none flex items-baseline py-4">
                <dt
                  class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide"
                >
                  Date
                </dt>
                <dd class="italic text-sm sm:text-base">{{ project.date }}</dd>
              </div>
              <div class="w-full flex-none flex items-center pr-2 py-4">
                <dt
                  class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide"
                >
                  Stack
                </dt>
                <dd
                  class="text-sm sm:text-base font-medium text-gray-700 bg-gray-100 rounded-2xl py-1 pl-2 pr-4 flex flex-wrap justify-center items-center"
                >
                  <div v-for="stack in project.stack" :key="stack.id">
                    <img class="mr-1" :alt="stack.name" :src="stack.src" />
                  </div>
                </dd>
              </div>
            </dl>
            <div class="grid grid-cols-2 gap-4 px-4 sm:px-6 py-4">
              <div
                class="text-xl font-bold rounded-lg bg-blue-500 text-black py-2 text-center cursor-pointer"
              >
                <a href="https://readokids.app/" target="_blank"
                  >Visit Website</a
                >
              </div>
              <div
                class="text-xl font-bold rounded-lg bg-gray-400 text-black py-2 text-center cursor-pointer"
              >
                <router-link
                  :to="{ name: 'ProjectDetails', params: { id: project.id } }"
                  >View Details</router-link
                >
              </div>
            </div>
          </article>
        </div>
      </div>
      <div :class="[classProject2]">
        <div
          class="relative overflow-hidden md:rounded-xl shadow-2xl flex CodeWindow_root__1fMBP ComponentDriven_atApplyCodeWindow__3MpJZ bg-pink-600"
        >
          <div class="absolute inset-0 bg-black bg-opacity-75"></div>
          <div class="relative w-full flex flex-col">
            <div class="flex-none h-11 flex items-center px-4">
              <div class="flex space-x-1.5">
                <div class="w-3 h-3 border-2 rounded-full border-red-500"></div>
                <div
                  class="w-3 h-3 border-2 rounded-full border-amber-400"
                ></div>
                <div
                  class="w-3 h-3 border-2 rounded-full border-green-400"
                ></div>
              </div>
            </div>
            <div
              class="relative border-t border-white border-opacity-10 min-h-0 flex-auto flex flex-col"
            >
              <div
                class="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25"
                style="width: 50px"
              ></div>
              <div class="relative flex text-sm bg-pink-1000 text-pink-200">
                <h3
                  class="border border-transparent py-2 px-4 font-medium bg-white bg-opacity-10"
                >
                  reado-kids.png
                </h3>
              </div>
              <div class="flex-none">
                <div class="w-full flex-auto flex min-h-0 overflow-auto mb-10">
                  <div class="w-full relative flex-auto">
                    <pre class="flex min-h-full text-xs md:text-sm">
                      <div aria-hidden="true" class="hidden md:block text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none" style="width:50px"></div>
                      <code class="w-full flex justify-center overflow-auto">
                        <img class="" alt="Reado-kids" src="@/assets/reado2.png" />
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {
      classProject:
        "lg:col-start-2 lg:col-end-3 relative col-start-2 col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 self-center pr-8 sm:px-6 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0",
      classProject2:
        "relative w-full lg:w-auto col-start-1 col-end-4 md:px-8 lg:px-0 lg:col-start-3 lg:col-end-4 row-start-3 row-end-4 lg:row-start-2 lg:row-end-5 self-center pb-8 lg:pb-0",
    };
  },
  created() {
    if (!(this.project?.id % 2)) {
      this.classProject =
        "lg:col-start-3 lg:col-end-4 relative col-start-2 col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 self-center pr-8 sm:px-6 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0";
      this.classProject2 =
        "relative w-full lg:w-auto col-start-1 col-end-4 md:px-8 lg:px-0 lg:col-start-2 lg:col-end-3 row-start-3 row-end-4 lg:row-start-2 lg:row-end-5 self-center pb-8 lg:pb-0";
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project-card {
  @apply mt-10;
  @apply p-0;
}
.GradientLockup_root__sBkgs {
  grid-template-columns: 2rem 1fr 52.5% 2rem;
}

.grid {
  display: grid;
}

.ComponentDriven_atApplyCodeWindow__3MpJZ {
  height: auto;
  max-height: none;
}
</style>

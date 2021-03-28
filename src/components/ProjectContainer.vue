<template>
  <div class="max-w-7xl mx-auto flex flex-col">
    <div class="w-full border-b-2 border-blue-200 text-left mb-20">
      <h1 class="mb-2 text-2xl">Recent Projects</h1>
    </div>
    <div class="grid GradientLockup_root__sBkgs">
      <div
        class="col-start-2 col-end-3 lg:col-start-1 lg:col-end-5 row-start-2 row-end-4 lg:row-end-5 lg:py-10 xl:py-16 flex -ml-8 pr-4 sm:ml-0 sm:pr-0"
      >
        <div class="bg-gray-100 w-full flex-none rounded-3xl"></div>
        <div
          class="w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-orange-400 to-pink-600 rotate-1"
        ></div>
      </div>
      <div
        class="relative col-start-2 col-end-3 lg:col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 self-center pr-8 sm:px-6 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0"
      >
        <div
          class="relative z-10 bg-white rounded-tr-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 xl:mr-4"
        >
          <article class="text-gray-600 leading-6">
            <h2
              class="text-xl sm:text-2xl font-semibold text-black px-4 py-6 sm:px-6 pb-1"
            >
              Reado Kids
            </h2>
            <dl
              class="flex flex-wrap divide-y divide-gray-200 border-b border-gray-200"
            >
              <div class="px-4 sm:px-6 pb-6">
                <dt class="sr-only">Date</dt>
                <dd class="text-sm sm:text-base">
                  <time date="2020-10-01">October, 2020</time>
                </dd>
              </div>
              <div
                class="w-full flex-none flex items-baseline px-4 sm:px-6 py-4"
              >
                <dt
                  class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide"
                >
                  Type
                </dt>
                <dd class="text-black text-sm sm:text-base">Front-End</dd>
              </div>
              <div
                class="w-full flex-none flex items-baseline px-4 sm:px-6 py-4"
              >
                <dt
                  class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide"
                >
                  Description
                </dt>
                <dd class="italic text-sm sm:text-base">
                  Reado Kids description
                </dd>
              </div>
              <div class="w-full flex-none flex items-center px-4 sm:px-6 py-4">
                <dt
                  class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide"
                >
                  Stack
                </dt>
                <dd
                  class="text-sm sm:text-base font-medium text-gray-700 bg-gray-100 rounded-full py-1 pl-2 pr-4 flex items-center"
                >
                  ReactJs, Javascript, TailwindCSS, Apollo Client, Netlify
                </dd>
              </div>
            </dl>
            <div class="grid grid-cols-1 px-4 sm:px-6 py-4">
              <div
                class="text-base font-medium rounded-lg bg-gray-100 text-black py-3 text-center cursor-pointer"
              >
                <a href="https://readokids.app/" target="_blank"
                  >Visit Website</a
                >
              </div>
            </div>
          </article>
        </div>
      </div>
      <div
        class="relative w-full lg:w-auto col-start-1 col-end-4 md:px-8 lg:px-0 lg:col-start-3 lg:col-end-4 row-start-3 row-end-4 lg:row-start-2 lg:row-end-5 self-center pb-8 lg:pb-0"
      >
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
                <div class="w-full flex-auto flex min-h-0 overflow-auto">
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
  name: "ProjectContainer",
});
</script>

<style lang="scss">
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

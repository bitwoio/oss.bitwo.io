<template>
  <div class="drawer">
    <input id="oss_bitwo" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <TheMenu />
      <main>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 class="text-5xl font-bold">Box Office News!</h1>
              <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <slot />
      </main>
      <TheFooter />
    </div>
    <div class="drawer-side">
      <label for="oss_bitwo" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 md:w-1/3 h-full bg-base-200">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

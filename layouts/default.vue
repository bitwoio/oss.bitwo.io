<template>
  <div class="drawer">
    <input id="oss_bitwo" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <TheMenu />
      <main class="p-4">
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

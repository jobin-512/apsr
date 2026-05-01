<script lang="ts">
  import dashboard from "$lib/assets/packages/mobile-apps/1.webp";
  import analytics from "$lib/assets/packages/mobile-apps/2.webp";
  import profile from "$lib/assets/packages/mobile-apps/3.webp";

  let active = $state(0);

  const tabs = [
    { name: "Dashboard", img: dashboard },
    { name: "Analytics", img: analytics },
    { name: "User Profile", img: profile }
  ];
</script>

<section class="relative bg-[#02140a] text-white py-40 overflow-hidden">

  <!-- 🔥 ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-lime-400/10 blur-[140px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] bg-green-900/30 blur-[120px] rounded-full"></div>
  </div>

  <div class="relative max-w-6xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="text-center mb-20">
      <h2 class="text-[42px] md:text-[72px] leading-tight font-semibold">
        See how your app
        <span class="text-lime-400">comes to life</span>
      </h2>
      <p class="text-gray-400 mt-4 max-w-xl mx-auto">
        Experience the interface, interactions, and flow your users will love.
      </p>
    </div>

    <!-- 🔥 DEMO WRAPPER -->
    <div class="flex flex-col items-center">

      <!-- PHONE -->
      <div class="relative w-[260px] md:w-[320px] h-[520px] md:h-[640px] rounded-[40px] border border-white/10 bg-black overflow-hidden shadow-2xl">

        <!-- screen transition -->
        {#each tabs as tab, i}
          <img
            src={tab.img}
            alt={tab.name}
            class="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            class:opacity-100={active === i}
            class:opacity-0={active !== i}
            class:scale-100={active === i}
            class:scale-105={active !== i}
          />
        {/each}

        <!-- glass reflection -->
        <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

      </div>

      <!-- 🔥 TABS -->
      <div class="mt-10 flex gap-3 flex-wrap justify-center">

        {#each tabs as tab, i}

          <button
            on:click={() => active = i}
            class="relative px-5 py-2 rounded-full text-sm transition border border-white/10"
            class:bg-lime-400={active === i}
            class:text-black={active === i}
          >

            {tab.name}

            <!-- glow underline -->
            {#if active === i}
              <div class="absolute inset-0 rounded-full bg-lime-400/20 blur-lg"></div>
            {/if}

          </button>

        {/each}

      </div>

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
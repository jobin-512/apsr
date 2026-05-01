<script lang="ts">
  import { onMount } from 'svelte';
  import { onLenisScroll } from '$lib/utils/lenis';

  import s1 from "$lib/assets/services/mobile/1.webp";
  import s2 from "$lib/assets/services/mobile/2.webp";
  import s3 from "$lib/assets/services/mobile/3.webp";

  let active = $state(0);

  let phone: HTMLElement;

  function updateScroll() {
    if (!phone) return;

    const rect = phone.getBoundingClientRect();
    const vh = window.innerHeight;

    const progress = 1 - rect.top / vh;

    if (progress > 0.2 && progress < 0.4) active = 0;
    else if (progress >= 0.4 && progress < 0.7) active = 1;
    else if (progress >= 0.7) active = 2;
  }

  onMount(() => {
    onLenisScroll(() => {
      updateScroll();
    });
  });
</script>

<section class="relative bg-[#020f05] text-white py-40 overflow-hidden">

  <!-- 🔥 ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-lime-400/10 blur-[160px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-green-900/40 blur-[140px] rounded-full"></div>
  </div>

  <div class="relative max-w-6xl mx-auto px-6 md:px-20 text-center">

    <!-- HEADER -->
    <div class="mb-24 max-w-2xl mx-auto">
      <h2 class="text-[42px] md:text-[72px] leading-tight font-semibold">
        Designed for
        <span class="text-lime-400">real users</span>
      </h2>
      <p class="text-gray-400 mt-4">
        Every screen, interaction, and flow is crafted to feel intuitive and addictive.
      </p>
    </div>

    <!-- 🔥 EXPERIENCE WRAPPER -->
    <div class="relative flex justify-center items-center">

      <!-- floating bg cards -->
      <img src={s2} class="absolute left-[5%] w-[180px] opacity-20 rotate-[-12deg] blur-sm hidden md:block"/>
      <img src={s3} class="absolute right-[5%] w-[180px] opacity-20 rotate-[12deg] blur-sm hidden md:block"/>

      <!-- 🔥 PHONE -->
      <div
        bind:this={phone}
        class="relative w-[260px] md:w-[320px] h-[520px] md:h-[640px] rounded-[40px] border border-white/10 bg-black overflow-hidden shadow-2xl"
      >

        {#each [s1, s2, s3] as screen, i}
          <img
            src={screen}
            class="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            class:opacity-100={active === i}
            class:opacity-0={active !== i}
            class:scale-100={active === i}
            class:scale-105={active !== i}
          />
        {/each}

        <!-- glass overlay -->
        <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

      </div>

    </div>

    <!-- 🔥 STEP INDICATOR -->
    <div class="flex justify-center gap-3 mt-10">

      {#each [0,1,2] as i}
        <div
          class="w-2.5 h-2.5 rounded-full transition-all duration-300"
          class:bg-lime-400={active === i}
          class:bg-white={active !== i}
        ></div>
      {/each}

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
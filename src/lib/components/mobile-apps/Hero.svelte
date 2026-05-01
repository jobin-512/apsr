<script lang="ts">
  import app1 from "$lib/assets/packages/mobile-apps/app1.webp";
  import app2 from "$lib/assets/packages/mobile-apps/app2.webp";
  import app3 from "$lib/assets/packages/mobile-apps/app3.webp";

  let hovered = $state(-1);

  const apps = [
    { img: app1, title: "E-commerce App" },
    { img: app2, title: "Fitness Tracker" },
    { img: app3, title: "Fintech Dashboard" }
  ];    
</script>

<section class="relative bg-[#020f05] text-white py-32 overflow-hidden">

  <!-- 🔥 Ambient Glow -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[10%] w-125 h-125 bg-lime-400/10 blur-[140px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-100 h-100 bg-green-900/30 blur-[120px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20">

    <!-- 🔥 TEXT -->
    <div class="max-w-3xl mb-20">

      <h1 class="text-[42px] md:text-[72px] leading-[1.1] font-semibold">
        Mobile apps that feel 
        <span class="text-lime-400">next-gen</span>
      </h1>

      <p class="text-gray-400 mt-6 text-lg max-w-xl">
        We design and develop high-performance mobile apps that are fast, scalable, 
        and built to convert users into loyal customers.
      </p>

      <!-- CTA -->
      <div class="mt-8 flex flex-wrap gap-4">
        <a href="/get-started"
          class="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-white transition">
          Start Your App
        </a>

        <a href="#packages"
          class="border border-white/10 px-6 py-3 rounded-full text-sm hover:border-lime-400 transition">
          View Packages
        </a>
      </div>

    </div>

    <!-- 🔥 APP SHOWCASE -->
    <div class="relative flex items-center flex-col md:flex-row justify-center md:items-end gap-6 md:gap-12">

      {#each apps as app, i}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <div
          class="relative transition-all duration-500"
          on:mouseenter={() => hovered = i}
          on:mouseleave={() => hovered = -1}
          class:scale-110={hovered === i}
          class:opacity-50={hovered !== -1 && hovered !== i}
        >

          <!-- phone frame -->
          <div class="w-40 md:w-55 h-80 md:h-110 rounded-[30px] border border-white/10 bg-black overflow-hidden shadow-2xl">

            <img src={app.img} alt={app.title}
              class="w-full h-full object-cover" />

          </div>

          <!-- label -->
          <div class="text-center mt-4 text-sm text-gray-400">
            {app.title}
          </div>

        </div>
      {/each}

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
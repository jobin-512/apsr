<script lang="ts">
  import { onMount } from 'svelte';
  import hero from '$lib/assets/services/website/hero.webp';

  let container: HTMLElement;

  let blocks = $state([
    { x: 20, y: 30, label: "UI" },
    { x: 60, y: 40, label: "UX" },
    { x: 40, y: 70, label: "Code" },
  ]);

  function handleMove(e: MouseEvent) {
    const rect = container.getBoundingClientRect();
    container.style.setProperty('--x', `${e.clientX - rect.left}px`);
    container.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }

  // subtle floating motion
  onMount(() => {
    const animate = () => {
      blocks = blocks.map(b => ({
        ...b,
        y: b.y + Math.sin(Date.now() / 1000 + b.x) * 0.03
      }));
      requestAnimationFrame(animate);
    };
    animate();
  });
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<section
  bind:this={container}
  on:mousemove={handleMove}
  class="relative bg-[#020f05] text-white overflow-hidden"
>

  <!-- glow -->
  <div class="glow"></div>

  <!-- grid overlay -->
  <div class="absolute inset-0 opacity-[0.06]">
    <div class="grid grid-cols-6 h-full">
      {#each Array(6) as _}
        <div class="border-r border-white/10"></div>
      {/each}
    </div>
    <div class="grid grid-rows-6 h-full absolute inset-0">
      {#each Array(6) as _}
        <div class="border-b border-white/10"></div>
      {/each}
    </div>
  </div>

  <!-- radial glow -->
  <div class="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-lime-400/10 blur-[180px]"></div>

  <div class="max-w-7xl mx-auto px-6 md:px-20 pt-32 pb-28 grid md:grid-cols-2 gap-20 items-center">

    <!-- LEFT -->
    <div class="relative z-10">

      <p class="text-[11px] tracking-[0.3em] text-gray-500 mb-6">
        WEB DESIGN & DEVELOPMENT
      </p>

      <h1 class="text-[48px] md:text-[72px] leading-[1.02] font-semibold">
        Build websites that <br />
        <span class="text-lime-400">convert and scale</span>
      </h1>

      <p class="mt-6 text-gray-400 max-w-[420px] text-[15px]">
        We design and develop high-performance websites engineered for speed, usability, and conversions.
      </p>

      <div class="mt-10 flex gap-6">
        <button class="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-medium hover:scale-[1.05] transition">
          Start a Project
        </button>

        <button class="text-sm text-gray-400 hover:text-white transition">
          View Work →
        </button>
      </div>

    </div>

    <!-- RIGHT VISUAL -->
    <div class="relative">

      <!-- main image -->
      <div class="relative border border-white/5 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-xl">
        <img src={hero} class="w-full h-[460px] object-cover opacity-70" />

        <!-- overlay UI panel -->
        <div class="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-5">

          <p class="text-xs text-gray-400 mb-3">PERFORMANCE</p>

          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span>Load Speed</span>
              <span class="text-lime-400">98/100</span>
            </div>
            <div class="flex justify-between">
              <span>SEO Score</span>
              <span class="text-lime-400">95/100</span>
            </div>
            <div class="flex justify-between">
              <span>Accessibility</span>
              <span class="text-lime-400">97/100</span>
            </div>
          </div>

        </div>
      </div>

      <!-- floating blocks -->
      {#each blocks as b}
        <div
          class="absolute text-xs text-gray-300 px-3 py-1 border border-white/10 rounded-md bg-black/30 backdrop-blur-md"
          style={`top:${b.y}%; left:${b.x}%`}
        >
          {b.label}
        </div>
      {/each}

    </div>

  </div>
</section>

<style>
  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      500px circle at var(--x) var(--y),
      rgba(163, 230, 53, 0.12),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  section:hover .glow {
    opacity: 1;
  }
</style>
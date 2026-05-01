<script>
  import { onMount } from 'svelte';
  import hero from '$lib/assets/services/seo/seo.webp';

  /**
   * @type {HTMLElement}
   */
  let container;
  let keywords = $state([
    { text: "best seo agency", x: 20, y: 30 },
    { text: "rank #1 google", x: 60, y: 50 },
    { text: "seo services india", x: 40, y: 70 }
  ]);

  // cursor glow
  /**
   * @param {{ clientX: number; clientY: number; }} e
   */
  function handleMove(e) {
    const rect = container.getBoundingClientRect();
    container.style.setProperty('--x', `${e.clientX - rect.left}px`);
    container.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }

  // floating animation
  onMount(() => {
    const animate = () => {
      keywords = keywords.map(k => ({
        ...k,
        y: k.y + Math.sin(Date.now() / 1000 + k.x) * 0.05
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

  <!-- 🔥 cursor glow -->
  <div class="glow"></div>

  <!-- 🔥 radial background -->
  <div class="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-lime-400/10 blur-[180px]"></div>

  <div class="max-w-7xl mx-auto px-6 md:px-20 pt-32 pb-28 grid md:grid-cols-2 gap-20 items-center">

    <!-- LEFT -->
    <div class="relative z-10">

      <p class="text-[11px] tracking-[0.3em] text-gray-500 mb-6">
        SEO ENGINE
      </p>

      <h1 class="text-[48px] md:text-[72px] leading-[1.02]  text-4xl font-semibold">
        Turn search into <br />
        <span class="text-lime-400">a growth engine</span>
      </h1>

      <p class="mt-6 text-gray-400 max-w-105 text-[15px]">
        We design SEO systems that continuously generate traffic, leads, and revenue — not just rankings.
      </p>

      <div class="mt-10 flex gap-6">
        <button class="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-medium hover:scale-[1.05] transition">
          Get SEO Audit
        </button>

        <button class="text-sm text-gray-400 hover:text-white transition">
          See Results →
        </button>
      </div>

    </div>

    <!-- RIGHT VISUAL -->
    <div class="relative">

      <!-- image -->
      <div class="relative border border-white/5 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-xl">
        <!-- svelte-ignore a11y_missing_attribute -->
        <img src={hero} class="w-full h-115 object-cover opacity-70" />

        <!-- overlay gradient -->
        <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

        <!-- fake ranking UI -->
        <div class="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-5">

          <p class="text-xs text-gray-400 mb-3">LIVE RANKING</p>

          <div class="space-y-2 text-sm">

            <div class="flex justify-between">
              <span>seo services</span>
              <span class="text-lime-400">#1 ↑</span>
            </div>

            <div class="flex justify-between">
              <span>digital growth agency</span>
              <span class="text-lime-400">#3 ↑</span>
            </div>

            <div class="flex justify-between">
              <span>conversion optimization</span>
              <span class="text-lime-400">#5 ↑</span>
            </div>

          </div>
        </div>
      </div>

      <!-- floating keywords -->
      {#each keywords as k}
        <div
          class="absolute text-xs text-gray-400 px-3 py-1 border border-white/10 rounded-full bg-black/30 backdrop-blur-md"
          style={`top:${k.y}%; left:${k.x}%`}
        >
          {k.text}
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
      rgba(163, 230, 53, 0.15),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  section:hover .glow {
    opacity: 1; 
  }
</style>
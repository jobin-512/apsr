<script lang="ts">
  function handleMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  }
</script>

<section class="relative bg-[#020f05] text-white py-40 overflow-hidden">

  <!-- ambient glow -->
  <div class="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-lime-400/10 blur-[180px]"></div>

  <div class="max-w-5xl mx-auto px-6 md:px-20 text-center">

    <!-- label -->
    <p class="text-[11px] tracking-[0.3em] text-gray-500 mb-6">
      SEO PACKAGES
    </p>

    <!-- BIG HEADING -->
    <h1 class="text-[52px] md:text-[84px] leading-[1.05] font-semibold mb-10">
      Rank higher. <br />
      <span class="text-lime-400">Grow faster.</span>
    </h1>

    <!-- description -->
    <p class="text-gray-400 max-w-[520px] mx-auto mb-16">
      Our SEO packages are designed to deliver consistent growth — not just rankings.
      Built for businesses that want long-term visibility and real ROI.
    </p>

    <!-- interactive trust strip -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore event_directive_deprecated -->
    <div
      class="relative mx-auto max-w-xl h-[120px] rounded-2xl border border-white/10 overflow-hidden"
      on:mousemove={handleMove}
    >
      <div class="glow"></div>

      <div class="relative z-10 flex items-center justify-center h-full">
        <span class="text-lg text-gray-300">
          No shortcuts • No spam • Only sustainable growth
        </span>
      </div>
    </div>

  </div>
</section>

<style>
  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      400px circle at var(--x) var(--y),
      rgba(163,230,53,0.15),
      transparent 60%
    );
    opacity: 0;
    transition: 0.3s;
  }

  div:hover .glow {
    opacity: 1;
  }
</style>
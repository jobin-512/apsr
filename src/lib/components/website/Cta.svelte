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
  <div class="absolute -top-75 left-1/2 -translate-x-1/2 w-250 h-250 bg-lime-400/10 blur-[200px]"></div>

  <div class="max-w-5xl mx-auto px-6 md:px-20 text-center">

    <!-- 🔥 MASSIVE HEADING -->
    <h2 class="text-[52px] md:text-[84px] leading-[1.05] font-semibold mb-10">
      Let’s build something <br />
      <span class="text-lime-400">that actually performs</span>
    </h2>

    <p class="text-gray-400 max-w-130 mx-auto mb-16">
      Not just another website. A high-performance system designed to convert, scale, and grow your business.
    </p>

    <!-- 🚀 PORTAL CTA -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore event_directive_deprecated -->
    <div
      class="portal group relative mx-auto w-full max-w-xl h-35 rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
      on:mousemove={handleMove}
    >

      <!-- glow -->
      <div class="portal-glow"></div>

      <!-- animated border -->
      <div class="border-flow"></div>

      <!-- content -->
      <div class="relative z-10 h-full flex items-center justify-center">

        <a href="/contact" class="text-xl font-medium tracking-wide group-hover:tracking-widest transition-all duration-300">
          Start Your Project →
        </a>

      </div>

    </div>

  </div>
</section>

<style>
  /* PORTAL BASE */
  .portal {
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(20px);
  }

  /* CURSOR GLOW */
  .portal-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      400px circle at var(--x) var(--y),
      rgba(163,230,53,0.2),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  .portal:hover .portal-glow {
    opacity: 1;
  }

  /* FLOWING BORDER */
  .border-flow {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(163,230,53,0.6),
      transparent
    );
    background-size: 200% 200%;
    animation: borderMove 3s linear infinite;
    mask: 
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
  }

  @keyframes borderMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
</style>
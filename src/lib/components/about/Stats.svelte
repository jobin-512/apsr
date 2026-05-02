<script lang="ts">
  import { onMount } from 'svelte';

  let stats = [
    { label: "Projects Delivered", value: 320, suffix: "+" },
    { label: "Avg. ROI Increase", value: 12, suffix: "x" },
    { label: "Client Retention", value: 98, suffix: "%" },
    { label: "Revenue Generated", value: 10, suffix: "Cr+" }
  ];

  let visible = $state(false);
  let counts = $state(stats.map(() => 0));

  function inView(node: HTMLElement) {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visible = true;
        animate();
        obs.disconnect();
      }
    }, { threshold: 0.3 });

    obs.observe(node);

    return {
      destroy() {
        obs.disconnect();
      }
    };
  }

  function animate() {
    stats.forEach((stat, i) => {
      let start = 0;
      const duration = 1200;
      const startTime = performance.now();

      function update(time: number) {
        const progress = Math.min((time - startTime) / duration, 1);
        counts[i] = Math.floor(progress * stat.value);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }
</script>

<section class="relative bg-[#020f05] text-white py-32 overflow-hidden">

  <!-- glow -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-lime-400/10 blur-[160px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="max-w-2xl mb-16">
      <h2 class="text-[38px] md:text-[60px] font-semibold leading-tight">
        Numbers that speak for themselves
      </h2>
      <p class="text-gray-400 mt-4">
        Real impact, measurable growth, and consistent results across projects.
      </p>
    </div>

    <!-- GRID -->
    <div
      use:inView
      class="grid grid-cols-2 md:grid-cols-4 gap-6"
    >

      {#each stats as stat, i}

        <div class="card group">

          <!-- VALUE -->
          <div class="text-[36px] md:text-[48px] font-bold text-lime-400">
            {counts[i]}{stat.suffix}
          </div>

          <!-- LABEL -->
          <div class="text-gray-400 text-sm mt-2">
            {stat.label}
          </div>

          <!-- hover glow -->
          <div class="glow"></div>

        </div>

      {/each}

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }

  .card {
    position: relative;
    padding: 24px;
    border-radius: 16px;
    background: rgba(0,0,0,0.4);
    border: 1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(12px);
    transition: 0.3s;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-6px);
    border-color: rgba(163,230,53,0.4);
  }

  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(163,230,53,0.15), transparent 70%);
    opacity: 0;
    transition: 0.4s;
  }

  .card:hover .glow {
    opacity: 1;
  }
</style>
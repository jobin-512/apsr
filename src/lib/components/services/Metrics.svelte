<script>
  import { onMount } from 'svelte';

  const stats = [
    { label: "Revenue Growth", value: 320, suffix: "%" },
    { label: "Return on Ad Spend", value: 12, suffix: "x" },
    { label: "Client Retention", value: 98, suffix: "%" },
    { label: "Avg Conversion Lift", value: 45, suffix: "%" }
  ];

  /**
   * @type {Element[]}
   */
  let refs = $state([]);
  let values = $state(stats.map(() => 0));
  /**
   * @type {boolean[]}
   */
  let animated = $state([]);

  /**
   * @param {number} index
   * @param {number} target
   */
  function animateCount(index, target) {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    /**
     * @param {number} time
     */
    function update(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      values[index] = Math.floor(eased * target);

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.indexOf(entry.target);

          if (entry.isIntersecting && !animated[index]) {
            animateCount(index, stats[index].value);
            animated[index] = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((el) => observer.observe(el));
  });

  /**
   * @param {MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }} e
   * @param {EventTarget & HTMLDivElement} el
   */
  function handleMove(e, el) {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }
</script>

<section class="bg-[#02140a] text-white">
  <div class="max-w-6xl mx-auto px-6 md:px-20 py-32">

    <!-- HEADER -->
    <div class="mb-20">
      <p class="text-[11px] tracking-[0.25em] text-gray-500 mb-4">
        RESULTS
      </p>

      <h2 class="text-[34px] md:text-[48px] font-semibold tracking-tight">
        Real impact. <br />
        <span class="text-lime-400">Measured and optimized.</span>
      </h2>
    </div>

    <!-- GRID -->
    <div class="grid md:grid-cols-2 gap-8">

      {#each stats as stat, i}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <div
          bind:this={refs[i]}
          class="metric-card group relative p-8 rounded-2xl border border-white/5 bg-black/30 backdrop-blur-xl overflow-hidden transition duration-500 hover:scale-[1.02]"
          on:mousemove={(e) => handleMove(e, e.currentTarget)}
        >

          <!-- glow -->
          <div class="glow"></div>

          <!-- value -->
          <div class="text-[42px] md:text-[56px] font-semibold text-lime-400">
            {values[i]}{stat.suffix}
          </div>

          <!-- label -->
          <p class="mt-3 text-gray-400 text-sm">
            {stat.label}
          </p>

        </div>
      {/each}

    </div>

  </div>
</section>

<style>
  .metric-card {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
  }

  .metric-card:has(.glow) {
    will-change: transform;
  }

  .metric-card:nth-child(1),
  .metric-card:nth-child(2),
  .metric-card:nth-child(3),
  .metric-card:nth-child(4) {
    animation: fadeUp 0.9s ease forwards;
    animation-delay: calc(var(--i, 0) * 0.15s);
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* cursor glow */
  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      300px circle at var(--x) var(--y),
      rgba(163, 230, 53, 0.12),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  .metric-card:hover .glow {
    opacity: 1;
  }
</style>
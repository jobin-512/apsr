<script>
  const items = [
    {
      title: "Technical SEO",
      desc: "Deep audits, site architecture, indexing, and performance optimization."
    },
    {
      title: "Content Systems",
      desc: "Keyword-driven content that ranks and converts consistently."
    },
    {
      title: "Authority Building",
      desc: "High-quality backlinks and brand signals that move rankings."
    },
    {
      title: "Conversion SEO",
      desc: "Turning traffic into leads with UX and CRO optimization."
    }
  ];

  /**
   * @param {MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }} e
   * @param {EventTarget & HTMLDivElement} el
   */
  function handleMove(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    el.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;

    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  }

  /**
   * @param {EventTarget & HTMLDivElement} el
   */
  function reset(el) {
    el.style.transform = `
      perspective(800px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  }
</script>

<section class="relative bg-[#020f05] text-white py-32 overflow-hidden">

  <!-- background glow -->
  <div class="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-lime-400/10 blur-[180px]"></div>

  <div class="max-w-6xl mx-auto px-6 md:px-20">

    <!-- 🔥 BIG HEADING -->
    <div class="mb-24 text-4xl">
      <p class="text-[11px] tracking-[0.3em] text-gray-500 mb-6">
        CAPABILITIES
      </p>

      <h2 class="text-[48px] md:text-[72px] leading-[1.05] font-semibold">
        Everything you need to <br />
        <span class="text-lime-400">dominate search</span>
      </h2>
    </div>

    <!-- CARDS -->
    <div class="grid md:grid-cols-2 gap-10">

      {#each items as item}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <div
          class="card group relative p-8 rounded-2xl border border-white/5 bg-black/30 backdrop-blur-xl transition duration-300"
          on:mousemove={(e) => handleMove(e, e.currentTarget)}
          on:mouseleave={(e) => reset(e.currentTarget)}
        >

          <!-- glow -->
          <div class="glow"></div>

          <!-- content -->
          <h3 class="text-[22px] font-semibold mb-4">
            {item.title}
          </h3>

          <p class="text-gray-400 text-[14px] leading-relaxed">
            {item.desc}
          </p>

        </div>
      {/each}

    </div>

  </div>
</section>

<style>
  .card {
    transform-style: preserve-3d;
    will-change: transform;
  }

  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      300px circle at var(--x) var(--y),
      rgba(163, 230, 53, 0.15),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 1rem;
  }

  .card:hover .glow {
    opacity: 1;
  }
</style>
<script>
  import { onMount } from 'svelte';

  /**
   * @type {Element}
   */
  let container;
  let active = false;

  const steps = [
    { title: "Keywords", x: 10 },
    { title: "Traffic", x: 40 },
    { title: "Leads", x: 70 },
    { title: "Revenue", x: 90 }
  ];

  // svelte-ignore non_reactive_update
    let particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    progress: Math.random()
  }));

  // scroll activation
  onMount(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) active = true;
      },
      { threshold: 0.4 }
    );

    obs.observe(container);

    // animate particles
    const animate = () => {
      if (active) {
        particles = particles.map(p => ({
          ...p,
          progress: (p.progress + 0.003) % 1
        }));
      }
      requestAnimationFrame(animate);
    };

    animate();
  });

  // cursor glow
  /**
   * @param {{ clientX: number; clientY: number; }} e
   */
  function handleMove(e) {
    const rect = container.getBoundingClientRect();
    // @ts-ignore
    container.style.setProperty('--x', `${e.clientX - rect.left}px`);
    // @ts-ignore
    container.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<section
  bind:this={container}
  on:mousemove={handleMove}
  class="relative bg-[#02140a] text-white overflow-hidden py-32"
>

  <!-- glow -->
  <div class="glow"></div>

  <div class="max-w-6xl mx-auto px-6 md:px-20">

    <!-- TITLE -->
    <div class="mb-20">
      <p class="text-[11px] tracking-[0.3em] text-gray-500 mb-4">
        SYSTEM
      </p>

      <h2 class="text-[36px] md:text-[52px] font-semibold text-4xl">
        Your SEO becomes a <br />
        <span class="text-lime-400">predictable growth engine</span>
      </h2>
    </div>

    <!-- PIPELINE -->
    <div class="relative h-55 border-t border-b border-white/10">

      <!-- line -->
      <div class="absolute top-1/2 left-0 right-0 h-px bg-white/10"></div>

      <!-- steps -->
      {#each steps as step}
        <div
          class="absolute top-1/2 -translate-y-1/2 text-center"
          style={`left:${step.x}%`}
        >
          <div class="w-3 h-3 bg-lime-400 rounded-full mx-auto mb-3"></div>
          <p class="text-sm text-gray-300">{step.title}</p>
        </div>
      {/each}

      <!-- particles -->
      {#each particles as p}
        <div
          class="particle"
          style={`left:${p.progress * 100}%`}
        ></div>
      {/each}

    </div>

  </div>
</section>

<style>
  .particle {
    position: absolute;
    top: 50%;
    width: 6px;
    height: 6px;
    background: #a3e635;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0.8;
    box-shadow: 0 0 10px rgba(163, 230, 53, 0.6);
  }

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
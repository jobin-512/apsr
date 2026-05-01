<script lang="ts">
  import { onMount } from 'svelte';

  let activeLayer = $state(0);

  // particle system
  let particles = $state(Array.from({ length: 18 }, (_, i) => ({
    id: i,
    y: Math.random()
  })));

  const layers = [
    {
      title: "Frontend",
      items: ["Svelte", "Tailwind", "UI Systems", "Animations"]
    },
    {
      title: "Backend",
      items: ["APIs", "Database", "Auth", "Scalable Logic"]
    },
    {
      title: "Performance",
      items: ["SEO", "Speed", "Core Web Vitals", "Optimization"]
    }
  ];

  onMount(() => {
    // animate particles
    const animate = () => {
      particles = particles.map(p => ({
        ...p,
        y: (p.y + 0.003) % 1
      }));
      requestAnimationFrame(animate);
    };
    animate();

    // auto cycle layers
    const interval = setInterval(() => {
      activeLayer = (activeLayer + 1) % layers.length;
    }, 2600);

    return () => clearInterval(interval);
  });

  function setLayer(i: number) {
    activeLayer = i;
  }
</script>

<section class="relative bg-[#02140a] text-white py-36 overflow-hidden">

  <!-- background glow -->
  <div class="absolute -top-50 left-1/2 -translate-x-1/2 w-225 h-225 bg-lime-400/10 blur-[180px]"></div>

  <div class="max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-20 items-center">

    <!-- LEFT CONTENT -->
    <div>

      <p class="text-[11px] tracking-[0.3em] text-gray-500 mb-6">
        ENGINEERING
      </p>

      <h2 class="text-[48px] md:text-[64px] leading-[1.05] font-semibold">
        Built as a <br />
        <span class="text-lime-400">connected system</span>
      </h2>

      <p class="mt-6 text-gray-400 max-w-105 text-[15px]">
        Every layer works together — from frontend to backend to performance —
        creating fast, scalable, and conversion-driven websites.
      </p>

    </div>

    <!-- RIGHT PANEL -->
    <div class="relative">

      <div class="relative p-8 rounded-2xl border border-white/5 bg-black/30 backdrop-blur-xl overflow-hidden">

        <!-- PARTICLES -->
        {#each particles as p}
          <div
            class="particle"
            style={`top:${p.y * 100}%`}
          ></div>
        {/each}

        <!-- MAIN LINE -->
        <div class="line"></div>

        <!-- LAYERS -->
        <div class="relative space-y-10">

          {#each layers as layer, i}
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore event_directive_deprecated -->
            <div
              class="layer"
              class:active={activeLayer === i}
              on:mouseenter={() => setLayer(i)}
            >

              <div class="dot"></div>

              <h3>{layer.title}</h3>

              <div class="chips">
                {#each layer.items as item}
                  <span>{item}</span>
                {/each}
              </div>

            </div>
          {/each}

        </div>

      </div>

      <!-- floating label -->
      <div class="absolute -top-4 right-4 text-xs text-gray-400 border border-white/10 px-3 py-1 rounded-full bg-black/40 backdrop-blur">
        System Architecture
      </div>

    </div>

  </div>
</section>

<style>
  /* PARTICLES (data flow) */
  .particle {
    position: absolute;
    left: 22px;
    width: 6px;
    height: 6px;
    background: #a3e635;
    border-radius: 50%;
    opacity: 0.7;
    box-shadow: 0 0 10px rgba(163,230,53,0.6);
  }

  /* VERTICAL LINE */
  .line {
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(163,230,53,0.2);
  }

  /* LAYER BLOCK */
  .layer {
    position: relative;
    padding-left: 40px;
    opacity: 0.4;
    transform: scale(0.96);
    transition: all 0.4s ease;
    cursor: pointer;
  }

  .layer.active {
    opacity: 1;
    transform: scale(1);
  }

  /* NODE DOT */
  .dot {
    position: absolute;
    left: 18px;
    top: 6px;
    width: 10px;
    height: 10px;
    background: #a3e635;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(163,230,53,0.7);
  }

  /* TITLES */
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  /* TECH CHIPS */
  .chips {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .chips span {
    font-size: 11px;
    padding: 5px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.1);
    color: #d1d5db;
    transition: all 0.3s ease;
  }

  .layer.active .chips span {
    border-color: rgba(163,230,53,0.5);
    color: #a3e635;
  }
</style>
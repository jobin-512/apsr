<script lang="ts">
  import { onMount } from 'svelte';
  import { onLenisScroll } from '$lib/utils/lenis';

  let container: HTMLElement;
  let progress = $state(0);

  const steps = [
    { title: "Structure", desc: "Wireframes, layout, UX flow" },
    { title: "Design", desc: "UI systems, branding, visuals" },
    { title: "Development", desc: "Clean, scalable code" },
    { title: "Performance", desc: "Speed, SEO, optimization" }
  ];

  function handleScroll() {
    const rect = container.getBoundingClientRect();
    const vh = window.innerHeight;

    const scrolled = Math.min(Math.max((vh - rect.top) / vh, 0), 1);
    progress = scrolled;
  }

  onMount(() => {
    onLenisScroll((scroll) => {
        handleScroll();
    });

    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section
  bind:this={container}
  class="relative bg-[#02140a] text-white h-[120vh]"
>

  <!-- sticky container -->
  <div class="sticky top-0 h-screen flex items-center">

    <div class="max-w-6xl mx-auto px-6 md:px-20 w-full">

      <!-- 🔥 BIG HEADING -->
      <div class="mb-20">
        <p class="text-[11px] tracking-[0.3em] text-gray-500 mb-6">
          PROCESS
        </p>

        <h2 class="text-[48px] md:text-[72px] leading-[1.05] font-semibold">
          We build websites like <br />
          <span class="text-lime-400">a structured system</span>
        </h2>
      </div>

      <!-- STACK -->
      <div class="relative h-75">

        {#each steps as step, i}
  {@const start = i * 0.2}
  {@const end = start + 0.4}
  {@const local = Math.min(Math.max((progress - start) / (end - start), 0), 1)}

  <div
    class="absolute left-0 right-0 p-6 rounded-xl border border-white/5 bg-black/30 backdrop-blur-xl transition-all duration-500"
    style={`
      transform:
        translateY(${(i * 80) - (local * 120)}px)
        translateX(${i * 10}px)
        scale(${1 - i * 0.04});
      opacity: ${local};
      z-index: ${20 - i};
    `}
  >

    <p class="text-lime-400 text-xs mb-2">
      0{i + 1}
    </p>

    <h3 class="text-[20px] font-semibold">
      {step.title}
    </h3>

    <p class="text-gray-400 text-sm mt-2">
      {step.desc}
    </p>

  </div>
{/each}

      </div>

    </div>

  </div>

</section>
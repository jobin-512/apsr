<script lang="ts">
  import { onMount } from 'svelte';
  import { onLenisScroll } from '$lib/utils/lenis';

  let elements: HTMLElement[] = [];

  const steps = [
    {
      title: "Understand Your Needs",
      desc: "We analyze your workflows, tasks, and bottlenecks to identify exactly what you need."
    },
    {
      title: "Assign the Right VA",
      desc: "We match you with a skilled assistant based on your business requirements."
    },
    {
      title: "Onboarding & Setup",
      desc: "We integrate into your tools, processes, and communication channels."
    },
    {
      title: "Execution Begins",
      desc: "Your assistant starts handling tasks while you stay focused on growth."
    },
    {
      title: "Track & Optimize",
      desc: "We continuously monitor performance and improve efficiency."
    }
  ];

  function setEl(el: HTMLElement | null, i: number) {
    if (el) elements[i] = el;
  }

  function reveal() {
    elements.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.remove("opacity-0")
        el.classList.add('show');
      }
    });
  }

  onMount(() => {
    onLenisScroll(() => {
      reveal();
    });
  });
</script>

<section class="relative bg-[#020f05] text-white py-40 overflow-hidden">

  <!-- 🔥 ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-lime-400/10 blur-[160px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-green-900/40 blur-[140px] rounded-full"></div>
  </div>

  <div class="relative max-w-6xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="mb-20 max-w-2xl">
      <h2 class="text-[42px] md:text-[72px] leading-tight font-semibold">
        A simple system that
        <span class="text-lime-400">just works.</span>
      </h2>
      <p class="text-gray-400 mt-4">
        No complexity. No confusion. Just a smooth process from start to scale.
      </p>
    </div>

    <!-- 🔥 FLOW -->
    <div class="relative">

      <!-- vertical line -->
      <div class="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10"></div>

      <div class="space-y-16">

        {#each steps as step, i}

          <div
            bind:this={elements[i]}
            class="step opacity-0 translate-y-10 transition-all duration-700"
          >

            <div class="flex items-start gap-6">

              <!-- step number -->
              <div class="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-lime-400/20 text-lime-400 font-semibold">
                {i + 1}
              </div>

              <!-- content -->
              <div class="group relative p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl w-full">

                <!-- glow -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-lime-400/5 blur-xl"></div>

                <h3 class="text-lg font-semibold mb-2 group-hover:text-lime-400 transition">
                  {step.title}
                </h3>

                <p class="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>

              </div>

            </div>

          </div>

        {/each}

      </div>

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }

  .show {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
</style>
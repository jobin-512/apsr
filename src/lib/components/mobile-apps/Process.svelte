<script lang="ts">
  import { onMount } from 'svelte';
  import { onLenisScroll } from "$lib/utils/lenis"; // adjust path if needed

  let steps = [
    {
      title: "Discovery",
      desc: "We deeply understand your idea, users, and business goals before writing a single line of code."
    },
    {
      title: "UX Strategy",
      desc: "We design flows that are intuitive, engaging, and built for conversion."
    },
    {
      title: "UI Design",
      desc: "Pixel-perfect interfaces that feel modern, fast, and premium."
    },
    {
      title: "Development",
      desc: "Clean, scalable architecture using best-in-class technologies."
    },
    {
      title: "Testing",
      desc: "We rigorously test performance, usability, and edge cases."
    },
    {
      title: "Launch & Scale",
      desc: "We deploy your app and help you grow with continuous improvements."
    }
  ];

  let elements: HTMLElement[] = [];

  function setEl(el: HTMLElement | null, i: number) {
    if (el) elements[i] = el;
  }

  function reveal() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach((el, i) => {
      if (!el) return;

      const rect = el.getBoundingClientRect();

      if (rect.top < trigger) {
        el.classList.remove("opacity-0")
        el.classList.add('show');

        // 🔥 optional micro interaction (INSANE feel)
        el.style.transform = `translateY(${Math.max(0, rect.top * 0.08)}px)`;
      }
    });
  }

  onMount(() => {
    // 🔥 attach to Lenis
    onLenisScroll(() => {
      reveal();
    });

    // run once on load
    reveal();
  });
</script>

<section class="relative bg-[#020f05] text-white py-40 overflow-hidden">

  <!-- 🔥 ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-lime-400/10 blur-[160px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-green-900/40 blur-[140px] rounded-full"></div>
  </div>

  <div class="relative max-w-6xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="mb-24 max-w-2xl">
      <h2 class="text-[42px] md:text-[72px] leading-tight font-semibold">
        A process built for
        <span class="text-lime-400">results</span>
      </h2>
      <p class="text-gray-400 mt-4">
        Every step is designed to maximize performance, speed, and scalability.
      </p>
    </div>

    <!-- 🔥 TIMELINE -->
    <div class="relative">

      <!-- vertical line -->
      <div class="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-[2px] bg-white/10"></div>

      <div class="space-y-20">

        {#each steps as step, i}

            <div
                bind:this={elements[i]}
                class="relative opacity-0 translate-y-20 transition-all duration-700"
                style="transition-delay:{i * 120}ms"
            >

            <!-- 🔥 DOT -->
            <div class="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-lime-400/20 border border-lime-400/40 flex items-center justify-center text-xs text-lime-400">
              {i + 1}
            </div>

            <!-- 🔥 CONTENT -->
            <div class="ml-14 md:ml-0 md:grid md:grid-cols-2 md:gap-16 items-center">

              <!-- LEFT (number) -->
              <div class="hidden md:block text-right pr-10">
                <div class="text-[64px] font-bold text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <!-- RIGHT (card) -->
              <div class="relative p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]">

                <h3 class="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p class="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>

                <!-- glow -->
                <div class="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 bg-lime-400/5 blur-xl"></div>

              </div>

            </div>

          </div>

        {/each}

      </div>

    </div>

  </div>

</section>

<style>
  .show {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .card:hover {
  transform: scale(1.03) translateY(-4px);
}
</style>
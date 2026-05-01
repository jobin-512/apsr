<script lang="ts">
  let steps = [
    {
      title: "Audit & Research",
      desc: "We analyze your website, competitors, and search landscape."
    },
    {
      title: "Keyword Strategy",
      desc: "We build a data-driven keyword plan aligned with your goals."
    },
    {
      title: "On-Page Optimization",
      desc: "We optimize pages and structure for better visibility."
    },
    {
      title: "Authority Building",
      desc: "We build high-quality backlinks to improve authority."
    },
    {
      title: "AI & Search Optimization",
      desc: "We optimize for AI search and voice queries."
    },
    {
      title: "Tracking & Scaling",
      desc: "We track performance and scale what works."
    }
  ];
</script>

<section class="bg-[#020f05] text-white py-24 md:py-32 overflow-hidden">

  <div class="max-w-7xl mx-auto px-5 md:px-20">

    <!-- HEADER -->
    <div class="mb-14 md:mb-20">
      <h2 class="text-[34px] md:text-[64px] leading-tight font-semibold">
        How we grow your rankings
      </h2>
      <p class="text-gray-400 mt-3 max-w-xl text-sm md:text-base">
        A proven process designed to deliver consistent SEO results.
      </p>
    </div>

    <!-- 🔥 MOBILE VERSION (STACKED TIMELINE) -->
    <div class="lg:hidden relative">

      <!-- vertical line -->
      <div class="absolute left-3 top-0 bottom-0 w-[2px] bg-white/10"></div>

      <div class="space-y-10">
        {#each steps as step, i}
          <div class="relative pl-10">

            <!-- dot -->
            <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-lime-400/20 flex items-center justify-center text-[10px] text-lime-400">
              {i + 1}
            </div>

            <!-- card -->
            <div class="p-5 rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl">
              <h3 class="text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>

          </div>
        {/each}
      </div>

    </div>

    <!-- 🔥 DESKTOP VERSION (HORIZONTAL SCROLL) -->
    <div class="hidden lg:block">

      <div class="grid grid-cols-3 gap-8 overflow-x-hidden pb-6">

        {#each steps as step, i}
          <div class="min-w-[300px] lg:min-w-[250px] group">

            <!-- number -->
            <div class="text-lime-400 text-sm mb-4">
              {String(i + 1).padStart(2, "0")}
            </div>

            <!-- card -->
            <div class="p-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300 group-hover:border-lime-400/40 group-hover:scale-[1.03]">

              <h3 class="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p class="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>

            </div>

          </div>
        {/each}

      </div>

    </div>

  </div>
</section>
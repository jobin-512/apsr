<script>
  import { onMount } from 'svelte';

  /**
   * @type {Element}
   */
  let container;

  let data = {
    before: {
      traffic: 1200,
      keywords: 45,
      conversion: 1.2
    },
    after: {
      traffic: 8400,
      keywords: 320,
      conversion: 4.8
    }
  };

  let active = $state(false);

  onMount(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) active = true;
    }, { threshold: 0.4 });

    obs.observe(container);
  });

  /**
   * @param {number} before
   * @param {number} after
   */
  function percent(before, after) {
    return Math.min((after / before) * 100, 100);
  }
</script>

<section
  bind:this={container}
  class="relative bg-[#02140a] text-white py-16 overflow-hidden"
>

  <!-- glow -->
  <div class="absolute inset-0 bg-lime-400/5 blur-[120px]"></div>

  <div class="max-w-6xl mx-auto px-6 md:px-20">

    <!-- 🔥 BIG HEADING -->
    <div class="mb-24 text-4xl">
      <p class="text-[11px] tracking-[0.3em] text-gray-500 mb-6">
        CASE RESULTS
      </p>

      <h2 class="text-[48px] md:text-[72px] leading-[1.05] font-semibold">
        From invisible to <br />
        <span class="text-lime-400">dominant in search</span>
      </h2>
    </div>

    <!-- COMPARISON -->
    <div class="grid md:grid-cols-2 gap-10">

      <!-- BEFORE -->
      <div class="p-8 rounded-2xl border border-white/5 bg-black/20 backdrop-blur-xl">

        <p class="text-gray-500 mb-6">Before</p>

        <div class="space-y-6 text-sm">

          <div>
            <p class="text-gray-400 mb-2">Traffic</p>
            <div class="h-2 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-gray-500 w-[20%]"></div>
            </div>
            <p class="mt-2 text-gray-400">{data.before.traffic}</p>
          </div>

          <div>
            <p class="text-gray-400 mb-2">Ranking Keywords</p>
            <div class="h-2 bg-white/10 rounded-full">
              <div class="h-full bg-gray-500 w-[15%]"></div>
            </div>
            <p class="mt-2 text-gray-400">{data.before.keywords}</p>
          </div>

          <div>
            <p class="text-gray-400 mb-2">Conversion Rate</p>
            <div class="h-2 bg-white/10 rounded-full">
              <div class="h-full bg-gray-500 w-[10%]"></div>
            </div>
            <p class="mt-2 text-gray-400">{data.before.conversion}%</p>
          </div>

        </div>
      </div>

      <!-- AFTER -->
      <div class="p-8 rounded-2xl border border-lime-400/30 bg-black/30 backdrop-blur-xl relative overflow-hidden">

        <!-- glow -->
        <div class="absolute inset-0 bg-lime-400/10 blur-2xl opacity-40"></div>

        <p class="relative text-lime-400 mb-6">After</p>

        <div class="relative space-y-6 text-sm">

          <div>
            <p class="text-gray-300 mb-2">Traffic</p>
            <div class="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                class="h-full bg-lime-400 transition-all duration-1000"
                style={`width:${active ? percent(data.before.traffic, data.after.traffic) : 0}%`}
              ></div>
            </div>
            <p class="mt-2 text-gray-300">{data.after.traffic}</p>
          </div>

          <div>
            <p class="text-gray-300 mb-2">Ranking Keywords</p>
            <div class="h-2 bg-white/10 rounded-full">
              <div
                class="h-full bg-lime-400 transition-all duration-1000 delay-200"
                style={`width:${active ? percent(data.before.keywords, data.after.keywords) : 0}%`}
              ></div>
            </div>
            <p class="mt-2 text-gray-300">{data.after.keywords}</p>
          </div>

          <div>
            <p class="text-gray-300 mb-2">Conversion Rate</p>
            <div class="h-2 bg-white/10 rounded-full">
              <div
                class="h-full bg-lime-400 transition-all duration-1000 delay-300"
                style={`width:${active ? percent(data.before.conversion, data.after.conversion) : 0}%`}
              ></div>
            </div>
            <p class="mt-2 text-gray-300">{data.after.conversion}%</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
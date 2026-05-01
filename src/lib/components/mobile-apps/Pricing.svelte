<script lang="ts">
  let currency = $state<'USD' | 'GBP' | 'CAD'>('USD');
  let hovered = $state<number | null>(null);

  const rates = {
    USD: 1,
    GBP: 0.79,
    CAD: 1.35
  };

  const symbols = {
    USD: "$",
    GBP: "£",
    CAD: "C$"
  };

  const plans = [
    {
      name: "Starter",
      base: 1200,
      desc: "Perfect for MVPs & early-stage startups",
      highlight: false
    },
    {
      name: "Intermediate",
      base: 2500,
      desc: "For growing apps with advanced features",
      highlight: true
    },
    {
      name: "Enterprise",
      base: 5000,
      desc: "Full-scale, production-ready applications",
      highlight: false
    }
  ];

  function convert(price: number) {
    return Math.round(price * rates[currency]);
  }

  function compare(price: number) {
    return Math.round(price * 1.4 * rates[currency]); // fake higher price
  }
</script>

<section id="packages" class="relative bg-[#02140a] text-white py-32 overflow-hidden">

  <!-- 🔥 background glow -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-lime-400/10 blur-[140px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] bg-green-900/30 blur-[120px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20">

    <!-- 🔥 HEADER -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">

      <div>
        <h2 class="text-[42px] md:text-[64px] font-semibold leading-tight">
          Pricing that scales with your app
        </h2>
        <p class="text-gray-400 mt-4 max-w-xl">
          Transparent pricing with no hidden costs. Built for performance and growth.
        </p>
      </div>

      <!-- 🔥 Currency Switch -->
      <div class="flex gap-2 bg-black/30 border border-white/10 rounded-full p-1">

        {#each ['USD','GBP','CAD'] as cur}
          <!-- svelte-ignore event_directive_deprecated -->
          <button
            on:click={() => currency = cur}
            class="px-4 py-2 text-xs rounded-full transition"
            class:bg-lime-400={currency === cur}
            class:text-black={currency === cur}
          >
            {cur}
          </button>
        {/each}

      </div>

    </div>

    <!-- 🔥 CARDS -->
    <div class="grid md:grid-cols-3 gap-8">

      {#each plans as plan, i}

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <div
          class="relative p-8 rounded-2xl border transition-all duration-500 bg-black/30 backdrop-blur-xl overflow-hidden"
          class:border-lime-400={plan.highlight}
          class:scale-[1.04]={hovered === i}
          class:opacity-50={hovered !== null && hovered !== i}
          on:mouseenter={() => hovered = i}
          on:mouseleave={() => hovered = null}
        >

          <!-- glow -->
          <div class="absolute inset-0 opacity-0 hover:opacity-100 transition bg-lime-400/5 blur-xl"></div>

          <!-- BEST TAG -->
          {#if plan.highlight}
            <div class="absolute top-4 right-4 text-[10px] bg-lime-400 text-black px-3 py-1 rounded-full font-bold tracking-widest">
              BEST VALUE
            </div>
          {/if}

          <!-- NAME -->
          <h3 class="text-2xl font-semibold mb-2">{plan.name}</h3>

          <p class="text-gray-400 text-sm mb-6">
            {plan.desc}
          </p>

          <!-- PRICE -->
          <div class="mb-6">

            <!-- compare -->
            <div class="text-gray-500 line-through text-sm">
              {symbols[currency]}{compare(plan.base)}
            </div>

            <!-- actual -->
            <div class="text-4xl font-bold text-lime-400">
              {symbols[currency]}{convert(plan.base)}
            </div>

            <div class="text-xs text-gray-500 mt-1">
              one-time cost
            </div>

          </div>

          <!-- FEATURES PREVIEW -->
          <ul class="space-y-2 text-sm text-gray-300 mb-8">
            <li>✔ High-performance app</li>
            <li>✔ Responsive UI/UX</li>
            <li>✔ API integration</li>
            <li>✔ App store ready</li>
          </ul>

          <!-- CTA -->
          <a
            href="/get-started"
            class="block text-center bg-lime-400 text-black py-3 rounded-full text-sm font-semibold hover:bg-white transition"
          >
            Get Started
          </a>

        </div>

      {/each}

    </div>

  </div>

</section>
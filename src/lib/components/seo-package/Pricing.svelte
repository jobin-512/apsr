<script lang="ts">
  let billing = $state("monthly");
  let currency = $state("USD");

  const currencySymbols = {
    USD: "$",
    GBP: "£",
    CAD: "C$"
  };

  const plans = [
    {
      name: "SEO Essential",
      original: { USD: 549, GBP: 449, CAD: 749 },
      discounted: { USD: 399, GBP: 329, CAD: 539 }
    },
    {
      name: "SEO Advanced",
      tag: "BEST SELLER",
      original: { USD: 949, GBP: 779, CAD: 1289 },
      discounted: { USD: 699, GBP: 579, CAD: 949 }
    },
    {
      name: "SEO Professional",
      original: { USD: 1249, GBP: 1029, CAD: 1699 },
      discounted: { USD: 999, GBP: 829, CAD: 1349 }
    },
    {
      name: "SEO Enterprise",
      original: { USD: 1949, GBP: 1599, CAD: 2649 },
      discounted: { USD: 1499, GBP: 1239, CAD: 2049 }
    }
  ];

  function yearlyPrice(price: number) {
    return Math.round(price * 12 * 0.8); // 20% off
  }
</script>

<section class="bg-[#020f05] text-white py-32">

  <div class="max-w-7xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="text-center mb-16">
      <h2 class="text-[40px] md:text-[64px] font-semibold mb-6">
        Select the plan that’s right for you
      </h2>
    </div>

    <!-- TOGGLES -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">

      <!-- billing -->
      <div class="flex gap-3 p-2 rounded-full bg-black/40 border border-white/10">
        <button
          on:click={() => billing = "monthly"}
          class="px-5 py-2 rounded-full text-xs uppercase tracking-widest"
          class:bg-lime-400={billing === "monthly"}
          class:text-black={billing === "monthly"}
        >
          Monthly
        </button>

        <button
          on:click={() => billing = "yearly"}
          class="px-5 py-2 rounded-full text-xs uppercase tracking-widest"
          class:bg-lime-400={billing === "yearly"}
          class:text-black={billing === "yearly"}
        >
          Yearly (Save 20%+)
        </button>
      </div>

      <!-- currency -->
      <div class="flex gap-3">
        {#each ["USD", "GBP", "CAD"] as c}
          <button
            on:click={() => currency = c}
            class="px-4 py-2 border rounded-full text-xs tracking-widest"
            class:border-lime-400={currency === c}
            class:text-lime-400={currency === c}
            class:border-white ={currency !== c}
          >
            {c}
          </button>
        {/each}
      </div>

    </div>

    <!-- PLANS -->
    <div class="grid md:grid-cols-4 gap-8">

      {#each plans as plan}

        <div class="relative group p-6 rounded-2xl border border-white/10 hover:border-lime-400/40 transition-all duration-500">

          <!-- BEST SELLER -->
          {#if plan.tag}
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 bg-lime-400 text-black text-[10px] px-3 py-1 rounded-full font-bold tracking-widest">
              {plan.tag}
            </div>
          {/if}

          <!-- glow -->
          <div class="glow"></div>

          <!-- NAME -->
          <h3 class="text-lg font-semibold mb-4">
            {plan.name}
          </h3>

          <!-- PRICE -->
          <!-- PRICE -->
            <div class="mb-6">

            {#if billing === "monthly"}

                <!-- original -->
                <p class="text-gray-500 line-through! text-sm original">
                {currencySymbols[currency]}{plan.original[currency]}
                </p>

                <!-- discounted -->
                <p class="text-3xl font-bold text-lime-400">
                {currencySymbols[currency]}{plan.discounted[currency]}
                <span class="text-sm text-gray-400">/mo</span>
                </p>

            {:else}

                <!-- yearly original -->
                <p class="text-gray-500 line-through! text-sm original">
                {currencySymbols[currency]}{plan.original[currency] * 12}
                </p>

                <!-- yearly discounted -->
                <p class="text-3xl font-bold text-lime-400">
                {currencySymbols[currency]}{Math.round(plan.discounted[currency] * 12 * 0.8)}
                <span class="text-sm text-gray-400">/yr</span>
                </p>

            {/if}

            </div>

          <!-- CTA -->
          <button class="w-full py-3 rounded-full bg-lime-400 text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition">
            Let’s Get Started
          </button>

        </div>

      {/each}

    </div>

  </div>
</section>

<style>
  .glow {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: radial-gradient(
      300px circle at 50% 50%,
      rgba(163,230,53,0.12),
      transparent 70%
    );
    opacity: 0;
    transition: 0.4s;
  }

  .group:hover .glow {
    opacity: 1;
  }

  .original{
    text-decoration-line: line-through !important;
}
</style>
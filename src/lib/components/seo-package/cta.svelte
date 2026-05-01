<script lang="ts">
  let hovered = $state(false);
</script>

<section class="relative bg-[#020f05] text-white py-28 overflow-hidden">

  <!-- ambient glow -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-lime-400/10 blur-[120px] rounded-full"></div>
    <div class="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] bg-green-900/30 blur-[120px] rounded-full"></div>
  </div>

  <div class="relative max-w-5xl mx-auto px-6 md:px-20 text-center">

    <!-- HEADLINE -->
    <h2 class="text-[40px] md:text-[64px] leading-tight font-semibold">
      Ready to dominate search results?
    </h2>

    <p class="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base">
      Stop guessing. Start scaling. Let’s build a system that drives consistent organic growth for your business.
    </p>

    <!-- CTA BUTTON -->
    <div class="mt-10 flex flex-col items-center gap-4">

      <a
        href="/get-started"
        on:mouseenter={() => hovered = true}
        on:mouseleave={() => hovered = false}
        class="relative inline-flex items-center gap-3 bg-lime-400 text-black font-bold tracking-widest uppercase px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
      >

        <!-- animated glow -->
        <span class="absolute inset-0 bg-white/30 blur-xl opacity-0 transition duration-500"
              class:opacity-40={hovered}></span>

        <span class="relative z-10">Start Your SEO Growth</span>

        <svg class="w-4 h-4 relative z-10" viewBox="0 0 12 12" fill="none">
          <path d="M1 6H11M11 6L6 1M11 6L6 11"
            stroke="black" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

      </a>

      <!-- trust line -->
      <p class="text-xs text-gray-500 mt-2">
        No long-term contracts • Cancel anytime
      </p>

    </div>

    <!-- TRUST CARDS -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

      <div class="p-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
        <h4 class="text-lg font-semibold mb-2">320+ Projects Delivered</h4>
        <p class="text-gray-400 text-sm">
          Proven experience across industries and markets.
        </p>
      </div>

      <div class="p-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
        <h4 class="text-lg font-semibold mb-2">12x Avg. Growth</h4>
        <p class="text-gray-400 text-sm">
          Real performance improvements, not vanity metrics.
        </p>
      </div>

      <div class="p-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
        <h4 class="text-lg font-semibold mb-2">98% Client Retention</h4>
        <p class="text-gray-400 text-sm">
          Clients stay because results compound over time.
        </p>
      </div>

    </div>

  </div>

  <!-- 🔥 MOBILE STICKY CTA -->
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#02140a]/95 backdrop-blur-xl border-t border-white/10 p-4">

    <a
      href="/get-started"
      class="flex items-center justify-center gap-2 bg-lime-400 text-black font-bold text-sm tracking-widest uppercase px-6 py-4 rounded-full"
    >
      Start SEO Growth
      <svg class="w-4 h-4" viewBox="0 0 12 12" fill="none">
        <path d="M1 6H11M11 6L6 1M11 6L6 11"
          stroke="black" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </a>

  </div>

</section>
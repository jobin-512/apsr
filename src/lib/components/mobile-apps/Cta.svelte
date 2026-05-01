<script lang="ts">
  let hovering = $state(false);
</script>

<section class="relative bg-[#020f05] text-white py-40 overflow-hidden">

  <!-- 🔥 ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-lime-400/10 blur-[160px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-green-900/40 blur-[140px] rounded-full"></div>
  </div>

  <div class="relative max-w-5xl mx-auto px-6 md:px-20 text-center">

    <!-- 🔥 HEADLINE -->
    <h2 class="text-[42px] md:text-[72px] leading-tight font-semibold">
      Let’s build something
      <span class="text-lime-400">people love to use</span>
    </h2>

    <p class="text-gray-400 mt-6 max-w-xl mx-auto">
      We don’t just build apps — we create products that drive growth, engagement, and revenue.
    </p>

    <!-- 🔥 TRUST STRIP -->
    <div class="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-400">

      <div class="flex items-center gap-2">
        <span class="text-lime-400">✔</span>
        <span>Free strategy call</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-lime-400">✔</span>
        <span>No long-term contracts</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-lime-400">✔</span>
        <span>Launch in weeks, not months</span>
      </div>

    </div>

    <!-- 🔥 CTA -->
    <div class="mt-14 flex flex-col md:flex-row justify-center gap-6">

      <!-- PRIMARY -->
      <!-- svelte-ignore event_directive_deprecated -->
      <a
        href="/get-started"
        on:mouseenter={() => hovering = true}
        on:mouseleave={() => hovering = false}
        class="relative px-10 py-5 rounded-full font-bold text-black bg-lime-400 overflow-hidden transition-all duration-300"
      >

        <span class="relative z-10 flex items-center gap-3 justify-center">
          Start Your Project
          <span class="transition-transform duration-300" style="transform: translateX({hovering ? '6px' : '0'})">
            →
          </span>
        </span>

        <!-- glow pulse -->
        <div class="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300"></div>

      </a>

      <!-- SECONDARY -->
      <a
        href="/contact"
        class="px-10 py-5 rounded-full border border-white/20 text-white hover:border-lime-400 transition"
      >
        Talk to Us
      </a>

    </div>

    <!-- 🔥 URGENCY -->
    <div class="mt-10 text-sm text-gray-500">
      Only 3 project slots available this month
    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
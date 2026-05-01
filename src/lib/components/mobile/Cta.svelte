<script lang="ts">
</script>

<section class="relative bg-[#020f05] text-white py-40 overflow-hidden">

  <!-- 🔥 ambient glow -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-lime-400/10 blur-[140px] rounded-full"></div>
    <div class="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-green-900/40 blur-[120px] rounded-full"></div>
  </div>

  <div class="relative max-w-5xl mx-auto px-6 md:px-20 text-center">

    <!-- 🔥 HEADLINE -->
    <h2 class="text-[42px] md:text-[80px] leading-tight font-semibold">
      Ready to build something
      <span class="text-lime-400">exceptional?</span>
    </h2>

    <p class="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
      Whether you're launching your first app or scaling to millions of users,
      we’ll help you design, build, and grow it the right way.
    </p>

    <!-- 🔥 CTA BUTTONS -->
    <div class="mt-12 flex flex-col md:flex-row justify-center gap-6">

      <!-- PRIMARY CTA -->
      <a
        href="/packages/mobile-app"
        class="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-lime-400 text-black font-semibold tracking-wide overflow-hidden"
      >
        <span class="relative z-10 flex items-center gap-2">
          View Packages
          <svg class="w-4 h-4 transition group-hover:translate-x-1" viewBox="0 0 12 12" fill="none">
            <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>

        <!-- glow -->
        <div class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition"></div>
      </a>

      <!-- SECONDARY CTA -->
      <a
        href="/contact"
        class="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold tracking-wide hover:border-lime-400 hover:text-lime-400 transition"
      >
        Book a Free Consultation
      </a>

    </div>

    <!-- 🔥 TRUST LINE -->
    <p class="mt-10 text-sm text-gray-500">
      No commitment. Just clarity on how to move forward.
    </p>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
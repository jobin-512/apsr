    <script>
  import heroImage from '$lib/assets/services/hero.webp';
</script>

<section class="relative bg-[#020f05] text-white overflow-hidden">

  <!-- RADIAL GLOW -->
  <div class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lime-400/10 blur-[160px]"></div>

  <div class="max-w-7xl mx-auto px-6 md:px-20 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">

    <!-- LEFT CONTENT -->
    <div>
      <p class="text-[11px] tracking-[0.25em] text-gray-500 mb-6">
        SERVICES
      </p>

      <h1 class="text-[44px] md:text-[68px] leading-[1.05] font-semibold tracking-tight">
        We don’t offer services. <br />
        <span class="text-lime-400">We build growth systems.</span>
      </h1>

      <p class="mt-6 text-gray-400 max-w-[420px] text-[15px] leading-relaxed">
        Strategy, design, and performance engineering — combined into one scalable engine that drives measurable business outcomes.
      </p>

      <div class="mt-10 flex items-center gap-6">
        <button class="px-6 py-3 bg-lime-400 text-black text-sm rounded-full font-medium hover:scale-[1.04] transition">
          Start a Project
        </button>

        <button class="text-sm text-gray-400 hover:text-white transition">
          View Case Studies →
        </button>
      </div>
    </div>

    <!-- RIGHT VISUAL -->
    <div class="relative">

      <!-- glow behind image -->
      <div class="absolute inset-0 bg-lime-400/10 blur-3xl rounded-2xl"></div>

      <!-- image -->
      <div class="relative border border-white/5 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-xl">
        <img
          src={heroImage}
          alt="Services"
          class="w-full h-[420px] object-cover opacity-80"
        />

        <!-- overlay card -->
        <div class="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-5">

          <p class="text-[11px] text-gray-400 mb-2">PERFORMANCE SNAPSHOT</p>

          <div class="flex justify-between text-sm">
            <div>
              <p class="text-lime-400 text-lg font-semibold">320%</p>
              <p class="text-gray-400 text-xs">Growth</p>
            </div>

            <div>
              <p class="text-lime-400 text-lg font-semibold">12x</p>
              <p class="text-gray-400 text-xs">ROAS</p>
            </div>

            <div>
              <p class="text-lime-400 text-lg font-semibold">98%</p>
              <p class="text-gray-400 text-xs">Retention</p>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>
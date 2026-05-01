<script lang="ts">
  import screen1 from "$lib/assets/services/mobile/app1.webp";
  import screen2 from "$lib/assets/services/mobile/app1.webp";
  import screen3 from "$lib/assets/services/mobile/app1.webp";

  let hover = $state(false);
</script>

<section class="relative bg-[#020f05] text-white pt-40 pb-32 overflow-hidden">

  <!-- 🔥 ambient glow -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-lime-400/10 blur-[140px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] bg-green-900/40 blur-[120px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

    <!-- 🔥 LEFT CONTENT -->
    <div>

      <div class="text-xs tracking-[0.3em] text-lime-400 mb-6 uppercase">
        Mobile App Development
      </div>

      <h1 class="text-[42px] md:text-[72px] leading-tight font-semibold">
        We build apps people
        <span class="text-lime-400">love to use</span>
      </h1>

      <p class="text-gray-400 mt-6 max-w-xl">
        From idea to launch, we design and develop high-performance mobile apps that drive engagement, retention, and real business growth.
      </p>

      <!-- 🔥 CTA -->
      <div class="mt-10 flex flex-wrap gap-4">

        <a
          href="/get-started"
          on:mouseenter={() => hover = true}
          on:mouseleave={() => hover = false}
          class="relative px-8 py-4 rounded-full bg-lime-400 text-black font-bold flex items-center gap-2 overflow-hidden"
        >
          Start Your App
          <span
            class="transition-transform duration-300"
            style="transform: translateX({hover ? '6px' : '0'})"
          >
            →
          </span>

          <div class="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition"></div>
        </a>

        <a
          href="/contact"
          class="px-8 py-4 rounded-full border border-white/20 hover:border-lime-400 transition"
        >
          Talk to Us
        </a>

      </div>

      <!-- 🔥 TRUST MINI -->
      <div class="mt-8 flex gap-6 text-sm text-gray-500 flex-wrap">
        <span>⚡ Fast Development</span>
        <span>📱 iOS & Android</span>
        <span>🚀 Scalable Architecture</span>
      </div>

    </div>

    <!-- 🔥 RIGHT VISUAL -->
    <div class="relative h-[500px] md:h-[600px] flex items-center justify-center">

      <!-- center phone -->
      <img
        src={screen1}
        alt=""
        class="absolute w-[220px] md:w-[260px] rounded-3xl shadow-2xl z-20 animate-float"
      />

      <!-- left phone -->
      <img
        src={screen2}
        alt=""
        class="absolute left-[10%] w-[180px] md:w-[220px] rotate-[-12deg] opacity-80 animate-float-slow"
      />

      <!-- right phone -->
      <img
        src={screen3}
        alt=""
        class="absolute right-[10%] w-[180px] md:w-[220px] rotate-[12deg] opacity-80 animate-float-slow"
      />

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }

  /* 🔥 floating animations */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: floatSlow 8s ease-in-out infinite;
  }
</style>
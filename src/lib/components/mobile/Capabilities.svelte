<script lang="ts">
  let active = $state<number | null>(null);

  const items = [
    {
      title: "Startup MVP Apps",
      desc: "Launch fast with a scalable MVP built for growth and validation.",
      icon: "🚀"
    },
    {
      title: "E-commerce Apps",
      desc: "High-converting mobile shopping experiences with seamless checkout.",
      icon: "🛒"
    },
    {
      title: "SaaS Platforms",
      desc: "Complex dashboards, user systems, and real-time data experiences.",
      icon: "📊"
    },
    {
      title: "On-Demand Apps",
      desc: "Uber-style apps with live tracking, payments, and logistics.",
      icon: "📍"
    },
    {
      title: "Social / Community Apps",
      desc: "Engaging platforms with messaging, feeds, and user interaction.",
      icon: "💬"
    },
    {
      title: "AI-Powered Apps",
      desc: "Integrations with AI for smarter, automated user experiences.",
      icon: "🤖"
    }
  ];
</script>

<section class="relative bg-[#02140a] text-white py-40 overflow-hidden">

  <!-- 🔥 ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-lime-400/10 blur-[160px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-green-900/40 blur-[140px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="mb-20 max-w-2xl">
      <h2 class="text-[42px] md:text-[72px] leading-tight font-semibold">
        We don’t just build apps.
        <span class="text-lime-400">We build products.</span>
      </h2>
      <p class="text-gray-400 mt-4">
        From MVPs to large-scale platforms, we create mobile experiences tailored to your business model.
      </p>
    </div>

    <!-- 🔥 GRID -->
    <div class="grid md:grid-cols-3 gap-8">

      {#each items as item, i}

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <div
          class="group relative p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden"
          on:mouseenter={() => active = i}
          on:mouseleave={() => active = null}
        >

          <!-- glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-lime-400/5 blur-2xl"></div>

          <!-- icon -->
          <div class="text-3xl mb-6">
            {item.icon}
          </div>

          <!-- title -->
          <h3 class="text-xl font-semibold mb-3 group-hover:text-lime-400 transition">
            {item.title}
          </h3>

          <!-- desc -->
          <p class="text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>

          <!-- arrow -->
          <div class="mt-6 text-lime-400 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1">
            →
          </div>

          <!-- hover border -->
          <div class="absolute inset-0 rounded-2xl border border-lime-400/0 group-hover:border-lime-400/30 transition"></div>

        </div>

      {/each}

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
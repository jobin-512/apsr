<script lang="ts">
  let active = $state<number | null>(null);

  const features = [
    {
      title: "Lightning Performance",
      desc: "Optimized for speed with smooth navigation and instant loading.",
      icon: "⚡"
    },
    {
      title: "Scalable Architecture",
      desc: "Built to handle growth from 100 users to millions.",
      icon: "📈"
    },
    {
      title: "Real-time Sync",
      desc: "Live data updates across all devices instantly.",
      icon: "🔄"
    },
    {
      title: "Secure & Reliable",
      desc: "Enterprise-grade security and data protection.",
      icon: "🔐"
    },
    {
      title: "Offline Mode",
      desc: "Apps that work even without internet connection.",
      icon: "📡"
    },
    {
      title: "Push Notifications",
      desc: "Engage users with smart and targeted notifications.",
      icon: "🔔"
    }
  ];
</script>

<section class="relative bg-[#020f05] text-white py-32 overflow-hidden">

  <!-- 🔥 ambient glow -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-lime-400/10 blur-[140px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] bg-green-900/30 blur-[120px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20">

    <!-- 🔥 HEADER -->
    <div class="mb-20 max-w-3xl">
      <h2 class="text-[42px] md:text-[64px] leading-tight font-semibold">
        Built with capabilities that 
        <span class="text-lime-400">actually matter</span>
      </h2>
      <p class="text-gray-400 mt-4">
        Not just features — real systems designed to scale, perform, and convert.
      </p>
    </div>

    <!-- 🔥 GRID -->
    <div class="grid md:grid-cols-3 gap-8">

      {#each features as f, i}

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <div
          class="group relative p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden transition-all duration-500 cursor-pointer"
          class:opacity-40={active !== null && active !== i}
          on:mouseenter={() => active = i}
          on:mouseleave={() => active = null}
        >

          <!-- glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-lime-400/5 blur-xl"></div>

          <!-- magnetic spotlight -->
          <div
            class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
            style="background: radial-gradient(300px circle at var(--x) var(--y), rgba(163,230,53,0.12), transparent 70%)"
          ></div>

          <!-- content -->
          <div
            class="relative z-10"
            on:mousemove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.parentElement.style.setProperty('--x', `${e.clientX - rect.left}px`);
              e.currentTarget.parentElement.style.setProperty('--y', `${e.clientY - rect.top}px`);
            }}
          >

            <!-- icon -->
            <div class="text-3xl mb-4">{f.icon}</div>

            <h3 class="text-xl font-semibold mb-2">
              {f.title}
            </h3>

            <p class="text-gray-400 text-sm leading-relaxed">
              {f.desc}
            </p>

          </div>

        </div>

      {/each}

    </div>

  </div>

</section>
<script lang="ts">
  let team = [
    {
      role: "Strategy",
      title: "Growth Strategists",
      desc: "Define positioning, funnels, and long-term growth systems."
    },
    {
      role: "Design",
      title: "UI/UX Experts",
      desc: "Craft experiences that convert, not just look good."
    },
    {
      role: "Development",
      title: "Engineers",
      desc: "Build fast, scalable, and future-ready platforms."
    },
    {
      role: "Marketing",
      title: "Performance Marketers",
      desc: "Drive traffic, optimize funnels, and scale revenue."
    }
  ];
</script>

<section class="relative bg-[#02140a] text-white py-32 overflow-hidden">

  <!-- ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-lime-400/10 blur-[160px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20">

    <div class="grid md:grid-cols-2 gap-16 items-center">

      <!-- 🔥 LEFT (PHILOSOPHY) -->
      <div class="max-w-xl">

        <div class="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">
          Our Team
        </div>

        <h2 class="text-[36px] md:text-[56px] leading-tight font-semibold">
          Built like a
          <span class="text-lime-400">performance engine</span>,
          not a traditional agency.
        </h2>

        <p class="text-gray-400 mt-6 leading-relaxed">
          Instead of siloed teams, we operate as a unified system where strategy,
          design, development, and marketing work together from day one.
        </p>

        <p class="text-gray-400 mt-4 leading-relaxed">
          This ensures every decision is aligned with one goal — growth.
        </p>

      </div>

      <!-- 🔥 RIGHT (STACKED CARDS) -->
      <div class="relative flex flex-col gap-6">

        {#each team as member, i}

          <div class="card group">

            <!-- role -->
            <div class="text-xs text-lime-400 tracking-widest mb-2">
              {member.role}
            </div>

            <!-- title -->
            <h3 class="text-lg font-semibold">
              {member.title}
            </h3>

            <!-- desc -->
            <p class="text-gray-400 text-sm mt-2">
              {member.desc}
            </p>

            <!-- hover glow -->
            <div class="glow"></div>

          </div>

        {/each}

      </div>

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }

  .card {
    position: relative;
    padding: 22px;
    border-radius: 16px;
    background: rgba(0,0,0,0.4);
    border: 1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(12px);
    transition: 0.3s;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: rgba(163,230,53,0.4);
  }

  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(163,230,53,0.15), transparent 70%);
    opacity: 0;
    transition: 0.4s;
  }

  .card:hover .glow {
    opacity: 1;
  }
</style>
<script lang="ts">
  let items = [
    {
      title: "Product Thinking First",
      desc: "We don’t just build features — we design systems that solve real user problems and drive growth."
    },
    {
      title: "Built for Scale",
      desc: "Your app is engineered to handle growth from day one, not rebuilt later."
    },
    {
      title: "Performance Obsessed",
      desc: "Fast load times, smooth animations, and optimized architecture are non-negotiable."
    },
    {
      title: "Design That Converts",
      desc: "Every screen is crafted to improve engagement, retention, and user flow."
    }
  ];
</script>

<section class="relative bg-[#02140a] text-white py-40 overflow-hidden">

  <!-- 🔥 ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-lime-400/10 blur-[160px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-green-900/40 blur-[140px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-20 items-start">

    <!-- 🔥 LEFT -->
    <div class="sticky top-32">

      <h2 class="text-[42px] md:text-[72px] leading-tight font-semibold">
        Not just developers.
        <span class="text-lime-400">Product builders.</span>
      </h2>

      <p class="text-gray-400 mt-6 max-w-md">
        We combine strategy, design, and engineering to create apps that don’t just look good — they perform.
      </p>

      <!-- subtle divider -->
      <div class="mt-10 w-20 h-[2px] bg-lime-400/40"></div>

    </div>

    <!-- 🔥 RIGHT -->
    <div class="space-y-10">

      {#each items as item, i}

        <div
          class="group relative p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]"
        >

          <!-- glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-lime-400/5 blur-xl"></div>

          <!-- number -->
          <div class="text-lime-400 text-sm mb-4">
            {String(i + 1).padStart(2, "0")}
          </div>

          <!-- title -->
          <h3 class="text-xl font-semibold mb-3 group-hover:text-lime-400 transition">
            {item.title}
          </h3>

          <!-- desc -->
          <p class="text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>

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
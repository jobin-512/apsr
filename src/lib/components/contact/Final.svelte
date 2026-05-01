<script lang="ts">
  const steps = [
    {
      title: "We review your request",
      desc: "Our team carefully analyzes your requirements and goals."
    },
    {
      title: "We reach out within 24 hours",
      desc: "You’ll get a clear response with next steps or questions."
    },
    {
      title: "We plan your solution",
      desc: "We guide you with the best approach tailored to your needs."
    }
  ];
</script>

<section class="relative bg-[#020f05] text-white py-32 overflow-hidden">

  <!-- 🔥 ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-lime-400/10 blur-[120px] rounded-full"></div>
    <div class="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-green-900/40 blur-[100px] rounded-full"></div>
  </div>

  <div class="relative max-w-5xl mx-auto px-6 md:px-20 text-center">

    <!-- 🔥 HEADLINE -->
    <h2 class="text-[36px] md:text-[60px] font-semibold leading-tight">
      What happens
      <span class="text-lime-400">next?</span>
    </h2>

    <p class="text-gray-400 mt-4 max-w-xl mx-auto">
      We keep things simple, transparent, and fast — so you always know what to expect.
    </p>

    <!-- 🔥 STEPS -->
    <div class="mt-16 grid md:grid-cols-3 gap-8">

      {#each steps as step, i}

        <div class="group relative p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03]">

          <!-- glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-lime-400/5 blur-xl"></div>

          <!-- number -->
          <div class="text-lime-400 text-sm mb-4">
            {String(i + 1).padStart(2, "0")}
          </div>

          <!-- title -->
          <h3 class="text-lg font-semibold mb-2 group-hover:text-lime-400 transition">
            {step.title}
          </h3>

          <!-- desc -->
          <p class="text-gray-400 text-sm leading-relaxed">
            {step.desc}
          </p>

        </div>

      {/each}

    </div>

    <!-- 🔥 FINAL TRUST LINE -->
    <p class="mt-12 text-sm text-gray-500">
      No hidden steps. No confusion. Just a clear path forward.
    </p>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
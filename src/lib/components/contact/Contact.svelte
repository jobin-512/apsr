<script lang="ts">
  const locations = [
    {
      city: "Sheridan",
      address: "30 N Gould St Ste R Sheridan, WY 82801, United States",
      phone: "+1 4404620956",
      email: "info@apsrinfotech.com"
    },
    {
      city: "London",
      address: "Soho, London, W1F 9RL, London, United Kingdom",
      phone: "+44 7448148531",
      email: "info@apsrinfotech.com"
    },
    {
      city: "Noida",
      address: "B 23, Sector 63 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201309",
      phone: "+91 9217138636",
      email: "info@apsrinfotech.com"
    },
    
  ];
</script>

<section class="relative bg-[#02140a] text-white py-28 overflow-hidden">

  <!-- ambient glow -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-lime-400/10 blur-[140px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="text-center mb-16 max-w-2xl mx-auto">
      <h2 class="text-[36px] md:text-[56px] font-semibold">
        Our locations
      </h2>
      <p class="text-gray-400 mt-4">
        Connect with the team closest to you.
      </p>
    </div>

    <!-- CARDS -->
    <div class="grid md:grid-cols-3 gap-6">

      {#each locations as loc}

        <div class="group relative p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-lime-400/40">

          <!-- CITY -->
          <div class="text-lime-400 text-xs tracking-widest uppercase mb-3">
            {loc.city}
          </div>

          <!-- ADDRESS -->
          <div class="text-sm text-gray-400 mb-6">
            {loc.address}
          </div>

          <!-- PHONE -->
          <a
            href={`tel:${loc.phone}`}
            class="block text-lg font-semibold hover:text-lime-400 transition"
          >
            {loc.phone}
          </a>

          <!-- EMAIL -->
          <a
            href={`mailto:${loc.email}`}
            class="block text-sm text-gray-400 mt-2 hover:text-lime-400 transition"
          >
            {loc.email}
          </a>

          <!-- hover glow -->
          <!-- <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-lime-400/5 blur-xl"></div> -->

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
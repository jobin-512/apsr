<script lang="ts">
  let active = $state(0);

  const projects = [
    {
      title: "Ecommerce Growth System",
      category: "Web + SEO",
      image: "/images/p1.jpg"
    },
    {
      title: "AI SaaS Platform",
      category: "Web App",
      image: "/images/p2.jpg"
    },
    {
      title: "Mobile Fitness App",
      category: "Mobile App",
      image: "/images/p3.jpg"
    },
    {
      title: "Luxury Brand Website",
      category: "UI/UX + Dev",
      image: "/images/p4.jpg"
    }
  ];
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<section class="bg-[#020f05] text-white overflow-hidden">

  <!-- 🔥 HERO -->
  <div class="max-w-6xl mx-auto px-6 md:px-20 py-32">

    <h1 class="text-[42px] md:text-[80px] leading-[1.1] font-semibold max-w-4xl">
      Work that doesn’t just look good —
      <span class="text-lime-400">it performs</span>
    </h1>

    <p class="text-gray-400 mt-6 max-w-xl">
      Real projects. Real results. Designed to grow businesses.
    </p>

  </div>

  <!-- 🔥 HORIZONTAL SCROLL SHOWCASE -->
  <div class="overflow-x-auto pb-20">

    <div class="flex gap-10 px-6 md:px-20 w-max">

      {#each projects as project, i}

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <div
          class="group relative w-[300px] md:w-[420px] h-[420px] md:h-[520px] rounded-2xl overflow-hidden cursor-pointer"
          on:mouseenter={() => active = i}
        >

          <!-- image -->
          <img
            src={project.image}
            alt={project.title}
            class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <!-- overlay -->
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

          <!-- content -->
          <div class="absolute bottom-0 p-6">

            <div class="text-xs text-lime-400 tracking-widest mb-2">
              {project.category}
            </div>

            <h3 class="text-xl md:text-2xl font-semibold">
              {project.title}
            </h3>

          </div>

        </div>

      {/each}

    </div>

  </div>

  <!-- 🔥 FEATURED EXPANDED VIEW -->
  <div class="max-w-6xl mx-auto px-6 md:px-20 pb-32">

    <div class="grid md:grid-cols-2 gap-12 items-center">

      <!-- image -->
      <div class="overflow-hidden rounded-2xl">
        <img
          src={projects[active].image}
          alt=""
          class="w-full h-[350px] md:h-[450px] object-cover transition duration-500"
        />
      </div>

      <!-- content -->
      <div>

        <div class="text-lime-400 text-xs tracking-widest mb-3">
          {projects[active].category}
        </div>

        <h2 class="text-[32px] md:text-[48px] font-semibold">
          {projects[active].title}
        </h2>

        <p class="text-gray-400 mt-4">
          This project focused on building a high-performance system that not only looks premium but drives measurable business growth.
        </p>

        <div class="mt-8 flex gap-4">

          <a
            href="/get-started"
            class="px-6 py-3 rounded-full bg-lime-400 text-black font-semibold hover:bg-white transition"
          >
            Start Similar Project
          </a>

          <a
            href="#"
            class="px-6 py-3 rounded-full border border-white/20 hover:border-lime-400 hover:text-lime-400 transition"
          >
            View Case Study
          </a>

        </div>

      </div>

    </div>

  </div>

  <!-- 🔥 CTA -->
  <div class="text-center pb-32">

    <h2 class="text-[36px] md:text-[56px] font-semibold">
      Let’s build something next
    </h2>

    <p class="text-gray-400 mt-4">
      Your project could be the next success story.
    </p>

    <a
      href="/get-started"
      class="inline-block mt-8 px-8 py-4 rounded-full bg-lime-400 text-black font-semibold hover:bg-white transition"
    >
      Start Your Project
    </a>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }

  /* hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
</style>
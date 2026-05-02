<script lang="ts">
import b1 from "$lib/assets/blog/b3.webp"
import b2 from "$lib/assets/blog/b1.webp"
import b3 from "$lib/assets/blog/b2.webp"

  const blogs = [
    {
      title: "How to Scale Your Business with SEO in 2026",
      desc: "A practical guide to ranking higher and driving consistent traffic.",
      date: "May 2026",
      category: "SEO",
      image: b1,
      slug: "scale-with-seo"
    },
    {
      title: "The Best Performing TikTok Ads Creatives",
      desc: "Identify the real reasons behind low conversions and how to fix them.",
      date: "April 2026",
      category: "SEO",
      image: b2,
      slug: "The-Best-Performing-TikTok-Ads-Creatives"
    },
    {
      title: "Creating Effective Social Media Marketing Strategies",
      desc: "How to make large returns efectively using social media stratergies",
      date: "March 2026",
      category: "SMA",
      image: b3,
      slug: "Creating-Effective-Social-Media-Marketing-Strategies"
    }
  ];
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="bg-[#020f05] text-white py-32">

  <div class="max-w-7xl mx-auto px-6 md:px-20">

    <!-- 🔥 HERO -->
    <div class="max-w-3xl mb-20">
      <h1 class="text-[42px] md:text-[72px] font-semibold leading-tight">
        Insights that drive
        <span class="text-lime-400">real growth</span>
      </h1>
      <p class="text-gray-400 mt-6">
        Strategies, insights, and ideas to help you scale smarter.
      </p>
    </div>

    <!-- 🔥 FEATURED BLOG -->
    <div class="mb-20">

      <a href={`/blog/${blogs[0].slug}`} class="group block">

        <div class="grid md:grid-cols-2 gap-10 items-center">

          <!-- image -->
          <div class="overflow-hidden rounded-2xl">
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              class="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <!-- content -->
          <div>
            <div class="text-xs text-lime-400 tracking-widest mb-3">
              FEATURED • {blogs[0].category}
            </div>

            <h2 class="text-[28px] md:text-[36px] font-semibold">
              {blogs[0].title}
            </h2>

            <p class="text-gray-400 mt-4">
              {blogs[0].desc}
            </p>

            <div class="text-sm text-gray-500 mt-6">
              {blogs[0].date}
            </div>

          </div>

        </div>

      </a>

    </div>

    <!-- 🔥 GRID -->
    <div class="grid md:grid-cols-3 gap-8">

      {#each blogs.slice(1) as blog}

        <a
          href={`/blog/${blog.slug}`}
          class="group block"
        >

          <div class="rounded-2xl overflow-hidden border border-white/10 bg-black/30 transition hover:border-lime-400/40">

            <!-- image -->
            <div class="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                class="w-full h-50 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <!-- content -->
            <div class="p-6">

              <div class="text-xs text-lime-400 mb-2 tracking-widest">
                {blog.category}
              </div>

              <h3 class="text-lg font-semibold">
                {blog.title}
              </h3>

              <p class="text-gray-400 text-sm mt-3">
                {blog.desc}
              </p>

              <div class="text-xs text-gray-500 mt-4">
                {blog.date}
              </div>

            </div>

          </div>

        </a>

      {/each}

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import b2 from "$lib/assets/blog/b2.webp"
  import b1 from "$lib/assets/blog/b1.webp"
  let sectionEl;
  let visible = $state(false);

  const articles = [
    {
      tag: 'Article · 8 min read',
      title: 'The Best Performing TikTok Ads Creatives',
      img: b1,
      date: 'Mar 2026',
      color: '#c8ff00',
    },
    {
      tag: 'Article · 6 min read',
      title: 'Creating Effective Social Media Marketing Strategies',
      img: b2,
      date: 'Feb 2026',
      color: '#c8ff00',
    },
  ];

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) visible = true; },
      { threshold: 0.15 }
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section
  bind:this={sectionEl}
  class="relative bg-[#050f05] overflow-hidden font-syne py-24 md:py-32 px-6 md:px-14"
>
  <!-- Ambient glow -->
  <div class="pointer-events-none absolute inset-0 z-0">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full bg-[#1a4a00] opacity-20 blur-[130px]"></div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto">

    <!-- Top label -->
    <div
      class="flex items-center gap-2 mb-5 transition-all duration-700"
      class:opacity-100={visible}
      class:translate-y-0={visible}
      class:opacity-0={!visible}
      class:translate-y-4={!visible}
    >
      <span class="block w-5 h-px bg-[#c8ff00]"></span>
      <span class="text-[#8aad78] text-[10px] tracking-[0.3em] uppercase font-medium">Latest From</span>
    </div>

    <!-- Heading -->
    <div
      class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700 delay-100"
      class:opacity-100={visible}
      class:translate-y-0={visible}
      class:opacity-0={!visible}
      class:translate-y-4={!visible}
    >
      <h2 class="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
        <em class="font-dm-serif font-light italic" style="font-style:italic">Digital</em>
        <span class="block">Advertising</span>
      </h2>

      <a
        href="/blog"
        class="self-start md:self-auto inline-flex items-center gap-3 border border-[#2a5a10] text-[#8aad78] text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all duration-300 group shrink-0"
      >
        More Articles
        <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 12 12" fill="none">
          <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>
    </div>

    <!-- Article Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each articles as article, i}
        <a
          href="/blog/{i}"
          class="group block rounded-2xl overflow-hidden bg-[#080f07] border border-[#1a3a00] hover:border-[#3a6a20] transition-all duration-500"
          class:opacity-100={visible}
          class:translate-y-0={visible}
          class:opacity-0={!visible}
          class:translate-y-10={!visible}
          style="transition-delay: {200 + i * 150}ms; transition-duration: 700ms;"
        >
          <!-- Image -->
          <div class="relative overflow-hidden aspect-16/10">
            <img
              src={article.img}
              alt={article.title}
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-linear-to-t from-[#080f07]/80 via-transparent to-transparent"></div>
            <div class="absolute inset-0 bg-linear-to-b from-[#050f05]/30 to-transparent"></div>

            <!-- Tag pill top-left -->
            <div class="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
              <span class="text-[9px] text-[#8aad78] tracking-[0.2em] uppercase font-medium">{article.tag}</span>
            </div>

            <!-- Date top-right -->
            <div class="absolute top-4 right-4 text-[9px] text-[#5a7a52] tracking-widest uppercase">
              {article.date}
            </div>

            <!-- Arrow button bottom-right -->
            <div class="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#c8ff00] group-hover:border-[#c8ff00] transition-all duration-300">
              <svg class="w-3.5 h-3.5 text-white group-hover:text-[#050f05] transition-colors duration-300" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-6 flex items-start justify-between gap-4">
            <h3 class="text-white font-bold text-base md:text-lg leading-snug group-hover:text-[#c8ff00] transition-colors duration-300 max-w-xs">
              {article.title}
            </h3>

            <!-- Index number -->
            <span class="text-[#1a3a00] text-4xl font-bold shrink-0 leading-none select-none">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          <!-- Bottom bar — progress line on hover -->
          <div class="h-px bg-[#1a3a00] mx-6 mb-6 relative overflow-hidden">
            <div class="absolute inset-y-0 left-0 bg-[#c8ff00] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>
        </a>
      {/each}
    </div>

    <!-- Bottom CTA row -->
    <div
      class="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#1a3a00] transition-all duration-700 delay-500"
      class:opacity-100={visible}
      class:translate-y-0={visible}
      class:opacity-0={!visible}
      class:translate-y-4={!visible}
    >
      <p class="text-[#3a5a32] text-xs tracking-widest uppercase text-center sm:text-left">
        Insights, strategies & case studies from the front lines of digital marketing
      </p>
      <a
        href="/blog"
        class="inline-flex items-center gap-3 bg-[#c8ff00] text-[#050f05] font-bold text-xs tracking-[0.2em] uppercase px-7 py-4 rounded-full hover:bg-white transition-all duration-300 group shrink-0"
      >
        View All Articles
        <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 12 12" fill="none">
          <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>
    </div>

  </div>
</section>

<style>
  .font-syne     { font-family: 'Syne', sans-serif; }
  .font-dm-serif { font-family: 'DM Serif Display', serif; }
</style>
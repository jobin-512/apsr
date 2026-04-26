<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  /**
     * @type {Element}
     */
  let sectionEl;
  let visible = $state(false);
  let activeIndex = $state(2); // "Content & Creative" open by default like the screenshot

  const services = [
    {
      number: '01',
      title: 'Marketing Strategy',
      description:
        'We build go-to-market strategies grounded in data — identifying your ideal customers, competitive positioning, and the exact channels to reach them. Every decision we make is tied back to measurable business outcomes.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      tags: ['Brand Positioning', 'Market Research', 'GTM Strategy'],
    },
    {
      number: '02',
      title: 'Digital Advertising',
      description:
        'From Meta and Google to TikTok and programmatic, we run high-performance paid campaigns that convert. Our creative-first approach paired with rigorous testing ensures your budget works as hard as possible.',
      img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
      tags: ['Paid Social', 'Google Ads', 'TikTok Ads', 'Programmatic'],
    },
    {
      number: '03',
      title: 'Content & Creative',
      description:
        'Great creative is the unfair advantage. We produce scroll-stopping content — from short-form video and photography to full brand campaigns — that builds emotional connection and drives action.',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      tags: ['Video Production', 'Photography', 'Copywriting', 'Brand Design'],
    },
    {
      number: '04',
      title: 'Web Design & Development',
      description:
        'We design and build websites that convert — fast, beautiful, and engineered for growth. From landing pages to full e-commerce builds, every pixel serves a purpose.',
      img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
      tags: ['UX/UI Design', 'SvelteKit', 'Shopify', 'Webflow'],
    },
  ];

  /**
     * @param {number} i
     */
  function toggle(i) {
    
    // @ts-ignore
    activeIndex = activeIndex === i ? null : i;
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) visible = true; },
      { threshold: 0.1 }
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section
  bind:this={sectionEl}
  class="relative bg-[#f5f5f0] overflow-hidden font-syne py-24 md:py-32 px-6 md:px-14"
>
  <!-- Subtle texture overlay -->
  <div class="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
    style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')">
  </div>

  <div class="relative z-10 max-w-6xl mx-auto">

    <!-- Header -->
    <div
      class="mb-14 transition-all duration-700"
      class:opacity-100={visible}
      class:translate-y-0={visible}
      class:opacity-0={!visible}
      class:translate-y-6={!visible}
    >
      <div class="inline-flex items-center gap-2 mb-5">
        <span class="block w-5 h-px bg-[#050f05]"></span>
        <span class="text-[#6a7a62] text-[10px] tracking-[0.3em] uppercase font-medium">Services</span>
      </div>
      <h2 class="text-[#050f05] text-4xl md:text-6xl font-bold leading-tight">
        What we do
        <em class="font-dm-serif font-light italic" style="font-style:italic">best.</em>
      </h2>
    </div>

    <!-- Accordion -->
    <div class="divide-y divide-[#d8d8d0]">
      {#each services as service, i}
        <!-- Row -->
        <div
          class="transition-all duration-700"
          class:opacity-100={visible}
          class:translate-y-0={visible}
          class:opacity-0={!visible}
          class:translate-y-6={!visible}
          style="transition-delay: {100 + i * 80}ms"
        >
          <!-- Trigger row -->
          <!-- svelte-ignore event_directive_deprecated -->
          <button
            on:click={() => toggle(i)}
            class="w-full flex items-center justify-between gap-4 py-6 text-left group"
            aria-expanded={activeIndex === i}
          >
            <div class="flex items-center gap-5 md:gap-8 min-w-0">
              <!-- Number -->
              <span class="text-[#c8c8c0] text-xs font-bold tracking-widest shrink-0 select-none">
                {service.number}
              </span>

              <!-- Title -->
              <span
                class="text-[#050f05] font-bold text-lg md:text-2xl leading-tight transition-colors duration-300 truncate"
                class:text-[#050f05]={activeIndex !== i}
              >
                {service.title}
              </span>

              <!-- Active dot -->
              {#if activeIndex === i}
                <span class="hidden md:block w-2 h-2 rounded-full bg-[#c8ff00] shrink-0"></span>
              {/if}
            </div>

            <!-- Icon -->
            <div
              class="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
              class:bg-[#050f05]={activeIndex === i}
              class:border-[#050f05]={activeIndex === i}
              class:bg-transparent={activeIndex !== i}
              class:border-[#c8c8c0]={activeIndex !== i}
              class:group-hover:border-[#050f05]={activeIndex !== i}
            >
              <svg
                class="w-3.5 h-3.5 transition-all duration-300"
                class:text-white={activeIndex === i}
                class:text-[#050f05]={activeIndex !== i}
                class:rotate-45={activeIndex === i}
                viewBox="0 0 14 14" fill="none"
              >
                <path d="M7 1V13M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </button>

          <!-- Expanded panel -->
          {#if activeIndex === i}
            <div transition:slide={{ duration: 400, easing: t => t < 0.5 ? 2*t*t : -1+(4-2*t)*t }}>
              <div class="pb-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start pl-10 md:pl-16">

                <!-- Left: description + tags -->
                <div>
                  <p class="text-[#4a5a42] text-sm md:text-base leading-relaxed max-w-xl mb-6">
                    {service.description}
                  </p>
                  <div class="flex flex-wrap gap-2">
                    {#each service.tags as tag}
                      <span class="inline-flex items-center bg-[#050f05] text-[#f5f5f0] text-[10px] font-medium tracking-widest uppercase px-4 py-2 rounded-full">
                        {tag}
                      </span>
                    {/each}
                  </div>
                  <a
                    href="/services/{service.title.toLowerCase().replace(/\s+/g, '-')}"
                    class="inline-flex items-center gap-2 mt-8 text-[#050f05] text-xs font-bold tracking-[0.2em] uppercase hover:text-[#3a6a00] transition-colors duration-300 group/link"
                  >
                    Learn More
                    <svg class="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </a>
                </div>

                <!-- Right: image card -->
                <div class="w-full md:w-52 lg:w-64 aspect-4/3 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                  <img
                    src={service.img}
                    alt={service.title}
                    class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>

              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Bottom CTA -->
    <div
      class="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500"
      class:opacity-100={visible}
      class:translate-y-0={visible}
      class:opacity-0={!visible}
      class:translate-y-4={!visible}
    >
      <p class="text-[#8a9a82] text-xs tracking-widest uppercase text-center sm:text-left">
        Every service is custom-scoped — no cookie-cutter packages
      </p>
      <a
        href="/services"
        class="inline-flex items-center gap-3 bg-[#050f05] text-[#f5f5f0] font-bold text-xs tracking-[0.2em] uppercase px-7 py-4 rounded-full hover:bg-[#c8ff00] hover:text-[#050f05] transition-all duration-300 group shrink-0"
      >
        All Services
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
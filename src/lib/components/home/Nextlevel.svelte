<script>
  import { onMount } from 'svelte';
  import advertising from "$lib/assets/home/advertising.webp";
  import brand from "$lib/assets/home/brand.webp";
  import content from "$lib/assets/home/content.webp";
  import casee from "$lib/assets/home/case.webp";


  /**
     * @type {Element}
     */
  let sectionEl;
  let visible = $state(false);

  const logos = [
    'Koala', 'STAC', 'Versarial', 'Bloom', 'Meridian', 'Centric', 'Orbis', 'Nexum'
  ];

  const caseStudies = [
    {
      client: 'NexaPod',
      tag: 'Brand Strategy',
      metrics: [
        { value: '719%', label: 'Revenue Growth' },
        { value: '84%', label: 'Retention Rate' },
        { value: '240%', label: 'Lead Increase' },
        { value: '3.2x', label: 'ROAS' },
      ],
      bg: '#0a1a08',
      accent: '#c8ff00',
      img: brand,
    },
    {
      client: 'Verdant Co.',
      tag: 'Content & Creative',
      metrics: [
         { value: '439%', label: 'Revenue Growth' },
        { value: '44%', label: 'Retention Rate' },
        { value: '140%', label: 'Lead Increase' },
        { value: '2.2x', label: 'ROAS' },
      ],
      bg: '#0f1a0a',
      accent: '#c8ff00',
      img: content,
    },
    {
      client: 'Sola Active',
      tag: 'Digital Advertising',
      metrics: [
         { value: '319%', label: 'Revenue Growth' },
        { value: '54%', label: 'Retention Rate' },
        { value: '80%', label: 'Lead Increase' },
        { value: '2x', label: 'ROAS' },
      ],
      bg: '#121a10',
      accent: '#c8ff00',
      img: advertising,
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

<!-- ─────────────────────────────────────────────
     SECTION 1 — Next Level Results (split hero)
───────────────────────────────────────────── -->
<section
  bind:this={sectionEl}
  class="relative bg-[#050f05] overflow-hidden font-syne"
>
  <!-- Ambient glow -->
  <div class="pointer-events-none absolute inset-0 z-0">
    <div class="absolute top-0 left-0 w-125 h-125 rounded-full bg-[#1a4a00] opacity-20 blur-[130px]"></div>
    <div class="absolute bottom-0 right-0 w-100 h-100 rounded-full bg-[#0a3a00] opacity-30 blur-[100px]"></div>
  </div>

  <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-130">

    <!-- LEFT — editorial image collage -->
    <div
      class="relative overflow-hidden min-h-85 lg:min-h-0 transition-all duration-1000"
      class:opacity-100={visible}
      class:translate-x-0={visible}
      class:opacity-0={!visible}
      class:-translate-x-10={!visible}
    >
      <!-- Main image — product shot -->
      <img
        src={casee}
        alt="Black Coffee product"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <!-- Dark overlay for depth -->
      <div class="absolute inset-0 bg-linear-to-r from-[#050f05]/60 via-transparent to-[#050f05]/20"></div>
      <div class="absolute inset-0 bg-linear-to-t from-[#050f05] via-transparent to-transparent"></div>

      <!-- Tag pill -->
      <div class="absolute top-6 left-6 inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#c8ff00]"></span>
        <span class="text-[10px] text-[#8aad78] tracking-[0.2em] uppercase font-medium">Case Studies</span>
      </div>
    </div>

    <!-- RIGHT — headline + CTA -->
    <div
      class="flex flex-col justify-center px-8 md:px-14 py-16 lg:py-0 transition-all duration-1000 delay-200"
      class:opacity-100={visible}
      class:translate-x-0={visible}
      class:opacity-0={!visible}
      class:translate-x-10={!visible}
    >
      <!-- Eyebrow -->
      <div class="inline-flex items-center gap-2 mb-6">
        <span class="block w-5 h-px bg-[#c8ff00]"></span>
        <span class="text-[#8aad78] text-[10px] tracking-[0.3em] uppercase font-medium">Our Work</span>
      </div>

      <!-- Headline -->
      <h2 class="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-none mb-6">
        Next Level
        <br />
        <em class="font-dm-serif font-light text-[#c8ff00] not-italic" style="font-style:italic">
          Results
        </em>
      </h2>

      <p class="text-[#5a7a52] text-sm max-w-xs leading-relaxed mb-10">
        From scrappy startups to established enterprises — we've helped brands break through and scale with smart, data-led marketing.
      </p>

      <!-- CTA -->
      <div class="flex items-center gap-4">
        <a
          href="/#"
          class="inline-flex items-center gap-3 bg-[#c8ff00] text-[#050f05] font-bold text-xs tracking-[0.2em] uppercase px-7 py-4 rounded-full hover:bg-white transition-all duration-300 group"
        >
          View Cases
          <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 12 12" fill="none">
            <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
        <a href="/contact" class="text-[#5a7a52] text-xs font-medium tracking-widest uppercase hover:text-[#c8ff00] transition-colors duration-300">
          Work With Us →
        </a>
      </div>
    </div>
  </div>

  <!-- ─────────────────────────────────────────────
       LOGOS MARQUEE BAR
  ───────────────────────────────────────────── -->
  <div class="relative border-y border-[#1a3a00] bg-[#030a03] py-4 overflow-hidden">
    <div class="flex gap-0 animate-marquee-logos">
      {#each Array(3) as _}
        {#each logos as logo}
          <div class="flex items-center gap-10 px-10 shrink-0">
            <!-- Stylised logo text — replace with real SVG logos -->
            <span class="text-[#2a4a22] text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap hover:text-[#5a7a52] transition-colors duration-300 cursor-default">
              {logo}
            </span>
            <span class="text-[#1a3a00] text-xs">✦</span>
          </div>
        {/each}
      {/each}
    </div>
  </div>

  <!-- ─────────────────────────────────────────────
       SECTION 2 — We Help Companies Grow
  ───────────────────────────────────────────── -->
  <div class="relative z-10 px-6 md:px-14 pt-24 pb-28">

    <!-- Heading -->
    <div class="text-center mb-4">
      <h2 class="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
        We Help Companies
        <em class="font-dm-serif font-light italic text-[#c8ff00]">Grow</em>
      </h2>
      <p class="text-[#5a7a52] text-sm mt-4 max-w-sm mx-auto leading-relaxed">
        A collection of projects we helped accelerate years ahead.
      </p>
      <a
        href="/#"
        class="inline-flex items-center gap-2 mt-6 border border-[#2a5a10] text-[#8aad78] text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all duration-300"
      >
        Case Studies
      </a>
    </div>

    <!-- Case Study Cards Carousel -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
      {#each caseStudies as cs, i}
        <div
          class="group relative rounded-2xl overflow-hidden bg-[#080f07] border border-[#1a3a00] hover:border-[#3a6a20] transition-all duration-500 cursor-pointer"
          class:opacity-100={visible}
          class:translate-y-0={visible}
          class:opacity-0={!visible}
          class:translate-y-10={!visible}
          style="transition-delay: {200 + i * 120}ms; transition-duration: 700ms;"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              src={cs.img}
              alt={cs.client}
              class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div class="absolute inset-0 bg-linear-to-t from-[#080f07] via-[#080f07]/40 to-transparent"></div>

            <!-- Tag pill -->
            <div class="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
              <span class="text-[9px] text-[#8aad78] tracking-[0.2em] uppercase">{cs.tag}</span>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-white font-bold text-base">{cs.client}</h3>
              <div class="w-7 h-7 rounded-full border border-[#2a5a10] flex items-center justify-center group-hover:bg-[#c8ff00] group-hover:border-[#c8ff00] transition-all duration-300">
                <svg class="w-3 h-3 text-[#5a7a52] group-hover:text-[#050f05] transition-colors duration-300" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <!-- Metrics grid (first card only) -->
            {#if cs.metrics.length}
              <div class="grid grid-cols-2 gap-3 mt-2">
                {#each cs.metrics as m}
                  <div class="bg-[#0d1a0b] rounded-xl p-3 border border-[#1a3a00]">
                    <p class="text-[#c8ff00] font-bold text-xl leading-none mb-1">{m.value}</p>
                    <p class="text-[#3a5a32] text-[9px] tracking-widest uppercase">{m.label}</p>
                  </div>
                {/each}
              </div>
            {:else}
              <p class="text-[#3a5a32] text-xs leading-relaxed">
                Crafting results that speak louder than promises. Click to explore.
              </p>
            {/if}
          </div>
        </div>
      {/each}
    </div>


  </div>
</section>

<style>
  .font-syne    { font-family: 'Syne', sans-serif; }
  .font-dm-serif { font-family: 'DM Serif Display', serif; }

  @keyframes marquee-logos {
    from { transform: translateX(0); }
    to   { transform: translateX(-33.333%); }
  }
  .animate-marquee-logos {
    animation: marquee-logos 22s linear infinite;
  }
</style>
<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  /**
     * @type {Element}
     */
  let sectionEl;
  let visible = $state(false);
  let activeIndustry = $state(0);
  let activeTechTab = $state('Frontend');

  const industries = [
    {
      number: '01',
      name: 'E-Commerce & Retail',
      icon: '🛍️',
      desc: 'We help DTC brands and online retailers scale profitably — from acquisition funnels and product page CRO to retention email flows and loyalty programs. We know what converts.',
      stats: [{ v: '4.8x', l: 'Avg. ROAS' }, { v: '62%', l: 'Lower CAC' }, { v: '3.1x', l: 'Revenue Growth' }],
      tags: ['Shopify', 'Meta Ads', 'Email Flows', 'CRO'],
    },
    {
      number: '02',
      name: 'SaaS & Tech',
      icon: '⚙️',
      desc: 'From PLG motions to enterprise demand gen, we build pipelines that fill up. We specialise in content-led SEO, paid search, and full-funnel nurture sequences for B2B and B2C SaaS.',
      stats: [{ v: '5.2x', l: 'Pipeline Growth' }, { v: '41%', l: 'Lower CPL' }, { v: '89%', l: 'Trial Conversion' }],
      tags: ['SEO', 'Google Ads', 'ABM', 'Product-Led Growth'],
    },
    {
      number: '03',
      name: 'Health & Wellness',
      icon: '🌿',
      desc: 'Navigating strict ad policies while still driving serious growth is our speciality. We build compliant, high-converting campaigns for supplements, fitness, mental health, and telehealth brands.',
      stats: [{ v: '210%', l: 'Organic Traffic' }, { v: '78%', l: 'Retention Rate' }, { v: '2.9x', l: 'Subscription LTV' }],
      tags: ['Compliant Creative', 'SEO', 'Influencer', 'CRM'],
    },
    {
      number: '04',
      name: 'Finance & Fintech',
      icon: '💳',
      desc: 'We craft trust-first brand strategies and performance campaigns for fintech disruptors and traditional finance brands — built around education, compliance, and conversion.',
      stats: [{ v: '320%', l: 'App Installs' }, { v: '54%', l: 'Cost per Sign-up' }, { v: '6.1x', l: 'User Growth' }],
      tags: ['Compliance-Safe Ads', 'Content', 'App Growth', 'SEO'],
    },
    {
      number: '05',
      name: 'Real Estate',
      icon: '🏙️',
      desc: 'From luxury residential to commercial property, we generate qualified leads at scale — using hyper-targeted paid media, video content, and automated nurture sequences that close deals.',
      stats: [{ v: '8.4x', l: 'Lead Volume' }, { v: '67%', l: 'Lower CPL' }, { v: '23d', l: 'Avg. Time to Close' }],
      tags: ['Meta Ads', 'Video', 'Lead Nurture', 'Local SEO'],
    },
  ];

  const techStack = {
    Frontend: [
      { name: 'SvelteKit',   logo: '⚡', desc: 'Our preferred framework for blazing-fast, SEO-optimised web builds.' },
      { name: 'React / Next',logo: '⚛️', desc: 'Battle-tested for complex SPAs, dashboards, and large-scale apps.' },
      { name: 'Webflow',     logo: '🌐', desc: 'Design-driven CMS builds with zero-code speed.' },
      { name: 'Tailwind CSS',logo: '🎨', desc: 'Utility-first styling — consistent, maintainable, rapid.' },
    ],
    Backend: [
      { name: 'Node.js',     logo: '🟢', desc: 'Scalable APIs and server-side logic powering our web apps.' },
      { name: 'Supabase',    logo: '🔷', desc: 'Open-source Firebase alternative — auth, DB, storage in one.' },
      { name: 'PostgreSQL',  logo: '🐘', desc: 'Relational power for data-heavy client projects.' },
      { name: 'Prisma ORM',  logo: '🔺', desc: 'Type-safe database access for modern Node/TypeScript stacks.' },
    ],
    Marketing: [
      { name: 'GA4 & GTM',   logo: '📊', desc: 'Full analytics instrumentation — events, funnels, attribution.' },
      { name: 'HubSpot',     logo: '🔶', desc: 'CRM, email flows, and pipeline automation for B2B clients.' },
      { name: 'Klaviyo',     logo: '📧', desc: 'Revenue-driving email & SMS for e-commerce brands.' },
      { name: 'Segment',     logo: '🔵', desc: 'Customer data platform unifying all touchpoints.' },
    ],
    Platforms: [
      { name: 'Meta Ads',    logo: '📘', desc: 'Full-funnel paid social across Facebook & Instagram.' },
      { name: 'Google Ads',  logo: '🔍', desc: 'Search, Display, YouTube — intent-driven demand capture.' },
      { name: 'TikTok Ads',  logo: '🎵', desc: 'Creative-first performance campaigns for Gen Z & Millennial audiences.' },
      { name: 'Shopify Plus', logo: '🛒', desc: 'Enterprise e-commerce builds and growth integrations.' },
    ],
  };

  const tabs = Object.keys(techStack);

  /**
     * @param {number} i
     */
  function setIndustry(i) { activeIndustry = i; }
  /**
     * @param {string} t
     */
  function setTab(t) { activeTechTab = t; }

  onMount(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visible = true; },
      { threshold: 0.1 }
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section
  bind:this={sectionEl}
  class="relative bg-[#050f05] overflow-hidden font-syne"
>

  <!-- ── Ambient glows ── -->
  <div class="pointer-events-none absolute inset-0 z-0">
    <div class="absolute top-[10%] right-[-10%] w-125 h-125 rounded-full bg-[#1a4a00] opacity-25 blur-[140px]"></div>
    <div class="absolute bottom-[5%] left-[-5%] w-100 h-100 rounded-full bg-[#0a3a00] opacity-30 blur-[120px]"></div>
  </div>

  <!-- ════════════════════════════════════════════
       PART 1 — INDUSTRY VERTICALS
  ════════════════════════════════════════════ -->
  <div class="relative z-10 px-6 md:px-14 pt-24 md:pt-32 pb-20">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div
        class="mb-14 transition-all duration-700"
        class:opacity-100={visible} class:translate-y-0={visible}
        class:opacity-0={!visible}  class:translate-y-6={!visible}
      >
        <div class="inline-flex items-center gap-2 mb-5">
          <span class="block w-5 h-px bg-[#c8ff00]"></span>
          <span class="text-[#8aad78] text-[10px] tracking-[0.3em] uppercase font-medium">Industry Focus</span>
        </div>
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 class="text-white text-4xl md:text-6xl font-bold leading-tight">
            Industries we
            <em class="font-dm-serif font-light" style="font-style:italic"> master.</em>
          </h2>
          <p class="text-[#5a7a52] text-sm max-w-xs leading-relaxed">
            Deep vertical expertise means we hit the ground running — no learning curve, just results.
          </p>
        </div>
      </div>

      <!-- Industry layout: accordion list left + detail panel right -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-start">

        <!-- Left: accordion list -->
        <div class="divide-y divide-[#1a3a00]">
          {#each industries as ind, i}
            <div
              class="transition-all duration-700"
              class:opacity-100={visible} class:translate-x-0={visible}
              class:opacity-0={!visible} class:-translate-x-6={!visible}
              style="transition-delay:{100 + i * 70}ms"
            >
              <!-- svelte-ignore event_directive_deprecated -->
              <button
                on:click={() => setIndustry(i)}
                class="w-full flex items-center gap-5 py-5 text-left group"
              >
                <!-- Number -->
                <span class="text-[#2a4a22] text-xs font-bold tracking-widest shrink-0 w-6">{ind.number}</span>

                <!-- Icon bubble -->
                <div
                  class="w-9 h-9 rounded-full flex items-center justify-center text-base shrink-0 border transition-all duration-300"
                  class:bg-[#c8ff00]={activeIndustry === i}
                  class:border-[#c8ff00]={activeIndustry === i}
                  class:bg-[#0d1a0b]={activeIndustry !== i}
                  class:border-[#1a3a00]={activeIndustry !== i}
                  class:group-hover:border-[#3a6a20]={activeIndustry !== i}
                >
                  {ind.icon}
                </div>

                <!-- Name -->
                <span
                  class="font-bold text-base md:text-lg transition-colors duration-300 flex-1 text-left"
                  class:text-white={activeIndustry === i}
                  class:text-[#5a7a52]={activeIndustry !== i}
                  class:group-hover:text-[#8aad78]={activeIndustry !== i}
                >
                  {ind.name}
                </span>

                <!-- Tags (desktop, active only) -->
                <div class="hidden md:flex items-center gap-1.5 shrink-0">
                  {#if activeIndustry === i}
                    {#each ind.tags.slice(0,2) as tag}
                      <span class="bg-[#0d1a0b] border border-[#2a5a10] text-[#8aad78] text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    {/each}
                  {/if}
                </div>

                <!-- Chevron -->
                <svg
                  class="w-4 h-4 shrink-0 transition-all duration-300"
                  class:text-[#c8ff00]={activeIndustry === i}
                  class:rotate-90={activeIndustry === i}
                  class:text-[#2a4a22]={activeIndustry !== i}
                  viewBox="0 0 12 12" fill="none"
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <!-- Mobile inline expand -->
              {#if activeIndustry === i}
                <div class="lg:hidden pb-6" transition:slide={{ duration: 300 }}>
                  <div class="bg-[#080f07] border border-[#1a3a00] rounded-2xl p-5">
                    <p class="text-[#8aad78] text-sm leading-relaxed mb-5">{ind.desc}</p>
                    <div class="grid grid-cols-3 gap-3 mb-5">
                      {#each ind.stats as s}
                        <div class="bg-[#0d1a0b] border border-[#1a3a00] rounded-xl p-3 text-center">
                          <p class="text-[#c8ff00] font-bold text-xl leading-none mb-1">{s.v}</p>
                          <p class="text-[#3a5a32] text-[9px] tracking-widest uppercase leading-snug">{s.l}</p>
                        </div>
                      {/each}
                    </div>
                    <div class="flex flex-wrap gap-2">
                      {#each ind.tags as tag}
                        <span class="bg-[#050f05] border border-[#2a5a10] text-[#8aad78] text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-full">{tag}</span>
                      {/each}
                    </div>
                  </div>
                </div>
              {/if}
            </div>
          {/each}
        </div>

        <!-- Right: sticky detail card (desktop only) -->
        <div
          class="hidden lg:block sticky top-10 transition-all duration-700 delay-300"
          class:opacity-100={visible} class:translate-x-0={visible}
          class:opacity-0={!visible} class:translate-x-6={!visible}
        >
          {#key activeIndustry}
            <div
              class="bg-[#080f07] border border-[#1a3a00] rounded-2xl p-7 shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
              in:slide={{ duration: 300, axis: 'y' }}
            >
              <!-- Industry header -->
              <div class="flex items-center gap-3 mb-6 pb-5 border-b border-[#1a3a00]">
                <div class="w-11 h-11 rounded-xl bg-[#c8ff00] flex items-center justify-center text-xl">
                  {industries[activeIndustry].icon}
                </div>
                <div>
                  <p class="text-white font-bold text-sm">{industries[activeIndustry].name}</p>
                  <p class="text-[#3a5a32] text-[10px] tracking-widest uppercase mt-0.5">Industry Vertical</p>
                </div>
              </div>

              <!-- Description -->
              <p class="text-[#8aad78] text-sm leading-relaxed mb-6">
                {industries[activeIndustry].desc}
              </p>

              <!-- Stats grid -->
              <div class="grid grid-cols-3 gap-3 mb-6">
                {#each industries[activeIndustry].stats as s}
                  <div class="bg-[#0d1a0b] border border-[#1a3a00] rounded-xl p-3 text-center">
                    <p class="text-[#c8ff00] font-bold text-2xl leading-none mb-1">{s.v}</p>
                    <p class="text-[#3a5a32] text-[9px] tracking-widest uppercase leading-snug">{s.l}</p>
                  </div>
                {/each}
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                {#each industries[activeIndustry].tags as tag}
                  <span class="bg-[#050f05] border border-[#2a5a10] text-[#8aad78] text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                {/each}
              </div>

              <!-- CTA -->
              <a
                href="/industries/{industries[activeIndustry].name.toLowerCase().replace(/\s+&?\s*/g, '-')}"
                class="flex items-center justify-center gap-2 bg-[#c8ff00] text-[#050f05] font-bold text-[10px] tracking-[0.2em] uppercase px-5 py-3.5 rounded-full hover:bg-white transition-all duration-300 group"
              >
                Explore {industries[activeIndustry].name.split(' ')[0]} Solutions
                <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </a>
            </div>
          {/key}
        </div>

      </div>
    </div>
  </div>

  <!-- Divider -->
  <div class="relative z-10 px-6 md:px-14">
    <div class="max-w-6xl mx-auto h-px bg-linear-to-r from-transparent via-[#2a5a10] to-transparent"></div>
  </div>

  <!-- ════════════════════════════════════════════
       PART 2 — TECH STACK
  ════════════════════════════════════════════ -->
  <div class="relative z-10 px-6 md:px-14 py-24 md:py-32">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div
        class="mb-14 transition-all duration-700 delay-100"
        class:opacity-100={visible} class:translate-y-0={visible}
        class:opacity-0={!visible}  class:translate-y-6={!visible}
      >
        <div class="inline-flex items-center gap-2 mb-5">
          <span class="block w-5 h-px bg-[#c8ff00]"></span>
          <span class="text-[#8aad78] text-[10px] tracking-[0.3em] uppercase font-medium">Our Stack</span>
        </div>
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 class="text-white text-4xl md:text-6xl font-bold leading-tight">
            Technology we
            <em class="font-dm-serif font-light" style="font-style:italic"> build with.</em>
          </h2>
          <p class="text-[#5a7a52] text-sm max-w-xs leading-relaxed">
            Best-in-class tools chosen for performance, reliability, and real business outcomes.
          </p>
        </div>
      </div>

      <!-- Tab bar -->
      <div class="flex gap-1 p-1 bg-[#080f07] border border-[#1a3a00] rounded-full w-fit mb-10 flex-wrap">
        {#each tabs as tab}
          <!-- svelte-ignore event_directive_deprecated -->
          <button
            on:click={() => setTab(tab)}
            class="px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
            class:bg-[#c8ff00]={activeTechTab === tab}
            class:text-[#050f05]={activeTechTab === tab}
            class:text-[#5a7a52]={activeTechTab !== tab}
            class:hover:text-[#8aad78]={activeTechTab !== tab}
          >
            {tab}
          </button>
        {/each}
      </div>

      <!-- Tech cards grid -->
      {#key activeTechTab}
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          in:slide={{ duration: 250, axis: 'y' }}
        >
          {#each techStack[activeTechTab] as tool, i}
            <div
              class="group relative bg-[#080f07] border border-[#1a3a00] rounded-2xl p-5 hover:border-[#3a6a20] transition-all duration-500 cursor-default overflow-hidden"
              class:opacity-100={visible} class:translate-y-0={visible}
              class:opacity-0={!visible}  class:translate-y-8={!visible}
              style="transition-delay:{200 + i * 80}ms; transition-duration:600ms"
            >
              <!-- Hover glow -->
              <div class="absolute inset-0 bg-linear-to-br from-[#c8ff00]/0 via-transparent to-transparent group-hover:from-[#c8ff00]/5 transition-all duration-500 pointer-events-none rounded-2xl"></div>

              <!-- Logo bubble -->
              <div class="w-12 h-12 rounded-xl bg-[#0d1a0b] border border-[#1a3a00] flex items-center justify-center text-2xl mb-4 group-hover:border-[#3a6a20] transition-colors duration-300">
                {tool.logo}
              </div>

              <!-- Name -->
              <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#c8ff00] transition-colors duration-300">
                {tool.name}
              </h4>

              <!-- Desc -->
              <p class="text-[#4a6a42] text-xs leading-relaxed">{tool.desc}</p>

              <!-- Corner accent -->
              <div class="absolute bottom-4 right-4 w-6 h-6 rounded-full border border-[#1a3a00] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg class="w-2.5 h-2.5 text-[#c8ff00]" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          {/each}
        </div>
      {/key}

      <!-- Bottom trust strip -->
      <div
        class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 delay-500"
        class:opacity-100={visible} class:translate-y-0={visible}
        class:opacity-0={!visible}  class:translate-y-4={!visible}
      >
        {#each [
          { icon: '🔒', title: 'Security First',    desc: 'Every build follows OWASP best practices and undergoes security review before launch.' },
          { icon: '⚡', title: 'Performance Obsessed', desc: 'Sub-2s load times. 90+ Lighthouse scores. Fast pages rank higher and convert better.' },
          { icon: '📈', title: 'Built to Scale',    desc: 'Architecture decisions made with tomorrow\'s traffic in mind, not just today\'s.' },
        ] as card}
          <div class="flex items-start gap-4 bg-[#080f07] border border-[#1a3a00] rounded-2xl p-5 hover:border-[#2a5a10] transition-colors duration-300">
            <span class="text-2xl shrink-0">{card.icon}</span>
            <div>
              <p class="text-white font-bold text-sm mb-1">{card.title}</p>
              <p class="text-[#4a6a42] text-xs leading-relaxed">{card.desc}</p>
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>

</section>

<style>
  .font-syne     { font-family: 'Syne', sans-serif; }
  .font-dm-serif { font-family: 'DM Serif Display', serif; }
</style>
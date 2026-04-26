<script>
  import { onMount } from 'svelte';

  /**
     * @type {Element}
     */
  let sectionEl;
  /**
     * @type {Element}
     */
  let ctaEl;
  
  let visible = $state(false);
  let ctaVisible = $state(false);

  const testimonials = [
    {
      company: 'SK Ventures',
      quote:
        'These guys are the real deal. Effective, efficient, and a pleasure to work with. They quickly understood and aligned their work to help us better understand the nuances of our business. Would highly recommend working with them.',
      author: 'Sarah K.',
      role: 'Founder, SK Ventures',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      rating: 5,
    },
    {
      company: 'Meridian Labs',
      quote:
        'The team at Adspace completely transformed our digital presence. Our lead volume tripled within 60 days of launching the new campaign strategy. Genuinely one of the best agencies we have ever worked with.',
      author: 'James T.',
      role: 'CMO, Meridian Labs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      rating: 5,
    },
    {
      company: 'Bloom Studio',
      quote:
        'Working with Adspace felt less like hiring an agency and more like gaining a strategic partner. They pushed back when needed, brought fresh ideas constantly, and delivered results that exceeded our expectations.',
      author: 'Priya M.',
      role: 'CEO, Bloom Studio',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      rating: 5,
    },
  ];


  onMount(() => {
    const obs = (/** @type {Element} */ el, /** @type {{ (v: any): any; (v: any): any; (v: any): any; (arg0: boolean): void; }} */ setter) => {
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setter(true); },
        { threshold: 0.15 }
      );
      if (el) o.observe(el);
      return () => o.disconnect();
    };
    const d1 = obs(sectionEl,  v => visible     = v);
    const d2 = obs(ctaEl,      v => ctaVisible  = v);
    return () => { d1(); d2(); };
  });
</script>

<!-- ─────────────────────────────────────────────
     TESTIMONIALS
───────────────────────────────────────────── -->
<section
  bind:this={sectionEl}
  class="relative bg-[#050f05] overflow-hidden font-syne py-24 md:py-32 px-6 md:px-14"
>
  <!-- Glow -->
  <div class="pointer-events-none absolute inset-0 z-0">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-[#1a4a00] opacity-20 blur-[130px]"></div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto">

    <!-- Header -->
    <div
      class="text-center mb-16 transition-all duration-700"
      class:opacity-100={visible} class:translate-y-0={visible}
      class:opacity-0={!visible}  class:translate-y-6={!visible}
    >
      <div class="inline-flex items-center gap-2 mb-5">
        <span class="block w-5 h-px bg-[#c8ff00]"></span>
        <span class="text-[#8aad78] text-[10px] tracking-[0.3em] uppercase font-medium">Social Proof</span>
        <span class="block w-5 h-px bg-[#c8ff00]"></span>
      </div>
      <h2 class="text-white text-4xl md:text-6xl font-bold leading-tight">
        What our clients are
        <em class="font-dm-serif font-light" style="font-style:italic">saying.</em>
      </h2>
    </div>

    <!-- Testimonial cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      {#each testimonials as t, i}
        <div
          class="relative rounded-2xl border border-[#1a3a00] bg-[#080f07] p-7 flex flex-col gap-6 hover:border-[#3a6a20] transition-all duration-500 group"
          class:opacity-100={visible} class:translate-y-0={visible}
          class:opacity-0={!visible}  class:translate-y-10={!visible}
          style="transition-delay:{200 + i*120}ms; transition-duration:700ms"
        >
          <!-- Quote mark -->
          <div class="text-[#1a4a00] text-6xl font-serif leading-none select-none group-hover:text-[#2a6a00] transition-colors duration-300">"</div>

          <!-- Company badge -->
          <div class="absolute top-6 right-6 bg-[#0d1a0b] border border-[#1a3a00] rounded-full px-3 py-1">
            <span class="text-[9px] text-[#5a7a52] tracking-[0.2em] uppercase font-medium">{t.company}</span>
          </div>

          <!-- Stars -->
          <div class="flex gap-1 -mt-4">
            {#each Array(t.rating) as _}
              <svg class="w-3 h-3 text-[#c8ff00]" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 1l1.2 3.6H11L8.1 6.8l1.1 3.6L6 8.5l-3.2 1.9 1.1-3.6L1 4.6h3.8z"/>
              </svg>
            {/each}
          </div>

          <!-- Quote -->
          <p class="text-[#8aad78] text-sm leading-relaxed flex-1">{t.quote}</p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-[#1a3a00]">
            <img
              src={t.avatar}
              alt={t.author}
              class="w-9 h-9 rounded-full object-cover grayscale"
            />
            <div>
              <p class="text-white text-xs font-bold">{t.author}</p>
              <p class="text-[#3a5a32] text-[10px] tracking-wide">{t.role}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Globe / trust badge row -->
    <div
      class="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-500"
      class:opacity-100={visible} class:translate-y-0={visible}
      class:opacity-0={!visible}  class:translate-y-4={!visible}
    >
      <div class="flex items-center gap-3 border border-[#1a3a00] rounded-full px-6 py-3 bg-[#080f07]">
        <!-- Globe icon -->
        <svg class="w-5 h-5 text-[#c8ff00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span class="text-[#8aad78] text-xs tracking-widest uppercase font-medium">Trusted by brands worldwide</span>
      </div>
      <div class="flex -space-x-2">
        {#each testimonials as t}
          <img src={t.avatar} alt="" class="w-8 h-8 rounded-full border-2 border-[#050f05] object-cover grayscale"/>
        {/each}
        <div class="w-8 h-8 rounded-full border-2 border-[#050f05] bg-[#1a3a00] flex items-center justify-center">
          <span class="text-[#c8ff00] text-[9px] font-bold">+40</span>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ─────────────────────────────────────────────
     LIME CTA BANNER
───────────────────────────────────────────── -->
<section
  bind:this={ctaEl}
  class="relative bg-[#c8ff00] overflow-hidden font-syne py-20 md:py-24 px-6 md:px-14"
>
  <!-- Decorative circles -->
  <div class="pointer-events-none absolute inset-0 z-0">
    <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-[#050f05]/10"></div>
    <div class="absolute -bottom-24 -left-16 w-80 h-80 rounded-full border border-[#050f05]/10"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full border border-[#050f05]/05"></div>
  </div>

  <div
    class="relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000"
    class:opacity-100={ctaVisible} class:scale-100={ctaVisible} class:translate-y-0={ctaVisible}
    class:opacity-0={!ctaVisible}  class:scale-95={!ctaVisible} class:translate-y-8={!ctaVisible}
  >
    <!-- Eyebrow -->
    <div class="inline-flex items-center gap-2 mb-6">
      <span class="block w-5 h-px bg-[#050f05]/40"></span>
      <span class="text-[#050f05]/60 text-[10px] tracking-[0.3em] uppercase font-medium">Get In Touch</span>
      <span class="block w-5 h-px bg-[#050f05]/40"></span>
    </div>

    <!-- Headline -->
    <h2 class="text-[#050f05] font-bold text-4xl md:text-6xl lg:text-7xl leading-none mb-4">
      Let us help your company
      <br />
      <em class="font-dm-serif font-light" style="font-style:italic">accelerate years ahead</em>
    </h2>

    <p class="text-[#050f05]/60 text-sm max-w-md mx-auto leading-relaxed mb-10">
      Ready to stop guessing and start growing? Let's talk about what's possible for your brand.
    </p>

    <!-- CTA button -->
    <a
      href="/contact"
      class="inline-flex items-center gap-3 bg-[#050f05] text-[#c8ff00] font-bold text-xs tracking-[0.2em] uppercase px-8 py-5 rounded-full hover:bg-[#0d2200] transition-all duration-300 group"
    >
      Start Now
      <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 12 12" fill="none">
        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </a>

    <!-- Floating smiley -->
    <div class="mt-12 flex justify-center">
      <div class="w-12 h-12 rounded-full border-2 border-[#050f05]/20 flex items-center justify-center">
        <svg class="w-6 h-6 text-[#050f05]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke-linecap="round"/>
          <circle cx="9" cy="10" r="0.5" fill="currentColor"/>
          <circle cx="15" cy="10" r="0.5" fill="currentColor"/>
        </svg>
      </div>
    </div>
  </div>
</section>

<!-- ─────────────────────────────────────────────
     FOOTER
───────────────────────────────────────────── -->


<style>
  .font-syne     { font-family: 'Syne', sans-serif; }
  .font-dm-serif { font-family: 'DM Serif Display', serif; }
</style>
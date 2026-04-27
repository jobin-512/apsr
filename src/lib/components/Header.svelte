<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import logo from "$lib/assets/favicon.png"

  let mounted = $state(false);
  let mobileOpen = $state(false);
  let servicesOpen = $state(false);
  let mobileServicesOpen = $state(false);

  const serviceItems = [
    { icon: '📈', label: 'Marketing Strategy',    desc: 'Data-led go-to-market plans',    href: '/services/marketing-strategy' },
    { icon: '📣', label: 'Digital Advertising',   desc: 'Meta, Google, TikTok & more',    href: '/services/digital-advertising' },
    { icon: '🎨', label: 'Content & Creative',    desc: 'Campaigns that stop the scroll',  href: '/services/content-creative' },
    { icon: '💻', label: 'Web Design & Dev',      desc: 'Fast, beautiful, conversion-led', href: '/services/web-design' },
    { icon: '🔍', label: 'SEO & Growth',          desc: 'Organic visibility at scale',     href: '/services/seo-growth' },
    { icon: '📊', label: 'Analytics & CRO',       desc: 'Turn data into decisions',        href: '/services/analytics-cro' },
  ];

  function toggleMenu() { mobileOpen = !mobileOpen; }
  function closeMenu()  { mobileOpen = false; mobileServicesOpen = false; }

  onMount(() => { mounted = true; });

  /**
     * @type {string | number | NodeJS.Timeout | undefined}
     */
  let closeTimeout;

  function openServices() {
    clearTimeout(closeTimeout);
    servicesOpen = true;
  }

  function closeServices() {
    closeTimeout = setTimeout(() => {
      servicesOpen = false;
    }, 120); // small delay = smooth UX
  }
</script>


<!-- Hero Section -->
<section class="hero-wrapper sticky top-0 z-50 bg-[#050f05] overflow-visible font-syne">

  <!-- Ambient glow blobs -->
  <div class="pointer-events-none absolute inset-0 z-0">
    <div class="absolute top-[10%] right-[5%] w-75 h-75 rounded-full bg-[#3aff00] opacity-10 blur-[80px]"></div>
    <div class="absolute bottom-[0%] left-[10%] w-100 h-100 rounded-full bg-[#0a2a00] opacity-60 blur-[100px]"></div>
  </div>

  <!-- Navbar -->
  <nav class="relative z-30 flex items-center justify-between px-6 md:px-14 py-5">

    <!-- Logo -->
    <a href="/" class="flex items-center gap-2 group shrink-0">
      <div class="w-7 h-7 rounded-md  flex items-center justify-center">
      <img src={logo} alt="">
      </div>
      <span class="text-white font-bold text-sm tracking-[0.2em] uppercase">APSR Infotech</span>
    </a>

    <!-- ── Desktop Nav ── -->
    <div class="hidden md:flex items-center gap-8">

      <!-- Services with dropdown -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <!-- svelte-ignore event_directive_deprecated -->
      <div
        class="relative"
        on:mouseenter={openServices}
        on:mouseleave={closeServices}
      >
        <!-- Trigger -->
        <button
          class="flex items-center gap-1.5 text-[#8aad78] text-xs font-medium tracking-widest uppercase hover:text-[#c8ff00] transition-colors duration-300 outline-none"
          aria-haspopup="true"
          aria-expanded={servicesOpen}
        >
          Services
          <svg
            class="w-3 h-3 transition-transform duration-300"
            class:rotate-180={servicesOpen}
            viewBox="0 0 12 12" fill="none"
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Dropdown panel -->
        {#if servicesOpen}
          <div
            class="top-full left-1/2 -translate-x-1/2 mt-4 w-130 absolute "
            transition:slide={{ duration: 220, axis: 'y' }}
          >
            <!-- Arrow notch -->
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
              <div class="w-3 h-3 bg-[#0d1a0b] border-l border-t border-[#2a5a10] rotate-45 mx-auto mt-1"></div>
            </div>

            <div class="bg-[#0d1a0b] border border-[#2a5a10] rounded-2xl p-4 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
              <!-- Header row -->
              <div class="flex items-center justify-between px-2 pb-3 mb-3 border-b border-[#1a3a00]">
                <span class="text-[#5a7a52] text-[10px] tracking-[0.3em] uppercase font-medium">What We Offer</span>
                <a href="/services" class="text-[#c8ff00] text-[10px] font-bold tracking-widest uppercase hover:underline">
                  View All →
                </a>
              </div>

              <!-- Service grid -->
              <div class="grid grid-cols-2 gap-1.5 ">
                {#each serviceItems as svc}
                  <a
                    href={svc.href}
                    class="group/item flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-[#1a3a00]/60 transition-all duration-200"
                  >
                    <span class="text-lg leading-none mt-0.5 shrink-0">{svc.icon}</span>
                    <div class="min-w-0">
                      <p class="text-white text-xs font-semibold tracking-wide group-hover/item:text-[#c8ff00] transition-colors duration-200 truncate">
                        {svc.label}
                      </p>
                      <p class="text-[#4a6a42] text-[10px] leading-snug mt-0.5 truncate">{svc.desc}</p>
                    </div>
                    <svg class="w-3 h-3 text-[#2a5a10] shrink-0 mt-0.5 ml-auto opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all duration-200" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                {/each}
              </div>

              <!-- Footer CTA -->
              <div class="mt-3 pt-3 border-t border-[#1a3a00] px-2 flex items-center justify-between">
                <p class="text-[#3a5a32] text-[10px]">Not sure where to start?</p>
                <a
                  href="/get-started"
                  class="inline-flex items-center gap-1.5 bg-[#c8ff00] text-[#050f05] font-bold text-[10px] tracking-widest uppercase px-4 py-2 rounded-full hover:bg-white transition-colors duration-200"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        {/if}
      </div>

      <!-- Other links -->
      {#each ['Work', 'Blog', 'About', 'Contact'] as link}
        <a
          href="/{link.toLowerCase()}"
          class="text-[#8aad78] text-xs font-medium tracking-widest uppercase hover:text-[#c8ff00] transition-colors duration-300"
        >
          {link}
        </a>
      {/each}
    </div>

    <!-- Desktop CTA -->
    <a
      href="/get-started"
      class="hidden md:inline-flex items-center gap-2 bg-[#c8ff00] text-[#050f05] font-bold text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full hover:bg-white transition-all duration-300"
    >
      Get Started
    </a>

    <!-- ── Mobile Hamburger ── -->
    <button
      on:click={toggleMenu}
      class="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={mobileOpen}
    >
      <span
        class="block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center"
        class:rotate-45={mobileOpen}
        class:translate-y-[7px]={mobileOpen}
      ></span>
      <span
        class="block w-4 h-[2px] bg-white rounded-full transition-all duration-300 self-end"
        class:opacity-0={mobileOpen}
        class:scale-x-0={mobileOpen}
      ></span>
      <span
        class="block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center"
        class:-rotate-45={mobileOpen}
        class:-translate-y-[7px]={mobileOpen}
      ></span>
    </button>
  </nav>

  <!-- ── Mobile Backdrop ── -->
  {#if mobileOpen}
    <div
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
      on:click={closeMenu}
      aria-hidden="true"
    ></div>
  {/if}

  <!-- ── Mobile Drawer ── -->
  <div
    class="fixed top-0 right-0 z-40 h-full w-[80vw] max-w-xs bg-[#070f07] border-l border-[#1a3a00] flex flex-col pt-24 pb-10 md:hidden overflow-y-auto transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
    class:translate-x-0={mobileOpen}
    class:translate-x-full={!mobileOpen}
    aria-hidden={!mobileOpen}
  >
    <!-- Glow -->
    <div class="pointer-events-none absolute top-0 right-0 w-40 h-40 rounded-full bg-[#c8ff00] opacity-5 blur-[60px]"></div>

    <ul class="flex flex-col px-8">

      <!-- ── Services accordion item ── -->
      <li>
        <button
          on:click={() => mobileServicesOpen = !mobileServicesOpen}
          class="w-full flex items-center justify-between py-4 border-b border-[#1a3a00] text-[#8aad78] text-sm font-semibold tracking-[0.2em] uppercase transition-colors duration-200"
          class:text-[#c8ff00]={mobileServicesOpen}
        >
          Services
          <svg
            class="w-3.5 h-3.5 transition-transform duration-300 shrink-0"
            class:rotate-180={mobileServicesOpen}
            viewBox="0 0 12 12" fill="none"
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Mobile services sub-list -->
        {#if mobileServicesOpen}
          <ul
            class="bg-[#0a1a08] rounded-xl mx-0 my-2 overflow-hidden border border-[#1a3a00]"
            transition:slide={{ duration: 280 }}
          >
            {#each serviceItems as svc, si}
              <li>
                <a
                  href={svc.href}
                  on:click={closeMenu}
                  class="flex items-center gap-3 px-4 py-3 hover:bg-[#1a3a00]/60 transition-colors duration-200 border-b border-[#1a3a00] last:border-b-0"
                >
                  <span class="text-base shrink-0">{svc.icon}</span>
                  <div>
                    <p class="text-white text-xs font-semibold">{svc.label}</p>
                    <p class="text-[#4a6a42] text-[10px] leading-snug">{svc.desc}</p>
                  </div>
                </a>
              </li>
            {/each}

            <!-- View all link -->
            <li>
              <a
                href="/services"
                on:click={closeMenu}
                class="flex items-center justify-center gap-2 px-4 py-3 text-[#c8ff00] text-[10px] font-bold tracking-widest uppercase hover:bg-[#1a3a00]/60 transition-colors duration-200"
              >
                View All Services →
              </a>
            </li>
          </ul>
        {/if}
      </li>

      <!-- Other nav links -->
      {#each ['Work', 'Blog', 'About', 'Contact'] as link, i}
        <li style="transition-delay:{mobileOpen ? (i + 1) * 60 : 0}ms">
          <a
            href="/{link.toLowerCase()}"
            on:click={closeMenu}
            class="group flex items-center justify-between py-4 border-b border-[#1a3a00] text-[#8aad78] text-sm font-semibold tracking-[0.2em] uppercase hover:text-[#c8ff00] transition-colors duration-200"
          >
            {link}
            <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" viewBox="0 0 12 12" fill="none">
              <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </a>
        </li>
      {/each}
    </ul>

    <!-- Mobile CTA -->
    <div class="px-8 mt-8">
      <a
        href="/get-started"
        on:click={closeMenu}
        class="flex items-center justify-center gap-2 bg-[#c8ff00] text-[#050f05] font-bold text-xs tracking-[0.2em] uppercase px-6 py-4 rounded-full hover:bg-white transition-all duration-300"
      >
        Get Started
        <svg class="w-3 h-3" viewBox="0 0 12 12" fill="none">
          <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>
    </div>

    <p class="mt-auto px-8 text-[#3a5a32] text-[10px] tracking-widest uppercase">
      Full-Service Digital Agency
    </p>
  </div>

</section>

<style>
  :global(.font-syne) {
    font-family: 'Syne', sans-serif;
  }

  :global(.font-dm-serif) {
    font-family: 'DM Serif Display', serif;
  }
:global(html, body) {
  overflow-x: hidden;
}
  .hero-wrapper {
    font-family: 'Syne', sans-serif;
  }

  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(32px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-left {
    from {
      opacity: 0;
      transform: translateX(32px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
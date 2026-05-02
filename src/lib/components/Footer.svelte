<script>
  import { onMount } from 'svelte';
  import logo from "$lib/assets/logo.webp"
    /**
         * @type {Element}
         */
    let footerEl;

    let footerVisible = $state(false);

    const footerLinks = {
    Services: [
      {title:'mobile app',
        href:"/services/mobile-app"
      },
      {title:'Website Development',
        href:"/services/web-design"
      },
      {title:'Virtual Assistant',
        href:"/services/virtual-assistant"
      },
      {title:'SEO',
        href:"/services/seo-growth"
      }
    ],
    Connect:  [
      {title:'LinkedIn',
        href:"https://www.linkedin.com/company/apsr-infotech"
      },
      {title:'Instagram',
        href:"https://www.instagram.com/apsr_infotech/"
      },
    ],
  };

    onMount(()=>{
    const obs = (/** @type {Element} */ el, /** @type {{ (v: any): any; (v: any): any; (v: any): any; (arg0: boolean): void; }} */ setter) => {
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setter(true); },
        { threshold: 0.15 }
      );
      if (el) o.observe(el);
      return () => o.disconnect();
    };
    const d3 = obs(footerEl,   v => footerVisible = v);
    return ()=>{d3()}
    })

</script>

<footer
  bind:this={footerEl}
  class="relative bg-[#030a03] overflow-hidden font-syne pt-20 pb-10 px-6 md:px-14 border-t border-[#1a3a00]"
>
  <!-- Glow -->
  <div class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-50 rounded-full bg-[#c8ff00] opacity-[0.03] blur-[80px]"></div>

  <div
    class="relative z-10 max-w-6xl mx-auto transition-all duration-700"
    class:opacity-100={footerVisible} class:translate-y-0={footerVisible}
    class:opacity-0={!footerVisible}  class:translate-y-6={!footerVisible}
  >
    <!-- Top row: logo + newsletter -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pb-14 border-b border-[#1a3a00]">

      <!-- Logo + tagline -->
      <div>
        <a href="/" class="inline-flex items-center gap-2 mb-4">
        <img src={logo} alt="">
        </a>
        <p class="text-[#3a5a32] text-sm leading-relaxed max-w-xs">
          Sign up to harness the power of APSR Infotech.
        </p>
      </div>

      <!-- Newsletter -->
      <div class="flex flex-col justify-end">
        <p class="text-[#5a7a52] text-xs tracking-widest uppercase mb-4">Newsletter</p>
        <div class="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            class="flex-1 bg-[#0a1a08] border border-[#1a3a00] rounded-full px-5 py-3 text-xs text-white placeholder-[#3a5a32] outline-none focus:border-[#c8ff00] transition-colors duration-300"
          />
          <button
            class="bg-[#c8ff00] text-[#050f05] font-bold text-xs tracking-[0.15em] uppercase px-5 py-3 rounded-full hover:bg-white transition-colors duration-300 shrink-0"
          >
            Join →
          </button>
        </div>
      </div>
    </div>

    <!-- Middle row: links -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-[#1a3a00]">

      <!-- Brand column -->
      <div>
        <p class="text-[#3a5a32] text-[10px] tracking-[0.3em] uppercase font-medium mb-5">APSR Infotech</p>
        <ul class="space-y-3">
          {#each ['Services', 'About', 'Contact', 'Privacy Policy'] as link}
            <li>
              <a href="/{link.toLowerCase().replace(/\s+/g,'-')}" class="text-[#5a7a52] text-xs hover:text-[#c8ff00] transition-colors duration-300">
                {link}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Dynamic columns -->
      {#each Object.entries(footerLinks) as [col, links]}
        <div>
          <p class="text-[#3a5a32] text-[10px] tracking-[0.3em] uppercase font-medium mb-5">{col}</p>
          <ul class="space-y-3">
            {#each links as link}
              <li>
                <a href="{link.href}" class="text-[#5a7a52] text-xs hover:text-[#c8ff00] transition-colors duration-300">
                  {link.title}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}


       <div>
          <p class="text-[#3a5a32] text-[10px] tracking-[0.3em] uppercase font-medium mb-5">Contact</p>
          <ul class="space-y-3">
              <li>
                <a href="tel:+1 4404620956" class="text-[#5a7a52] text-xs hover:text-[#c8ff00] transition-colors duration-300">
                +1 4404620956
                </a>
              </li>
              <li>
                <a href="mailto:Info@apsrinfotech.com" class="text-[#5a7a52] text-xs hover:text-[#c8ff00] transition-colors duration-300">
                Info@apsrinfotech.com
                </a>
              </li>
              <li>
                <p  class="text-[#5a7a52] text-xs hover:text-[#c8ff00] transition-colors duration-300">
                30 N Gould St Ste R Sheridan, WY 82801, United States
                </p>
              </li>
          </ul>
        </div>
    </div>

    <!-- Bottom row: copyright -->
    <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-[#2a4a22] text-[10px] tracking-widest uppercase">
        © {new Date().getFullYear()} APSR Infotech. All rights reserved.
      </p>
      <div class="flex items-center gap-6">
        {#each ['Terms', 'Cookies'] as link}
          <a href="/{link.toLowerCase()}" class="text-[#2a4a22] text-[10px] tracking-widest uppercase hover:text-[#5a7a52] transition-colors duration-300">
            {link}
          </a>
        {/each}
      </div>
    </div>

  </div>
</footer>
<script>
  import logo from "$lib/assets/favicon.png";

     let mobileOpen = $state(false);
 
  function toggleMenu() {
    mobileOpen = !mobileOpen;
  }
 
  function closeMenu() {
    mobileOpen = false;
  }
</script>
<!-- svelte-ignore event_directive_deprecated -->

<div class="sticky top-0 w-full z-50 bg-black">
  <!-- Navbar -->
    <nav class="relative z-30 flex items-center justify-between px-6 md:px-14 py-5">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2 group">
      <div class="w-7 h-7 rounded-md flex items-center justify-center">
      <img src={logo} alt="logo">
      </div>
      <span class="text-white font-bold text-sm tracking-[0.2em] uppercase">APSR Infotech</span>
    </a>
 
    <!-- Desktop Nav Links -->
    <div class="hidden md:flex items-center gap-8">
      {#each ['Services', 'Work', 'Blog', 'About', 'Contact'] as link}
        <a
          href="/{link.toLowerCase()}"
          class="text-[#8aad78] text-xs font-medium tracking-widest uppercase hover:text-[#c8ff00] transition-colors duration-300"
        >
          {link}
        </a>
      {/each}
    </div>
 
    <!-- Mobile Hamburger Button -->
    <button
      on:click={toggleMenu}
      class="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.25 text-white"
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={mobileOpen}
    >
      <!-- Bar 1 -->
      <span
        class="block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
        class:rotate-45={mobileOpen}
        class:translate-y-[7px]={mobileOpen}
      ></span>
      <!-- Bar 2 -->
      <span
        class="block w-4 h-0.5 bg-white rounded-full transition-all duration-300 self-end"
        class:opacity-0={mobileOpen}
        class:scale-x-0={mobileOpen}
      ></span>
      <!-- Bar 3 -->
      <span
        class="block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
        class:-rotate-45={mobileOpen}
        class:-translate-y-[7px]={mobileOpen}
      ></span>
    </button>
  </nav>
 
  <!-- Mobile Menu Overlay -->
  {#if mobileOpen}
    <!-- Backdrop -->
    <div
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
      on:click={closeMenu}
      aria-hidden="true"
    ></div>
  {/if}
 
  <!-- Mobile Drawer -->
  <div
    class="fixed top-0 right-0 z-40 h-full w-[75vw] max-w-xs bg-[#070f07] border-l border-[#1a3a00] flex flex-col pt-24 pb-10 px-8 md:hidden transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
    class:translate-x-0={mobileOpen}
    class:translate-x-full={!mobileOpen}
    aria-hidden={!mobileOpen}
  >
    <!-- Glow accent inside drawer -->
    <div class="pointer-events-none absolute top-0 right-0 w-40 h-40 rounded-full bg-[#c8ff00] opacity-5 blur-[60px]"></div>
 
    <!-- Nav links -->
    <ul class="flex flex-col gap-1 mb-10">
      {#each ['Services', 'Work', 'Blog', 'About', 'Contact'] as link, i}
        <li style="transition-delay: {mobileOpen ? i * 60 : 0}ms">
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
  </div>
  </div>

<script>
  import { onMount } from 'svelte';

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>


<!-- Hero Section -->
<section class="hero-wrapper relative min-h-screen bg-[#050f05] overflow-hidden font-syne">

  <!-- Ambient glow blobs -->
  <div class="pointer-events-none absolute inset-0 z-0">
    <div class="absolute top-[-10%] left-[30%] w-150 h-150 rounded-full bg-[#1a4a00] opacity-40 blur-[120px]"></div>
    <div class="absolute top-[10%] right-[5%] w-75 h-75 rounded-full bg-[#3aff00] opacity-10 blur-[80px]"></div>
    <div class="absolute bottom-[0%] left-[10%] w-100 h-100 rounded-full bg-[#0a2a00] opacity-60 blur-[100px]"></div>
  </div>



  <!-- Hero Content -->
  <div class="relative z-10 flex flex-col md:flex-row items-start justify-between px-8 md:px-14 pt-12 md:pt-16 pb-0 gap-8">

    <!-- Left: Main Hero Text -->
    <div class="flex-1 max-w-2xl {mounted ? 'animate-fade-up' : 'opacity-0'}">

      <!-- Eyebrow label -->
      <div class="inline-flex items-center gap-2 mb-6">
        <span class="block w-5 h-px bg-[#c8ff00]"></span>
        <span class="text-[#8aad78] text-[10px] tracking-[0.3em] uppercase font-medium">Full-Service Agency</span>
      </div>

      <!-- Headline -->
      <h1 class="text-white leading-[1.05] mb-8">
        <span class="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-syne">Reach</span>
        <span class="block text-5xl md:text-7xl lg:text-8xl font-light italic text-white font-dm-serif">
          <em class="not-italic">New</em>
          <svg class="inline-block ml-2 mb-1 w-8 h-8 md:w-12 md:h-12 text-[#c8ff00]" viewBox="0 0 48 48" fill="none">
            <path d="M24 4L28 20L44 24L28 28L24 44L20 28L4 24L20 20L24 4Z" fill="currentColor"/>
          </svg>
        </span>
        <span class="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-syne">Horizons</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-[#5a7a52] text-sm md:text-base max-w-sm leading-relaxed mb-10 font-syne">
        We combine art and science and tech to create a new and modern
        brand digital presence, giving the website an in-the-flesh and
        professional touch to the project.
      </p>

      <!-- CTA -->
      <a
        href="/get-started"
        class="inline-flex items-center gap-3 bg-[#c8ff00] text-[#050f05] font-bold text-xs tracking-[0.2em] uppercase px-7 py-4 rounded-full hover:bg-white transition-all duration-300 group"
      >
        Get Started
        <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 12 12" fill="none">
          <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>
    </div>

    <!-- Right: Floating "Get Started" Card -->
    <div
      class="relative w-full md:w-60 shrink-0 {mounted ? 'animate-fade-left' : 'opacity-0'}"
      style="animation-delay: 200ms;"
    >
      <div class="bg-[#c8ff00] rounded-2xl p-5 relative overflow-hidden shadow-[0_0_60px_rgba(200,255,0,0.15)]">
        <!-- Close button -->
        <button class="absolute top-3 right-3 w-5 h-5 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors" aria-label="Close">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1 1L7 7M7 1L1 7" stroke="#050f05" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>

        <h3 class="text-[#050f05] font-bold text-sm tracking-tight mb-1 pr-6">Get Started</h3>
        <p class="text-[#1a3a00] text-[10px] leading-relaxed mb-4">We help you reach new horizons</p>

        <!-- Form fields -->
        <div class="space-y-2 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            class="w-full bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 text-[10px] text-[#050f05] placeholder-[#4a6a3a] outline-none focus:bg-white/80 transition-all"
          />
          <input
            type="email"
            placeholder="Email Address"
            class="w-full bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 text-[10px] text-[#050f05] placeholder-[#4a6a3a] outline-none focus:bg-white/80 transition-all"
          />
          <input
            type="text"
            placeholder="Company"
            class="w-full bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 text-[10px] text-[#050f05] placeholder-[#4a6a3a] outline-none focus:bg-white/80 transition-all"
          />
        </div>
        <a href="/contact#get-started-form">
        <button class="w-full bg-[#050f05] text-[#c8ff00] font-bold text-[10px] tracking-[0.15em] uppercase py-3 rounded-xl hover:bg-[#0d2200] transition-colors duration-300">
          Submit →
        </button>
        </a>
      </div>

      <!-- Decorative dot grid -->
      <div class="absolute -bottom-4 -right-4 grid grid-cols-4 gap-1 opacity-20">
        {#each Array(16) as _}
          <div class="w-1 h-1 rounded-full bg-[#c8ff00]"></div>
        {/each}
      </div>
    </div>
  </div>


</section>

<style>
  :global(.font-syne) {
    font-family: 'Syne', sans-serif;
  }

  :global(.font-dm-serif) {
    font-family: 'DM Serif Display', serif;
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

  .animate-fade-up {
    animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-fade-left {
    animation: fade-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
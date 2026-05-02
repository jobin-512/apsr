<script lang="ts">
  import { onMount } from 'svelte';

  let visible = $state(false);

  function inView(node: HTMLElement) {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(node);

    return {
      destroy() {
        obs.disconnect();
      }
    };
  }
</script>

<section class="relative bg-[#02140a] text-white py-32 overflow-hidden">

  <!-- ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-lime-400/10 blur-[140px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20">

    <div class="grid md:grid-cols-2 gap-16 items-center">

      <!-- 🔥 LEFT (TEXT STORY) -->
      <div use:inView class="space-y-6 transition-all duration-700"
        class:opacity-0={!visible}
        class:translate-y-10={!visible}
      >

        <div class="text-xs tracking-[0.3em] text-gray-400 uppercase">
          Our Story
        </div>

        <h2 class="text-[34px] md:text-[54px] leading-tight font-semibold">
          Most agencies focus on
          <span class="text-gray-500">deliverables.</span><br />
          We focus on
          <span class="text-lime-400">outcomes.</span>
        </h2>

        <p class="text-gray-400 leading-relaxed">
          APSR Infotech was built on a simple idea — businesses don’t need more
          services, they need results.
        </p>

        <p class="text-gray-400 leading-relaxed">
          We saw too many companies investing in websites, marketing, and apps
          that looked good but failed to perform. That’s where we decided to be different.
        </p>

        <p class="text-gray-400 leading-relaxed">
          Every project we take is designed to drive growth — whether that means
          more traffic, better conversions, or scalable systems.
        </p>

      </div>

      <!-- 🔥 RIGHT (VISUAL / CARD STACK) -->
      <div class="relative">

        <!-- card 1 -->
        <div class="card tilt1">
          <h3>Strategy First</h3>
          <p>Every decision backed by data and intent.</p>
        </div>

        <!-- card 2 -->
        <div class="card tilt2">
          <h3>Design That Converts</h3>
          <p>Not just pretty — built to perform.</p>
        </div>

        <!-- card 3 -->
        <div class="card tilt3">
          <h3>Built to Scale</h3>
          <p>Future-ready systems, not quick fixes.</p>
        </div>

      </div>

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }

  .card {
    position: absolute;
    width: 260px;
    padding: 20px;
    border-radius: 16px;
    background: rgba(0,0,0,0.4);
    border: 1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(12px);
    transition: 0.4s;
  }

  .card h3 {
    font-size: 16px;
    margin-bottom: 6px;
  }

  .card p {
    font-size: 13px;
    color: #9ca3af;
  }

  .tilt1 {
    top: 0;
    left: 20%;
    transform: rotate(-6deg);
  }

  .tilt2 {
    top: 120px;
    left: 10%;
    transform: rotate(4deg);
  }

  .tilt3 {
    top: 240px;
    left: 30%;
    transform: rotate(-2deg);
  }

  .card:hover {
    transform: scale(1.05) rotate(0deg);
    border-color: #a3e635;
  }

  /* mobile fix */
  @media (max-width: 768px) {
    .card {
      position: relative;
      width: 100%;
      margin-bottom: 16px;
      transform: none !important;
    }
  }
</style>
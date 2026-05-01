<script>
  import { onMount } from 'svelte';

  const items = [
    "Conversion Focused",
    "Data Driven",
    "Scalable Systems",
    "Performance First",
    "Fast Execution",
    "Measurable ROI"
  ];

  /**
   * @type {HTMLDivElement}
   */
  let track;
  let speed = 0.4; // base speed
  let position = 0;
  /**
   * @type {number}
   */
  let raf;

  function animate() {
    position -= speed;

    // loop seamlessly
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;

    raf = requestAnimationFrame(animate);
  }

  onMount(() => {
    animate();
    return () => cancelAnimationFrame(raf);
  });

  // slow on hover (premium feel)
  function handleEnter() {
    speed = 0.15;
  }

  function handleLeave() {
    speed = 0.4;
  }

  /**
   * @param {MouseEvent & { currentTarget: EventTarget & HTMLElement; }} e
   * @param {EventTarget & HTMLElement} el
   */
  function handleMove(e, el) {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<section
  class="relative bg-[#020f05] text-white overflow-hidden border-y border-white/5"
  on:mouseenter={handleEnter}
  on:mouseleave={handleLeave}
  on:mousemove={(e) => handleMove(e, e.currentTarget)}
>

  <!-- glow -->
  <div class="glow"></div>

  <!-- track -->
  <div bind:this={track} class="flex gap-16 whitespace-nowrap py-14 will-change-transform">

    <!-- duplicate for seamless loop -->
    {#each [...items, ...items] as item}
      <div class="flex items-center gap-4 text-gray-400 text-[15px]">

        <span class="w-1.5 h-1.5 bg-lime-400 rounded-full"></span>

        <span class="hover:text-white transition">
          {item}
        </span>

      </div>
    {/each}

  </div>
</section>

<style>
  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      400px circle at var(--x) var(--y),
      rgba(163, 230, 53, 0.12),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  section:hover .glow {
    opacity: 1;
  }
</style>
<script lang="ts">
  import { onMount } from 'svelte';

  import p1 from '$lib/assets/services/website/p1.webp';
  import p2 from '$lib/assets/services/website/p2.webp';
  import p3 from '$lib/assets/services/website/p4.webp';

  function observe(node: HTMLElement) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    obs.observe(node);

    return {
      destroy() {
        obs.disconnect();
      }
    };
  }

  const projects = [
    {
      title: "Ecommerce Platform",
      desc: "High-converting online store",
      img: p1
    },
    {
      title: "SaaS Dashboard",
      desc: "Scalable product interface",
      img: p2
    },
    {
      title: "Agency Website",
      desc: "Performance-first marketing site",
      img: p3
    }
  ];

  function handleMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const img = el.querySelector('img') as HTMLElement;

    if (!img) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    img.style.transform = `
      scale(1.05)
      translate(${x * 15}px, ${y * 15}px)
    `;

    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }

  function reset(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const img = el.querySelector('img') as HTMLElement;
    if (img) img.style.transform = 'scale(1) translate(0,0)';
  }
</script>

<section class="bg-[#020f05] text-white py-32">

  <div class="max-w-6xl mx-auto px-6 md:px-20">

    <!-- HEADING -->
    <div class="mb-20">
      <h2 class="text-[48px] md:text-[64px] font-semibold">
        Crafted websites that perform
      </h2>
    </div>

    <!-- PROJECTS -->
    <div class="space-y-16">

      {#each projects as p}
        <div
          use:observe
          class="project transition-all duration-700"
        >

          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <!-- svelte-ignore event_directive_deprecated -->
          <div
            class="group relative overflow-hidden rounded-xl border border-white/10"
            on:mousemove={handleMove}
            on:mouseleave={reset}
          >

            <!-- glow -->
            <div class="glow"></div>

            <!-- image -->
            <img
              src={p.img}
              alt={p.title}
              class="w-full h-95 object-cover transition duration-500"
            />

            <!-- overlay -->
            <div class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

            <!-- text -->
            <div class="absolute bottom-5 left-5">
              <h3 class="text-xl font-semibold">{p.title}</h3>
              <p class="text-gray-400 text-sm">{p.desc}</p>
            </div>

          </div>

        </div>
      {/each}

    </div>

  </div>
</section>

<style>
  /* ✅ DEFAULT: visible (safe) */
  .project {
    opacity: 0.6;
    transform: translateY(30px);
  }


  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      350px circle at var(--x) var(--y),
      rgba(163, 230, 53, 0.12),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  .group:hover .glow {
    opacity: 1;
  }
</style>
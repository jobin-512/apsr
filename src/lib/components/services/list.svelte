<script>
  import { onMount } from 'svelte';

  import s1 from '$lib/assets/services/s2.webp';
  import s2 from '$lib/assets/services/s1.webp';
  import s3 from '$lib/assets/services/s3.webp';

  const services = [
    {
      title: "Digital Advertising",
      desc: "High-performance campaigns engineered for ROI.",
      points: ["Google Ads", "Meta Ads", "Funnel Optimization"],
      img: s1
    },
    {
      title: "Web Design & Development",
      desc: "Conversion-first websites built for scale.",
      points: ["UI/UX", "Svelte", "Performance"],
      img: s2
    },
    {
      title: "Brand & Creative",
      desc: "Design systems that build authority.",
      points: ["Identity", "Creative Direction", "Content"],
      img: s3
    }
  ];

  /**
   * @type {any[]}
   */
  let sections = $state([]);

  // 🔥 Smooth reveal + parallax
  onMount(() => {
    const handleScroll = () => {
      sections.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const center = window.innerHeight / 2;

        const offset = (rect.top - center) * 0.08;

        // parallax
        const img = el.querySelector('.parallax-img');
        const text = el.querySelector('.parallax-text');

        if (img) img.style.transform = `translateY(${offset * 0.6}px) scale(1.02)`;
        if (text) text.style.transform = `translateY(${offset * -0.3}px)`;

        // reveal
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  });

  // 🔥 cursor glow
  /**
   * @param {MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }} e
   * @param {EventTarget & HTMLDivElement} el
   */
  function handleMove(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  }
</script>

<section class="bg-[#02140a] text-white">
  <div class="max-w-6xl mx-auto px-6 md:px-20 py-32 space-y-40">

    {#each services as s, i}
      <div
        bind:this={sections[i]}
        class="service-section grid md:grid-cols-2 gap-20 items-center opacity-0 translate-y-10 transition-all duration-1000"
      >

        <!-- IMAGE -->
        <div class={`${i % 2 !== 0 ? 'md:order-2' : ''}`}>
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <!-- svelte-ignore event_directive_deprecated -->
          <div
            class="group relative rounded-xl overflow-hidden border border-white/5 cursor-pointer"
            on:mousemove={(e) => handleMove(e, e.currentTarget)}
          >

            <!-- cursor glow -->
            <div class="glow"></div>

            <!-- svelte-ignore a11y_missing_attribute -->
            <img
              src={s.img}
              class="parallax-img w-full h-105 object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
          </div>
        </div>

        <!-- TEXT -->
        <div class="parallax-text">

          <p class="text-[11px] tracking-widest text-gray-500 mb-4">
            0{i + 1}
          </p>

          <h3 class="text-[32px] md:text-[38px] font-semibold leading-tight">
            {s.title}
          </h3>

          <p class="mt-5 text-gray-400 text-[15px] leading-relaxed max-w-105">
            {s.desc}
          </p>

          <div class="mt-6 h-px bg-white/10 w-24"></div>

          <!-- stagger list -->
          <ul class="mt-6 space-y-3">
            {#each s.points as p, idx}
              <li
                class="point opacity-0 translate-y-3 text-sm text-gray-300 flex items-center gap-2"
                style={`transition-delay:${idx * 120 + 300}ms`}
              >
                <span class="w-1.5 h-1.5 bg-lime-400 rounded-full"></span>
                {p}
              </li>
            {/each}
          </ul>

          <button class="mt-8 text-sm text-lime-400 hover:underline">
            Learn More →
          </button>

        </div>

      </div>
    {/each}

  </div>
</section>

<style>
  /* 🔥 reveal */
  .service-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* 🔥 cursor glow */
  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      300px circle at var(--x) var(--y),
      rgba(163, 230, 53, 0.15),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  .group:hover .glow {
    opacity: 1;
  }
</style>
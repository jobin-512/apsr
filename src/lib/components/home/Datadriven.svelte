<script>
  import { onMount } from 'svelte';

  /**
     * @type {Element}
     */
  let sectionEl;
  let visible = $state(false);

  const stats = [
    { value: '320+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '12x', label: 'Avg. ROI' },
    { value: '5yr', label: 'In Business' },
  ];

  const services = [
    { label: 'Brand Strategy', angle: -90 },
    { label: 'SEO & Growth', angle: -18 },
    { label: 'Paid Media', angle: 54 },
    { label: 'Web Design', angle: 126 },
    { label: 'Analytics', angle: 198 },
  ];

  // Convert polar to cartesian for SVG
  /**
     * @param {number} cx
     * @param {number} cy
     * @param {number} r
     * @param {number} angleDeg
     */
  function polar(cx, cy, r, angleDeg) {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) visible = true; },
      { threshold: 0.2 }
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section
  bind:this={sectionEl}
  class="relative bg-[#050f05] overflow-hidden py-24 md:py-32 px-6 md:px-14 font-syne"
>
  <!-- Ambient glow -->
  <div class="pointer-events-none absolute inset-0 z-0">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-[#1a4a00] opacity-25 blur-[140px]"></div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto">

    <!-- Top label -->
    <div class="flex items-center gap-2 mb-5 justify-center">
      <span class="block w-5 h-px bg-[#c8ff00]"></span>
      <span class="text-[#8aad78] text-[10px] tracking-[0.3em] uppercase font-medium">What We Do</span>
      <span class="block w-5 h-px bg-[#c8ff00]"></span>
    </div>

    <!-- Heading -->
    <h2 class="text-center text-white text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl mx-auto">
      Custom data-driven, performance-focused
      <span class="italic font-light font-dm-serif text-[#c8ff00]"> growth</span>
      marketing solutions.
    </h2>

    <p class="text-center text-[#5a7a52] text-sm max-w-md mx-auto mb-16 leading-relaxed">
      We build strategies and systems that are engineered to compound — turning every dollar into measurable momentum for your brand.
    </p>

    <!-- Main layout: diagram + stats -->
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 justify-between">

      <!-- LEFT stats -->
      <div class="flex flex-col gap-8 lg:w-48">
        {#each stats.slice(0, 2) as stat, i}
          <div
            class="transition-all duration-700"
            class:opacity-100={visible}
            class:translate-x-0={visible}
            class:opacity-0={!visible}
            class:-translate-x-8={!visible}
            style="transition-delay: {i * 120}ms"
          >
            <p class="text-[#c8ff00] text-4xl font-bold mb-1">{stat.value}</p>
            <p class="text-[#5a7a52] text-xs tracking-widest uppercase">{stat.label}</p>
          </div>
        {/each}
      </div>

      <!-- CENTER circular diagram -->
      <div
        class="relative shrink-0 transition-all duration-1000"
        class:opacity-100={visible}
        class:scale-100={visible}
        class:opacity-0={!visible}
        class:scale-90={!visible}
      >
        <svg
          viewBox="0 0 400 400"
          width="320"
          height="320"
          class="md:w-95 md:h-95"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Outer dashed orbit ring -->
          <circle
            cx="200" cy="200" r="170"
            fill="none"
            stroke="#1a3a00"
            stroke-width="1"
            stroke-dasharray="4 6"
          />

          <!-- Mid ring -->
          <circle
            cx="200" cy="200" r="120"
            fill="none"
            stroke="#1a3a00"
            stroke-width="1"
          />

          <!-- Subtle sector fills -->
          {#each services as svc, i}
            {@const startAngle = svc.angle - 36}
            {@const endAngle = svc.angle + 36}
            {@const r = 120}
            {@const p1 = polar(200, 200, r, startAngle)}
            {@const p2 = polar(200, 200, r, endAngle)}
            <path
              d="M200,200 L{p1.x},{p1.y} A{r},{r} 0 0,1 {p2.x},{p2.y} Z"
              fill="#c8ff00"
              opacity={i === 0 ? '0.07' : '0.02'}
              stroke="#1a3a00"
              stroke-width="0.5"
            />
          {/each}

          <!-- Inner glow circle -->
          <circle cx="200" cy="200" r="70" fill="url(#innerGlow)" />
          <circle cx="200" cy="200" r="70" fill="none" stroke="#2a5a10" stroke-width="1.5" />

          <!-- Defs -->
          <defs>
            <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#3aff00" stop-opacity="0.12" />
              <stop offset="100%" stop-color="#050f05" stop-opacity="0" />
            </radialGradient>
          </defs>

          <!-- Center text -->
          <text x="200" y="193" text-anchor="middle" fill="white" font-size="13" font-weight="700" font-family="Syne, sans-serif">
            The 5 Pillars
          </text>
          <text x="200" y="212" text-anchor="middle" fill="#5a7a52" font-size="9" font-family="Syne, sans-serif" letter-spacing="2">
            OF PERFORMANCE
          </text>

          <!-- Service nodes on the mid ring -->
          {#each services as svc, i}
            {@const pos = polar(200, 200, 120, svc.angle)}
            {@const labelPos = polar(200, 200, 155, svc.angle)}

            <!-- Node dot -->
            <circle
              cx={pos.x}
              cy={pos.y}
              r="5"
              fill={i === 0 ? '#c8ff00' : '#1a4a00'}
              stroke={i === 0 ? '#c8ff00' : '#3a7a20'}
              stroke-width="1.5"
            />

            <!-- Connector line to outer ring -->
            {@const outerPos = polar(200, 200, 170, svc.angle)}
            <line
              x1={pos.x} y1={pos.y}
              x2={outerPos.x} y2={outerPos.y}
              stroke="#1a4a00"
              stroke-width="1"
              stroke-dasharray="3 3"
            />

            <!-- Outer node dot -->
            <circle
              cx={outerPos.x}
              cy={outerPos.y}
              r="3"
              fill={i === 0 ? '#c8ff00' : '#1a4a00'}
            />

            <!-- Label -->
            <text
              x={labelPos.x + (labelPos.x < 200 ? -10 : labelPos.x > 200 ? 10 : 0)}
              y={labelPos.y + (labelPos.y < 200 ? -10 : 10)}
              text-anchor={labelPos.x < 195 ? 'end' : labelPos.x > 205 ? 'start' : 'middle'}
              fill={i === 0 ? '#c8ff00' : '#5a7a52'}
              font-size="8.5"
              font-family="Syne, sans-serif"
              font-weight="600"
              letter-spacing="1"
            >
              {svc.label}
            </text>
          {/each}

          <!-- Rotating indicator dot on outer ring -->
          <circle cx="200" cy="30" r="4" fill="#c8ff00" opacity="0.8">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 200 200"
              to="360 200 200"
              dur="18s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <!-- RIGHT stats -->
      <div class="flex flex-col gap-8 lg:w-48 lg:items-end">
        {#each stats.slice(2) as stat, i}
          <div
            class="transition-all duration-700 lg:text-right"
            class:opacity-100={visible}
            class:translate-x-0={visible}
            class:opacity-0={!visible}
            class:translate-x-8={!visible}
            style="transition-delay: {(i + 2) * 120}ms"
          >
            <p class="text-[#c8ff00] text-4xl font-bold mb-1">{stat.value}</p>
            <p class="text-[#5a7a52] text-xs tracking-widest uppercase">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Bottom ticker / marquee -->
    <div class="mt-20 border-t border-[#1a3a00] pt-8 overflow-hidden">
      <div class="flex gap-12 animate-marquee whitespace-nowrap">
        {#each Array(3) as _}
          {#each ['Brand Strategy', 'Digital Advertising', 'Content & Creative', 'Web Design', 'SEO & Growth', 'Paid Social', 'Analytics & CRO', 'Email Marketing'] as item}
            <span class="text-[#2a4a22] text-xs tracking-[0.3em] uppercase font-medium">
              {item}
              <span class="inline-block mx-4 text-[#c8ff00] opacity-40">✦</span>
            </span>
          {/each}
        {/each}
      </div>
    </div>

  </div>
</section>

<style>
  .font-syne { font-family: 'Syne', sans-serif; }
  .font-dm-serif { font-family: 'DM Serif Display', serif; }

  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-33.333%); }
  }
  .animate-marquee {
    animation: marquee 28s linear infinite;
  }
</style>
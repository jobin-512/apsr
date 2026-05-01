<script lang="ts">
  import { onMount } from 'svelte';

  let activeCol: number | null = $state(null);
  let lockedCol: number | null = $state(null);
  let showDiffOnly = $state(false);


  const plans = ["Essential", "Advanced", "Professional", "Enterprise"];

    let tooltip = {
        show: false,
        text: "",
        x: 0,
        y: 0
        };

    function showTooltip(e: MouseEvent, text: string) {
    tooltip = {
        show: true,
        text,
        x: e.clientX + 12,
        y: e.clientY + 12
    };
}

    function moveTooltip(e: MouseEvent) {
    tooltip.x = e.clientX + 12;
    tooltip.y = e.clientY + 12;
    }

    function hideTooltip() {
    tooltip.show = false;
    }

  const sections = [
     {
        title: "Core Features",
        rows: [
        {
            label: "On-Page SEO",
            tooltip: "Optimizing your website structure, content, and tags for better rankings.",
            values: [true, true, true, true]
        },
        {
            label: "Off-Page SEO",
            tooltip: "Building authority through backlinks and external signals.",
            values: [true, true, true, true]
        },
        {
            label: "Keywords",
            tooltip: "Number of target keywords we actively optimize for ranking.",
            values: [25, 40, 60, 100]
        }
        ]
    },
    {
      title: "AI & Advanced SEO",
      rows: [
        { label: "Keywords", values: [25, 40, 60, 100] },
        { label: "Backlinks (Monthly)", values: [30, 50, 70, 100] },
        { label: "Landing Pages", values: [5, 10, 15, 30] },
        { label: "GEO Optimization", values: [false, false, true, true] },
        { label: "AEO Optimization", values: [false, false, true, true] },
        { label: "Voice Search", values: [false, false, true, true] },
        { label: "PAA Targeting", values: [false, false, true, true] },
        { label: "AI Search Optimization", values: [false, false, true, true] },
        { label: "Google Business Profile", values: [false, true, true, true] },
        { label: "Competitor Analysis", values: [false, true, true, true] },
        { label: "Duplicate Content Fix", values: [false, true, true, true] },
        { label: "Google Penalty Fix", values: [false, true, true, true] },
        { label: "Backlink Analysis", values: [false, true, true, true] }
      ]
    }
  ];

  function display(val: any) {
    if (val === true) return "✔";
    if (val === false) return "✖";
    return val;
  }

  function isDifferent(values: any[]) {
    return new Set(values).size > 1;
  }

  function setCol(i: number) {
    if (lockedCol === i) lockedCol = null;
    else lockedCol = i;
  }
let rowIndex = $state(0);
  let rowsEl: HTMLElement[] = $state([]);

  onMount(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    rowsEl.forEach(el => el && obs.observe(el));
  });
</script>

<section class="relative bg-[#02140a] text-white py-32 overflow-hidden">

  <!-- ambient motion -->
  <div class="scan-line"></div>

  <div class="max-w-7xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">

      <div>
        <h2 class="text-[44px] md:text-[64px] font-semibold">
          Compare what actually matters
        </h2>
        <p class="text-gray-400 mt-3 max-w-xl">
          Focus on the differences that impact growth.
        </p>
      </div>

      <!-- toggle -->
      <button
        on:click={() => showDiffOnly = !showDiffOnly}
        class="px-5 py-2 rounded-full border border-white/10 text-xs tracking-widest uppercase hover:border-lime-400 transition"
      >
        {showDiffOnly ? "Show All" : "Show Differences Only"}
      </button>

    </div>

    <div class="hidden md:block h-fit ">

      <div class="w-full">

        <!-- STICKY HEADER -->
        <div class="grid grid-cols-5 gap-4 mb-6 sticky top-20 z-20 bg-[#02140a]/80 backdrop-blur-xl py-4">


          {#each plans as plan, i}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
              class="plan-head"
              class:active={(lockedCol ?? activeCol) === i}
              on:mouseenter={() => activeCol = i}
              on:mouseleave={() => activeCol = null}
              on:click={() => setCol(i)}
            >
              {plan}
            </div>
          {/each}

        </div>

        <!-- DATA -->
        {#each sections as section}

          <div class="section-title">{section.title}</div>

          {#each section.rows as row, ri}

            {#if !showDiffOnly || isDifferent(row.values)}

              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <!-- svelte-ignore event_directive_deprecated -->
              <div
                bind:this={rowsEl[rowIndex]}
                class="row group/row"
                on:mousemove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                }}
                >

                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <!-- svelte-ignore event_directive_deprecated -->
                <div
                    class="label flex items-center gap-2 group/label"
                    on:mouseenter={(e) => row.tooltip && showTooltip(e, row.tooltip)}
                    on:mousemove={moveTooltip}
                    on:mouseleave={hideTooltip}
                    >

                    <span>{row.label}</span>

                    {#if row.tooltip}
                        <span class="info-dot">i</span>
                    {/if}

                    </div>

                {#each row.values as val, i}
                  <div
                    class="cell"
                    class:active={(lockedCol ?? activeCol) === i}
                  >
                    {display(val)}
                  </div>
                {/each}

              </div>

            {/if}

          {/each}

        {/each}

      </div>

    </div>


    <!-- 🔥 MOBILE COMPARISON (STACKED CARDS) -->
<div class="md:hidden space-y-6">

  {#each plans as plan, colIndex}

    <div class="rounded-2xl border border-white/10 p-5 bg-black/30 backdrop-blur-xl">

      <!-- PLAN NAME -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-white">
          {plan}
        </h3>

        <button
          class="text-xs text-lime-400"
          on:click={() => lockedCol = lockedCol === colIndex ? null : colIndex}
        >
          {lockedCol === colIndex ? "Selected" : "Select"}
        </button>
      </div>

      <!-- SECTIONS -->
      {#each sections as section}

        <div class="mt-4">

          <div class="text-xs text-lime-400 mb-2 tracking-widest uppercase">
            {section.title}
          </div>

          {#each section.rows as row}

            {#if !showDiffOnly || isDifferent(row.values)}

              <div class="flex justify-between items-center py-2 border-b border-white/5">

                <!-- LABEL -->
                <div
                  class="text-sm text-gray-300 flex items-center gap-2"
                  on:click={(e) => row.tooltip && showTooltip(e, row.tooltip)}
                >
                  {row.label}
                  {#if row.tooltip}
                    <span class="info-dot">i</span>
                  {/if}
                </div>

                <!-- VALUE -->
                <div class="text-sm text-lime-400 font-medium">
                  {display(row.values[colIndex])}
                </div>

              </div>

            {/if}

          {/each}

        </div>

      {/each}

    </div>

  {/each}

</div>

  </div>
    {#if tooltip.show}
    <div
        class="tooltip"
        style="top:{tooltip.y}px; left:{tooltip.x}px"
    >
        {tooltip.text}
    </div>
    {/if}
</section>

<style>
  .plan-head {
    text-align: center;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.08);
    cursor: pointer;
    transition: all 0.3s;
  }

  .plan-head.active {
    background: rgba(163,230,53,0.1);
    border-color: rgba(163,230,53,0.4);
    transform: scale(1.05);
  }

  .section-title {
    margin-top: 40px;
    margin-bottom: 10px;
    color: #a3e635;
    font-size: 12px;
    letter-spacing: 0.2em;
  }

  .row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    opacity: 100;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }

  .row.show {
    opacity: 1;
    transform: translateY(0);
  }

  .label {
    color: #d1d5db;
    font-size: 14px;
  }

  .cell {
    text-align: center;
    font-size: 14px;
    transition: all 0.2s;
  }

  .cell.active {
    color: #a3e635;
    transform: scale(1.1);
  }

  /* animated scan line */
  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(163,230,53,0.6),
      transparent
    );
    animation: scan 4s linear infinite;
  }

  @keyframes scan {
    0% { transform: translateY(0); }
    100% { transform: translateY(100vh); }
  }

  /* info dot */
.info-dot {
  width: 16px;
  height: 16px;
  border-radius: 999px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(163,230,53,0.2);
  color: #a3e635;
  opacity: 0.6;
  transition: 0.2s;
}

.group\/label:hover .info-dot {
  opacity: 1;
  transform: scale(1.1);
}

/* tooltip */
.tooltip {
  position: fixed;
  max-width: 260px;
  background: rgba(10,20,10,0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(163,230,53,0.3);
  padding: 10px 14px;
  font-size: 12px;
  color: #d1d5db;
  border-radius: 10px;
  pointer-events: none;
  z-index: 999;
  animation: fadeIn 0.15s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* magnetic row glow */
.row::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    300px circle at var(--x) 50%,
    rgba(163,230,53,0.08),
    transparent 70%
  );
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;
}

.group\/row:hover::before {
  opacity: 1;
}

/* subtle lift */
.group\/row:hover {
  background-color: #0000009d;
}
</style>
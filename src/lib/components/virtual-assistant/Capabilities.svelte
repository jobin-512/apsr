<script lang="ts">
  let active = $state<number | null>(null);

  const categories = [
    {
      title: "Admin & Operations",
      icon: "📁",
      tasks: [
        "Email Management",
        "Calendar Scheduling",
        "Data Entry",
        "Document Handling"
      ]
    },
    {
      title: "Customer Support",
      icon: "💬",
      tasks: [
        "Live Chat Support",
        "Email Support",
        "Ticket Handling",
        "CRM Updates"
      ]
    },
    {
      title: "Marketing Support",
      icon: "📣",
      tasks: [
        "Social Media Posting",
        "Content Scheduling",
        "Lead Generation",
        "Campaign Assistance"
      ]
    },
    {
      title: "E-commerce Management",
      icon: "🛒",
      tasks: [
        "Product Uploads",
        "Order Processing",
        "Inventory Updates",
        "Customer Queries"
      ]
    },
    {
      title: "Research & Data",
      icon: "📊",
      tasks: [
        "Market Research",
        "Competitor Analysis",
        "Data Collection",
        "Reporting"
      ]
    },
    {
      title: "Executive Assistance",
      icon: "🧠",
      tasks: [
        "Meeting Coordination",
        "Travel Planning",
        "Inbox Prioritization",
        "Personal Tasks"
      ]
    }
  ];
</script>

<section class="relative bg-[#02140a] text-white py-40 overflow-hidden">

  <!-- 🔥 ambient -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-lime-400/10 blur-[160px] rounded-full"></div>
    <div class="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-green-900/40 blur-[140px] rounded-full"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="mb-20 max-w-2xl">
      <h2 class="text-[42px] md:text-[72px] leading-tight font-semibold">
        Everything your business needs,
        <span class="text-lime-400">handled.</span>
      </h2>
      <p class="text-gray-400 mt-4">
        From daily operations to growth support, we plug into your workflow and take care of execution.
      </p>
    </div>

    <!-- 🔥 GRID -->
    <div class="grid md:grid-cols-3 gap-8">

      {#each categories as cat, i}

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <div
          class="group relative p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]"
          on:mouseenter={() => active = i}
          on:mouseleave={() => active = null}
        >

          <!-- glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-lime-400/5 blur-xl"></div>

          <!-- icon -->
          <div class="text-3xl mb-5">
            {cat.icon}
          </div>

          <!-- title -->
          <h3 class="text-xl font-semibold mb-4 group-hover:text-lime-400 transition">
            {cat.title}
          </h3>

          <!-- tasks -->
          <ul class="space-y-2 text-sm text-gray-400">
            {#each cat.tasks as task}
              <li class="flex items-center gap-2">
                <span class="text-lime-400">•</span>
                {task}
              </li>
            {/each}
          </ul>

          <!-- hover border -->
          <div class="absolute inset-0 rounded-2xl border border-lime-400/0 group-hover:border-lime-400/30 transition"></div>

        </div>

      {/each}

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
<script lang="ts">
  let step = $state(1);

  let form = $state({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    goals: "",
  });

  const services = [
    "SEO",
    "Website Development",
    "Mobile App",
    "Virtual Assistant",
    "SMO",
    "Other",
  ];

  const budgets = [
    "$500 - $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+"
  ];

  const timelines = [
    "ASAP",
    "1-2 Weeks",
    "1 Month",
    "Flexible"
  ];

  let errors = $state({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    goals: "",
  });

  function validateStep() {
    let valid = true;

    // reset errors
    errors = {
      name: "",
      email: "",
      service: "",
      budget: "",
      timeline: "",
      goals: "",
    };

    if (step === 1) {
      if (!form.name.trim()) {
        errors.name = "Name is required";
        valid = false;
      }
      if (!form.email.trim()) {
        errors.email = "Email is required";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = "Invalid email";
        valid = false;
      }
    }

    if (step === 2) {
      if (!form.service) {
        errors.service = "Select a service";
        valid = false;
      }
    }

    if (step === 3) {
      if (!form.budget) {
        errors.budget = "Select budget";
        valid = false;
      }
      if (!form.timeline) {
        errors.timeline = "Select timeline";
        valid = false;
      }
    }

    if (step === 4) {
      if (!form.goals.trim()) {
        errors.goals = "Please describe your project";
        valid = false;
      }
    }

    return valid;
  }

  function next() {
    if (validateStep() && step < 4) step++;
  }

  function back() {
    if (step > 1) step--;
  }

async function submit() {
  if (!validateStep()) return;

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      alert('Submitted successfully 🚀');

      // reset form
      form = {
        name: "",
        email: "",
        service: "",
        budget: "",
        timeline: "",
        goals: "",
      };

      step = 1;
    } else {
      alert(data.error || 'Something went wrong');
    }

  } catch (err) {
    console.error(err);
    alert('Server error');
  }
}

  function progress() {
    return (step / 4) * 100;
  }
</script>

<section id="get-started-form" class="bg-[#02140a] text-white py-32">

  <div class="max-w-3xl mx-auto px-6">

    <!-- 🔥 CARD -->
    <div class="p-8 md:p-10 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">

      <!-- HEADER -->
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-semibold">
          Let’s get to know your project
        </h2>
        <p class="text-gray-400 text-sm mt-2">
          Step {step} of 4
        </p>

        <!-- 🔥 PROGRESS BAR -->
        <div class="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            class="h-full bg-lime-400 transition-all duration-500"
            style="width:{progress()}%"
          ></div>
        </div>
      </div>
      

      <!-- 🔥 STEP 1 -->
      {#if step === 1}
        <div class="space-y-5">

          <input type="text" bind:value={form.name} class="input" placeholder="Your Name" />
            {#if errors.name}
            <p class="error">{errors.name}</p>
            {/if}

            <input type="email" bind:value={form.email} class="input" placeholder="Email Address" />
            {#if errors.email}
            <p class="error">{errors.email}</p>
            {/if}
          <button on:click={next} class="btn-primary w-full">
            Continue →
          </button>

        </div>
      {/if}

      <!-- 🔥 STEP 2 (SERVICES) -->
      {#if step === 2}
      <div class="space-y-5">
        {#if errors.service}
            <p class="error">{errors.service}</p>
            {/if}

          <p class="text-sm text-gray-400">What do you need?</p>

          <div class="grid grid-cols-2 gap-3">
            {#each services as s}
              <button
                class="chip"
                class:active={form.service === s}
                on:click={() => form.service = s}
              >
                {s}
              </button>
            {/each}
          </div>

          <div class="flex gap-4">
            <button on:click={back} class="btn-secondary w-full">
              ← Back
            </button>
            <button on:click={next} class="btn-primary w-full">
              Continue →
            </button>
          </div>

        </div>
      {/if}

      <!-- 🔥 STEP 3 -->
      {#if step === 3}
        {#if errors.budget}
            <p class="error">{errors.budget}</p>
            {/if}

            {#if errors.timeline}
            <p class="error">{errors.timeline}</p>
            {/if}
        <div class="space-y-5">

          <p class="text-sm text-gray-400">Budget Range</p>

          <div class="grid grid-cols-2 gap-3">
            {#each budgets as b}
              <button
                class="chip"
                class:active={form.budget === b}
                on:click={() => form.budget = b}
              >
                {b}
              </button>
            {/each}
          </div>

          <p class="text-sm text-gray-400 mt-4">Timeline</p>

          <div class="grid grid-cols-2 gap-3">
            {#each timelines as t}
              <button
                class="chip"
                class:active={form.timeline === t}
                on:click={() => form.timeline = t}
              >
                {t}
              </button>
            {/each}
          </div>

          <div class="flex gap-4">
            <button on:click={back} class="btn-secondary w-full">
              ← Back
            </button>
            <button on:click={next} class="btn-primary w-full">
              Continue →
            </button>
          </div>

        </div>
      {/if}

      <!-- 🔥 STEP 4 -->
      {#if step === 4}
      <div class="space-y-5">
            {#if errors.goals}
            <p class="error">{errors.goals}</p>
            {/if}

          <textarea
            rows="4"
            placeholder="What are your goals or expectations?"
            bind:value={form.goals}
            class="input"
          ></textarea>

          <div class="flex gap-4">
            <button on:click={back} class="btn-secondary w-full">
              ← Back
            </button>
            <button on:click={submit} class="btn-primary w-full">
              Submit →
            </button>
          </div>

        </div>
      {/if}

    </div>

  </div>

</section>

<style>
  .input {
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    background: rgba(0,0,0,0.4);
    border: 1px solid rgba(255,255,255,0.1);
    color: white;
    outline: none;
  }

  .input:focus {
    border-color: #a3e635;
  }

  .chip {
    padding: 12px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(0,0,0,0.4);
    transition: 0.2s;
  }

  .chip:hover {
    border-color: #a3e635;
  }

  .chip.active {
    background: #a3e635;
    color: black;
  }

  .btn-primary {
    background: #a3e635;
    color: black;
    padding: 14px;
    border-radius: 999px;
    font-weight: 600;
  }

  .btn-primary:hover {
    background: white;
  }

  .btn-secondary {
    border: 1px solid rgba(255,255,255,0.2);
    padding: 14px;
    border-radius: 999px;
  }

  .btn-secondary:hover {
    border-color: #a3e635;
    color: #a3e635;
  }
</style>
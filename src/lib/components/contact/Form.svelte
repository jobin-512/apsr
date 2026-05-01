<script lang="ts">
  let step = $state(1);

  let form = $state({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: ""
  });

  const services = [
    "SEO",
    "Website Development",
    "Mobile App Development",
    "Virtual Assistant",
    "Other"
  ];

  function next() {
    if (step < 3) step++;
  }

  function back() {
    if (step > 1) step--;
  }

  function submit() {
    console.log(form);
    alert("Form submitted!");
  }
</script>

<section id="contact-form" class="relative bg-[#02140a] text-white py-32">

  <div class="max-w-3xl mx-auto px-6">

    <!-- 🔥 FORM CARD -->
    <div class="p-8 md:p-10 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">

      <!-- HEADER -->
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-semibold">
          Tell us about your project
        </h2>
        <p class="text-gray-400 text-sm mt-2">
          Step {step} of 3 — takes less than 2 minutes
        </p>
      </div>

      <!-- 🔥 STEP 1 -->
      {#if step === 1}
        <div class="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            bind:value={form.name}
            class="input"
          />

          <input
            type="email"
            placeholder="Email Address"
            bind:value={form.email}
            class="input"
          />

          <button on:click={next} class="btn-primary w-full">
            Continue →
          </button>

        </div>
      {/if}

      <!-- 🔥 STEP 2 -->
      {#if step === 2}
        <div class="space-y-5">

          <select bind:value={form.service} class="input">
            <option value="">Select Service</option>
            {#each services as s}
              <option value={s}>{s}</option>
            {/each}
          </select>

          <select bind:value={form.budget} class="input">
            <option value="">Select Budget</option>
            <option>$500 - $1,000</option>
            <option>$1,000 - $5,000</option>
            <option>$5,000+</option>
          </select>

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
        <div class="space-y-5">

          <textarea
            rows="4"
            placeholder="Tell us about your project..."
            bind:value={form.message}
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
    padding: 14px 16px;
    border-radius: 10px;
    background: rgba(0,0,0,0.4);
    border: 1px solid rgba(255,255,255,0.1);
    color: white;
    font-size: 14px;
    outline: none;
    transition: 0.2s;
  }

  .input:focus {
    border-color: #a3e635;
  }

  .btn-primary {
    background: #a3e635;
    color: black;
    padding: 14px;
    border-radius: 999px;
    font-weight: 600;
    transition: 0.2s;
  }

  .btn-primary:hover {
    background: white;
  }

  .btn-secondary {
    border: 1px solid rgba(255,255,255,0.2);
    padding: 14px;
    border-radius: 999px;
    transition: 0.2s;
  }

  .btn-secondary:hover {
    border-color: #a3e635;
    color: #a3e635;
  }
</style>
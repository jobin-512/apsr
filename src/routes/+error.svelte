<script lang="ts">
  import { page } from '$app/stores';

  // svelte-ignore non_reactive_update
    let status: number;
  // svelte-ignore non_reactive_update
    let message: string;

   status = $page.status;
   message = $page.error?.message || "Something went wrong";

  function getContent() {
    if (status === 404) {
      return {
        title: "Page not found",
        desc: "Looks like this page doesn’t exist or was moved.",
        action: "Go Home"
      };
    }

    if (status === 500) {
      return {
        title: "Server error",
        desc: "Something broke on our side. We’re already fixing it.",
        action: "Try Again"
      };
    }

    if (status === 403) {
      return {
        title: "Access denied",
        desc: "You don’t have permission to view this page.",
        action: "Go Home"
      };
    }

    if (status === 401) {
      return {
        title: "Unauthorized",
        desc: "Please login to continue.",
        action: "Login"
      };
    }

    return {
      title: "Unexpected error",
      desc: message,
      action: "Go Home"
    };
  }

  let content = getContent();
</script>

<svelte:head>
  <title>{status} - {content.title}</title>
</svelte:head>

<section class="relative min-h-screen flex items-center justify-center bg-[#020f05] text-white overflow-hidden">

  <!-- 🔥 ambient glow -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-lime-400/10 blur-[140px] rounded-full"></div>
    <div class="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-green-900/40 blur-[120px] rounded-full"></div>
  </div>

  <div class="relative text-center px-6 max-w-xl">

    <!-- 🔥 STATUS -->
    <h1 class="text-[120px] md:text-[160px] font-bold text-lime-400 opacity-80 leading-none">
      {status}
    </h1>

    <!-- 🔥 TITLE -->
    <h2 class="text-[28px] md:text-[44px] font-semibold mt-4">
      {content.title}
    </h2>

    <!-- 🔥 DESCRIPTION -->
    <p class="text-gray-400 mt-4">
      {content.desc}
    </p>

    <!-- 🔥 ACTION BUTTONS -->
    <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

      {#if status === 500}
        <button
          on:click={() => location.reload()}
          class="px-8 py-4 rounded-full bg-lime-400 text-black font-semibold hover:bg-white transition"
        >
          Retry
        </button>
      {:else if status === 401}
        <a
          href="/login"
          class="px-8 py-4 rounded-full bg-lime-400 text-black font-semibold hover:bg-white transition"
        >
          Login
        </a>
      {:else}
        <a
          href="/"
          class="px-8 py-4 rounded-full bg-lime-400 text-black font-semibold hover:bg-white transition"
        >
          {content.action}
        </a>
      {/if}

      <a
        href="/contact"
        class="px-8 py-4 rounded-full border border-white/20 hover:border-lime-400 hover:text-lime-400 transition"
      >
        Contact Support
      </a>

    </div>

    <!-- 🔥 DEBUG (ONLY DEV) -->
    {#if import.meta.env.DEV}
      <p class="mt-8 text-xs text-red-400">
        {message}
      </p>
    {/if}

  </div>

</section>

<style>
  section {
    font-family: 'Syne', sans-serif;
  }
</style>
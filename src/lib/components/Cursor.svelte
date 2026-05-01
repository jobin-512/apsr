<script>
  let x = $state(0);
  let y = $state(0);

  /**
   * @param {{ clientX: number; clientY: number; }} e
   */
  function move(e) {
    x = e.clientX;
    y = e.clientY;
  }
</script>

<svelte:window on:mousemove={move} />

<div
  class="pointer-events-none fixed inset-0 z-40"
  style={`--x:${x}px; --y:${y}px`}
>
  <div class="cursor-glow"></div>
</div>

<style>
  .cursor-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      500px circle at var(--x) var(--y),
      rgba(163, 230, 53, 0.08),
      transparent 60%
    );
    transition: background 0.1s;
  }
</style>
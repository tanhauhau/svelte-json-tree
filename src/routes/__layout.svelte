<script>
  import Nav from '$lib/doc-components/Nav.svelte';
</script>

<Nav />
<main><slot /></main>

<style>
  :global(html) {
    font-family: 'Lato', sans-serif;
  }
  main {
    width: 100%;
    max-width: 1100px;
    height: 100%;
    margin: auto;
  }
</style>

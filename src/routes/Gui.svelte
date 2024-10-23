<script>
    import { isLoggedIn } from "../store.js"; 
    import UserPasswordInput from "../components/UserPasswordInput.svelte";
    import Welcome from "../components/Welcome.svelte";
</script>

{#if $isLoggedIn}
    <Welcome />
{:else}
    <p>TimeValue Store</p>
    <UserPasswordInput />
{/if}

<style>
  p {
    font-size: 2em;
    font-weight: bold;
    font-style: italic;
    font-weight: 1000;
    margin-bottom: 0.2em;
  }
</style>

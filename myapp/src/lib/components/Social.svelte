<script>
const { icon, name, url } = $props();
import github from '$lib/assets/logo-github.svg'
import linkedin from '$lib/assets/logo-linkedin.svg'
</script>

<a href="{url}">
    {#if icon === 'github'}
    <img src={github} width="40" height="40" alt={name} />
  {:else if icon === 'linkedin'}
    <img src={linkedin} width="50" height="50" alt={name} />
  {/if}
</a>

<style>

</style>
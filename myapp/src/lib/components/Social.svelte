<script>
const { icon, name, url } = $props();
import github from '$lib/assets/logo-github.svg'
import linkedin from '$lib/assets/logo-linkedin.svg'
</script>

<a href="{url}">
    {#if icon === 'github'}
    <img class="github" src={github} width="45" height="45" alt={name} />
  {:else if icon === 'linkedin'}
    <img class="linkedin" src={linkedin} width="60" height="60" alt={name} />
  {/if}
</a>


<style>

 a:hover{
cursor: pointer;
filter: grayscale(1) brightness(0) invert(1);
}

a:focus{
    outline: 2px solid black;
    outline-offset: .5em;
}
</style>
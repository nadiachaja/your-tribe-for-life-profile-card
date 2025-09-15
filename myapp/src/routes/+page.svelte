<script>
let { data } = $props();
const member = data.member;
import { Social } from '$lib'
import cat from '$lib/assets/cat.svg';
</script>

<div class="member-image-wrapper">
    <img class="profile-picture" src={`https://fdnd.directus.app/assets/${member.mugshot}`} width="300" height="200" alt={member.name} />
</div>

<section>
    <h1>{member.name}</h1>

    <p>{member.bio}</p>
</section>


<div>
<Social icon="github" url="#" name="github" />
<Social icon="linkedin" url="#" name="linkedin" />

<img src={cat} width="100" height="150" alt="cat">
</div>

<!-- <a href="/{member.id}">{member.name} - {member.id}</a> -->




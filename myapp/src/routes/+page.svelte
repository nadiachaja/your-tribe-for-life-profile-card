<script>
let { data } = $props();
const member = data.member;
console.log(member)
import { Social } from '$lib'

</script>


<Social icon="heart" url="#" name="Heart" />
<Social icon="heart" url="#" name="Heart" />

<a href="/{member.id}">{member.name} - {member.id}</a>



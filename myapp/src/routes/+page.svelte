<script>
    let { data } = $props();
    const member = data.member;
    import { Social } from "$lib";
    import cat from "$lib/assets/cat.svg";
</script>

<svelte:head>
    <title>Visitekaartje</title>
    <meta name="description" content="Visitekaartje" />

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--secondary-bg);
            height: 100%;
        }
    </style>
</svelte:head>

<div class="card-wrapper">
    <section>
        <h1>{member.name}</h1>
        <p>{member.bio}</p>
    </section>

    <div class="social-wrapper">
        <Social icon="github" url="https://github.com/nadiachaja" name="github" />
        <Social icon="linkedin" url="https://www.linkedin.com/in/nadia-visser-aa799323b/" name="linkedin" />
    </div>

    <div class="profile-wrapper">
        <img
            class="profile-picture"
            src={`https://fdnd.directus.app/assets/${member.mugshot}`}
            width="300"
            height="200"
            alt={member.name}
        />
        <div class="bg-cat">
            <img
                class="cat-image"
                src={cat}
                width="100"
                height="150"
                alt="cat"
            />
        </div>
    </div>
</div>

<style>

.card-wrapper {
        background-color: var(--primary-bg);
        border-radius: var(--border-radius-m);
        padding: 2em;
        max-width: 360px;
        width: 100%;
        height: 100vh;

   
}

    section {
        margin: 1em;
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    h1 {
        font-family: var(--font-family);
        font-size: var(--font-size-m);
        margin: 0.5em 0em 0em 0em;
    }

    p {
        font-family: var(--font-family);
        font-size: var(--font-size-s);
    }

    .social-wrapper {
        margin: 1em;
        display: flex;
        gap: 1em;
        justify-self: start;
        align-self: start;
        align-items: center;
        padding: 0em 0em 0em 1.5em;

    
    }

    .profile-picture {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius-m);
        padding: 1em;

      
    }

    .profile-wrapper {
        width: 100%;
        max-width: 320px;
        position: relative;
        height: 320px;

      
    }

    .bg-cat {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 130px;
        height: 130px;
        background-color: var(--primary-bg);
        border-radius: var(--border-radius-mixed);
    }

    .cat-image {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 100px;
        height: auto;
    }
</style>

<script>
    import { isLoggedIn, userId } from "../store.js";
    import { get } from 'svelte/store'; // Import the get function to access store values
    import Button from "./Button.svelte";

    let logout = () => {
        console.log(`User ${get(userId)} logged out`);
        userId.set("");
        isLoggedIn.set(false);
    };

    let users = {
        "student1": "secret1",
        "student2": "secret2",
        "student3": "secret3",
        "student4": "secret4"
    };
</script>

{#if get(userId) === null}
    <p>Unexpected Error: userId is null</p>
{:else if get(userId) === ""}
    <p>Unexpected Error: userId is empty</p>
{:else if !isLoggedIn}
    <p>Unexptected Error: user is not logged in</p>
{/if}

<div>
    <h1>Welcome, {$userId}!</h1>
    <ul>You administer following accounts:
        {#each Object.keys(users) as user}
            <li>{user} - {users[user]}</li>
        {/each}
    </ul>
    <Button title="Logout" on:click={logout} />
</div>

<style>
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>
<script>
    import { isLoggedIn, userId } from "../store.js";
    import InputText from "./InputText.svelte";
    import InputPassword from "./InputPassword.svelte";
    import Button from "./Button.svelte";

    let userIdValue = "";
    let secretValue = "";

    // Function to simulate login
    function login() {
        console.log(`User ${userIdValue} logged in`);
        userId.set(userIdValue);
        isLoggedIn.set(true);
    }

    $: isButtonDisabled = userIdValue.length < 8 || secretValue.length < 8 || !/^[a-zA-Z0-9]+$/.test(secretValue)
</script>

<div class="form-container">
    <InputText id="userid" title="User ID" placeholder="Enter your user ID" bind:value={userIdValue} />
    <InputPassword id="usersecret" title="Secret" placeholder="Enter your secret" bind:value={secretValue} />
    <div class="button-container">
        <Button title="Submit" on:click={login} disabled={isButtonDisabled} />
    </div>
</div>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .button-container {
        align-self: flex-end;
        margin-right: -0.25rem;
    }
</style>

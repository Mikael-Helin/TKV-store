<script>
    export let id = "inputField";
    export let title = "Label";
    export let placeholder = "Placeholder";
    export let chars = 25;
    export let value = "";
</script>

<div class="input-field">
    <label for="inputField">{title}</label>
    <input 
        id={id}
        type="text"
        bind:value
        {placeholder}
        size={chars}
        class="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
</div>

<style>
     .input-field {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    input {
        padding: 0.5em;
        font-size: 1em;
        margin-bottom: 0.25em;
    }
</style>
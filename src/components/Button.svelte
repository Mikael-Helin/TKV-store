<script>
    export let title = "Button";       // Button label
    export let disabled = false;       // Disable state for the button
    export let padding = "0.5em 2em";  // Padding for the button
</script>

<button
    type="button"
    style="padding: {padding};"
    disabled={disabled}
    on:click
>
    {title}
</button>

<style>
    button {
        font-size: 1em;
        margin: 0.25em;
        background-color: #3c454c;
        color: white;
        border: none;
        border-radius: 0.25em;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    button:hover:not(:disabled) {
        background-color: #596068;
    }

    button:disabled {
        background-color: #202020;
        cursor: not-allowed;
    }
</style>
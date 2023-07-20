<script lang="ts">
    export let id: string = '';
    export let notSpeaking: string = '';
    export let speaking: string = '';
    export let friendly: string = '';
</script>

<div class="cont">
    <div class="inp">
        <span>Friendly name (optional)</span>
        <input type="text" bind:value={friendly}/>
    </div>
    <div class="inp">
        <span>Discord ID</span>
        <input type="text" bind:value={id}/>
    </div>
    <div class="inp">
        <span>not speaking url</span>
        <input type="text" bind:value={notSpeaking}/>
    </div>
    <div class="inp">
        <span>speaking url</span>
        <input type="text" bind:value={speaking}/>
    </div>
</div>

<style>
    .cont {
        display: flex;
    }
    .inp {
        display: flex;
        flex-direction: column;
    }
</style>
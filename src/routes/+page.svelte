<script lang="ts">
    import Entry from "$lib/entry.svelte";
    import { generateCSS } from "$lib/gen";
    import { onMount } from "svelte";
    interface Entry {
        id: string;
        notSpeaking: string;
        speaking: string;
        friendly: string;
    }
    let entries: Array<Entry>;
    let code = "";
    function anim() { 
        localStorage.setItem("saved", JSON.stringify(entries))
        let entry = entries[entries.length-1];
        if (entry.id != "" || entry.notSpeaking != "" || entry.speaking != "") {
            entries.push({
                id: "",
                notSpeaking: "",
                speaking: "",
                friendly: ""
            })
        }
        let realentries: Array<Array<string>> = []
        entries.forEach((entry) => {
            if (entry.id != "" && entry.notSpeaking != "" && entry.speaking != "") {
                realentries.push([entry.id, entry.notSpeaking, entry.speaking]);
            }
        })
        code = generateCSS(realentries)
        requestAnimationFrame(anim);
    }
    onMount(() => {
        let saved = localStorage.getItem("saved")
        if (saved) {
            entries = JSON.parse(saved) as Array<Entry>;
        } else {
            entries = [{
                id: "",
                notSpeaking: "",
                speaking: "",
                friendly: ""
            }]
        }
        requestAnimationFrame(anim)
    })
    let codeEle: HTMLTextAreaElement;
</script>
{#if entries}
{#each entries as entry}
<Entry bind:id={entry.id} bind:notSpeaking={entry.notSpeaking} bind:speaking={entry.speaking} bind:friendly={entry.friendly}/>
{/each} 
{/if}
<button on:click={function() {
    codeEle.select();
    codeEle.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(codeEle.value)
}}>Copy</button>
<pre>
    <textarea bind:this={codeEle} readonly>{code}</textarea>
</pre>
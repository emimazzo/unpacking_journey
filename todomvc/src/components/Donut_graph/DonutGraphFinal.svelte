<script>
    import Graph from './Graph1.svelte';
    import Graph2 from './Graph2.svelte';
    import Graph3 from './Graph3.svelte';
    import Graph4 from './Graph4.svelte';
    

   
    let graph1_record = [];
    let graph2_record = [];
    let graph3_record = [];
    let graph4_record = [];
    let toggle = 1;

    $: {
        console.log("This is" + JSON.stringify(toggle));
     

    }



    import Legend from "./legend.svelte";
    const ramp = [
        "#ea5545", "#f46a9b", "#ef9b20", "#8e6fc7", "#f5e253", "#8ecf70", "#8f7d6a", "#27aeef",
    ];
    const values = [
        "Search for a Better Salary/Livelihood",
        "Unemployment",
        "To Send Remitances",
        "Lack of Money to buy food/basic necessities",
        "Adventure Tourism",
        "Family Reunification",
        "Natural Calamity",
        "Others (Domestic/Gang Violence,etc.)",
    ];
        const columns = 1
        























    

</script>

<main>
    

    <div style ="display:block; margin-bottom:20px;'New York Times', Georgia, 'Times New Roman';">
        <button style="display:inline-block" class="button-4" on:click={() => (toggle = 1)}>All Northern Triangle</button>
        <button style="display:inline-block" class="button-4" on:click={() => (toggle = 2)}>Honduras</button>
        <button style="display:inline-block" class="button-4" on:click={() => (toggle = 3)}>Guatamela</button>
        <button style="display:inline-block" class="button-4" on:click={() => (toggle = 4)}>El Salvador</button>
    </div>


    

    {#if toggle == 1}
        <section id="graph1" class="graph">
            <Graph bind:graph1_record={graph1_record}/>
        </section>

    {:else if toggle == 2}
        <section class="graph">
            <Graph2 bind:graph2_record={graph2_record}/>
        </section>
    {:else if toggle == 3}
        <section class="graph">
            <Graph3 bind:graph3_record={graph3_record}/>
        </section>
    {:else}
        <section class="graph">
            <Graph4 bind:graph4_record={graph4_record}/>
        </section>
    {/if}

    <div class="graph">
        <Legend
            title="Migration Reasons"
            {...{ ramp, values, columns }}
        />
    </div>

    
    

</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap");

    .hidden {
        visibility: hidden;
    }

    .visible {
        visibility: visible;
    }
  
 
    main {
        text-align: center;
        font-family: "Nunito", sans-serif;
        font-weight: 300;
        line-height: 2;
        font-size: 24px;
        color: var(--color-text);
        margin-top: 10px;
    }


    .graph {
        display: inline-block;
        vertical-align:middle;
      
    }

    






























 

    /* CSS */
    .button-4 {
    appearance: none;
    background-color: #FAFBFC;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    color: #24292E;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    padding: 6px 16px;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;
    }

    .button-4:hover {
    background-color: #F3F4F6;
    text-decoration: none;
    transition-duration: 0.1s;
    }

    .button-4:disabled {
    background-color: #FAFBFC;
    border-color: rgba(27, 31, 35, 0.15);
    color: #959DA5;
    cursor: default;
    }

    .button-4:active {
    background-color: #EDEFF2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
    }

    .button-4:focus {
    outline: 1px transparent;
    }

    .button-4:before {
    display: none;
    }

    .button-4:-webkit-details-marker {
    display: none;
    }

   
</style>

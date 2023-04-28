<script>
    import Scroller from "@sveltejs/svelte-scroller";

    let count, index, offset, progress;
    // let country;
    import Section1 from "./Section1.svelte";
    import Section2 from "./Section2.svelte";
    import Section3 from "./Section3.svelte";
    import Section4 from "./Section4.svelte";
    import Section5 from "./Section5.svelte";
    import Section6 from "./Section6_new.svelte";
    import Section7 from "./Section7.svelte";
    import Section8 from "./Section8.svelte";
    import Section9 from "./Section9.svelte";
    import Section10 from "./Section10.svelte";
    import Section11 from "./Section11.svelte";
    import Section12 from "./Section12.svelte";
    import Section13 from "./Section13.svelte";
    import Section14 from "./Section14.svelte";
    import Section15 from "./Section15.svelte";
    import Section16 from "./Section16.svelte";
  import ChosenStory from "./ChosenStory.svelte";

</script>

<Scroller
  top={0.0}
  bottom={1}
  threshold={0.5}
  bind:count
  bind:index
  bind:offset
  bind:progress
>
  <div class="background" slot="background">

    <div class="progress-bars">
      <p>current section: <strong>{index + 1}/{count}</strong></p>
      <progress value={count ? (index + 1) / count : 0} />

      <p>offset in current section</p>
      <progress value={offset || 0} />

      <p>total progress</p>
      <progress value={progress || 0} />
    </div>
  </div>

  <div class="foreground" slot="foreground">
    {#each Array.from({ length: 16}, (_, i) => i + 1) as section}
      <section>
        {#if section == 1}
         <Section1 />
        {:else if section === 2}
          <Section2 />
        {:else if section === 3}
          <Section3 />          
        {:else if section === 4}
          <Section4 />
        {:else if section === 5}
          <Section5 />
        {:else if section === 6}
          <ChosenStory />
          <Section6 />
        {:else if section === 7}
          <Section7 />
        {:else if section === 8}
          <Section8 />
        {:else if section === 9}
          <Section9 /> 
        {:else if section === 10}
          <Section10 /> 
        {:else if section === 11}
          <Section11 /> 
        {:else if section === 12}
          <Section12 /> 
        {:else if section === 13}
          <Section13 /> 
        {:else if section === 14}
          <Section14 /> 
        {:else if section === 15}
          <Section15 /> 
        {:else if section === 16}
          <Section16 /> 
        {:else}
          This is section {section}.
        {/if}
      </section>
    {/each}
  </div>
  
</Scroller>

<style>
    .background {
      width: 100%;
      height: 100vh;
      position: relative;
      outline: green solid 3px;
    }
    .foreground {
      width: 50%;
      margin: 0 auto;
      height: auto;
      position: relative;
      outline: red solid 3px;
    }
    .progress-bars {
      position: absolute;
      background: rgba(170, 51, 120, 0.2) /*  40% opaque */;
      visibility: visible;
    }
    section {
      height: 80vh;
      background-color: rgba(0, 0, 0, 0.2); /* 20% opaque */
      /* color: white; */
      outline: magenta solid 3px;
      text-align: center;
      max-width: 750px; /* adjust at will */
      color: black;
      padding: 1em;
      margin: 0 0 2em 0;
    }
  </style>
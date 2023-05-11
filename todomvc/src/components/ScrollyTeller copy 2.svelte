<script>
    import Scroller from "@sveltejs/svelte-scroller";

    let count, index, offset, progress;
    // let country;
    import Section1 from "./Section1.svelte";
    import Section2 from "./Section2.svelte";
    import Section3 from "./Section3_new.svelte";
    import Section4 from "./Section4.svelte";
    import Section5 from "./Section5.svelte";
    import Section6 from "./Section6_new.svelte";
    import Section7 from "./Section7.svelte";
    import Section8 from "./Section8.svelte";
    import Section9 from "./Section9.svelte";
    import Section10 from "./Section10.svelte";
    import Section11 from "./Section11.svelte";
    import Section11b from "./Section11b.svelte";
    // import Section12 from "./Section12.svelte";
    import Section13 from "./Section13.svelte";
    import Section14 from "./Section14.svelte";
    import Section15 from "./Section15.svelte";
    import Section16 from "./Section16.svelte";
  import ChosenStory from "./ChosenStory.svelte";
  import Section9b from "./Section9b.svelte";
  import { loop_guard } from "svelte/internal";

  let section_urls = [
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_F_10.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Alvina_Jeronimo_Perez_Guatemala_F_42_color.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_F_79.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_F_10.jpg"
  ]

  let section_urls2 = [
      "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Alvina_Jeronimo_Perez_Guatemala_F_42_color.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/Guatemala_F_10.jpg"
  ]

  // let background_url;
  // $: {
  //   background_url = section_urls[index];
  // }

//   const sectionHeights = [
//   '30vh', // Section 1
//   '20vh', // Section 2
//   '60vh', // Section 3,
//   '75vh', // Section 4
//   '85vh', // Section 5
//   '60vh', // Section 6,
//   '50vh', // Section 7
//   '50vh', // Section 8
//   '65vh', // Section 9,
//   '30vh', // Section 10
//   '80vh', // Section 11
//   '80vh', // Section 12
//   '80vh', // Section 13
//   '20vh', // Section 14
//   '80vh', // Section 15
//   '80vh', // Section 16
//   '30vh', // Section 17
// ];


const sectionHeights = [
  '80vh', // Section 1
  '80vh', // Section 2
  '80vh', // Section 3,
  '85vh', // Section 4
  '85vh', // Section 5
  '80vh', // Section 6,
  '80vh', // Section 7
  '80vh', // Section 8
  '85vh', // Section 9,
  '80vh', // Section 10
  '80vh', // Section 11
  '80vh', // Section 12
  '80vh', // Section 13
  '80vh', // Section 14
  '80vh', // Section 15
  '80vh', // Section 16
  '80vh', // Section 17
];
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
  <div 
    class="background"
    slot="background">

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
    <div class="sideground"
    style="background-image: url({section_urls[index]})"
    >
    </div>
    <div>
    {#each Array.from({ length: 17}, (_, i) => i + 1) as section}
      <section style="height: {sectionHeights[section - 1]}">
        {#if section == 1}
        <Section1/>
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
          <Section9b /> 
        {:else if section === 11}
          <Section10 /> 
        {:else if section === 12}
          <Section11 /> 
        {:else if section === 13}
          <Section11b/> 
        <!-- {:else if section === 14}
          <Section12 />  -->
        {:else if section === 14}
          <Section13 /> 
        {:else if section === 15}
          <Section14 /> 
        {:else if section === 16}
          <Section15 /> 
        {:else if section === 17}
          <Section16 /> 
        {:else}
          This is section {section}.
        {/if}
      </section>
    {/each}
    </div>
    <div class="sideground"
    style="background-image: url({section_urls2[index]})"
    ></div>
  </div>
  
</Scroller>

<style>
    .background {
      /* background-image:url({background_url}); */
      width: 100%;
      height: 100vh;
      position: relative;
      outline: green solid 3px;
    }

    .sideground{
      background: blue;
      width: 30%;
      transition: background-color 0.2s ease;
    }

    /* .sideground:hover {
  background-color: #000; /* Final value
} */

    .foreground {
      display: flex;
      /* padding: 60px; */
      background-color:white;
      width: 100%;
      margin: 0 auto;
      height: auto;
      position: relative;
      outline: red solid 3px;

    }
    /* .progress-bars {
      position: absolute;
      background: rgba(170, 51, 120, 0.2) /*  40% opaque ;
      visibility: visible;
    } */
    section {
      height: 80vh;
      /* background-color: rgba(0, 0, 0, 0.2); 20% opaque */
      /* color: white; */
      outline: magenta solid 3px;
      text-align: center;
      max-width: 750px; /* adjust at will */
      color: black;
      padding: 1em;
      margin: 0 0 2em 0;
    }

  </style>
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
    import Section9_5 from "./Section9_5.svelte";
    import Section10 from "./Section10.svelte";
    import Section11 from "./Section11.svelte";
    import Section11b from "./Section11b.svelte";
    import Section12 from "./Section12.svelte";
    import Section13 from "./Section13.svelte";
    import Section14 from "./Section14.svelte";
    import Section15 from "./Section15.svelte";
    import Section16 from "./Section16.svelte";
  import ChosenStory from "./ChosenStory.svelte";
  import Section9b from "./Section9b.svelte";
  import { country } from './store.js'
  import { loop_guard } from "svelte/internal";


// REACTIVE IMAGES FOR SIDEGROUND
  let section_urls_hond = [
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/icons/0_Globe.jpg", //change for a world one
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/icons/new_v.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/Honduras_square.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/Honduras_square.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/Honduras_square.jpg",
  "",
    "", 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/Honduras_square.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/World_long.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/World.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/World.jpg",//change for one with dot 
  ]



  let section_urls_guat = [
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/icons/0_Globe.jpg", //change for a world one
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/icons/new_v.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/Guatemala_square.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/Guatemala_square.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/Guatemala_square.jpg",
"", "", 
"https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/Guatemala_square.jpg",
"https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/World_long.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/World.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/World.jpg",//change for one with dot 

  ]

 

  let section_urls_salv = [
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/icons/0_Globe.jpg", //change for a world one
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/icons/new_v.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/El_Salvador_square.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/El_Salvador_square.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/El_Salvador_square.jpg",
    "", "", 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/El_Salvador_square.jpg",
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America_icon.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/World_long.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/America.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/World.jpg",//change for one with dot 
    "https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/final_icons/World.jpg",//change for one with dot 

  ]





const sectionHeights = [
  '95vh', // Section 1
  '95vh', // Section 2
  '95vh', // Section 3,
  '95vh', // Section 4
  '95vh', // Section 5
  '95vh', // Section 6,
  '95vh', // Section 7
  '95vh', // Section 8
  '95vh', // Section 9,
  '95vh', // Section 10
  '95vh', // Section 10
  '95vh', // Section 11
  '95vh', // Section 12
  '450vh', // Section 13
  '95h', // Section 14
  '95h', // Section 15
  '95vh', // Section 16
  '95vh' // Section 17,
];

const sectionWidths = ['5000px', '1200px','1200px','1200px','1200px',
'1200px','1200px','1200px','1200px','1200px','1200px','1200px',
'1200px','1200px','1200px','1200px','1200px','1200px']

// function refreshPage() {
//   // Refresh the page
//   window.location.reload();

//   // Scroll to the top of the page after a short delay
//   setTimeout(function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, 100); // delay in milliseconds
//   const topElement = document.querySelector('#up');
//   if (topElement) {
//     topElement.scrollIntoView({ behavior: 'smooth' });
//   }
// }
$: {
  console.log('INDEXXXXXX', index)
}
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
  <!-- <div 
    class="background"
    slot="background">

     <div class="progress-bars">
      <p>current section: <strong>{index + 1}/{count}</strong></p>
      <progress value={count ? (index + 1) / count : 0} />

      <p>offset in current section</p>
      <progress value={offset || 0} />

      <p>total progress</p>
      <progress value={progress || 0} /> -->
    <!-- </div>
  </div> -->
  

  <!-- THIS CODE BELOW WORKS!! -->

  <!-- <div class="foreground" slot="foreground">
    <div class="sideground"
    style="background-image: url({section_urls[index]})"
    >
    </div> -->

    <div class="foreground" slot="foreground">
      {#if index < 0.1 }
      <div class="background"
      style="background-image: url({"https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/icons/first_migrant_coll.jpg"}); " >
  </div>

      {:else if index > 17}
      <div class="background"
      style="background-image: url({"https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/icons/migrant_collage.jpg"});" >
  </div>


  
      {:else if $country === 'Guatemala'}

            <div class="sideground"
                style="background-image: url({section_urls_guat[index]}); background-size:  contain; " >
            </div>
    
          
        {:else if $country === 'El Salvador'}
            <div class="sideground"
                style="background-image: url({section_urls_salv[index]}); background-size: contain" >
            </div>
    

        {:else if $country === 'Honduras'}
            <div class="sideground"
          style="background-image: url({section_urls_hond[index]}); background-size: contain" >
            </div>
            
          <!-- {:else}
          <div class="sideground"
            style="background-image: url({section_urls[index]})" >
          </div> -->
          {/if}

        


    
    <div>
    {#each Array.from({ length: 18}, (_, i) => i + 1) as section}
    <section style="height: {sectionHeights[section - 1]}; font-family: 'New York Times', Georgia, 'Times New Roman';">
      {#if section == 1}
        <Section1 style="width: 80%;"/>
        <br>
        <div style="text-align: center;">
        <html>
          <a href="#down">Click here to start  your migration journey!</a>
          <div id="down">
          </div>
        </html>
      </div>
        {:else if section === 2}
          <Section2 id='section2' />
          <br>
          <div style="text-align: center;">
          <html>
            <a href="#down2">Click here to select a country of origin!</a>
            <div id="down2">
            </div>
          </html>
          </div>
        {:else if section === 3}
          <Section3 style="display: flex; align-items: center;" />          
          <br>
          <div style="text-align: center;">
          <html>
            <a href="#down3">Click here to select an age range!</a>
            <div id="down3">
            </div>
          </html>
          </div>
        {:else if section === 4}
          <Section4 />
          <br>        
          <div style="text-align: center;">
          <html>
            <a href="#down4">Click here to select a gender!</a>
            <div id="down4">
            </div>
          </html>
        </div>
        {:else if section === 5}
          <Section5 />
          <br>
          <div style="text-align: center;">
          <html>
            <a href="#down5">Click here to discover who you matched with!</a>
            <div id="down5">
            </div>
          </html>
        </div>
        {:else if section === 6}
          <ChosenStory />
          <Section6 />
          <br>
          <div style="text-align: center;">
          <html>
            <a href="#down6">Click here to learn more about the migrant!</a>
            <div id="down6">
            </div>
          </html>
        </div>
        {:else if section === 7}
          <Section7 />
          <br>
          <div style="text-align: center;">
          <br>
          <html>
            <a href="#down7">Click here to learn more about the migrant!</a>
            <div id="down7">
            </div>
          </html>
        </div>
        {:else if section === 8}
          <Section8 />
          <br>
          <div style="text-align: center;">
            <br>
          <html>
            <a href="#down8">Click here to learn about other migrants' stories!</a>
            <div id="down8">
            </div>
          </html>
        </div>
        {:else if section === 9}
          <Section9 /> 
          <br>
          <div style="text-align: center;">
          <html>
            <a href="#down9">Click here to learn more about migration!</a>
            <div id="down9">
            </div>
          </html>
        </div>


        {:else if section === 10}
          <Section9b /> 
          <br>
          <div style="text-align: center;">
          <html>
            <a href="#down10">Click here to learn more about migration!</a>
            <div id="down10">
            </div>
          </html>
        </div>
        {:else if section === 11}
          <Section10 /> 
          <br> <br><br> <br> <br> <br> <br> <br> <br> <br><br> <br><br> <br>
          <div style="text-align: center;">
          <html>
            <a href="#down11">Click here to learn more about migration motives</a>
            <div id="down11">
            </div>
          </html>
        </div>
        {:else if section === 12}
          <Section11 /> 
          <br>
          <div style="text-align: center;">
          <html>
            <a href="#down12">Click here to learn more about migration pathways</a>
            <div id="down12">
            </div>
          </html>
        </div>
        {:else if section === 13}
          <Section11b/> 
          <br>
          <div style="text-align: center;">
          <html>
            <a href="#down13">Click here to learn more about migration deaths</a>
            <div id="down13">
            </div>
          </html>
        </div>
        {:else if section === 14}
          <Section12 /> 
          <br> <br> <br>
          <div style="text-align: center;">
          <html>
            <a href="#downlast">Click here to continue!</a>
            <div id="downlast">
            </div>
          </html>
        </div>


        {:else if section === 15}
          <Section13 /> 
          <br>
          <div style="text-align: center;">
          <html>
            <a href="#down14">Click here to learn more about migration views!</a>
            <div id="down14">
            </div>
          </html>
        </div>
        {:else if section === 16}
          <Section14 /> 
          <!-- <br> -->
          <div style="text-align: center;">
          <html>
            <a href="#down15">Click here to see the last response!</a>
            <div id="down15">
            </div>
          </html>
        </div>
        {:else if section === 17}
        
          <Section15 /> 
          <!-- <br> -->
          <div style="text-align: center;">
          <html>
            <a href="#down16">Click finish your journey!</a>
            <div id="down16">
            </div>
          </html>
        </div>
        {:else if section === 18}
          <Section16 /> 
        {:else}
          This is section {section}.
        {/if}
      </section>
    {/each}
    </div>

    <!-- <div class="sideground"
    style="background-image: url({section_urls2_hond[index]})"
    ></div>  -->
    <!-- {#if index < 0.1 }
    {:else if index > 17 }
    {:else if $country === 'Guatemala'}
          <div class="sideground"
              style="background-image: url({section_urls_guat[index]}) background-size:  contain;" >
          </div>
        
      {:else if $country === 'El Salvador'}
          <div class="sideground"
              style="background-image: url({section_urls_salv[index]}) background-size:  contain;" >
          </div>
  

      {:else if $country === 'Honduras'}
          <div class="sideground"
              style="background-image: url({section_urls_hond[index]}) background-size:  contain;" >
          </div> 
        {:else}
        <div class="sideground"
          style="background-image: url({section_urls[index]})" >
        </div> 
        {/if} -->
        
        {#if index < 0.1 }
        
        {:else if index > 17}
  
    
        {:else if $country === 'Guatemala'}
  
              <div class="sideground"
                  style="background-image: url({section_urls_guat[index]}); background-size:  contain; " >
              </div>
      
            
          {:else if $country === 'El Salvador'}
              <div class="sideground"
                  style="background-image: url({section_urls_salv[index]}); background-size: contain" >
              </div>
      
  
          {:else if $country === 'Honduras'}
              <div class="sideground"
            style="background-image: url({section_urls_hond[index]}); background-size: contain" >
              </div>
              
            <!-- {:else}
            <div class="sideground"
              style="background-image: url({section_urls[index]})" >
            </div> -->
            {/if}
    
  </div>
  
</Scroller>

<style>
    .background {
      /* background-image:url({background_url}); */
      width: 100%;
      /* height: 100vh; */
      /* position: relative; */
      /* outline: green solid 3px; */
      /* background-repeat: no-repeat; */
    }



    .sideground{
      background: white;
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
      /* outline: red solid 3px; */

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
      /* outline: magenta solid 3px; */
      text-align: left;
      max-width: 1200px; 
      /* max-width: 5000px; */
      color: black;
      padding: 1em;
      margin: 0 0 2em 0;
      /* align-items: center; */
      /* justify-content: center; */
      /* width: fit-content; */
      /* height: fit-content; */

    }

    html {
  scroll-behavior: smooth;
  transition-duration: 3s;
 }
 
 a {
  /* text-decoration: none;
  color: black;
  background-color: pink; */
  background-color: rgb(0, 148, 158);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
 } 
 
 #down {
  margin-top: 20%;
  padding-bottom: 25%;
 } 

 #down2 {
  margin-top: 65%;
  padding-bottom: 25%;
 } 


 #down3 {
  margin-top: 30%;
  padding-bottom: 10%;
 } 


 #down4 {
  margin-top: 10%;
  padding-bottom: 5%;
 } 

 #down5 {
  margin-top: 8%;
  padding-bottom: 3%;
 } 

 #down6 {
  margin-top: 1%;
  padding-bottom: 5%;
 } 

 #down7 {
  margin-top: 30%;
  padding-bottom: 30%;
 } 

 #down8 {
  margin-top: 40%;
  padding-bottom: 60%;
 } 

 #down9 {
  margin-top: 5%;
  padding-bottom: 5%;
 } 

 #down10 {
  margin-top: 50%;
  padding-bottom: 80%;
 } 

 #down11 {
  margin-top: 5%;
  padding-bottom: 5%;
 } 

 #down12 {
  margin-top: 10%;
  padding-bottom: 5%;
 } 

 #down13 {
  margin-top: 10%;
  padding-bottom: 5%;
 } 

 #down14 {
  margin-top: 50%;
  padding-bottom: 5%;
 } 

 #down15 {
  margin-top: 5%;
  padding-bottom: 5%;
 } 

 #down16 {
  margin-top: 10%;
  padding-bottom: 5%;
 } 

 #down17 {
  margin-top: 10%;
  padding-bottom: 5%;
 } 

 #downlast {
  margin-top: 10%;
  padding-bottom: 5%;
 } 

 #section2 {
  background-color: blue;
}

.container_test {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }


  </style>
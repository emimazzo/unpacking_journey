<script>
    import {chosen_story} from './store.js'

</script>

<p>
    You have just experienced the migrant journey of a real person who migrated to the United States from (COUNTRY_CHOSEN}. 
    However, it's important to note that this is not an isolated experience.
    Thousands of migrants face similarly challenging journeys as the one you just went through.

<br>

    Hover over the images to get more information about individual migrant stories.
</p>

<p> PUT THE 18 IMAGES AGAIN. NO VARIABLE CONNECTION NEEDED. JUST LET THE HOVER OVER ALL</p>


<div style="white-space: nowrap;">
    <!-- <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
        title="Tooltip text for the first image"> -->
    <!-- <img style="display: inline-block; width: 15%; cursor: pointer;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg" title="Tooltip text for the first image" alt="Alternative text for the fourteenth image" onmouseover="this.style.opacity=0.5;" onmouseout="this.style.opacity=1;"> -->

    <!-- <img style="display: inline-block; width: 15%; cursor: pointer; position: relative; z-index: 999;" 
    src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg" 
    title="Tooltip text for the first image" 
    onmouseover="this.style.opacity=0.5;" onmouseout="this.style.opacity=1;"> -->
    

    <!-- THIS ONE BELOW WORKS -->
    <!-- <img style="display: inline-block; width: 15%; cursor: pointer;"
    src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
    tooltip="Tooltip text for the first image" alt="Alternative text for the first image"
    onmouseover="this.style.opacity=0.5; this.title='Tooltip text for the first image';"
    onmouseout="this.style.opacity=1; this.title='';"> -->

    <!-- THIS ONE ABOVE WORKS -->
    
    <!-- NEW OPTION -->
    <img class="tooltip"
    src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg"
    alt="Alternative text for the first image"
    data-tooltip="Tooltip text for the first image">

    <!-- NEW -->


    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
  
  </div>
  
  <div style="white-space: nowrap;">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
  
  </div>
  
  <div style="white-space: nowrap;">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
    <img style="display: inline-block; width: 15%;" src="https://github.com/emimazzo/Finding-Refuge/raw/main/images_stories/female-silhouette.jpg">
  
  </div>
  
<style>
  /* .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }
  
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
  }
  
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
   */


/* .tooltip {
  position: absolute;
  display: none;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 12px;
} */

.tooltip {
  display: inline-block;
  width: 15%;
  cursor: pointer;
  position: relative;
}

.tooltip::after {
  content: attr(data-tooltip);
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
}

.tooltip:hover::after {
  display: block;
}

</style>


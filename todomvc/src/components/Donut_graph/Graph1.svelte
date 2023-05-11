<script>
	

	import * as d3 from 'd3';
	// our interactive data
	export let graph1_record = [];

	let recorded_mouse_position = {
		x: 0, y: 0
	};




	let arcGenerator = d3.arc()
		.innerRadius(75)
		.outerRadius(150)
		.padAngle(.02)
		.cornerRadius(4);

	let pieAngleGenerator = d3.pie().value( d => d.count );
	let sample_data = [
		{title: "Search for a Better Salary/Livelihood", count: 1785},
		{title: "Unemployment", count: 660},
		{title: "To Send Remitances", count: 385},
		{title: "Lack of Money to buy food/basic necessities", count: 896},
		{title: "Adventure Tourism", count: 157},
		{title: "Family Reunification", count: 133},
		{title: "Natural Calamity", count: 124},
		{title: "Others (Domestic/Gang Violence,etc.)", count: 298}
	]
	let arc_data = pieAngleGenerator(sample_data);
	console.log(JSON.stringify(arc_data));

	let total = 0;

	for (let i = 0; i < sample_data.length; i++) {
  		total += sample_data[i].count;
	}
	




	const arc_color = d3.scaleOrdinal([
        "#ea5545", "#f46a9b", "#ef9b20", "#8e6fc7", "#f5e253", "#8ecf70", "#8f7d6a", "#27aeef",
    ]);

	let hovered = -1; 


	// $: {
	// 	// interactive data here
		
	// 	console.log(JSON.stringify(todo_record));		
	// }s

	





</script>

<div class="visualization">
	<svg width="300" height="300">
		<g transform="translate(150, 150)">
			{#each arc_data as data, index}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<path 
				d={arcGenerator({
					startAngle: data.startAngle,
					endAngle: data.endAngle
				})}

			fill={index === hovered ? "black": arc_color(index)}
			on:mouseover={(event) => { 
				
				hovered = index;
				recorded_mouse_position = {
							x: event.pageX,
							y: event.pageY
						}
			
		
		
			}
				}
			on:mouseout={(event) => { hovered = -1; }}

			/>
			
			{/each}
			
		</g>
		<text style="font-size:3em;"class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"} x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
			{#if hovered !== -1}
			{Math.round(100*arc_data[hovered].data.count/total)}%
			{/if}

		</text>  
		
	</svg>

	<div
		class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"}
		style="left: {recorded_mouse_position.x + 40}px; top: {recorded_mouse_position.y + 40}px"

	>
		{#if hovered !== -1}
		    {arc_data[hovered].data.title}: <strong>{ arc_data[hovered].data.count } people</strong> 
		{/if}


	</div>



</div>




<style>





	.visualization {
		font: 16px sans-serif;
		margin: auto;
		margin-top: 1px;
		text-align: middle;
	}

	/* dynamic classes for the tooltip */
	.tooltip-hidden {
		visibility: hidden;
		font-family: "Nunito", sans-serif;
		width: 200px;
		position: absolute;
	}



	.tooltip-visible {
		font: 25px sans-serif;
		font-family: "Nunito", sans-serif;
		visibility: visible;
		background-color: #f0dba8;
		border-radius: 10px;
		width: 200px;
		color: black;
		position: absolute;
		padding: 10px;
	}
</style>
<script>
	import * as d3 from 'd3';
	import {onMount} from 'svelte';
	
	let yoff=22;
	let xoff=10;

	let width = 700;
	let height = 3037;

	let margin = {top: 10, right: 10, bottom: 100, left: 60};
	const  innerHeight  =  height  -  margin.top  -  margin.bottom,
	innerWidth  =  width  -  margin.left  -  margin.right;

	let yaxis_label= "something";
	console.log(innerHeight);

	let data = [];
	onMount(async function() {
		data = await d3.csv('https://raw.githubusercontent.com/emimazzo/Finding-Refuge/main/data/death.csv', (d) => ({
			...d,
			Region: d.Region,
			NumberDead: +d.NumberDead,
		}));
		console.log(data);
	});
	
	$: xScale = d3.scaleBand()
		.domain(data.map(d => d.Region))
		.range([margin.left, width - margin.right]);
	
	$: yScale = d3.scaleLinear()
			.domain([0, d3.max(data, d => d.NumberDead)])
			.range([height - margin.bottom, margin.top])

	$: colorScale = d3.scaleOrdinal(d3.schemeTableau10)
			.domain(data.map(d => d.Region));
	
	let xAxis;
	let yAxis;
	
	
	$: {
		d3.select(yAxis).call(d3.axisLeft(yScale));
		
		d3.select(xAxis)
				.call(d3.axisBottom(xScale))
				.selectAll('.tick > text')
					.attr('y', 5)
					.attr('dy', '2em')
					.attr('dx', '-1em')
					
					.attr('text-anchor', 'end')
					.attr('transform', 'translate(-23,0)rotate(-45)');
					//.attr('transform', 'translate(0,0)');
	}

	let hover_Region="";
	let hover_NumberDead="";
	let hovered=-1;
	let recorded_mouse_position = {
		x: 0, y: 0
	};


</script>


<div>
	<div
		class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"}	
		style="left: {recorded_mouse_position.x + 10}px; top: {recorded_mouse_position.y + 10}px"
	>
		{#if hovered !== -1}
			{hover_Region}, {hover_NumberDead} migrants dead
		{/if}
	</div>

	<svg {width} {height}>
		<text  transform={`translate(${15},${innerHeight  /  2}) rotate(-90)`}
>Number of Deaths</text>
<text  transform={`translate(${15},${innerHeight}) rotate(-90)`}
>Number of Deaths</text>
<text  transform={`translate(${15},${150}) rotate(-90)`}
>Number of Deaths</text>
<text  x={innerWidth  /  2  }  y={innerHeight  +  100}>Region</text>

		{#each data as d, i}

	

			
			{#each (new Array(Math.floor(d.NumberDead))) as dp, ip}
			<svg
						height={yScale(0) - yScale(d.NumberDead)}
						x={xScale(d.Region)+(ip-Math.floor(ip/7)*7)*xoff}
						y={yScale(d.NumberDead)+Math.floor(ip/7)*yoff}
						fill={colorScale(d.Region)}>
						
				<g
				fill={colorScale(d.Region)}
				transform="scale(0.04)">

				<path
				id="path1521"
				style="fill:{colorScale(d.Region)}"
				d="m95.872 81.671c22.548 0 40.838-18.284 40.838-40.836 0-22.551-18.29-40.835-40.838-40.835-22.553 0-40.834 18.284-40.834 40.835 0 22.552 18.281 40.836 40.834 40.836z"/>
				
				<path
				id="path1523"
				style="fill:{colorScale(d.Region)}"
				d="m95.872 40.835"/>

				<path
				id="path1525"
				style="fill:{colorScale(d.Region)}"
				d="m52.173 90.683c-28.917 0-52.173 23.587-52.173 52.997v125.38c0 24.37 35.673 24.37 35.673 0v-114.64h8.445v313.9c0 32.59 47.503 31.63 47.503 0v-182.22h8.182v182.22c0 31.63 47.767 32.59 47.767 0v-313.9h8.24v114.64c0 24.56 35.49 24.56 35.43 0v-124.63c0-27.12-21.07-53.691-52.82-53.691l-86.247-0.056z"/>
				
				</g>
			</svg>
			
		{/each}

		<rect class="bar"
			x={xScale(d.Region)}
			y={yScale(d.NumberDead)}
			width={xScale.bandwidth()}
			height={yScale(0) - yScale(d.NumberDead)}
			fill-opacity=0 
			on:mouseover={(event) => { hovered = 1;
			recorded_mouse_position = {
							x: event.pageX,
							y: event.pageY
						};
			console.log(recorded_mouse_position);

			hover_NumberDead=d.NumberDead;
			hover_Region=d.Region; }}
			on:mouseout={(event) => { hovered = -1; 
				hover_NumberDead="";
				hover_Region=""; }}
/>

	{/each}


		<g transform="translate(0, {height - margin.bottom})"
			 bind:this={xAxis} />
		
		<g transform="translate({margin.left}, 0)"
			 bind:this={yAxis} />
	</svg>
</div>


<style>
/* dynamic classes for the tooltip */
.tooltip-hidden {
		visibility: hidden;
		width: 150px;
		position: absolute;
	}

	.tooltip-visible {
		font: 12px georgia bold;
		visibility: visible;
		background-color: white;
		border-radius: 10px;
		width: 120px;
		color: black;
		position: absolute;
		padding: 10px;
	}
	</style>
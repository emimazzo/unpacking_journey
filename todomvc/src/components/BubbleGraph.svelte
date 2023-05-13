<body>
    <div class="legend"></div>
    <svg id="bubble-chart"></svg>
  </body>
  
  
  
  
  
  <style>
      .tooltip2 {
        font-family: New York Times, Georgia, Times New Roman;
          position: absolute;
          padding: 10px 20px;
          background: white;
          border: 1px solid black;
          pointer-events: none;
          z-index: 1;
          color: black;
          border-radius: 10px;
          width: 200px;
      }
  
      svg {
          position: relative;
      }
      
          .legend {
          position: absolute;
          bottom: 20px;
          left: -40%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 16px;
                  width: 300px;
                  height:50px;
                  font-family: New York Times, Georgia, Times New Roman;
      } 
      
      
  </style>
  
  <script>
      import * as d3 from 'd3';
      import { onMount } from 'svelte';
  
      let data = [];
  
      onMount(async function() {
          data = await d3.csv('https://raw.githubusercontent.com/emimazzo/Finding-Refuge/main/data/Continent_Origin_Migrants_2020.csv', function(d){
              return {
                  ...d,
                  migrants_2020: +d.migrants_2020
              };
          });
  
          const width = 450;
          const height = 450;
  
          const pack = d3.pack()
              .size([width, height])
            //   .padding(1);
  
          const root = d3.hierarchy({ children: data })
              .sum(d => d.migrants_2020);
  
          pack(root);

          const svg = d3.select('#bubble-chart')
              .style('width', width)
              .style('height', height)
              .style('position', 'relative');
  
          const tooltip2 = d3.select('.tooltip2')
              .style('opacity', 0);
  

              
  // 		LEGEND STUFF!
  // Define legend data
  const legendData = [
    { label: 'Africa', color: 'rgb(213,94,0)' },
    { label: 'Europe', color: 'rgb(0,114,178)' },
    { label: 'Asia', color: 'rgb(0,158,115)' },
    { label: 'Americas', color: 'rgb(240,228,66)' },
    { label: 'Oceania', color: 'rgb(204,121,167)' },
  ];
  
  // Create legend container
  const legend = d3.select('.legend')
    .style('width', '300px')
    .style('height', 'auto') // set height to auto to allow multiple lines
    .style('display', 'flex')
    .style('flex-wrap', 'wrap'); // allow items to wrap to the next line
  
  // Add legend items
  const legendItem = legend.selectAll('.legend-item')
    .data(legendData)
    .enter()
    .append('div')
    .classed('legend-item', true)
    .style('display', 'flex')
    .style('align-items', 'center')
    .style('font-size', '16px')
    .style('margin-right', '20px')
    .style('color', 'black')
    .style('margin-bottom', '5px'); // add some bottom margin to separate items
  
  // Add colored square to legend item
  legendItem.append('div')
    .style('width', '20px')
    .style('height', '20px')
    .style('background-color', d => d.color)
    .style('margin-right', '5px'); // add some right margin to separate square from text
  
  // Add continent name to legend item
  legendItem.append('div')
    .text(d => d.label);
  
  
  
  
              
              
  
  // NO MORE LEGEND STUFF
              
          const node = svg.selectAll('g')
              .data(root.children)
              .enter()
              .append('g')
              .attr('transform', d => `translate(${d.x}, ${d.y})`);
  
  node.append('circle')
      .attr('r', d => d.r)
      .style('fill', d => {
          if (d.data.continent === 'Africa') {
              return 'rgb(213,94,0)';
          } else if (d.data.continent === 'Europe') {
              return 'rgb(0,114,178)';
          } else if (d.data.continent === 'Asia') {
              return 'rgb(0,158,115)';
          } else if (d.data.continent === 'America') {
              return 'rgb(240,228,66)';
          } else if (d.data.continent === 'Oceania') {
              return 'rgb(204,121,167)';
          } else {
              return 'black';
          }
      })
      .style('opacity', 1)
      .on('mouseover', function(event, d) {
          // Fade out all circles except the one being hovered
          node.selectAll('circle')
              .style('opacity', nodeData => (nodeData.data.country_origin === d.data.country_origin) ? 1 : 0.3);

              console.log(tooltip2);
          
          // Show tooltip2
          tooltip2.transition()
              .duration(200)
              .style('opacity', .9);
          tooltip2.html(`<b><i>Country:</b></i> ${d.data.country_origin}<br><b><i>Number of migrants leaving:</b></i> ${d.data.migrants_2020.toLocaleString()}`)
              .style('left', '90%')
              .style('bottom', `20px`)
              .style('position', 'absolute');
      })


      .on('mouseout', function() {
          // Fade in all circles
          node.selectAll('circle')
              .style('opacity', 1);
          
          // Hide tooltip2
        //   console.log(tooltip2);
          tooltip2.transition()
              .duration(500)
              .style('opacity', 0);
      });
  
      });
  </script>
  
  <div class="tooltip2"></div>
  
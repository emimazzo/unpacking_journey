<!-- <body>
    <h3 style="text-align:center" class="row mw-100"><strong>Migrant Motivations</strong></h3>
    <h5 style=" text-align:center; padding-left: 3em; padding-right: 3em" class="row mw-100"><em>There are many motivations which push potential migrants to flee their country. <br><strong>Click on a category and hover over the element to see the percentage of each driver.</strong></em></h5>


    <div style="padding: 1em" class="buttons text-center row">
        <button id="everyone" class="btn btn-light">Entire Central America</button>

        <button id="honduras" class="btn btn-light ">Honduras</button>
        <button id="elSalvador" class="btn btn-light ">El Salvador</button>
        <button id="Guatamela" class="btn btn-light  ">Guatamela</button>
    </div>


    <div class="row mw-100">
        <div id="donut" class="col-12"></div>
    </div>
    
    

    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="donut.js"></script>


</body>





<style>
    div.tooltip {	
    position: absolute;			
    text-align: center;								
    padding: .2rem;				
    background: #313639;
    color: #f9f9f9;	
    border: 0px;		
    border-radius: 8px;			
    pointer-events: none;
    font-size: .7rem;			
}





div.donut-tip {	
    position: absolute;			
    text-align: center;								
    padding: .5rem;				
    background: #FFFFFF;
    color: #313639;	
    border: 1px solid #313639;		
    border-radius: 8px;			
    pointer-events: none;
    font-size: 1.3rem;			
}

.legend-pie{
    font-size: .9rem;
}

.legend-pie .strongly-like{
    color:#5EC9A9;
}
.legend-pie .like{
    color:#AFE4B8;
}
.legend-pie .dislike{
    color:#539CC6;
}
.legend-pie .strongly-dislike{
    color:#323595;
}
.legend-pie .unsure{
    color:#C2D5EB;
}


@media only screen and (max-width: 600px) {
    .legend-bar text{
        font-size: .5rem;
    }
    .legend-bar rect{
        width: 5px;
        height: 5px;
    }
    div.tooltip {	
        font-size: 1rem;			
    }
  }
  
</style>

<script>
    var totals = [{
    title: "Search for a Better Job, Salary or Working Condition",
    value: 1785,
    all: 5458
},
{
    title: "Unemployment",
    value: 660,
    all: 5458
},
{
    title: "To Send Remitances",
    value: 385,
    all: 5458
},
{
    title: "Lack of Money to buy food and basic necessities",
    value: 896,
    all: 5458
},
{
    title: "Adventure Tourism",
    value: 157,
    all: 5458
},
{
    title: "Family Reunification",
    value: 133,
    all: 5458
},
{
    title: "Natural Calamity",
    value: 124,
    all: 5458
},
{
    title: "Others (Domestic Violence, Danger, etc.)",
    value: 298,
    all: 5458
},
];



var honduras = [{
    title: "Search for a Better Job, Salary or Working Condition",
    value: 627,
    all: 2120
},
{
    title: "Unemployment",
    value: 271,
    all: 2120
},
{
    title: "To Send Remitances",
    value: 118,
    all: 2120
},
{
    title: "Lack of Money to buy food and basic necessities",
    value: 328,
    all: 2120
},
{
    title: "Adventure Tourism",
    value: 42,
    all: 2120
},
{
    title: "Family Reunification",
    value: 35,
    all: 2120
},
{
    title: "Natural Calamity",
    value: 68,
    all: 2120
},
{
    title: "Others (Domestic Violence, Danger, etc.)",
    value: 118,
    all: 2120
},
];


//female
var elSalvador = [{
    title: "Search for a Better Job, Salary or Working Condition",
    value: 746,
    all: 2310
},
{
    title: "Unemployment",
    value: 238,
    all: 2310
},
{
    title: "To Send Remitances",
    value: 180,
    all: 2310
},
{
    title: "Lack of Money to buy food and basic necessities",
    value: 318,
    all: 2310
},
{
    title: "Adventure Tourism",
    value: 86,
    all: 2310
},
{
    title: "Family Reunification",
    value: 75,
    all: 2310
},
{
    title: "Natural Calamity",
    value: 42,
    all: 2310
},
{
    title: "Others (Domestic Violence, Danger, etc.)",
    value: 133,
    all: 2310
},
];

//male
var Guatamela = [{
    title: "Search for a Better Job, Salary or Working Condition",
    value: 412,
    all: 1325
},
{
    title: "Unemployment",
    value: 151,
    all: 1325
},
{
    title: "To Send Remitances",
    value: 87,
    all: 1325
},
{
    title: "Lack of Money to buy food and basic necessities",
    value: 250,
    all: 1325
},
{
    title: "Adventure Tourism",
    value: 29,
    all: 1325
},
{
    title: "Family Reunification",
    value: 23,
    all: 1325
},
{
    title: "Natural Calamity",
    value: 14,
    all: 2310
},
{
    title: "Others (Domestic Violence, Danger, etc.)",
    value: 47,
    all: 1325
},
];

var rect = document.getElementById('donut').getBoundingClientRect();
var width = rect.width;
var height = 360;
var radius = Math.min(width, height) / 2;
var donutWidth = 75;
var color = d3.scaleOrdinal().range(["#5A39AC", "#DD98D6", "#E7C820", "#08B2B2"]);




var svg = d3.select('#donut')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) +
        ',' + (height / 2) + ')');

var arc = d3.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius);

var pie = d3.pie()
    .value(function (d) {
        return d.value;
        })
    .sort(null);

var legendRectSize = 13;
var legendSpacing = 7;


var center = svg.append("svg:text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .attr("font-size","6em")


var donutTip = d3.select("body")
    .append("div")
    .attr("class", "donut-tip")
    .style("opacity", 0)
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("display", "inline")
    .style("position", "fixed");

var path = svg.selectAll('path')
.data(pie(totals))
.enter()
.append('path')
.attr('d', arc)
.attr('fill', function (d, i) {
    return color(d.data.title);
})
.attr('transform', 'translate(0, 0)')
.on('mouseover', function (d, i) {
    d3.select(this).transition()
        .duration('50')
        .attr('opacity', '.5');
    donutTip.transition()
        .duration(50)
        .style("opacity", 1);
    
    let num = (Math.round((d.value / d.data.all) * 100)).toString() + '%';
    
    donutTip.html("<strong>" + d.data.title + "</strong><br>" + "No. of people: " + d.value.toString())
        .style("left", (d3.event.pageX + 10) + "px")
        .style("top", (d3.event.pageY - 15) + "px");


    center.text(num).attr("fill",color(d.data.title)).attr("font-weight",'bold');
        

})
.on('mouseout', function (d, i) {
    d3.select(this).transition()
        .duration('50')
        .attr('opacity', '1');
    donutTip.transition()
        .duration('50')
        .style("opacity", 0);
    center.attr("fill","#FFFFFF");
});













//Legend


var legend = svg.selectAll('.legend')
.data(color.domain())
.enter()
.append('g')
.attr('class', 'circle-legend')
.attr('transform', function (d, i) {
    var height = legendRectSize + legendSpacing;
    var offset = height * color.domain().length / 2;
    var horz = 17 * legendRectSize - 13;
    var vert = i * height - offset;
    return 'translate(' + horz + ',' + vert + ')';
});

legend.append('circle')
.style('fill', color)
.style('stroke', color)
.attr('cx', 0)
.attr('cy', 0)
.attr('r', '.5rem');

legend.append('text')
.attr('x', legendRectSize + legendSpacing)
.attr('y', legendRectSize - legendSpacing)
.text(function (d) {
    return d;
});


//transition between states

function change(data) {
var pie = d3.pie()
    .value(function (d) {
        return d.value;
    }).sort(null)(data);

var width = 360;
var height = 360;
var radius = Math.min(width, height) / 2;
var donutWidth = 75;

path = d3.select("#donut")
    .selectAll("path")
    .data(pie); // Compute the new angles
var arc = d3.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius);
path.transition().duration(500).attr("d", arc); // redrawing the path with a smooth transition
}





//Buttons for changing

d3.select("button#everyone")
.on("click", function () {
    change(totals);
})

d3.select("button#honduras")
.on("click", function () {
    change(honduras);
})

d3.select("button#elSalvador")
.on("click", function () {
    change(elSalvador);
})

d3.select("button#Guatamela")
.on("click", function () {
    change(Guatamela)
})
  
</script>

 -->

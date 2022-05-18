document.addEventListener("DOMContentLoaded", function(){
    inputElement = document.getElementById('cur-data-file');
    svgElem = document.getElementById('vis-canvas');
    visButton = document.getElementById('visualize-button');
    currentData = null;
    dropDown = document.getElementById('measure-dropdown');
    curDDValue = "--";
    windowWidthSlider = document.getElementById('window-width');
    
    // When a new file is uploaded, update the heatmap
    inputElement.addEventListener("change", GetRawInput);
    dropDown.addEventListener("change", UpdateCurDDValue);
    windowWidthSlider.addEventListener("input", UpdateWindowWidth);
});

window.onresize = DrawHeatmap;

function UpdateWindowWidth(){
  document.getElementById('vis-canvas')
          .style.width = windowWidthSlider.value + "%";
  DrawHeatmap();
}

function GetRawInput(){
  let cur_file = inputElement.files[0];
  let reader = new FileReader();
  reader.readAsText(cur_file, "utf-8");
  reader.onload = UpdateData;
}

function UpdateData(evt){
  currentData = JSON.parse(evt.target.result);
  UpdateDropdown();
  DrawHeatmap();
}

function UpdateDropdown(){
  let vis_options = Object.keys(currentData[0].vals);
  dropDown.innerHTML = '';
  for(let i = 0; i < vis_options.length; i++){
    dropDown.innerHTML += "<option value='" + vis_options[i] + "'>" + 
                          vis_options[i] + "</option>";
  }
  UpdateCurDDValue();
}

function UpdateCurDDValue(){
  curDDValue = dropDown.value;
  DrawHeatmap();
}

        // Highlighting functions
function highlight(c) {
  d3.select("svg").selectAll("." + c)
      .style("stroke", "red")
      .style("stroke-width", 1);
}

function unhighlight(c) {
  d3.select("svg").selectAll("." + c)
      .style("stroke", "black")
      .style("stroke-width", 0);
}


function DrawHeatmap() {
  if(currentData === null)
    return null;

  let divHeight = svgElem.clientHeight;
  let divWidth  = svgElem.clientWidth;

  d3.select("svg").selectAll("*").remove();
  const margin = {top: 100, right: 100, bottom: 100, left: 100};

  let ymax = d3.max(currentData, (d) => d3.max(d["polygons"]
                                    .map(l => d3.max(l.map(p => p[1])))));
  // console.log(ymax);
  let ymin = d3.min(currentData, (d) => d3.min(d["polygons"]
                                    .map(l => d3.min(l.map(p => p[1])))));
  let scaleY = d3.scaleLinear().domain([ymin, ymax])
                                .range([divHeight - margin.bottom, margin.top]);

  let xmax = d3.max(currentData, (d) => d3.max(d["polygons"]
                                    .map(l => d3.max(l.map(p => p[0])))));
  let xmin = d3.min(currentData, (d) => d3.min(d["polygons"]
                                    .map(l => d3.min(l.map(p => p[0])))));
  let scaleX = d3.scaleLinear().domain([xmin, xmax])
                                .range([margin.left, divWidth - margin.right]);

  let colorMap = d3.scaleSequential()
  // .interpolator(d3.interpolateInferno)
  .interpolator(d3.interpolateRgb("#55B0F5", "#193753"))
  // TODO: Make more general - grab string from input
  .domain([d3.min(currentData, (d) => d.vals[curDDValue]),
           d3.max(currentData, (d) => d.vals[curDDValue])]);

  // console.log(currentData.count);
  d3.select("svg")
    .selectAll("polygon")
    .data(currentData)
    .enter()
    .append("polygon")
    .attr("points",function(d) { 
      return d.polygons[0].map(function(p) {
          return [scaleX(p[0]),scaleY(p[1])].join(",");
      }).join(" ");
    })
    .attr("fill", (d) => colorMap(d.vals[curDDValue]))
    .attr("class", (d) => "tile-" + d.id)
    .attr("stroke", "black")
    .attr("stroke-width", 0)
    .on("click", function(d){
      DrawTile(this.className.baseVal);
    })
    .on("mouseover", function(d){
      highlight(this.className.baseVal);
    })
    .on("mouseleave", function(d){
      unhighlight(this.className.baseVal);
    });

    // Legend
    let legWidth = 35;
    let legHeight = 10;
    let legHorOffset = 50;
    let legVertOffset = 50;
    let legend = d3.select("svg")
                .selectAll("rect")
              // .data(myColor.ticks(5))
              .data(colorMap.ticks(5))
              .enter()
              .append("rect")
              .attr("class", "legend")
              .attr("width", legWidth)
              .attr("height", legHeight)
              .attr("fill", function(d){
                return colorMap(d);
              })
              .attr("transform", function(d, i) {
                return "translate(" + (i*legWidth + legHorOffset) + "," + legVertOffset + ")"
              });

    let legText = d3.select("svg")
                .selectAll("text")
                .data(colorMap.ticks(5))
                .enter()
                .append("text")
                .text((d) => d)
                .attr("transform", function(d, i) {
                  return "translate(" + (i*legWidth + legHorOffset + 3) + "," + (legVertOffset - legHeight) + ")"
                });
                // .attr("font-family", "sans-serif");
}

let DrawTile = function(tileID){
  let divHeight = svgElem.clientHeight;
  let divWidth  = svgElem.clientWidth;

  d3.select("svg").selectAll("*").remove();
  const margin = {top: 100, right: 100, bottom: 100, left: 100};

  let id = Number(tileID.split("-")[1]);
  
  let tileData = currentData.filter(o => o.id === id)[0];
  
  let pointData = tileData.point_data;
  
  let ymax = d3.max(tileData.polygons, function(poly){
    return d3.max(poly, (point) => point[1]);
  });

  let ymin = d3.min(tileData.polygons, function(poly){
    return d3.min(poly, (point) => point[1]);
  });

  let y_r = ymax - ymin;
  
  let xmax = d3.max(tileData.polygons, (d) => d3.max(d.map(l => l[0])));
  let xmin = d3.min(tileData.polygons, (d) => d3.min(d.map(l => l[0])));
  let x_r = xmax - xmin;

  let x_w = divWidth - margin.left - margin.right;
  let y_w = divHeight - margin.top - margin.bottom;
  
  let effectiveDivHeight = divHeight - margin.bottom - margin.top;
  let effectiveDivWidth = divWidth - margin.left - margin.right;
  
  let minDim = effectiveDivHeight < effectiveDivWidth ? effectiveDivHeight : effectiveDivWidth;
  let maxRange = y_r > x_r ? y_r : x_r;
  
  let scaleY = d3.scaleLinear().domain([ymin, ymin + maxRange])
                               .range([divHeight - margin.bottom, divHeight - margin.bottom - minDim]);

  let scaleX = d3.scaleLinear().domain([xmin, xmin + maxRange])
                               .range([margin.left, margin.left + minDim]);
  
  d3.select("svg")
      .selectAll("polygon")
      .data(tileData.polygons)
      .enter().append("polygon")
      .attr("points",function(d) { 
        return d.map(function(p) {
            return [scaleX(p[0]),scaleY(p[1])].join(",");
        }).join(" ");
      })
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", 1);
  
  d3.select("svg")
     .selectAll("circle")
     .data(pointData)
     .enter().append("circle")
     .attr("cx", (d) => scaleX(d[0]))
     .attr("cy", (d) => scaleY(d[1]))
     .attr("r", scaleX(xmin + 3) - margin.left)
     .attr("fill", (d) => d[2] === 1 ? "black" : "red");
  
  let yaxis = d3.select("svg")
                 .append("g")
                 .attr("transform", "translate(" + (margin.left - 10) + "," + 0 + ")")
                 .call(d3.axisLeft(scaleY)
                         // .tickFormat(yFormat)
                         .ticks(5));
  
  let xaxis = d3.select("svg")
                 .append("g")
                 .attr("transform", "translate(" + 0 + "," + (divHeight - margin.bottom + 10) + ")")
                 .call(d3.axisBottom(scaleX)
                         // .tickFormat(yFormat)
                         .ticks(5));  

  d3.select("svg")
    .append("rect")
    .attr("x", 29)
    .attr("y", 25)
    .attr("width", 50)
    .attr("height", 30)
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .style("cursor", "pointer")
    .on("click", function(){
      DrawHeatmap();
    });

  d3.select("svg")
     .append("text")
     .attr("x", 37)
     .attr("y", 45)
     .text("Back")
     // .attr("font-family", "sans-serif")
     .style("cursor", "pointer")
     .on("click", function(){
        DrawHeatmap();
     });  
  
}

var vg_1 = "propSym.json";  // Path to your Vega-Lite JSON file

vegaEmbed("#propSym", vg_1)  // Embeds the chart into an HTML element with the ID 'choropleth_map'
    .then(function (result) {
        // You can access the Vega view instance as result.view
    })
    .catch(console.error);

var vg_2 = "donut.json";  // Path to your Vega-Lite JSON file

vegaEmbed("#donut", vg_2)  // Embeds the chart into an HTML element with the ID 'choropleth_map'
    .then(function (result) {
        // You can access the Vega view instance as result.view
    })
    .catch(console.error);


var vg_3 = "choropleth.json";  // Path to your Vega-Lite JSON file

vegaEmbed("#choropleth", vg_3)  // Embeds the chart into an HTML element with the ID 'choropleth_map'
    .then(function (result) {
        // You can access the Vega view instance as result.view
    })
    .catch(console.error);


var vg_4 = "stackBar.json";  // Path to your Vega-Lite JSON file

vegaEmbed("#stackBar", vg_4)  // Embeds the chart into an HTML element with the ID 'choropleth_map'
    .then(function (result) {
        // You can access the Vega view instance as result.view
    })
    .catch(console.error);


var vg_5 = "bar.json";  // Path to your Vega-Lite JSON file

vegaEmbed("#bar", vg_5)  // Embeds the chart into an HTML element with the ID 'choropleth_map'
    .then(function (result) {
        // You can access the Vega view instance as result.view
    })
    .catch(console.error);

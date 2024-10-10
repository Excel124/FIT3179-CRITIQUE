

// Vega-Lite specifications for each chart
var spec_map = "map.json";
var spec_bar = "heatmap.json";
var spec_pie = "piechart.json";
var spec_line = "barchart.json";
var spec_stacked = "stacked area.json";

// Function to embed charts
function embedChart(spec, elementId) {
    vegaEmbed(elementId, spec, {actions: false}).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
}

// Embed all charts
embedChart(spec_map, "#map_chart");
embedChart(spec_bar, "#bar_chart");
embedChart(spec_pie, "#pie_chart");
embedChart(spec_line, "#line_chart");
embedChart(spec_stacked, "#stacked_bar_chart");
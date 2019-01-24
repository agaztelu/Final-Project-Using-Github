(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "barchart",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){ 
			return { 
				DataShape: 'Table',
				Height: 150,
				Width: 150 
			} 
		}
	}
	
	function getConfig(){
		return {
			"type": "serial",
			"categoryField": "attribute",
			"rotate": true,
			"angle": 30,
			"depth3D": 30,
			"startDuration": 1,
			"categoryAxis": {
				"gridPosition": "start"
			},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "[[title]] of [[category]]:[[value]]",
					"fillAlphas": 1,
					"id": "AmGraph-1",
					"title": "Wind Speed 1 and 3",
					"type": "column",
					"valueField": "value"
				},
				{
					"balloonText": "[[title]] of [[category]]:[[value]]",
					"fillAlphas": 1,
					"id": "AmGraph-2",
					"title": "Wind Speed 2 and 4",
					"type": "column",
					"valueField": "value1"
				}
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"title": ""
				}
			],
			"allLabels": [],
			"balloon": {},
			"legend": {
				"enabled": true,
				"useGraphSettings": true
			},
			"titles": [
				{
					"id": "Title-1",
					"size": 15,
					"text": "Wind Speed (m/s)"
				}
			],
			"dataProvider": [
				{
					"attribute": "Wind Speed Turbine 1 and 2",
					"value": 8,
					"value1": 5
				},
				{
					"attribute": "Wind Speed Turbine 3 and 4",
					"value": 6,
					"value1": 10
				},
			]
		}
	}

	

	symbolVis.prototype.init = function(scope, elem) {
		var container = elem.find('#container')[0];
		container.id = "barchart_" + scope.symbol.Name;
		var chart = AmCharts.makeChart(container.id, getConfig());
		
		function convertToChart(data){
			return data.Rows.map(function(item){
				return {
					value: item.Value,
					attribute: item.Label
				}
			});
		}
		
		this.onDataUpdate = dataUpdate;
		function dataUpdate(data){
			var dataProvider = convertToChart(data);
			chart.dataProvider = dataProvider;
			chart.validateData();
			}
		};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 

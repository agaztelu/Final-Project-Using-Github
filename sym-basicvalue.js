(function (PV) {
	"use strict";

	
	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);


	var definition = { 
		typeName: "basicvalue",
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		visObjectType: symbolVis,
		getDefaultConfig: function(){ 
			return { 
				Height: 150,
				Width: 150				
			}; 
		},
	};

	symbolVis.prototype.init = function(scope, elem) { };

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
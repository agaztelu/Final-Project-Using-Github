(function (PV) {
	"use strict";


	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);


	var definition = {
		typeName: "timeSeriesdataAlvaro",
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		visObjectType: symbolVis,
		getDefaultConfig: function(){
			return {
				DataShape: 'Timeseries',
				Height: 150,
				Width: 150,
				BackgroundColor: 'lightgreen',
				BorderRadius: 20
			};
		},
	};
	
	symbolVis.prototype.init = function(scope, elem) {	
		this.onDataUpdate=dataUpdate;
		function dataUpdate(data){
			if (data!=null)
			{
				var firstAttribute=data.Data[0];
				if(firstAttribute.Label)
				{
					scope.Label=firstAttribute.Label;
					scope.Units=firstAttribute.Units;
				}
				scope.Values=firstAttribute.Values;
			}
		}
	}

	PV.symbolCatalog.register(definition);
})(window.PIVisualization);
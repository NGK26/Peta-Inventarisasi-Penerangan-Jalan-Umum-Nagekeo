var size = 0;
var placement = 'point';

var style_AesesaPerKelurahan_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Open Sans SemiBold\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("NAME_4") !== null) {
        labelText = String(feature.get("NAME_4"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(176,176,249,1.0)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),fill: new ol.style.Fill({color: 'rgba(178,223,138,0.39215686274509803)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};

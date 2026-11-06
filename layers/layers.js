var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleEart_1 = new ol.layer.Tile({
            'title': 'Google Eart',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NagekeoperKecamatan_2 = new ol.format.GeoJSON();
var features_NagekeoperKecamatan_2 = format_NagekeoperKecamatan_2.readFeatures(json_NagekeoperKecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NagekeoperKecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NagekeoperKecamatan_2.addFeatures(features_NagekeoperKecamatan_2);
var lyr_NagekeoperKecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NagekeoperKecamatan_2, 
                style: style_NagekeoperKecamatan_2,
                popuplayertitle: 'Nagekeo per Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/NagekeoperKecamatan_2.png" /> Nagekeo per Kecamatan'
            });
var format_AesesaPerKelurahan_3 = new ol.format.GeoJSON();
var features_AesesaPerKelurahan_3 = format_AesesaPerKelurahan_3.readFeatures(json_AesesaPerKelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AesesaPerKelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AesesaPerKelurahan_3.addFeatures(features_AesesaPerKelurahan_3);
var lyr_AesesaPerKelurahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AesesaPerKelurahan_3, 
                style: style_AesesaPerKelurahan_3,
                popuplayertitle: 'Aesesa Per Kelurahan',
                interactive: false,
                title: '<img src="styles/legend/AesesaPerKelurahan_3.png" /> Aesesa Per Kelurahan'
            });
var format_JalanAesesa_4 = new ol.format.GeoJSON();
var features_JalanAesesa_4 = format_JalanAesesa_4.readFeatures(json_JalanAesesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanAesesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanAesesa_4.addFeatures(features_JalanAesesa_4);
var lyr_JalanAesesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanAesesa_4, 
                style: style_JalanAesesa_4,
                popuplayertitle: 'Jalan Aesesa',
                interactive: true,
                title: '<img src="styles/legend/JalanAesesa_4.png" /> Jalan Aesesa'
            });
var format_PJUEksistingTableAtributQgis_5 = new ol.format.GeoJSON();
var features_PJUEksistingTableAtributQgis_5 = format_PJUEksistingTableAtributQgis_5.readFeatures(json_PJUEksistingTableAtributQgis_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PJUEksistingTableAtributQgis_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PJUEksistingTableAtributQgis_5.addFeatures(features_PJUEksistingTableAtributQgis_5);
var lyr_PJUEksistingTableAtributQgis_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PJUEksistingTableAtributQgis_5, 
                style: style_PJUEksistingTableAtributQgis_5,
                popuplayertitle: 'PJU Eksisting Table Atribut Qgis',
                interactive: true,
    title: 'PJU Eksisting Table Atribut Qgis<br />\
    <img src="styles/legend/PJUEksistingTableAtributQgis_5_0.png" /> HIDUP<br />\
    <img src="styles/legend/PJUEksistingTableAtributQgis_5_1.png" /> MATI<br />' });

lyr_GoogleMap_0.setVisible(true);lyr_GoogleEart_1.setVisible(true);lyr_NagekeoperKecamatan_2.setVisible(false);lyr_AesesaPerKelurahan_3.setVisible(true);lyr_JalanAesesa_4.setVisible(true);lyr_PJUEksistingTableAtributQgis_5.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr_GoogleEart_1,lyr_NagekeoperKecamatan_2,lyr_AesesaPerKelurahan_3,lyr_JalanAesesa_4,lyr_PJUEksistingTableAtributQgis_5];
lyr_NagekeoperKecamatan_2.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'GID_4': 'GID_4', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_AesesaPerKelurahan_3.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'GID_4': 'GID_4', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_JalanAesesa_4.set('fieldAliases', {'id': 'id', 'Nama jalan': 'Nama jalan', });
lyr_PJUEksistingTableAtributQgis_5.set('fieldAliases', {'ID_PJU': 'ID_PJU', 'Ruas_Jalan': 'Ruas_Jalan', 'Wilayah_Administrasi_ Kecamatan': 'Wilayah_Administrasi_ Kecamatan', 'Wilayah_Administrasi_ Kelurahan': 'Wilayah_Administrasi_ Kelurahan', 'Kondisi_PJU': 'Kondisi_PJU', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Daya': 'Daya', 'Sumber Daya': 'Sumber Daya', 'Tanggal Inventaris/perbaikan': 'Tanggal Inventaris/perbaikan', 'Tanggal': 'Tanggal', });
lyr_NagekeoperKecamatan_2.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'GID_4': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_AesesaPerKelurahan_3.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'GID_4': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_JalanAesesa_4.set('fieldImages', {'id': 'TextEdit', 'Nama jalan': 'TextEdit', });
lyr_PJUEksistingTableAtributQgis_5.set('fieldImages', {'ID_PJU': 'TextEdit', 'Ruas_Jalan': 'TextEdit', 'Wilayah_Administrasi_ Kecamatan': 'TextEdit', 'Wilayah_Administrasi_ Kelurahan': 'TextEdit', 'Kondisi_PJU': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Daya': 'TextEdit', 'Sumber Daya': 'TextEdit', 'Tanggal Inventaris/perbaikan': 'TextEdit', 'Tanggal': 'TextEdit', });
lyr_NagekeoperKecamatan_2.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'inline label - always visible', 'GID_4': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_AesesaPerKelurahan_3.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'GID_4': 'no label', 'NAME_4': 'inline label - always visible', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_JalanAesesa_4.set('fieldLabels', {'id': 'no label', 'Nama jalan': 'inline label - always visible', });
lyr_PJUEksistingTableAtributQgis_5.set('fieldLabels', {'ID_PJU': 'inline label - always visible', 'Ruas_Jalan': 'inline label - always visible', 'Wilayah_Administrasi_ Kecamatan': 'header label - visible with data', 'Wilayah_Administrasi_ Kelurahan': 'inline label - always visible', 'Kondisi_PJU': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Daya': 'header label - visible with data', 'Sumber Daya': 'header label - visible with data', 'Tanggal Inventaris/perbaikan': 'inline label - always visible', 'Tanggal': 'header label - visible with data', });
lyr_PJUEksistingTableAtributQgis_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
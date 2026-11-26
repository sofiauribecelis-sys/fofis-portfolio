  var META = {
    macarena:{tag:'Proyecto residencial', loc:'Armenia, Colombia', by:'Proyecto de Designlab by schaller, 2025', lines:['Modelado - SketchUp','Planos - AutoCAD','Renderizado - Lumion']},
    neos:{tag:'Proyecto residencial', loc:'Bogotá, Colombia', by:'Proyecto de Designlab by schaller, 2025', lines:['Planos - AutoCAD','Modelado - SketchUp','Renderizado - Lumion']},
    schaller:{tag:'Feria del Diseño', loc:'Medellín, Colombia', by:'Proyecto de Designlab by schaller, 2025', lines:['Modelado - Rhinoceros','Renderizado - Lumion','Planos - AutoCAD']},
    oficina:{tag:'Propuesta de remodelación', loc:'Bogotá, Colombia', by:'Proyecto de Designlab by schaller, 2026', lines:['Modelado - SketchUp','Renderizado - Lumion']},
    blacknova:{tag:'Showroom, concept store', loc:'Milán, Italia', by:'Proyecto de Designlab by schaller, 2025', lines:['Modelado - Rhinoceros','Renderizado - Lumion']},
    descomponer:{tag:'Proyecto académico', loc:'Bogotá, Colombia', by:'2021', lines:['Modelado - Rhinoceros','Renderizado - Rhinoceros','Posproducción - Photoshop e Illustrator']},
    torre:{tag:'Proyecto académico en equipo', loc:'Bogotá, Colombia', by:'Con Rodrigo Muciño, 2023', lines:['Modelado - Rhinoceros','Planos - AutoCAD','Posproducción - Illustrator y Photoshop']},
    mercado:{tag:'Proyecto académico en equipo', loc:'Bogotá, Colombia', by:'Con Rodrigo Muciño, 2023', lines:['Modelado - Rhinoceros','Planos - AutoCAD','Posproducción - Illustrator y Photoshop']},
    maloka:{tag:'La casa grande', loc:'Buenavista, Ciénaga Grande de Santa Marta', by:'', lines:['Modelado - Rhinoceros','Renderizado - Rhinoceros','Posproducción - Photoshop e Illustrator']},
    fungy:{tag:'Festival', loc:'', by:'', lines:['Modelado - Rhinoceros','Posproducción - Photoshop e Illustrator']}
  };
  P.forEach(function(p){ var m=META[p.id]||{}; for(var k in m) p[k]=m[k]; });


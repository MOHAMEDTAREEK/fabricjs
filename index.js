

const canvas = new fabric.Canvas('canvas' , {
width :850,
height: 750,
backgroundColor :'grey',
selection:false,
}) ;
 
const creatRect = (canvas) =>  {
 
    const rect = new fabric.Rect( {
        width:100,
        height:100,
        fill:'blue'
    });
    canvas.add(rect)
    canvas.renderAll();

}
const creatCirc = (canvas) =>  {
    const circ = new fabric.Circle( {
        radius:50,
        fill:'green'
    });
    canvas.add(circ)
    canvas.renderAll();

}

const creactTri = (canvas) =>  {
    const tri = new fabric.Triangle( {
        width: 75,
        height: 75,
        angle: 45,
        left:60,
        top:15,
        fill:'black'
    });
    canvas.add(tri)
    canvas.renderAll();

}
const creactEli = (canvas) =>  {
    const Eli = new fabric.Ellipse( {
        rx: 80,
        ry: 40,
        left:40,
        top:15,
        stroke: 'green',
        strokeWidth: 3
    });
    canvas.add(Eli)
    canvas.renderAll();
}

const svgCo = ( ) => {
    const SVG = canvas.toSVG()
    const anchor = document.createElement('a')
    anchor.href = 'data:attachment/text,' + encodeURI(SVG.toString());
    anchor.download = 'lol.svg'
    anchor.click()
};


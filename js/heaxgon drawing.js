var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasOffset = $("#canvas").offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;



//1.2 hexagon 10px correction x&y
var myHexagon = {
    x1: 146.8,
    y1: 10.5,

    x2: 113.5,
    y2: 35.5,

    x3: 113.5,
    y3: 85.5,

    x4: 146.8,
    y4: 110.5,

    x5: 180.2,
    y5: 110.5,

    x6: 213.5,
    y6: 85.5,

    x7: 213.5,
    y7: 35.5,

    x8: 180.2,
    y8: 10.5,

    x9: 146.8,
    y9: 10.5,

    x: 160,
    y: 60,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//1.3 hexagon
var myHexagon2 = {
    x1: 249.8,
    y1: 11.1,

    x2: 216.5,
    y2: 36.1,

    x3: 216.5,
    y3: 86.1,

    x4: 249.8,
    y4: 111.1,

    x5: 283.2,
    y5: 111.1,

    x6: 316.5,
    y6: 86.1,

    x7: 316.5,
    y7: 36.1,

    x8: 283.2,
    y8: 11.1,

    x9: 249.8,
    y9: 11.1,

    x: 260,
    y: 60,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//1.4 hexagon
var myHexagon3 = {
    x1: 352.8,
    y1: 10.5,

    x2: 319.5,
    y2: 35.5,

    x3: 319.5,
    y3: 85.5,

    x4: 352.8,
    y4: 110.5,

    x5: 386.2,
    y5: 110.5,

    x6: 419.5,
    y6: 85.5,

    x7: 419.5,
    y7: 35.5,

    x8: 386.2,
    y8: 10.5,

    x9: 352.8,
    y9: 10.5,

    x: 360,
    y: 60,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//2.1 hexagon
var myHexagon4 = {
    x1: 43.8,
    y1: 114.1,

    x2: 10.5,
    y2: 139.1,

    x3: 10.5,
    y3: 189.1,

    x4: 43.8,
    y4: 214.1,

    x5: 77.2,
    y5: 214.1,

    x6: 110.5,
    y6: 189.1,

    x7: 110.5,
    y7: 139.1,

    x8: 77.2,
    y8: 114.1,

    x9: 43.8,
    y9: 114.1,

    x: 60,
    y: 160,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//2.2 hexagon
var myHexagon5 = {
    x1: 146.8,
    y1: 113.1,

    x2: 113.5,
    y2: 138.1,

    x3: 113.5,
    y3: 188.1,

    x4: 146.8,
    y4: 213.1,

    x5: 180.2,
    y5: 213.1,

    x6: 213.5,
    y6: 188.1,

    x7: 213.5,
    y7: 138.1,

    x8: 180.2,
    y8: 113.1,

    x9: 146.8,
    y9: 113.1,

    x: 160,
    y: 160,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//2.3 hexagon
var myHexagon6 = {
    x1: 249.8,
    y1: 114.1,

    x2: 216.5,
    y2: 139.1,

    x3: 216.5,
    y3: 189.1,

    x4: 249.8,
    y4: 214.1,

    x5: 283.2,
    y5: 214.1,

    x6: 316.5,
    y6: 189.1,

    x7: 316.5,
    y7: 139.1,

    x8: 283.2,
    y8: 114.1,

    x9: 249.8,
    y9: 114.1,

    x: 260,
    y: 160,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//2.4 hexagon
var myHexagon7 = {
    x1: 352.8,
    y1: 113.5,

    x2: 319.5,
    y2: 138.5,

    x3: 319.5,
    y3: 188.5,

    x4: 352.8,
    y4: 213.5,

    x5: 386.2,
    y5: 213.5,

    x6: 419.5,
    y6: 188.5,

    x7: 419.5,
    y7: 138.5,

    x8: 386.2,
    y8: 113.5,

    x9: 352.8,
    y9: 113.5,

    x: 360,
    y: 160,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//3.2 hexagon
var myHexagon8 = {
    x1: 146.8,
    y1: 215.5,

    x2: 113.5,
    y2: 240.5,

    x3: 113.5,
    y3: 290.5,

    x4: 146.8,
    y4: 315.5,

    x5: 180.2,
    y5: 315.5,

    x6: 213.5,
    y6: 290.5,

    x7: 213.5,
    y7: 240.5,

    x8: 180.2,
    y8: 215.5,

    x9: 146.8,
    y9: 215.5,

    x: 160,
    y: 260,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//3.3 hexagon
var myHexagon9 = {
    x1: 249.8,
    y1: 217.1,

    x2: 216.5,
    y2: 242.1,

    x3: 216.5,
    y3: 292.1,

    x4: 249.8,
    y4: 317.1,

    x5: 283.2,
    y5: 317.1,

    x6: 316.5,
    y6: 292.1,

    x7: 316.5,
    y7: 242.1,

    x8: 283.2,
    y8: 217.1,

    x9: 249.8,
    y9: 217.1,

    x: 260,
    y: 260,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//3.4 hexagon
var myHexagon10 = {
    x1: 352.8,
    y1: 215.5,

    x2: 319.5,
    y2: 240.5,

    x3: 319.5,
    y3: 290.5,

    x4: 352.8,
    y4: 315.5,

    x5: 386.2,
    y5: 315.5,

    x6: 419.5,
    y6: 290.5,

    x7: 419.5,
    y7: 240.5,

    x8: 386.2,
    y8: 215.5,

    x9: 352.8,
    y9: 215.5,

    x: 360,
    y: 260,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//3.5 hexagon
var myHexagon11 = {
    x1: 455.8,
    y1: 216.1,

    x2: 422.5,
    y2: 241.1,

    x3: 422.5,
    y3: 291.1,

    x4: 455.8,
    y4: 316.1,

    x5: 489.2,
    y5: 316.1,

    x6: 522.5,
    y6: 291.1,

    x7: 522.5,
    y7: 241.1,

    x8: 489.2,
    y8: 216.1,

    x9: 455.8,
    y9: 216.1,

    x: 460,
    y: 260,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//4.1 hexagon needs 10px correction from her down
var myHexagon12 = {
    x1: 43.8,
    y1: 319.1,

    x2: 10.5,
    y2: 344.1,

    x3: 10.5,
    y3: 394.1,

    x4: 43.8,
    y4: 419.1,

    x5: 77.2,
    y5: 419.1,

    x6: 110.5,
    y6: 394.1,

    x7: 110.5,
    y7: 344.1,

    x8: 77.2,
    y8: 319.1,

    x9: 43.8,
    y9: 319.1,

    x: 60,
    y: 370,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};


//4.3 hexagon
var myHexagon13 = {
    x1: 249.8,
    y1: 320.1,

    x2: 216.5,
    y2: 345.1,

    x3: 216.5,
    y3: 395.1,

    x4: 249.8,
    y4: 420.1,

    x5: 283.2,
    y5: 420.1,

    x6: 316.5,
    y6: 395.1,

    x7: 316.5,
    y7: 345.1,

    x8: 283.2,
    y8: 320.1,

    x9: 283.2,
    y9: 320.1,

    x: 260,
    y: 370,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//4.4 hexagon
var myHexagon14 = {
    x1: 352.8,
    y1: 318.5,

    x2: 319.5,
    y2: 343.5,

    x3: 319.5,
    y3: 393.5,

    x4: 352.8,
    y4: 418.5,

    x5: 386.2,
    y5: 418.5,

    x6: 419.5,
    y6: 393.5,

    x7: 419.5,
    y7: 343.5,

    x8: 386.2,
    y8: 318.5,

    x9: 352.8,
    y9: 318.5,

    x: 360,
    y: 370,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//4.5 hexagon
var myHexagon15 = {
    x1: 455.8,
    y1: 319.1,

    x2: 422.5,
    y2: 344.1,

    x3: 422.5,
    y3: 394.1,

    x4: 455.8,
    y4: 419.1,

    x5: 489.2,
    y5: 419.1,

    x6: 522.5,
    y6: 394.1,

    x7: 522.5,
    y7: 344.1,

    x8: 489.2,
    y8: 319.1,

    x9: 455.8,
    y9: 319.1,

    x: 460,
    y: 370,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//5.1 hexagon
var myHexagon16 = {
    x1: 43.8,
    y1: 421.7,

    x2: 10.5,
    y2: 446.7,

    x3: 10.5,
    y3: 496.7,

    x4: 43.8,
    y4: 521.7,

    x5: 77.2,
    y5: 521.7,

    x6: 110.5,
    y6: 496.7,

    x7: 110.5,
    y7: 446.7,

    x8: 77.2,
    y8: 421.7,

    x9: 43.8,
    y9: 421.7,

    x: 60,
    y: 470,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//5.2 hexagon
var myHexagon17 = {
    x1: 146.8,
    y1: 421.1,

    x2: 113.5,
    y2: 446.1,

    x3: 113.5,
    y3: 496.1,

    x4: 146.8,
    y4: 521.1,

    x5: 180.2,
    y5: 521.1,

    x6: 213.5,
    y6: 496.1,

    x7: 213.5,
    y7: 446.1,

    x8: 180.2,
    y8: 421.1,

    x9: 146.8,
    y9: 421.1,

    x: 160,
    y: 470,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//5.3 hexagon
var myHexagon18 = {
    x1: 249.8,
    y1: 422.7,

    x2: 216.5,
    y2: 447.7,

    x3: 216.5,
    y3: 497.7,

    x4: 249.8,
    y4: 522.7,

    x5: 283.2,
    y5: 522.7,

    x6: 316.5,
    y6: 497.7,

    x7: 316.5,
    y7: 447.7,

    x8: 283.2,
    y8: 422.7,

    x9: 249.2,
    y9: 422.7,

    x: 260,
    y: 470,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//6.2 hexagon
var myHexagon19 = {
    x1: 146.8,
    y1: 524.1,

    x2: 113.5,
    y2: 549.1,

    x3: 113.5,
    y3: 599.1,

    x4: 146.8,
    y4: 624.1,

    x5: 180.2,
    y5: 624.1,

    x6: 213.5,
    y6: 599.1,

    x7: 213.5,
    y7: 599.1,

    x8: 213.5,
    y8: 549.1,

    x9: 180.2,
    y9: 524.1,

    x: 160,
    y: 570,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//6.4 hexagon
var myHexagon20 = {
    x1: 352.8,
    y1: 524.1,

    x2: 319.5,
    y2: 549.1,

    x3: 319.5,
    y3: 599.1,

    x4: 352.8,
    y4: 624.1,

    x5: 386.2,
    y5: 624.1,

    x6: 419.5,
    y6: 599.1,

    x7: 419.5,
    y7: 549.1,

    x8: 386.2,
    y8: 524.1,

    x9: 352.8,
    y9: 524.1,

    x: 360,
    y: 570,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

//7.3 hexagon
var myHexagon21 = {
    x1: 249.8,
    y1: 627.7,

    x2: 216.5,
    y2: 652.7,

    x3: 216.5,
    y3: 702.7,

    x4: 249.8,
    y4: 727.7,

    x5: 283.2,
    y5: 727.7,

    x6: 316.5,
    y6: 702.7,

    x7: 316.5,
    y7: 652.7,

    x8: 283.2,
    y8: 627.7,

    x9: 249.8,
    y9: 627.7,

    x: 260,
    y: 670,
    radius: 50,
    rr: 50 * 50,

    hovercolor: "gray",
    blurcolor: "black",
    isHovering: false
};

/*
var line = {
    x1: 5.0,
    y1: 0.0,
    x2: 5.0,
    y2: 924
};

function drawlines (line){
    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.lineWidth = 10.0;
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.stroke();
}
*/

function drawHexagon(hexa) {
    ctx.beginPath();
    ctx.moveTo(hexa.x1, hexa.y1);
    ctx.lineTo(hexa.x2, hexa.y2);
    ctx.lineTo(hexa.x3, hexa.y3);
    ctx.lineTo(hexa.x4, hexa.y4);
    ctx.lineTo(hexa.x5, hexa.y5);
    ctx.lineTo(hexa.x6, hexa.y6);
    ctx.lineTo(hexa.x7, hexa.y7);
    ctx.lineTo(hexa.x8, hexa.y8);
    ctx.lineTo(hexa.x9, hexa.y9);
    ctx.closePath();

    //Fill-inner
    var grd1 = ctx.createRadialGradient(375.000, 375.000, 0.000, 375.000, 375.000, 375.000);
    grd1.addColorStop(0.000, 'rgba(0, 0, 0, 1.000)');
    grd1.addColorStop(1.000, 'rgba(0, 0, 0, 0.000)');

    //Border
    /*var grd = ctx.createRadialGradient(200, 50, 10, 238, 50, 230);
    grd.addColorStop(0, 'white');
    grd.addColorStop(1, '#A9DA7E');*/

    //Borders
    var grd = ctx.createRadialGradient(375.000, 375.000, 0.000, 375.000, 375.000, 375.000);

    grd.addColorStop(0.000, 'white');
    grd.addColorStop(1.000, '#A9DA7E');

    ctx.fillStyle = hexa.isHovering ? grd1/*hexa.hovercolor*/ : hexa.blurcolor;
    ctx.lineWidth = 7;
    ctx.strokeStyle = grd;
    ctx.fillRect(0, 0, 2056.000, 2056.000);
    ctx.stroke();
    ctx.fill();

}

//drawlines(line);
drawHexagon(myHexagon);
drawHexagon(myHexagon2);
drawHexagon(myHexagon3);
drawHexagon(myHexagon4);
drawHexagon(myHexagon5);
drawHexagon(myHexagon6);
drawHexagon(myHexagon7);
drawHexagon(myHexagon8);
drawHexagon(myHexagon9);
drawHexagon(myHexagon10);
drawHexagon(myHexagon11);
drawHexagon(myHexagon12);
drawHexagon(myHexagon13);
drawHexagon(myHexagon14);
drawHexagon(myHexagon15);
drawHexagon(myHexagon16);
drawHexagon(myHexagon17);
drawHexagon(myHexagon18);
drawHexagon(myHexagon19);
drawHexagon(myHexagon20);
drawHexagon(myHexagon21);


//1.2 hexagon
function handleMouseMove(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon.x;
    var dy = mouseY - myHexagon.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon.isHovering) {
            myHexagon.isHovering = true;
            drawHexagon(myHexagon);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon.isHovering) {
            myHexagon.isHovering = false;
            drawHexagon(myHexagon);
        }
    }

}

//1.3 hexagon
function handleMouseMove2(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon2.x;
    var dy = mouseY - myHexagon2.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon2.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon2.isHovering) {
            myHexagon2.isHovering = true;
            drawHexagon(myHexagon2);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon2.isHovering) {
            myHexagon2.isHovering = false;
            drawHexagon(myHexagon2);
        }
    }

}

//1.4 hexagon
function handleMouseMove3(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon3.x;
    var dy = mouseY - myHexagon3.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon3.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon3.isHovering) {
            myHexagon3.isHovering = true;
            drawHexagon(myHexagon3);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon3.isHovering) {
            myHexagon3.isHovering = false;
            drawHexagon(myHexagon3);
        }
    }

}

//2.1 hexagon
function handleMouseMove4(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon4.x;
    var dy = mouseY - myHexagon4.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon4.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon4.isHovering) {
            myHexagon4.isHovering = true;
            drawHexagon(myHexagon4);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon4.isHovering) {
            myHexagon4.isHovering = false;
            drawHexagon(myHexagon4);
        }
    }

}

//2.2 hexagon
function handleMouseMove5(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon5.x;
    var dy = mouseY - myHexagon5.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon5.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon5.isHovering) {
            myHexagon5.isHovering = true;
            drawHexagon(myHexagon5);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon5.isHovering) {
            myHexagon5.isHovering = false;
            drawHexagon(myHexagon5);
        }
    }

}

//2.3 hexagon
function handleMouseMove6(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon6.x;
    var dy = mouseY - myHexagon6.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon6.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon6.isHovering) {
            myHexagon6.isHovering = true;
            drawHexagon(myHexagon6);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon6.isHovering) {
            myHexagon6.isHovering = false;
            drawHexagon(myHexagon6);
        }
    }

}

//2.4 hexagon
function handleMouseMove7(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon7.x;
    var dy = mouseY - myHexagon7.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon7.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon7.isHovering) {
            myHexagon7.isHovering = true;
            drawHexagon(myHexagon7);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon7.isHovering) {
            myHexagon7.isHovering = false;
            drawHexagon(myHexagon7);
        }
    }

}

//3.2 hexagon
function handleMouseMove8(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon8.x;
    var dy = mouseY - myHexagon8.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon8.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon8.isHovering) {
            myHexagon8.isHovering = true;
            drawHexagon(myHexagon8);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon8.isHovering) {
            myHexagon8.isHovering = false;
            drawHexagon(myHexagon8);
        }
    }

}

//3.3 hexagon
function handleMouseMove9(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon9.x;
    var dy = mouseY - myHexagon9.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon9.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon9.isHovering) {
            myHexagon9.isHovering = true;
            drawHexagon(myHexagon9);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon9.isHovering) {
            myHexagon9.isHovering = false;
            drawHexagon(myHexagon9);
        }
    }

}

//3.4 hexagon
function handleMouseMove10(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon10.x;
    var dy = mouseY - myHexagon10.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon10.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon10.isHovering) {
            myHexagon10.isHovering = true;
            drawHexagon(myHexagon10);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon10.isHovering) {
            myHexagon10.isHovering = false;
            drawHexagon(myHexagon10);
        }
    }

}

//3.5 hexagon
function handleMouseMove11(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon11.x;
    var dy = mouseY - myHexagon11.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon11.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon11.isHovering) {
            myHexagon11.isHovering = true;
            drawHexagon(myHexagon11);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon11.isHovering) {
            myHexagon11.isHovering = false;
            drawHexagon(myHexagon11);
        }
    }

}

//4.1 hexagon
function handleMouseMove12(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon12.x;
    var dy = mouseY - myHexagon12.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon12.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon12.isHovering) {
            myHexagon12.isHovering = true;
            drawHexagon(myHexagon12);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon12.isHovering) {
            myHexagon12.isHovering = false;
            drawHexagon(myHexagon12);
        }
    }

}

//4.3 hexagon
function handleMouseMove13(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon13.x;
    var dy = mouseY - myHexagon13.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon13.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon13.isHovering) {
            myHexagon13.isHovering = true;
            drawHexagon(myHexagon13);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon13.isHovering) {
            myHexagon13.isHovering = false;
            drawHexagon(myHexagon13);
        }
    }

}

//4.4 hexagon
function handleMouseMove14(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon14.x;
    var dy = mouseY - myHexagon14.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon14.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon14.isHovering) {
            myHexagon14.isHovering = true;
            drawHexagon(myHexagon14);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon14.isHovering) {
            myHexagon14.isHovering = false;
            drawHexagon(myHexagon14);
        }
    }

}

//4.5 hexagon
function handleMouseMove15(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon15.x;
    var dy = mouseY - myHexagon15.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon15.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon15.isHovering) {
            myHexagon15.isHovering = true;
            drawHexagon(myHexagon15);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon15.isHovering) {
            myHexagon15.isHovering = false;
            drawHexagon(myHexagon15);
        }
    }

}

//5.1 hexagon
function handleMouseMove16(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon16.x;
    var dy = mouseY - myHexagon16.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon16.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon16.isHovering) {
            myHexagon16.isHovering = true;
            drawHexagon(myHexagon16);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon16.isHovering) {
            myHexagon16.isHovering = false;
            drawHexagon(myHexagon16);
        }
    }

}

//5.2 hexagon
function handleMouseMove17(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon17.x;
    var dy = mouseY - myHexagon17.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon17.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon17.isHovering) {
            myHexagon17.isHovering = true;
            drawHexagon(myHexagon17);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon17.isHovering) {
            myHexagon17.isHovering = false;
            drawHexagon(myHexagon17);
        }
    }

}

//5.3 hexagon
function handleMouseMove18(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon18.x;
    var dy = mouseY - myHexagon18.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon18.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon18.isHovering) {
            myHexagon18.isHovering = true;
            drawHexagon(myHexagon18);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon18.isHovering) {
            myHexagon18.isHovering = false;
            drawHexagon(myHexagon18);
        }
    }

}

//6.2 hexagon
function handleMouseMove19(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon19.x;
    var dy = mouseY - myHexagon19.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon19.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon19.isHovering) {
            myHexagon19.isHovering = true;
            drawHexagon(myHexagon19);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon19.isHovering) {
            myHexagon19.isHovering = false;
            drawHexagon(myHexagon19);
        }
    }

}

//6.4 hexagon
function handleMouseMove20(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon20.x;
    var dy = mouseY - myHexagon20.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon20.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon20.isHovering) {
            myHexagon20.isHovering = true;
            drawHexagon(myHexagon20);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon20.isHovering) {
            myHexagon20.isHovering = false;
            drawHexagon(myHexagon20);
        }
    }

}

//7.3 hexagon
function handleMouseMove21(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - myHexagon21.x;
    var dy = mouseY - myHexagon21.y;

    // math to test if mouse is inside hexagon
    if (dx * dx + dy * dy < myHexagon21.rr) {

        // change to hovercolor if previously outside
        if (!myHexagon21.isHovering) {
            myHexagon21.isHovering = true;
            drawHexagon(myHexagon21);
        }

    } else {

        // change to blurcolor if previously inside
        if (myHexagon21.isHovering) {
            myHexagon21.isHovering = false;
            drawHexagon(myHexagon21);
        }
    }

}



$("#canvas").mousemove(function (e) {
    handleMouseMove(e);
    handleMouseMove2(e);
    handleMouseMove3(e);
    handleMouseMove4(e);
    handleMouseMove5(e);
    handleMouseMove6(e);
    handleMouseMove7(e);
    handleMouseMove8(e);
    handleMouseMove9(e);
    handleMouseMove10(e);
    handleMouseMove11(e);
    handleMouseMove12(e);
    handleMouseMove13(e);
    handleMouseMove14(e);
    handleMouseMove15(e);
    handleMouseMove16(e);
    handleMouseMove17(e);
    handleMouseMove18(e);
    handleMouseMove19(e);
    handleMouseMove20(e);
    handleMouseMove21(e);
});
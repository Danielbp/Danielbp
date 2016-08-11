$( document ).ready(function() {


    var fb = {

        h1:"181px",
        m1:"119px",
        bg1:"#3B5998",

        h2:"150px",
        m2:"150px",
        bg2:"#5D9649",

        h3:"130px",
        m3:"170px",
        bg3:"#ADBAD4",

        h4:"130px",
        m4:"170px",
        bg4:"#66A853",

        h5:"110px",
        m5:"190px",
        bg5:"#5B74A9",

        h6:"110px",
        m6:"190px",
        bg6:"#98A6C2",

        h7:"110px",
        m7:"190px",
        bg7:"#9CAAC7",

        h8:"110px",
        m8:"190px",
        bg8:"#6980B0",

        h9:"110px",
        m9:"190px",
        bg9:"#7A8CB2",

        h10:"110px",
        m10:"190px",
        bg10:"#4C67A1",

        h11:"110px",
        m11:"190px",
        bg11:"#8396BE",

        h12:"110px",
        m12:"190px",
        bg12:"#436D4A"

    };

    var go = {

        h1:"200px",
        m1:"100px",
        bg1:"#5191FD",

        h2:"140px",
        m2:"160px",
        bg2:"#1647E9",

        h3:"90px",
        m3:"210px",
        bg3:"#1C54F5",

        h4:"80px",
        m4:"220px",
        bg4:"#F6A615",

        h5:"70px",
        m5:"230px",
        bg5:"#E82A37",

        h6:"70px",
        m6:"230px",
        bg6:"#0DA921",

        h7:"60px",
        m7:"240px",
        bg7:"#133AD9",

        h8:"60px",
        m8:"240px",
        bg8:"#D82732",

        h9:"60px",
        m9:"240px",
        bg9:"#F35E4C",

        h10:"50px",
        m10:"250px",
        bg10:"#CC4A30",

        h11:"50px",
        m11:"250px",
        bg11:"#3C74F7",

        h12:"50px",
        m12:"250px",
        bg12:"#A64847"

    };

    var yo = {

        h1:"170px",
        m1:"130px",
        bg1:"#B4211C",

        h2:"140px",
        m2:"160px",
        bg2:"#763C2F",

        h3:"130px",
        m3:"170px",
        bg3:"#972A1E",

        h4:"80px",
        m4:"220px",
        bg4:"#4E91C8",

        h5:"80px",
        m5:"220px",
        bg5:"#786E4E",

        h6:"60px",
        m6:"240px",
        bg6:"#95744D",

        h7:"50px",
        m7:"250px",
        bg7:"#CDA366",

        h8:"50px",
        m8:"250px",
        bg8:"#556C65",

        h9:"50px",
        m9:"250px",
        bg9:"#365274",

        h10:"50px",
        m10:"250px",
        bg10:"#CC4A30",

        h11:"50px",
        m11:"250px",
        bg11:"#A27A6A",

        h12:"50px",
        m12:"250px",
        bg12:"#A5966E"

    };

    var ya = {

        h1:"130px",
        m1:"170px",
        bg1:"#3450E1",

        h2:"125px",
        m2:"165px",
        bg2:"#643EA0",

        h3:"90px",
        m3:"210px",
        bg3:"#A26E55",

        h4:"60px",
        m4:"240px",
        bg4:"#754938",

        h5:"50px",
        m5:"250px",
        bg5:"#353279",

        h6:"40px",
        m6:"260px",
        bg6:"#556FE8",

        h7:"40px",
        m7:"260px",
        bg7:"#697EEC",

        h8:"40px",
        m8:"260px",
        bg8:"#A2A8EF",

        h9:"40px",
        m9:"260px",
        bg9:"#CE9576",

        h10:"30px",
        m10:"270px",
        bg10:"#7793EF",

        h11:"30px",
        m11:"270px",
        bg11:"#AAA0A0",

        h12:"30",
        m12:"270px",
        bg12:"#C57D5E"

    };


    var cw = {

        h1:"200",
        m1:"100",
        bg1:"#AA4639",

        h2:"200px",
        m2:"100px",
        bg2:"#AA6D39",

        h3:"200px",
        m3:"100px",
        bg3:"#AA82396",

        h4:"200px",
        m4:"100px",
        bg4:"#AA9739",

        h5:"200px",
        m5:"100px",
        bg5:"#AAA939",

        h6:"200px",
        m6:"100px",
        bg6:"#7F9F35",

        h7:"200px",
        m7:"100px",
        bg7:"#2E882E",

        h8:"200px",
        m8:"100px",
        bg8:"#236863",

        h9:"200px",
        m9:"100px",
        bg9:"#2E4372",

        h10:"200px",
        m10:"100px",
        bg10:"#3F3175",

        h11:"200px",
        m11:"100px",
        bg11:"#552B72",

        h12:"200px",
        m12:"100px",
        bg12:"#882E61"

    };

    var mo = {

        h1:"280px",
        m1:"20px",
        bg1:"#C0F70C",

        h2:"270px",
        m2:"30px",
        bg2:"#AEDB17",

        h3:"260px",
        m3:"40px",
        bg3:"#9CC222",

        h4:"250px",
        m4:"50px",
        bg4:"#8DAA2E",

        h5:"240px",
        m5:"60px",
        bg5:"#738634",

        h6:"230px",
        m6:"70px",
        bg6:"#738634",

        h7:"220px",
        m7:"80px",
        bg7:"#738634",

        h8:"210px",
        m8:"90px",
        bg8:"#738634",

        h9:"200px",
        m9:"100px",
        bg9:"#738634",

        h10:"190px",
        m10:"110px",
        bg10:"#738634",

        h11:"180px",
        m11:"120px",
        bg11:"#738634",

        h12:"170px",
        m12:"130px",
        bg12:"#738634"

    };

    $( document ).ready(function() {
        $(".sprite").css('visibility','hidden');
        $("#1").css('visibility','hidden');
        $("#o1").css('visibility','hidden');
        $("#o2").css('visibility','hidden');
        $("#o3").css('visibility','hidden');
        $("#o4").css('visibility','hidden');
        $("#o5").css('visibility','hidden');
        $("#toggle").css('visibility','hidden');
        $("#toggle2").css('visibility','hidden');
        $("#toggle3").css('visibility','hidden');
        $("#toggle4").css('visibility','hidden');
    });

    $( "div.fab" )
        .mouseover(function() {
            $('#one').stop(true, false).animate({height:fb.h1, marginTop:fb.m1, backgroundColor: fb.bg1}, 410);
            $('#two').stop(true, false).animate({height:fb.h2, marginBottom:fb.m2, backgroundColor: fb.bg2}, 420);
            $('#three').stop(true, false).animate({height:fb.h3, marginTop:fb.m3, backgroundColor: fb.bg3}, 430);
            $('#four').stop(true, false).animate({height:fb.h4, marginBottom:fb.m4, backgroundColor: fb.bg4}, 450);
            $('#five').stop(true, false).animate({height:fb.h5, marginTop:fb.m5, backgroundColor: fb.bg5}, 460);
            $('#six').stop(true, false).animate({height:fb.h6, marginBottom:fb.m6, backgroundColor: fb.bg6}, 470);
            $('#seven').stop(true, false).animate({height:fb.h7, marginTop:fb.m7, backgroundColor: fb.bg7}, 480);
            $('#eight').stop(true, false).animate({height:fb.h8, marginBottom:fb.m8, backgroundColor: fb.bg8}, 490);
            $('#nine').stop(true, false).animate({height:fb.h9, marginTop:fb.m9, backgroundColor: fb.bg9}, 490);
            $('#ten').stop(true, false).animate({height: fb.h10, marginBottom:fb.m10, backgroundColor: fb.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:fb.h11, marginTop:fb.m11, backgroundColor: fb.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:fb.h12, marginBottom:fb.m12, backgroundColor: fb.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $("#1").stop(true, false).css('visibility','visible').fadeIn(2000);
            $("#o1").stop(true, false).css('visibility','visible').fadeIn(3000);
            $( "#toggle" ).stop(true, false).css('visibility','visible').on( "slide" ).fadeIn(4000);

        })
        .mouseout(function() {
            $('#one').stop(true, false).animate({height:cw.h1, marginTop:cw.m1, backgroundColor: cw.bg1}, 610);
            $('#two').stop(true, false).animate({height:cw.h2, marginBottom:cw.m2, backgroundColor: cw.bg2}, 520);
            $('#three').stop(true, false).animate({height:cw.h3, marginTop:cw.m3, backgroundColor: cw.bg3}, 430);
            $('#four').stop(true, false).animate({height:cw.h4, marginBottom:cw.m4, backgroundColor: cw.bg4}, 450);
            $('#five').stop(true, false).animate({height:cw.h5, marginTop:cw.m5, backgroundColor: cw.bg5}, 460);
            $('#six').stop(true, false).animate({height:cw.h6, marginBottom:cw.m6, backgroundColor: cw.bg6}, 570);
            $('#seven').stop(true, false).animate({height:cw.h7, marginTop:cw.m7, backgroundColor: cw.bg7}, 480);
            $('#eight').stop(true, false).animate({height:cw.h8, marginBottom:cw.m8, backgroundColor: cw.bg8}, 690);
            $('#nine').stop(true, false).animate({height:cw.h9, marginTop:cw.m9, backgroundColor: cw.bg9}, 490);
            $('#ten').stop(true, false).animate({height: cw.h10, marginBottom:cw.m10, backgroundColor: cw.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:cw.h11, marginTop:cw.m11, backgroundColor: cw.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:cw.h12, marginBottom:cw.m12, backgroundColor: cw.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','visible').fadeIn(5000);
            $("#1").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $("#o1").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $( "#toggle" ).stop(true, false).css('visibility','hidden').on( "slide" ).fadeOut(1000);

        });

    $( "div.gog" )
        .mouseover(function() {
            $('#one').stop(true, false).animate({height:go.h1, marginTop:go.m1, backgroundColor: go.bg1}, 410);
            $('#two').stop(true, false).animate({height:go.h2, marginBottom:go.m2, backgroundColor: go.bg2}, 420);
            $('#three').stop(true, false).animate({height:go.h3, marginTop:go.m3, backgroundColor: go.bg3}, 430);
            $('#four').stop(true, false).animate({height:go.h4, marginBottom:go.m4, backgroundColor: go.bg4}, 450);
            $('#five').stop(true, false).animate({height:go.h5, marginTop:go.m5, backgroundColor: go.bg5}, 460);
            $('#six').stop(true, false).animate({height:go.h6, marginBottom:go.m6, backgroundColor: go.bg6}, 470);
            $('#seven').stop(true, false).animate({height:go.h7, marginTop:go.m7, backgroundColor: go.bg7}, 480);
            $('#eight').stop(true, false).animate({height:go.h8, marginBottom:go.m8, backgroundColor: go.bg8}, 490);
            $('#nine').stop(true, false).animate({height:go.h9, marginTop:go.m9, backgroundColor: go.bg9}, 490);
            $('#ten').stop(true, false).animate({height: go.h10, marginBottom:go.m10, backgroundColor: go.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:go.h11, marginTop:go.m11, backgroundColor: go.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:go.h12, marginBottom:go.m12, backgroundColor: go.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $("#o2").stop(true, false).css('visibility','visible').fadeIn(3000);
            $( "#toggle2" ).stop(true, false).css('visibility','visible').on( "slide" ).fadeIn(4000);
        })
        .mouseout(function() {
            $('#one').stop(true, false).animate({height:cw.h1, marginTop:cw.m1, backgroundColor: cw.bg1}, 610);
            $('#two').stop(true, false).animate({height:cw.h2, marginBottom:cw.m2, backgroundColor: cw.bg2}, 520);
            $('#three').stop(true, false).animate({height:cw.h3, marginTop:cw.m3, backgroundColor: cw.bg3}, 430);
            $('#four').stop(true, false).animate({height:cw.h4, marginBottom:cw.m4, backgroundColor: cw.bg4}, 450);
            $('#five').stop(true, false).animate({height:cw.h5, marginTop:cw.m5, backgroundColor: cw.bg5}, 460);
            $('#six').stop(true, false).animate({height:cw.h6, marginBottom:cw.m6, backgroundColor: cw.bg6}, 570);
            $('#seven').stop(true, false).animate({height:cw.h7, marginTop:cw.m7, backgroundColor: cw.bg7}, 480);
            $('#eight').stop(true, false).animate({height:cw.h8, marginBottom:cw.m8, backgroundColor: cw.bg8}, 690);
            $('#nine').stop(true, false).animate({height:cw.h9, marginTop:cw.m9, backgroundColor: cw.bg9}, 490);
            $('#ten').stop(true, false).animate({height: cw.h10, marginBottom:cw.m10, backgroundColor: cw.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:cw.h11, marginTop:cw.m11, backgroundColor: cw.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:cw.h12, marginBottom:cw.m12, backgroundColor: cw.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','visible').fadeIn(3000);
            $("#o2").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $( "#toggle2" ).stop(true, false).css('visibility','hidden').on( "slide").fadeOut(1000);

        });

    $( "div.you" )
        .mouseover(function() {
            $('#one').stop(true, false).animate({height:yo.h1, marginTop:yo.m1, backgroundColor: yo.bg1}, 410);
            $('#two').stop(true, false).animate({height:yo.h2, marginBottom:yo.m2, backgroundColor: yo.bg2}, 420);
            $('#three').stop(true, false).animate({height:yo.h3, marginTop:yo.m3, backgroundColor: yo.bg3}, 430);
            $('#four').stop(true, false).animate({height:yo.h4, marginBottom:yo.m4, backgroundColor: yo.bg4}, 450);
            $('#five').stop(true, false).animate({height:yo.h5, marginTop:yo.m5, backgroundColor: yo.bg5}, 460);
            $('#six').stop(true, false).animate({height:yo.h6, marginBottom:yo.m6, backgroundColor: yo.bg6}, 470);
            $('#seven').stop(true, false).animate({height:yo.h7, marginTop:yo.m7, backgroundColor: yo.bg7}, 480);
            $('#eight').stop(true, false).animate({height:yo.h8, marginBottom:yo.m8, backgroundColor: yo.bg8}, 490);
            $('#nine').stop(true, false).animate({height:yo.h9, marginTop:yo.m9, backgroundColor: yo.bg9}, 490);
            $('#ten').stop(true, false).animate({height: yo.h10, marginBottom:yo.m10, backgroundColor: yo.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:yo.h11, marginTop:yo.m11, backgroundColor: yo.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:yo.h12, marginBottom:yo.m12, backgroundColor: yo.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $("#o3").stop(true, false).css('visibility','visible').fadeIn(3000);
            $( "#toggle3" ).stop(true, false).css('visibility','visible').on( "slide" ).fadeIn(4000);

        })
        .mouseout(function() {
            $('#one').stop(true, false).animate({height:cw.h1, marginTop:cw.m1, backgroundColor: cw.bg1}, 610);
            $('#two').stop(true, false).animate({height:cw.h2, marginBottom:cw.m2, backgroundColor: cw.bg2}, 520);
            $('#three').stop(true, false).animate({height:cw.h3, marginTop:cw.m3, backgroundColor: cw.bg3}, 430);
            $('#four').stop(true, false).animate({height:cw.h4, marginBottom:cw.m4, backgroundColor: cw.bg4}, 450);
            $('#five').stop(true, false).animate({height:cw.h5, marginTop:cw.m5, backgroundColor: cw.bg5}, 460);
            $('#six').stop(true, false).animate({height:cw.h6, marginBottom:cw.m6, backgroundColor: cw.bg6}, 570);
            $('#seven').stop(true, false).animate({height:cw.h7, marginTop:cw.m7, backgroundColor: cw.bg7}, 480);
            $('#eight').stop(true, false).animate({height:cw.h8, marginBottom:cw.m8, backgroundColor: cw.bg8}, 690);
            $('#nine').stop(true, false).animate({height:cw.h9, marginTop:cw.m9, backgroundColor: cw.bg9}, 490);
            $('#ten').stop(true, false).animate({height: cw.h10, marginBottom:cw.m10, backgroundColor: cw.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:cw.h11, marginTop:cw.m11, backgroundColor: cw.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:cw.h12, marginBottom:cw.m12, backgroundColor: cw.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','visible').fadeIn(3000);
            $("#o3").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $( "#toggle3" ).stop(true, false).css('visibility','hidden').on( "slide").fadeOut(1000);
        });

    $( "div.yah" )
        .mouseover(function() {
            $('#one').stop(true, false).animate({height:ya.h1, marginTop:ya.m1, backgroundColor: ya.bg1}, 610);
            $('#two').stop(true, false).animate({height:ya.h2, marginBottom:ya.m2, backgroundColor: ya.bg2}, 520);
            $('#three').stop(true, false).animate({height:ya.h3, marginTop:ya.m3, backgroundColor: ya.bg3}, 430);
            $('#four').stop(true, false).animate({height:ya.h4, marginBottom:ya.m4, backgroundColor: ya.bg4}, 450);
            $('#five').stop(true, false).animate({height:ya.h5, marginTop:ya.m5, backgroundColor: ya.bg5}, 460);
            $('#six').stop(true, false).animate({height:ya.h6, marginBottom:ya.m6, backgroundColor: ya.bg6}, 570);
            $('#seven').stop(true, false).animate({height:ya.h7, marginTop:ya.m7, backgroundColor: ya.bg7}, 480);
            $('#eight').stop(true, false).animate({height:ya.h8, marginBottom:ya.m8, backgroundColor: ya.bg8}, 690);
            $('#nine').stop(true, false).animate({height:ya.h9, marginTop:ya.m9, backgroundColor: ya.bg9}, 490);
            $('#ten').stop(true, false).animate({height: ya.h10, marginBottom:ya.m10, backgroundColor: ya.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:ya.h11, marginTop:ya.m11, backgroundColor: ya.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:ya.h12, marginBottom:ya.m12, backgroundColor: ya.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $("#o4").stop(true, false).css('visibility','visible').fadeIn(3000);
            $( "#toggle4" ).stop(true, false).css('visibility','visible').on( "slide" ).fadeIn(4000);

        })
        .mouseout(function() {
            $('#one').stop(true, false).animate({height:cw.h1, marginTop:cw.m1, backgroundColor: cw.bg1}, 610);
            $('#two').stop(true, false).animate({height:cw.h2, marginBottom:cw.m2, backgroundColor: cw.bg2}, 520);
            $('#three').stop(true, false).animate({height:cw.h3, marginTop:cw.m3, backgroundColor: cw.bg3}, 430);
            $('#four').stop(true, false).animate({height:cw.h4, marginBottom:cw.m4, backgroundColor: cw.bg4}, 450);
            $('#five').stop(true, false).animate({height:cw.h5, marginTop:cw.m5, backgroundColor: cw.bg5}, 460);
            $('#six').stop(true, false).animate({height:cw.h6, marginBottom:cw.m6, backgroundColor: cw.bg6}, 570);
            $('#seven').stop(true, false).animate({height:cw.h7, marginTop:cw.m7, backgroundColor: cw.bg7}, 480);
            $('#eight').stop(true, false).animate({height:cw.h8, marginBottom:cw.m8, backgroundColor: cw.bg8}, 690);
            $('#nine').stop(true, false).animate({height:cw.h9, marginTop:cw.m9, backgroundColor: cw.bg9}, 490);
            $('#ten').stop(true, false).animate({height: cw.h10, marginBottom:cw.m10, backgroundColor: cw.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:cw.h11, marginTop:cw.m11, backgroundColor: cw.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:cw.h12, marginBottom:cw.m12, backgroundColor: cw.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','visible').fadeIn(3000);
            $("#o4").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $( "#toggle4" ).stop(true, false).css('visibility','hidden').on( "slide").fadeOut(1000);
        });

    $( "div.myo" )
        .mouseover(function() {
            $('#one').stop(true, false).animate({height:mo.h1, marginTop:mo.m1, backgroundColor: mo.bg1}, 410);
            $('#two').stop(true, false).animate({height:mo.h2, marginBottom:mo.m2, backgroundColor: mo.bg2}, 420);
            $('#three').stop(true, false).animate({height:mo.h3, marginTop:mo.m3, backgroundColor: mo.bg3}, 430);
            $('#four').stop(true, false).animate({height:mo.h4, marginBottom:mo.m4, backgroundColor: mo.bg4}, 450);
            $('#five').stop(true, false).animate({height:mo.h5, marginTop:mo.m5, backgroundColor: mo.bg5}, 460);
            $('#six').stop(true, false).animate({height:mo.h6, marginBottom:mo.m6, backgroundColor: mo.bg6}, 470);
            $('#seven').stop(true, false).animate({height:mo.h7, marginTop:mo.m7, backgroundColor: mo.bg7}, 480);
            $('#eight').stop(true, false).animate({height:mo.h8, marginBottom:mo.m8, backgroundColor: mo.bg8}, 490);
            $('#nine').stop(true, false).animate({height:mo.h9, marginTop:mo.m9, backgroundColor: mo.bg9}, 490);
            $('#ten').stop(true, false).animate({height: mo.h10, marginBottom:mo.m10, backgroundColor: mo.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:mo.h11, marginTop:mo.m11, backgroundColor: mo.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:mo.h12, marginBottom:mo.m12, backgroundColor: mo.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','hidden').fadeOut(1000);
            $("#o5").stop(true, false).css('visibility','visible').fadeIn(3000);

        })
        .mouseout(function() {
            $('#one').stop(true, false).animate({height:cw.h1, marginTop:cw.m1, backgroundColor: cw.bg1}, 610);
            $('#two').stop(true, false).animate({height:cw.h2, marginBottom:cw.m2, backgroundColor: cw.bg2}, 520);
            $('#three').stop(true, false).animate({height:cw.h3, marginTop:cw.m3, backgroundColor: cw.bg3}, 430);
            $('#four').stop(true, false).animate({height:cw.h4, marginBottom:cw.m4, backgroundColor: cw.bg4}, 450);
            $('#five').stop(true, false).animate({height:cw.h5, marginTop:cw.m5, backgroundColor: cw.bg5}, 460);
            $('#six').stop(true, false).animate({height:cw.h6, marginBottom:cw.m6, backgroundColor: cw.bg6}, 570);
            $('#seven').stop(true, false).animate({height:cw.h7, marginTop:cw.m7, backgroundColor: cw.bg7}, 480);
            $('#eight').stop(true, false).animate({height:cw.h8, marginBottom:cw.m8, backgroundColor: cw.bg8}, 690);
            $('#nine').stop(true, false).animate({height:cw.h9, marginTop:cw.m9, backgroundColor: cw.bg9}, 490);
            $('#ten').stop(true, false).animate({height: cw.h10, marginBottom:cw.m10, backgroundColor: cw.bg10}, 480);
            $('#eleven').stop(true, false).animate({height:cw.h11, marginTop:cw.m11, backgroundColor: cw.bg11}, 470);
            $('#twelve').stop(true, false).animate({height:cw.h12, marginBottom:cw.m12, backgroundColor: cw.bg12}, 460);
            $(".sprite").stop(true, false).css('visibility','visible').fadeIn(5000);
            $("#o5").stop(true, false).css('visibility','hidden').fadeOut(1000);

        });

    $("button").on("click", function() {
        var bTXT = $(this);
        if (bTXT.text() == bTXT.data("text-swap")) {
            bTXT.text(bTXT.data("text-original"));
        } else {
            bTXT.data("text-original", bTXT.text());
            bTXT.text(bTXT.data("text-swap"));
        }
    });

});


document.onload = function()
{
    document.getElementById("stop").onclick = function() //остановка обектов в сцене (изменение атрибута "enabled" на значение "false")
    { 
        //остановка обектов в сцене (изменение атрибута "enabled" на значение "false")

        var od = document.getElementById("time").setAttribute("enebled");
        document.getElementById("time").setAttribute("enabled", od="false");

        var od = document.getElementById("time2").setAttribute("enebled");
        document.getElementById("time2").setAttribute("enabled", od="false");
    }

    document.getElementById("play").onclick = function() //движение обектов в сцене (изменение атрибута "enabled" на значение "true")
    { 
        //движение обектов в сцене (изменение атрибута "enabled" на значение "true")

        var od = document.getElementById("time").setAttribute("enebled");
        document.getElementById("time").setAttribute("enabled", od="true");

        var od = document.getElementById("time2").setAttribute("enebled");
        document.getElementById("time2").setAttribute("enabled", od="true");
    }
}

function fun1() //движение обектов в сцене (изменение атрибута "enabled" на значение "true")
{
                    //движение обектов в сцене (изменение атрибута "enabled" на значение "true")

                    si = document.getElementById("r1").value;
					ChangeScale = document.getElementById("plot").getAttribute("scale");
					sc = ChangeScale.split(' ');
					sc[0]=si;
					sc[1]=si;
					sc[2]=si;
					fmul = String(sc[0] + ' '+ sc[1] + ' '+ sc[2]);
	      			document.getElementById('plot').setAttribute("scale", fmul);             
   
    var rng=document.getElementById('r1'); //rng - это ползунок
    var i1=document.getElementById('i1'); //i1 - input (вывод значения ползунка)
    i1.value=rng.value;
}
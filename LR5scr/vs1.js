document.onload = function () {

    document.getElementById("play").onclick = function ()// вызов функции при нажатии кнопки "play"

    //движение обектов в сцене (изменение атрибута "enabled" на значение "true")

    { 
        var od = document.getElementById("time1").setAttribute("enebled");
        document.getElementById("time1").setAttribute("enabled", od = "true");

        var od = document.getElementById("time2").setAttribute("enebled");
        document.getElementById("time2").setAttribute("enabled", od = "true");
    }

    document.getElementById("stop").onclick = function () // вызов функции при нажатии кнопки "stop"
    {
        // остановка обектов в сцене (изменение атрибута "enabled" на значение "false")

        var od = document.getElementById("time1").setAttribute("enebled");
        document.getElementById("time1").setAttribute("enabled", od = "false");

        var od = document.getElementById("time2").setAttribute("enebled");
        document.getElementById("time2").setAttribute("enabled", od = "false");
    }

    document.getElementById('scale').onclick = function () // вызов функции при нажатии кнопки "size"
    {
        var click0 = 0;
         {
            click0 = 1 + click0;
            if (click0 < 5) { // изменение атрибута "scale" для шатла
                var ChangeScale = document.getElementById("shuttle").getAttribute("scale");
                var sc = ChangeScale.split(' ');
                sc[0] = 1.1 * sc[0];
                sc[1] = 1.1 * sc[1];
                sc[2] = 1.1 * sc[2];
                fmul = String(sc[0] + ' ');
                fmul = String(fmul + sc[1] + ' ');
                fmul = String(fmul + sc[2]);
                document.getElementById('shuttle').setAttribute("scale", fmul);

            }
        }
    }
}
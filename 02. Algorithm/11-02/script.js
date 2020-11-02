// herev r = 26 bol toirgiin urtiig ol, talbai, ezelhuun ol <!-- tgfdg -->
var r = 15;
var pi = 3.14; 

if(r > 0){
    var A = 2*pi*r;
    var S = pi*r**2;
    var V = 4/3 * pi * r**3;

    console.log("Тойргийн урт: " + A + ' --- ' + "Талбай: " + S + " --- " + "Эзэлхүүн: " + V);
} else {
    console.log('Өгөгдөл буруу');
}
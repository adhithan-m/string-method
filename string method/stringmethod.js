var a = ("java script - string method java");
var b = ("string Method 1234");
var c = ("    learn string methods learn     ");
var d = ("LEARN STRING METHODS LEARN");
const box =("123");
document.write(a.charAt(5));
document.write("<br>");
document.write(a.charCodeAt(1));
document.write("<br>");
document.write(a.concat(b));
document.write("<br>");
document.write(a.startsWith("j"));
document.write("<br>");
document.write(a.endsWith("d"));
document.write("<br>");
document.write(String.fromCharCode(83))
document.write("<br>");
document.write(a.includes("string"));
document.write("<br>");
document.write(b.indexOf("s"));
document.write("<br>");
document.write(b.lastIndexOf("4"));
document.write("<br>");
document.write(b.match(/Method/gi));
document.write("<br>");
document.write(d.match(/ETHODS/g));
document.write("<br>");
document.write(a.repeat(3));
document.write("<br>");
document.write(a.replace("learn","java"));
document.write("<br>");
document.write(a.search("java"));
document.write("<br>");
document.write(c.slice(3));
document.write("<br>");
document.write(d.split(" "));
document.write("<br>");
document.write(b.substr(3));
document.write("<br>");
document.write(a.substring(3));
document.write("<br>");
document.write(d.toUpperCase());
document.write("<br>");
document.write(d.toLowerCase()); 
document.write("<br>");
document.write(c.trim());
document.write("<br>");
document.write(c.trimStart());
document.write("<br>");
document.write(c.trimEnd());
document.write("<br>");
document.write(String.fromCodePoint(83));
document.write("<br>");
document.write(a.length);
document.write("<br>");
document.write(a.toString());
document.write("<br>");
document.write(box.valueOf());
document.write("<br>");

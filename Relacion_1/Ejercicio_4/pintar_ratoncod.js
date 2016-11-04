document.write("<table border =”0” cellspacing =”2” width =”200” >");

for (let i = 0; i < 100; i++) {
    document.write(`<tr height = 5 >`);
    for (let j = 0; j < 100; j++){
        document.write(`<td width = 5 > &nbsp;</td>`);
        
    };
    document.write("</tr>");
};

document.write("</table>");
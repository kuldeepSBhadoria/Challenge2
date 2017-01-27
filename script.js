/**
 * Created by kuldeep on 1/27/2017.
 */
function drawPascal(rows){
    var element = document.getElementById("div1");          //Take reference of div1
    while (element.firstChild) {                            //Remove all child nodes to clear view when next time button is clicked
        element.removeChild(element.firstChild);
    }
    for (var y=0; y<rows; y++){                             //Loop for number of rows
        var para = document.createElement("p");             //Create new element p to display next row of numbers in a new line
        var c = 1;                                          //Initialise c to 1
        for (var x=0; x<=y; x++){                           //Loop for calculation of pascal numbers
            var node1 = document.createTextNode(" "+c);     //Create Text node
            para.appendChild(node1);                        //Append child node
            c = c*(y-x)/(x+1);
        }
        element.appendChild(para);                          //For displaying pascal numbers
    }
}

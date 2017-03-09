function drawPyramid(height) {
    document.getElementById("pyramid").innerHTML = "";

    //beginning w/row # =  0, where the row # is less than the hight,
    //and incrementing by one each iteration,
    for (var row = 0;
        row < height;
        row++)
        {
        // number of bricks to use is the row # +1
        var numBricks = row + 1;
        // number of spaces is total height - row # - 1
        var numSpaces = height - row - 1;

        // the Hash is a string type.  So to begin, establish an empty string veriable.
        var rowStr = "";

        // set I=0.  While I is less than the numSpaces variable in line 13,
        //add a non-breaking space (&nbsp;) and increment by 1. Loop stopps when
        //valua of I = value of numSpaces
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "&nbsp;";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr; //established on line 16 and appended throughout

        //the .appendChild adds a paragraph tag containing the #s and spaces
        //calculated earlier in the function.
        document.getElementById("pyramid").appendChild(rowElem);
    }
};

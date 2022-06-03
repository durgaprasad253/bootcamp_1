const projectList=[{"Name":"TensorFlow",
                    "Description":"It is a free open-source software used for machine learning and AI."},
                {"Name":"Django",
            "Description":"Python framework for building dynamic web applications using python."},
        {"Name":"Spring",
    "Description":"The Spring Framework is an app development framework. Millions use it to create, test, and deploy their code. It is beloved for being powerful, yet lightweight, and flexible."},
{"Name":"Apache Tomcat",
"Description":"It is one of the most used web servers for Java. It is used by many that need to deploy JSPs, WebSockets, and servlets."}]

var cols = [];
             
            for (var i = 0; i < projectList.length; i++) {
                for (var k in projectList[i]) {
                    if (cols.indexOf(k) === -1) {
                         
                        // Push all keys to the array
                        cols.push(k);
                    }
                }
            }
            console.log(cols)

            // Create a table element
            var table = document.createElement("table");
            table.setAttribute('border','2px');
            table.setAttribute('id','main-table')
             
            // Create table row tr element of a table
            var tr = table.insertRow(-1);
            for (var i = 0; i < cols.length; i++) {
                 console.log(i)
                // Create the table header th element
                var theader = document.createElement("th");
                theader.innerHTML = cols[i];
                 
                // Append columnName to the table row
                tr.appendChild(theader);
            }

// Adding the data to the table
for (var i = 0; i < projectList.length; i++) {
                 
    // Create a new row
    trow = table.insertRow(-1);
    for (var j = 0; j < cols.length; j++) {
        var cell = trow.insertCell(-1);
         
        // Inserting the cell at particular place
        cell.innerHTML = projectList[i][cols[j]];
    }
}
 
// Add the newly created table containing json data


window.onload = function() {
    var el = document.getElementById("insert")
el.innerHTML = "";
el.appendChild(table);
};


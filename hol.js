const getData = () =>{
    const url = "mudfoot.doc.stu.mmu.ac.uk/node/api/halloffame";

    fetch(url, {
        method: "get",
    })
    .then((resJson) => {
        let = tableHTML ="";

        for(let i=0; i<resJson.length; i++){
            tableHTML += "<tr>";
            tableHTML += "<td>" + resJson[i][image] + "</td>";
            tableHTML += "<td>" + resJson[i][band] + "</td>";
            tableHTML += "<td>" + resJson[i][inducted_members] + "</td>";
            tableHTML += "<td>" + resJson[i][inducted_by] + "</td>";
            
        };
        document.getElementById("hol-table-body").innerHTML = tableHTML;
    })
    .catch((error) => {
        alert(error);
    })
}
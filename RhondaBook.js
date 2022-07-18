function SaveCustomer() {
    var Name = document.getElementById('Name').value;
    var MakeModel = document.getElementById('MakeModel').value;
    var VIN = document.getElementById('VIN').value;
    var Balance = document.getElementById('Balance').value;
    var InputDate = document.getElementById('Date').value;
    
    if(InputDate.length == 0) {
        InputDate = new Date();
        var FinalDate = InputDate.getDate()+"/"+(InputDate.getMonth()+1)+"/"+InputDate.getFullYear();
    }

    var blob = new Blob([`${Name} ${MakeModel} ${VIN} ${Balance} ${FinalDate}`], {type: "text/plain"});
    saveAs(blob, `${Name}.txt`);
    
    document.getElementById('Results').innerHTML = `${Name} ${MakeModel} ${VIN} ${Balance} ${FinalDate}`;
}

function SearchCustomer() {
    var Search = document.getElementById('Search').value;
    
}
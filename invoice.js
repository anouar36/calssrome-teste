document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');



    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal(row) {
       
    }


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
       
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});



var nuber1 = document.getElementById("nub1").value;
var nuber2 = document.getElementById("nub2").value;
var solition1 = nuber1 * nuber2;
document.getElementById("solition1").innerHTML.value = solition1 ;
console.log(test)


var nuber3 = document.getElementById("nub3").value;
var nuber4 = document.getElementById("nub4").value;
var solition1 = nuber1 * nuber2;
document.getElementById("solition2").value = solition2;

var nuber5 = document.getElementById("nub5").value;
var nuber6 = document.getElementById("nub6").value;
var solition1 = nuber1 * nuber2;
document.getElementById("solition3").value = solition3;




// function Calculate()
// {
// var resources = document.getElementById('a1').value;
// var minutes = document.getElementById('a2').value; 
// document.getElementById('a3').value=parseInt(resources) *       parseInt(minutes);
//  document.form1.submit();
//    }

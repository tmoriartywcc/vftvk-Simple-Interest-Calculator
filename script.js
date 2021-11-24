function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    
    //calculate interest
    let interest = parseFloat(principal) * parseInt(years) * parseFloat(rate) /100;
    let year = new Date().getFullYear()+parseInt(years);

    let theResult = document.getElementById("result");

    /* build result string */
    let theResultString = "";
    theResultString += "If you deposit <mark>" + principal + "</mark>,<br/>";
    theResultString += "at an interest rate of <mark>" + rate + "%</mark>.<br/>";
    theResultString += "You will recieve an amount of <mark>" + interest + "</mark>,<br/>";
    theResultString += "in the year <mark>" + year + "</mark>";

    theResult.innerHTML = theResultString;

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validateAmount()
{
    let principal = document.getElementById("principal");
    if(principalVal == "")
        principalVal = 0;
    
    principalVal = parseFloat(principal.value);
    if(principalVal <= 0)
    {
        /* give user error message, clear field and set focus */
        alert("Enter a positive number");
        principal.value = "";
        principal.focus();
    }

}
        
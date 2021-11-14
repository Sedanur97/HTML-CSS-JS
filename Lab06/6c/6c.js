function verify(){
    var x, text;
    text=Number(document.getElementById("age").value);
    if(text<18)
    {
    alert("Under 18");
    }
    else
    {
    alert("You are Adult");
    }
    }
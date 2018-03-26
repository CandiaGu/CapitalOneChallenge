// This file contains code to dynamically predict revenue and esitimate prices

    //predicts price based on input
    function predict()
    {
        var time = document.getElementById('time').value;
        var longitude = document.getElementById('long').value;
        var latitude = document.getElementById('lat').value;

        if (isNaN(latitude) ||  isNaN(longitude))
        {
            document.getElementById("predResult").innerHTML = "something";
            alert("Please enter valid coordinates!")
        }
        else
        {
             document.getElementById("predResult").innerHTML =  "somethingelse";
             // "$".concat(17138.89956072564* latitude + 3928.7379267511415*longitude -162245.345747);
             //found using sklearn linear regression in Python (check airbnb.py for details)
        }
    }

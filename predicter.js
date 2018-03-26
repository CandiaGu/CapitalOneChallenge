    //Predicts and updates the html file to show results
    function predict()
    {
        var time = document.getElementById('time').value;
        var longitude = Number(document.getElementById('long').value);
        var latitude = Number(document.getElementById('lat').value);


        if (isNaN(latitude) ||  isNaN(longitude) || typeof longitude != 'number' || typeof latitude != 'number' || typeof time != 'string')
        {
            document.getElementById("predResult").innerHTML = "";
            alert("Please enter valid coordinates!")
        }
        else
        {
             //|| typeof longitude !== 'number' || typeof latitude !== 'number' || typeof time !== 'string'
             document.getElementById("predResult").innerHTML = findValue(Number(longitude), Number(latitude), time) ;

        }
    }


    //Finds the predicted valud
    function findValue(longitude, latitude, time){
        //find all matching items
        var rangeOfError = 10;
        var totalDispatches = [0,0,0,0,0,0]; //medic, engine, chief, private, resque squad, truck 
        var mom = moment('time', 'HH:mm a')
        for(var i = 0; i < data.length; i++){
            var dist = distance(latitude, longitude, data[i].latitude, data[i].longitude, "K");
            var timeDiff = moment.duration(mom.diff(data[i].start)).asMinutes();
            if(dist<5 )
                var unittype = data[i].unit_type;
                if(unittype == 'MEDIC')
                    totalDispatches[0] += 1;
                if(unittype == 'ENGINE')
                    totalDispatches[1] += 1;
                if(unittype == 'CHIEF')
                    totalDispatches[2] += 1;
                if(unittype == 'PRIVATE')
                    totalDispatches[3] += 1;
                if(unittype == 'RESCUE SQUAD')
                    totalDispatches[4] += 1;
                if(unittype == 'TRUCK')
                    totalDispatches[5] += 1;

        }

        //find max
        var maxDispatch;
        var maxNum = 0;
        for(var i = 0; i < totalDispatches.length; i ++){
            if(totalDispatches[i] > maxNum){
                maxDispatch = i;
                maxNum = totalDispatches[i];
            }

        }
        if(maxDispatch == 0){
            return 'MEDIC';
        }
        if(maxDispatch == 1){
            return 'ENGINE';
        }
        if(maxDispatch == 2){
            return 'CHIEF';
        }
        if(maxDispatch == 3){
            return 'PRIVATE';     
        }
        if(maxDispatch == 4){
            return 'RESCUE';
        }
        if(maxDispatch == 5){
            return 'TRUCK';   
        }
        return maxDispatch;

    }

    //finds the distance between two points
    function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
}

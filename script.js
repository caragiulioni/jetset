
const jetApp = {};
jetApp.apiKey = "";
jetApp.apiUrl = "";
jetApp.flights = [];

// iata.apikey = "0a628507-d561-4fb9-a91c-c0de2e282e51";

//airlines quick access example AA = american airlines
// https://iatacodes.org/api/v7/airlines?api_key=0a628507-d561-4fb9-a91c-c0de2e282e51&iata_code=AA

//city quick access example ex. city paris
//  https://iatacodes.org/api/v6/cities?api_key=0a628507-d561-4fb9-a91c-c0de2e282e51&code=PAR

// country quick access example ex country france
//https://iatacodes.org/api/v6/countries?api_key=0a628507-d561-4fb9-a91c-c0de2e282e51&code=FR


//drop down options and data. REGION / ORIGIN CITY / CITY CODE (city code goes to data submission)






var regionObject = {

    // "Asia":{
    //     "Beijing, China": ["BJS"],
    //     "Hong Kong, China": ["HGK"],
    //     "Shanghai, China": ["SHA"],
    //     "Dubai, UAE": ["DXB"],
    //     "Bangalore, India": ["BLR"],
    //     "Delhi, India": ["DEL"],
    //     "Mumbai, India": ["BOM"],
    //     "Tel Aviv, Isreal": ["TEL"],
    //     "Osaka, Japan": ["OSK"],
    //     "Tokyo Haneda, Japan": ["TYO"],
    //     "Changi, Singapore": ["SIN"],
    //     "Bangkok, Thailand": ["BKK"],
    //     "Phuket, Thailand": ["HKT"],
    //     "Busan, South Korea": ["PUS"],
    //     "Seoul, South Korea": ["SEL"],
    // },

    // "Australia":{
    //     "Sydney, Australia": ["SYD"],
    // },

    "Canada": {
        "Edmonton, Alberta": ["YEA"],
        "Calgary, Alberta": ["YXU"],
        "Vancouver, British Columbia": ["YVR"],
        "Victoria, British Columbia": ["YYJ"],
        "Winnepeg, Manitoba": ["YWG"],
        "Toronto, Ontario": ["YTO"],
        "Saint John, New Brunswick": ["YSJ"],
        "St. John's, Newfoundland": ["YYT"],
        "Halifax, Novascotia": ["YHZ"],
        "Thunder Bay, Ontario": ["YQT"],
        "Toronto, Ontario": ["YTO"],
        "London, Ontario": ["YXU"],
        "Regina, Saskatchewan": ["YQR"],
        "Montreal, Quebec": ["YMQ"],
        "Quebec City, Quebec": ["YQB"]
    },

    "Europe": {
        "Prague, Czech Republic": ["PRG"],
        "London, England": ["LON"],
        "Nice, France": ["NCE"],
        "Paris, France": ["PAR"],
        "Frankfurt, Germany": ["FRA"],
        "Munich, Germany": ["MUN"],
        "Amsterdam, Netherlands": ["AMS"],
        "Madrid, Spain": ["MAD"]
    },

    // "Mexico":{
    //     "Cancun, Mexico": ["CUN"],
    //     "Guadalajara, Mexico": ["GDL"],
    //     "Mexico City, Mexico": ["MEX"]
    // },

    // "Russia":{
    //     "Anapa, Russia": ["AAQ"],
    //     "Beslan, Russia": ["OGZ"],
    //     "Orenburg, Russia": ["REN"],
    //     "Perm Krai, Russia": ["PEE"],
    //     "Saint Petersburg, Russia": ["LED"],
    //     "Stavropol Krai, Russia": ["STW"],
    //     "Sochi, Russia": ["AER"],
    //     "Rostov-on-Don, Russia": ["ROV"],
    //     "Volgograd, Russia": ["VOG"]
    // },

    // "South America":{
    //     "Buenos Aires, Argentina": ["BUE"],
    //     "Córdoba, Argentina": ["COR"],
    //     "Esquel, Argentina": ["EQS"],
    //     "Mendoza, Argentina": ["MDZ"],
    //     "Belem, Brazil": ["BEL"],
    //     "Curitiba, Brazil": ["CWB"],
    //     "Fortaleza, Brazil": ["FOR"],
    //     "Goiânia, Brazil": ["GYN"],
    //     "Londrina, Brazil": ["LDB"],
    //     "Manaus, Brazil": ["MAO"],
    //     "Maceió, Brazil": ["MCZ"],
    //     "Rio de Janeiro, Brazil": ["RIO"],
    //     "São Paulo, Brazil": ["SAO"],
    //     "Brasília, Brazil": ["BSB"],
    //     "Bogata, Columbia": ["BOG"]

    // },

    "United States": {
        "Alberqerque, New Mexico": ["ABQ"],
        "Albany, New York": ["ALB"],
        "Anchorage, Alaska": ["ANC"],
        "Atlanta, Georgia": ["ATL"],
        "Austin, Texas": ["AUS"],
        "Hartford County, Connecticut": ["HFD"],
        "Birmingham, Alabama": ["BHM"], 
        "Nashville, Tennesee": ["BNA"],
        "Boise, Idaho": ["BOI"],
        "Boston, Massachusetts": ["BOS"],
        "Burlington, Vermont": ["BTV"],
        "Buffalo, New York": ["BUF"],
        "Washington, DC": ["WAS"],
        "Akron, Ohio": ["CAK"],
        "Charleston, North Carolina": ["CHS"],
        "Chicago, Illinois": ["CHI"],
        "Charlotte, North Carolina": ["CLT"],
        "Cincinnati, Ohio": ["CVG"],
        "Cleveland, Ohio": ["CLE"],
        "Columbus, Ohio": ["CMH"],
        "Dayton, Ohio": ["DAY"],
        "Denver, Colorado": ["DEN"],
        "Dallas, Texas": ["DFW"],
        "Des Moines, Iowa": ["DSM"],
        "Detroit, Michigan": ["DTT"],
        "El Paso, Texas": ["ELP"],
        "Fort Lauderdale, Florida": ["FLL"],
        "Fort Myers, Florida": ["FMY"],
        "Grand Rapids, Michigan": ["GRR"],
        "Greensboro, North Carolina": ["GSO"],
        "Greenville, South Carolina": ["GSP"],
        "Honolulu, Hawaii": ["HNL"],
        "Houston, Texas": ["HOU"],
        "Indianapolis, Indiana": ["IND"],
        "Jacksonville, Florida": ["JAX"],
        "Jefferson, Kentucky": ["SDF"],
        "Jefferson Parish, Louisiana": ["MSY"],
        "Kansas City, Missouri": ["MKC"],
        "Las Vegas, Nevada": ["LAS"],
        "Los Angeles, California": ["LAX"],
        "Long Beach, California": ["LGB"],
        "Memphis, Tennesee": ["MEM"],
        "Manchester, New Hampshire": ["MHT"],
        "Miami, Florida": ["MIA"],
        "Milwaukee, Wisconsin": ["MKE"],
        "Minneapolis, Minnesota": ["MSP"],
        "New York, New York": ["NYC"],
        "Oakland, California": ["OAK"],
        "Oklahoma City, Oklahoma": ["OKC"],
        "Omaha, Nebraska": ["OMA"],
        "Ontario, California": ["ONT"],
        "Orlando, Florida": ["ORL"],
        "Norfolk, Virginia": ["ORF"],
        "Palm Beach, Florida": ["PBI"],
        "Portland, Oregon": ["PDX"],
        "Philadelphia, Pennsylvania": ["PHL"],
        "Phoenix, Arizona": ["PHX"],
        "Pittsburgh, Pennsylvania": ["PIT"],
        "Providence, Rhode Island": ["PVD"],
        "Raleigh, North Carolina": ["RDU"],
        "Richmond, Virginia": ["RIC"],
        "Reno, Nevada": ["RNO"],
        "Rochester, New York": ["ROC"],
        "Fort Myers (South), Florida": ["FMY"],
        "Sacromento, California": ["SAC"],
        "San Diego, California": ["SAN"],
        "San Antonio, Texas": ["SAT"],
        "Savannah, Georgia": ["SAV"],
        "Seattle, Washington": ["SEA"],
        "San Francisco, California": ["SFO"],
        "San Jose, California": ["SJO"],
        "Spokane, Washington": ["GEG"],
        "Syracuse, New York": ["SYR"],
        "Tampa Bay, Florida": ["TPA"],
        "Tulsa, Oklahoma": ["TUL"],
        "Tuscon, Arizona": ["TUA"],
        "Knoxville, Tennessee": ["TYS"]
    }

};


// drop down function -  breaks departing cities into regions for easier navigation and 
// selection by our site visitor
//this is my favorite part of this entire page.

window.onload = () => {
    var regionSel = document.getElementById("regionSel"),
        originSel = document.getElementById("originSel")
    for (var region in regionObject) {
        regionSel.options[regionSel.options.length] = new Option(region, region);
    }
    regionSel.onchange = function () {
        originSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done   
        for (var origin in regionObject[this.value]) {
            originSel.options[originSel.options.length] = new Option(origin, origin);
        }
    }

    $("#originSel").on('change', function() {
        let $originSel = $("#originSel").val();
        let $regionSel = $("#regionSel").val();
        let $originCity = regionObject[$regionSel][$originSel][0];
              $("#origin").val($originCity);
              //console.log($originCity);
              //console.log($originSel);
        })



// direct flight check box values - allows visiter to select flight options with no stops.

   $("input[type='checkbox']").on('change', function(){
  $(this).val(this.checked ? "true" : "false");

})

}


//controls datepicker calender for potential depature date selection

 $( function() {
    $( "#departure_date" ).datepicker({dateFormat: 'yy-mm-dd' }).val()
  } );

////////////////////////////////////////////////////////////////////////


// I nicked this from somewhere and forgot the source. tried many versions to serialize and
//this one worked flawlessly. must keep for later.

$.fn.serializeObject = function() {
    let o = {};
    let a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};




 //LETS GET SOME RESULTS = > FORM SUBMISSION!!

 $(function(){
        const $form = $("#form");
        $form.on("submit", function(event){
            event.preventDefault();
            jetApp.hideForm();
            jetApp.buckleUp();
            let formData = $(this).serializeObject();  //function below
            //console.log(formData);
            originResult();
            jetApp.getResults(formData);


        });
 });






jetApp.getResults=(dataSubmission)=>{


    //this object holds the AJAX data to be used in the AJAX CALL below
    const ajaxData = {
        apikey: jetApp.apiKey,
        format: "json",
        duration: "5--15",  //shows trips from 5 to 15 days in length (15 is max number of days to return result, otherwise err 400) 
        aggregation_mode: "COUNTRY"  //aggregation_mode is to return flights by country options versus cities
    }

    //these following if statements omit blank submissions from being sent in the serialized request
    // ie: if the form submission is blank for that input, revert to the ajaxData above ie: is a date is NOt submitter, DO NOT submite a blank query. omit it entirely
    //this prevents blank queries from being sent in serialized object and sending a bas request

     if(dataSubmission.origin){
        ajaxData.origin = dataSubmission.origin
    }
  
    if(dataSubmission.max_price){
        ajaxData.max_price = dataSubmission.max_price
    }

    if(dataSubmission.departure_date){
        ajaxData.departure_date = dataSubmission.departure_date
    }

    if(dataSubmission.duration){
        ajaxData.duration = dataSubmission.duration
    }

    if(dataSubmission.direct){
        ajaxData.direct = dataSubmission.direct
    }

    console.log(ajaxData);

    $.ajax({
        url: jetApp.apiUrl,
        method: "GET",
        data: ajaxData, //pulled from above
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          let errorJSON = JSON.parse(XMLHttpRequest.responseText); //if this is JSON otherwise just alerting XMLHttpRequest.responseText will do

          let errors = "";
          for(var key in errorJSON) if(errorJSON.hasOwnProperty(key)) {
              errors += errorJSON[key] + "\n";

          } console.log("Your budget probably needs to be adjusted")

          jetApp.hideBuckleUp();
          jetApp.error();
        }
    }).then(function(response) {
        console.log(response);
        jetApp.currency = response.currency
        //console.log(response.results.length)
        let count = response.results.length
            for(let key in response.results){
                //console.log(response.results[key].destination);
                //console.log(response.results[key].airline);
                //(response.results[key])
                // ++++++ I'm calling this function from below in the Loop ++++++++
                // ++++++++++ I'm guessing this was the missing link +++++++++++
                // ++++++++++ I'm setting count to the response.results.length so we know when to start printing the result - lower down the page

                jetApp.getDestinationAirline(response.results[key], count)
            }
        }); 

}; //end form submission



//secondary function. sends IATA codes through additional APIS to return proper format for visitor
// ex. LAX becomes Los Angeles, WS becomes WEST JET etc....

jetApp.getDestinationAirline = ((flightObject, count) =>{
        // ++++++ Note here the flightObject comes from response.results[key] above...and count from count
       //console.log("in destination city");
             $.ajax({
                url: 'http://proxy.hackeryou.com',
                dataType: 'json',
                method:'GET',
                data: {
                    reqUrl: 'http://iatacodes.org/api/v6/airlines',
                    params: {
                        api_key: "0a628507-d561-4fb9-a91c-c0de2e282e51",
                        code: flightObject.airline,  //this is being SENT from the previous call
                    },
                    xmlToJSON: false,
                    useCache: false
                }
            }).then(function(res) {
                //console.log(flightObject);
                // console.log("airline", res.response[0].name)
                // +++++ I made a ternary statement here because one result came back with 9f (which google tells me is Eurostar train)
                // +++++ however, if there is no result it reduces the array and then the display logic won't work
                // +++++ it's saying "if res.respones[0] ?(exists) use res.response[0].name :(otherwise) use this statement"
                flightObject.airlineRes = res.response[0] ? res.response[0].name : "Mystery transport -> Maybe a train?"
                //console.log(flightObject.destination);
                 $.ajax({
                url: 'http://proxy.hackeryou.com',
                dataType: 'json',
                method:'GET',
                data: {
                    reqUrl: 'http://iatacodes.org/api/v6/cities',
                    params: {
                        api_key: "0a628507-d561-4fb9-a91c-c0de2e282e51",
                        code: flightObject.destination,  //this is being SENT with the previous call
                    },
                    xmlToJSON: false,
                    useCache: false
                }
            }).then(function(res) {
                flightObject.cityRes = res.response[0].name
                jetApp.flights.push(flightObject);
                //console.log("flights", jetApp.flights);


                // ++++++++  I created the jetApp.displayResults function below +++++++
                // ++++++++++++++ I put the if statement so that it will only call once the jetApp.flights array has all the flights
                if(jetApp.flights.length == (count)){
                    jetApp.hideBuckleUp();
                    jetApp.displayResults(jetApp.flights);
                    //console.log(jetApp.flights)
                } 
            }); //end then

            //console.log(count)
        }); //end then results function


});

// spits chosen origin from form into results page
function originResult() {
        var input = document.getElementById("originSel")
        var div = document.getElementById("originResult");
        div.innerHTML = div.innerHTML + input.value;
        //console.log(div);
}

//hides form when data is returned
jetApp.hideForm = () =>{
    $("#form").css('display','none'),
    $("footer").css("display", "none"),
    $(".ui-datepicker").css("display", "none"),
    $(".mainWrapper").css({ "background-color" : "transparent" })
}


jetApp.buckleUp = () =>{
    $(".processing").css("display", "block"),
    html = `
        <div><h1>Buckle up! We're planning some trips for you!</h2></div>
        <div><img src="images/plane.png" alt=""/>
        </div>

                    <div class="load-3">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>


    `
    $('.processing').append(html)
}



jetApp.hideBuckleUp = () =>{
    $(".processing").css("display", "none")
}


jetApp.error = () =>{
    $(".error").css("display", "block"),
    html = `
        <div class="errorMessage">
            <h1>Ooops!</h1>
            <h2>We can't find any results based on that search!</h2>
            <p>Pro-Tip: Try adjusting your dates or budget.</p>
            <a href="index.html"><button>try again</button></a>  
        </div>
    `
    $('.error').append(html)
}




// Display the final returned data
jetApp.displayResults = (flights) =>{

    flights.sort(function(a, b){  //sorts flights lowest to highest price
            if (a.price > b.price) {
                return 1;
            } else {
                return -1;
            }
        });



    //console.log(flights[0].destination);  
     $(".results").css('display','block')
    // 1
    flights.map(function(flight, index){

        //start our index at 1 from trip numbers on results page
        for (var i = 1; i <= (flight, index); i++) {        
          //console.log(i);
    }
    html = `
        <div class="flights">
            <div class= flightResult>
                <div class="tripNumber"><h1>Trip ${i}</h1></div>
                <div class="info"><h1>Destination:<h1><h2>${flight.cityRes}</h2></div>
                <div class="info"><h1>Carrier:<h1><h2>${flight.airlineRes}</h2></div>
                <div class="info"><h1>Price: <h1><h2>${flight.price} ${jetApp.currency}</h2></div>
                <div class="info"><h1>Departure Date:<h1><h2>${flight.departure_date}</h2></div>
                <div class="info"><h1>Return Date:<h1><h2>${flight.return_date}</h2></div>
            </div>
        </div>
       `
       $('.results').append(html)
    })
}



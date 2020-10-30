if($('html').attr('wcmmode') != undefined) { 
    
    var covidapi = {
        "async": true,
        "crossDomain": true,
        "url": "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "35fe9d65bfmsh6d1fccf4f7ea4ecp103fe3jsn0d8c3b2fe089"
        }
    }
    
    var countrydata; 
    var countryname = $('html').attr('country');
    $.ajax(covidapi).done(function (response) {
        var countries = response.countries_stat;   
        function fetchData(countryname) {
            countries.some(function(el) {
                if(el.country_name === countryname){
                    countrydata = el;
                };
            }); 
        }; 
        fetchData(countryname);
        console.log(countrydata);
        var totalcases = countrydata.total_cases_per_1m_population;
        console.log('Total cases per 1M population: ' + totalcases);
        var resultArray = totalcases.split(',').map(function(strVale){return Number(strVale);}); 
        totalcases = resultArray.join('');
    
        if(parseInt(totalcases) > 20000) {
    
            $.ajax({
                type: "GET", dataType : "html",
                url: "/content/experience-fragments/capgretail/language-masters/en/site/product-recommendations/product-recommendations-covid.html?wcmmode=disabled",
                success: function(data) {
                    $('.cmp-experiencefragment--product-recommendations').html($(data).find('.cmp-container').html()); 
                }
            });
            $.ajax({
                type: "GET", dataType : "html",
                url: "/content/experience-fragments/capgretail/language-masters/en/site/homepage-banner/homepage-banner-covid.html?wcmmode=disabled",
                success: function(data) {
                    $('.cmp-experiencefragment--homepage-banner').html($(data).find('.cmp-container').html()); 
                }
            });
            $('#products-button .cmp-button__text').text('All Covid Products');
    
        }
        else if(ContextHub.getItem('profile/gender') == 'female') {
            $.ajax({
                type: "GET", dataType : "html",
                url: "/content/experience-fragments/capgretail/language-masters/en/site/product-recommendations/product-recommendations-women.html?wcmmode=disabled",
                success: function(data) {
                    $('.cmp-experiencefragment--product-recommendations').html($(data).find('.cmp-container').html()); 
                }
            });
            $.ajax({
                type: "GET", dataType : "html",
                url: "/content/experience-fragments/capgretail/language-masters/en/site/homepage-banner/homepage-banner-women.html?wcmmode=disabled",
                success: function(data) {
                    $('.cmp-experiencefragment--homepage-banner').html($(data).find('.cmp-container').html()); 
                }
            });
            $('#products-button .cmp-button__text').text('All Women Products');
        }

        setTimeout(function(){ 
			 $('#loading').hide();
        }, 1000);
    });
    


} else {
	$('#loading').hide();
}

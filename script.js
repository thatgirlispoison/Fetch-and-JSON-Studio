window.addEventListener('load', function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then( function(json) {
          const div = document.getElementById("container");
          for (let astronaut in json) {
            
            div.innerHTML += `
                <div class="astronaut" >
                    <div class="bio" >
                        <h3>${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[astronaut].hoursInSpace}</li>
                            <li>Active: ${json[astronaut].active}</li>
                            <li>Skills: ${json[astronaut].skills}</li>
                            
                        </ul>
                    
                    </div>
                    <img class="avatar" src=${json[astronaut].picture}>
                </div>
                 
            `
            
          }
        });
    });
});
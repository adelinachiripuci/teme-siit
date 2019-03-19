var elems = {};


function getWeatherElems() {
  var city = document.querySelector("#cityinput").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      elems= JSON.parse(this.responseText);
      drawWeatherNow();
    }
  };
  xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${city}`, true);
  xhttp.send();
};

function drawWeatherNow() {
  var city = document.querySelector("#cityinput").value;
  var str = "";

  str +=`
   <div id="weatherElemsContainer">
      <div id="icon">
        <img src="https://openweathermap.org/img/w/${elems.weather["0"].icon}.png"
      </div>
      <div class="weatherElems">
      Descriere : <span>${elems.weather["0"].description}</span>
      </div>
      <div class="weatherElems">
      Umiditate : <span>${elems.main.humidity}</span>
      </div>
      <div class="weatherElems">
      Presiune : <span>${elems.main.pressure}</span>
      </div>
      <div class="weatherElems">
      Temperatura curenta : <span>${elems.main.temp}</span>
      </div>
      <div class="weatherElems">
      Minima zilei : <span>${elems.main.temp_min}</span>
      </div>
      <div class="weatherElems">Maxima zilei: <span>${elems.main.temp_max}</span></div>
    </div>
    <div id="map">
    </div>
  </div>
  <div id="map">
    <iframe
      width="600"
      height="450"
      frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDg59vuN5gSrHSV2n-p1-hJQCcHTtufVUY
      &q=${city}" allowfullscreen>
    </iframe>
  </div>
  `
  document.querySelector("table").classList.add("hidden");
  document.querySelector("#weatherNow").innerHTML = str;
  document.querySelector("#weatherElemsContainer").style.height = "200px";
  document.querySelector("#weatherElemsContainer").style.width = "40%";

};

function getWeatherForecast() {
  var city = document.querySelector("#cityinput").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      elemsForecast= JSON.parse(this.responseText);
      drawWeatherForecast();
    }
  };
  xhttp.open("GET", `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${city}`, true);
  xhttp.send();
};

function drawWeatherForecast() {
  var emptytd = `<td></td>`
  var firstDay = `<td>${elemsForecast.list[0].dt_txt.slice(0,10)}</td>`;
  var tr = document.querySelectorAll("tr");
  for(var j =0; j<tr.length; j++) {
    tr[j].innerHTML = "";
  }

  if(elemsForecast.list[0].dt_txt.slice(11) == "03:00:00") {
    document.querySelector("thead tr").innerHTML += firstDay;
    document.querySelector("#zero").innerHTML += emptytd;
  } else if (elemsForecast.list[0].dt_txt.slice(11) == "06:00:00"){
    document.querySelector("thead tr").innerHTML += firstDay;
    document.querySelector("#zero").innerHTML += emptytd;
    document.querySelector("#three").innerHTML += emptytd;
  } else if (elemsForecast.list[0].dt_txt.slice(11) == "09:00:00") {
    document.querySelector("thead tr").innerHTML += firstDay;
    document.querySelector("#zero").innerHTML += emptytd;
    document.querySelector("#three").innerHTML += emptytd;
    document.querySelector("#six").innerHTML += emptytd;
  } else if (elemsForecast.list[0].dt_txt.slice(11) == "12:00:00") {
    document.querySelector("thead tr").innerHTML += firstDay;
    document.querySelector("#zero").innerHTML += emptytd;
    document.querySelector("#three").innerHTML += emptytd;
    document.querySelector("#six").innerHTML += emptytd;
    document.querySelector("#nine").innerHTML += emptytd;
  } else if (elemsForecast.list[0].dt_txt.slice(11) == "15:00:00") {
    document.querySelector("thead tr").innerHTML += firstDay;
    document.querySelector("#zero").innerHTML += emptytd;
    document.querySelector("#three").innerHTML += emptytd;
    document.querySelector("#six").innerHTML += emptytd;
    document.querySelector("#nine").innerHTML += emptytd;
    document.querySelector("#twelve").innerHTML += emptytd;
  } else if (elemsForecast.list[0].dt_txt.slice(11) == "18:00:00") {
    document.querySelector("thead tr").innerHTML += firstDay;
    document.querySelector("#zero").innerHTML += emptytd;
    document.querySelector("#three").innerHTML += emptytd;
    document.querySelector("#six").innerHTML += emptytd;
    document.querySelector("#nine").innerHTML += emptytd;
    document.querySelector("#twelve").innerHTML += emptytd;
    document.querySelector("#fifteen").innerHTML += emptytd;
  }else {
    document.querySelector("thead tr").innerHTML += firstDay;
    document.querySelector("#zero").innerHTML += emptytd;
    document.querySelector("#three").innerHTML += emptytd;
    document.querySelector("#six").innerHTML += emptytd;
    document.querySelector("#nine").innerHTML += emptytd;
    document.querySelector("#twelve").innerHTML += emptytd;
    document.querySelector("#fifteen").innerHTML += emptytd;
    document.querySelector("#eighteen").innerHTML += emptytd;
  }

  for(var i = 0; i < elemsForecast.list.length; i++) {

    var hour = `
    <td>
      <div class="hours">
        <div>
          <img src="https://openweathermap.org/img/w/${elemsForecast.list[i].weather["0"].icon}.png"
        </div>
        <div>
        Ora: ${elemsForecast.list[i].dt_txt.slice(11)}
        </div>
        <div>
         Temperatura: ${elemsForecast.list[i].main.temp}
        </div>
        <div>
          Descriere: ${elemsForecast.list[i].weather["0"].description}
        </div>
      </div>
    </td>
    `;

    if(elemsForecast.list[i].dt_txt.slice(11) == "00:00:00") {
      document.querySelector("#zero").innerHTML += hour;
      document.querySelector("thead tr").innerHTML +=
      `<td>${elemsForecast.list[i].dt_txt.slice(0,10)}</td>`;
    } else if (elemsForecast.list[i].dt_txt.slice(11) == "03:00:00") {
      document.querySelector("#three").innerHTML += hour;
    } else if(elemsForecast.list[i].dt_txt.slice(11) == "06:00:00") {
      document.querySelector("#six").innerHTML += hour;
    } else if(elemsForecast.list[i].dt_txt.slice(11) == "09:00:00") {
      document.querySelector("#nine").innerHTML += hour;
    } else if(elemsForecast.list[i].dt_txt.slice(11) == "12:00:00") {
      document.querySelector("#twelve").innerHTML += hour;
    } else if(elemsForecast.list[i].dt_txt.slice(11) == "15:00:00") {
      document.querySelector("#fifteen").innerHTML += hour;
    } else if(elemsForecast.list[i].dt_txt.slice(11) == "18:00:00") {
      document.querySelector("#eighteen").innerHTML += hour;
    } else if(elemsForecast.list[i].dt_txt.slice(11) == "21:00:00") {
      document.querySelector("#twenty_one").innerHTML += hour;
    }
  }
  document.querySelector("table").classList.remove("hidden");
};

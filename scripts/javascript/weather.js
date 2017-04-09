var app = angular.module('weather', []);
var appID = "&type=like&APPID=674c3cebca78f2bc01844c5d05ddb70c";
var url = "http://api.openweathermap.org/data/2.5/weather?q=toronto,ca&type=like&APPID=674c3cebca78f2bc01844c5d05ddb70c";
app.controller('weather-appController', function($scope, $http) {
  $scope.date = new Date();

  $http.get(url)
  .then(function(response) {
    $scope.location = response.data.name + ", " + response.data.sys.country;
    $scope.temperature = parseFloat(Math.round((response.data.main.temp + -273.15) * 100) / 100).toFixed(2) + " °C";
  });
/*
  function getCurrentWeather() {
    var xhr = new XMLHttpRequest();
    var jsonobj = "";

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
         jsonobj = JSON.parse(xhr.responseText);
         console.log(xhr.responseText);
      }
    };

    xhr.send();
  }*/
});

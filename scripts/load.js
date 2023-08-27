$(document).ready(function () {
  "use strict";
  var maxParticles = 20;
  var particleDiv = "<div class='particle-line'></div>";
  
  for(var i = 0; i < maxParticles; i++){
      $(".particles").append(particleDiv);
      var thisParticle = ($(".particles").children()[i]);
      $(thisParticle).css("animation-duration", Math.floor(Math.random() * 12) + 2 + "s");
      $(thisParticle).css("top", Math.floor(Math.random() * 1000) + 1 + "px");
  }   
});


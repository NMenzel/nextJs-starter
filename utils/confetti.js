

export function initCeleb() {
  var confetti_maxParticleCount = 150;
  var confetti_particleSpeed = 2;
  var confetti_startConfetti;
  var confetti_stopConfetti;
  var confetti_toggleConfetti;
  var confetti_removeConfetti;

   confetti_startConfetti = confetti_startConfettiInner;
   confetti_stopConfetti = confetti_stopConfettiInner;
   confetti_toggleConfetti = confetti_toggleConfettiInner;
   confetti_removeConfetti = confetti_removeConfettiInner;
   var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"];
   var streamingConfetti = false;
   var animationTimer = null;
   var particles = [];
   var waveAngle = 0;

   function confetti_resetParticle(particle, width, height) {
       particle.color = colors[(Math.random() * colors.length) | 0];
       particle.x = Math.random() * width;
       particle.y = Math.random() * height - height;
       particle.diameter = Math.random() * 10 + 5;
       particle.tilt = Math.random() * 10 - 10;
       particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
       particle.tiltAngle = 0;
       return particle;
   }

   function confetti_startConfettiInner() {
       var width = window.innerWidth;
       var height = window.innerHeight;
       window.requestAnimFrame = (function() {
           return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                  return window.setTimeout(callback, 16.6666667);
           };
       })();
       var canvas = document.getElementById("confetti-canvas");
       if (canvas === null) {
           canvas = document.createElement("canvas");
           canvas.setAttribute("id", "confetti-canvas");
           canvas.setAttribute("style", "display:block;z-index:2001;pointer-events:none;position:fixed;top:0;left:0;");
           document.body.appendChild(canvas);
           canvas.width = width;
           canvas.height = height;
           window.celeb = "Allthrive";
           window.addEventListener("resize", function() {
               canvas.width = window.innerWidth;
               canvas.height = window.innerHeight;
           }, true);
       }
       var context = canvas.getContext("2d");
       while (particles.length < confetti_maxParticleCount) particles.push(confetti_resetParticle({}, width, height));
       streamingConfetti = true;
       if (animationTimer === null) {
           (function confetti_runAnimation() {
               context.clearRect(0, 0, window.innerWidth, window.innerHeight);
               if (particles.length === 0) animationTimer = null;
               else {
                   confetti_updateParticles();
                   confetti_drawParticles(context);
                   animationTimer = requestAnimFrame(confetti_runAnimation);
               }
           })();
       }
   }

   function confetti_stopConfettiInner() {
       streamingConfetti = false;
   }

   function confetti_removeConfettiInner() {
       confetti_stopConfetti();
       particles = [];
   }

   function confetti_toggleConfettiInner() {
       if (streamingConfetti) confetti_stopConfettiInner();
       else confetti_startConfettiInner();
   }

   function confetti_drawParticles(context) {
       var particle;
       var x;
       for (var i = 0; i < particles.length; i++) {
           particle = particles[i];
           context.beginPath();
           context.lineWidth = particle.diameter;
           context.strokeStyle = particle.color;
           x = particle.x + particle.tilt;
           context.moveTo(x + particle.diameter / 2, particle.y);
           context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
           context.stroke();
       }
   }

   function confetti_updateParticles() {
       var width = window.innerWidth;
       var height = window.innerHeight;
       var particle;
       waveAngle += 0.01;
       for (var i = 0; i < particles.length; i++) {
           particle = particles[i];
           if (!streamingConfetti && particle.y < -15) particle.y = height + 100;
           else {
               particle.tiltAngle += particle.tiltAngleIncrement;
               particle.x += Math.sin(waveAngle);
               particle.y += (Math.cos(waveAngle) + particle.diameter + confetti_particleSpeed) * 0.5;
               particle.tilt = Math.sin(particle.tiltAngle) * 15;
           }
           if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
               if (streamingConfetti && particles.length <= confetti_maxParticleCount) confetti_resetParticle(particle, width, height);
               else {
                   particles.splice(i, 1);
                   i--;
               }
           }
       }
   }
   confetti_startConfetti();
   setTimeout(function () {
      confetti_stopConfetti();
    }, 3000); // stop confetti after 3 secs
};

export default initCeleb;

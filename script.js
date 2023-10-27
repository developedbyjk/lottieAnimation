let player = document.getElementById("firstLottie");

player.addEventListener("ready", () => {

LottieInteractivity.create({
    player: "#firstLottie",
    mode:"cursor",
     actions: [
         { 
             type: "click",
             forceFlag: false 
          } 
          ]
});

});
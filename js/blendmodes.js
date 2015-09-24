function blendmodes() {
   var container = document.querySelector('#blendmodes .container'),
       blendMode = document.getElementById('blendmodesblend'),
       color = document.getElementById('blendmodescolor');
   
   blendMode.addEventListener('click', function(e) {
     if (e.target != e.currentTarget){
       var value = e.target.textContent;
       container.style.backgroundBlendMode = value;  // change blendmode
       removeCurrentClasses(blendMode);
       e.target.classList.add('is--active');
     }
   });
   
   
   var removeCurrentClasses = function(parent){
       for (var i = 0; i < parent.children.length; i++){  
         parent.children[i].className = "";
       }
   }
   
   color.addEventListener('click', function(e){
     
     if(e.target != e.currentTarget) {
       var colorValue = e.target.textContent;
        removeCurrentClasses(color);
       e.target.className = "is--active";
       container.id = "c-" + colorValue;
     }
   })
}

function svgTabs() {
   var menuitems = document.querySelectorAll('#svgTabs li');
   function unselect() {
      for (var it=0; it < menuitems.length; it++) {
         menuitems[it].classList.remove('active');
      }
   }
   for (var it=0; it < menuitems.length; it++) {
      menuitems[it].addEventListener('click', function(e) {
         unselect();
         var li = e.target.parentNode.parentNode;
         li.classList.add('active');
         document.querySelector('#svgTabs .main-content').style.background = 
            li.getAttribute('data-bg-color');
      });
   }
}

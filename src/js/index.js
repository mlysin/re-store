var app = new Vue({
    el: '#Web_1920___home',
    data: {
        message: 'Hello Vue!',
        checkedNeeds: [],
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ],
        request: function (){
            console.log("request")
        },
        offer: function (){
            console.log("request")
        },
        toggleMenu: function () {
            var x = document.getElementById("myNavbar");
            if (x.className === "collapse navbar-collapse") {
              x.className = "navbar";
            } else {
              x.className = "collapse navbar-collapse";
            }
        }
    }
})
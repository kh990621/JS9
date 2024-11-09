document.addEventListener('DOMContentLoaded', function() {
    const pullDownButton = document.getElementById("lists");

    pullDownButton.addEventListener('mouseover', function() {
        pullDownButton.setAttribute("style", "background-color:blue")
    });

    pullDownButton.addEventListener('click', function() {
        pullDownButton.setAttribute("style", "background-color:green")
    });

    pullDownButton.addEventListener('mouseleave', function() {
        pullDownButton.removeAttribute("style", "background-color:red")
    });
});
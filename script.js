function toggleMenu() 
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("myModal");
    console.log("Modal:", modal);  // Debugging step

    // Get the button that opens the modal
    var btn = document.getElementById("openModal");
    console.log("Button:", btn);  // Debugging step

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    console.log("Close button:", span);  // Debugging step

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var URECAmodal = document.getElementById("URECAModal");
    console.log("Modal:", URECAmodal);  // Debugging step

    // Get the button that opens the modal
    var URECAbtn = document.getElementById("openURECA");
    console.log("Button:", URECAbtn);  // Debugging step

    // Get the <span> element that closes the modal
    var URECAspan = document.getElementsByClassName("closeURECA")[0];
    console.log("Close button:", URECAspan);  // Debugging step

    // When the user clicks the button, open the modal 
    URECAbtn.onclick = function() {
        URECAmodal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    URECAspan.onclick = function() {
        URECAmodal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == URECAmodal) {
            URECAmodal.style.display = "none";
        }
    }
});


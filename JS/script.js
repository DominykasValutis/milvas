var visited = sessionStorage.getItem('visited');
var myVar;

function myFunction() {
    document.body.style.backgroundColor = "#BD7D4F";
    myVar = setTimeout(showPage, 3000);
    document.getElementById("page").classList.add("animate-bottom");
}


function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
    document.body.style.backgroundColor = "#FFFFFF";
}

window.onload = function() {
    if (!('visited' in sessionStorage)) {
        myFunction();
        myVar = setTimeout(showPage, 3000);
        sessionStorage.setItem('visited', true);
    } else {
        showPage();
    }
}

document.getElementById('contact-btn').addEventListener("click", function() {
    document.getElementById('contact-card').style.height = '250px';
});

document.getElementById('close-btn').addEventListener("click", function(){
    document.getElementById('contact-card').style.height = '0';
});

document.querySelectorAll('.read-more').forEach(item => {
    item.addEventListener('click', function($event) {
        var element = $event.target.previousElementSibling;
        $(element).slideToggle(500);
        console.log($event);
        if ($event.target.innerText === 'Read more') {
            $event.target.innerText = 'Read less';
        } else {
            $event.target.innerText = 'Read more';
            $event.target.nextSibling.classList.remove('hide');
        }
    });

    item.addEventListener('mouseover', ($event) => {
        $event.target.nextSibling.classList.add('arrow-right');
        $event.target.nextSibling.classList.remove('arrow-right-no-margin');
    });

    item.addEventListener('mouseleave', ($event) => {
        $event.target.nextSibling.classList.add('arrow-right-no-margin');
        $event.target.nextSibling.classList.remove('arrow-right');
    });
});

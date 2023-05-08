// shrinking navbar

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.padding = "3px 120px";
        // document.getElementById("navbar").style.backgroundColor = "rgb(122, 122, 154)";
        document.getElementById("navbar").style.backgroundColor = "rgb(124, 189, 200)";
    }
    else {
        document.getElementById("navbar").style.padding = "10px 120px";
        // document.getElementById("navbar").style.backgroundColor = "rgb(122, 122, 154)";
        document.getElementById("navbar").style.backgroundColor = "rgba(124, 189, 200,0.9)";
}
}

// active class

function beActive(id) {
    switch (id) {
        case 1:
            document.getElementById("home_link").style.color = 'orange';
            document.getElementById("about_link").style.color = 'white';
            document.getElementById("package_link").style.color = 'white';
            document.getElementById("contact_link").style.color = 'white';
            break;

        case 2:
            document.getElementById("home_link").style.color = 'white';
            document.getElementById("about_link").style.color = 'orange';
            document.getElementById("package_link").style.color = 'white';
            document.getElementById("contact_link").style.color = 'white';
            break;

        case 3:
            document.getElementById("home_link").style.color = 'white';
            document.getElementById("about_link").style.color = 'white';
            document.getElementById("package_link").style.color = 'orange';
            document.getElementById("contact_link").style.color = 'white';
            break;

        case 4:
            document.getElementById("home_link").style.color = 'white';
            document.getElementById("about_link").style.color = 'white';
            document.getElementById("package_link").style.color = 'white';
            document.getElementById("contact_link").style.color = 'orange';
    }
}

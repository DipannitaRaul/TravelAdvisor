// active class

function beActive(id) {
    switch(id) {
        case 1:
            document.getElementById('home_link').style.color = 'orange';
            document.getElementById('about_link').style.color = 'white';
            document.getElementById('package_link').style.color = 'white';
            document.getElementById('gallery_link').style.color = 'white';
            document.getElementById('contact_link').style.color = 'white';
            break;

        case 2:
            document.getElementById('home_link').style.color = 'white';
            document.getElementById('about_link').style.color = 'orange';
            document.getElementById('package_link').style.color = 'white';
            document.getElementById('gallery_link').style.color = 'white';
            document.getElementById('contact_link').style.color = 'white';
            break;

        case 3:
            document.getElementById('home_link').style.color = 'white';
            document.getElementById('about_link').style.color = 'white';
            document.getElementById('package_link').style.color = 'orange';
            document.getElementById('gallery_link').style.color = 'white';
            document.getElementById('contact_link').style.color = 'white';
            break;

        case 4:
            document.getElementById('home_link').style.color = 'white';
            document.getElementById('about_link').style.color = 'white';
            document.getElementById('package_link').style.color = 'white';
            document.getElementById('gallery_link').style.color = 'orange';
            document.getElementById('contact_link').style.color = 'white';
            break;

        case 5:
            document.getElementById('home_link').style.color = 'white';
            document.getElementById('about_link').style.color = 'white';
            document.getElementById('package_link').style.color = 'white';
            document.getElementById('gallery_link').style.color = 'white';
            document.getElementById('contact_link').style.color = 'orange';
            break;
    }
}

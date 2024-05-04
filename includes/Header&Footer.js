document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the header content
    var headerContainer = document.getElementById("header-container");

    var headerXhr = new XMLHttpRequest();
    headerXhr.onreadystatechange = function () {
        if (headerXhr.readyState === 4 && headerXhr.status === 200) {
            headerContainer.innerHTML = headerXhr.responseText;
        }
    };

    headerXhr.open("GET", "Header.html", true); // Adjust the path here
    headerXhr.send();

    // Fetch and insert the footer content
    var footerContainer = document.getElementById("footer-container");

    var footerXhr = new XMLHttpRequest();
    footerXhr.onreadystatechange = function () {
        if (footerXhr.readyState === 4 && footerXhr.status === 200) {
            footerContainer.innerHTML = footerXhr.responseText;
        }
    };

    footerXhr.open("GET", "Footer.html", true); // Adjust the path here
    footerXhr.send();
});

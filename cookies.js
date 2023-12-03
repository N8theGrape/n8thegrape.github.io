function getCookie(name) {
    var cookies = document.cookie.split(';');
    
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
      
        // Check if the cookie starts with the specified name
        if (cookie.indexOf(name + '=') === 0) {
            // Extract and return the value
            return cookie.substring(name.length + 1);
        }
    }
    
    // Return null if the cookie is not found
    return null;
}

function setCookie(name, value, days) {
    var expires = '';

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + value + expires + '; path=/';
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
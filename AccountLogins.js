 
function getLogins() {
    return logins;
}

function checkLogin(username, password) {
    for (var accountIndex = 0; accountIndex < logins.length; accountIndex++) {
        if (username == logins[accountIndex].username && [password] == logins[accountIndex].password) {
            return true;
        }
    }
    return false;
}

function getUserId(username) {
    for (var accountIndex = 0; accountIndex < logins.length; accountIndex++) {
        if (username == logins[accountIndex].username) {
            return logins[accountIndex].id;
        }
    }
    return false;
}

function getUserName(username) {
    for (var accountIndex = 0; accountIndex < logins.length; accountIndex++) {
        if (username == logins[accountIndex].username) {
            return logins[accountIndex].name;
        }
    }
    return false;
}

function getUserLevel(username) {
    for (var accountIndex = 0; accountIndex < logins.length; accountIndex++) {
        if (username == logins[accountIndex].username) {
            return logins[accountIndex].level;
        }
    }
    return false;
}
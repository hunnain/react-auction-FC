
import Cookie from 'universal-cookie';

export function isAuthenticated() {
    var isAuthenticated = false;

    var cookie = new Cookie();
    var userCookie = cookie.get("user");
    if (userCookie) {
        var accessToken = userCookie.accessToken;
        if (accessToken)
            isAuthenticated = true;
    }

    return isAuthenticated;
}

export function deleteUserCookie() {

    var cookie = new Cookie();
    var userCookie = cookie.remove("user");
}

export function getUserCookie() {
    var cookie = new Cookie();
    var userCookie = cookie.get("user");
    if (!userCookie) {
        userCookie = {};
    }

    return userCookie;
}

export function redirectToLogin() {
    window.location.href = "/#/login";
}

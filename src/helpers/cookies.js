export function GetCookie(name) {
    name = `${name}=`;
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
}

export function SetCookie(name, value, expiry) {
    let expires = expiry === undefined ? '' : `expires=${new Date(expiry).toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

export function DeleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
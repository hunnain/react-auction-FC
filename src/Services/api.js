import { getUserCookie, redirectToLogin, deleteUserCookie } from "../helpers/AuthHelper";

export async function GetAsyncRaw(
    baseUrl,
    authorize = true
) {
    let headers = {
        Accept: "application/json",
    };
    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: "GET",
            headers: headers,
        }).then((res) => {
            if (res.status === 401) {
                deleteUserCookie();
                redirectToLogin();
            }
            return res;
        });
    } catch (error) {

        console.error(error);
    }
}

export async function GetAsync(
    baseUrl,
    authorize = true
) {
    let headers = {
        Accept: "application/json",
    };
    if (authorize) {
        let accessToken = await validateAccessToken();
        console.log('accessToken', accessToken);

        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: "GET",
            headers: headers,
        }).then((res) => {
            if (res.status === 401) {
                deleteUserCookie();
                redirectToLogin();
            }
            return res.json();
        });
    } catch (error) {
        console.error(error);
    }
}
export async function GetAsyncBody(

    baseUrl,
    authorize = true,
    body
) {
    let headers = {
        Accept: "application/json",
    };
    if (authorize) {
        let accessToken = await validateAccessToken();
        console.log('accessToken', accessToken);

        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: "GET",
            headers: headers,
            body: JSON.stringify(body),
        }).then((res) => {
            if (res.status === 401) {
                deleteUserCookie();
                redirectToLogin();
            }
            return res.json();
        });
    } catch (error) {
        console.error(error);
    }
}

export async function DeleteAsync(
    baseUrl,
    authorize = true
) {
    let headers = {};

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: "DELETE",
            headers: headers,
            // }).then((res) => res.json());
        }).then((res) => {
            if (res.status === 401) {
                deleteUserCookie();
                redirectToLogin();
            }
            return res;
        });
    } catch (error) {
        return console.error(error);
    }
}

export async function PostAsync(
    baseUrl,
    body,
    authorize = true
) {
    let headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": 'http://localhost:3000',
        "Access-Control-Allow-Credentials": 'true'
    };

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        }).then((res) => {
            if (res.status === 401) {
                deleteUserCookie();
                redirectToLogin();
            }
            return res;
        });

        // }).then((res) => res.json());
    } catch (error) {
        console.error(error);
    }
}

export async function PutAsync(
    baseUrl,
    body,
    authorize = true
) {
    let headers = {
        "Content-Type": "application/json",
    };

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(body),
        }).then((res) => {
            if (res.status === 401) {
                deleteUserCookie();
                redirectToLogin();
            }
            return res;
        });
        // }).then((res) => res.json());
    } catch (error) {
        console.error(error);
    }
}

export async function PutWithFormDataAsync(
    baseUrl,
    formData,
    authorize = true
) {
    let headers = {};

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: "PUT",
            body: formData,
            headers: headers,
        }).then((res) => {
            if (res.status === 401) {
                deleteUserCookie();
                redirectToLogin();
            }
            return res.json();
        });
    } catch (error) {
        console.error(error);
    }
}

export async function PostWithFormDataAsync(
    baseUrl,
    formData,
    authorize = true
) {
    let headers = {
    };

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: "POST",
            body: formData,
            headers: headers,
        }).then((res) => {
            if (res.status === 401) {
                deleteUserCookie();
                redirectToLogin();
            }
            return res.json();
        });
    } catch (error) {
        console.error(error);
    }
}

async function validateAccessToken() {
    // return accessToken if not expired
    var userCookie = getUserCookie();
    var accessToken = userCookie.accessToken;
    if (!accessToken) {
        window.location.href = "/login";
    }

    return accessToken;

    // get refresh token
    // let refreshToken = GetCookie("refreshToken");
    // console.log("redres", refreshToken);

    // if (refreshToken !== undefined) {
    //     // renew access token
    //     let res = await RefreshAsync(refreshToken);
    //     if (res.status) {
    //         SetCookie("accessToken", res.data.accessToken, res.data.expiresIn);
    //         SetCookie("refreshToken", res.data.refreshToken);
    //         return res.data.accessToken;
    //     }
    // }

}

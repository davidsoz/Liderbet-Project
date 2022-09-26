const API_URL = process.env.REACT_APP_API_URL;

export async function getData() {
    let res = await fetch(API_URL + '?app=test');
    res = await res.json();
    return res;
}

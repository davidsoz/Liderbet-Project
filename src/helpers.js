export function calculateDiscountedPrice(price, percent) {
    return price - price * percent / 100;
}

export function buildDateTime(dateString) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let res = '';
    let date = new Date(dateString);
    res += date.getDate();
    res += ` ${months[date.getMonth()]}.`;
    res += ' ' + date.toTimeString().slice(0, 5);
    return res;
}
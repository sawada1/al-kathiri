export const favArr = () => {
    return useState(() => JSON.parse(sessionStorage.getItem('thefav') == null ? null : sessionStorage.getItem('thefav')));
}
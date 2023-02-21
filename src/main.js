const query = {
    year: document.querySelector(".year"),
}
  
window.onscroll = function() {
    scrollFunction();
};
    
window.onload = function() {
    copyright();
};

function scrollFunction() {
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? query.scrollBtn.style.display = "block" : query.scrollBtn.style.display = "none";
};
    
function copyright() {
    const date = new Date();
    const currYear = date.getFullYear();
    const str = `${currYear}`;
    query.year.innerText = str;
};
    
// function delay(url) {
//     setTimeout(function() {
//         window.open(url, "_blank") = url;
//     }, 1000);
// };
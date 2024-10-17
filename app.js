const history = document.querySelector("#history-app").shadowRoot.querySelector("#history");
let i = 0;

setInterval(async ()=>{
    let currentFrb = history.shadowRoot.querySelector(`#frb${i}`);
    if(!currentFrb) {
        clearInterval(this);
        return;
    }
    console.log(i);
    let checkbox = currentFrb.shadowRoot.querySelector("#checkbox")
    if (!checkbox) {
        clearInterval(this);
        return;
    }
    await checkbox.click();
    await currentFrb.scrollIntoView();
    i++;
}, 1);

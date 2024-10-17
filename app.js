// For Chrome

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

// For Edge
setInterval(async()=>{
    let option = document.querySelector("[role='option']");
    if(!option) {
        clearInterval(this);
        return;
    }
    option.querySelector("button").click();
}, 1);

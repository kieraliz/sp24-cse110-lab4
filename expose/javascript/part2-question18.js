function getCurrent(d) {
    let time = d.toLocaleDateString();
    console.log(time);
}

let d = new Date();
const interval = setInterval(getCurrent, 1000, d);
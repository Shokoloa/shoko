function consoleMessage() {
    let time = performance.timing;
    let pageloadtime = time.loadEventStart - time.navigationStart;

    console.log("Loaded in " + pageloadtime + "ms")
}

window.addEventListener('load', consoleMessage);

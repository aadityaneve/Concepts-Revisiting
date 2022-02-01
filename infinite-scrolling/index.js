let infiniteScrollDiv = document.getElementById('infiniteScrollDiv');

infiniteScrollDiv.addEventListener('scroll', () => {
    if (
        infiniteScrollDiv.scrollTop + infiniteScrollDiv.clientHeight >=
        infiniteScrollDiv.scrollHeight
    ) {
        addItems();
    }

    // console.log(window.scrollY);
    // console.log(infiniteScrollDiv.getBoundingClientRect());
    // console.log(infiniteScrollDiv.offsetHeight);
    // console.log(infiniteScrollDiv.clientHeight);
    // console.log(infiniteScrollDiv.scrollHeight);
    // console.log(infiniteScrollDiv.getClientRects());
});

let counter = 0;
function addItems() {
    for (let i = 0; i < 25; i++) {
        let h3 = document.createElement('h3');
        h3.innerText = `Masai Student ${++counter}`;
        infiniteScrollDiv.append(h3);
    }
}

addItems();

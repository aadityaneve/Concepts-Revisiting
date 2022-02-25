document.querySelector('#category').addEventListener('click', (e) => {
    // console.log(e.target.id);
    if (e.target.tagName === 'DIV') {
        window.location = `/${e.target.id}`;
    }
});

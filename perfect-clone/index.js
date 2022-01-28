(() => {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Client-ID a61cccb1bbe1c01');

    let formdata = new FormData();

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch(
        'https://api.imgur.com/3/gallery/hot/viral/1/month?showViral=true&mature=true&album_previews=true',
        requestOptions
    )
        .then((response) => response.json())
        .then((result) => {
            let data = result.data.filter((d) =>
                d.images?.[0]?.type ? d : null
            );
            displayCards(data);
        })
        .catch((error) => console.log('error', error));
})();

let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');

function displayCards(data) {
    // console.log(data);
    console.log(data);

    let cardsDiv = document.getElementById('cardsDiv');
    data.forEach((card, i) => {
        console.log('card:', card);
        let div = document.createElement('div');
        div.setAttribute(
            'style',
            `background: linear-gradient(
            165deg,
            rgb(105, 216, 202) 0%,
            rgb(53, 146, 255) 50%,
            rgb(156, 49, 255) 100%
        ); width: 220px; padding: 5px;`
        );

        let img = document.createElement('img');
        let video = document.createElement('video');
        let source = document.createElement('source');
        console.log('card.type:', card.images?.[0].type);
        if (card?.images[0]?.type == 'image/jpeg') {
            img.src = card.images?.[0]?.link;
            img.setAttribute('style', 'width: 220px');
        } else if (card?.images?.[0]?.type == 'image/png') {
            img.src = card.images?.[0]?.link;
            img.setAttribute('style', 'width: 220px');
        } else if (card?.images?.[0]?.type == 'video/mp4') {
            video.autoplay = true;
            video.muted = true;
            video.setAttribute('style', 'width: 220px;');
            source.setAttribute('type', 'video/mp4');
            source.src =
                card?.images?.[0] !== undefined
                    ? card.images?.[0].mp4
                    : card.link;

            video.append(source);
        } else if (card?.type == 'image/gif') {
            img.src = card.link;
            img.setAttribute('style', 'width: 220px');
        } else {
            img.src =
                'https://www.icegif.com/wp-content/uploads/please-no-icegif.gif';
        }

        let bottomDiv = document.createElement('div');
        bottomDiv.setAttribute(
            'style',
            'white-space: nowrap; overflow: hidden; textOverflow: ellipsis; textAlign: left; background-color: #474A51; padding: 10px;'
        );
        let h4 = document.createElement('h4');
        h4.innerText = card.title;

        let ratingPanel = document.createElement('div');
        ratingPanel.setAttribute(
            'style',
            'display: flex; justify-content: space-evenly; align-items: center;'
        );

        let ups = document.createElement('p');
        ups.innerHTML =
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path></svg>' +
            card.ups;
        let downs = document.createElement('p');
        downs.innerHTML =
            '<svg width="16" height="16" viewBox="0 0 16 16" class="Vote Vote-down" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Downvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M8.803 13.476a1.2 1.2 0 01-1.606 0 53.03 53.03 0 01-2.364-2.243 29.613 29.613 0 01-2.422-2.722c-.339-.435-.025-1.028.526-1.028h2.397V3.336c0-.524.306-.982.823-1.064A11.874 11.874 0 018 2.15c.829 0 1.427.056 1.843.122.517.082.824.54.824 1.064v4.147h2.396c.552 0 .865.593.527 1.028-.52.669-1.32 1.62-2.423 2.722a53.038 53.038 0 01-2.364 2.243z"></path></svg>' +
            card.downs;
        let views = document.createElement('p');
        views.innerHTML =
            '<svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg>' +
            card.views;

        ratingPanel.append(ups, downs, views);

        bottomDiv.append(h4, ratingPanel);

        div.append(img.src ? img : video, bottomDiv);
        if (i % 4 === 0) {
            div1.append(div);
        } else if (i % 4 === 1) {
            div2.append(div);
        } else if (i % 4 === 2) {
            div3.append(div);
        } else if (i % 4 === 3) {
            div4.append(div);
        }
        // cardsDiv.append(div);
    });
}

/* (() => {
    fetch(
        'https://api.giphy.com/v1/gifs/trending?api_key=31npqsdDAvtOaEqJlqtmZLb3ihK5nCgC&limit=300&rating=g'
    )
        .then((response) => response.json())
        .then((result) => {
            console.log('result.data:', result.data);
            displayCards(result.data);
        })
        .catch((error) => console.log('error', error));
})();

function displayCards(data) {
    let cardsDiv = document.getElementById('cardsDiv');
    data.forEach((element) => {
        let div = document.createElement('div');
        div.setAttribute(
            'style',
            `background: linear-gradient(
            165deg,
            rgb(105, 216, 202) 0%,
            rgb(53, 146, 255) 50%,
            rgb(156, 49, 255) 100%
        )`
        );

        let video = document.createElement('video');
        video.setAttribute('autoplay', 'true');
        video.setAttribute('autoplay', 'true');
        video.setAttribute('style', 'width: 180px;');

        let source = document.createElement('source');
        source.setAttribute('type', 'video/mp4');
        source.src = element?.images?.original_mp4?.mp4;

        let bottomDiv = document.createElement('div');
        bottomDiv.setAttribute(
            'style',
            'overflow: hidden; textOverflow: ellipsis; textAlign: left;'
        );
        let h4 = document.createElement('h4');
        h4.innerText = element.title;

        bottomDiv.append(h4);

        video.append(source);
        div.append(video, bottomDiv);
        cardsDiv.append(div);
    });
}
 */

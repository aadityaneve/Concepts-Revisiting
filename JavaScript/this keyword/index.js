/* 

    What is this keyword ? 
        this references the object that is executing the 
        current function.

        => this refers to current object.

        method > obj
        function > global obj

*/

/* const video = {
    title: 'Funny Video',
    play: function () {
        console.log(this);
    },
}; */

/* video.stop = function () {
    console.log(this);
}; */

// video.play();
// video.stop();

/* function playVideo() {
    console.log(this);
}
playVideo(); */

/* function Video(title) {
    this.title = title;
    console.log(this);
}

var v = new Video('abc');
 */

const video = {
    title: 'Funny Video',
    tags: ['a', 'b', 'c'],
    showTags: function () {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    },
};
video.showTags();

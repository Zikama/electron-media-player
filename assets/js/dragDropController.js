class DragAndDropController {

    constructor(initVideo) {
        this.initVideo = initVideo;
        this.files = [];
    }

    //let's put A drag and drop posibility
    allow(e) {
        e.preventDefault();
        e.dataTransfer.files;
    }

    drop(e) {
        e.preventDefault();
        const data = e.dataTransfer.files;
        this.files.push(...data);
        // mainPlayList.innerHTML = "";

        //Drag multiple files using a for loop condition
        for (var i = 0; i < this.files.length; i++) {
            this.filesDroped(i);
        }
        this.files = [];

    }


    // Track the dropped files and add them to the list
    filesDroped(i) {
        // Let' store data in object
        const playList = {
            alt: `${this.files[i].name}`,
            type: `${this.files[i].type}`,
            url: `${this.files[i].path}`,
            list: `<li art-data-src="${this.files[i].path}" art-data-type="${this.files[i].type}" class="art-playlist">${this.files[i].name}</li>`
        };

        /* //Get a video Thumbnail
        let no_video = gA(".img");
        for (let i = 0; i < no_video.length; i++) {
            no_video[i].currentTime = 3;
        } */

        let mainPlayList = g("#playlist");
        mainPlayList.innerHTML += playList.list;

        let allDroppedFiles = gA('.art-playlist');
        for (const dropedFile of allDroppedFiles) {
            dropedFile.addEventListener('click', e => {
                e.preventDefault();

                let displ = e.target;
                // Initializer - Play First Song 
                this.initVideo(displ);

            });
        }

        /* 
                let lb = g("#extender");
                lb.innerHTML = store.type;
                const mainC = g(".box-co");
                const plac = create("a");
                plac.id = "displ";
                plac.classList.add("box-I");
                plac.classList.add("displ");
                plac.href = `${store.url}`;
                //Home
                // let poster = "C:\\Users\\NEMIE\\Desktop\\app\\modern_portfolio-master\\dist\\img\\projects\\project5.jpg"  ;
                //office
                let poster = "https://www.nduccio.com/wp-content/uploads/2018/03/no_album.png";
                if (store.type != "mp3") {
                    plac.innerHTML += `<video class="img"src="${store.url}" poster="${poster}"></video><p class="p">${imgAlt}</p>`;
                } else {
                    plac.innerHTML += `<video class="img"src="${store.url}" ></video><p class="p">${imgAlt}</p>`;
                }
                append(mainC, plac);

                //Get a video Thumbnail
                let no_video = gA(".img");
                for (let i = 0; i < no_video.length; i++) {
                    no_video[i].currentTime = 3;
                }

                //
                let displs = gA(".displ");
                for (let displ of displs) {
                    displ.addEventListener("click", (e) => {
                        e.preventDefault();
                        //Initializer - Play First Song 
                        this.initVideo(displ);

                        g("#video").src = displ.href;
                        g("#stop").click();
                        if (g("#stop").click) {
                            setTimeout(() => {
                                g("#video").play();
                                player.className = "pause";
                            }, 500);
                        }
                    });
                } */

    }

}

module.exports = DragAndDropController;
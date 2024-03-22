/** Load the list of albums */
async function listAlbums() {
    try {
        const response = await fetch("/albums");
        const albums = await response.json();
        const albumsList = document.getElementById("albums_list");
        albumsList.innerHTML = "";
        albums.forEach(album => {
            const listItem = document.createElement("li");
            listItem.textContent = `${album.title} - ${album.artist}`;
            listItem.addEventListener("click", () => showAlbum(album.album_id));
            albumsList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching albums:", error);
    }
}

/** Show details of a given album */
async function showAlbum(album_id) {
    try {
        const response = await fetch(`/albuminfo/${album_id}`);
        const albumInfo = await response.json();
        const albumCover = document.getElementById("album_cover");
        albumCover.src = `/static/images/${albumInfo.cover_image}`;
        const albumSongs = document.getElementById("album_songs");
        albumSongs.innerHTML = "";
        albumInfo.tracks.forEach((track, index) => {
            const trackItem = document.createElement("div");
            trackItem.textContent = `${index + 1}. ${track.title} - ${track.duration}`;
            albumSongs.appendChild(trackItem);
        });
        const totalLength = document.getElementById("total_length");
        totalLength.textContent = `Total Length: ${albumInfo.total_length}`;
    } catch (error) {
        console.error("Error fetching album info:", error);
    }
}

// Call listAlbums() when the page is loaded
document.addEventListener("DOMContentLoaded", listAlbums);

// Fetch Playlist JSON and build bingo card
fetch('/spotify/playlists/classicMode')
    .then(response => response.json())
    .then(playlists => {
        // Display lists of playlist options for user to select
        const playlistSelectionContainer = document.getElementById('playlist-selection-container');
        playlists.forEach(playlist => {
            console.log(playlist.id)
            console.log(playlist.playlist_id)
            console.log(playlist.playlist_name)
            const playlistCell = document.createElement('div');
            playlistCell.id = [playlist.id, playlist.playlist_id];
            playlistCell.textContent = playlist.playlist_name;
            playlistSelectionContainer.appendChild(playlistCell);
        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
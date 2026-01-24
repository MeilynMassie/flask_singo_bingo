// Verify lobby code 
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop default submission
    const lobbyCodeInput = document.getElementById('lobby_code_input').value;
    const lobbyCode = document.getElementById('lobby_code').value;
    console.log(`Lobby Code: ${lobbyCode}, User Input: ${lobbyCodeInput}`);
    if (lobbyCode === lobbyCodeInput) {
        // if (true) {
        console.log('YAYAYYA YOURE IN');
        document.getElementById('joinLobbyContainer').hidden = true;
        document.getElementById('avatarSelectionContainer').hidden = false;
        const avatarDiv = document.getElementById('avatarSelection')
        // Fetches avatar images from server
        fetch('/db/GetAvatarImages')
            .then(response => response.json())
            .then(avatars => {
                avatars.forEach(avatar => {
                    console.log(avatar);
                    const imgElement = document.createElement('img');
                    console.log(`URL: ${avatar.filePath}`);
                    imgElement.src = avatar.filePath;
                    imgElement.id = avatar.id;
                    imgElement.className = 'avatarImage';
                    avatarDiv.appendChild(imgElement);
                });
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });
    }
});



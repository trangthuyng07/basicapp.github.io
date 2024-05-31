const accessToken = 'IGQWRNLWp5TlFPNUpOZAnBhM0tUZAGFDc2xXVXNFWGx2Qkg3SE9lSGJkZAlNkTHRuWW5HbHF6RDlDcXJUV2ZAPT2stZAXFPeG8xUWRHR0p5RmVGbWlKQ1FrZAkJJNEJjR1ljdmNsZAVUxaHNrLWd0bUkwMWxDaUlhWmRtdUEZD';

async function fetchInstagramFeed() {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`);
    const data = await response.json();
    return data.data;
}

// Function to display Instagram feed
async function displayInstagramFeed() {
    const instagramFeed = document.getElementById('instagram-feed');
    const feedData = await fetchInstagramFeed();
    
    feedData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <a href="${post.permalink}" target="_blank">
                <img src="${post.media_url}" alt="${post.caption}">
            </a>
        `;
        instagramFeed.appendChild(postElement);
    });
}

// Call the function to display Instagram feed when the page loads
displayInstagramFeed();

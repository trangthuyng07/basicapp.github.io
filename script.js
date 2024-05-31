document.addEventListener("DOMContentLoaded", () => {
    const accessToken = 'IGQWRNLWp5TlFPNUpOZAnBhM0tUZAGFDc2xXVXNFWGx2Qkg3SE9lSGJkZAlNkTHRuWW5HbHF6RDlDcXJUV2ZAPT2stZAXFPeG8xUWRHR0p5RmVGbWlKQ1FrZAkJJNEJjR1ljdmNsZAVUxaHNrLWd0bUkwMWxDaUlhWmRtdUEZD'; // Replace with your actual access token
    const userId = '2833150970182014'; // Replace with your actual user ID

    fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            data.data.forEach(item => {
                if (item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM') {
                    const imageContainer = document.createElement('div');
                    imageContainer.classList.add('image-container');
                    const img = document.createElement('img');
                    img.src = item.media_url;
                    imageContainer.appendChild(img);
                    gallery.appendChild(imageContainer);
                }
            });

            // Zoom Functionality
            gallery.addEventListener('wheel', function(event) {
                event.preventDefault();
                let scale = Number(gallery.style.transform.replace(/[^0-9.]/g, '')) || 1;
                if (event.deltaY > 0) {
                    scale -= 0.1;
                } else {
                    scale += 0.1;
                }
                gallery.style.transform = `scale(${scale})`;
            });
        })
        .catch(error => console.error('Error fetching Instagram data:', error));
});

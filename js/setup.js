window.onload = function() {
    document.getElementById('startInput').value = localStorage.getItem('startText') || '';
    document.getElementById('twistInput').value = localStorage.getItem('twistText') || '';
    document.getElementById('endInput').value = localStorage.getItem('endText') || '';

    document.getElementById('storyForm').onsubmit = function(event) {
        event.preventDefault();

        const startText = document.getElementById('startInput').value;
        const twistText = document.getElementById('twistInput').value;
        const endText = document.getElementById('endInput').value;

        localStorage.setItem('startText', startText);
        localStorage.setItem('twistText', twistText);
        localStorage.setItem('endText', endText);

        window.location.href = 'index.html';
    }
}

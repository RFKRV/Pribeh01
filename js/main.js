window.onload = function() {
    const startText = localStorage.getItem('startText') || '';
    const twistText = localStorage.getItem('twistText') || '';
    const endText = localStorage.getItem('endText') || '';

    document.getElementById('startText').innerText = startText;
    document.getElementById('twistText').innerText = twistText;
    document.getElementById('endText').innerText = endText;
}

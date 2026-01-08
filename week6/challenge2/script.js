const paragraphs = document.querySelectorAll('#main p');

// วนลูปเช็คทีละอัน
paragraphs.forEach(p => {
    if (p.textContent === 'Llamas and Chickens!') {
        p.style.color = 'red';
    }
});
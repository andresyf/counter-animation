function count(element, startAmount, endAmount, duration) {
    let startTimestamp;

    const step = timestamp => {
        if(!startTimestamp)
        startTimestamp = timestamp;

        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (endAmount - startAmount) + startAmount);

        if(progress < 1)
            window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

count(document.querySelector('#counter'), 20, 0, 15000);
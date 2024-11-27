function animateCounter(id, target, speed) {
    let counter = 0;
    const increment = Math.ceil(target / (speed / 10));
    const element = document.getElementById(id);

    const interval = setInterval(() => {
        counter += increment;
        if (counter >= target) {
            counter = target;
            clearInterval(interval);
        }
        element.textContent = counter.toLocaleString();
    }, 10);
}

animateCounter("counter1", 500, 1000); // 1000 means => 1 sec
animateCounter("counter2", 1000, 2000); // 2000 means => 2 sec
animateCounter("counter3", 7000, 3000); // 3000 means => 3 sec
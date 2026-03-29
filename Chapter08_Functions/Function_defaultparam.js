function retry(message, times = 3, delay = 1000) {
    console.log(message);
    console.log(times);
    console.log(delay);
}
retry("Retrying..."); // Output: Retrying..., 3, 1000
retry("Retrying...", 5); // Output: Retrying..., 5, 1000
retry("Retrying...", 5, 2000); // Output: Retrying..., 5, 2000
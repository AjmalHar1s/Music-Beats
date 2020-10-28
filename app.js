window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#7b18dd",
        "#f7278f",
        "#2ed1fa",
        "#3cf55b",
        "#f3e032",
        "#ff0404"
    ];

    //Adding Sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBalls(index);
        });
    });
    // function for colorful balls
    const createBalls = (index) => {
        const balls = document.createElement('div');
        visual.appendChild(balls);
        balls.style.backgroundColor = colors[index];
        balls.style.animation = "jump 1.5s ease";
        balls.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    };
});
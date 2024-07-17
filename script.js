document.addEventListener('DOMContentLoaded', function () {
    // Moveable element
    const moveMe = document.getElementById('move-me');
    let offsetX, offsetY;

    moveMe.addEventListener('mousedown', function (e) {
        e.preventDefault();
        offsetX = e.clientX - moveMe.getBoundingClientRect().left;
        offsetY = e.clientY - moveMe.getBoundingClientRect().top;

        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', dragElement);
        });
    });

    function dragElement(e) {
        e.preventDefault();
        moveMe.style.left = `${e.clientX - offsetX}px`;
        moveMe.style.top = `${e.clientY - offsetY}px`;
    }

    // Expanding box
    const expandingBox = document.getElementById('expanding-box');
    expandingBox.addEventListener('click', function () {
        this.classList.toggle('expanded');
    });
});

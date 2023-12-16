window.onload = () => {

    const canvas = document.getElementById('main');
    const ctx = canvas.getContext('2d');

    let brushColor = '#000000';
    let brushWidth = 5;
    let isEraserEnabled = false;

    let isMouseDown = false;
    let lastX;
    let lastY;

    // Listeners
    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mouseup', mouseUp);

    document.getElementById('pink').addEventListener('click', setPink);
    document.getElementById('blue').addEventListener('click', setBlue);
    document.getElementById('yellow').addEventListener('click', setYellow);
    document.getElementById('erase').addEventListener('click', enableEraser);
    document.getElementById('new').addEventListener('click', newCanvas);

    const slider = document.getElementById('slider');
    slider.addEventListener('input', changeSize);

    // Handlers
    function mouseDown(e) {
        isMouseDown = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    }

    function mouseUp() {
        isMouseDown = false;
    }

    function mouseMove(e) {
        if(isMouseDown) {
            drawLine(lastX, lastY, e.offsetX, e.offsetY);
            lastX = e.offsetX;
            lastY = e.offsetY;
        }
    }

    function setPink() {
        brushColor = '#F50057';
    }

    function setBlue() {
        brushColor = '#2979FF';
    }
    function setYellow() {
        brushColor = '#FFFF00';
    }

    function enableEraser() {
        isEraserEnabled = true;
        brushColor = '#FFFFFF';
    }

    function newCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function changeSize() {
        brushWidth = slider.value;
        document.getElementById('brushSize').textContent = brushWidth;
    }

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.strokeStyle = isEraserEnabled ? '#FFFFFF' : brushColor ;
        ctx.lineWidth = brushWidth;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

};
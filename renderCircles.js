function renderCircles(circles) {
    let htmlString = '';
    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        htmlString += `
            <div style="
                width: ${circle.radius * 2}px;
                height: ${circle.radius * 2}px;
                border-radius: ${circle.radius}px;
                background-color: ${circle.color}
            "></div>
        `
    }
    return `
        <div class="text-center mt-5">
            ${htmlString}
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    console.log(renderCircles)
    content.innerHTML = renderCircles(circlesAbstraction);

}
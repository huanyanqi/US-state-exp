document.addEventListener("DOMContentLoaded", function () {
    const svgObject = document.getElementById("svgmap");

    svgObject.onload = function () {
        const svgDocument = svgObject.contentDocument;


        for (const state in statePoints) {
            const statePath = svgDocument.getElementById(state);
            if (statePath) {

                // Add text label for each state
                var box = statePath.getBBox()
                var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
                t.setAttribute("transform", "translate(" + (box.x + box.width/2) + " " + (box.y + box.height/2) + ")");
                t.textContent = `${stateAbbrev[state]}`;
                t.setAttribute("font-size", "12");
                t.setAttribute("font-family", "Arial");
                t.setAttribute("unselectable", "on");
                statePath.parentNode.insertBefore(t, statePath.nextSibling);

                // Add click action to each state
                statePath.addEventListener("click", () => {
                    statePoints[state] = (statePoints[state] + 1) % 6;
                    updateTotalPoints();
                    updatePointStr();
                    updateColor();
                });
            };
        };
    };
});

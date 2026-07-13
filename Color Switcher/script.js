const colorInput = document.getElementById("colorInput");


const colorChecker = document.createElement("div");
colorChecker.style.display = "none";
document.body.appendChild(colorChecker);

function getRgb(colorName) {
    
    colorChecker.style.color = "transparent";
    colorChecker.style.color = colorName.trim();
    
  
    if (colorChecker.style.color === "transparent" || colorChecker.style.color === "") {
        return null;
    }
    
   
    document.body.appendChild(colorChecker);
    const computedColor = window.getComputedStyle(colorChecker).color;
    document.body.removeChild(colorChecker);
    
    const match = computedColor.match(/\d+/g);
    return match ? match.map(Number) : null;
}

colorInput.addEventListener("input", function () {
    const value = colorInput.value.trim().toLowerCase();
    
   
    if (value === "") {
        document.body.style.backgroundColor = "#f0f2f5";
        return;
    }

    
    const colors = value.split(/[\s+]+/);

    if (colors.length === 1) {
      
        const validColor = getRgb(colors[0]);
        if (validColor) {
            document.body.style.backgroundColor = colors[0];
        }
    } else if (colors.length >= 2) {
       
        const rgb1 = getRgb(colors[0]);
        const rgb2 = getRgb(colors[1]);

        if (rgb1 && rgb2) {
            
            const r = Math.floor((rgb1[0] + rgb2[0]) / 2);
            const g = Math.floor((rgb1[1] + rgb2[1]) / 2);
            const b = Math.floor((rgb1[2] + rgb2[2]) / 2);
            
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }
});
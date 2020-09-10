Array.from(document.getElementsByClassName('parallax')).forEach(function(container){

    if(container.dataset.zoom){
        var zoomfactor = container.dataset.zoom
    } else {
        var zoomfactor = 1.2
    }

    if(container.dataset.speed){
        var movespeed = container.dataset.speed * 0.001
    } else {
        var movespeed = 0.04
    }

    if(container.dataset.backgroundOffsetY){
        var bgrY = container.dataset.backgroundOffsetY
    } else {
        var bgrY = 0
    }

    if(container.dataset.backgroundOffsetX){
        var bgrX = container.dataset.backgroundOffsetX
    } else {
        var bgrX = 0
    }

    container.style.backgroundPositionX = - bgrX + 'px';
    container.style.backgroundPositionY = - bgrY + 'px';

    container.style.backgroundSize = window.innerWidth*zoomfactor + "px " +  window.innerHeight*zoomfactor + "px"
    window.onmousemove = function(e){
        var x = - (e.clientX) * movespeed,
            y = - (e.clientY) * movespeed;
        container.style.backgroundPositionX = (parseInt(x) - parseInt(bgrX)) + 'px';
        container.style.backgroundPositionY = (parseInt(y) - parseInt(bgrY)) + 'px';
    }
});
document.querySelector('.post-content_button-console').onclick = function() {showConsole()};
document.querySelector('.post-content_button-console2').onclick = function() {showConsole2()};
document.querySelector('.post-content_buttonx-console').onclick = function() {hideConsole()};
document.querySelector('.post-content_buttonx-console2').onclick = function() {hideConsole2()};

function showConsole() {
    var x = document.querySelector('.post-content_console');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function hideConsole() {
	var y = document.querySelector('.post-content_console');
	y.style.display = 'none';
}


function showConsole2() {
    var x = document.querySelector('.post-content_console2');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function hideConsole2() {
	var y = document.querySelector('.post-content_console2');
	y.style.display = 'none';
}


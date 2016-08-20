document.querySelector('.post-content_button-console').onclick = function() {showConsole()};
document.querySelector('.post-content_buttonx-console').onclick = function() {hideConsole()};

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
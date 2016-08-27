document.querySelector('.post-content_button-console').onclick = function() {showConsole()};
document.querySelector('.post-content_buttonx-console').onclick = function() {hideConsole()};

document.querySelector('.post-content_button-console2').onclick = function() {showConsole2()};
document.querySelector('.post-content_buttonx-console2').onclick = function() {hideConsole2()};

// document.querySelector('.post-content_button-consolee').onclick = function() {showConsolee()};
// document.querySelector('.post-content_buttonx-consolee').onclick = function() {hideConsolee()};

// Array.from(document.querySelectorAll('.post-content_button-console').onclick).forEach(function (x) {
//     showConsole();
  
// });

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

// function showConsolee() {
//     var x = document.querySelector('.post-content_consolee');
//     if (x.style.display === 'block') {
//         x.style.display = 'none';
//     } else {
//         x.style.display = 'block';
//     }
// }

// function hideConsolee() {
//     var y = document.querySelector('.post-content_consolee');
//     y.style.display = 'none';
// }


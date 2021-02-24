var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});



// switch btn

document.querySelector('.switch-btn').addEventListener('click', function() {
	document.querySelector('.btn--eng').classList.add('btn--active');
	document.querySelector('.btn--geo').classList.remove('btn--active');
});

document.querySelector('.btn--geo').addEventListener('click', function() {
	document.querySelector('.btn--geo').classList.add('btn--active');
	document.querySelector('.btn--eng').classList.remove('btn--active');
})




// multi language




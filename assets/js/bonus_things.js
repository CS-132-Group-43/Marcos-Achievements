const font_awesome = document.querySelectorAll('.fa');


function getClicked () {
  this.classList.add('fa-pulse');
}

function offClicked () {
  this.classList.remove('fa-pulse');
}

font_awesome.forEach(li => li.addEventListener('mouseover', getClicked));
font_awesome.forEach(li => li.addEventListener('mouseout', offClicked));
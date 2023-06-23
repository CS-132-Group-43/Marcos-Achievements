const font_awesome = document.querySelectorAll('.fa');
const unrollables = document.querySelectorAll('.unroll');

// this map is structured ["<element id>", ["<og text>", "<unrolled text>"]]
const unrollables_map = {
  "unroll-1" : ["1.47e-10", "(that's 0.000000000147, aka a lot of zeroes!)"],
  "unroll-2" : ["features", "(attributes or characteristics that will be useful in classifying our data)"],
  "unroll-3" : ["t-test", "(a statistical test to determine if there's a significant difference between two groups)"],
  "unroll-4" : ["How Disinformation about BBM's Academic Accomplishments Followed His Announcement of Candidacy", "(explained using terms that may be alienating to laypersons, so hover over text like this to see an explanation!)"],
  };

// Handling the pulsable font-awesomes

function getClicked () {
  this.classList.add('fa-pulse');
}

function offClicked () {
  this.classList.remove('fa-pulse');
}

font_awesome.forEach(li => li.addEventListener('mouseover', getClicked));
font_awesome.forEach(li => li.addEventListener('mouseout', offClicked));

// Handling the unrollables

function unroll () {
  this.innerText = unrollables_map[this.id][1];
}

function roll () {
  this.innerText = unrollables_map[this.id][0];
}

unrollables.forEach(li => li.addEventListener('mouseover', unroll));
unrollables.forEach(li => li.addEventListener('mouseout', roll));
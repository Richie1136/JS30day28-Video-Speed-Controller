const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

function GetPercent(e) {
  console.log(e)
  const y = e.pageY - this.offsetTop;
  console.log(y)
  const percent = y / this.offsetHeight * 100
  console.log(percent)
}

speed.addEventListener('mousemove', (GetPercent))
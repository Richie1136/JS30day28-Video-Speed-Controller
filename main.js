const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

function GetPercent(e) {
  console.log(e)
  const y = e.pageY - this.offsetTop;
  console.log(y)
  const percent = y / this.offsetHeight
  const min = 0.4
  const max = 4
  const height = Math.round(percent * 100) + "%"
  console.log(height)
  bar.style.height = height
}

speed.addEventListener('mousemove', (GetPercent))
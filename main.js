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
  const playbackRate = percent * (max - min) + min
  console.log(height)
  console.log(playbackRate)
  bar.style.height = height
  bar.textContent = `${playbackRate.toFixed(2)}x`
  video.playbackRate = playbackRate
}

speed.addEventListener('mousemove', (GetPercent))
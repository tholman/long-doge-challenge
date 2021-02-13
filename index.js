const wrapper = document.querySelector(".wrapper")
const neck = document.querySelector(".neck")
const wowEl = document.querySelector("#wows")

const largeWowContainer = document.querySelector("#largewowcontainer")
const rainbowWowContainer = document.querySelector('#rainbowwowcontainer')
const largewowEl = document.querySelector("#largeWows")
const lengthEl = document.querySelector("#length")
const rainbowsEl = document.querySelector("#rainbow")

let wows = 0
let largewows = 0
let rainbowwows = 0

document.querySelector(".print").addEventListener("click", () => {
  window.print()
})

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        injectNeck(entry)
      }
    })
  },
  { rootMargin: "0px 0px 200% 0px" }
)

document.addEventListener('click', onBodyClick)


window.onscroll = function(ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    const lastEl = document.querySelector(".neck:last-child")
    injectNeck({ target: lastEl })
  }
}

function injectNeck(entry) {
  // Stops observing the old neck element
  observer.unobserve(entry.target)

  const clonedNeck = neck.cloneNode(true)
  wrapper.appendChild(clonedNeck)
  observer.observe(clonedNeck)

  injectWow()
}

function injectWow() {
  wows++
  wowEl.innerText = wows

  const newWow = document.createElement("div")
  newWow.className = "textwow"
  newWow.innerText = "WOW"
  newWow.style.left = 100 + (Math.random() * (window.innerWidth - 300)) + "px"
  newWow.style.top = wrapper.offsetHeight - 200 + "px"
  document.body.appendChild(newWow)

  if (wows === 10) {
    lengthEl.innerText = "wow wow"
  }

  if (wows === 50) {
    lengthEl.innerText = "wow wow wow"
  }

  if (wows === 100) {
    lengthEl.innerText = "much wow"
  }

  if (wows === 150) {
    lengthEl.innerText = "long much wow"
  }

  if (wows === 250) {
    lengthEl.innerText = "very long much wow"
  }

  if (wows === 500) {
    lengthEl.innerText = "wow very long much wow"
  }

  if (wows === 1000) {
    lengthEl.innerText = "much wow very long much wow!"
  }

  if (wows === 2000) {
    lengthEl.innerText = "much wow very long much wow!!"
  }

  if (wows === 3000) {
    lengthEl.innerText = "much wow very long much wow!!!"
  }

  if (wows === 5000) {
    lengthEl.innerText = "!!much wow very long much wow!!"
  }

  if (wows === 30000) {
    lengthEl.innerText = "!!!!!!! dont forget to print !!!!!!"
  }

  if(wows > 100 && Math.random() > 0.995) {
    injectLargeWow()
  }
}

function injectLargeWow() {

  wows++
  largewows++
  largewowEl.innerText = largewows

  largeWowContainer.classList.remove('hidden')

  const newWow = document.createElement("div")
  newWow.className = "largewow"
  newWow.innerText = "WOW"
  newWow.style.left = '50%'
  newWow.style.top = wrapper.offsetHeight - 200 + "px"
  document.body.appendChild(newWow)
}

function onBodyClick(e) {
  if(e.target.classList.contains('textwow') ) {
    rainbowwows++
    e.target.classList.toggle('rainbow')
    rainbowwowcontainer.classList.remove('hidden')
    rainbowsEl.innerText = rainbowwows
  }
}

observer.observe(neck)

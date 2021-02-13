const wrapper = document.querySelector(".wrapper")
const neck = document.querySelector(".neck")
const wowEl = document.querySelector("#wows")
const lengthEl = document.querySelector("#length")

let wows = 0

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


window.onscroll = function(ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    const lastEl = document.querySelector(".neck:last-child")
    inject({ target: lastEl })
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
}

observer.observe(neck)

"use strict"

/**
 * Print message with current time in UTC format
 * 
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com>  
 * @param {string} msg - Message to print on console
 * @returns {void}
*/
const print = (msg) => {
  console.log(Date.now())
  console.log(msg)
}

/**
 * Remove class active from DOM element
 * 
 * @version 1.0.1
 * @author  Naldo Duran <naldorck@gmail.com>
 * @returns {void}
*/
const removeClassActiveFromKey = () => {
  const keys = document.querySelector(".keys").childNodes
  keys.forEach(key => {
    key.addEventListener("transitionend", (e) => {
      if(e.propertyName !== "transform") return
      key.classList.remove("playing")
    })
  })
}

/**
 * Catch the key pressed by the user and play a sound
 * 
 * @version 1.0.1
 * @author Naldo Duran <naldorck@gmail.com> 
 * @returns {void}
*/
const fnKeyDown = () => {
  document.addEventListener("keydown", (e) => {
    const keyCode = e.keyCode    
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    if(!audio) return
    audio.currentTime = 0 // Rewind to the start 
    audio.play()    
    key.classList.add("playing")
  })
}

/**
 * Init aplication
 * 
 * @version 1.0.1
 * @author Naldo duran <naldorck@gmail.com>
 * @returns {void}
*/
const init = () => {
  fnKeyDown()
  removeClassActiveFromKey() 
}

document.addEventListener("DOMContentLoaded", () => init())
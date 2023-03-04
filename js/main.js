// start scroll top and progressbar
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
document.addEventListener("scroll", () => {
    // start scroll top bar
    let scrollTop = document.documentElement.scrollTop;
    document.querySelector(".top-scroll").style.width = `${(scrollTop / height) * 100}%`;
    // start scroll top bar
});



// start go down
let down_button = document.querySelector(".landing .go-down");
down_button.onclick = function () { 
    document.documentElement.scrollTop = 750;
 } 
// end go down

// start statics section  and progress section
//first for static section
let spansNum = document.querySelectorAll(".box .number");
let staticsSection = document.querySelector(".statics");
let started = false; //function not started

//second progress section
let mySection = document.querySelector(".oursskill");
let allProgress = document.querySelectorAll(".progress-s span");
let allSkillNum = document.querySelectorAll(".skill h3 span");

window.onscroll = () => {
    //if scroll reach to static section
    if (window.scrollY >= staticsSection.offsetTop -100) {
        if (!started) {
            spansNum.forEach(span => counter(span));
        }
        started = true;
    }
    //if scroll reach to progress section
    if (window.scrollY >= mySection.offsetTop -150) {
        let progressWidth = [50, 85, 70, 80];
        allProgress.forEach((prog, index) => {
            prog.style.width = `${progressWidth[index]}%`;
            allSkillNum[index].innerHTML = `${progressWidth[index]}%`;
        });
    }
}

    function counter(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
                el.textContent++;
            if (el.textContent == goal) {
                    clearInterval(count);
                }
            }, 3000 /goal);
    }
    // end statics section and progress section


// start event count down
let targetDate = new Date("Dec 31, 2023 23:59:59").getTime();
let time = setInterval(() => {
    let dateNow = new Date().getTime();
    let diffrence = targetDate - dateNow;
    let days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffrence % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(diffrence % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(diffrence % (1000 * 60) / 1000);
    document.querySelector(".day").innerHTML = days;
    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = min;
    document.querySelector(".seconds").innerHTML = sec;
    if (diffrence < 0) {
        clearInterval(time);
    }
}, 1000);
// end event count down
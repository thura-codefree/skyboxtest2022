const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];
const mscss = document.getElementsByClassName("ms")[0];

let seconds = 0,
    minutes = 0,
    hours = 0,
    ms = 0;

const startTime = () => {
    ms += 1;

    if (ms === 1000) {
        ms = 0;
        seconds += 1;

        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }

        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
    }
    // if ထဲက ဝင်လာမယ့် တန်ဖိုးကို ရှေ့မှာ 0 ထားပေးပြီး ရလာတဲ့ တန်ဖိုးကို const နဲ့ variable ကြေငြာတယ်။
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
    const mstext = ms < 100 ? "0" + ms.toString() : ms;
    // သိမ်းထားတဲ့ variable တွေကို .textContent property နဲ့ html ထဲက ယူထားတဲ့ text ကိုသွားပြောင်းတယ်။
    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText; // html div တစ်ခုထဲက textရဲ့ property ကို js မှာ ပြောင်းချင်ရင် သုံးတယ်။
    mscss.textContent = mstext;
};
// let နဲ့ intervalId ကြေငြာရတာက setInterval buildin function ထဲ မှာ parameter တွေနဲ့ ရှုပ်နေလို့ အတိုကောက်ဖြစ်အောင် ကြေငြာတာ..
// let ကို အပြင်မှာ သီးသန့် ကြေငြာရတာက global scope ဖြစ်အောင် buildin function တွေအားလုံးက ယူသုံးလို့ရအောင်ကြေငြာတာ..
let intervalId;
startButtonTag.addEventListener("click", () => {
    intervalId = setInterval(startTime, 1);
});

pauseButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1);
});

restartButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
    (seconds = 0), (minutes = 0), (hours = 0);
    intervalId = setInterval(startTime, 1);
});
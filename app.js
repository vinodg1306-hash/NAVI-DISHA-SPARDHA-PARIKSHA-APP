
const welcome = "नवी दिशा स्पर्धा परीक्षा अभ्यास मंचमध्ये आपले स्वागत आहे. ध्येय मोठे ठेवा, तयारी त्याहून मोठी करा. शिका, समजून घ्या, सराव करा आणि आत्मविश्वासाने पुढे चला.";

const lesson = "आजच्या नमुना धड्यात आपण भारतीय राज्यघटनेच्या प्रस्तावनेविषयी शिकणार आहोत. प्रस्तावना संविधानाची उद्दिष्टे आणि मूल्ये स्पष्ट करते. न्याय, स्वातंत्र्य, समता आणि बंधुता ही तिची प्रमुख मूल्ये आहेत.";

const status = document.getElementById("audioStatus");
const rate = document.getElementById("rate");

function speak(text) {
  if (!("speechSynthesis" in window)) {
    if (status) status.textContent = "या ब्राउझरमध्ये आवाजात वाचन उपलब्ध नाही.";
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "mr-IN";
  utterance.rate = Number(rate?.value || 1);

  utterance.onstart = () => {
    if (status) status.textContent = "🔊 ऑडिओ सुरू आहे...";
  };

  utterance.onend = () => {
    if (status) status.textContent = "ऑडिओ पूर्ण झाला.";
  };

  utterance.onerror = () => {
    if (status) status.textContent = "आवाज सुरू झाला नाही. मोबाईलमधील Marathi Text-to-Speech तपासा.";
  };

  window.speechSynthesis.speak(utterance);
}

document.getElementById("welcomeAudio")?.addEventListener("click", () => speak(welcome));

document.getElementById("heroAudio")?.addEventListener("click", () => speak(welcome));

document.getElementById("lessonAudio")?.addEventListener("click", () => speak(lesson));

document.getElementById("pauseAudio")?.addEventListener("click", () => {
  window.speechSynthesis?.pause();
  if (status) status.textContent = "ऑडिओ थांबवला आहे.";
});

document.getElementById("stopAudio")?.addEventListener("click", () => {
  window.speechSynthesis?.cancel();
  if (status) status.textContent = "ऑडिओ बंद केला आहे.";
});

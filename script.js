const speach = new SpeechSynthesisUtterance();
const speakButton = document.getElementById("speak");
const stopButton = document.getElementById("stop");

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
	voices = window.speechSynthesis.getVoices();
	speach.voice = voices[0];

	voices.forEach(
		(voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
	);
};

voiceSelect.addEventListener("change", () => {
	speach.voice = voices[voiceSelect.value];
});

speakButton.addEventListener("click", () => {
	stopButton.style.display = "block";
	speakButton.style.display = "none";
	speach.text = document.querySelector("textarea").value;
	window.speechSynthesis.speak(speach);
});

speach.addEventListener("end", () => {
	stopButton.style.display = "none";
	speakButton.style.display = "block";
});

stopButton.addEventListener("click", () => {
	window.speechSynthesis.cancel();
    stopButton.style.display = "none";
		speakButton.style.display = "block";
});

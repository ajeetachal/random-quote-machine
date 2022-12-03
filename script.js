const quoteText= document.querySelector(".quote"),
quoteAuthor = document.querySelector(".name"),
quoteBtn = document.querySelector("button"),
speechBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
tweetBtn = document.querySelector(".twitter");

//function
function randomQuote(){
 quoteBtn.classList = "Loading";
 quoteBtn.innerText = "Loading Quote...";
 fetch("https://api.quotable.io/random").then(res =>res.json()).then(result =>{
 quoteText.innerText = result.content;
 quoteAuthor.innerText = result.author;
 quoteBtn.innerText = "New Quote";
 quoteBtn.classList.remove("Loading");
 });
}
speechBtn.addEventListener("click",()=>{
   let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`);
   speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",()=>{
   navigator.clipboard.writeText(quoteText.innerText);
});
tweetBtn.addEventListener("click",() =>{
 let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
 window.open(tweetUrl, "_top");
});


quoteBtn.addEventListener("click", randomQuote);

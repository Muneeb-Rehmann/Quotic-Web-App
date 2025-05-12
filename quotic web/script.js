const generateBtn = document.querySelector(".generate-btn");
const quoteBox = document.querySelector(".quote-box .quote");
const authorBox = document.querySelector(".quote-box .author");
const authorSelect = document.getElementById("author-select");

// Quotes
const quotes = [
  {
    text: `"I don't love you with my heart and mind. I love you with my soul in case my mind forgets and my heart stops."`,
    author: "~ Unknown",
    id: "unknown",
  },
  {
    text: `"When the world pushes you to your knees, you're in the perfect position to pray."`,
    author: "~ Rumi",
    id: "rumi",
  },
  {
    text: `"The person who loves walking will walk further than the person who loves the destination."`,
    author: "~ Unknown",
    id: "unknown",
  },
  {
    text: `"Two things ruins wisdom: Staying silent when you should speak, and speaking when you should be silent."`,
    author: "~ Persian Proverb",
    id: "persian",
  },
  {
    text: `"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."`,
    author: "~ Albert Einstein",
    id: "einstein",
  },
  {
    text: `"Kindness is a mark of faith and whoever is not kind has no faith."`,
    author: "~ Muhammad",
    id: "muhammad",
  },
  {
    text: `"When small men begin to cast big shadows, it means the sun is about to set."`,
    author: "~ Lin Yutang",
    id: "yutang",
  },
  {
    text: `"War is when your government tells you who your enemy is. Revolution is when you figure it out yourself."`,
    author: "~ Napoleon Bonaparte",
    id: "napoleon",
  },
  {
    text: `"Beautiful people aren't always good, but good people are always beautiful."`,
    author: "~ Imam Ali (A.S)",
    id: "imam",
  },
  {
    text: `"Sometimes we don't want to heal because the pain is the last connection to what we have lost."`,
    author: "~ Ibn Sina",
    id: "sina",
  },
];

function generateQuote() {
  const selectedAuthor = authorSelect.value;


  const filteredQuotes = selectedAuthor === "" || selectedAuthor === "author"
    ? quotes
    : quotes.filter(quote => quote.id === selectedAuthor);
    
  const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];

  quoteBox.textContent = '';
  authorBox.textContent = '';

  const characters = randomQuote.text.split('');
  let currentChar = 0;

  const typeChar = () => {
    if (currentChar < characters.length) {
      quoteBox.textContent += characters[currentChar];
      currentChar++;
      setTimeout(typeChar, 35);
    } else {
      authorBox.style.opacity = 0;
      setTimeout(() => {
        authorBox.textContent = randomQuote.author;
        authorBox.style.opacity = 1;
      }, 200);
    }
  };

  typeChar();
}

generateBtn.addEventListener("click", generateQuote);

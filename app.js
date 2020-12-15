const quotation = document.querySelector('.quotation');

const quotationArray = [
  "Nie widzimy rzeczy takimi, jakie są. Widzimy je takimi, jakimi my jesteśmy.",
  "Ludzie myślą czasem jak zabić czas, a to czas ich zabija.",
  "Tylko życie poświęcone innym warte jest przeżycia",
  "Życiowe wyzwania nie powinny Cię paraliżować. Powinny pomóc Ci odkryć, kim naprawdę jesteś.",
  "Różnica pomiędzy niemożliwym a możliwym leży w determinacji człowieka.",
  "Nigdy nie rezygnuj ze swoich marzeń tylko dlatego, że potrzeba czasu, by je zrealizować. Ten czas i tak upłynie.",
  "Miej odwagę żyć. Umrzeć potrafi każdy.",
  "Podróż tysiąca mil zaczyna się od jednego kroku.",
  "Sukces jest sumą małych wysiłków, powtarzanych dzień po dniu.",
  "Za rok będziesz żałować, że nie zacząłeś dzisiaj.",
  "Martw się, co inni ludzie o tobie myślą, a zawsze będziesz ich więźniem.",
  "Śmierć jest bardziej uniwersalna niż życie. Wszyscy umierają, nie wszyscy żyją.",
  "Jesteśmy uzależnieni od naszych myśli. Dopóki nie zmienimy naszego myślenia, nie będziemy w stanie zmienić czegokolwiek.",
  "Nie znając ani kierunku, ani celu podróży, nie dostaniesz biletu.",
  "Bądź wdzięczny za to, co masz, a będziesz miał tego więcej. Jeśli koncentrujesz się na tym, czego nie masz, nigdy nie będziesz miał wystarczająco dużo.",
  "Jest tylko jedno lekarstwo na duże kłopoty – małe radości.",
  "Podaruj temu, kogo kochasz skrzydła, by mógł latać, korzenie żeby wracał i powody aby został.",
  "Lepiej jest zapalić świecę, niż przeklinać ciemność.",
  "Czyń tylko to co podpowiada Ci serce.",
  "W życiu nie chodzi o czekanie aż burza minie. Chodzi o to, by nauczyć się tańczyć w deszczu."]
const authorArray = [
  "Anais Nin",
  "Alphonse Allais",
  "Albert Einstein",
  "Bernice Johnson Reagon",
  "Tommy Lasorda",
  "Earl Nightingale",
  "Robert Cody",
  "Lao Tzu",
  "Robert Collier",
  "Karen Lamb",
  "Lao Tzu",
  "Alan Sachs",
  "Santosh Kalwar",
  "Les Brown",
  "Oprah Winfrey",
  "Karl Heinrich Waggerl",
  "Dalai Lama",
  "Matka Teresa z Kalkuty",
  "Diana Spencer",
  "Vivian Green"]


// generating a quote
const generateButton = document.querySelector('.generate');

generateButton.addEventListener('click', () => {
  const randomQuote = Math.floor(Math.random() * 20);

  // typing effect
  let i = 0;
  const text = `${quotationArray[randomQuote]} - ${authorArray[randomQuote]}`;

  function typing() {
    if (i < text.length) {
      quotation.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50)
    }
  }

  typing();

  generateButton.style.display = 'none';
});
// }, { once: true }); - jeśli chcę pozwolić na wygenerowanie tylko raz na sesje, ale w tym przypadku nie potrzebuję, ponieważ chowam button generowania cytatu


// copyright popup
const copyright = document.querySelector('.copyright');
const popup = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');

copyright.addEventListener('click', () => {
  popup.style.display = 'block';
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

// popup.addEventListener('click', () => {
//   popup.style.display = 'none';
// }); 


const searchData = [
  {
    title: "Events",
    keywords: ["event", "events", "celebration", "Trunk", "Treat", "Red Rock Balloon", "Indian Ceremonial"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/cat/Event.html"
  },
  {
    title: "History of Gallup",
    keywords: ["history", "gallup history", "Ancestral Puebloans", "Trading Posts", "Inter-Tribal Indian Ceremonial"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/cat/History.html"
  },
  {
    title: "Public Library",
    keywords: ["library", "books", "Zollinger library", "Computer Lab", "Conference Room", "Study Rooms"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/Services/Library.html"
  },
  {
    title: "Educational Services",
    keywords: ["education", "school", "child care", "GMCS School", "High School", "Middle School", "Elementry School"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/Services/Education.html"
  },
  {
    title: "Transportation",
    keywords: ["transport", "bus", "travel", "airplane", "Gallup Express", "Navajo Transit", "GreyHound"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/Services/Transportation.html"
  },
  {
    title: "Contact Us",
    keywords: ["contact", "email", "phone", "address"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/#contact"
  },
  {
    title: "About Us",
    keywords: ["about", "community"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/#about"
  },
  {
    title: "Home",
    keywords: ["home", "welcome"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/#home"
  },
  {
    title: "Reference",
    keywords: ["reference", "Reference", "Cite"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/Ref/Reference.html"
  },
  {
    title: "Get Help",
    keywords: ["get help", "Police", "Help", "Lines", "help", "Urgent"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/Services/Get-Help.html"
  }
];


document.getElementById("searchBtn").addEventListener("click", handleSearch);
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") handleSearch();
});

function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  if (!query) return;

  const result = searchData.find(item =>
    item.title.toLowerCase().includes(query) ||
    item.keywords.some(keyword => keyword.includes(query))
  );

  if (result) {
    if (result.link.startsWith("#")) {
      const target = document.querySelector(result.link);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, 
          behavior: "smooth"
        });
      }
    }
    else {
      window.location.href = result.link;
    }
  } else {
    alert(`No results found for "${query}".`);
  }
}


const searchData = [
  {
    title: "Events",
    keywords: ["event", "events", "celebration", "Trunk", "Treat", "Red Rock Balloon", "Indian Ceremonial"],
    link: "https://gallup-new-mexico.vercel.app/cat/Event.html"
  },
  {
    title: "History of Gallup",
    keywords: ["history", "gallup history", "Ancestral Puebloans", "Trading Posts", "Inter-Tribal Indian Ceremonial"],
    link: "https://gallup-new-mexico.vercel.app/cat/History.html"
  },
  {
    title: "Public Library",
    keywords: ["library", "books", "Zollinger library", "Computer Lab", "Conference Room", "Study Rooms"],
    link: "https://gallup-new-mexico.vercel.app/Services/Library.html"
  },
  {
    title: "Educational Services",
    keywords: ["education", "school", "child care", "GMCS School", "High School", "Middle School", "Elementry School"],
    link: "https://gallup-new-mexico.vercel.app/Services/Education.html"
  },
  {
    title: "Transportation",
    keywords: ["transport", "bus", "travel", "airplane", "Gallup Express", "Navajo Transit", "GreyHound"],
    link: "https://gallup-new-mexico.vercel.app/Services/Transportation.html"
  },
  {
    title: "Contact Us",
    keywords: ["contact", "email", "phone", "address"],
    link: "https://gallup-new-mexico.vercel.app/index.html"
  },
  {
    title: "About Us",
    keywords: ["about", "community"],
    link: "https://gallup-new-mexico.vercel.app/index.html"
  },
  {
    title: "Home",
    keywords: ["home", "welcome"],
    link: "https://gallup-new-mexico.vercel.app/index.html"
  },
  {
    title: "Reference",
    keywords: ["reference", "Reference", "Cite"],
    link: "https://gallup-new-mexico.vercel.app/Ref/Reference.html"
  },
  {
    title: "Get Help",
    keywords: ["get help", "Police", "Help", "Lines", "help", "Urgent"],
    link: "https://gallup-new-mexico.vercel.app/Services/Get-Help.html"
  },
  {
    title: "Hotel",
    keywords: ["Hotel", "Gallup Hotel", "Hotels"],
    link: "https://gallup-new-mexico.vercel.app/home/Hotel.html"
  },
  {
    title: "Resturants",
    keywords: ["Resturants", "Dine in", "finest"],
    link: "https://gallup-new-mexico.vercel.app/home/G-rest.html"
  },
  {
    title: "Mall",
    keywords: ["Rio West Mall", "Mall", "Food Court", "Stores"],
    link: "https://gallup-new-mexico.vercel.app/home/Mall.html"
  },
  {
    title: "Walmart",
    keywords: ["Walmart", "Items", "Supercenter"],
    link: "https://gallup-new-mexico.vercel.app/home/Walmart.html"
  },
  {
    title: "Flea Market",
    keywords: ["Flea Market", "FleaMarket", "Flea", "Market", "dirt"],
    link: "https://gallup-new-mexico.vercel.app/home/flea.html"
  },
  {
    title: "Gas Stations",
    keywords: ["Gas", "Gas Stations", "Gas Station", "Shell", "Walmart Fuel"],
    link: "https://gallup-new-mexico.vercel.app/home/gas.html"
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


const cards = document.querySelectorAll('.card-home');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

function toggleNav(){
document.getElementById("sidebar").classList.toggle("active");
}

function toggleFolder(e,el){
e.preventDefault();
el.parentElement.classList.toggle("open");
}

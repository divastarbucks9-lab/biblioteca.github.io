// CATÁLOGO DE LA BIBLIOTECA CBTis 5
// Coloca la URL de la portada en "image".
// Si no tienes URL, deja image: "" y buscará en Google Books.

const books = [
  {
    title: "Fundamentos de Programación",
    author: "Luis Joyanes Aguilar",
    category: "tecnologia",
    area: "Programación Ofimática",
    image: "https://i.pinimg.com/736x/e4/33/d1/e433d1e17e4c3731792ed814692844f9.jpg"
  },
  {
    title: "Contabilidad Intermedia",
    author: "Donald E. Kieso, Jerry J. Weygandt y Terry D. Warfield",
    category: "humanidades",
    area: "Contabilidad",
    image: "https://i.pinimg.com/736x/8f/a7/60/8fa760fa65a0c52eda0d9bc679757bc0.jpg"
  },
  {
    title: "Maquinas Electricas y Transformadores",
    author: "irving. i. kosow",
    category: "tecnologia",
    area: "Electromecánica",
    image: "https://i.pinimg.com/736x/ca/4c/42/ca4c4245db86c971a4b86c6663542e7d.jpg"
  },
  {
    title: "Historia del Arte",
    author: "Ernst H. Gombrich",
    category: "humanidades",
    area: "Bellas Artes",
    image: "https://i.pinimg.com/1200x/97/08/7f/97087fa0b1761a3df60c76cf13a16ae9.jpg"
  },
  {
    title: "Fisiología del Ejercicio",
    author: "William D. McArdle, Frank I. Katch y Victor L. Katch",
    category: "ciencias",
    area: "Deportes",
    image: "https://i.pinimg.com/1200x/a2/d3/24/a2d32433167b4c925c0b6d80c6d48028.jpg"
  },
  {
    title: "Geografía General",
    author: "walter Alva",
    category: "humanidades",
    area: "Geografía",
    image: "https://i.pinimg.com/736x/9b/26/67/9b2667c89dfb6da7e1b5f2ca0f360051.jpg"
  },
  {
    title: "Enciclopedia Británica",
    author: "Encyclopædia Britannica",
    category: "humanidades",
    area: "Obras Generales",
    image: "https://i.pinimg.com/736x/04/8a/58/048a58a83aeb6f7c7f8c6b4ef2646615.jpg"
  },
  {
    title: "Ecología: Conceptos y Aplicaciones",
    author: "Manuel C. Molles",
    category: "ciencias",
    area: "C.P.T. Ecología",
    image: "https://i.pinimg.com/1200x/d7/e4/87/d7e487b1fe202d93dd1e67e54b5cf11a.jpg"
  },
  {
    title: "Ciencias de la Tierra: Una Introducción a la Geología Física",
    author: "Edward J. Tarbuck y Frederick K. Lutgens",
    category: "ciencias",
    area: "C.P.T. Ciencias de la Tierra",
    image: "https://images.cdn3.buscalibre.com/fit-in/360x360/bc/2b/bc2bc176ac172e0bc30324c9bd824954.jpg"
  },
  {
    title: "Oceanografía: Una Introducción a las Ciencias Marinas",
    author: "Tom Garrison",
    category: "ciencias",
    area: "C.P.T. Ciencias del Mar",
    image: "https://m.media-amazon.com/images/I/51K45g23srL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Química",
    author: "Raymond Chang y Kenneth Goldsby",
    category: "ciencias",
    area: "C.P.T. Química",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCydWaf3VgZNhxDzr_ulC20uJFZOQVJelhB3PKzyHZFw&s=10"
  },
  {
    title: "Derechos de los Creyentes",
    author: "José Luis Soberanes Fernández",
    category: "humanidades",
    area: "Civismo",
    image: "https://m.media-amazon.com/images/I/31JSIfMMSvL.jpg"
  },
  {
    title: "Guia de Campo de las Estrellas y los planetas de los hemisferios norte y sur",
    author: "Jay M. Pasachoff",
    category: "ciencias",
    area: "C.P.T. Astronomía",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplSyp4UK1ZtiqvHsQh7Bzprg7e786SVOGHag-CJX4Kg&s=10"
  },
  {
    title: "Biología",
    author: "Neil A. Campbell y Jane B. Reece",
    category: "ciencias",
    area: "C.P.T. Biología",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbD8rCWmyVE_wHcjwC8tHs6Oz2a26j9RMa2LepzRpEOI3_XMh_ZAsWFqQ&s=10"
  },
  {
    title: "Cómo se hace una tesis",
    author: "Umberto Eco",
    category: "humanidades",
    area: "Tesis",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEMes9WPH1rCT_BW6PvE18Qt011NZoxcFXTEQmhTzhA&s"
  },
  {
    title: "Historia Universal",
    author: "José Luis Romero",
    category: "humanidades",
    area: "Historia",
    image: "https://i0.wp.com/jlromero.com.ar/wp-content/uploads/2020/08/17300979881-1.jpg?fit=424%2C555&ssl=1"
  },
  {
    title: "Fundamentos de Enfermería",
    author: "Patricia A. Potter y Anne Griffin Perry",
    category: "ciencias",
    area: "C.P.T. Ciencias de la Salud",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXand4_zcGU_e3Gi1I-0KDN8xDD3fS8eLRVuoKTKGWA&s=10"
  },
  {
    title: "Física para Ciencias e Ingeniería",
    author: "Raymond A. Serway y John W. Jewett",
    category: "ciencias",
    area: "C.P.T. Física",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCb2pWAZlE3Uh4K2YJvBsOdo613XJQrvz5HNweKSQ1g&s=10"
  },
  {
    title: "Introducción a las Ciencias Aplicadas",
    author: "Varios autores, McGraw-Hill",
    category: "ciencias",
    area: "C.P.T. Varios",
    image: "https://http2.mlstatic.com/D_NQ_NP_680737-MLU70275597454_072023-O.webp"
  },
  {
    title: "Ciencia y Tecnología",
    author: "Paul G. Hewitt",
    category: "ciencias",
    area: "C.P.T. Ciencias Aplicadas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x3ueLUaB0N2xKUj8BBmPNyQ99yGLwtcbIBWRCz5RA&s=10"
  },
  {
    title: "Análisis Químico Cuantitativo",
    author: "Daniel C. Harris",
    category: "ciencias",
    area: "Laboratorista Químico",
    image: "https://imagessl9.casadellibro.com/a/l/s5/49/9788429172249.webp"
  },
  {
    title: "Guia de Secretariada Ejecutiva",
    author: "María Elena Pérez",
    category: "humanidades",
    area: "Secretariado Ejecutivo Bilingüe",
    image: "https://http2.mlstatic.com/D_NQ_NP_912733-MLM92688859305_092025-O.webp"
  },
  {
    title: "Gramática de la Lengua Española",
    author: "Emilio Alarcos Llorach",
    category: "humanidades",
    area: "Español",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjj6ul309CythQP1zdxFd3kn7i3VlYpEa05lhgxfclw&s=10"
  },
  {
    title: "Antología Poética",
    author: "Pablo Neruda",
    category: "literatura",
    area: "Poesía",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnz9_hQbV93cXi0NTIjCaESgMFauTiSia8BWcHs5PuOLjru9Dpgo3PrQ&s=10"
  },
  {
    title: "Los 7 Hábitos de la Gente Altamente Efectiva",
    author: "Stephen R. Covey",
    category: "literatura",
    area: "Superación Personal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVs718aP27tFIT_PcuIrPNGGqjonvNfYCZQ1yA788APg&s=10"
  },
  {
    title: "Diccionario de la Lengua Española",
    author: "Real Academia Española",
    category: "humanidades",
    area: "Diccionarios",
    image: "https://m.media-amazon.com/images/I/41FuOo0yRjL.jpg"
  },
  {
    title: "Pedagogía del Oprimido",
    author: "Paulo Freire",
    category: "humanidades",
    area: "Educación",
    image: "https://m.media-amazon.com/images/I/71LWSl4TowL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Ciencia, Tecnología y Sociedad",
    author: "Javier Echeverría",
    category: "ciencias",
    area: "Ciencias y Tecnología",
    image: "https://img.perlego.com/book-covers/4173014/9789878941639_300_450.webp"
  },
  {
    title: "Introducción a la Lógica",
    author: "Irving M. Copi",
    category: "humanidades",
    area: "Lógica",
    image: "https://m.media-amazon.com/images/I/51vuL00P32L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Metodología de la Investigación",
    author: "Roberto Hernández Sampieri",
    category: "humanidades",
    area: "Métodos de Investigación",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFx0gBfF9o7SeYbJtrTxNjwH1qHR9NbkPRYXkzdJCfiw&s"
  },
  {
    title: "Principios de Economía",
    author: "N. Gregory Mankiw",
    category: "humanidades",
    area: "Economía",
    image: "https://m.media-amazon.com/images/I/61iLEiN8pPL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Historia de las Religiones",
    author: "Mircea Eliade",
    category: "humanidades",
    area: "Religión",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJg_AmlbDlCUD2txrHYKoo05BYctTyYgijyJXkPNDirHcenT0yV11jic&s=10"
  },
  {
    title: "Ética para Amador",
    author: "Fernando Savater",
    category: "humanidades",
    area: "Ética",
    image: "https://m.media-amazon.com/images/I/618xfqN1+uL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Introducción a las Ciencias Sociales",
    author: "Anthony Giddens",
    category: "humanidades",
    area: "Ciencias Sociales",
    image: "https://m.media-amazon.com/images/I/71AuVf1LJsL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Historia de la Filosofía",
    author: "Julián Marías",
    category: "humanidades",
    area: "Filosofía",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmfiqF16smEMA4vC2bvUWbLuw8VhtdeLTiF0CropQf_-1rbsqGuYnVXhn&s=10"
  },
  {
    title: "Aprendizaje escolar y construccion del conocimiento",
    author: "César Coll",
    category: "humanidades",
    area: "Pedagogía",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD00rZkSjts08e7Ho5PlYT3M1j5hqzHvtYkVryCMzjkw&s=10"
  },
  {
    title: "English Grammar in Use",
    author: "Raymond Murphy",
    category: "literatura",
    area: "Inglés",
    image: "https://m.media-amazon.com/images/I/91DeEmIW63L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Cálculo",
    author: "James Stewart",
    category: "ciencias",
    area: "Matemáticas",
    image: "https://m.media-amazon.com/images/I/618HgMnjn-L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Biología",
    author: "Neil A. Campbell",
    category: "ciencias",
    area: "Biología",
    image: "https://m.media-amazon.com/images/I/91TnymBcfFL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Sociología",
    author: "Anthony Giddens",
    category: "humanidades",
    area: "Sociología",
    image: "https://m.media-amazon.com/images/I/71zbAZYC2TL.jpg"
  },
  {
    title: "Fundamentos de Ecología",
    author: "Eugene P. Odum",
    category: "ciencias",
    area: "Ecología",
    image: "https://m.media-amazon.com/images/I/71VMsdhcV9L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Introducción al Estudio del Derecho",
    author: "Eduardo García Máynez",
    category: "humanidades",
    area: "Derecho",
    image: "https://m.media-amazon.com/images/I/41CFzkek2dL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Física Conceptual",
    author: "Paul G. Hewitt",
    category: "ciencias",
    area: "Física",
    image: "https://etrillas.mx/imagenes/9789682/978968245298.JPG"
  },
  {
    title: "Química General",
    author: "Ralph H. Petrucci",
    category: "ciencias",
    area: "Química",
    image: "https://m.media-amazon.com/images/I/51Nl9XELgcL._AC_UF1000,1000_QL80_.jpg"
  }
];
const booksGrid = document.getElementById("booksGrid");
const searchInput = document.getElementById("bookSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const resultsCount = document.getElementById("resultsCount");

const coverCache = new Map();

let activeFilter = "all";
let searchTerm = "";

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Obtener portada
async function getCover(book) {

  if (book.image && book.image.trim() !== "") {
    return book.image.trim();
  }

  const key = `${book.title}|${book.author}`;

  if (coverCache.has(key)) {
    return coverCache.get(key);
  }

  const query = encodeURIComponent(
    `intitle:${book.title} inauthor:${book.author.split(" y ")[0]}`
  );

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`
    );

    if (!response.ok) {
      throw new Error("No se pudo consultar Google Books");
    }

    const data = await response.json();
    const items = data.items || [];

    const wantedTitle = normalize(book.title);
    const wantedAuthor = normalize(book.author.split(" y ")[0]);

    const ranked = items
      .filter(item => item.volumeInfo?.imageLinks)
      .map(item => {
        const info = item.volumeInfo;
        const title = normalize(info.title);
        const authors = normalize((info.authors || []).join(" "));

        return {
          item,
          score:
            (title.includes(wantedTitle) ? 3 : 0) +
            (authors.includes(wantedAuthor) ? 2 : 0)
        };
      })
      .sort((a, b) => b.score - a.score);

    const chosen = ranked[0]?.item;
    const links = chosen?.volumeInfo?.imageLinks;

    const url =
      links?.extraLarge ||
      links?.large ||
      links?.medium ||
      links?.thumbnail ||
      links?.smallThumbnail ||
      "";

    const secureUrl = url
      .replace(/^http:/, "https:")
      .replace("&edge=curl", "");

    coverCache.set(key, secureUrl);

    return secureUrl;

  } catch (error) {
    console.warn("Portada no disponible:", book.title, error);
    coverCache.set(key, "");
    return "";
  }
}

// Crear tarjeta de libro
function createBookCard(book) {

  const card = document.createElement("article");
  card.className = "book-card";

  const cover = document.createElement("div");
  cover.className = "book-cover";

  const image = document.createElement("img");
  image.alt = `Portada de ${book.title}`;
  image.loading = "lazy";
  image.decoding = "async";

  const placeholder = document.createElement("div");
  placeholder.className = "cover-placeholder";
  placeholder.textContent = `Portada no disponible
${book.title}`;

  cover.append(image, placeholder);

  const info = document.createElement("div");
  info.className = "book-info";

  const title = document.createElement("h3");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = book.author;

  const tag = document.createElement("span");
  tag.className = "book-tag";
  tag.textContent = book.area;

  const stockTag = document.createElement("span");
  stockTag.className = "book-stock";
  updateStockTag(stockTag, book);

  const loanButton = document.createElement("button");
  loanButton.type = "button";
  loanButton.className = "borrow-button";
  loanButton.addEventListener("click", () => borrowBook(book));
  updateBorrowButton(loanButton, book);

  info.append(title, author, tag, stockTag, loanButton);
  card.append(cover, info);

  getCover(book).then(url => {

    if (!url) return;

    image.onload = () => {
      cover.classList.add("has-image");
    };

    image.onerror = () => {
      cover.classList.remove("has-image");
      image.removeAttribute("src");
    };

    image.src = url;
  });

  return card;
}

// Mostrar libros
function renderBooks() {

  booksGrid.replaceChildren();

  const filtered = books.filter(book => {

    const matchesCategory =
      activeFilter === "all" ||
      book.category === activeFilter;

    const searchableText = normalize(
      `${book.title} ${book.author} ${book.area} ${book.category}`
    );

    return matchesCategory &&
      searchableText.includes(normalize(searchTerm));
  });

  resultsCount.textContent =
    `${filtered.length} ${
      filtered.length === 1
        ? "libro encontrado"
        : "libros encontrados"
    }`;

  if (filtered.length === 0) {

    const empty = document.createElement("p");
    empty.className = "no-books";
    empty.textContent = "No se encontraron libros con esa búsqueda.";

    booksGrid.appendChild(empty);
    return;
  }

  filtered.forEach(book => {
    booksGrid.appendChild(createBookCard(book));
  });
}

// Filtros
filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    activeFilter = button.dataset.filter;

    renderBooks();
  });
});

// Buscador
searchInput.addEventListener("input", () => {

  searchTerm = searchInput.value.trim();

  renderBooks();
});

// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú" : "Abrir menú"
  );
});

document.querySelectorAll("#navMenu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Encabezado y enlace activo al desplazarse
const header = document.getElementById("header");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  header.classList.toggle("scrolled", window.scrollY > 50);

  let current = "inicio";

  sections.forEach(section => {

    if (window.scrollY >= section.offsetTop - 130) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {

    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});


// ========================================
// INVENTARIO, PRÉSTAMOS Y DEVOLUCIONES
// ========================================

const STOCK_STORAGE_KEY = "cbtis5_inventory_v1";
const LOANS_STORAGE_KEY = "cbtis5_loans_v1";

const inventoryBody = document.getElementById("inventoryBody");
const inventorySearch = document.getElementById("inventorySearch");
const inventoryMessage = document.getElementById("inventoryMessage");
const loansBody = document.getElementById("loansBody");

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value === null ? fallback : value;
  } catch (error) {
    console.warn(`No se pudo leer ${key}.`, error);
    return fallback;
  }
}

let inventory = readStorage(STOCK_STORAGE_KEY, {});
let loans = readStorage(LOANS_STORAGE_KEY, []);

function getStock(book) {
  const value = Number(inventory[book.title]);
  return Number.isInteger(value) && value >= 0 ? value : 0;
}

function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`No se pudo guardar ${key}.`, error);
    showInventoryMessage("No se pudo guardar la información en este navegador.", true);
    return false;
  }
}

function saveInventory() {
  return saveData(STOCK_STORAGE_KEY, inventory);
}

function saveLoans() {
  return saveData(LOANS_STORAGE_KEY, loans);
}

function showInventoryMessage(message, isError = false) {
  if (!inventoryMessage) return;
  inventoryMessage.textContent = message;
  inventoryMessage.classList.toggle("error", isError);
}

function updateStockTag(element, book) {
  const quantity = getStock(book);
  element.textContent = quantity > 0
    ? `${quantity} disponible${quantity === 1 ? "" : "s"}`
    : "Sin existencias";
  element.classList.toggle("out-of-stock", quantity === 0);
}

function updateBorrowButton(button, book) {
  if (getStock(book) <= 0) {
    button.textContent = "No disponible";
    button.disabled = true;
    button.classList.add("borrow-disabled");
  } else {
    button.textContent = "Solicitar préstamo";
    button.disabled = false;
    button.classList.remove("borrow-disabled");
  }
}

function updateInventorySummary() {
  const totalCopies = books.reduce((sum, book) => sum + getStock(book), 0);
  const emptyTitles = books.filter(book => getStock(book) === 0).length;
  const activeLoans = loans.filter(loan => !loan.returned).length;

  document.getElementById("inventoryTitles").textContent = books.length;
  document.getElementById("inventoryCopies").textContent = totalCopies;
  document.getElementById("inventoryEmpty").textContent = emptyTitles;
  document.getElementById("activeLoansCount").textContent = activeLoans;
}

function renderInventory() {
  if (!inventoryBody) return;

  const term = normalize(inventorySearch?.value || "");
  const filteredBooks = books.filter(book =>
    normalize(`${book.title} ${book.author} ${book.area} ${book.category}`).includes(term)
  );

  inventoryBody.replaceChildren();

  if (filteredBooks.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.className = "inventory-empty-row";
    cell.textContent = "No se encontraron libros.";
    row.appendChild(cell);
    inventoryBody.appendChild(row);
  }

  filteredBooks.forEach(book => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    const titleStrong = document.createElement("strong");
    titleStrong.textContent = book.title;
    const authorSmall = document.createElement("small");
    authorSmall.textContent = book.author;
    titleCell.append(titleStrong, authorSmall);

    const areaCell = document.createElement("td");
    areaCell.textContent = book.area;

    const stockCell = document.createElement("td");
    const stockValue = document.createElement("span");
    stockValue.className = `stock-number${getStock(book) === 0 ? " zero" : ""}`;
    stockValue.textContent = getStock(book);
    stockCell.appendChild(stockValue);

    const actionsCell = document.createElement("td");
    actionsCell.className = "inventory-actions";

    const decreaseButton = document.createElement("button");
    decreaseButton.type = "button";
    decreaseButton.className = "stock-adjust";
    decreaseButton.textContent = "−";
    decreaseButton.setAttribute("aria-label", `Registrar salida de ${book.title}`);
    decreaseButton.disabled = getStock(book) === 0;
    decreaseButton.addEventListener("click", () => changeStock(book, -1));

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "0";
    quantityInput.step = "1";
    quantityInput.inputMode = "numeric";
    quantityInput.value = getStock(book);
    quantityInput.className = "stock-input";
    quantityInput.setAttribute("aria-label", `Cantidad de ${book.title}`);

    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.className = "stock-save";
    saveButton.textContent = "Guardar";
    saveButton.addEventListener("click", () => {
      const quantity = Number(quantityInput.value);
      if (!Number.isInteger(quantity) || quantity < 0) {
        showInventoryMessage("Ingresa una cantidad entera igual o mayor que cero.", true);
        quantityInput.focus();
        return;
      }
      inventory[book.title] = quantity;
      if (saveInventory()) {
        renderInventory();
        renderBooks();
        updateInventorySummary();
        showInventoryMessage(`Existencias de “${book.title}” actualizadas.`);
      }
    });

    const increaseButton = document.createElement("button");
    increaseButton.type = "button";
    increaseButton.className = "stock-adjust";
    increaseButton.textContent = "+";
    increaseButton.setAttribute("aria-label", `Registrar entrada de ${book.title}`);
    increaseButton.addEventListener("click", () => changeStock(book, 1));

    actionsCell.append(decreaseButton, quantityInput, saveButton, increaseButton);
    row.append(titleCell, areaCell, stockCell, actionsCell);
    inventoryBody.appendChild(row);
  });

  updateInventorySummary();
}

function changeStock(book, amount) {
  const nextValue = getStock(book) + amount;
  if (nextValue < 0) return;

  inventory[book.title] = nextValue;
  if (saveInventory()) {
    renderInventory();
    renderBooks();
    updateInventorySummary();
    showInventoryMessage(
      amount > 0
        ? `Se registró una entrada para “${book.title}”.`
        : `Se registró una salida para “${book.title}”.`
    );
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function borrowBook(book) {
  if (getStock(book) <= 0) {
    alert("Este libro no tiene ejemplares disponibles.");
    return;
  }

  const student = prompt("Escribe el nombre completo del estudiante:");
  if (!student || !student.trim()) return;

  const suggestedDate = new Date();
  suggestedDate.setDate(suggestedDate.getDate() + 7);
  const dueDate = prompt(
    "Fecha límite de devolución (AAAA-MM-DD):",
    formatDate(suggestedDate)
  );
  if (!dueDate) return;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate) || Number.isNaN(Date.parse(`${dueDate}T00:00:00`))) {
    alert("Escribe la fecha con el formato AAAA-MM-DD.");
    return;
  }

  const today = formatDate(new Date());
  loans.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    bookTitle: book.title,
    student: student.trim(),
    loanDate: today,
    dueDate,
    returned: false
  });

  inventory[book.title] = getStock(book) - 1;

  if (saveLoans() && saveInventory()) {
    renderBooks();
    renderInventory();
    renderLoans();
    showInventoryMessage(`Préstamo registrado: “${book.title}” para ${student.trim()}.`);
  }
}

function returnBook(loanId) {
  const loan = loans.find(item => item.id === loanId);
  if (!loan || loan.returned) return;

  loan.returned = true;
  const book = books.find(item => item.title === loan.bookTitle);
  if (book) {
    inventory[book.title] = getStock(book) + 1;
  }

  if (saveLoans() && saveInventory()) {
    renderBooks();
    renderInventory();
    renderLoans();
    showInventoryMessage(`Se registró la devolución de “${loan.bookTitle}”.`);
  }
}

function renderLoans() {
  if (!loansBody) return;

  loansBody.replaceChildren();
  const activeLoans = loans.filter(loan => !loan.returned);

  if (activeLoans.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.className = "inventory-empty-row";
    cell.textContent = "No hay préstamos activos.";
    row.appendChild(cell);
    loansBody.appendChild(row);
  }

  activeLoans.forEach(loan => {
    const row = document.createElement("tr");

    const bookCell = document.createElement("td");
    bookCell.textContent = loan.bookTitle;

    const studentCell = document.createElement("td");
    studentCell.textContent = loan.student;

    const loanDateCell = document.createElement("td");
    loanDateCell.textContent = loan.loanDate;

    const dueDateCell = document.createElement("td");
    dueDateCell.textContent = loan.dueDate;
    if (loan.dueDate < formatDate(new Date())) {
      dueDateCell.classList.add("loan-overdue");
      dueDateCell.textContent += " (Vencido)";
    }

    const actionCell = document.createElement("td");
    const returnButton = document.createElement("button");
    returnButton.type = "button";
    returnButton.className = "return-button";
    returnButton.textContent = "Registrar devolución";
    returnButton.addEventListener("click", () => returnBook(loan.id));
    actionCell.appendChild(returnButton);

    row.append(bookCell, studentCell, loanDateCell, dueDateCell, actionCell);
    loansBody.appendChild(row);
  });

  updateInventorySummary();
}

if (inventorySearch) {
  inventorySearch.addEventListener("input", renderInventory);
}

// Cargar catálogo, inventario y préstamos al abrir la página.
renderBooks();
renderInventory();
renderLoans();
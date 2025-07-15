// Data buku
const recommendationBooksData = [
  { id: 1, title: "Rumah untuk Alie", description: "Sebuah kisah tentang pencarian jati diri dan keluarga sejati", cover: "alie new.jpg", story: "Alie Ishala Samantha, 16 tahun, tak pernah mengira hidupnya akan sepelik ini. Semula, dia hidup dalam keluarga yang penuh cinta, dan rumah yang selalu memeluknya. Namun, sejak dituduh menjadi penyebab meninggalnya Bunda Gianla lima tahun lalu, segalanya berubah dalam semalam. Sebutan pembunuh pun disematkan dalam dirinya," },
  { id: 2, title: "Laut Bercerita", description: "Laut Bercerita, novel terbaru Leila S. Chudori, bertutur tentang kisah keluarga yang kehilangan, sekumpulan sahabat yang merasakan kekosongan di dada, sekelompok orang yang gemar menyiksa dan lancar berkhianat, sejumlah keluarga yang mencari kejelasan makam anaknya, dan tentang cinta yang tak akan luntur...", cover: "laut cerita.jpg", story: "Jakarta, Maret 1998 Di sebuah senja, di sebuah rumah susun di Jakarta, mahasiswa bernama Biru Laut disergap empat lelaki tak dikenal. Bersama kawan-kawannya, Daniel Tumbuan, Sunu Dyantoro, Alex Perazon, dia dibawa ke sebuah tempat yang tak dikenal. Berbulan-bulan mereka disekap, diinterogasi, dipukul, ditendang, digantung, dan disetrum agar bersedia menjawab satu…" },
  { id: 3, title: "Sabtu bersama Bapak", description: "Pesan cinta seorang ayah kepada anak-anaknya melalui video tiap sabtu.", cover: "sabtu sama bapak.jpg", story: "“Hai, Satya! Hai, Cakra!” Sang Bapak melambaikan tangan. “Ini Bapak. Iya, benar kok, ini Bapak. Bapak cuma pindah ke tempat lain. Gak sakit. Alhamdulillah, berkat doa Satya dan Cakra. … Mungkin Bapak tidak dapat duduk dan bermain di samping kalian. Tapi, Bapak tetap ingin kalian tumbuh dengan Bapak di samping…" },
  { id: 4, title: "The Power of Now", description: "Buku ini mengajak pembaca untuk melepaskan beban masa lalu dan kecemasan masa depan,dengan hidup sepenuhnya disaat ini... ", cover: "power of now.jpg", story: "-Saat ini kita hidup di kehidupan sekarang masa saat ini “Now” bukan berada di masa lalu atau masa depan, jadi kita pembacanya diharapkan untuk fokus pada masa saat ini-Perasaan kita (kesedihan, ketahukatan, kekhawatiran, dan emosi-mosi lainnya) muncul karena kita terlalu memikirkan “masa lalu” kita dan terlalu" },
  { id: 5, title: "Teruslah Bodoh Jangan Pintar", description: "Kisah motivasi pelajar meraih impian tinggi.", cover: "bodoh pintar.jpg", story: "Suatu hari, Ali bertemu dengan seorang pria tua yang misterius. Pria tua itu memberi tahu Ali bahwa dunia ini sedang dalam kekacauan. Orang-orang yang pintar dan berpendidikan justru menjadi bagian dari kekacauan tersebut.Pria tua itu kemudian mengajarkan Ali tentang pentingnya menjadi bodoh. Bodoh di sini bukan berarti tidak memiliki pengetahuan atau kecerdasan. Bodoh di sini berarti tidak memiliki ambisi dan keserakahan." },
];

const topBooksData = [
  { id: 4, title: "Fourth Wing", description: "Novel fantasi romantis tentang akademi naga.", cover: "fourth wing.jpg", story: "20-year old Violet Sorrengail is the youngest daughter of General Lilith Sorrengail, the commanding general at Basgiath War College in the kingdom of Navarre, where students choose to join one of four military Quadrants: infantry, healer, scribe, or dragon rider. Navarre is guarded by wards which are powered by dragon magic and protect the kingdom from all other magic, including attacks inflicted by gryphon fliers from the neighbouring kingdom of Poromiel." },
  { id: 5, title: "Orang Orang Biasa", description: "menceritakan kisah sepuluh orang bersahabat yang berjuang untuk membiayai kuliah Aini, anak salah satu dari mereka, di Fakultas Kedokteran.", cover: "orang orang biasa.jpg", story: "Persahabatan yang terdiri atas 10 orang yaitu Salud, Junilah, Nihe, Dinah, Handai, Sobri, Honorun, Rusip, Tohirin, dan Debut. Persahabatan mereka diawali ketika masa bangku SMA yang mana mereka merupakan siswa-siswa yang tergolong kurang pintar sehingga harus ditempatkan di barisan paling belakang. Bahkan diantara mereka tidak sampai lulus SMA karena berkali-kali tidak naik kelas. Sampai usia..." },
  { id: 6, title: "To Kill a Mockingbird", description: "Sebuah kisah tentang keadilan,rasisme,dan masa kecil di Amerika.", cover: "to kill a mockingbird.jpg", story: "Scout memiliki seorang kakak laki-laki bernama Jem, dan dibesarkan oleh ayahnya Atticus Finch seorang diri. Atticus Finch adalah sosok seorang ayah terbaik yang pernah ada. Atticus selalu mengajarkan pada anak-anaknya sejak masih kecil, untuk membaca buku bersama setelah makan. Atticus menjadikan dirinya sebagai contoh teladan yang baik untuk anak..." },
];

// Gabungkan semua buku untuk explore
const allBooks = [...recommendationBooksData, ...topBooksData];

// Render Recommendation
const recommendationBooks = document.getElementById("recommendationBooks");
recommendationBooksData.forEach(book => {
  const card = createBookCard(book);
  recommendationBooks.appendChild(card);
});

// Render Top Books
const topBooksList = document.getElementById("topBooksList");
topBooksData.forEach(book => {
  const card = createBookCard(book);
  topBooksList.appendChild(card);
});

// Render Explore (semua buku)
const exploreBooksList = document.getElementById("exploreBooksList");
allBooks.forEach(book => {
  const card = createBookCard(book);
  exploreBooksList.appendChild(card);
});

// Fungsi lainnya tetap
function createBookCard(book) {
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <img src="${book.cover}" alt="Cover" class="book-cover">
    <h3>${book.title}</h3>
  `;
  card.onclick = () => openBookPopup(book);
  return card;
}

function openBookPopup(book) {
  currentBook = book;
  document.getElementById("bookTitle").innerText = book.title;
  document.getElementById("bookCover").src = book.cover;
  document.getElementById("bookDescription").innerText = book.description;
  openPopup('bookPopup');
}

function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function searchBook() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const bookList = document.getElementById("bookList");
  if (input === "") {
    bookList.innerHTML = "";
    return;
  }
  const foundBook = allBooks.find(book => book.title.toLowerCase().includes(input));
  if (foundBook) {
    openBookPopup(foundBook);
  } else {
    alert("Book not found!");
  }
}

function openProfile() {
  document.getElementById('profilePopup').style.display = 'flex';
  document.getElementById('profileMain').style.display = 'block';
  document.getElementById('editProfile').style.display = 'none';
  document.getElementById('changePassword').style.display = 'none';
}

function showEditProfile() {
  document.getElementById('profileMain').style.display = 'none';
  document.getElementById('editProfile').style.display = 'block';
}

function showChangePassword() {
  document.getElementById('profileMain').style.display = 'none';
  document.getElementById('changePassword').style.display = 'block';
}

function backToMain() {
  document.getElementById('editProfile').style.display = 'none';
  document.getElementById('changePassword').style.display = 'none';
  document.getElementById('profileMain').style.display = 'block';
}

function saveProfile() {
  const name = document.getElementById('editFullName').value;
  const username = document.getElementById('editUsername').value;
  const email = document.getElementById('editEmail').value;
  document.getElementById('profileName').textContent = name || "Your Name";
  backToMain();
}

function savePassword() {
  const oldPass = document.getElementById('oldPassword').value;
  const newPass = document.getElementById('newPassword').value;
  alert("Password changed.");
  backToMain();
}

function triggerImageUpload() {
  document.getElementById('imageUpload').click();
}

function changeProfileImage() {
  const file = document.getElementById('imageUpload').files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profileImage').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function signOut() {
  document.getElementById('profileName').textContent = "Your Name";
  document.getElementById('editFullName').value = "";
  document.getElementById('editUsername').value = "";
  document.getElementById('editEmail').value = "";
  document.getElementById('profileImage').src = "https://via.placeholder.com/100";
  alert("Signed out.");
  document.getElementById('profilePopup').style.display = 'none';
}

function openProfilePopup() { 
  document.getElementById('profilePopup').style.display = 'flex';
  document.getElementById('profileMain').style.display = 'block';
  document.getElementById('editProfile').style.display = 'none';
  document.getElementById('changePassword').style.display = 'none';
}

function closeProfilePopup() {
  document.getElementById('profilePopup').style.display = 'none';
  // Optional: Reset tampilan ke layar utama profil saat ditutup
  document.getElementById('profileMain').style.display = 'block';
  document.getElementById('editProfile').style.display = 'none';
  document.getElementById('changePassword').style.display = 'none';
}

function showStory() {
  if (currentBook) {
 
  document.getElementById(`storyText`).innerText = currentBook.story;
  document.getElementById(`storyPopup`).style.display = `flex`;
  //document.getElementById("bookPopup").style.display = "none";
} 
}

function closeStory() {
  document.getElementById(`storyPopup`).style.display = `none`;
}

function showSubscription() {
  document.getElementById(`storyPopup`).style.display = `none`;
  document.getElementById(`subscribePopup`).style.display = `flex`;
}

function showPaymentNotification() {
  const option = document.getElementById(`paymentOption`).value;
  const notice = document.getElementById(`paymentNotife`);
  if (option) {
    notice.innerText = `Anda memilih ${option.toUpperCase()} untuk pembayaran.`;
  } else { 
    notice.innerText = ``;
  }
}

function backToStart() {
  document.getElementById(`subscribePopup`).style.display = `none`;
}









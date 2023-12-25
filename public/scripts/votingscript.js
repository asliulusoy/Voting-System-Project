let selectedProjectNumber = 0;
let selectedStars = 0;

function resetRating() {
  const stars = document.querySelectorAll('.star input');
  stars.forEach(star => {
    star.checked = false;
  });
  selectedStars = 0; // Yıldız sayısını sıfırla
}

function submitRating() {
  if (selectedProjectNumber === 0) {
    alert('Please choose a project.');
    return;
  }
  if (selectedStars === 0) {
    alert('Please give a rating.');
    return;
  }

  alert(`Project Number: ${selectedProjectNumber}, Star Rating: ${selectedStars}`);
  resetRating(); // Oy verildikten sonra yıldızları sıfırla
  return selectedProjectNumber, selectedStars
}


function toggleTik(button, projectNumber) {
  // Butondaki mevcut tik işaretini bul
  var tikIsareti = button.querySelector('.tik-isareti');

  // Eğer tik işareti zaten varsa, kaldır
  if (tikIsareti) {
    tikIsareti.remove();
    selectedProjectNumber = 0;
    button.classList.remove("active");
  } else {
    // Diğer butonlardaki tik işaretlerini kaldır
    document.querySelectorAll('.tik-isareti').forEach(function (tik) {
      tik.remove();
    });

    // Yeni tik işaretini oluştur ve ekle
    tikIsareti = document.createElement("span");
    tikIsareti.className = "tik-isareti";
    tikIsareti.innerHTML = "✔";

    var buttonRect = button.getBoundingClientRect();
    tikIsareti.style.top = buttonRect.top + buttonRect.height / 2 - 230 + 'px';
    tikIsareti.style.left = buttonRect.right - 40 + 'px';

    button.appendChild(tikIsareti);
    button.classList.add("active");

    // Seçilen proje numarasını güncelle
    selectedProjectNumber = projectNumber;
  }
}

function toggleStar(starId) {
  const stars = document.querySelectorAll('.star input');
  const selectedStar = document.getElementById(`r${starId}`);

  // Uncheck all radio buttons and reset animation delay for labels
  stars.forEach((star, index) => {
    star.checked = false;
    const label = star.nextElementSibling;
    label.style.animationDelay = `${0.1 * (index + 1)}s`;
  });

  // Check the selected radio button based on starId
  if (selectedStar) {
    selectedStar.checked = true;
  }

  selectedStars = starId;
}


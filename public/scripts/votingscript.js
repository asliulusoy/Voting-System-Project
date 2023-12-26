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

  // Retrieve the JWT token from cookies
  const jwtToken = document.cookie.split(';')
  .map(cookie => cookie.trim())
  .find(cookie => cookie.startsWith('jwt='))
  ?.split('=')[1];

  console.log('JWT Token:', jwtToken);
  console.log(document.cookie)
  console.log('All Cookies:', document.cookie);

  if (jwtToken) {
    // Now jwtToken contains your JWT token
    console.log('JWT Token:', jwtToken);

    // Send a POST request to the server to submit the vote
    fetch('/users/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ selectedProjectNumber, selectedStars }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Vote submitted successfully.');
        resetRating(); // Oy verildikten sonra yıldızları sıfırla
      } else {
        alert(data.error);
      }
    })
    .catch(error => {
      console.error('Error submitting vote:', error);
    });
  } else {
    // Handle the case where the JWT cookie is not found
    console.error('JWT cookie not found.');
    console.log(document.cookie);
  }
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


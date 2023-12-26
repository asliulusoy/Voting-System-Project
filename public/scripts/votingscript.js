let selectedProjectNumber = 0;
let selectedStars = 0;

function resetRating() {
  const stars = document.querySelectorAll('.star input');
  stars.forEach(star => {
    star.checked = false;
  });
  selectedStars = 0; // Yıldız sayısını sıfırla
}
console.log('All Cookies:', document.cookie);


function submitRating() {
  // Get the JWT token from cookies using js-cookie
  const cookies = document.cookie;
  console.log('All Cookies:', cookies);
  const tokenCookie = cookies.split(';').find(cookie => cookie.trim().startsWith('jwt='));

  if (!tokenCookie) {
    // Handle the case where the JWT token is not found in cookies
    console.error('JWT token not found in cookies.');
    return;
  }

  const [, tokenValue] = tokenCookie.split('=');
  console.log('JWT Token:', tokenValue);

  if (selectedProjectNumber === 0) {
    alert('Please choose a project.');
    return;
  }
  if (selectedStars === 0) {
    alert('Please give a rating.');
    return;
  }

  try {
    // Send a POST request to the server to submit the vote
    fetch('http://localhost:3000/users/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenValue}`, // Use 'tokenValue' instead of 'token'
      },
      body: JSON.stringify({ selectedProjectNumber, selectedStars }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          alert('Vote submitted successfully.');
          resetRating(); // Reset stars after voting
        } else {
          alert(data.error);
        }
      })
      .catch(error => {
        console.error('Error submitting vote:', error);
      });
  } catch (error) {
    console.error('Error:', error.message);
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

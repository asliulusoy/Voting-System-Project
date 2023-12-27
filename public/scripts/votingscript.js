let selectedProjectNumber = 0;
let selectedStars = 0;

function resetRating() {
  const stars = document.querySelectorAll('.star input');
  stars.forEach(star => {
    star.checked = false;
  });
  selectedStars = 0; // Yıldız sayısını sıfırla
}

async function submitRating() {
  const cookies = document.cookie;
  const tokenCookie = cookies.split(';').find(cookie => cookie.trim().startsWith('jwt='));

  if (!tokenCookie) {
    console.error('JWT token not found in cookies.');
    return;
  }

  const [, tokenValue] = tokenCookie.split('=');

  if (selectedProjectNumber === 0) {
    alert('Please choose a project.');
    return;
  }
  if (selectedStars === 0) {
    alert('Please give a rating.');
    return;
  }

  try {
    const response = await fetch('/users/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenValue}`,
      },
      body: JSON.stringify({ selectedProjectNumber, selectedStars }),
    });

    const data = await response.json();

    if (data.success) {
      alert('Vote submitted successfully.');
      resetRating();
    } else {
      handleVoteError(data);
    }
  } catch (error) {
    resetRating();
    console.error('Error submitting vote:', error);
  }
}

function handleVoteError(data) {
  if (data.error === 'AlreadyVoted') {
    alert('You have already voted for this project.');
  } else if (data.error === 'ValidationFailed') {
    // Handle validation errors
    if (data.details && data.details.errors) {
      const errorMessages = Object.values(data.details.errors).join('\n');
      alert(`Validation failed:\n${errorMessages}`);S
    } else {
      alert('Validation failed. Please check your input.');
    }
  } else {
    alert(data.error || 'An error occurred.');
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

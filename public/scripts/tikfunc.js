function toggleTik(button, tikId) {
    var tikIsareti = button.querySelector('.tik-isareti');

    // Diğer butonlardaki tik işaretlerini kaldır
    document.querySelectorAll('.tik-isareti').forEach(function (tik) {
      tik.remove();
    });

    if (tikIsareti) {
      tikIsareti.remove();
      button.classList.remove("active");
    } else {
      tikIsareti = document.createElement("span");
      tikIsareti.className = "tik-isareti";
      tikIsareti.innerHTML = "✔";

      var buttonRect = button.getBoundingClientRect();
      tikIsareti.style.top = buttonRect.top + buttonRect.height / 2 - 230 + 'px';
      tikIsareti.style.left = buttonRect.right - 40 + 'px';

      button.appendChild(tikIsareti);
      button.classList.add("active");
    }
}
// Proje bilgilerini içeren nesneleri oluşturun (örneğin, projenin adı, resmi, metin dosyası URL'si vs.)
const projects = {
    project1: {
        name: "Proje 1",
        imageSrc: "/images/project1image.jpg",
        textFileUrl: "/texts/project1text.txt"
    },
    project2: {
        name: "Proje 2",
        imageSrc: "/images/project2image.jpg",
        textFileUrl: "/texts/project2text.txt"
    },
    // Diğer projeler...
};

// Her bir buton için olay dinleyicisi ekleme
Object.keys(projects).forEach(projectId => {
    const button = document.getElementById(projectId);
    button.addEventListener("click", () => displayProjectInfo(projects[projectId]));
});

// Proje bilgilerini gösteren fonksiyon
function displayProjectInfo(project) {
    const projectImage = document.getElementById("projectImage");
    const projectText = document.getElementById("projectText");
    const projectInfoContainer = document.getElementById("projectInfoContainer");

    // Proje bilgilerini güncelle
    projectImage.src = project.imageSrc;
    projectText.textContent = project.name;

    // Ekranı göster
    projectInfoContainer.style.display = "block";
}

// Sayfa yüklendiğinde proje ekranını gizle
document.addEventListener("DOMContentLoaded", () => {
    const projectInfoContainer = document.getElementById("projectInfoContainer");
    projectInfoContainer.style.display = "none";
});

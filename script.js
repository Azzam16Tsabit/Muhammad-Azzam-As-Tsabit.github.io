console.log("Portfolio loaded");

// Toggle Night/Light Mode dengan icon dan ganti gambar
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');
const profileImg = document.getElementById('profile-img');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLightMode = document.body.classList.contains('light-mode');
  icon.className = isLightMode ? 'fas fa-sun' : 'fas fa-moon';
  profileImg.src = isLightMode ? 'assets/profile1.jpg' : 'assets/profile.jpg';
  localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});

// Load saved theme, icon, dan gambar on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    icon.className = 'fas fa-sun';
    profileImg.src = 'assets/profile1.jpg';
  } else {
    icon.className = 'fas fa-moon';
    profileImg.src = 'assets/profile.jpg';
  }
});

// Event listeners for view buttons: redirect ke page baru
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const project = e.target.getAttribute('data-project');
    if (project === 'barrier-gate') {
      window.location.href = 'barrier-gate.html';
    } else if (project === 'iot-hydroponic') {
      window.location.href = 'iot-hydroponic.html';
    } else if (project === 'tahfizh-leadership') {
      window.location.href = 'tahfizh-leadership.html';
    } else if (project === 'kti') {
      window.location.href = 'kti.html';
    }
  });
})

// Fungsi untuk Ikon Kirim Pesan Sticky
document.addEventListener('DOMContentLoaded', function() {
  const messageIcon = document.getElementById('message-icon');
  const socialPopup = document.getElementById('social-popup');
  let isDragging = false;
  let offsetX, offsetY;

  // Fungsi untuk menampilkan popup
  function showPopup() {
    socialPopup.classList.add('show');
  }

  // Fungsi untuk menyembunyikan popup
  function hidePopup() {
    socialPopup.classList.remove('show');
  }

  // Event untuk desktop (hover)
  messageIcon.addEventListener('mouseenter', showPopup);
  messageIcon.addEventListener('mouseleave', function() {
    // Sembunyikan hanya jika tidak hover di popup
    setTimeout(() => {
      if (!socialPopup.matches(':hover')) {
        hidePopup();
      }
    }, 100);
  });

  socialPopup.addEventListener('mouseleave', hidePopup);

  // Event untuk mobile (tap)
  messageIcon.addEventListener('touchstart', function(e) {
    e.preventDefault();
    showPopup();
  });

  // Sembunyikan popup saat tap di luar
  document.addEventListener('touchstart', function(e) {
    if (!messageIcon.contains(e.target) && !socialPopup.contains(e.target)) {
      hidePopup();
    }
  });

  // Draggable untuk desktop (mouse)
  messageIcon.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - messageIcon.offsetLeft;
    offsetY = e.clientY - messageIcon.offsetTop;
    messageIcon.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      messageIcon.style.left = (e.clientX - offsetX) + 'px';
      messageIcon.style.top = (e.clientY - offsetY) + 'px';
      messageIcon.style.right = 'auto'; // Reset posisi default
      messageIcon.style.bottom = 'auto';
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
    messageIcon.style.cursor = 'pointer';
  });

  // Draggable untuk mobile (touch)
  messageIcon.addEventListener('touchstart', function(e) {
    if (e.touches.length === 1) {
      isDragging = true;
      const touch = e.touches[0];
      offsetX = touch.clientX - messageIcon.offsetLeft;
      offsetY = touch.clientY - messageIcon.offsetTop;
    }
  });

  document.addEventListener('touchmove', function(e) {
    if (isDragging && e.touches.length === 1) {
      e.preventDefault();
      const touch = e.touches[0];
      messageIcon.style.left = (touch.clientX - offsetX) + 'px';
      messageIcon.style.top = (touch.clientY - offsetTop) + 'px';
      messageIcon.style.right = 'auto';
      messageIcon.style.bottom = 'auto';
    }
  });

  document.addEventListener('touchend', function() {
    isDragging = false;
  });
});

// Data galeri untuk Education dan Certifications (sesuaikan path gambar)
const galleries = {
  education: [
    'lamp/education/image1.jpg'
  ],
  certifications: [
    'lamp/certification/image1.jpg'
  ]
};

let currentGallery = [];

// Script untuk modal gambar penuh
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.modal-close');

  // Fungsi buka modal
    document.querySelectorAll('.gallery-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const gambar = btn.getAttribute('data-gallery');
        modal.style.display = 'flex'; // Tampilkan modal
        modalImg.src = galleries[gambar]; // Set gambar modal ke gambar yang diklik
        modalImg.alt = this.alt;
      });
    });

  // Fungsi tutup modal
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Tutup modal jika klik di luar gambar
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Tutup modal dengan tombol Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
});

document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        const toggle = section.querySelector('.gallery-toggle');
        if (toggle) toggle.style.display = 'block';
    });
    section.addEventListener('mouseleave', () => {
        const toggle = section.querySelector('.gallery-toggle');
        if (toggle) toggle.style.display = 'none';
    });
});
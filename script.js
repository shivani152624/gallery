// Photo data
const photos = [
  // Nature
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    alt: 'Beautiful nature landscape with mountains and lake',
    photographer: 'Alex Johnson',
    category: 'nature'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    alt: 'Sunset over mountain range',
    photographer: 'Sarah Miller',
    category: 'nature'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    alt: 'Mountain landscape with river',
    photographer: 'Sam Wilson',
    category: 'nature'
  },
  
  // Food
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    alt: 'Delicious food plate with vegetables',
    photographer: 'Maria Garcia',
    category: 'food'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    alt: 'Healthy salad bowl',
    photographer: 'David Chen',
    category: 'food'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    alt: 'Gourmet pasta dish',
    photographer: 'Isabella Romano',
    category: 'food'
  },
  
  // People
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9',
    alt: 'Person working on laptop',
    photographer: 'Jamie Smith',
    category: 'people'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    alt: 'Portrait of smiling woman',
    photographer: 'Michael Brown',
    category: 'people'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1463453091185-61582044d556',
    alt: 'Man walking in urban setting',
    photographer: 'Emma Wilson',
    category: 'people'
  },
  
  // Architecture
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd',
    alt: 'Modern architecture building',
    photographer: 'Chris Lee',
    category: 'architecture'
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d',
    alt: 'Contemporary architecture with glass facade',
    photographer: 'Jamie Rodriguez',
    category: 'architecture'
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    alt: 'Historic building with ornate details',
    photographer: 'Alex Thompson',
    category: 'architecture'
  },
  
  // Technology
  {
    id: '13',
    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    alt: 'Technology closeup with code',
    photographer: 'Taylor Reed',
    category: 'technology'
  },
  {
    id: '14',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    alt: 'Modern tech gadgets on desk',
    photographer: 'Jordan Park',
    category: 'technology'
  },
  {
    id: '15',
    url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
    alt: 'Person using laptop with code',
    photographer: 'Riley Adams',
    category: 'technology'
  },
  
  // Animals
  {
    id: '16',
    url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca',
    alt: 'Wild animal in nature',
    photographer: 'Jordan Chen',
    category: 'animals'
  },
  {
    id: '17',
    url: 'https://images.unsplash.com/photo-1557401621-3e3c2ebc1ca0',
    alt: 'Cute dog portrait',
    photographer: 'Casey Kim',
    category: 'animals'
  },
  {
    id: '18',
    url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f',
    alt: 'Lion in the wild',
    photographer: 'Nate Robinson',
    category: 'animals'
  },
  
  // Travel
  {
    id: '19',
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
    alt: 'Scenic travel destination with mountains',
    photographer: 'Riley Cooper',
    category: 'travel'
  },
  {
    id: '20',
    url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    alt: 'City skyline at dusk',
    photographer: 'Taylor Smith',
    category: 'travel'
  },
  {
    id: '21',
    url: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d',
    alt: 'Tropical beach paradise',
    photographer: 'Jamie Wilson',
    category: 'travel'
  },
  
  // Business
  {
    id: '22',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
    alt: 'Business meeting in modern office',
    photographer: 'Alex Morgan',
    category: 'business'
  },
  {
    id: '23',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    alt: 'Corporate building exterior',
    photographer: 'Chris Davis',
    category: 'business'
  },
  {
    id: '24',
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    alt: 'Person working on business documents',
    photographer: 'Sam Taylor',
    category: 'business'
  }
];

// DOM Elements
const photoGrid = document.getElementById('photo-grid');
const photoModal = document.getElementById('photo-modal');
const modalImg = document.getElementById('modal-img');
const modalPhotographer = document.getElementById('modal-photographer');
const modalCategory = document.getElementById('modal-category');
const closeModal = document.querySelector('.close-modal');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const heroSearchInput = document.getElementById('hero-search-input');
const heroSearchButton = document.getElementById('hero-search-button');
const categoryTags = document.querySelectorAll('.category-tag');
const trendTags = document.querySelectorAll('.trend-tag');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  displayPhotos(photos);
  setupEventListeners();
});

// Display photos in the grid
function displayPhotos(photosToDisplay) {
  photoGrid.innerHTML = '';
  
  if (photosToDisplay.length === 0) {
    photoGrid.innerHTML = '<div class="no-results"><p>No photos found. Try a different search term.</p></div>';
    return;
  }
  
  photosToDisplay.forEach(photo => {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.dataset.id = photo.id;
    
    photoItem.innerHTML = `
      <img src="${photo.url}" alt="${photo.alt}">
      <div class="photo-info">
        <p>Photo by ${photo.photographer}</p>
        <p class="category">${photo.category}</p>
      </div>
    `;
    
    photoGrid.appendChild(photoItem);
  });
}

// Filter photos by search query
function filterPhotos(query) {
  if (!query) {
    return photos;
  }
  
  query = query.toLowerCase();
  return photos.filter(photo => 
    photo.category.toLowerCase().includes(query) ||
    photo.alt.toLowerCase().includes(query) ||
    photo.photographer.toLowerCase().includes(query)
  );
}

// Search functionality
function handleSearch(query) {
  const filteredPhotos = filterPhotos(query);
  displayPhotos(filteredPhotos);
}

// Setup all event listeners
function setupEventListeners() {
  // Search form submissions
  searchButton.addEventListener('click', () => {
    handleSearch(searchInput.value);
  });
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchInput.value);
    }
  });
  
  heroSearchButton.addEventListener('click', () => {
    handleSearch(heroSearchInput.value);
  });
  
  heroSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch(heroSearchInput.value);
    }
  });
  
  // Category tags
  categoryTags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault();
      const category = tag.dataset.category;
      handleSearch(category);
    });
  });
  
  // Trending tags
  trendTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const category = tag.dataset.category;
      handleSearch(category);
      heroSearchInput.value = category;
    });
  });
  
  // Photo click to open modal
  photoGrid.addEventListener('click', (e) => {
    const photoItem = e.target.closest('.photo-item');
    if (photoItem) {
      const photoId = photoItem.dataset.id;
      const photo = photos.find(p => p.id === photoId);
      if (photo) {
        openPhotoModal(photo);
      }
    }
  });
  
  // Close modal
  closeModal.addEventListener('click', () => {
    photoModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside
  photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
      photoModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Mobile menu toggle (placeholder - would need more code for full implementation)
  mobileMenuBtn.addEventListener('click', () => {
    alert('Mobile menu would open here in a full implementation');
  });
  
  // Download button in modal
  document.querySelector('.download-btn').addEventListener('click', () => {
    const imgSrc = modalImg.src;
    if (imgSrc) {
      window.open(imgSrc, '_blank');
    }
  });
}

// Open photo modal
function openPhotoModal(photo) {
  modalImg.src = photo.url;
  modalImg.alt = photo.alt;
  modalPhotographer.textContent = photo.photographer;
  modalCategory.textContent = photo.category;
  
  photoModal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Handle escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && photoModal.style.display === 'block') {
    photoModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

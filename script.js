// Enhanced Past Events Blog with Clean Carousel Functionality

// Presentation data
const presentations = {
  "industrial-revolution": {
    title: "Industrial Revolution: Changing Society Forever",
    slides: [
      "industrial-revolution/1.png",
      "industrial-revolution/2.png",
      "industrial-revolution/3.png",
      "industrial-revolution/4.png",
      "industrial-revolution/5.png",
      "industrial-revolution/6.png",
      "industrial-revolution/7.png",
      "industrial-revolution/8.png",
    ],
    audio: "industrial-revolution/Jesús Olascuaga.aac",
  },
  "pompeii-destruction": {
    title: "The Destruction of Pompeii",
    slides: [
      "pompeii/1.png",
      "pompeii/2.png",
      "pompeii/3.png",
      "pompeii/4.png",
      "pompeii/5.png",
      "pompeii/6.png",
      "pompeii/7.png",
    ],
    audio: "pompeii/pompeii.mp3",
  },
  "palace-justice": {
    title: "The Siege of the Palace of Justice",
    slides: [
      "/palace-justice/1.png",
      "/palace-justice/2.png",
      "/palace-justice/3.png",
      "/palace-justice/4.png",
      "/palace-justice/5.png",
      "/palace-justice/6.png",
      "/palace-justice/7.png",
      "/palace-justice/8.png",
    ],
    audio: "palace-justice/palace.mp3",
  },
  hitler: {
    title: "World War II: A Global Conflict",
    slides: [
      "hitler/1.png",
      "hitler/2.png",
      "hitler/3.png",
      "hitler/4.png",
      "hitler/5.png",
      "hitler/6.png",
      "hitler/7.png",
      "hitler/8.png",
      "hitler/9.png",
      "hitler/10.png",
    ],
    audio: "hitler/hitler.mp3",
  },

  bicycle: {
    title: "The Invention of the Bicycle",
    slides: [
      "lost-bicycle/1.png",
      "lost-bicycle/2.png",
      "lost-bicycle/3.png",
      "lost-bicycle/4.png",
      "lost-bicycle/5.png",
    ],
    audio: "lost-bicycle/bicycle.mp3",
  },

  towers: {
    title: "The Twin Towers: A Symbol of Resilience",
    slides: [
      "twin-towers/1.png",
      "twin-towers/2.png",
      "twin-towers/3.png",
      "twin-towers/4.png",
      "twin-towers/5.png",
      "twin-towers/6.png",
      "twin-towers/7.png",
      "twin-towers/8.png",
    ],
    audio: "twin-towers/towers.ogg",
  },

  ancient: {
    title: "Ancient Civilizations: A Journey Through Time",
    slides: [
      "wonder_ancient/1.jpg",
      "wonder_ancient/2.jpg",
      "wonder_ancient/3.jpg",
      "wonder_ancient/4.jpg",
      "wonder_ancient/5.jpg",
      "wonder_ancient/6.jpg",
      "wonder_ancient/7.jpg",
      "wonder_ancient/8.jpg",
      "wonder_ancient/9.jpg",
    ],
    audio: "wonder_ancient/wonder.mp3",
  },

  "korean-war": {
    title: "The Korean War: A Divided Nation",
    slides: [
      "korean_war/1.png",
      "korean_war/2.png",
      "korean_war/3.png",
      "korean_war/4.png",
      "korean_war/5.png",
      "korean_war/6.png",
      "korean_war/7.png",
    ],
    audio: "korean_war/korean.mp3",
  },

  "vikings": {
    title: "The Vikings: Raiders and Explorers",
    slides: [
      "vikings/1.png",
      "vikings/2.png",
      "vikings/3.png",
      "vikings/4.png",
      "vikings/5.png",
    ],
    audio: "vikings/vikings.mp3",
  },
}

// Enhanced blog data
const blogs = {
  "cold": {
    title: "The Cold War: A Geopolitical Struggle",
    content: `
            <h1>The Cold War: A Geopolitical Struggle</h1>
            
            <p>The Cold War was a prolonged period of political and military tension between the United States and the Soviet Union, spanning from the end of World War II to the early 1990s. It shaped global alliances, technological advancements, and cultural narratives.</p>
            
            <p>Discover more about this pivotal era by exploring the blog.</p>

            <p><em>Audio content is embedded within the blog for an immersive experience.</em></p>
        `,
  },
  
  "camp-concentration": {
    title: "Concentration Camps: A Grim Legacy",
    content: `
            <h1>Concentration Camps: A Grim Legacy</h1>
            
            <p>During World War II, concentration camps became symbols of human suffering and atrocities. These camps were sites of forced labor, imprisonment, and mass extermination, leaving a lasting impact on history and humanity.</p>
            
            <p>Learn more about this dark chapter by delving into the blog.</p>
        
            <p><em>Audio content is included to enhance the narrative.</em></p>
        `,
  },

  "crisis-financial": {
    title: "The 2008 Financial Crisis: Lessons Learned",
    content: `
            <h1>The 2008 Financial Crisis: Lessons Learned</h1>
            
            <p>The global financial crisis of 2008 was a catastrophic event that exposed vulnerabilities in the economic system. It led to widespread unemployment, foreclosures, and a reevaluation of financial practices worldwide.</p>
            
            <p>Explore the causes and consequences of this crisis in the blog.</p>
        
            <p><em>Audio content is available to provide additional insights.</em></p>
        `,
  },

  "ayapel":{

    title: "The Ayapel Flood: A Natural Disaster",
    content: `
            <h1>The Ayapel Flood: A Natural Disaster</h1>
            
            <p>The Ayapel flood in Colombia was a devastating natural disaster that affected thousands of lives. It highlighted the vulnerability of communities to climate change and the need for effective disaster management.</p>
            
            <p>Read more about the impact and recovery efforts in the blog.</p>
        
            <p><em>Audio content is embedded to enhance the storytelling experience.</em></p>
        `,
  },

  "moon-landing": {
    title: "The Moon Landing: A Giant Leap for Mankind",
    content: `
            <h1>The Moon Landing: A Giant Leap for Mankind</h1>
            
            <p>The Apollo 11 mission in 1969 marked a significant milestone in human history as astronauts Neil Armstrong and Buzz Aldrin became the first humans to set foot on the Moon. This achievement showcased the power of human ingenuity and exploration.</p>
            
            <p>Discover more about this historic event in the blog.</p>
        
            <p><em>Audio content is included to provide an immersive experience.</em></p>
        `,
  },

  "old-defense":{
    title: "The Old Defense: A Historical Perspective",
    content: `
            <h1>The Old Defense: A Historical Perspective</h1>
            
            <p>The concept of defense has evolved over centuries, from ancient fortifications to modern military strategies. Understanding the historical context of defense mechanisms provides valuable insights into current security practices.</p>
            
            <p>Explore the evolution of defense in the blog.</p>
        
            <p><em>Audio content is embedded to enhance the narrative.</em></p>
        `,

  },  

  "berlin-wall": {
    title: "The Berlin Wall: A Symbol of Division",
    content: `
            <h1>The Berlin Wall: A Symbol of Division</h1>
            
            <p>The Berlin Wall, erected in 1961, became a powerful symbol of the Cold War and the division between East and West Germany. Its fall in 1989 marked a significant turning point in history, leading to the reunification of Germany and the end of the Cold War.</p>
            
            <p>Learn more about this iconic structure and its historical significance in the blog.</p>
        
            <p><em>Audio content is included to provide an immersive experience.</em></p>
        `,
  },

  "titanic": {
    title: "The Titanic: A Tragic Maritime Disaster",
    content: `
            <h1>The Titanic: A Tragic Maritime Disaster</h1>
            
            <p>The sinking of the RMS Titanic in 1912 remains one of the most infamous maritime disasters in history. The ship, deemed "unsinkable," struck an iceberg on its maiden voyage, leading to the loss of over 1,500 lives.</p>
            
            <p>Explore the events leading up to the disaster and its aftermath in the blog.</p>
        
            <p><em>Audio content is embedded to enhance the storytelling experience.</em></p>
        `,
  },
  
}

// Clean Carousel state
const carouselStates = {
  "presentations-carousel": {
    currentIndex: 0,
    itemsPerView: 3,
    totalItems: 0,
    isTransitioning: false,
  },
  "blogs-carousel": {
    currentIndex: 0,
    itemsPerView: 3,
    totalItems: 0,
    isTransitioning: false,
  },
}

// Presentation state
let currentPresentation = null
let currentPresentationSlideIndex = 0

// Initialize clean carousels
function initializeCarousels() {
  const carousels = document.querySelectorAll(".carousel-wrapper")

  carousels.forEach((carousel) => {
    const carouselId = carousel.id
    const items = carousel.querySelectorAll(".carousel-item")
    const state = carouselStates[carouselId]

    if (state) {
      state.totalItems = items.length
      updateCarouselView(carouselId)
      createCarouselIndicators(carouselId)
    }
  })

  // Add event listeners for carousel arrows
  const arrows = document.querySelectorAll(".carousel-arrow")
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      const carouselId = e.target.closest(".carousel-arrow").dataset.carousel
      const direction = e.target.closest(".carousel-arrow").classList.contains("left") ? "prev" : "next"

      if (direction === "next") {
        nextCarouselSlide(carouselId)
      } else {
        prevCarouselSlide(carouselId)
      }
    })
  })

  // Add touch/swipe support for carousels
  initializeCarouselTouchSupport()
}

function updateCarouselView(carouselId) {
  const carousel = document.getElementById(carouselId)
  const state = carouselStates[carouselId]

  if (!carousel || !state) return

  const itemWidth = 400 // 380px + 20px gap
  const translateX = -state.currentIndex * itemWidth

  carousel.style.transform = `translateX(${translateX}px)`

  // Update indicators
  updateCarouselIndicators(carouselId)

  // Update arrow states
  updateCarouselArrows(carouselId)
}

function nextCarouselSlide(carouselId) {
  const state = carouselStates[carouselId]

  if (!state || state.isTransitioning) return

  const maxIndex = Math.max(0, state.totalItems - state.itemsPerView)

  if (state.currentIndex < maxIndex) {
    state.isTransitioning = true
    state.currentIndex++
    updateCarouselView(carouselId)

    setTimeout(() => {
      state.isTransitioning = false
    }, 500)
  }
}

function prevCarouselSlide(carouselId) {
  const state = carouselStates[carouselId]

  if (!state || state.isTransitioning) return

  if (state.currentIndex > 0) {
    state.isTransitioning = true
    state.currentIndex--
    updateCarouselView(carouselId)

    setTimeout(() => {
      state.isTransitioning = false
    }, 500)
  }
}

function goToCarouselSlide(carouselId, targetIndex) {
  const state = carouselStates[carouselId]

  if (!state || state.isTransitioning) return

  const maxIndex = Math.max(0, state.totalItems - state.itemsPerView)

  if (targetIndex >= 0 && targetIndex <= maxIndex) {
    state.isTransitioning = true
    state.currentIndex = targetIndex
    updateCarouselView(carouselId)

    setTimeout(() => {
      state.isTransitioning = false
    }, 500)
  }
}

function createCarouselIndicators(carouselId) {
  const state = carouselStates[carouselId]
  const indicatorsContainer = document.getElementById(carouselId.replace("-carousel", "-indicators"))

  if (!indicatorsContainer || !state) return

  const maxIndex = Math.max(0, state.totalItems - state.itemsPerView)
  const indicatorCount = maxIndex + 1

  indicatorsContainer.innerHTML = ""

  for (let i = 0; i <= maxIndex; i++) {
    const indicator = document.createElement("div")
    indicator.className = `carousel-indicator ${i === 0 ? "active" : ""}`
    indicator.addEventListener("click", () => {
      goToCarouselSlide(carouselId, i)
    })
    indicatorsContainer.appendChild(indicator)
  }
}

function updateCarouselIndicators(carouselId) {
  const state = carouselStates[carouselId]
  const indicatorsContainer = document.getElementById(carouselId.replace("-carousel", "-indicators"))

  if (!indicatorsContainer || !state) return

  const indicators = indicatorsContainer.querySelectorAll(".carousel-indicator")
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === state.currentIndex)
  })
}

function updateCarouselArrows(carouselId) {
  const state = carouselStates[carouselId]
  const carouselContainer = document.querySelector(`[data-carousel="${carouselId}"]`)?.closest(".carousel-container")

  if (!carouselContainer || !state) return

  const leftArrow = carouselContainer.querySelector(".carousel-arrow.left")
  const rightArrow = carouselContainer.querySelector(".carousel-arrow.right")

  if (leftArrow) {
    leftArrow.disabled = state.currentIndex === 0
    leftArrow.style.opacity = state.currentIndex === 0 ? "0.5" : "1"
    leftArrow.style.transform = state.currentIndex === 0 ? "scale(0.9)" : "scale(1)"
  }

  if (rightArrow) {
    const maxIndex = Math.max(0, state.totalItems - state.itemsPerView)
    rightArrow.disabled = state.currentIndex >= maxIndex
    rightArrow.style.opacity = state.currentIndex >= maxIndex ? "0.5" : "1"
    rightArrow.style.transform = state.currentIndex >= maxIndex ? "scale(0.9)" : "scale(1)"
  }
}

function initializeCarouselTouchSupport() {
  const carousels = document.querySelectorAll(".carousel-wrapper")

  carousels.forEach((carousel) => {
    let startX = 0
    let endX = 0
    let isDragging = false

    carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX
      isDragging = true
    })

    carousel.addEventListener("touchmove", (e) => {
      if (!isDragging) return
      endX = e.touches[0].clientX
    })

    carousel.addEventListener("touchend", () => {
      if (!isDragging) return
      isDragging = false

      const swipeThreshold = 50
      const diff = startX - endX

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          nextCarouselSlide(carousel.id)
        } else {
          // Swipe right - previous slide
          prevCarouselSlide(carousel.id)
        }
      }
    })

    // Mouse drag support
    let mouseStartX = 0
    let mouseEndX = 0
    let isMouseDragging = false

    carousel.addEventListener("mousedown", (e) => {
      mouseStartX = e.clientX
      isMouseDragging = true
      carousel.style.cursor = "grabbing"
    })

    carousel.addEventListener("mousemove", (e) => {
      if (!isMouseDragging) return
      mouseEndX = e.clientX
    })

    carousel.addEventListener("mouseup", () => {
      if (!isMouseDragging) return
      isMouseDragging = false
      carousel.style.cursor = "grab"

      const swipeThreshold = 50
      const diff = mouseStartX - mouseEndX

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Drag left - next slide
          nextCarouselSlide(carousel.id)
        } else {
          // Drag right - previous slide
          prevCarouselSlide(carousel.id)
        }
      }
    })

    carousel.addEventListener("mouseleave", () => {
      isMouseDragging = false
      carousel.style.cursor = "grab"
    })

    // Set initial cursor
    carousel.style.cursor = "grab"
  })
}

// Enhanced smooth scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  const headerHeight = document.querySelector(".header").offsetHeight
  const offsetTop = element.offsetTop - headerHeight

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  })

  // Add visual feedback
  element.style.transform = "scale(1.02)"
  setTimeout(() => {
    element.style.transform = "scale(1)"
  }, 300)
}

// Presentation functionality
function openPresentation(presentationId) {
  currentPresentation = presentations[presentationId]
  currentPresentationSlideIndex = 0

  const modalId = `presentation-modal-${presentationId}`
  const modal = document.getElementById(modalId)

  if (!modal) {
    console.error(`Modal not found: ${modalId}`)
    return
  }

  const slideImg = modal.querySelector(`#current-slide-${presentationId}`)
  const slideNum = modal.querySelector(`#current-slide-num-${presentationId}`)
  const totalSlidesElement = modal.querySelector(`#total-slides-${presentationId}`)
  const audio = modal.querySelector(`#presentation-audio-${presentationId}`)

  // Set up slides with loading animation
  if (slideImg) {
    slideImg.style.opacity = "0"
    slideImg.src = currentPresentation.slides[0]
    slideImg.onload = () => {
      slideImg.style.transition = "opacity 0.5s ease"
      slideImg.style.opacity = "1"
    }
  }

  if (slideNum) slideNum.textContent = "1"
  if (totalSlidesElement) totalSlidesElement.textContent = currentPresentation.slides.length

  // Set up audio
  if (audio) audio.src = currentPresentation.audio

  // Update navigation buttons
  updatePresentationNavigationButtons(modal, presentationId)

  // Show modal with animation
  modal.style.display = "block"
  document.body.style.overflow = "hidden"

  console.log(`🎬 Opening presentation: ${currentPresentation.title}`)
}

function updatePresentationNavigationButtons(modal, presentationId) {
  const prevBtn = modal.querySelector(".presentation-controls .nav-btn:first-child")
  const nextBtn = modal.querySelector(".presentation-controls .nav-btn:last-child")

  if (prevBtn) {
    prevBtn.disabled = currentPresentationSlideIndex === 0
    prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1"
  }

  if (nextBtn) {
    nextBtn.disabled = currentPresentationSlideIndex === currentPresentation.slides.length - 1
    nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1"
  }
}

// Enhanced blog opening with separate modals
function openBlog(blogId) {
  const blog = blogs[blogId]
  const modalId = `blog-modal-${blogId}`
  const modal = document.getElementById(modalId)

  if (!modal) {
    console.error(`Blog modal not found for blogId: ${blogId}`)
    return
  }

  // Get the correct content container using the ID
  const contentId = `blog-content-${blogId}`
  const content = document.getElementById(contentId)

  if (!content) {
    console.error(`Blog content container not found for blogId: ${blogId}`)
    return
  }

  content.innerHTML = blog.content

  // Show modal with animation
  modal.style.display = "block"
  document.body.style.overflow = "hidden"

  // Animate content appearance
  setTimeout(() => {
    const elements = content.querySelectorAll("h1, h2, p")
    elements.forEach((el, index) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      setTimeout(() => {
        el.style.transition = "all 0.6s ease"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, index * 100)
    })
  }, 100)

  console.log(`📖 Opening blog: ${blog.title}`)
}

// Enhanced modal closing for separate modals
function closeModal(modalId) {
  const modal = document.getElementById(modalId)

  if (!modal) {
    console.error(`Modal not found: ${modalId}`)
    return
  }

  // Add closing animation
  const modalContent = modal.querySelector(".modal-content")
  if (modalContent) {
    modalContent.style.transform = "scale(0.9)"
    modalContent.style.opacity = "0"
  }

  setTimeout(() => {
    modal.style.display = "none"
    if (modalContent) {
      modalContent.style.transform = "scale(1)"
      modalContent.style.opacity = "1"
    }
  }, 300)

  document.body.style.overflow = "auto"

  // Stop audio for this modal
  const audio = modal.querySelector("audio")
  if (audio) {
    audio.pause()
    audio.currentTime = 0
  }

  console.log(`❌ Modal ${modalId} closed`)
}

// Enhanced slide navigation with animations
function nextSlidePresentation(presentationId) {
  if (currentPresentationSlideIndex < currentPresentation.slides.length - 1) {
    currentPresentationSlideIndex++
    updateSlideWithAnimation(presentationId)
    console.log(`➡️ Next slide: ${currentPresentationSlideIndex + 1}`)
  }
}

function previousSlidePresentation(presentationId) {
  if (currentPresentationSlideIndex > 0) {
    currentPresentationSlideIndex--
    updateSlideWithAnimation(presentationId)
    console.log(`⬅️ Previous slide: ${currentPresentationSlideIndex + 1}`)
  }
}

function updateSlideWithAnimation(presentationId) {
  const modalId = `presentation-modal-${presentationId}`
  const modal = document.getElementById(modalId)

  if (!modal) {
    console.error(`Modal not found: ${modalId}`)
    return
  }

  const slideImg = modal.querySelector(`#current-slide-${presentationId}`)
  const slideNum = modal.querySelector(`#current-slide-num-${presentationId}`)

  if (!slideImg || !slideNum) {
    console.error("Slide elements not found")
    return
  }

  // Fade out current slide
  slideImg.style.opacity = "0"
  slideImg.style.transform = "scale(0.95)"

  setTimeout(() => {
    slideImg.src = currentPresentation.slides[currentPresentationSlideIndex]
    slideNum.textContent = (currentPresentationSlideIndex + 1).toString()

    slideImg.onload = () => {
      slideImg.style.opacity = "1"
      slideImg.style.transform = "scale(1)"
    }

    updatePresentationNavigationButtons(modal, presentationId)
  }, 200)
}

// Contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const name = formData.get("name")
      const email = formData.get("email")
      const subject = formData.get("subject")
      const message = formData.get("message")

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields")
        return
      }

      // Simulate form submission
      const submitBtn = contactForm.querySelector(".submit-btn")
      const originalText = submitBtn.innerHTML

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      submitBtn.disabled = true

      setTimeout(() => {
        alert("Thank you for your message! We will get back to you soon.")
        contactForm.reset()
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
      }, 2000)

      console.log("📧 Contact form submitted:", { name, email, subject, message })
    })
  }
}

// Enhanced keyboard navigation
document.addEventListener("keydown", (e) => {
  const openModal = document.querySelector('.modal[style*="block"]')
  if (openModal && openModal.id.includes("presentation-modal")) {
    const presentationId = openModal.id.replace("presentation-modal-", "")

    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault()
      nextSlidePresentation(presentationId)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      previousSlidePresentation(presentationId)
    } else if (e.key === "Escape") {
      closeModal(openModal.id)
    }
  }

  // Carousel navigation with keyboard
  if (!openModal) {
    if (e.key === "ArrowLeft") {
      // Focus on presentations carousel by default
      prevCarouselSlide("presentations-carousel")
    } else if (e.key === "ArrowRight") {
      nextCarouselSlide("presentations-carousel")
    }
  }
})

// Enhanced modal click outside to close
window.addEventListener("click", (e) => {
  const modals = document.querySelectorAll(".modal")
  modals.forEach((modal) => {
    if (e.target === modal) {
      closeModal(modal.id)
    }
  })
})

// Enhanced header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  const scrolled = window.scrollY

  if (header) {
    if (scrolled > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(20px)"
      header.style.transform = "translateY(0)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(10px)"
    }
  }
})

// Responsive carousel adjustments
function adjustCarouselForScreenSize() {
  const screenWidth = window.innerWidth

  Object.keys(carouselStates).forEach((carouselId) => {
    const state = carouselStates[carouselId]

    if (screenWidth <= 480) {
      state.itemsPerView = 1
    } else if (screenWidth <= 768) {
      state.itemsPerView = 2
    } else {
      state.itemsPerView = 3
    }

    // Reset to first slide and update view
    state.currentIndex = 0
    updateCarouselView(carouselId)
    createCarouselIndicators(carouselId)
  })
}

// Enhanced intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")

      // Special animation for cards
      if (entry.target.classList.contains("presentation-card") || entry.target.classList.contains("blog-card")) {
        entry.target.style.animationDelay = `${Math.random() * 0.5}s`
      }
    }
  })
}, observerOptions)

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Enhanced Past Events blog with clean carousels initialized!")

  // Initialize carousel functionality
  initializeCarousels()

  // Initialize contact form
  initializeContactForm()

  // Adjust carousel for initial screen size
  adjustCarouselForScreenSize()

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".section, .presentation-card, .blog-card, .hero-content")

  animatedElements.forEach((el) => {
    observer.observe(el)
  })

  // Add click animations to interactive elements
  const clickableElements = document.querySelectorAll("button, .presentation-card, .blog-card, .nav-link")

  clickableElements.forEach((element) => {
    element.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("div")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(52, 152, 219, 0.3);
                transform: scale(0);
                animation: rippleEffect 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                pointer-events: none;
            `

      this.style.position = "relative"
      this.style.overflow = "hidden"
      this.appendChild(ripple)

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple)
        }
      }, 600)
    })
  })

  console.log("✨ All animations and interactions ready!")
  console.log("🎮 Available presentations:", Object.keys(presentations))
  console.log("📚 Available blogs:", Object.keys(blogs))
})

// Handle window resize
window.addEventListener("resize", () => {
  adjustCarouselForScreenSize()
})

// Add CSS for ripple animation if not already present
if (!document.querySelector("#ripple-styles")) {
  const rippleStyles = document.createElement("style")
  rippleStyles.id = "ripple-styles"
  rippleStyles.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `
  document.head.appendChild(rippleStyles)
}

console.log("🎉 Enhanced Past Events blog loaded with clean carousel functionality!")


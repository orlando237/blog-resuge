// Enhanced Past Events Blog with Responsive Carousel Functionality

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
  vikings: {
    title: "The Vikings: Raiders and Explorers",
    slides: ["vikings/1.png", "vikings/2.png", "vikings/3.png", "vikings/4.png", "vikings/5.png"],
    audio: "vikings/vikings.mp3",
  },
}

// Enhanced blog data
const blogs = {
  cold: {
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

  ayapel: {
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

  "old-defense": {
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

  titanic: {
    title: "The Titanic: A Tragic Maritime Disaster",
    content: `
            <h1>The Titanic: A Tragic Maritime Disaster</h1>
            
            <p>The sinking of the RMS Titanic in 1912 remains one of the most infamous maritime disasters in history. The ship, deemed "unsinkable," struck an iceberg on its maiden voyage, leading to the loss of over 1,500 lives.</p>
            
            <p>Explore the events leading up to the disaster and its aftermath in the blog.</p>
        
            <p><em>Audio content is embedded to enhance the storytelling experience.</em></p>
        `,
  },
}

// Responsive Carousel state management
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

// Responsive breakpoints
const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 992,
  large: 1200,
}

// Get current screen size category
function getScreenSize() {
  const width = window.innerWidth
  if (width <= BREAKPOINTS.mobile) return "mobile"
  if (width <= BREAKPOINTS.tablet) return "tablet"
  if (width <= BREAKPOINTS.desktop) return "desktop"
  return "large"
}

// Get items per view based on screen size
function getItemsPerView(screenSize) {
  switch (screenSize) {
    case "mobile":
      return 1
    case "tablet":
      return 2
    case "desktop":
      return 3
    default:
      return 3
  }
}

// Initialize responsive carousels
function initializeCarousels() {
  const carousels = document.querySelectorAll(".carousel-wrapper")

  carousels.forEach((carousel) => {
    const carouselId = carousel.id
    const items = carousel.querySelectorAll(".carousel-item")
    const state = carouselStates[carouselId]

    if (state) {
      state.totalItems = items.length
      adjustCarouselForScreenSize()
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

  // Calculate item width based on screen size
  const screenSize = getScreenSize()
  let itemWidth

  switch (screenSize) {
    case "mobile":
      itemWidth = Math.min(300, window.innerWidth - 60) // Account for padding
      break
    case "tablet":
      itemWidth = 340
      break
    default:
      itemWidth = 400
  }

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
    }, 600)
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
    }, 600)
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
    }, 600)
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

    // Touch events
    carousel.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX
        isDragging = true
      },
      { passive: true },
    )

    carousel.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return
        endX = e.touches[0].clientX
      },
      { passive: true },
    )

    carousel.addEventListener(
      "touchend",
      () => {
        if (!isDragging) return
        isDragging = false

        const swipeThreshold = 50
        const diff = startX - endX

        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            nextCarouselSlide(carousel.id)
          } else {
            prevCarouselSlide(carousel.id)
          }
        }
      },
      { passive: true },
    )

    // Mouse drag support for desktop
    let mouseStartX = 0
    let mouseEndX = 0
    let isMouseDragging = false

    carousel.addEventListener("mousedown", (e) => {
      mouseStartX = e.clientX
      isMouseDragging = true
      carousel.style.cursor = "grabbing"
      e.preventDefault()
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
          nextCarouselSlide(carousel.id)
        } else {
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

// Mobile navigation toggle
function initializeMobileNavigation() {
  const header = document.querySelector(".header")

  // Create mobile menu toggle button
  const mobileToggle = document.createElement("button")
  mobileToggle.className = "mobile-menu-toggle"
  mobileToggle.innerHTML = '<i class="fas fa-bars"></i>'
  mobileToggle.setAttribute("aria-label", "Toggle mobile menu")

  // Create mobile navigation
  const mobileNav = document.createElement("div")
  mobileNav.className = "mobile-nav"

  // Clone existing navigation
  const existingNav = document.querySelector(".nav")
  if (existingNav) {
    mobileNav.appendChild(existingNav.cloneNode(true))
  }

  // Insert mobile elements
  const container = header.querySelector(".container")
  if (container) {
    container.appendChild(mobileToggle)
    header.appendChild(mobileNav)
  }

  // Toggle functionality
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "block"
    mobileNav.style.display = isOpen ? "none" : "block"
    mobileToggle.innerHTML = isOpen ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>'
  })

  // Close mobile menu when clicking on links
  mobileNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      mobileNav.style.display = "none"
      mobileToggle.innerHTML = '<i class="fas fa-bars"></i>'
    }
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && mobileNav.style.display === "block") {
      mobileNav.style.display = "none"
      mobileToggle.innerHTML = '<i class="fas fa-bars"></i>'
    }
  })
}

// Enhanced smooth scrolling with mobile considerations
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  const header = document.querySelector(".header")
  const headerHeight = header ? header.offsetHeight : 70
  const offsetTop = element.offsetTop - headerHeight - 20 // Extra padding for mobile

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  })

  // Add visual feedback
  element.style.transform = "scale(1.01)"
  setTimeout(() => {
    element.style.transform = "scale(1)"
  }, 300)

  // Close mobile menu if open
  const mobileNav = document.querySelector(".mobile-nav")
  const mobileToggle = document.querySelector(".mobile-menu-toggle")
  if (mobileNav && mobileNav.style.display === "block") {
    mobileNav.style.display = "none"
    if (mobileToggle) {
      mobileToggle.innerHTML = '<i class="fas fa-bars"></i>'
    }
  }
}

// Presentation functionality with responsive considerations
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

  // Prevent body scroll on mobile
  document.body.style.position = "fixed"
  document.body.style.width = "100%"

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

// Enhanced blog opening with responsive considerations
function openBlog(blogId) {
  const blog = blogs[blogId]
  const modalId = `blog-modal-${blogId}`
  const modal = document.getElementById(modalId)

  if (!modal) {
    console.error(`Blog modal not found for blogId: ${blogId}`)
    return
  }

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

  // Prevent body scroll on mobile
  document.body.style.position = "fixed"
  document.body.style.width = "100%"

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

// Enhanced modal closing with mobile considerations
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

  // Restore body scroll
  document.body.style.overflow = "auto"
  document.body.style.position = ""
  document.body.style.width = ""

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

// Enhanced contact form functionality
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

      // Enhanced validation
      const nameRegex = /^[A-Za-z\s]+$/
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

      if (!nameRegex.test(name)) {
        showAlert("El nombre debe contener solo letras.")
        return
      }
      if (!emailRegex.test(email)) {
        showAlert("Por favor ingresa una dirección de Gmail válida.")
        return
      }
      if (!subject.trim()) {
        showAlert("El asunto no puede estar vacío.")
        return
      }
      if (!message.trim()) {
        showAlert("El mensaje no puede estar vacío.")
        return
      }

      // Simulate form submission
      const submitBtn = contactForm.querySelector(".submit-btn")
      const originalText = submitBtn.innerHTML

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
      submitBtn.disabled = true

      // Simulate API call
      setTimeout(() => {
        showAlert("¡Gracias por tu mensaje! Te responderemos pronto.")
        contactForm.reset()
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
      }, 2000)

      console.log("📧 Contact form submitted:", { name, email, subject, message })
    })
  }
}

// Enhanced alert function for better mobile experience
function showAlert(message) {
  // Create custom alert for better mobile experience
  const alertDiv = document.createElement("div")
  alertDiv.className = "custom-alert"
  alertDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    z-index: 3000;
    max-width: 90vw;
    text-align: center;
    font-family: 'Inter', sans-serif;
  `

  alertDiv.innerHTML = `
    <p style="margin: 0 0 1rem 0; color: #2c3e50; font-size: 1.1rem;">${message}</p>
    <button onclick="this.parentElement.remove()" style="
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 600;
    ">OK</button>
  `

  document.body.appendChild(alertDiv)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (alertDiv.parentElement) {
      alertDiv.remove()
    }
  }, 5000)
}

// Enhanced keyboard navigation with mobile considerations
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

  // Carousel navigation with keyboard (desktop only)
  if (!openModal && window.innerWidth > BREAKPOINTS.tablet) {
    if (e.key === "ArrowLeft") {
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

// Enhanced header scroll effect with mobile considerations
let lastScrollY = 0
let ticking = false

function updateHeader() {
  const header = document.querySelector(".header")
  const scrolled = window.scrollY

  if (header) {
    if (scrolled > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
      header.style.backdropFilter = "blur(20px)"
      header.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.15)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(10px)"
      header.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)"
    }

    // Hide header on scroll down, show on scroll up (mobile only)
    if (window.innerWidth <= BREAKPOINTS.tablet) {
      if (scrolled > lastScrollY && scrolled > 100) {
        header.style.transform = "translateY(-100%)"
      } else {
        header.style.transform = "translateY(0)"
      }
    }
  }

  lastScrollY = scrolled
  ticking = false
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader)
      ticking = true
    }
  },
  { passive: true },
)

// Responsive carousel adjustments
function adjustCarouselForScreenSize() {
  const screenSize = getScreenSize()
  const itemsPerView = getItemsPerView(screenSize)

  Object.keys(carouselStates).forEach((carouselId) => {
    const state = carouselStates[carouselId]
    const oldItemsPerView = state.itemsPerView

    state.itemsPerView = itemsPerView

    // Reset to valid position if items per view changed
    if (oldItemsPerView !== itemsPerView) {
      const maxIndex = Math.max(0, state.totalItems - state.itemsPerView)
      if (state.currentIndex > maxIndex) {
        state.currentIndex = maxIndex
      }

      updateCarouselView(carouselId)
      createCarouselIndicators(carouselId)
    }
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

      // Special animation for cards with staggered delay
      if (entry.target.classList.contains("presentation-card") || entry.target.classList.contains("blog-card")) {
        const cards = Array.from(entry.target.parentElement.children)
        const index = cards.indexOf(entry.target)
        entry.target.style.animationDelay = `${index * 0.1}s`
      }
    }
  })
}, observerOptions)

// Debounced resize handler
let resizeTimeout
function handleResize() {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    adjustCarouselForScreenSize()

    // Close mobile menu on resize to desktop
    if (window.innerWidth > BREAKPOINTS.tablet) {
      const mobileNav = document.querySelector(".mobile-nav")
      const mobileToggle = document.querySelector(".mobile-menu-toggle")
      if (mobileNav && mobileNav.style.display === "block") {
        mobileNav.style.display = "none"
        if (mobileToggle) {
          mobileToggle.innerHTML = '<i class="fas fa-bars"></i>'
        }
      }
    }
  }, 250)
}

// Performance optimized event listeners
function addPerformantEventListeners() {
  // Throttled scroll events
  let scrollTimeout
  window.addEventListener(
    "scroll",
    () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          scrollTimeout = null
        }, 16) // ~60fps
      }
    },
    { passive: true },
  )

  // Debounced resize events
  window.addEventListener("resize", handleResize, { passive: true })

  // Optimized touch events
  document.addEventListener("touchstart", () => {}, { passive: true })
  document.addEventListener("touchmove", () => {}, { passive: true })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Enhanced responsive Past Events blog initialized!")

  // Initialize core functionality
  initializeCarousels()
  initializeContactForm()
  initializeMobileNavigation()
  addPerformantEventListeners()

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
      // Skip ripple on touch devices for better performance
      if ("ontouchstart" in window) return

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

  console.log("✨ All responsive animations and interactions ready!")
  console.log("🎮 Available presentations:", Object.keys(presentations))
  console.log("📚 Available blogs:", Object.keys(blogs))
  console.log("📱 Current screen size:", getScreenSize())
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
    
    .custom-alert {
      animation: fadeIn 0.3s ease;
    }
    
    @media (max-width: 768px) {
      @keyframes rippleEffect {
        to {
          transform: scale(1.5);
          opacity: 0;
        }
      }
    }
    
    @media (prefers-reduced-motion: reduce) {
      @keyframes rippleEffect {
        to {
          transform: scale(1);
          opacity: 0;
        }
      }
    }
  `
  document.head.appendChild(rippleStyles)
}

console.log("🎉 Enhanced responsive Past Events blog loaded successfully!")

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    // Change the header background color when mouse hovers over it
    header.addEventListener('mouseover', function() {
        header.classList.add('active');
    });
    
    // Revert the header background color when mouse leaves it
    header.addEventListener('mouseout', function() {
        header.classList.remove('active');
    });

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section id
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth' // Scroll smoothly to the target section
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var typingElement = document.querySelector(".texttotype");
    var typeArray = ["a programmer", "from Pakistan", "studying Computer Science at NYU", "a rising sophomore"]; // Array of texts to type
    var index = 0, // Current character index
        isAdding = true, // Flag to determine if text is being added or removed
        typeIndex = 0; // Current text index

    function playAnim() {
        setTimeout(
            function() {
                typingElement.innerText = typeArray[typeIndex].slice(0, index); // Display text up to current index
                if (isAdding) {
                    // If adding text
                    if (index >= typeArray[typeIndex].length) {
                        // If the entire text has been added
                        isAdding = false; // Switch to removing text
                        setTimeout(function() {
                            playAnim(); // Wait for 2 seconds before starting to remove text
                        }, 2000);
                        return;
                    } else {
                        // Continue adding text
                        index++;
                    }
                } else {
                    // If removing text
                    if (index === 0) {
                        // If all text has been removed
                        isAdding = true; // Switch to adding text
                        typeIndex++; // Move to the next text in the array
                        if (typeIndex >= typeArray.length) {
                            typeIndex = 0; // Loop back to the beginning if the end of the array is reached
                        }
                    } else {
                        // Continue removing text
                        index--;
                    }
                }
                playAnim(); // Recursively call the function to continue the animation
            },
            isAdding ? 120 : 60 // Type slower (120ms) and remove faster (60ms)
        );
    }

    playAnim(); // Start the typing animation
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    // Toggle the navigation menu visibility on small screens
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

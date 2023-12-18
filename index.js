// The initial description text
const desc = "Armenia is a mountainous nation in West Asia, a former Soviet Republic, and was one of the first Christian nations, embracing Christianity in the fourth century. This rich cultural and natural environment makes it an exciting destination for a wide range of adventure, activity, and walking holidays. There are many pagan sites to visit as well as UNESCO World Heritage - listed churches, which are–almost without exception–built in stunning locations. Surrounded by forests, perched on the top of dramatic gorges or silhouetted before snow - capped mountains, they draw us to magnificent open spaces filled with a huge variety of trees and wild flowers. On Armenia tours we see wonderful mountains, lakes, and waterfalls in the countryside–and relish cooling breezes– while the cafés and restaurants of the country’ s capital, Yerevan, are proof of an emerging economy. Mount Ararat towers majestically over the city, and beautiful scenery is plentiful.";

// Initial state variable for tracking whether "Show More" or "Show Less" is displayed
let state = true;

// Function to handle button click
const handleClick = () => {
    // Toggle the displayed text based on the state
    document.querySelector('.description>p').innerHTML = !state ? desc.substring(0, 201) + '...' : desc;

    // Toggle the button text
    document.querySelector('.description>button>span').innerText = state ? "Show Less" : "Show More";

    // Add arrow icon based on the state
    document.querySelector('.description>button>i').classList = state ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down'

    // Update the state
    state = !state;
};
document.querySelector('.description>button').addEventListener("click", handleClick);

// Detech resize of window and call the function
window.addEventListener("resize",changeP)
function changeP() {
    const w = window.innerWidth;
    // If the window width is greater than 1000 pixels, show the full description
    if (w > 1000) {
        document.querySelector('.description>p').innerHTML = desc;
    } else {
        // If the window width is 1000 pixels or less, show a truncated description 
        document.querySelector('.description>p').innerHTML = desc.substring(0, 201) + '...';
    }
}
changeP()
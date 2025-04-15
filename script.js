// Dynamically change text content
document.querySelector('.hero h1').textContent = "Welcome to CodingSkills.";
document.querySelector('.hero p').textContent = "Your journey to mastering coding starts here.";

// Modify CSS styles via JavaScript
document.querySelector('.hero').style.backgroundColor = "lightsteelblue";
document.querySelector('.hero').style.textAlign = "center";
document.querySelector('.hero').style.padding = "10px";

// Add or remove an element when a button is clicked
const buttonContainer = document.querySelector('.button');

// Create a new button for adding/removing elements
const toggleButton = document.createElement('button');
toggleButton.textContent = "Toggle Paragraph";
toggleButton.className = "btn";
buttonContainer.appendChild(toggleButton);

// Add event listener to toggle the paragraph
toggleButton.addEventListener('click', () => {
    const newParagraph = document.querySelector('.new-paragraph');
    if (newParagraph) {
        newParagraph.remove();
    } else {
        const paragraph = document.createElement('p');
        paragraph.textContent = "Changing the world through Coding!";
        paragraph.className = "new-paragraph";
        document.querySelector('.hero').appendChild(paragraph);
    }
});
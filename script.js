// Scroll Animation
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.setAttribute("data-animate-visible", "true");
      }
    });
  });

let chatbotWindow = document.getElementById('chatbot-window');
let chatbox = document.getElementById('chatbox');
let userInput = document.getElementById('user-input');

function toggleChat() {
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
}

function closeChat() {
    chatbotWindow.style.display = 'none';
}

function sendMessage() {
    let message = userInput.value.trim();
    if (message === '') return;

    // Display user message
    let userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = message;
    chatbox.appendChild(userMessage);

    // Simulate a chatbot response after a short delay
    setTimeout(() => {
        let botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = `You said: "${message}"`; // Customize the bot response
        chatbox.appendChild(botMessage);
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
    }, 1000);

    // Clear input field
    userInput.value = '';
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}

  

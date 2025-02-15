// ✅ AI Tools API को कनेक्ट करने के लिए JavaScript कोड

// अपनी Hugging Face API Key यहां डालें (ध्यान दें: इसे सुरक्षित रखें)
const apiKey = "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"; // इसे अपनी असली API Key से बदलें

// 🔥 Function: AI से जवाब लाने के लिए
async function getAIResponse(userInput) {
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`, // API Key को Authorization में भेजते हैं
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: userInput })
    });

    const data = await response.json(); // API से डेटा निकालें
    return data[0].generated_text; // AI का जवाब
}

// 🔥 Function: UI में जवाब दिखाने के लिए
async function showResponse() {
    let userMessage = document.getElementById("userInput").value; // यूजर का इनपुट लें
    let chatBox = document.getElementById("chatBox"); // Chat Box ढूंढें

    // 🟢 यूजर का मैसेज दिखाएं
    chatBox.innerHTML += `<div class="user-message">${userMessage}</div>`;

    // 🔄 AI का जवाब लाएं
    let aiResponse = await getAIResponse(userMessage);

    // 🔵 AI का मैसेज दिखाएं
    chatBox.innerHTML += `<div class="ai-message">${aiResponse}</div>`;

    document.getElementById("userInput").value = ""; // इनपुट बॉक्स खाली करें
}
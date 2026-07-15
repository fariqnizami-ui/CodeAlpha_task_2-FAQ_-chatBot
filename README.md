# CodeAlpha_FAQChatbot (Web Version) — Now AI-Powered

This is a browser version of my Task 2 project for the CodeAlpha AI Internship.

## What it does
A chat-style webpage that can now answer **any question**, not just a fixed
FAQ list. I connected it to **Google's Gemini API** (free with a personal
API key) so it works like a real AI chatbot.

### How it decides what to reply
1. **Simple chit-chat** (hi, bye, thanks) gets an instant local reply — no API call, feels snappier.
2. **Everything else** gets sent to the Gemini API, and whatever the AI replies with is shown in the chat. This means it can genuinely answer anything — general knowledge, explanations, even things like "what's the weather like" (though it can't fetch live data, it'll explain that itself).
3. **If no API key is set yet** (or the request fails, e.g. no internet), it automatically falls back to a small built-in FAQ list about Python/AI/computers, so the bot still works at a basic level.

## ⚙️ Setup — you MUST do this step for full AI answers
1. Go to **https://aistudio.google.com/apikey**
2. Sign in with a Google account and click **"Create API key"** (it's free)
3. Copy the key
4. Open `script.js` and find this line near the top:
   ```js
   const GEMINI_API_KEY = "PASTE_YOUR_API_KEY_HERE";
   ```
5. Replace `PASTE_YOUR_API_KEY_HERE` with your actual key (keep the quotes)
6. Save the file and refresh `index.html` in your browser

## ⚠️ Important security note
Since this key sits directly in a JavaScript file, **do not upload your real
API key to a public GitHub repo** — anyone could see and use it (and it
could run up usage on your account). For submission, either:
- Remove/blank out the key before pushing to GitHub and mention in your
  video that it works locally with a key added, OR
- Generate a fresh key you don't mind being public (Gemini's free tier has
  generous limits, but it's still best practice not to expose keys).

## Tech used
- HTML
- CSS
- JavaScript (fetch API)
- Google Gemini API (free tier)

## How to run it
1. Add your API key as shown above (optional — it'll run in FAQ-only mode without one)
2. Open `index.html` in any web browser
3. Start chatting!

## Files
- `index.html` — page structure and chat window
- `style.css` — styling for the chat bubbles and layout
- `script.js` — smalltalk logic + Gemini API call + local FAQ fallback + chat behaviour

## Future improvements (if I get time)
- Remember conversation history so follow-up questions make sense
- Add a proper "typing" animation instead of just the word "Typing..."
- Let the user paste their own API key into the page instead of editing the code

---
Made as part of the CodeAlpha Artificial Intelligence Internship.

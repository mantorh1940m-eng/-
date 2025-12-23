// Chatbot
const aiBtn = document.getElementById('ai-btn');
const aiPopup = document.getElementById('ai-popup');
const closeAi = document.getElementById('close-ai');
const sendBtn = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

aiBtn.addEventListener('click', () => aiPopup.style.display = 'block');
closeAi.addEventListener('click', () => aiPopup.style.display = 'none');
window.addEventListener('click', (e) => { if(e.target == aiPopup) aiPopup.style.display = 'none'; });

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => { if(e.key === 'Enter') sendMessage(); });

function sendMessage() {
  const msg = userInput.value.trim();
  if(msg === '') return;
  addMessage('انت', msg);
  userInput.value = '';
  let reply = getReply(msg);
  setTimeout(() => addMessage('الذكاء الاصطناعي', reply), 500);
}

function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = `${sender}: ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(msg) {
  msg = msg.toLowerCase();
  if(msg.includes('فلسفة')) return 'الفلسفة هي أداة لفهم العالم والعقل البشري.';
  if(msg.includes('دين')) return 'الشك والسؤال جزء طبيعي من التفكير الحر.';
  if(msg.includes('تفكير')) return 'التفكير النقدي يبدأ بالطرح الأسئلة قبل قبول أي شيء.';
  return 'عذرًا، لم أفهم سؤالك، حاول صياغة السؤال بطريقة أخرى.';
}

// اقرأ المزيد للمقالات
const posts = {
  post1: "هذا هو المحتوى الكامل للمقال 1...",
  post2: "هذا هو المحتوى الكامل للمقال 2..."
};

document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-post');
    alert(posts[id]); // لاحقًا يمكن استبداله popup حقيقي
  });
});

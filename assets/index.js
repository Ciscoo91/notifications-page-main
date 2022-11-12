const notificationItems = document.querySelectorAll('.unread');
const notificationBadge = document.querySelector('.notification-badge');
const markRead = document.querySelector('.mark-read');

markRead.addEventListener('click', ()=>{
    notificationBadge.textContent = 0;
    notificationItems.forEach(item => {
        item.classList.remove('unread')
    })
})
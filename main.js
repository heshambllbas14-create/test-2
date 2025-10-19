// أزرار التفاعل
document.querySelectorAll('.actions .btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`تم تنفيذ: ${button.innerText}`);
    });
});
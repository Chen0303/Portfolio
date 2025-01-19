function showContent(contentId) {
    document.getElementById("aboutContent").style.display = "none";
    document.getElementById("skillsContent").style.display = "none";
    document.getElementById("experienceContent").style.display = "none";
    document.getElementById("portfolioContent").style.display = "none"; 
    // 顯示指定的內容區塊
    document.getElementById(contentId).style.display = "block";
}

// 添加按鈕點擊事件來顯示相應的內容
document.getElementById("aboutBtn").addEventListener("click", function() {
    showContent("aboutContent");
});

document.getElementById("skillBtn").addEventListener("click", function() {
    showContent("skillsContent");
});

document.getElementById("experBtn").addEventListener("click", function() {
    showContent("experienceContent");
});

document.getElementById("portBtn").addEventListener("click", function() {
    showContent("portfolioContent");
});

// 獲取按鈕元素
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 監聽滾動事件，控制按鈕顯示/隱藏
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};
// 滾動至頂部功能
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
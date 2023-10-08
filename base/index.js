const leaveBtn = document.getElementById("leave_btn");
const confirmModal = document.getElementById("confirmModal");
const secondConfirmModal = document.getElementById("secondConfirmModal");
const firstPage = document.getElementById("first_page")
const secondPage = document.getElementById("second_page")
const secondLeaveBtn = document.getElementById("second_leave_btn")

leaveBtn.addEventListener("click", function () {
    leaveBtn.style.display = "none";
    confirmModal.style.display = "block";
});
secondLeaveBtn.addEventListener("click", function () {
    secondLeaveBtn.style.display = "none";
    secondConfirmModal.style.display = "block";
});

const cancelButton = document.querySelector(".clear");
cancelButton.addEventListener("click", function () {
    leaveBtn.style.display = "block";
    confirmModal.style.display = "none";
});

const okButton = document.querySelector(".blue");
okButton.addEventListener("click", function () {
    secondPage.style.display = "flex";
    firstPage.style.display = "none";
});
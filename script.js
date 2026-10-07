document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name === "" || email === "" || message === "") {
                alert("すべての項目を入力してください。");
            } else {
                alert(name + "さん、お問い合わせありがとうございます！");
                form.reset();
            }
        });
    }

});

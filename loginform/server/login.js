const form = document.getElementById("login-form");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  error.textContent = "";

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    error.textContent = "入力してください";
    return;
  }

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (res.ok) {
    location.href = "/";
  } else {
    error.textContent = "ユーザー名またはパスワードが違います";
  }
});
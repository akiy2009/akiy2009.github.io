document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");

  if (rootElement) {
    rootElement.innerHTML = `
      <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="text-center p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
          <h1 class="text-3xl font-semibold text-gray-800">こんにちは！</h1>
          <p class="text-lg text-gray-600 mt-4">akiy2009です。DiscordBOT開発者として活動しています。</p>
          <p class="mt-4 text-gray-500">趣味は開発です。私のポートフォリオサイトへようこそ！</p>
        </div>
      </div>
    `;
  }
});

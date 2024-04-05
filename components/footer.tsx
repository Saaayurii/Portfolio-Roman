import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy;  2030 Роман. Все права защищены.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Об этом веб-сайте:</span> создан с использованием React и Next.js (маршрутизация приложений и серверные действия), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, хостинг Vercel.
      </p>
    </footer>
  );
}

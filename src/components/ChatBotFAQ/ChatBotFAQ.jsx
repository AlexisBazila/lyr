import { useState } from "react";
import { FaWhatsapp, FaComments, FaTimes } from "react-icons/fa";

const FAQS = [
  {
    keywords: ["horario", "atencion", "abierto"],
    answer: "Nuestro horario de atención es de lunes a viernes de 8 a 18 hs.",
  },
  {
    keywords: ["tasacion", "tasar"],
    answer:
      "Realizamos tasaciones sin cargo. Podés dejarnos tus datos o escribirnos por WhatsApp.",
  },
  {
    keywords: ["alquiler", "alquilar"],
    answer:
      "Contamos con propiedades en alquiler en distintas zonas. ¿Buscás algo en particular?",
  },
  {
    keywords: ["venta", "comprar"],
    answer:
      "Tenemos casas, departamentos y terrenos en venta. Podés explorar el catálogo o consultarnos.",
  },
];

export default function ChatBotFAQ() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! 👋 ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");

  const findAnswer = (text) => {
    const lower = text.toLowerCase();
    return FAQS.find((faq) => faq.keywords.some((k) => lower.includes(k)));
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const match = findAnswer(input);

    const botMessage = match
      ? { from: "bot", text: match.answer }
      : {
          from: "bot",
          text: "No estoy seguro de esa consulta 🤔. Si querés, podés hablar con un asesor por WhatsApp.",
        };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg z-50"
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>

      {/* Chat */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl flex flex-col z-50">
          <div className="bg-black text-white p-3 rounded-t-xl">
            Asistente virtual
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  m.from === "bot"
                    ? "bg-gray-100 text-left"
                    : "bg-black text-white text-right"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu consulta..."
              className="flex-1 border rounded px-2 py-1 text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-3 rounded"
            >
              Enviar
            </button>
          </div>

          <a
            href="https://wa.me/5493755447658"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-green-600 text-sm p-2 border-t"
          >
            <FaWhatsapp /> Hablar por WhatsApp
          </a>
        </div>
      )}
    </>
  );
}

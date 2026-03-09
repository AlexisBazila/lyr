import { useState } from "react";
import { FaWhatsapp, FaComments, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PHONE = "5493755447658";

const FLOWS = {
  main: {
    message: "¡Hola! 👋 ¿En qué podemos ayudarte?",
    options: [
      { label: "📅 Horarios", next: "horarios" },
      { label: "🏠 Comprar propiedad", intent: "comprar" },
      { label: "🏢 Alquilar propiedad", intent: "alquilar" },
      { label: "💰 Tasar mi propiedad", intent: "tasacion" },
    ],
  },

  horarios: {
    message: "Nuestro horario de atención es de lunes a viernes de 8 a 18 hs.",
    options: [{ label: "⬅ Volver al menú", next: "main" }],
  },

  tasacion: {
    message:
      "Podemos realizar la tasación sin cargo 👌 ¿Cómo preferís continuar?",
    options: [
      {
        label: "🟢 Hablar por WhatsApp",
        action: "whatsapp",
        intent: "tasacion",
      },
      { label: "📝 Completar formulario de tasación", action: "form" },
      { label: "⬅ Volver al menú", next: "main" },
    ],
  },

  comprar: {
    message:
      "Perfecto 👌 Podés hablar con un asesor o ver las propiedades disponibles en venta.",
    options: [
      {
        label: "🟢 Hablar por WhatsApp",
        action: "whatsapp",
        intent: "comprar",
      },
      { label: "🔎 Ver propiedades en venta", action: "search", type: "venta" },
      { label: "⬅ Volver al menú", next: "main" },
    ],
  },

  alquilar: {
    message:
      "Perfecto 👌 Podés hablar con un asesor o ver las propiedades disponibles en alquiler.",
    options: [
      {
        label: "🟢 Hablar por WhatsApp",
        action: "whatsapp",
        intent: "alquilar",
      },
      {
        label: "🔎 Ver propiedades en alquiler",
        action: "search",
        type: "alquiler",
      },
      { label: "⬅ Volver al menú", next: "main" },
    ],
  },
};

const INTENT_MESSAGES = {
  comprar: "Hola, estoy interesado en comprar una propiedad.",
  alquilar: "Hola, estoy interesado en alquilar una propiedad.",
  tasacion: "Hola, quiero tasar mi propiedad.",
};

const KEYWORDS = {
  comprar: "comprar",
  venta: "comprar",
  alquilar: "alquilar",
  alquiler: "alquilar",
  tasar: "tasacion",
  tasacion: "tasacion",
  horario: "horarios",
  atencion: "horarios",
};

export default function ChatBotFAQ() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const sendFlow = (flowKey) => {
    const flow = FLOWS[flowKey];

    setMessages((prev) => [
      ...prev,
      { from: "bot", text: flow.message, options: flow.options },
    ]);
  };

  const redirectToWhatsApp = (intent) => {
    const message = encodeURIComponent(INTENT_MESSAGES[intent]);
    window.open(`https://wa.me/${PHONE}?text=${message}`, "_blank");
  };

  const handleOptionClick = (option) => {
    if (option.action === "whatsapp") {
      redirectToWhatsApp(option.intent);
      return;
    }

    if (option.action === "form") {
      navigate("/tasacion");
      setOpen(false);
      return;
    }

    if (option.action === "search") {
      navigate(`/propiedades?operacion=${option.type}`);
      setOpen(false);
      return;
    }

    if (option.next) {
      sendFlow(option.next);
      return;
    }

    if (option.intent) {
      sendFlow(option.intent);
      return;
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const lower = input.toLowerCase();
    const matchedKey = Object.keys(KEYWORDS).find((k) => lower.includes(k));

    setMessages((prev) => [...prev, { from: "user", text: input }]);

    if (matchedKey) {
      sendFlow(KEYWORDS[matchedKey]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "No estoy seguro 🤔. Podés elegir una opción del menú.",
          options: FLOWS.main.options,
        },
      ]);
    }

    setInput("");
  };

  const handleOpen = () => {
    setOpen(!open);

    if (!open && messages.length === 0) {
      sendFlow("main");
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg z-50"
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl flex flex-col z-50">
          <div className="bg-black text-white p-3 rounded-t-xl">
            Asistente virtual
          </div>

          <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div key={i}>
                <div
                  className={`p-2 rounded ${
                    m.from === "bot"
                      ? "bg-gray-100 text-left"
                      : "bg-black text-white text-right"
                  }`}
                >
                  {m.text}
                </div>

                {m.options && (
                  <div className="flex flex-col gap-2 mt-2">
                    {m.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(opt)}
                        className="bg-gray-200 hover:bg-gray-300 text-left px-2 py-1 rounded text-xs"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu consulta..."
              className="flex-1 border rounded px-2 py-1 text-sm"
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-black text-white px-3 rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

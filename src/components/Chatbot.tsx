import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ChevronRight, Zap } from "lucide-react";
import { TEZZ_CONFIG } from "@/lib/config";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

const quickReplies = [
  "Work as a Delivery Rider",
  "How Battery Swap Works",
  "Daily Rent Price",
  "Join Waitlist",
  "Roadside Breakdown Help",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi, I'm Tezz! How can I help you today with TezzEV electric scooters?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      let botResponse =
        "TezzEV simple, affordable electric scooter rentals provide karta hai delivery riders aur city commuters ke liye.";

      const lower = query.toLowerCase();
      if (lower.includes("rider") || lower.includes("delivery")) {
        botResponse =
          "Delivery riders ke liye TezzEV best hai! Zero petrol expense, 2-minute battery swap, aur free regular maintenance. Aap pre-register kar sakte hain.";
      } else if (lower.includes("swap") || lower.includes("battery")) {
        botResponse =
          "Tezz Hub par aakar 2 minute me charged battery swap kar sakte hain. Charging station par wait karne ki zaroorat nahi hai.";
      } else if (lower.includes("price") || lower.includes("rent")) {
        botResponse =
          "Rent simple aur transparent hoga with no hidden charges. Actual price launch par declare hoga—aap 'Guess The Rent' game me guess submit kar sakte hain!";
      } else if (lower.includes("waitlist")) {
        botResponse =
          "Waitlist join karne ke liye /waitlist page par jayein aur apna number submit karein.";
      } else if (
        lower.includes("help") ||
        lower.includes("breakdown") ||
        lower.includes("support")
      ) {
        botResponse = `Hamari 24/7 support team 15 minute me raste me help provide karti hai. Contact: ${TEZZ_CONFIG.launch.phone}.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botResponse,
        },
      ]);
    }, 400);
  };

  return (
    <>
      {/* Floating Chat Button: Positioned safely inside UI, above mobile sticky bar */}
      <div className="fixed bottom-22 sm:bottom-6 right-4 sm:right-6 md:right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-12 sm:h-13 sm:w-13 rounded-full bg-[#1647E8] hover:bg-[#2D6BFF] text-white shadow-xl shadow-blue-900/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/60"
          aria-label="Open Chat"
        >
          {isOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      </div>

      {/* Clean White & Royal Blue Chat Window: Stays strictly within screen boundaries */}
      {isOpen && (
        <div className="fixed bottom-36 sm:bottom-22 right-3 left-3 sm:left-auto sm:right-6 md:right-8 z-50 sm:w-96 h-[460px] max-h-[75vh] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#081330] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm">Tezz Assistant</h3>
                <p className="text-[11px] text-emerald-400">Online • Jaipur Hub</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed text-xs sm:text-sm ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-xs"
                      : "bg-white text-slate-800 border border-slate-200 shadow-xs rounded-bl-xs"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Chips */}
          <div className="p-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-[11px] font-medium text-slate-600 transition-colors shrink-0"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
            />
            <button
              type="submit"
              className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shrink-0"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

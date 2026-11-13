import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, Sparkles, Send, ChevronDown } from "lucide-react";
import soraAvatar from "../assets/chatbot.jpeg"

type Message = { sender: "user" | "ai"; text: string; options?: string[] };

const menuOptions = [
  "Sora Pilot – Work as a Rider",
  "Sora Ads on Wheels – Advertise",
  "Sora Rent-to-Own – Own an EV",
  "Sora Franchise – Get assured returns",
  "Sora Rental – Personal Use"
];

const welcomeMessage = "Hey, I’m Sora from Sora Electric — India’s leading EV rental platform! Which ride suits you today?";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTriggerExpanded, setIsTriggerExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOptionsOpen, setIsOptionsOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("sora_chat_history");
    if (savedMessages) setMessages(JSON.parse(savedMessages));
    else setMessages([{ sender: "ai", text: welcomeMessage, options: menuOptions }]);
    
    const interval = setInterval(() => {
      setIsTriggerExpanded(true);
      setTimeout(() => setIsTriggerExpanded(false), 3000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("sora_chat_history", JSON.stringify(messages));
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = (text: string) => {
    const newMessages: Message[] = [...messages, { sender: "user", text }];
    setMessages([...newMessages, { sender: "ai", text: welcomeMessage, options: menuOptions }]);
    setInput("");
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 overflow-hidden rounded-full bg-brand p-[2px] text-white shadow-lg shadow-brand/50 border-2 border-white"
        animate={{ width: isTriggerExpanded ? "auto" : 60 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-[56px] w-[56px] flex-shrink-0 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img src={soraAvatar} alt="Sora" className="h-full w-full object-cover" />
        </div>
        <motion.div animate={{ opacity: isTriggerExpanded ? 1 : 0 }} className="pr-4 whitespace-nowrap text-left">
            <p className="font-bold text-sm">Hi, I'm Sora</p>
            <p className="text-xs opacity-80">How can I help you?</p>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-60 md:w-80 h-76 lg:h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="bg-brand p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <h4 className="font-bold">Sora Assistant</h4>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="h-5 w-5" /></button>
            </div>
            
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}>
                  <div className={`p-3 rounded-2xl max-w-[90%] text-sm ${m.sender === "user" ? "bg-brand text-white rounded-br-none" : "bg-white border shadow-sm rounded-bl-none"}`}>
                    {m.text}
                  </div>
                  {m.options && (
                    <div className="mt-2 w-full">
                        <button onClick={() => setIsOptionsOpen(!isOptionsOpen)} className="flex w-full items-center justify-between bg-white border border-brand/20 p-2 text-xs rounded-xl">
                            Select an option <ChevronDown className={`h-3 w-3 transition ${isOptionsOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOptionsOpen && (
                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="space-y-1 mt-1">
                                {m.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => handleSend(opt)} className="flex w-full items-center justify-between bg-white border border-brand/20 p-2 text-xs rounded-xl hover:bg-brand/5 transition">
                                    {opt} <ChevronRight className="h-3 w-3 text-brand" />
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 border-t bg-white shrink-0">
              <div className="flex gap-2 items-center">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && input && handleSend(input)}
                  placeholder="Type..."
                  className="flex-1 rounded-full border bg-gray-50 px-4 py-2 text-sm outline-none focus:border-brand min-w-0"
                />
                <button onClick={() => input && handleSend(input)} className="rounded-full bg-brand h-10 w-10 flex-shrink-0 flex items-center justify-center text-white">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaTerminal } from 'react-icons/fa';
import useChatBot from '../../hooks/useChatBot';
import useSound from '../../hooks/useSound';

const ChatTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const { messages, processInput } = useChatBot();
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const play = useSound();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
        if (messages.length > 0 && messages[messages.length - 1].sender === 'bot') {
            play('hover'); // Discrete sound for bot reply
        }
    }, [messages, play]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        play('click');
        processInput(inputValue);
        setInputValue('');
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                onClick={() => { setIsOpen(!isOpen); play('click'); }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-[0_0_20px_rgba(59,130,246,0.22)] transition-colors duration-300 ${isOpen ? 'bg-cyber-pink border-cyber-pink text-black' : 'chat-shell border-cyan text-cyan hover:bg-cyan/10'
                    }`}
            >
                {isOpen ? <FaTimes size={20} /> : <FaRobot size={24} />}
            </motion.button>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="chat-shell fixed bottom-24 right-6 z-50 flex h-[450px] w-80 flex-col overflow-hidden rounded-lg border border-cyan/30 shadow-2xl backdrop-blur-md md:w-96"
                    >
                        {/* Header */}
                        <div className="chat-header flex items-center gap-2 border-b border-cyan/30 p-3">
                            <FaTerminal className="text-cyber-blue" />
                            <span className="font-mono text-xs text-cyber-blue tracking-widest">SYSTEM_AI_ASSISTANT_V1</span>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-cyber-blue/20">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded text-xs leading-relaxed border ${msg.sender === 'user'
                                            ? 'chat-msg-user border-cyan/30 rounded-br-none'
                                            : 'chat-msg-bot border-gray-600/70 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.sender === 'bot' && <span className="mr-2 opacity-50">{'>'}</span>}
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="chat-footer border-t border-cyan/20 p-3">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="ENTER COMMAND..."
                                    className="chat-input w-full rounded border border-cyan/30 py-2 pl-3 pr-10 font-mono text-xs transition-colors focus:border-cyan focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 text-cyan transition-colors hover:text-[var(--text-strong)]"
                                >
                                    <FaPaperPlane size={14} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatTerminal;

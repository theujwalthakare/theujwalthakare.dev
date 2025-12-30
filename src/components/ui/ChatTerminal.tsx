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
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-colors duration-300 ${isOpen ? 'bg-cyber-pink border-cyber-pink text-black' : 'bg-black/80 border-cyber-blue text-cyber-blue hover:bg-cyber-blue/20'
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
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[450px] bg-black/90 backdrop-blur-md border border-cyber-blue/30 rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-cyber-blue/10 p-3 border-b border-cyber-blue/30 flex items-center gap-2">
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
                                                ? 'bg-cyber-blue/10 border-cyber-blue/30 text-white rounded-br-none'
                                                : 'bg-gray-900 border-gray-700 text-cyber-green rounded-bl-none'
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
                        <form onSubmit={handleSubmit} className="p-3 border-t border-cyber-blue/20 bg-black/50">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="ENTER COMMAND..."
                                    className="w-full bg-cyber-blue/5 border border-cyber-blue/30 rounded py-2 pl-3 pr-10 text-white font-mono text-xs focus:outline-none focus:border-cyber-blue transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 text-cyber-blue hover:text-white transition-colors"
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

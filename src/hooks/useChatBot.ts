import { useState, useCallback } from 'react';

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

const KNOWLEDGE_BASE = [
    {
        keywords: ['skills', 'tech', 'stack', 'technologies', 'react', 'java'],
        response: "OPERATIVE SKILLSET: React, TypeScript, Tailwind CSS, Java, Spring Boot, PostgreSQL, Docker, AWS. Specialized in Full-Stack Architecture."
    },
    {
        keywords: ['projects', 'work', 'portfolio', 'apps'],
        response: "ACCESSING PROJECT ARCHIVES... // Top entires: 'BookNJoy' (Event Ticketing), 'UbeSecure' (Cyber Complaint Portal), and this 'Cyber-Portfolio'."
    },
    {
        keywords: ['contact', 'email', 'reach', 'hire'],
        response: "COMMUNICATION CHANNELS: Secure Uplink available at the 'Contact' section. Open for remote and freelance operations."
    },
    {
        keywords: ['who', 'ujwal', 'author', 'developer'],
        response: "IDENTITY: Ujwal Thakare. Full Stack Operative based in Pune, India. Mission: Building secure, scalable digital ecosystems."
    },
    {
        keywords: ['hello', 'hi', 'hey', 'start'],
        response: "SYSTEM ONLINE. Greetings, Visitor. How can I assist you today?"
    },
    {
        keywords: ['help', 'options', 'menu'],
        response: "AVAILABLE COMMANDS: 'Skills', 'Projects', 'Contact', 'Identity', 'Clear'."
    }
];

const useChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'init-1',
            text: "SYSTEM INITIALIZED. ASK ME ABOUT 'SKILLS', 'PROJECTS', OR 'CONTACT'.",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);

    const processInput = useCallback((text: string) => {
        // Add User Message
        const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);

        // Analyze and Respond
        let responseText = "COMMAND NOT RECOGNIZED. TRY 'HELP'.";
        const lowerInput = text.toLowerCase();

        const match = KNOWLEDGE_BASE.find(entry =>
            entry.keywords.some(keyword => lowerInput.includes(keyword))
        );

        if (match) {
            responseText = match.response;
        } else if (lowerInput.includes('clear')) {
            setMessages([]);
            responseText = "CONSOLE CLEARED.";
        }

        // Add Bot Message with slight delay
        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
        }, 600);

    }, []);

    return { messages, processInput };
};

export default useChatBot;

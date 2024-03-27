const messages = [
  "Got it!",
  "Interesting.",
  "Tell me more.",
  "I'm listening.",
  "That's cool!",
  "Fascinating!",
  "Wow!",
  "I see.",
  "Interesting perspective.",
  "That's intriguing.",
  "Thanks for sharing!",
  "Hmm, I'll think about that.",
  "That's quite thought-provoking.",
  "Nice!",
  "I appreciate your input.",
  "Makes sense.",
  "I understand.",
  "Interesting point of view.",
  "Very insightful.",
  "Good to know!",
];

export const generateRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

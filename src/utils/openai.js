import { GoogleGenerativeAI } from '@google/generative-ai'

// Google Gemini API ke liye instance create karne ka function
let instance = null

export const getGeminiInstance = () => {
  if (!instance) {
    instance = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
  }
  return instance
}

/**
 * Gemini ka response generate karne ke liye function
 * @param {string} prompt - user ka prompt
 * @param {Array} previousMessages - pichle messages
 * @returns {Promise<string>} - AI ka response
 */
export const generateResponse = async (prompt, previousMessages = []) => {
  try {
    const genAI = getGeminiInstance()
    const model = genAI.getGenerativeModel({ 
      model: import.meta.env.VITE_GEMINI_MODEL || "gemini-2.0-flash" 
    })
    
    // Gemini API ke liye msg format
    const formattedMessages = previousMessages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));
    
    // curr prompt add krra
    formattedMessages.push({
      role: 'user',
      parts: [{ text: prompt }],
    });
    
    // system prompt ko start me add karoo agr nahi hai to 
    if (!formattedMessages.some(msg => msg.role === 'model' && msg.parts[0].text.includes('You are a helpful assistant for SoftSell'))) {
      formattedMessages.unshift({
        role: 'model',
        parts: [{ text: "You are a helpful assistant for SoftSell, a software license resale platform. Keep responses concise, friendly, and focused on helping users sell their unused software licenses. Avoid discussing topics unrelated to software license resales." }],
      });
    }
    
    // Gemini se content generate kro
    const result = await model.generateContent({
      contents: formattedMessages,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });
    
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error('Error generating response:', error)
    throw new Error('Failed to generate response')
  }
}
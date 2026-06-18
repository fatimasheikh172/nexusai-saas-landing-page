import Groq from 'groq-sdk';

let groqClient: Groq | null = null;

function getGroqClient() {
  if (!groqClient) {
    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY environment variable is not set');
    }
    groqClient = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }
  return groqClient;
}

export async function createChatCompletion(messages: Array<{ role: string; content: string }>) {
  try {
    const groq = getGroqClient();

    const systemMessage = {
      role: 'system',
      content: `You are a helpful AI assistant for NexusAI, an intelligent AI agent platform. You help visitors understand how NexusAI can help them build, deploy, and scale AI agents for their business. You're knowledgeable about:
- AI agent automation and workflows
- How NexusAI's platform works
- Use cases for AI agents (customer support, data processing, content generation, etc.)
- The benefits of using AI agents for business efficiency

Be concise, friendly, and professional. If asked about features or pricing, provide helpful information about the platform's capabilities.`,
    };

    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [systemMessage, ...messages] as any,
      stream: true,
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion;
  } catch (error) {
    console.error('Groq API error:', error);
    throw error;
  }
}

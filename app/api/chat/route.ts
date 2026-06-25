import { NextRequest, NextResponse } from 'next/server';
import { chatMessageSchema } from '@/lib/validations';
import { createChatCompletion } from '@/lib/groq';

export async function POST(req: NextRequest) {
  try {
    console.log('Chat API called');

    const body = await req.json();
    console.log('Request body:', JSON.stringify(body));

    const validatedData = chatMessageSchema.parse(body);
    console.log('Validation passed');

    console.log('Calling Groq API...');
    const completion = await createChatCompletion(validatedData.messages);
    console.log('Groq API responded, creating stream...');

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          console.log('Starting stream...');
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              console.log('Streaming chunk:', content.substring(0, 50));
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            }
          }
          console.log('Stream complete');
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error: any) {
          console.error('Stream error:', error);
          // Gracefully handle connection resets - they're common with long streams
          if (error.code === 'ECONNRESET' || error.code === 'ETIMEDOUT') {
            console.log('Connection closed by client, ending stream gracefully');
            try {
              controller.enqueue(encoder.encode('data: [DONE]\n\n'));
              controller.close();
            } catch (closeError) {
              // Controller might already be closed
              console.log('Controller already closed');
            }
          } else {
            controller.error(error);
          }
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: any) {
    console.error('Chat API error:', error);
    console.error('Error stack:', error.stack);
    console.error('Error message:', error.message);

    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process chat request', message: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}

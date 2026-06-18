import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Waitlist from '@/lib/models/Waitlist';
import { emailSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = emailSchema.parse(body);

    await connectDB();

    const existingEntry = await Waitlist.findOne({ email: validatedData.email });

    if (existingEntry) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    const newEntry = await Waitlist.create({
      email: validatedData.email,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
        data: { email: newEntry.email, createdAt: newEntry.createdAt }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Waitlist API error:', error);

    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid email address', details: error.errors },
        { status: 400 }
      );
    }

    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to join waitlist', message: error.message },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import {
  AbloomSettings,
  AbloomHighlight,
  AbloomGallery,
  AbloomImageSlot,
} from '@/models/Abloom';

function getModel(collectionName: string) {
  switch (collectionName) {
    case 'Abloom_settings':
      return AbloomSettings;
    case 'Abloom_highlights':
      return AbloomHighlight;
    case 'Abloom_gallery':
      return AbloomGallery;
    case 'Abloom_images':
      return AbloomImageSlot;
    default:
      return null;
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const collection = searchParams.get('collection');

    if (!collection) {
      return NextResponse.json({ success: false, error: 'Collection parameter is required' }, { status: 400 });
    }

    const model = getModel(collection);
    if (!model) {
      return NextResponse.json({ success: false, error: `Invalid collection: ${collection}` }, { status: 400 });
    }

    await dbConnect();
    const data = await model.find({}).sort({ order: 1 });
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Abloom API GET Error:', error);
    return NextResponse.json({ success: true, data: [], note: 'Database not initialized yet' });
  }
}

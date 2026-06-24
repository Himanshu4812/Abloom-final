import mongoose, { Schema, Document } from 'mongoose';

export interface IAbloomSettings extends Document {
  name: string;
  tagline: string;
  heroDescription: string;
  overviewTitle: string;
  overviewSubtitle: string;
  overviewParagraphs: string[];
  unitInfraTitle: string;
  unitInfraDescription: string;
  unitInfraBrandBlurb: string;
}

const AbloomSettingsSchema = new Schema<IAbloomSettings>({
  name: { type: String, default: 'Abloom' },
  tagline: { type: String, required: true },
  heroDescription: { type: String, required: true },
  overviewTitle: { type: String, required: true },
  overviewSubtitle: { type: String, required: true },
  overviewParagraphs: [{ type: String }],
  unitInfraTitle: { type: String, required: true },
  unitInfraDescription: { type: String, required: true },
  unitInfraBrandBlurb: { type: String, required: true },
}, { collection: 'Abloom_settings' });

export const AbloomSettings = mongoose.models.AbloomSettings || mongoose.model<IAbloomSettings>('AbloomSettings', AbloomSettingsSchema);

export interface IAbloomHighlight extends Document {
  text: string;
  order: number;
}

const AbloomHighlightSchema = new Schema<IAbloomHighlight>({
  text: { type: String, required: true },
  order: { type: Number, default: 0 },
}, { collection: 'Abloom_highlights' });

export const AbloomHighlight = mongoose.models.AbloomHighlight || mongoose.model<IAbloomHighlight>('AbloomHighlight', AbloomHighlightSchema);

export interface IAbloomGallery extends Document {
  src: string;
  alt: string;
  order: number;
}

const AbloomGallerySchema = new Schema<IAbloomGallery>({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  order: { type: Number, default: 0 },
}, { collection: 'Abloom_gallery' });

export const AbloomGallery = mongoose.models.AbloomGallery || mongoose.model<IAbloomGallery>('AbloomGallery', AbloomGallerySchema);

export interface IAbloomImageSlot extends Document {
  slot: string;
  src: string;
  alt: string;
  category: string;
}

const AbloomImageSlotSchema = new Schema<IAbloomImageSlot>({
  slot: { type: String, required: true, unique: true },
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  category: { type: String, required: true },
}, { collection: 'Abloom_images' });

export const AbloomImageSlot = mongoose.models.AbloomImageSlot || mongoose.model<IAbloomImageSlot>('AbloomImageSlot', AbloomImageSlotSchema);

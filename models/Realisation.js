import mongoose from 'mongoose';

const RealisationSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  marquePanneaux: String,
  marqueMicroOnduleur: String,
  surfaceMaison: String,
  puissanceMax: String,
  nombrePanneaux: String,
  mainImage: String,
  detailImages: [String],
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Realisation = mongoose.models.Realisation || mongoose.model('Realisation', RealisationSchema);

export default Realisation;

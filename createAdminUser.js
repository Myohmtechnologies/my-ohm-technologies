import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js'; // Assurez-vous que ce chemin est correct
import bcrypt from 'bcrypt'; // Importez bcrypt pour le hachage

dotenv.config(); // Charge les variables d'environnement

const createAdminUser = async () => {
    try {
        console.log('MongoDB URI:', process.env.MONGODB_URI); // Pour déboguer

        // Supprimez les options dépréciées
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        const hashedPassword = await bcrypt.hash('password', 10); // Hachez le mot de passe
        const adminUser = new User({
            username: 'admin',
            password: hashedPassword, // Utilisez le mot de passe haché
            role: 'admin',
        });

        await adminUser.save();
        console.log('Admin user created successfully');
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        mongoose.connection.close();
    }
};

createAdminUser();

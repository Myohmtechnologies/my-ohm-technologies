<<<<<<< HEAD
import { connectToDatabase } from '../../../app/lib/mongodb';
=======
import { connectToDatabase } from '../../lib/mongodb';
>>>>>>> origin/main
import { ObjectId } from 'mongodb';

export async function PUT(request, { params }) {
    try {
        const { db } = await connectToDatabase();
        const { status, appointment, notes, reminderDate } = await request.json();

        const updateFields = {};
        if (status) updateFields.status = status;
        if (appointment) updateFields.appointment = appointment;
        if (reminderDate) updateFields.reminderDate = reminderDate;
        if (notes) updateFields.notes = notes;

        const result = await db.collection('leads').updateOne(
            { _id: new ObjectId(params.id) },
            { $set: updateFields }
        );

        if (!result.matchedCount) {
            return new Response("Lead non trouvé", { status: 404 });
        }

        const updatedLead = await db.collection('leads').findOne({ _id: new ObjectId(params.id) });
        return new Response(JSON.stringify(updatedLead), { status: 200 });
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        return new Response("Erreur serveur", { status: 500 });
    }
}
<<<<<<< HEAD
=======

>>>>>>> origin/main

import Note from "../model/NoteModel.js";

// Ambil semua catatan milik pengguna tertentu
export const getNotes = async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await Note.findAll({ where: { user_id: userId } });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ambil satu catatan berdasarkan ID
export const getNoteById = async (req, res) => {
    try {
        const noteId = req.params.id;
        const response = await Note.findOne({ where: { id: noteId } });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Buat catatan baru
export const createNote = async (req, res) => {
    try {
        await Note.create(req.body);
        res.status(201).json({ msg: "Note Created" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Perbarui catatan
export const updateNote = async (req, res) => {
    try {
        await Note.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ msg: "Note Updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Hapus catatan
export const deleteNote = async (req, res) => {
    try {
        await Note.destroy({ where: { id: req.params.id } });
        res.status(200).json({ msg: "Note Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

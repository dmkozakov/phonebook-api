import path from 'path';
import multer from 'multer';

const uploadDir = path.join(process.cwd(), 'tmp');

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: async (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;

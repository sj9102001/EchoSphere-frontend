import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID package
import { storage,ref,uploadBytes,getDownloadURL } from '../../firebase';

const AddPost = () => {
  const [caption, setCaption] = useState('');
  const [media, setMedia] = useState<File | null>(null);

  const handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(e.target.value);
  };

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setMedia(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!caption || !media) {
      alert('Please add a caption and a media file.');
      return;
    }

    try {
      const uuid = uuidv4(); // Generate a unique identifier for the file
      const blobPath = `BlobStorage/${uuid}-${media.name}`;
      const fileRef = ref(storage, blobPath); // Use the UUID in the file path
      const snapshot = await uploadBytes(fileRef, media); // Upload the file

      const downloadURL = await getDownloadURL(snapshot.ref); // Get the download URL
      console.log(downloadURL)

      const response = await fetch('http://localhost:8080/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InVzZXIxIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJpYXQiOjE3MTczNTc1OTAsImV4cCI6MTcxNzM2MTE5MH0.LJCPHldHUkzmr1ZVGW3iUheuGLzPReUMHKaGrIYwcW4`, // Include the authentication token in the headers
        },
        body: JSON.stringify({ content: caption, mediaLink: downloadURL }),
        credentials: "include",
      });

      if (response.ok) {
        alert('Post added successfully!');
        setCaption('');
        setMedia(null);
      } else {
        throw new Error('Failed to add post.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the post.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-gray-700">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Add a New Post</h2>
        <div className="mb-4">
          <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
            Caption:
          </label>
          <textarea
            id="caption"
            value={caption}
            onChange={handleCaptionChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write your caption here..."
            rows={3}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="media" className="block text-sm font-medium text-gray-700">
            Upload Media:
          </label>
          <input
            type="file"
            id="media"
            accept="image/*,video/*"
            onChange={handleMediaChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;

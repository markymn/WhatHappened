import React from 'react';

const FileUpload = () => {
  return (
    <div className="file-upload">
      <h2>Upload Audio/Video Files</h2>
      <input type="file" accept="audio/*,video/*" multiple />
      {/* TODO: Add upload logic and progress display */}
    </div>
  );
};

export default FileUpload; 
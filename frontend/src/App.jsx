import React, { useState } from 'react'
import FileUpload from './components/FileUpload.jsx'
import './App.css'

function App() {
  const [showUpload, setShowUpload] = useState(false)

  return (
    <div className="frontpage-container">
      <div className="frontpage-content">
        <h1 className="main-message">
          Missed a meeting?<br />
          Want to know what happened?<br />
          Upload your audio/video files and find out!
        </h1>
        {!showUpload && (
          <button className="upload-btn" onClick={() => setShowUpload(true)}>
            Upload Files
          </button>
        )}
        {showUpload && <FileUpload />}
      </div>
    </div>
  )
}

export default App

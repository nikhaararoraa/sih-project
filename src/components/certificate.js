import React, { useState } from 'react';
import "./certificate.css";

function Certificate() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [textBoxValue, setTextBoxValue] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('File uploaded successfully:', data);
          setUploadedFiles([...uploadedFiles, selectedFile]);
          setSelectedDocument(selectedFile); // Select the newly uploaded file
          setSelectedFile(null); // Reset the selected file input
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }
  };

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
  };

  return (
    <div className="certificate-container">
      <div className="uploaded-documents">
        <h2>Uploaded Documents</h2>
        <div className="document-list">
          {uploadedFiles.map((file, index) => (
            <div key={index} className={`document-item ${file === selectedDocument ? 'selected' : ''}`} onClick={() => handleDocumentClick(file)}>
              {file.name}
            </div>
          ))}
        </div>
      </div>
      <div className="upload-section">
        <h1>Upload Documents</h1>
        <div className="file-input">
          <input type="file" name="file" onChange={handleFileChange} />
        </div>
        <div className="button-section">
          <button onClick={handleSubmission}>Submit</button>
        </div>
        {textBoxValue && (
          <div className="text-box">
            {textBoxValue}
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;

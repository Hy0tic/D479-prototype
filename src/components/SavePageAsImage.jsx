import React from 'react';
import html2canvas from 'html2canvas';

function SavePageAsImage() {
  const capturePage = () => {
    // Use html2canvas to capture the current document
    html2canvas(document.body).then((canvas) => {
      // Create an image from the canvas
      const image = canvas.toDataURL('image/png');

      // Create a link to download the image
      const link = document.createElement('a');
      link.href = image;
      link.download = 'page-screenshot.png'; // Specify the download file name
      link.click(); // Trigger the download
    });
  };

  return (
    <div>
      {/* Add a button that when clicked, captures the page */}
      <button onClick={capturePage}>Save Page as Image</button>
    </div>
  );
}

export default SavePageAsImage;

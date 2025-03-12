import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export function Pdfconversion() {
  const pdfRef = useRef(null);

  const generatePDF = () => {
    const input = pdfRef.current;
  
    setTimeout(() => {
      if (!input) {
        console.error('No element found for pdfRef');
        return;
      }
  
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
      });
    }, 1000); // Delay to ensure content is rendered
  };
  
  

  return (
    <div style={{ height: 'auto', width: 'auto' }}> {/* Adjusted size */}
      <div ref={pdfRef}>
        {/* Content to be included in the PDF */}
        <h1>Hello, PDF!</h1>
        <p>This is some text in the PDF.</p>
        
      </div>
      <img src="..\components\logo192.png" alt="" />
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
  
}


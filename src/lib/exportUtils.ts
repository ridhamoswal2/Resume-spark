import { ResumeData } from "./resumeData";
import { TemplateType } from "./resumeData";
import { exportToPDF as exportToPDFImpl, exportToJPEG as exportToJPEGImpl } from './pdfExport';
import html2canvas from 'html2canvas';

/**
 * Re-export the export functions from pdfExport.ts
 * This maintains backward compatibility with existing imports
 */
export const exportToPDF = exportToPDFImpl;
export const exportToJPEG = exportToJPEGImpl;

/**
 * Helper to get resume content as HTML
 * 
 * @param resumeData Resume data
 * @param template Template type
 * @returns HTML string representing the resume
 */
const getResumeHtml = (resumeData: ResumeData, template: TemplateType): string => {
  // This would normally use the actual resume templates, but for now we'll create a simple HTML structure
  const { personalInfo, experience, education, skills } = resumeData;
  
  // Style based on template
  const getTemplateStyles = () => {
    switch (template) {
      case 'modern':
        return `
          body { font-family: 'Segoe UI', Roboto, Helvetica, sans-serif; color: #333; line-height: 1.5; }
          h1 { color: #2563eb; }
          h2 { color: #4b5563; border-bottom: 2px solid #e5e7eb; padding-bottom: 0.5rem; margin-top: 1.5rem; }
          .section { margin-bottom: 1.5rem; }
          .item { margin-bottom: 1rem; }
          .item-header { display: flex; justify-content: space-between; font-weight: bold; }
          .skills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
          .skill { background: #e5e7eb; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; }
        `;
      case 'minimal':
        return `
          body { font-family: Arial, sans-serif; color: #111; line-height: 1.4; max-width: 800px; margin: 0 auto; }
          h1 { font-weight: normal; }
          h2 { font-weight: normal; border-bottom: 1px solid #ddd; padding-bottom: 0.25rem; }
          .section { margin-bottom: 1.25rem; }
          .item-header { display: flex; justify-content: space-between; }
          .skills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
          .skill { border: 1px solid #ddd; padding: 0.25rem 0.5rem; font-size: 0.875rem; }
        `;
      case 'professional':
      case 'executive':
        return `
          body { font-family: 'Times New Roman', serif; color: #000; line-height: 1.5; max-width: 800px; margin: 0 auto; }
          h1 { text-align: center; font-size: 1.5rem; margin-bottom: 0.5rem; }
          h2 { font-size: 1.25rem; border-bottom: 1px solid #000; padding-bottom: 0.25rem; }
          .contact { text-align: center; margin-bottom: 1.5rem; font-style: italic; }
          .section { margin-bottom: 1.5rem; }
          .item-header { display: flex; justify-content: space-between; font-weight: bold; }
          .skills { display: flex; flex-wrap: wrap; column-gap: 1rem; }
          .skill { display: inline-block; }
          .skill:not(:last-child)::after { content: "•"; margin-left: 1rem; }
        `;
      case 'creative':
        return `
          body { font-family: 'Georgia', serif; color: #444; line-height: 1.6; background: #f9f9f9; max-width: 800px; margin: 0 auto; padding: 2rem; }
          h1 { color: #9333ea; font-size: 2rem; }
          h2 { color: #6b21a8; border-left: 4px solid #d8b4fe; padding-left: 0.75rem; }
          .section { margin-bottom: 2rem; }
          .item { margin-bottom: 1.5rem; background: white; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          .item-header { display: flex; justify-content: space-between; font-weight: bold; }
          .skills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
          .skill { background: #f3e8ff; color: #6b21a8; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; }
        `;
      default:
        return `
          body { font-family: Arial, sans-serif; line-height: 1.5; max-width: 800px; margin: 0 auto; }
          h1 { margin-bottom: 0.5rem; }
          h2 { margin-top: 1.5rem; border-bottom: 1px solid #ddd; padding-bottom: 0.25rem; }
          .section { margin-bottom: 1.5rem; }
          .item { margin-bottom: 1rem; }
          .item-header { display: flex; justify-content: space-between; font-weight: bold; }
        `;
    }
  };
  
  // Create HTML content
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${personalInfo.name} - Resume</title>
      <style>
        ${getTemplateStyles()}
      </style>
    </head>
    <body>
      <div class="resume ${template}">
        <header>
          <h1>${personalInfo.name}</h1>
          <div class="contact">
            ${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}
            ${personalInfo.website ? ` | ${personalInfo.website}` : ''}
          </div>
          <div class="summary">
            ${personalInfo.summary}
          </div>
        </header>
        
        <div class="section">
          <h2>Experience</h2>
          ${experience.map(exp => `
            <div class="item">
              <div class="item-header">
                <div>${exp.position} at ${exp.company}</div>
                <div>${exp.startDate}${exp.current ? ' - Present' : ` - ${exp.endDate}`}</div>
              </div>
              <div>${exp.description}</div>
            </div>
          `).join('')}
        </div>
        
        <div class="section">
          <h2>Education</h2>
          ${education.map(edu => `
            <div class="item">
              <div class="item-header">
                <div>${edu.degree} in ${edu.field}, ${edu.institution}</div>
                <div>${edu.startDate}${edu.current ? ' - Present' : ` - ${edu.endDate}`}</div>
              </div>
              ${edu.description ? `<div>${edu.description}</div>` : ''}
            </div>
          `).join('')}
        </div>
        
        <div class="section">
          <h2>Skills</h2>
          <div class="skills">
            ${skills.map(skill => `<div class="skill">${skill.name}</div>`).join('')}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Helper to create a download link for file data
 * 
 * @param data Base64/URL data
 * @param filename Name for the downloaded file
 * @param mimeType MIME type of the file
 */
const downloadFile = (data: string, filename: string, mimeType: string) => {
  // Create a blob from the data
  const blob = mimeType.startsWith('image/') 
    ? dataURLtoBlob(data)
    : new Blob([data], { type: mimeType });
  
  // Create an object URL for the blob
  const url = URL.createObjectURL(blob);
  
  // Create a link and trigger the download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
};

/**
 * Helper to convert a data URL to a Blob
 */
const dataURLtoBlob = (dataURL: string): Blob => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new Blob([u8arr], { type: mime });
};

/**
 * Print the resume
 */
export const printResume = async (resumeData: ResumeData, template: TemplateType) => {
  try {
    // Get the preview element
    const previewElement = document.getElementById('resume-preview');
    
    if (!previewElement) {
      console.error('Resume preview not found');
      return;
    }
    
    // Create a clone of the preview element
    const clone = previewElement.cloneNode(true) as HTMLElement;
    
    // Create a print-specific style
    const printStyles = document.createElement('style');
    printStyles.textContent = `
      @media print {
        body { margin: 0; padding: 0; }
        .print-container {
          width: 8.5in;
          min-height: 11in;
          padding: 0;
          box-sizing: border-box;
        }
      }
    `;
    
    // Remove any print-disabled elements
    const noPrintElements = clone.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.remove());
    
    // Reset styles that could interfere with printing
    clone.style.transform = 'none';
    clone.style.boxShadow = 'none';
    clone.style.borderRadius = '0';
    clone.style.margin = '0';
    clone.style.padding = '0';
    
    // Create a temporary container for printing
    const printContainer = document.createElement('div');
    printContainer.className = 'print-container';
    printContainer.style.position = 'absolute';
    printContainer.style.left = '-9999px';
    printContainer.style.top = '0';
    printContainer.style.width = '8.5in';
    printContainer.style.minHeight = '11in';
    printContainer.appendChild(printStyles);
    printContainer.appendChild(clone);
    document.body.appendChild(printContainer);
    
    try {
      // Save the current body overflow style
      const originalOverflow = document.body.style.overflow;
      
      // Hide scrollbars during printing
      document.body.style.overflow = 'hidden';
      
      // Use html2canvas to ensure all styles are properly rendered
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false
      });
      
      // Create a print-ready element
      const printFrame = document.createElement('iframe');
      printFrame.style.position = 'fixed';
      printFrame.style.right = '0';
      printFrame.style.bottom = '0';
      printFrame.style.width = '0';
      printFrame.style.height = '0';
      printFrame.style.border = 'none';
      document.body.appendChild(printFrame);
      
      // Write content to the iframe
      const printDocument = printFrame.contentWindow?.document;
      if (printDocument) {
        printDocument.open();
        printDocument.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${resumeData.personalInfo.name}'s Resume</title>
            <style>
              body { margin: 0; padding: 0; }
              img { max-width: 100%; height: auto; }
              @media print {
                @page { size: auto; margin: 0mm; }
                body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              }
            </style>
          </head>
          <body>
            <img src="${canvas.toDataURL('image/png')}" />
          </body>
          </html>
        `);
        printDocument.close();
        
        // Wait for content to load then print
        setTimeout(() => {
          if (printFrame.contentWindow) {
            printFrame.contentWindow.focus();
            printFrame.contentWindow.print();
            
            // Restore original overflow style and clean up
            setTimeout(() => {
              document.body.style.overflow = originalOverflow;
              if (document.body.contains(printFrame)) {
                document.body.removeChild(printFrame);
              }
            }, 1000);
          }
        }, 500);
      }
    } finally {
      // Always clean up the DOM
      setTimeout(() => {
        if (document.body.contains(printContainer)) {
          document.body.removeChild(printContainer);
        }
      }, 2000);
    }
  } catch (error) {
    console.error('Print error:', error);
  }
}; 
import { ResumeData, TemplateType } from './resumeData';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from "@/components/ui/use-toast";

export const exportToPDF = async (resumeData: ResumeData, templateType: TemplateType) => {
  try {
    // Get the resume element
    const element = document.getElementById('resume-preview');
    if (!element) {
      throw new Error('Resume preview element not found');
    }

    // Create a wrapper with precise A4 dimensions
    const wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '0';
    wrapper.style.width = '210mm';
    wrapper.style.minHeight = '297mm';
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.margin = '0';
    wrapper.style.padding = '0';
    document.body.appendChild(wrapper);

    // Clone the resume element
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Preserve the template-specific styles
    const templateContainer = clone.querySelector('.resume-template-container') as HTMLElement;
    if (templateContainer) {
      // Keep the template's background color if it exists
      const computedStyle = window.getComputedStyle(templateContainer);
      wrapper.style.backgroundColor = computedStyle.backgroundColor;
    }

    // Reset transform but keep other styles
    clone.style.transform = 'none';
    clone.style.width = '210mm';
    clone.style.minHeight = '297mm';
    clone.style.margin = '0';
    clone.style.padding = '0';
    clone.style.boxShadow = 'none';
    clone.style.borderRadius = '0';
    clone.style.position = 'relative';

    // Remove any print-disabled elements
    const noPrintElements = clone.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.remove());

    // Ensure all sections maintain their styles
    const sections = clone.querySelectorAll('section, div, p, h1, h2, h3, h4, h5, h6');
    sections.forEach((section: Element) => {
      const element = section as HTMLElement;
      // Preserve font sizes and colors
      const computedStyle = window.getComputedStyle(element);
      element.style.fontSize = computedStyle.fontSize;
      element.style.color = computedStyle.color;
      element.style.fontFamily = computedStyle.fontFamily;
      element.style.fontWeight = computedStyle.fontWeight;
    });

    // Add clone to wrapper
    wrapper.appendChild(clone);

    // Wait for fonts and images to load
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create canvas with high DPI
    const canvas = await html2canvas(clone, {
      scale: 3, // Higher scale for better quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: null, // Allow transparent background
      windowWidth: clone.offsetWidth,
      logging: false,
      onclone: (clonedDoc) => {
        // Additional style fixes in the cloned document
        const clonedElement = clonedDoc.querySelector('.resume-preview') as HTMLElement;
        if (clonedElement) {
          clonedElement.style.transform = 'none';
          clonedElement.style.width = '210mm';
          clonedElement.style.minHeight = '297mm';
        }
      }
    });

    // Calculate dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Create PDF with bleed margins
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    // Add pages
    while (heightLeft >= 0) {
      if (position > 0) {
        pdf.addPage();
      }

      // Add the image with precise positioning
      pdf.addImage(
        canvas, 
        'JPEG', 
        0, // left margin
        position === 0 ? 0 : -position, // top margin
        imgWidth, // image width
        imgHeight, // image height
        '', // alias
        'FAST' // compression
      );

      heightLeft -= pageHeight;
      position += pageHeight;
    }

    // Save the PDF
    const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.pdf`;
    pdf.save(fileName);

    // Cleanup
    document.body.removeChild(wrapper);

    toast({
      title: "Success",
      description: "Your resume has been downloaded as PDF",
    });

  } catch (error) {
    console.error('PDF Export Error:', error);
    toast({
      title: "Error",
      description: "Failed to export PDF. Please try again.",
      variant: "destructive",
    });
  }
};

export const exportToJPEG = async (resumeData: ResumeData) => {
  try {
    const element = document.getElementById('resume-preview');
    if (!element) {
      throw new Error('Resume preview element not found');
    }

    // Create wrapper with precise A4 dimensions
    const wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '0';
    wrapper.style.width = '210mm';
    wrapper.style.minHeight = '297mm';
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.margin = '0';
    wrapper.style.padding = '0';
    document.body.appendChild(wrapper);

    // Clone element
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Preserve styles
    const templateContainer = clone.querySelector('.resume-template-container') as HTMLElement;
    if (templateContainer) {
      const computedStyle = window.getComputedStyle(templateContainer);
      wrapper.style.backgroundColor = computedStyle.backgroundColor;
    }

    // Reset transform but keep other styles
    clone.style.transform = 'none';
    clone.style.width = '210mm';
    clone.style.minHeight = '297mm';
    clone.style.margin = '0';
    clone.style.padding = '0';
    clone.style.boxShadow = 'none';
    clone.style.borderRadius = '0';
    clone.style.position = 'relative';

    // Remove print-disabled elements
    const noPrintElements = clone.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.remove());

    // Preserve section styles
    const sections = clone.querySelectorAll('section, div, p, h1, h2, h3, h4, h5, h6');
    sections.forEach((section: Element) => {
      const element = section as HTMLElement;
      const computedStyle = window.getComputedStyle(element);
      element.style.fontSize = computedStyle.fontSize;
      element.style.color = computedStyle.color;
      element.style.fontFamily = computedStyle.fontFamily;
      element.style.fontWeight = computedStyle.fontWeight;
    });

    wrapper.appendChild(clone);

    // Wait for fonts and images to load
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create high-quality canvas
    const canvas = await html2canvas(clone, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      windowWidth: clone.offsetWidth,
      logging: false
    });

    // Convert to high-quality JPEG
    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    
    // Create download link
    const link = document.createElement('a');
    const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.jpg`;
    link.download = fileName;
    link.href = imgData;
    document.body.appendChild(link);
    
    // Trigger download
    link.click();

    // Cleanup
    document.body.removeChild(link);
    document.body.removeChild(wrapper);

    toast({
      title: "Success",
      description: "Your resume has been downloaded as JPEG",
    });

  } catch (error) {
    console.error('JPEG Export Error:', error);
    toast({
      title: "Error",
      description: "Failed to export JPEG. Please try again.",
      variant: "destructive",
    });
  }
};

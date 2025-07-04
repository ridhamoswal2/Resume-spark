# ResumeSpark - Professional Resume Builder

ResumeSpark is a modern, user-friendly resume builder application that helps users create professional resumes with ease. Built with React and TypeScript, it offers a streamlined experience for creating, customizing, and exporting resumes in various formats.

## Features

### 1. Resume Builder
- **Intuitive Form Interface**: Easy-to-use form for entering personal information, experience, education, and skills
- **Real-time Preview**: See your changes instantly as you type
- **Auto-save**: Changes are automatically saved every 3 seconds
- **Completion Tracking**: Visual indicator showing the completion status of your resume

### 2. Template System
- **Professional Templates**: Choose from a collection of professionally designed resume templates
- **Live Template Switching**: Switch between templates in real-time while maintaining your content
- **Responsive Design**: Templates are designed to look great on both screen and print

### 3. Export Options
- **Multiple Formats**: Export your resume in various formats:
  - PDF format for professional submissions
  - JPEG format for online sharing
  - Print-ready version with proper formatting
- **Preserved Formatting**: All styling and formatting are maintained in exported files

### 4. User Interface
- **Clean Design**: Modern and minimalist interface for distraction-free resume creation
- **Full-screen Preview**: Toggle between regular and full-screen preview modes
- **Zoom Controls**: Adjust preview size for better visibility
- **Responsive Layout**: Works seamlessly on desktop and tablet devices

## Technical Stack

### Frontend
- **React 18**: For building the user interface
- **TypeScript**: For type-safe code
- **Vite**: For fast development and optimized builds
- **TailwindCSS**: For styling and responsive design
- **Shadcn/ui**: For pre-built UI components
- **React Router**: For navigation
- **React Hook Form**: For form handling
- **Zod**: For form validation
- **Lucide Icons**: For beautiful icons

### Export Functionality
- **html2canvas**: For JPEG exports
- **html2pdf.js**: For PDF generation
- **jspdf**: For advanced PDF features

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

## Usage Guide

1. **Creating a New Resume**
   - Click "Create Resume" on the homepage
   - Fill in your personal information, experience, education, and skills
   - Your progress is automatically saved as you type

2. **Choosing a Template**
   - Navigate to the "Choose Template" tab
   - Browse available templates
   - Click on a template to apply it to your resume

3. **Previewing Your Resume**
   - Use the preview panel on the right to see your resume
   - Toggle full-screen mode for a better view
   - Use zoom controls to adjust the preview size

4. **Exporting Your Resume**
   - Click the "Export" button
   - Choose your preferred format (PDF, JPEG)
   - For printing, use the Print option in the export menu

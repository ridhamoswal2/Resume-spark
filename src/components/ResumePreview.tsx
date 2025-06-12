import React from "react";
import { ResumeData, TemplateType } from "@/lib/resumeData";

interface ResumePreviewProps {
  resumeData: ResumeData;
  template: TemplateType;
}

const ResumePreview = ({ resumeData, template }: ResumePreviewProps) => {
  // Classic Template
  const ClassicTemplate = () => (
    <div className="resume-template-container bg-white p-8 shadow-lg min-h-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-resume-blue">{resumeData.personalInfo.name}</h1>
        <p className="text-xl text-resume-gray">{resumeData.personalInfo.title}</p>
        <div className="flex justify-center flex-wrap gap-3 mt-2 text-sm text-resume-gray">
          {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span>• {resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.location && <span>• {resumeData.personalInfo.location}</span>}
          {resumeData.personalInfo.website && <span>• {resumeData.personalInfo.website}</span>}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-resume-blue mb-3 pb-1">Professional Summary</h2>
        <p className="text-resume-gray-dark">{resumeData.personalInfo.summary}</p>
      </div>

      {resumeData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-resume-blue mb-3 pb-1">Experience</h2>
          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">{exp.position}</h3>
                <span className="text-sm text-resume-gray">
                  {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {exp.current 
                    ? ' Present' 
                    : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                </span>
              </div>
              <p className="text-resume-blue italic">{exp.company}</p>
              <p className="text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-resume-blue mb-3 pb-1">Education</h2>
          {resumeData.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">{edu.institution}</h3>
                <span className="text-sm text-resume-gray">
                  {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {edu.current 
                    ? ' Present' 
                    : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                </span>
              </div>
              <p className="text-resume-blue italic">{edu.degree} in {edu.field}</p>
              {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {resumeData.skills.length > 0 && (
        <div>
          <h2 className="text-xl font-bold border-b-2 border-resume-blue mb-3 pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill) => (
              <div key={skill.id} className="text-sm bg-gray-100 rounded-full px-3 py-1">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Modern Template
  const ModernTemplate = () => (
    <div className="resume-template-container bg-white h-full">
      <div className="bg-resume-blue text-white p-8">
        <h1 className="text-3xl font-bold">{resumeData.personalInfo.name}</h1>
        <p className="text-xl mt-1">{resumeData.personalInfo.title}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-2 mb-1">
                <span>Email:</span>
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <span>Phone:</span>
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
          </div>
          <div>
            {resumeData.personalInfo.location && (
              <div className="flex items-center gap-2 mb-1">
                <span>Location:</span>
                <span>{resumeData.personalInfo.location}</span>
              </div>
            )}
            {resumeData.personalInfo.website && (
              <div className="flex items-center gap-2">
                <span>Website:</span>
                <span>{resumeData.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-resume-blue mb-3">About Me</h2>
          <p className="text-resume-gray-dark">{resumeData.personalInfo.summary}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {resumeData.experience.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-resume-blue mb-4">Work Experience</h2>
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="mb-5 relative pl-6 border-l-2 border-resume-blue-light">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-resume-blue"></div>
                    <h3 className="font-bold text-resume-blue">{exp.position}</h3>
                    <p className="text-resume-gray italic mb-1">{exp.company}</p>
                    <p className="text-sm text-resume-gray mb-2">
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {exp.current 
                        ? ' Present' 
                        : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {resumeData.education.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-resume-blue mb-4">Education</h2>
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="mb-5 relative pl-6 border-l-2 border-resume-blue-light">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-resume-blue"></div>
                    <h3 className="font-bold text-resume-blue">{edu.degree} in {edu.field}</h3>
                    <p className="text-resume-gray italic mb-1">{edu.institution}</p>
                    <p className="text-sm text-resume-gray mb-2">
                      {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {edu.current 
                        ? ' Present' 
                        : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </p>
                    {edu.description && <p className="text-sm">{edu.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {resumeData.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-resume-blue mb-4">Skills</h2>
              <div className="space-y-4">
                {resumeData.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      {skill.level !== undefined && <span>{skill.level}%</span>}
                    </div>
                    {skill.level !== undefined && (
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-resume-blue rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Minimal Template
  const MinimalTemplate = () => (
    <div className="resume-template-container bg-white p-8 min-h-full">
      <div className="mb-8">
        <h1 className="text-4xl font-light">{resumeData.personalInfo.name}</h1>
        <p className="text-xl text-resume-gray mt-1">{resumeData.personalInfo.title}</p>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8 text-sm text-resume-gray">
        {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
        {resumeData.personalInfo.phone && <span>• {resumeData.personalInfo.phone}</span>}
        {resumeData.personalInfo.location && <span>• {resumeData.personalInfo.location}</span>}
        {resumeData.personalInfo.website && <span>• {resumeData.personalInfo.website}</span>}
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-medium uppercase tracking-wider text-resume-gray mb-3">Profile</h2>
        <p>{resumeData.personalInfo.summary}</p>
      </div>

      {resumeData.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-medium uppercase tracking-wider text-resume-gray mb-3">Experience</h2>
          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">{exp.position}</h3>
                <span className="text-sm text-resume-gray">
                  {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {exp.current 
                    ? ' Present' 
                    : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                </span>
              </div>
              <p className="text-resume-gray italic mb-2">{exp.company}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-medium uppercase tracking-wider text-resume-gray mb-3">Education</h2>
          {resumeData.education.map((edu) => (
            <div key={edu.id} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">{edu.institution}</h3>
                <span className="text-sm text-resume-gray">
                  {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {edu.current 
                    ? ' Present' 
                    : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                </span>
              </div>
              <p className="text-resume-gray italic mb-2">{edu.degree} in {edu.field}</p>
              {edu.description && <p className="text-sm">{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {resumeData.skills.length > 0 && (
        <div>
          <h2 className="text-lg font-medium uppercase tracking-wider text-resume-gray mb-3">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {resumeData.skills.map((skill) => (
              <div key={skill.id} className="text-sm">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Executive Template 
  const ExecutiveTemplate = () => (
    <div className="resume-template-container bg-white h-full">
      <div className="bg-slate-900 text-white p-8">
        <h1 className="text-3xl font-bold">{resumeData.personalInfo.name}</h1>
        <p className="text-xl font-light mt-2">{resumeData.personalInfo.title}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-0">
        <div className="col-span-1 border-r pr-6 p-8 h-full">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-resume-slate uppercase mb-3">Contact</h2>
            {resumeData.personalInfo.email && (
              <p className="text-sm mb-2">{resumeData.personalInfo.email}</p>
            )}
            {resumeData.personalInfo.phone && (
              <p className="text-sm mb-2">{resumeData.personalInfo.phone}</p>
            )}
            {resumeData.personalInfo.location && (
              <p className="text-sm mb-2">{resumeData.personalInfo.location}</p>
            )}
            {resumeData.personalInfo.website && (
              <p className="text-sm mb-2">{resumeData.personalInfo.website}</p>
            )}
          </div>
          
          {resumeData.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-resume-slate uppercase mb-3">Expertise</h2>
              <div className="space-y-2">
                {resumeData.skills.map((skill) => (
                  <p key={skill.id} className="text-sm">{skill.name}</p>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="col-span-2 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-resume-slate-dark border-b border-gray-200 pb-2 mb-3">
              Professional Profile
            </h2>
            <p className="text-resume-gray-dark">{resumeData.personalInfo.summary}</p>
          </div>

          {resumeData.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-resume-slate-dark border-b border-gray-200 pb-2 mb-4">
                Professional Experience
              </h2>
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="mb-5">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-resume-slate font-medium">{exp.company}</p>
                    <p className="text-sm text-resume-gray">
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {exp.current 
                        ? ' Present' 
                        : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </p>
                  </div>
                  <p className="text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {resumeData.education.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-resume-slate-dark border-b border-gray-200 pb-2 mb-4">
                Education
              </h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
                    <p className="text-sm text-resume-gray">
                      {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {edu.current 
                        ? ' Present' 
                        : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </p>
                  </div>
                  <p className="font-medium mb-1">{edu.institution}</p>
                  {edu.description && <p className="text-sm">{edu.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Professional Template
  const ProfessionalTemplate = () => (
    <div className="resume-template-container bg-white h-full">
      <div className="p-8 border-b-4 border-resume-green">
        <h1 className="text-3xl font-bold text-resume-green">{resumeData.personalInfo.name}</h1>
        <p className="text-xl text-resume-gray mt-1">{resumeData.personalInfo.title}</p>
        
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          {resumeData.personalInfo.email && (
            <div className="flex items-center gap-1">
              <span className="font-semibold">Email:</span>
              <span>{resumeData.personalInfo.email}</span>
            </div>
          )}
          {resumeData.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <span className="font-semibold">Phone:</span>
              <span>{resumeData.personalInfo.phone}</span>
            </div>
          )}
          {resumeData.personalInfo.location && (
            <div className="flex items-center gap-1">
              <span className="font-semibold">Location:</span>
              <span>{resumeData.personalInfo.location}</span>
            </div>
          )}
          {resumeData.personalInfo.website && (
            <div className="flex items-center gap-1">
              <span className="font-semibold">Website:</span>
              <span>{resumeData.personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-resume-green border-b border-gray-200 pb-2 mb-3">
            Professional Summary
          </h2>
          <p>{resumeData.personalInfo.summary}</p>
        </div>
        
        {resumeData.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-resume-green border-b border-gray-200 pb-2 mb-3">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {resumeData.skills.map((skill) => (
                <div key={skill.id} className="text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-resume-green mr-2"></div>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {resumeData.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-resume-green border-b border-gray-200 pb-2 mb-3">
              Professional Experience
            </h2>
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="mb-5">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-resume-gray-dark">{exp.position}</h3>
                  <span className="text-sm font-medium">
                    {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {exp.current 
                      ? ' Present' 
                      : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                  </span>
                </div>
                <p className="text-resume-green font-medium mb-2">{exp.company}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {resumeData.education.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-resume-green border-b border-gray-200 pb-2 mb-3">
              Education
            </h2>
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-resume-gray-dark">{edu.degree} in {edu.field}</h3>
                  <span className="text-sm font-medium">
                    {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {edu.current 
                      ? ' Present' 
                      : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                  </span>
                </div>
                <p className="text-resume-green font-medium mb-1">{edu.institution}</p>
                {edu.description && <p className="text-sm">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Creative Template
  const CreativeTemplate = () => (
    <div className="resume-template-container bg-white h-full">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{resumeData.personalInfo.name}</h1>
          <p className="text-xl font-light">{resumeData.personalInfo.title}</p>
          
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <span>{resumeData.personalInfo.location}</span>
              </div>
            )}
            {resumeData.personalInfo.website && (
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <span>{resumeData.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1">
          {resumeData.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-purple-600 mb-4 pb-2 border-b-2 border-purple-200">Skills & Expertise</h2>
              <div className="space-y-3">
                {resumeData.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      {skill.level && <span className="text-xs text-purple-600">{skill.level}%</span>}
                    </div>
                    {skill.level && (
                      <div className="h-1.5 bg-purple-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {resumeData.education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-purple-600 mb-4 pb-2 border-b-2 border-purple-200">Education</h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-purple-600 text-sm mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-600">
                    {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {edu.current ? ' Present' : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                  </p>
                  {edu.description && (
                    <p className="text-sm text-gray-600 mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {resumeData.personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-purple-600 mb-4 pb-2 border-b-2 border-purple-200">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">{resumeData.personalInfo.summary}</p>
            </div>
          )}

          {resumeData.experience.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-purple-600 mb-4 pb-2 border-b-2 border-purple-200">Experience</h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="relative pl-4 border-l-2 border-purple-200">
                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-purple-600"></div>
                    <div className="mb-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900">{exp.position}</h3>
                        <span className="text-sm text-purple-600 font-medium">
                          {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                          {exp.current ? ' Present' : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                        </span>
                      </div>
                      <p className="text-purple-600 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-gray-700 text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Scholarly Impact Template (Academic)
  const ScholarlyImpactTemplate = () => (
    <div className="resume-template-container bg-white h-full">
      <div className="grid grid-cols-4">
        {/* Left Sidebar */}
        <div className="col-span-1 bg-green-800 text-white p-6 h-full">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-1">{resumeData.personalInfo.name}</h1>
            <p className="text-sm font-medium text-green-200">{resumeData.personalInfo.title}</p>
          </div>
          
          <div className="space-y-5">
            <div>
              <h2 className="text-sm uppercase font-semibold tracking-wider text-green-300 mb-2 border-b border-green-700 pb-1">
                Contact
              </h2>
              <div className="space-y-2 text-sm">
                {resumeData.personalInfo.email && <p>{resumeData.personalInfo.email}</p>}
                {resumeData.personalInfo.phone && <p>{resumeData.personalInfo.phone}</p>}
                {resumeData.personalInfo.location && <p>{resumeData.personalInfo.location}</p>}
                {resumeData.personalInfo.website && <p>{resumeData.personalInfo.website}</p>}
              </div>
            </div>
            
            {resumeData.skills.length > 0 && (
              <div>
                <h2 className="text-sm uppercase font-semibold tracking-wider text-green-300 mb-2 border-b border-green-700 pb-1">
                  Areas of Expertise
                </h2>
                <div className="space-y-1">
                  {resumeData.skills.map((skill) => (
                    <p key={skill.id} className="text-sm">{skill.name}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="col-span-3 p-8">
          <div className="mb-6 border-b border-gray-200 pb-5">
            <h2 className="text-xl font-serif font-bold text-green-800 mb-3">Academic Profile</h2>
            <p className="text-gray-700 leading-relaxed">{resumeData.personalInfo.summary}</p>
          </div>
          
          {resumeData.education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold text-green-800 mb-4">Educational Background</h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-6 pb-5 border-b border-dashed border-green-200 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{edu.degree} in {edu.field}</h3>
                      <p className="text-green-700 italic mb-1">{edu.institution}</p>
                      {edu.description && <p className="text-sm text-gray-600 mt-2">{edu.description}</p>}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1 sm:mt-0 sm:ml-4 sm:text-right whitespace-nowrap">
                      {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {edu.current 
                        ? ' Present' 
                        : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {resumeData.experience.length > 0 && (
            <div>
              <h2 className="text-xl font-serif font-bold text-green-800 mb-4">Professional Experience</h2>
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="mb-6 pb-5 border-b border-dashed border-green-200 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                      <p className="text-green-700 italic mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1 sm:mt-0 sm:ml-4 sm:text-right whitespace-nowrap">
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                      {exp.current 
                        ? ' Present' 
                        : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Expert Authority Template (Specialist)
  const ExpertAuthorityTemplate = () => (
    <div className="resume-template-container bg-white h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-rose-700 p-6 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">{resumeData.personalInfo.name}</h1>
          <p className="text-lg font-light mt-1">{resumeData.personalInfo.title}</p>
          
          <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
            {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
            {resumeData.personalInfo.phone && (
              <>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>{resumeData.personalInfo.phone}</span>
              </>
            )}
            {resumeData.personalInfo.location && (
              <>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>{resumeData.personalInfo.location}</span>
              </>
            )}
            {resumeData.personalInfo.website && (
              <>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>{resumeData.personalInfo.website}</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="col-span-1">
              {resumeData.skills.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-red-600 rounded-sm mr-2"></div>
                    <h2 className="text-lg font-bold">Core Competencies</h2>
                  </div>
                  <div className="mt-4 space-y-2">
                    {resumeData.skills.map((skill) => (
                      <div key={skill.id} className="rounded border border-red-100 px-3 py-2 bg-red-50">
                        <p className="text-sm font-medium text-red-700">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {resumeData.education.length > 0 && (
                <div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-red-600 rounded-sm mr-2"></div>
                    <h2 className="text-lg font-bold">Education</h2>
                  </div>
                  <div className="mt-4 space-y-4">
                    {resumeData.education.map((edu) => (
                      <div key={edu.id}>
                        <h3 className="font-bold">{edu.degree}</h3>
                        <p className="text-red-600 text-sm">{edu.institution}</p>
                        <p className="text-sm text-gray-600 mb-1">
                          {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                          {edu.current 
                            ? ' Present' 
                            : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                        </p>
                        {edu.description && <p className="text-sm text-gray-600">{edu.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column */}
            <div className="col-span-2">
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-600 rounded-sm mr-2"></div>
                  <h2 className="text-lg font-bold">Professional Summary</h2>
                </div>
                <div className="mt-4 bg-red-50 border-l-4 border-red-600 p-4">
                  <p className="text-gray-700">{resumeData.personalInfo.summary}</p>
                </div>
              </div>
              
              {resumeData.experience.length > 0 && (
                <div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-red-600 rounded-sm mr-2"></div>
                    <h2 className="text-lg font-bold">Professional Experience</h2>
                  </div>
                  <div className="mt-4 space-y-5">
                    {resumeData.experience.map((exp) => (
                      <div key={exp.id} className="border-b border-gray-200 pb-5 last:border-b-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-bold text-red-700">{exp.position}</h3>
                          <p className="text-sm text-gray-600">
                            {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                            {exp.current 
                              ? ' Present' 
                              : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                          </p>
                        </div>
                        <p className="font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Insight Matrix Template (Analytics)
  const InsightMatrixTemplate = () => (
    <div className="resume-template-container bg-white h-full">
      <div className="flex h-full">
        {/* Header Section - vertical left bar with name */}
        <div className="w-16 bg-violet-800 flex flex-col items-center justify-center p-4">
          <div className="vertical-text text-white font-bold text-xl tracking-widest transform -rotate-90 whitespace-nowrap">
            {resumeData.personalInfo.name}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Top section with title and contact */}
          <div className="bg-violet-100 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-2xl font-light text-violet-800">{resumeData.personalInfo.title}</p>
                <p className="text-sm text-violet-600 mt-1 italic">{resumeData.personalInfo.summary?.substring(0, 60)}...</p>
              </div>
              <div className="flex flex-col items-end text-sm text-violet-700">
                {resumeData.personalInfo.email && <p className="mb-1">{resumeData.personalInfo.email}</p>}
                {resumeData.personalInfo.phone && <p className="mb-1">{resumeData.personalInfo.phone}</p>}
                {resumeData.personalInfo.location && <p className="mb-1">{resumeData.personalInfo.location}</p>}
                {resumeData.personalInfo.website && <p>{resumeData.personalInfo.website}</p>}
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="grid grid-cols-12 gap-0">
            {/* Left Content Area */}
            <div className="col-span-8 p-6">
              <div className="mb-8">
                <h2 className="text-violet-800 font-bold text-sm uppercase tracking-wide border-b-2 border-violet-200 pb-1 mb-4">Professional Summary</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{resumeData.personalInfo.summary}</p>
              </div>
              
              {resumeData.experience.length > 0 && (
                <div>
                  <h2 className="text-violet-800 font-bold text-sm uppercase tracking-wide border-b-2 border-violet-200 pb-1 mb-4">Experience & Key Results</h2>
                  {resumeData.experience.map((exp, index) => (
                    <div key={exp.id} className="mb-5 last:mb-0">
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline">
                          <span className="text-xs font-bold bg-violet-800 text-white w-5 h-5 rounded-full flex items-center justify-center mr-2">
                            {index + 1}
                          </span>
                          <h3 className="font-semibold">{exp.position}</h3>
                        </div>
                        <p className="text-xs text-violet-600 font-medium">
                          {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                          {exp.current 
                            ? ' Present' 
                            : exp.endDate && ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                        </p>
                      </div>
                      <p className="text-violet-600 text-sm ml-7">{exp.company}</p>
                      <p className="text-sm text-gray-600 mt-1 ml-7">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Right Content Area */}
            <div className="col-span-4 bg-violet-50 p-6">
              {resumeData.education.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-violet-800 font-bold text-sm uppercase tracking-wide border-b-2 border-violet-200 pb-1 mb-4">Education</h2>
                  {resumeData.education.map((edu) => (
                    <div key={edu.id} className="mb-4 last:mb-0">
                      <h3 className="font-medium text-sm">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                      <p className="text-violet-600 text-xs">{edu.institution}</p>
                      <p className="text-xs text-gray-600 mb-1">
                        {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                        {edu.current 
                          ? ' Present' 
                          : edu.endDate && ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              
              {resumeData.skills.length > 0 && (
                <div>
                  <h2 className="text-violet-800 font-bold text-sm uppercase tracking-wide border-b-2 border-violet-200 pb-1 mb-4">Key Data Skills</h2>
                  <div className="space-y-3">
                    {resumeData.skills.map((skill, index) => (
                      <div key={skill.id}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-800 mr-2"></div>
                            <span className="text-sm">{skill.name}</span>
                          </div>
                          {skill.level && (
                            <span className="text-xs bg-violet-800 text-white px-1.5 py-0.5 rounded">
                              {skill.level}%
                            </span>
                          )}
                        </div>
                        {skill.level && (
                          <div className="mt-1 h-1 bg-violet-100 rounded-full">
                            <div 
                              className="h-1 bg-violet-600 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="resume-preview" className="resume-page">
      {template === "classic" ? (
        <ClassicTemplate />
      ) : template === "modern" ? (
        <ModernTemplate />
      ) : template === "minimal" ? (
        <MinimalTemplate />
      ) : template === "executive" ? (
        <ExecutiveTemplate />
      ) : template === "professional" ? (
        <ProfessionalTemplate />
      ) : template === "creative" ? (
        <CreativeTemplate />
      ) : template === "tech" ? (
        <ModernTemplate />
      ) : template === "academic" ? (
        <ScholarlyImpactTemplate />
      ) : template === "specialist" ? (
        <ExpertAuthorityTemplate />
      ) : template === "analytics" ? (
        <InsightMatrixTemplate />
      ) : (
        <ClassicTemplate />
      )}
    </div>
  );
};

export default ResumePreview;

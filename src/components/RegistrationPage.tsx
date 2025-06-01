import React, { useState } from 'react';
import { CheckCircle, Loader2, AlertCircle, XCircle, Sparkles, Mic, Users, Zap } from 'lucide-react';
import axios from 'axios';
import { validateForm } from '../utils/validation';
import { FormData, FormErrors } from '../types';

const WEBHOOK_URL = import.meta.env.PROD 
  ? "https://podcastagentai.app.n8n.cloud/webhook/9b4a668c-b3a7-43b7-9b5a-ed1ced8cd78a"
  : "/api/webhook";
const TOTAL_TIMEOUT = 10000;

export const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    linkedinUrl: '',
    contentTheme: {
      mainTopic: '',
      targetAudience: '',
      uniquePerspective: ''
    },
    personalStyle: {
      hostingFormat: 'Solo Host',
      tone: '',
      episodeLength: '3 minutes',
      speakingStyle: ''
    }
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    section?: string,
    field?: string
  ) => {
    const { name, value } = e.target;
    
    if (section && field) {
      if ((section === 'personalStyle' && (field === 'hostingFormat' || field === 'episodeLength'))) {
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [field]: value
        }
      }));
      
      if (errors[section as keyof FormErrors]?.[field as keyof typeof errors[keyof FormErrors]]) {
        setErrors(prev => ({
          ...prev,
          [section]: {
            ...prev[section as keyof FormErrors],
            [field]: undefined
          }
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      if (errors[name as keyof FormErrors]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const submitFormWithRetry = async (payload: any): Promise<any> => {
    const startTime = Date.now();
    let lastError: any;

    while (Date.now() - startTime < TOTAL_TIMEOUT) {
      try {
        const remainingTime = TOTAL_TIMEOUT - (Date.now() - startTime);
        if (remainingTime <= 0) break;

        const response = await axios.post(WEBHOOK_URL, payload, {
          headers: { 'Content-Type': 'application/json' },
          timeout: remainingTime
        });
        return response;
      } catch (error) {
        lastError = error;
        setRetryCount(prev => prev + 1);
        
        const retryDelay = Math.min(1000 * Math.pow(2, retryCount), 3000);
        if (Date.now() + retryDelay - startTime >= TOTAL_TIMEOUT) break;
        
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }
    }
    throw lastError;
  };
  
  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      linkedinUrl: '',
      contentTheme: {
        mainTopic: '',
        targetAudience: '',
        uniquePerspective: ''
      },
      personalStyle: {
        hostingFormat: 'Solo Host',
        tone: '',
        episodeLength: '3 minutes',
        speakingStyle: ''
      }
    });
    setErrors({});
    setRetryCount(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setRetryCount(0);
    
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const payload = {
          ...formData,
          submittedAt: new Date().toISOString()
        };

        const response = await submitFormWithRetry(payload);
        console.log('Form submission response:', response.data);
        setSubmitSuccess(true);
        resetForm();
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Form submission error:', error);
        if (axios.isAxiosError(error)) {
          if (error.code === 'ECONNABORTED') {
            setSubmitError('Request timed out after 10 seconds. Please try again.');
          } else if (!error.response) {
            setSubmitError('Network error. Please check your internet connection and try again.');
          } else {
            const errorMessage = error.response?.data?.message || error.message;
            setSubmitError(`Failed to submit form: ${errorMessage}`);
          }
        } else {
          setSubmitError('Something went wrong. Please try submitting your request again.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const renderTextArea = (
    section: string,
    field: string,
    label: string,
    placeholder: string,
    error?: string
  ) => (
    <div>
      <label htmlFor={`${section}-${field}`} className="input-label">{label}</label>
      <textarea
        id={`${section}-${field}`}
        className={`input-field min-h-[100px] resize-y ${error ? 'border-[#FF3B30]' : ''}`}
        value={formData[section as keyof FormData][field as keyof typeof formData[keyof FormData]]}
        onChange={(e) => handleInputChange(e, section, field)}
        placeholder={placeholder}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );

  const renderSelect = (
    section: string,
    field: string,
    label: string,
    options: string[],
    error?: string,
    disabled?: boolean
  ) => (
    <div>
      <label htmlFor={`${section}-${field}`} className="input-label">{label}</label>
      <select
        id={`${section}-${field}`}
        className={`input-field ${error ? 'border-[#FF3B30]' : ''} ${disabled ? 'bg-gray-100' : ''}`}
        value={formData[section as keyof FormData][field as keyof typeof formData[keyof FormData]]}
        onChange={(e) => handleInputChange(e, section, field)}
        disabled={disabled}
      >
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
  
  return (
    <>
      <div className="grain-overlay"></div>
      <div className="min-h-screen py-12 px-4 sm:px-6 relative z-10">
        {submitSuccess && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
            <div className="glass-card p-4 flex items-center animate-slideDown">
              <Sparkles className="text-neon w-5 h-5 mr-3 flex-shrink-0" />
              <p className="text-white font-medium text-sm">
                Success! Your personalized podcast will be generated and emailed to you in a few hours.
              </p>
            </div>
          </div>
        )}

        {submitError && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
            <div className="glass-card border-red-400/30 p-4 flex items-center animate-slideDown">
              <AlertCircle className="text-red-300 w-5 h-5 mr-3 flex-shrink-0" />
              <p className="text-red-200 font-medium text-sm flex-grow">{submitError}</p>
              <button
                onClick={() => setSubmitError(null)}
                className="ml-3 text-red-300 hover:text-red-200"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <div className="w-full max-w-[800px] mx-auto relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-electric-blue/20 rounded-full blur-3xl floating-shape"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon/20 rounded-full blur-3xl floating-shape" style={{ animationDelay: '-2s' }}></div>

          <div className="text-center mb-12">
            <h1 className="text-headline font-bold font-outfit leading-tight mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Launch Your AI Podcast - Fast
            </h1>
            <p className="text-body text-white/70">
              Instantly create engaging podcasts with AI - No experience needed
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="form-section">
              <h2 className="text-[20px] font-semibold mb-1">Personal Information</h2>
              <p className="text-gray-500 text-[15px] mb-5">Tell us about yourself</p>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="input-label">Your Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`input-field ${errors.fullName ? 'border-[#FF3B30]' : ''}`}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                  />
                  {errors.fullName && <p className="input-error">{errors.fullName}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="input-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`input-field ${errors.email ? 'border-[#FF3B30]' : ''}`}
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="input-error">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="linkedinUrl" className="input-label">LinkedIn Profile</label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    className={`input-field ${errors.linkedinUrl ? 'border-[#FF3B30]' : ''}`}
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    placeholder="linkedin.com/in/johnsmith"
                  />
                  {errors.linkedinUrl && <p className="input-error">{errors.linkedinUrl}</p>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2 className="text-[20px] font-semibold mb-1">Content Theme & Focus</h2>
              <p className="text-gray-500 text-[15px] mb-5">Define your podcast's core content and audience</p>
              
              <div className="space-y-5">
                {renderTextArea(
                  'contentTheme',
                  'mainTopic',
                  'Main Topic(s)',
                  'Describe the main topics your podcast will cover',
                  errors.contentTheme?.mainTopic
                )}
                
                {renderTextArea(
                  'contentTheme',
                  'targetAudience',
                  'Target Audience',
                  'Who is your ideal listener? What are their interests and needs?',
                  errors.contentTheme?.targetAudience
                )}
                
                {renderTextArea(
                  'contentTheme',
                  'uniquePerspective',
                  'Unique Perspective',
                  'What unique angle or perspective will you bring to these topics?',
                  errors.contentTheme?.uniquePerspective
                )}
              </div>
            </div>

            <div className="form-section">
              <h2 className="text-[20px] font-semibold mb-1">Personal Style & Format</h2>
              <p className="text-gray-500 text-[15px] mb-5">Define how you'll present your content</p>
              
              <div className="space-y-5">
                <div>
                  <label className="input-label">Hosting Format</label>
                  <input
                    type="text"
                    className="input-field bg-gray-100 text-deep-purple font-medium"
                    value="Solo Host"
                    disabled
                  />
                </div>
                
                {renderSelect(
                  'personalStyle',
                  'tone',
                  'Podcast Tone',
                  ['Casual & Conversational', 'Professional & Educational', 'Entertainment-focused', 'Inspirational'],
                  errors.personalStyle?.tone
                )}
                
                <div>
                  <label className="input-label">Episode Length</label>
                  <input
                    type="text"
                    className="input-field bg-gray-100 text-deep-purple font-medium"
                    value="3 minutes"
                    disabled
                  />
                </div>
                
                {renderTextArea(
                  'personalStyle',
                  'speakingStyle',
                  'Speaking Style',
                  'Describe your natural speaking style and how you\'ll engage with listeners',
                  errors.personalStyle?.speakingStyle
                )}
              </div>
            </div>
            
            <div className="flex flex-col items-center pt-8">
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={24} className="animate-spin mr-2 inline" />
                    {retryCount > 0 ? `Retrying... (${retryCount})` : 'Processing...'}
                  </>
                ) : (
                  <>
                    <Sparkles className="inline-block mr-2 -mt-1" size={20} />
                    Create My Podcast
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
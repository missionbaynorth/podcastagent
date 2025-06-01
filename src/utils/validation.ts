import { FormData, FormErrors } from '../types';

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  // Validate full name
  if (!formData.fullName.trim()) {
    errors.fullName = 'Please enter your full name';
  } else if (formData.fullName.trim().length < 3) {
    errors.fullName = 'Name must be at least 3 characters';
  }
  
  // Validate email
  if (!formData.email.trim()) {
    errors.email = 'Please enter your email address';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Validate LinkedIn URL
  if (!formData.linkedinUrl.trim()) {
    errors.linkedinUrl = 'Please enter your LinkedIn profile URL';
  } else if (!/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[\w-]+\/?$/.test(formData.linkedinUrl)) {
    errors.linkedinUrl = 'Please enter a valid LinkedIn profile URL (e.g., linkedin.com/in/username)';
  }
  
  // Validate Content Theme
  const contentThemeErrors: any = {};
  if (!formData.contentTheme.mainTopic.trim()) {
    contentThemeErrors.mainTopic = 'Please specify your main topic';
  }
  if (!formData.contentTheme.targetAudience.trim()) {
    contentThemeErrors.targetAudience = 'Please describe your target audience';
  }
  if (!formData.contentTheme.uniquePerspective.trim()) {
    contentThemeErrors.uniquePerspective = 'Please explain your unique perspective';
  }
  if (Object.keys(contentThemeErrors).length > 0) {
    errors.contentTheme = contentThemeErrors;
  }

  // Validate Personal Style
  const personalStyleErrors: any = {};
  if (!formData.personalStyle.hostingFormat.trim()) {
    personalStyleErrors.hostingFormat = 'Please select a hosting format';
  }
  if (!formData.personalStyle.tone.trim()) {
    personalStyleErrors.tone = 'Please specify your podcast tone';
  }
  if (!formData.personalStyle.episodeLength.trim()) {
    personalStyleErrors.episodeLength = 'Please specify episode length';
  }
  if (!formData.personalStyle.speakingStyle.trim()) {
    personalStyleErrors.speakingStyle = 'Please describe your speaking style';
  }
  if (Object.keys(personalStyleErrors).length > 0) {
    errors.personalStyle = personalStyleErrors;
  }
  
  return errors;
};
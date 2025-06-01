export type FormData = {
  fullName: string;
  email: string;
  linkedinUrl: string;
  contentTheme: {
    mainTopic: string;
    targetAudience: string;
    uniquePerspective: string;
  };
  personalStyle: {
    hostingFormat: string;
    tone: string;
    episodeLength: string;
    speakingStyle: string;
  };
};

export type FormErrors = {
  fullName?: string;
  email?: string;
  linkedinUrl?: string;
  contentTheme?: {
    mainTopic?: string;
    targetAudience?: string;
    uniquePerspective?: string;
  };
  personalStyle?: {
    hostingFormat?: string;
    tone?: string;
    episodeLength?: string;
    speakingStyle?: string;
  };
};
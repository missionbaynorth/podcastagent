import React from 'react';
import { X, Share2, AlertCircle, RefreshCcw } from 'lucide-react';

interface PodcastModalProps {
  isOpen: boolean;
  onClose: () => void;
  podcastUrl?: string;
  error?: boolean;
  onRetry?: () => void;
}

export const PodcastModal: React.FC<PodcastModalProps> = ({
  isOpen,
  onClose,
  podcastUrl,
  error,
  onRetry
}) => {
  if (!isOpen) return null;

  const handleShare = async () => {
    if (podcastUrl && navigator.share) {
      try {
        await navigator.share({
          title: 'Check out my AI-generated podcast!',
          url: podcastUrl
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(podcastUrl || '');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative glass-card w-full max-w-lg p-6 space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {error ? (
          <div className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Podcast Generation Timeout</h3>
            <p className="text-white/70 mb-6">
              We couldn't retrieve your podcast within the expected time. This might be due to high demand or technical issues.
            </p>
            <div className="space-x-4">
              <button
                onClick={onRetry}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors inline-flex items-center"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              <a
                href="mailto:support@podcastagent.ai"
                className="text-neon hover:underline"
              >
                Contact Support
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Your Podcast is Ready!</h3>
              <p className="text-white/70">Listen to your AI-generated podcast and share it with others.</p>
            </div>

            {podcastUrl && (
              <>
                <div className="rounded-lg overflow-hidden bg-white/5 p-4">
                  <audio
                    controls
                    className="w-full"
                    src={podcastUrl}
                    onError={(e) => console.error('Audio loading error:', e)}
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <a
                    href={podcastUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon hover:underline break-all"
                  >
                    {podcastUrl}
                  </a>
                  <button
                    onClick={handleShare}
                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                    title="Share podcast"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
'use client';
import React, { useState } from 'react';
import Modal from '@/components/ui/Modal';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const SchedulingModal: React.FC<SchedulingModalProps> = ({ 
  isOpen, 
  onClose, 
  url
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      title="Schedule Your Consultation"
      size="xl"
    >
      <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading scheduling interface...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={url}
          width="100%"
          height="100%"
          frameBorder="0"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          className="w-full h-full"
          title="Schedule Consultation"
        />
      </div>
    </Modal>
  );
};

export default SchedulingModal;
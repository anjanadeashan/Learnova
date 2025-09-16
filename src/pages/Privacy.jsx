import React from 'react';

const Privacy = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Privacy Policy</h1>
        <p>How we protect and handle your information</p>
      </div>
      
      <div className="privacy-content">
        <div className="privacy-section">
          <h2>Information We Collect</h2>
          <p>
            When you use LEARNOVA, we may collect the following types of information:
          </p>
          <ul>
            <li>Personal information (name, email address, academic details)</li>
            <li>Usage data (how you interact with our platform)</li>
            <li>Device information (browser type, operating system)</li>
            <li>Uploaded content (notes, files, messages)</li>
          </ul>
        </div>
        
        <div className="privacy-section">
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Personalize your learning experience</li>
            <li>Communicate with you about platform updates</li>
            <li>Ensure platform security and prevent misuse</li>
            <li>Analyze usage patterns to enhance functionality</li>
          </ul>
        </div>
        
        <div className="privacy-section">
          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. 
            We may share information only in the following circumstances:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>With service providers who assist in platform operations</li>
          </ul>
        </div>
        
        <div className="privacy-section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect 
            your personal information against unauthorized access, alteration, disclosure, 
            or destruction.
          </p>
        </div>
        
        <div className="privacy-section">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Delete your account and data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </div>
        
        <div className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> privacy@learnova.com
            <br />
            <strong>Phone:</strong> +94 11 234 5678
          </p>
        </div>
        
        <div className="privacy-footer">
          <p><em>Last updated: September 2025</em></p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
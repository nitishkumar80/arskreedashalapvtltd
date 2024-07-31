import React from 'react';
import AdmissionForm from './AdmissionForm';

const AdmissionPage = () => {
  return (
    <div>
      <AdmissionForm role="Coach" />
      <AdmissionForm role="Champ" />
      <AdmissionForm role="Guest" />
    </div>
  );
};

export default AdmissionPage;

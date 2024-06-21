import React from 'react';
import Button from '../../components/core/Button';

interface CustomerFormButtonsProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  viewMode: 'view' | 'edit' | null;
}

const CustomerFormButtons: React.FC<CustomerFormButtonsProps> = ({ handleSubmit, viewMode }) => {
  return (
    <div>
      {viewMode !== 'view' && <Button label="Register" type="submit" className="w-full" />}
    </div>
  );
};

export default CustomerFormButtons;

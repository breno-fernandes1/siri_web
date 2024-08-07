// components/EntrarButton.tsx
import React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const EntrarButton: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/informacoes-empresa');
  };

  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={handleButtonClick}
    >
      Entrar
    </Button>
  );
};

export default EntrarButton;

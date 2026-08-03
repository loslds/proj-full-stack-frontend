
import { ReactNode } from 'react';

interface PropsFormDefautText {
  children?: ReactNode;
  titulo?: string;
}

export const FormHlpDefautText= ({
  children,
  titulo,
}: PropsFormDefautText) => {
  return (
    <>
      <h2>{titulo}</h2>

      <div>
        {children}
      </div>
    </>
  );
};


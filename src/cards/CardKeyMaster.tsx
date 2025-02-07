
import React from 'react';
import { DateToCecular } from '../funcs/funcs/DateToCecular';

import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';

interface PropsCardKeyMaster {
  chave?: string | null;
}
export const CardKeyMaster = ({ chave }: PropsCardKeyMaster) => {
  
  const [show, setShow ] = React.useState<boolean | null>(false);
  const chavedodia = DateToCecular(Date());

  if ( chavedodia === chave) {
    setShow(true);
  }

  return (
    <CardModalCenter>
      <CardModalTextoColumn>
        { show ? ( <h2>No momento a chave Master é: [ { chave }] ].</h2>
        ) : (<p> Acesso negado...</p> )}
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};


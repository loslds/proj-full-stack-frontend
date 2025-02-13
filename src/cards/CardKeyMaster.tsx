
//{show ? ( <h2>No momento a chave Master é: [ { chave }] ].</h2>
//) : (<p> Acesso negado...</p> ) }

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CardModalCenter } from '../modal/CardModalCenter';
//import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { ContentCardCarCollunsFormPage } from '../components/ContentCardCollunsFormPage.tsx';
import { ContentInputMainPage } from '../components/ContentInputMainPage';
import { ContentSidePageBottonLabel } from '../components/ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonEnabled } from '../components/ContentPageButtonDefImgEnabled.tsx'
import bt_enviar from '../assets/svgs/bt_enviar.svg';

interface PropsCardKeyMaster {
  chave?: string | null;
}
export const CardKeyMaster = ({ chave }: PropsCardKeyMaster) => {

  const navigate = useNavigate();
    const goto = (path: string) => {
      return () => {
        navigate(path);
      };
    };

  const [btnok, setbtnok] = useState(false);
  const [show, setShow] = useState(false);
  const [chaveDigitada, setChaveDigitada] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChaveDigitada(event.target.value);
  };

  React.useEffect(() => {
    if (chaveDigitada.length === 8) {
      setbtnok(true);
      setShow(true);
    } else {
      setbtnok(false);
    }
  },[chaveDigitada])

 const handlerCheckBtnOk = () => {
   if (chaveDigitada === chave) {
     alert('Chave correta...')
   } else {
    alert('Chave errada...')
   }
 };

  return (
    <CardModalCenter>
      <ContentCardCarCollunsFormPage
        open={true}
        pwidth={'100%'}
        pheight={'35%'}
      >
        <ContentInputMainPage>
          <form name="chave">
            <br />
            <label>Digite a Chave Master para continuar:</label>
            <br />

            <input
              name="chave"
              type="password"
              value={chaveDigitada}
              onChange={handleChange}
              placeholder="Digite a chave..."
              size={8}
              autoFocus={true}
            />
            <br />
            <br />
            <h1>Chave : {chave}</h1>
            <br />
          </form>            
            
          <ContentSidePageBottonLabel istitl={true} title={'Ok.: '}>
            <ContentSidePageBottonEnabled
              pxheight={'40px'}
              img={bt_enviar}
              titbtn={'Check...'}
              onclick={handlerCheckBtnOk}
              disabled={btnok}
            />
          </ContentSidePageBottonLabel>
          {show ? ( <h2>Confirma Edição ?.</h2>
          ) : (<p> Aguardando Edição...</p> ) }

        </ContentInputMainPage>
      </ContentCardCarCollunsFormPage>
    </CardModalCenter>
  );
};

// {show ? ( <h2>No momento a chave Master é: [ { chave }] ].</h2>


import React from "react";

import { checkConnection, checkTables } from '../api/dbApi'; // Importa as funções da API

import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { ContentCardPrintText } from '../components/ContentCardPrintText';
import { ContentCardPrintTextVerm } from '../components/ContentCardPrintTextVerm';
import { ContentCardPrintTextVerde } from '../components/ContentCardPrintTextVerde';
import { CardHlpFooter } from './CardHlpFooter';


interface CardCheckingServiceProps {
  imgchksrvpage?: string;
  onclosesair?: () => void;
  checando?: boolean;
}
const CardCheckingServices: React.FC = ({imgchksrvpage, checando, onclosesair}: CardCheckingServiceProps) => {
  const [ischecando, setIsChecando] = React.useState<boolean | null>(null);
  const [isConnected, setIsConnected] = React.useState<boolean | null>(null);
  const [tablesExist, setTablesExist] = React.useState<boolean | null>(null);
  //const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  //const [status, setStatus] = React.useState<string | null>(null);
  //const [error, setError] = React.useState<string | null>(null);

  // UseEffect para verificar a conexão e as tabelas assim que o componente carregar
  React.useEffect(() => {
    // Função para verificar a conexão com o banco
    const verifyConnection = async () => {
      const connectionResult = await checkConnection();
      if (connectionResult.success) {
        setIsConnected(true);
        // Se estiver conectado, verifica as tabelas
        const tablesResult = await checkTables();
        if (tablesResult.success) {
          setTablesExist(true);
          setIsChecando(true);
        } else {
          setTablesExist(false);
          //setErrorMessage(tablesResult.message); // Mensagem de erro caso as tabelas não existam
        }
      } else {
        setIsConnected(false);
        //setErrorMessage(connectionResult.message); // Mensagem de erro caso a conexão falhe
      }

    };
  
    // Chama a função
    verifyConnection();
  }, []);

  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={'80px'}
          pwidth={'220px'}
          img={imgchksrvpage}
        />
      </CardModalAround>
      <CardModalTextoColumn>
        {isConnected === null ? (
          <ContentCardPrintText>
            <h4>Verificando a conexão com o banco...</h4>  
          </ContentCardPrintText>
        ) : null }
        { !isConnected ? (
          <ContentCardPrintTextVerm>
            <h4>Verificando a conexão com o banco...</h4>  
          </ContentCardPrintTextVerm>
        ) : null }
        { isConnected ? (
          <ContentCardPrintTextVerde>
            <h4>Conexão de Rede Ativada com DataBase...</h4>  
          </ContentCardPrintTextVerde>
        ) : null }
        { tablesExist === null ? (
          <ContentCardPrintText>
            <h4>Verificando a existência dos Bancos de Dados...</h4>
          </ContentCardPrintText>
        ) : null }
        { !tablesExist ? (
          <ContentCardPrintTextVerm>
            <h4>Bancos de Dados "Inexistênte" ou Deficitário".</h4>
          </ContentCardPrintTextVerm>  
        ) : null }
        { tablesExist ? (
          <ContentCardPrintTextVerde>
            <h4>Bancos de Dados "Completos".</h4>
          </ContentCardPrintTextVerde>  
        ) : null }
        { isConnected && tablesExist ? (
          checando = true
        ): null}
      
        <CardHlpFooter
          label="PÁGINA-> CHECKING SERVICE."
          texto="Para RETORNAR aguarde Apresentação ou clicar na imagem de referida a Tabela para sua   atividade e usufluir do Sistema."
          onclosesair={onclosesair}
        />
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};

export default CardCheckingServices;








  //const [isConnected, setIsConnected] = React.useState<boolean | null>(null);
  //const [tablesExist, setTablesExist] = React.useState<boolean | null>(null);
  //const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

// UseEffect para verificar a conexão e as tabelas assim que o componente carregar
  // React.useEffect(() => {
  
  //   // Função para verificar a conexão com o banco
  //   const verifyConnection = async () => {
  //     const connectionResult = await checkConnection();
  //     if (connectionResult.success) {
  //       setIsConnected(true);
  //       // Se estiver conectado, verifica as tabelas
  //       const tablesResult = await checkTables();
  //       if (tablesResult.success) {
  //         setTablesExist(true);
  //       } else {
  //         setTablesExist(false);
  //         setErrorMessage(tablesResult.message); // Mensagem de erro caso as tabelas não existam
  //       }
  //     } else {
  //       setIsConnected(false);
  //       setErrorMessage(connectionResult.message); // Mensagem de erro caso a conexão falhe
  //     }
  //   };

  //   // Chama a função
  //   verifyConnection();
  // }, []); // O array vazio [] faz com que a função execute apenas na montagem do componente

  // if (!isConectado) {

  // }



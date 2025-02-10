
import React from "react";

import { checkConnection, checkTables } from '../api/dbApi'; // Importa as funções da API

import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';


interface CardCheckingServiceProps {
  imgchksrvpage?: string;
  onclosesair?: () => void;
}
const CardCheckingServices: React.FC = ({imgchksrvpage, onclosesair}: CardCheckingServiceProps) => {

  const [isConnected, setIsConnected] = React.useState<boolean | null>(null);
  const [tablesExist, setTablesExist] = React.useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
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
        } else {
          setTablesExist(false);
          setErrorMessage(tablesResult.message); // Mensagem de erro caso as tabelas não existam
        }
      } else {
        setIsConnected(false);
        setErrorMessage(connectionResult.message); // Mensagem de erro caso a conexão falhe
      }
    };
  
    // Chama a função
    verifyConnection();
  }, []);

  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={'110px'}
          pwidth={'220px'}
          img={imgchksrvpage}
        />
      </CardModalAround>
      <CardModalTextoColumn>
        {isConnected === null ? (
          <p>Verificando a conexão com o banco...</p>
        ) : isConnected ? (
          tablesExist === null ? (
            <p>Verificando a existência das tabelas...</p>
          ) : tablesExist ? (
            <p>Todas as tabelas necessárias estão presentes.</p>
          ) : (
            <p style={{ color: 'red' }}>{errorMessage}</p>
          )
        ) : (
          <p style={{ color: 'red' }}>{errorMessage}</p>
        )}
      
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



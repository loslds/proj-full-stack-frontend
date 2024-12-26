// filtra em TB_RESGATE
// idempr === id_empresa;
// nmempr === id_empresa;
// cpf === cpf_origem
// se encontrar continua a filtrar
// caso mdlog === 1             (opção E-mail.)
// mail === mail_origem
// caso mdlog === 2             (opção E-mail Resgate.)
// mail === mailresg_origem
// caso mdlog === 3             (opção Celular via SMS.)
// cell === fn_sms
// caso mdlog === 4             (opção Celular via Whatsapp.)
// cell === fn_zap
// caso mdlog === 5            (opção Peguntas.)
// perg1 === perg_1
// perg2 === perg_2
// perg3 === perg_3
// resg1 === resg_1
// resg2 === resg_2
// resg3 === resg_3
// se tiver mais que um login filtra o de mesmo modulo

import React, { useState, useCallback, useEffect } from "react";

import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useNavigate } from "react-router-dom";
import LayoutResgatar from "../layouts/LayoutResgatar";
import useEmpresas from "../../api/acess/useEmpresas";
import lg_resgate from "../../assets/svgs/lg_resgate.svg";
import bt_help from "../../assets/svgs/bt_help.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";
import bt_close from "../../assets/svgs/bt_close.svg";
import bt_setaesq from "../../assets/svgs/bt_setaesq.svg";
import bt_setadir from "../../assets/svgs/bt_setadir.svg";
import { CardHlpResgateLogo } from "../../cards/CardHlpResgateLogo";
import { CardHlpResgatePage } from "../../cards/CardHlpResgatePage";
import { CardModalErro } from "../../cards/CardModalErro";

import {
  isCpfValid,
  isExistsCPF,
  isValidarEmail,
  MasckedEmail,
  isFoneCValid,
  MasckedFoneC,
  VerPergResp,
  isValidarCpf,
} from "../../funcs/ErroEdicao";
import { ContentCardPageMain } from "../ContentCardPageMain";
import { ContentCardPage } from "../ContentCardPage";
import { ContentCardPageTitle } from "../ContentCardPageTitle";
import { ContentCardBoxDialogo } from "../ContentCardBoxDialogo";
import { ContentCardDialogoTitle } from "../ContentCardDialogoTitle";
import { ContainerSBItensModMn } from "../sidebar/ContainerSBItensModMn";
import { ContentSidePageBottonLabel } from "../ContentSidePageBottonLabel";
import { ContentSidePageBottonButton } from "../ContentSidePageBottonButton";
import { PageModal } from "./PageModal";

const Resgatar: React.FC = () => {
  const [mdlog, setMdlog] = useState(0);
  const [nmlog, setNmlog] = useState("");
  const [boolstart, setBoolStart] = useState(false);
  const [boolmail, setBoolMail] = useState(false);
  const [boolcell, setBoolCell] = useState(false);
  const [boolresp, setBoolResp] = useState(false);

  const { empresas, loading, error } = useEmpresas();
  const [selectedEmpresa, setSelectedEmpresa] = React.useState<number | null>(
    null
  );

  const [idempr, setIdEmpr] = useState(0);
  const [boolempr, setBoolEmpr] = useState(false);

  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");

  const [perg1, setPerg1] = useState("Qual o Veículo que mais gosta ?");
  const [resp1, setResp1] = useState("");
  const [perg2, setPerg2] = useState("Qual o Nome que você acha bonito ?");
  const [resp2, setResp2] = useState("");
  const [perg3, setPerg3] = useState("Que animal você mais gosta ?");
  const [resp3, setResp3] = useState("");

  const [btncontinua, setBtnContinua] = useState(false);

  const [boolconf, setBoolConf] = useState(false);
  const [btnconfirma, setBtnConfirma] = useState(false);

  const [boolenvia, setBoolEnvia] = useState(false);
  const [btnenvia, setBtnEnvia] = useState(false);

  const [boolenviamail, setBoolEnviaMail] = useState(false);
  const [boolenviacell, setBoolEnviaCell] = useState(false);
  const [boolenviaperg, setBoolEnviaPerg] = useState(false);

  const [boolrecebe, setBoolRecebe] = useState(false);
  const [btnrecebe, setBtnRecebe] = useState(false);
  const [boolrecebemail, setBoolRecebeMail] = useState(false);
  const [boolrecebecell, setBoolRecebeCell] = useState(false);
  const [boolrecebeperg, setBoolRecebePerg] = useState(false);

  const [boolatender, setBoolAtender] = useState(false);
  const [btnatender, setBtnAtender] = useState(false);

  const [msgerro, setMsgErro] = useState("");
  const [boolerro, setBoolErro] = useState(false);

  const [msgerromd, setMsgErroMd] = useState("");
  const [msgerroemp, setMsgErroEmp] = useState("");
  const [msgerrocpf, setMsgErroCpf] = useState("");
  const [msgerromail, setMsgErroMail] = useState("");
  const [msgerrocell, setMsgErroCell] = useState("");
  const [msgerroresp1, setMsgErroResp1] = useState("");
  const [msgerroresp2, setMsgErroResp2] = useState("");
  const [msgerroresp3, setMsgErroResp3] = useState("");

  const DescrOpc = [
    "Opções:",
    "E-mail.",
    "E-mail Resgate",
    "Celular via SMS.",
    "Celular via Whatsapp.",
    "Peguntas.",
  ];

  const [theme, setTheme] = useState(light);
  const [ischeck, setIscheck] = useState(false);
  const ToggleTheme = () => {
    if (theme.name === "dark") {
      setTheme(light);
      setIscheck(true);
    } else {
      setTheme(dark);
      setIscheck(false);
    }
  };

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const [logoRes, setLogoRes] = useState(false);
  const handlerLogoRes = useCallback(() => {
    setLogoRes((oldState) => !oldState);
  }, []);

  const [helppageres, setHelpPageRes] = useState(false);
  const handlerHelpPageRes = useCallback(() => {
    setHelpPageRes((oldState) => !oldState);
  }, []);

  useEffect(() => {
    if (error) {
      setMsgErroEmp("Erro ao carregar empresas. Por favor, tente novamente.");
    }
  }, [error]);

  useEffect(() => {
    setMsgErroMd("");
    setMsgErroEmp("");
    setMsgErroCpf("");
    setMsgErroMail("");
    setMsgErroCell("");
    setMsgErroResp1("");
    setMsgErroResp2("");
    setMsgErroResp3("");

    const newNmlog = DescrOpc[mdlog];
    setNmlog(newNmlog);
    if (mdlog === 0 || idempr === 0 || cpf === "") {
      setBoolStart(true);
      if (mdlog === 0 || idempr === 0 || cpf === "") {
        if (mdlog === 0) {
          setMsgErroMd("Aguardando Seleção.");
        }
        if (idempr === 0) {
          setMsgErroEmp("Aguardando Empresa.");
        }
        if (cpf === "") {
          setMsgErroCpf("Aguardando C.P.F.");
        }
        setBtnContinua(true);
      }
    }
    if (boolmail) {
      if (email === "" || email === null) {
        setMsgErroMail("Aguardando Edição E-MAIL.");
      }
      setBtnContinua(true);
    }
    if (boolcell) {
      if (cell === "" || cell === null) {
        setMsgErroCell("Aguardando Edição Nº Celular.");
      }
      setBtnContinua(true);
    }
    if (boolresp) {
      if (resp1 === "" || resp1 === null) {
        setMsgErroResp1("Aguardando 1ª Resposta.");
      }
      if (resp2 === "" || resp2 === null) {
        setMsgErroResp1("Aguardando 2ª Resposta.");
      }
      if (resp3 === "" || resp3 === null) {
        setMsgErroResp1("Aguardando 3ª Resposta.");
      }
      setBtnContinua(true);
    }

    if (boolconf) {
      setBtnConfirma(true);
    }
    if (boolenvia) {
      setBtnEnvia(true);
    }
    if (boolrecebe) {
      setBtnRecebe(true);
    }
    if (boolatender) {
      setBtnAtender(true);
    }
  }, [
    boolstart,
    mdlog,
    idempr,
    cpf,
    boolmail,
    email,
    boolcell,
    cell,
    boolresp,
    resp1,
    resp2,
    resp3,
    boolconf,
    boolenvia,
    boolrecebe,
    boolatender,
  ]);

  const handleEmpresaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    setIdEmpr(selectedId);
  };

  // Clique no botão "Continuar"
  const handlerBtnContinua = () => {
    if (boolstart) {
      if (mdlog > 0 || idempr > 0 || cpf.length === 11) {
        if (!isCpfValid(cpf)) {
          setMsgErroCpf("Erro na Edição CPF.");
        } else {
          if (!isExistsCPF(cpf)) {
            setMsgErroCpf('C.P.F. não é "VÁLIDO".');
          } else {
            setBtnContinua(false);
            if (mdlog === 1 || mdlog === 2) {
              setBoolStart(false);
              setBoolMail(true);
            } else if (mdlog === 3 || mdlog === 4) {
              setBoolStart(false);
              setBoolCell(true);
            } else if (mdlog === 5) {
              setBoolStart(false);
              setBoolResp(true);
            }
          }
        }
      }
    } else if (boolmail) {
      if (email !== "") {
        if (!isValidarEmail(email)) {
          setMsgErroMail("Erro na Edição E-MAIL.");
        } else {
          setBtnContinua(false);
          setBoolMail(false);
          setBoolConf(true);
        }
      }
    } else if (boolcell) {
      if (cell !== "") {
        if (!isFoneCValid(cell)) {
          setMsgErroCell("Erro de Edição Nº Celular.");
        } else {
          setBtnContinua(false);
          setBoolCell(false);
          setBoolConf(true);
        }
      }
    } else if (boolresp) {
      if (resp1 === "" || resp1 === null) {
        setMsgErroResp1("Aguardando 1ª Resposta.");
      }
      if (resp2 === "" || resp2 === null) {
        setMsgErroResp2("Aguardando 2ª Resposta.");
      }
      if (resp3 === "" || resp3 === null) {
        setMsgErroResp3("Aguardando 3ª Resposta.");
      }
      if (resp1 !== "" && resp2 !== "" && resp3 !== "") {
        setBtnContinua(false);
        setBoolResp(false);
        setBoolConf(true);
      }
    }
  };

  const handlerConfirmar = () => {
    setBtnConfirma(false);
    if (boolconf) {
      setBoolConf(false);
      if (mdlog === 1 || mdlog === 2) {
        setBoolEnvia(true);
        setBoolEnviaMail(true);
      }
      if (mdlog === 3 || mdlog === 4) {
        setBoolEnvia(true);
        setBoolEnviaCell(true);
      }
      if (mdlog === 5) {
        setBoolEnvia(true);
        setBoolEnviaPerg(true);
      }
    }
  };

  const handlerEnviar = () => {
    setBtnEnvia(false);
    if (boolenvia) {
      if (mdlog === 1 || mdlog === 2) {
        setBoolRecebe(true);
        setBoolRecebeMail(true);
      }
      if (mdlog === 3 || mdlog === 4) {
        setBoolRecebe(true);
        setBoolRecebeCell(true);
      }
      if (mdlog === 5) {
        setBoolRecebe(true);
        setBoolRecebePerg(true);
      }
    }
  };

  const handlerReceber = () => {
    setBoolEnvia(false);
    setBtnRecebe(false);
    setBoolAtender(true);
    alert("mostra tela para Receber Código Seguro.");
  };

  const handlerAtender = () => {
    alert("Conferir Código Seguro.");
    // se recebeu o codigo compare se é fiel
    // caso sim
    //  setBoolAtenter(true);
    // caso não
    //  setBoolAtenter(false);
    // mostra men
  };

  return (
    <ThemeProvider theme={theme}>
      <LayoutResgatar
        imgsys={lg_resgate}
        titbtnsys="Home Sistema..."
        onclicksys={handlerLogoRes}
        titlepg="Resgatar"
        imgbtnhlppg={bt_help}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerHelpPageRes}
        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={goto("/")}
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        {loading ? (
          <div>
            <p>Carregando empresas...</p>)
          </div>
        ) : error ? (
          <Pg.ContainerDivManRed>
            <p>{msgerroemp}</p>
          </Pg.ContainerDivManRed>
        ) : boolstart ? (
          <ContentCardPageMain open={boolstart}>
            <ContentCardBoxDialogo>
              <ContentCardDialogoTitle>
                <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
              </ContentCardDialogoTitle>
              <div>
                <h4>1º - Passo: </h4>
                <p>
                  &emsp;Precisamos que nos indique a empresa e maneira pelo qual
                  deseja resgatar e o seu C.P.F.
                </p>
              </div>
              <ContentCardPage pwidth="100%">
                <ContentCardPageTitle>
                  <h2>Opções para Resgate.</h2>
                </ContentCardPageTitle>
                <Pg.SelectContainer>
                  <label htmlFor="resgate-select">Selecione Opção :</label>
                  <Pg.StyledSelect
                    id="resgate-select"
                    name="opcao"
                    defaultValue={mdlog}
                    onChange={handleEmpresaChange}
                  >
                    <Pg.StyledOption value={0}>Opções:</Pg.StyledOption>
                    <Pg.StyledOption value={1}>E-mail.</Pg.StyledOption>
                    <Pg.StyledOption value={2}>E-mail Resgate.</Pg.StyledOption>
                    <Pg.StyledOption value={3}>
                      Celular via SMS.
                    </Pg.StyledOption>
                    <Pg.StyledOption value={4}>
                      Celular via Whatsapp.
                    </Pg.StyledOption>
                    <Pg.StyledOption value={5}>Perguntas.</Pg.StyledOption>
                  </Pg.StyledSelect>
                  <div>{msgerromd}</div>
                </Pg.SelectContainer>
                <Pg.SelectContainer>
                  <label htmlFor="resgate-select">Selecione Empresa :</label>
                  <Pg.StyledSelect
                    id="empresa-select"
                    name="empresa"
                    defaultValue={idempr}
                    onChange={handleEmpresaChange}
                  >
                    <Pg.StyledOption value={0}>Selecione:</Pg.StyledOption>
                    {empresas.map((empresa) => (
                      <Pg.StyledOption key={empresa.id} value={empresa.id}>
                        {empresa.nome}
                      </Pg.StyledOption>
                    ))}
                  </Pg.StyledSelect>
                  <div>{msgerroemp}</div>
                </Pg.SelectContainer>
                <form>
                  <Pg.ContainerCardBoxInput>
                    <label htmlFor="resgate-select"> Edite C.P.F. :</label>
                    <Pg.CpfInput
                      id="cpf"
                      placeholder="Digite o seu C.P.F."
                      defaultValue={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                    />
                    <div>{msgerrocpf}</div>
                  </Pg.ContainerCardBoxInput>
                </form>
              </ContentCardPage>
            </ContentCardBoxDialogo>
          </ContentCardPageMain>
        ) : null}

        {boolmail ? (
          <ContentCardPageMain open={boolmail}>
            <ContentCardBoxDialogo>
              <ContentCardDialogoTitle>
                <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
              </ContentCardDialogoTitle>
              <div>
                <h4>2º - Passo: </h4>
                <p>&emsp;Precisamos que nos indique um Email para Resgate.</p>
              </div>
            </ContentCardBoxDialogo>
            <ContentCardPage pwidth="30%">
              <ContentCardPageTitle>
                <h2>Email para Resgate.</h2>
              </ContentCardPageTitle>
              <form>
                <label htmlFor="resgate-email">Email:</label>
                <Pg.EmailInput
                  id="email"
                  placeholder="Digite seu email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div>{msgerromail}</div>
              </form>
            </ContentCardPage>
          </ContentCardPageMain>
        ) : null}

        {boolcell ? (
          <ContentCardPageMain open={boolmail}>
            <ContentCardBoxDialogo>
              <ContentCardDialogoTitle>
                <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
              </ContentCardDialogoTitle>
              <div>
                <h4>3º - Passo: </h4>
                <p>
                  &emsp;Precisamos que nos indique Nº Fone-Celular para Resgate.
                </p>
              </div>
            </ContentCardBoxDialogo>
            <ContentCardPage pwidth="30%">
              <ContentCardPageTitle>
                <h2>Nº do Celular para Resgate.</h2>
              </ContentCardPageTitle>
              <form>
                <label htmlFor="resgate-fone">Nº Fone-Celular:</label>
                <Pg.EmailInput
                  id="fone"
                  placeholder="Digite seu Nº Fone-Celular"
                  defaultValue={cell}
                  onChange={(e) => setCell(e.target.value)}
                />
                <div>{msgerrocell}</div>
              </form>
            </ContentCardPage>
          </ContentCardPageMain>
        ) : null}

        {boolresp ? (
          <ContentCardPageMain open={boolresp}>
            <ContentCardBoxDialogo>
              <ContentCardDialogoTitle>
                <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
              </ContentCardDialogoTitle>
              <div>
                <h4>4º - Passo: </h4>
                <p>&emsp;Precisamos das Respostas para Resgate.</p>
              </div>
            </ContentCardBoxDialogo>
            <ContentCardPage>
              <ContentCardPageTitle>
                <h2>Respostas para Resgate.</h2>
              </ContentCardPageTitle>
              <form>
                <label htmlFor="perg-1"> 1º Pergunta: {perg1}.</label>
                <Pg.EmailInput
                  id="perg1"
                  placeholder="Digite a sua Respósta"
                  defaultValue={resp1}
                  onChange={(e) => setResp1(e.target.value)}
                />
                <div>{msgerro}</div>
              </form>
              <form>
                <label htmlFor="perg-2"> 2º Pergunta: {perg2}.</label>
                <Pg.EmailInput
                  id="perg2"
                  placeholder="Digite a sua Respósta"
                  defaultValue={resp2}
                  onChange={(e) => setResp2(e.target.value)}
                />
                <div>{msgerro}</div>
              </form>
              <form>
                <label htmlFor="perg-3"> 3º Pergunta: {perg3}.</label>
                <Pg.EmailInput
                  id="perg3"
                  placeholder="Digite a sua Respósta"
                  defaultValue={resp3}
                  onChange={(e) => setResp3(e.target.value)}
                />
                <div>{msgerro}</div>
              </form>
            </ContentCardPage>
          </ContentCardPageMain>
        ) : null}
        <ContentCardPageMain open={boolconf}>
          <form>
            <h2>Aguardamos a Confirmação para o Envio.</h2>
            {mdlog === 1 || mdlog === 2 ? (
              <p>Abaixo declaramos o seus Dados Email conforme solicitado.</p>
            ) : null}
            {mdlog === 3 || mdlog === 4 ? (
              <p>
                Abaixo declaramos o seus Dados Nº Celular conforme solicitado.
              </p>
            ) : null}
            {mdlog === 5 ? (
              <p>
                Abaixo declaramos o seus Dados das Respostas conforme
                solicitado.
              </p>
            ) : null}
          </form>
        </ContentCardPageMain>

        <Pg.DivisionPgHztal />

        <ContainerSBItensModMn onoff={true}>
          <ContentSidePageBottonLabel istitl={true} title={"Voltar.: "}>
            <ContentSidePageBottonButton
              pxheight={"40px"}
              img={bt_setaesq}
              titbtn={"Volta..."}
              onclick={goto("/")}
            />
          </ContentSidePageBottonLabel>

          {btncontinua ? (
            <ContentSidePageBottonLabel istitl={true} title={"Continuar ? "}>
              <ContentSidePageBottonButton
                pxheight={"40px"}
                img={bt_setadir}
                titbtn={"Continuar..."}
                onclick={handlerBtnContinua}
              />
            </ContentSidePageBottonLabel>
          ) : null}

          {btnconfirma ? (
            <ContentSidePageBottonLabel
              istitl={btnconfirma}
              title={"Confirmar ?"}
            >
              <ContentSidePageBottonButton
                pxheight={"40px"}
                img={bt_setadir}
                titbtn={"Confirmar..."}
                onclick={handlerConfirmar}
              />
            </ContentSidePageBottonLabel>
          ) : null}

          {btnenvia ? (
            <ContentSidePageBottonLabel istitl={btnenvia} title={"Enviar..."}>
              <ContentSidePageBottonButton
                pxheight={"40px"}
                img={bt_setadir}
                titbtn={"Enviar..."}
                onclick={handlerEnviar}
              />
            </ContentSidePageBottonLabel>
          ) : null}

          {btnrecebe ? (
            <ContentSidePageBottonLabel istitl={btnrecebe} title={"Receber..."}>
              <ContentSidePageBottonButton
                pxheight={"40px"}
                img={bt_setadir}
                titbtn={"Receber..."}
                onclick={handlerReceber}
              />
            </ContentSidePageBottonLabel>
          ) : null}

          {btnatender ? (
            <ContentSidePageBottonLabel
              istitl={btnatender}
              title={"Atendendo..."}
            >
              <ContentSidePageBottonButton
                pxheight={"40px"}
                img={bt_setadir}
                titbtn={"Atendendo..."}
                onclick={handlerAtender}
              />
            </ContentSidePageBottonLabel>
          ) : null}
        </ContainerSBItensModMn>

        {boolerro ? (
          <PageModal
            ptop={"1%"}
            pwidth={"40%"}
            pheight={"45%"}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={"ERRO...."}
            onclose={() => setBoolErro(false)}
          >
            <CardModalErro pminheight="100px" pwidth="200px">
              {msgerro}
            </CardModalErro>
          </PageModal>
        ) : null}

        {logoRes ? (
          <PageModal
            ptop={"1%"}
            pwidth={"80%"}
            pheight={"95%"}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={"Home Sistema."}
            onclose={() => setLogoRes(false)}
          >
            <CardHlpResgateLogo
              imgcardlogo={lg_resgate}
              onclosesair={() => setLogoRes(false)}
            />
          </PageModal>
        ) : null}

        {helppageres ? (
          <PageModal
            ptop={"1%"}
            pwidth={"80%"}
            pheight={"95%"}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={"Help Conteúdo Home."}
            onclose={() => setHelpPageRes(false)}
          >
            <CardHlpResgatePage
              imgcardresg={lg_resgate}
              onclosesair={() => setHelpPageRes(false)}
            />
          </PageModal>
        ) : null}
      </LayoutResgatar>
    </ThemeProvider>
  );
};

export default Resgatar;

// defaultValue={idempr}
// onChange={(e) => setIdEmpr(parseInt(e.target.value))}
// >
// <Pg.StyledOption value={0}>Opções:</Pg.StyledOption>
// <Pg.StyledOption value={1}>Jr.Bordados.</Pg.StyledOption>
// <Pg.StyledOption value={2}>Rb-Serviços.</Pg.StyledOption>

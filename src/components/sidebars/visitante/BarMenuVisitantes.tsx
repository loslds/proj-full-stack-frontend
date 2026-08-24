

// src/components/.../BarMenuVisitantes.tsx

import React from "react";

import { useAcessoContext } from "../../contexts/ContextAcesso";

import { ContentBarMainMenu } from "../ContentBarMainMenu";
import { ContentBarButtonMenu } from "../ContentBarButtonMenu";

import { ContentDropdownMenu } from "../ContentBarDropdownMenu";

import { Dropdown, DropdownOption } from "../Dropdown";

import btn_def_q_menuoff from "../../assets/defaults/btn/btn_def_q_menuoff.svg";
import btn_def_q_menuon from "../../assets/defaults/btn/btn_def_q_menuon.svg";


export const BarMenuVisitantes: React.FC = () => {

  const { state } = useAcessoContext();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  
  
  const [itemSelecionado, setItemSelecionado] =
    React.useState<string>("");


  // =========================================================
  // OPÇÕES DO MENU DO VISITANTE
  // =========================================================

  const optionsVisitantes: DropdownOption[] = [

    // ---------------------------------------------------------
    // DESIGN
    // ---------------------------------------------------------
    {
      label: "Design",
      value: "design",

      subOptions: [
        {
          label: "Criação",
          value: "design_criacao",

          subOptions: [
            {
              label: "Logotipos",
              value: "design_logotipos",
            },
            {
              label: "Cartões",
              value: "design_cartoes",
            },
            {
              label: "Convites",
              value: "design_convites",
            },
          ],
        },

        {
          label: "Impressos",
          value: "design_impressos",
        },
      ],
    },


    // ---------------------------------------------------------
    // BORDADOS
    // ---------------------------------------------------------
    {
      label: "Bordados",
      value: "bordados",

      subOptions: [
        {
          label: "Bonés",
          value: "bordados_bones",

          subOptions: [
            {
              label: "Boné Tradicional",
              value: "bordados_bones_tradicional",
            },
            {
              label: "Boné Trucker",
              value: "bordados_bones_trucker",
            },
            {
              label: "Boné Aba Reta",
              value: "bordados_bones_aba_reta",
            },
          ],
        },

        {
          label: "Camisas",
          value: "bordados_camisas",
        },

        {
          label: "Uniformes",
          value: "bordados_uniformes",
        },
      ],
    },


    // ---------------------------------------------------------
    // SILKSCREEN
    // ---------------------------------------------------------
    {
      label: "Silkscreen",
      value: "silkscreen",

      subOptions: [
        {
          label: "Vestuário",
          value: "silkscreen_vestuario",

          subOptions: [
            {
              label: "Camisas",
              value: "silkscreen_camisas",
            },
            {
              label: "Camisetas",
              value: "silkscreen_camisetas",
            },
            {
              label: "Calças",
              value: "silkscreen_calcas",
            },
          ],
        },

        {
          label: "Brindes",
          value: "silkscreen_brindes",
        },
      ],
    },


    // ---------------------------------------------------------
    // CORTE A LASER
    // ---------------------------------------------------------
    {
      label: "Corte a Laser",
      value: "corte_laser",

      subOptions: [
        {
          label: "Materiais",
          value: "laser_materiais",

          subOptions: [
            {
              label: "MDF",
              value: "laser_mdf",
            },
            {
              label: "Acrílico",
              value: "laser_acrilico",
            },
            {
              label: "Papel",
              value: "laser_papel",
            },
            {
              label: "Couro",
              value: "laser_couro",
            },
          ],
        },
      ],
    },


    // ---------------------------------------------------------
    // GRAVAÇÕES
    // ---------------------------------------------------------
    {
      label: "Gravações",
      value: "gravacoes",

      subOptions: [
        {
          label: "Laser",
          value: "gravacoes_laser",

          subOptions: [
            {
              label: "Madeira",
              value: "gravacoes_madeira",
            },
            {
              label: "Acrílico",
              value: "gravacoes_acrilico",
            },
            {
              label: "Metal",
              value: "gravacoes_metal",
            },
          ],
        },
      ],
    },
  ];


  // =========================================================
  // SELEÇÃO
  // =========================================================

  const handleSelect = React.useCallback((value: string) => {

    setItemSelecionado(value);

    console.log("Menu Visitante selecionado:", value);

  }, []);


  // =========================================================
  // ABRIR / FECHAR MENU
  // =========================================================

  const handleToggleMenu = React.useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // =========================================================
  // LISTA (<servicos>) [grupo/servicos]
  // =========================================================

  const GrpServicos =[
    '1 | Design',
    '2 | Bordados',
    '3 | DTF (Termo colante)',
    '4 | Adesivo UV',
    '5 | Corte a Laser',
    '6 | Corte Lase e Gravação',
    '7 | Gravação',
    '8 | Silkscreen'
  ];

  const SubGrpServBordados = [
    '1 | Bordado c/ relevo Negativo',
    '2 | Bordado c/ relevo Positivo (EVA)',
    '3 | Bordado c/ Aplique em Tecido',
    '4 | Bordado c/ Acabamento em Rechilieur',
    '5 | Bordado c/ Aplique de Lantejoulas',
    '6 | Bordado c/ Lâ',
    '7 | Bordado c/ Cordão',
    '8 | Bordado c/ Soutache',
    '9 | Bordado e Colagem',
    '10 | Bordado e Colagem',
    '11 | Bordado e Corte Laser'
  ];
  
  const SubGrpServImpressao =[
    '1 ! Impressão DTF c/ contorno em Bordado',
    '2 ! Impressão DTF c/ Bordado',
  ];
  
  const dropdownOptions = React.useMemo<DropdownOption[]>(
      () => options ?? [],
      [options]
    );

  const showListServicoSelector = isMenuOpen;


  // =========================================================
  // RENDER
  // =========================================================

  return (

    <ContentBarMainMenu>
      {/* BOTÃO MENU ABRE/FECHA */}
      <ContentBarButtonMenu
        widthmenu="50px"
        imgmenu={!isMenuOpen ? btn_def_q_menuoff : btn_def_q_menuon}
        titbtnmenu={!isMenuOpen ? "Abre Menu..." : "Fecha Menu..."}
        onClickmenu={handleToggleMenu}
      />


      {/* DROPDOWN */}

      <ContentDropdownMenu $open={showListServicoSelector} $width="205px">
        <Dropdown
          $pxheight="40px"
          $pxwidth="205px"
          labelbtn={"SERVIÇOS"}
          options={dropdownOptions}
          onSelect={handleSelectServico}
        />
      </ContentDropdownMenu>
      

      <ContentDropdownMenu >

          <Dropdown
            $pxheight="36px"
            $pxwidth="170px"
            labelbtn="Serviços"
            options={optionsVisitantes}
            onSelect={handleSelect}
          />

        </ContentDropdownMenu>
    
      {/* SOMENTE PARA TESTE NESTA FASE */}

      {itemSelecionado && (

        <div>
          Selecionado: {itemSelecionado}
        </div>

      )}

    </ContentBarMainMenu>

  );
};



export const BarMenuVisitantes: React.FC = () => {
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { state } = useAcessoContext();

  const showTableSelector = isMenuOpen;

  const handleToggleMenu = React.useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  
  return (
    <ContentBarMainMenu>
      <ContentBarButtonMenu
        widthmenu="50px"
        imgmenu={!isMenuOpen ? btn_def_q_menuoff : btn_def_q_menuon}
        titbtnmenu={!isMenuOpen ? "Abre Menu..." : "Fecha Menu..."}
        onClickmenu={handleToggleMenu}
      />

      <ContentDropdownMenu $open={showTableSelector} $width="205px">
        <DropdownVisitantes
          $pxheight="40px"
          $pxwidth="205px"
          labelbtn={
            loading
            ? "Carregando..."
            : error
            ? "Erro no Sistema"
            : "Arq.Sistema."
          }
          options={dropdownOptions}
          onSelect={handleSelectTable}
        />
      </ContentDropdownMenu>

      <MenuContainerVisitantes open={open}>


        <MenuContentVisitantes>
          {items.map((item, index) => (
            <MenuItemButtonVisitantes onClick={item.onClick}>
              {item.label}
            </MenuItemButtonVisitantes>
          ))}
        </MenuContentVisitantes>
      </MenuContainerVisitantes>
    </ContentBarMainMenu>
  );
};

export default BarLeftMenuDropdownVisitantes;
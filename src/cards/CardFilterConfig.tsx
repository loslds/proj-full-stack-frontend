
//C:\repository\proj-full-stack-frontend\src\cards\CardFilterConfig.tsx

import React from "react";
import styled from "styled-components";

type FilterField = {
  key: string;
  label: string;
};

interface CardFilterConfigProps {
  tableName: string;
  availableFields: FilterField[];
  initialSelectedFields?: FilterField[];
  onConfirm: (selectedFields: FilterField[]) => void;
  onCancel: () => void;

  cardWidth?: string;
  leftPanelWidth?: string;
  rightPanelWidth?: string;
  panelMinWidth?: string;
}

const CardWrap = styled.div<{ $width?: string }>`
  width: ${({ $width }) => $width || "90%"};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: "Courier New", Courier, monospace;
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  line-height: 16px;
  font-family: "Courier New", Courier, monospace;
  color: ${({ theme }) => theme.colors.textColor};
`;

const CardSubtitle = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 18px;
`;

const MainArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: stretch;
  justify-content: space-between;
`;

const ColumnBox = styled.div<{ $width?: string; $minWidth?: string }>`
  width: ${({ $width }) => $width || "45%"};
  min-width: ${({ $minWidth }) => $minWidth || "280px"};
  flex: 1 1 ${({ $width }) => $width || "45%"};

  border: 2px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 10px;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: transparent;
`;

const ColumnHeader = styled.div`
  width: 100%;
  background-color: #d3d3d3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
  padding: 8px 12px;
  box-sizing: border-box;
`;

const ColumnTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 18px;
  font-family: "Courier New", Courier, monospace;
  color: #333333;
  font-weight: bold;
`;

const ColumnBody = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const ListBox = styled.div`
  width: 100%;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 8px;
  min-height: 260px;
  // max-height: 260px;
  overflow-y: auto;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FieldButton = styled.button<{ $active?: boolean }>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 8px;
  padding: 8px 10px;
  background-color: ${({ $active }) => ($active ? "#7ca7f5" : "transparent")};
  color: ${({ theme }) => theme.colors.textColor};
  text-align: left;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    background-color: #e05252;
  }
`;

const ColumnFooter = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.textColor};
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TransferButton = styled.button`
  min-width: 90px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #7ca7f5;
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

const FooterButton = styled.button<{ $variant?: "primary" | "secondary" }>`
  min-width: 140px;
  height: 42px;
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 10px;
  background-color: ${({ $variant }) =>
    $variant === "primary" ? "#7ca7f5" : "transparent"};
  color: ${({ theme }) => theme.colors.textColor};
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e05252;
  }
`;

const EmptyText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 17px;
  opacity: 0.8;
  font-family: "Courier New", Courier, monospace;
`;

function uniqueByKey(fields: FilterField[]): FilterField[] {
  const map = new Map<string, FilterField>();
  fields.forEach((field) => map.set(field.key, field));
  return Array.from(map.values());
}

export const CardFilterConfig: React.FC<CardFilterConfigProps> = ({
  tableName,
  availableFields,
  initialSelectedFields = [],
  onConfirm,
  onCancel,
  cardWidth,
  leftPanelWidth,
  rightPanelWidth,
  panelMinWidth,
}) => {
  const initialSelected = React.useMemo(
    () => uniqueByKey(initialSelectedFields),
    [initialSelectedFields]
  );

  const initialAvailable = React.useMemo(() => {
    const selectedKeys = new Set(initialSelected.map((item) => item.key));
    return uniqueByKey(availableFields).filter((item) => !selectedKeys.has(item.key));
  }, [availableFields, initialSelected]);

  const [leftFields, setLeftFields] = React.useState<FilterField[]>(initialAvailable);
  const [rightFields, setRightFields] = React.useState<FilterField[]>(initialSelected);

  const [leftSelectedKey, setLeftSelectedKey] = React.useState<string | null>(null);
  const [rightSelectedKey, setRightSelectedKey] = React.useState<string | null>(null);

  const moveToRight = React.useCallback(() => {
    if (!leftSelectedKey) return;

    const selectedItem = leftFields.find((item) => item.key === leftSelectedKey);
    if (!selectedItem) return;

    setRightFields((old) => uniqueByKey([...old, selectedItem]));
    setLeftFields((old) => old.filter((item) => item.key !== leftSelectedKey));
    setLeftSelectedKey(null);
  }, [leftFields, leftSelectedKey]);

  const moveToLeft = React.useCallback(() => {
    if (!rightSelectedKey) return;

    const selectedItem = rightFields.find((item) => item.key === rightSelectedKey);
    if (!selectedItem) return;

    setLeftFields((old) => uniqueByKey([...old, selectedItem]));
    setRightFields((old) => old.filter((item) => item.key !== rightSelectedKey));
    setRightSelectedKey(null);
  }, [rightFields, rightSelectedKey]);

  const handleConfirm = React.useCallback(() => {
    onConfirm(rightFields);
  }, [onConfirm, rightFields]);

  return (
    <CardWrap $width={cardWidth}>
      <CardHeader>

        <CardTitle>
          Tabela selecionada: <strong>{tableName}</strong>
        </CardTitle>
        
        <CardSubtitle>
          Determine campos para Filtro.
        </CardSubtitle>

      </CardHeader>

      <MainArea>
        <ColumnBox $width={leftPanelWidth} $minWidth={panelMinWidth}>
          <ColumnHeader>
            <ColumnTitle>Campos Disponíveis</ColumnTitle>
          </ColumnHeader>

          <ColumnBody>
            <ListBox>
              {leftFields.length === 0 ? (
                <EmptyText>Nenhum campo disponível.</EmptyText>
              ) : (
                leftFields.map((field) => (
                  <FieldButton
                    key={field.key}
                    type="button"
                    $active={leftSelectedKey === field.key}
                    onClick={() => {
                      setLeftSelectedKey(field.key);
                      setRightSelectedKey(null);
                    }}
                  >
                    {field.label}
                  </FieldButton>
                ))
              )}
            </ListBox>
          </ColumnBody>

          <ColumnFooter>
            <TransferButton type="button" title="Importar para o filtro" onClick={moveToRight}>
              {">>"}
            </TransferButton>
          </ColumnFooter>
        </ColumnBox>

        <ColumnBox $width={rightPanelWidth} $minWidth={panelMinWidth}>
          <ColumnHeader>
            <ColumnTitle>Campos para Filtro</ColumnTitle>
          </ColumnHeader>

          <ColumnBody>
            <ListBox>
              {rightFields.length === 0 ? (
                <EmptyText>Nenhum campo importado.</EmptyText>
              ) : (
                rightFields.map((field) => (
                  <FieldButton
                    key={field.key}
                    type="button"
                    $active={rightSelectedKey === field.key}
                    onClick={() => {
                      setRightSelectedKey(field.key);
                      setLeftSelectedKey(null);
                    }}
                  >
                    {field.label}
                  </FieldButton>
                ))
              )}
            </ListBox>
          </ColumnBody>

          <ColumnFooter>
            <TransferButton type="button" title="Remover do filtro" onClick={moveToLeft}>
              {"<<"}
            </TransferButton>
          </ColumnFooter>
        </ColumnBox>
      </MainArea>

      <Footer>
        <FooterButton type="button" $variant="secondary" onClick={onCancel}>
          Abortar
        </FooterButton>

        <FooterButton type="button" $variant="primary" onClick={handleConfirm}>
          Enviar
        </FooterButton>
      </Footer>
    </CardWrap>
  );
};

export default CardFilterConfig;



// import React from "react";
// import styled from "styled-components";

// type FilterField = {
//   key: string;
//   label: string;
// };

// interface CardFilterConfigProps {
//   tableName: string;
//   availableFields: FilterField[];
//   initialSelectedFields?: FilterField[];
//   onConfirm: (selectedFields: FilterField[]) => void;
//   onCancel: () => void;
// }

// const CardWrap = styled.div`
//   width: 100%;
//   min-height: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   color: ${({ theme }) => theme.colors.textColor};
//   font-family: "Courier New", Courier, monospace;
// `;

// const CardHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `;

// const CardTitle = styled.h2`
//   margin: 0;
//   font-size: 18px;
//   line-height: 16px;
// `;

// const CardSubtitle = styled.p`
//   margin: 0;
//   font-size: 16px;
//   line-height: 18px;
// `;

// const MainArea = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: 1fr 90px 1fr;
//   gap: 16px;
//   align-items: start;
// `;

// const ColumnBox = styled.div`
//   border: 2px solid ${({ theme }) => theme.colors.textColor};
//   border-radius: 10px;
//   min-height: 360px;
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const ColumnTitle = styled.h3`
//   margin: 0;
//   font-size: 18px;
//   line-height: 20px;
// `;

// const ListBox = styled.div`
//   border: 1px solid ${({ theme }) => theme.colors.textColor};
//   border-radius: 8px;
//   min-height: 300px;
//   max-height: 300px;
//   overflow-y: auto;
//   padding: 6px;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// const FieldButton = styled.button<{ $active?: boolean }>`
//   width: 100%;
//   border: 1px solid ${({ theme }) => theme.colors.textColor};
//   border-radius: 8px;
//   padding: 8px 10px;
//   background-color: ${({ $active }) => ($active ? "#7ca7f5" : "transparent")};
//   color: ${({ theme }) => theme.colors.textColor};
//   text-align: left;
//   font-family: "Courier New", Courier, monospace;
//   font-size: 16px;
//   line-height: 18px;
//   cursor: pointer;

//   &:hover {
//     background-color: #e05252;
//   }
// `;

// const ActionColumn = styled.div`
//   min-height: 360px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 16px;
//   align-items: center;
// `;

// const TransferButton = styled.button`
//   width: 70px;
//   height: 56px;
//   border: 2px solid ${({ theme }) => theme.colors.textColor};
//   border-radius: 10px;
//   background-color: transparent;
//   color: ${({ theme }) => theme.colors.textColor};
//   font-family: "Courier New", Courier, monospace;
//   font-size: 22px;
//   font-weight: bold;
//   cursor: pointer;

//   &:hover {
//     background-color: #7ca7f5;
//   }
// `;

// const Footer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-end;
//   gap: 12px;
// `;

// const FooterButton = styled.button<{ $variant?: "primary" | "secondary" }>`
//   min-width: 140px;
//   height: 42px;
//   border: 2px solid ${({ theme }) => theme.colors.textColor};
//   border-radius: 10px;
//   background-color: ${({ $variant }) =>
//     $variant === "primary" ? "#7ca7f5" : "transparent"};
//   color: ${({ theme }) => theme.colors.textColor};
//   font-family: "Courier New", Courier, monospace;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;

//   &:hover {
//     background-color: #e05252;
//   }
// `;

// const EmptyText = styled.p`
//   margin: 0;
//   font-size: 15px;
//   line-height: 17px;
//   opacity: 0.8;
// `;

// function uniqueByKey(fields: FilterField[]): FilterField[] {
//   const map = new Map<string, FilterField>();
//   fields.forEach((field) => map.set(field.key, field));
//   return Array.from(map.values());
// }

// export const CardFilterConfig: React.FC<CardFilterConfigProps> = ({
//   tableName,
//   availableFields,
//   initialSelectedFields = [],
//   onConfirm,
//   onCancel,
// }) => {
//   const initialSelected = React.useMemo(
//     () => uniqueByKey(initialSelectedFields),
//     [initialSelectedFields]
//   );

//  const initialAvailable = React.useMemo(() => {
//    const selectedKeys = new Set(initialSelected.map((item) => item.key));
//    return uniqueByKey(availableFields).filter((item) => !selectedKeys.has(item.key));
//  }, [availableFields, initialSelected]);

//  const [leftFields, setLeftFields] = React.useState<FilterField[]>(initialAvailable);
//  const [rightFields, setRightFields] = React.useState<FilterField[]>(initialSelected);

//  const [leftSelectedKey, setLeftSelectedKey] = React.useState<string | null>(null);
//  const [rightSelectedKey, setRightSelectedKey] = React.useState<string | null>(null);

//   const moveToRight = React.useCallback(() => {
//     if (!leftSelectedKey) return;

//     const selectedItem = leftFields.find((item) => item.key === leftSelectedKey);
//     if (!selectedItem) return;

//     setRightFields((old) => uniqueByKey([...old, selectedItem]));
//     setLeftFields((old) => old.filter((item) => item.key !== leftSelectedKey));
//     setLeftSelectedKey(null);
//   }, [leftFields, leftSelectedKey]);

//   const moveToLeft = React.useCallback(() => {
//     if (!rightSelectedKey) return;

//     const selectedItem = rightFields.find((item) => item.key === rightSelectedKey);
//     if (!selectedItem) return;

//     setLeftFields((old) => uniqueByKey([...old, selectedItem]));
//     setRightFields((old) => old.filter((item) => item.key !== rightSelectedKey));
//     setRightSelectedKey(null);
//   }, [rightFields, rightSelectedKey]);

//   const handleConfirm = React.useCallback(() => {
//     onConfirm(rightFields);
//   }, [onConfirm, rightFields]);

//   return (
   

//     <CardWrap>
//       <CardHeader>
//         <CardTitle>Tabela selecionada: <strong>{tableName}</strong></CardTitle>
//         <CardSubtitle>
//           Determine campos para Filtro.
//         </CardSubtitle>
//       </CardHeader>

//       <MainArea>
//         <ColumnBox>
//           <ColumnTitle>Campos Disponíveis</ColumnTitle>

//           <ListBox>
//             {leftFields.length === 0 ? (
//               <EmptyText>Nenhum campo disponível.</EmptyText>
//             ) : (
//               leftFields.map((field) => (
//                 <FieldButton
//                   key={field.key}
//                   type="button"
//                   $active={leftSelectedKey === field.key}
//                   onClick={() => {
//                     setLeftSelectedKey(field.key);
//                     setRightSelectedKey(null);
//                   }}
//                 >
//                   {field.label}
//                 </FieldButton>
//               ))
//             )}
//           </ListBox>
//         </ColumnBox>

//         <ActionColumn>
//           <TransferButton type="button" title="Mover para a direita" onClick={moveToRight}>
//             {">>"}
//           </TransferButton>

//           <TransferButton type="button" title="Mover para a esquerda" onClick={moveToLeft}>
//             {"<<"}
//           </TransferButton>
//         </ActionColumn>

//         <ColumnBox>
//           <ColumnTitle>Campos Selecionados</ColumnTitle>

//           <ListBox>
//             {rightFields.length === 0 ? (
//               <EmptyText>Nenhum campo selecionado.</EmptyText>
//             ) : (
//               rightFields.map((field) => (
//                 <FieldButton
//                   key={field.key}
//                   type="button"
//                   $active={rightSelectedKey === field.key}
//                   onClick={() => {
//                     setRightSelectedKey(field.key);
//                     setLeftSelectedKey(null);
//                   }}
//                 >
//                   {field.label}
//                 </FieldButton>
//               ))
//             )}
//           </ListBox>
//         </ColumnBox>
//       </MainArea>

//       <Footer>
//         <FooterButton type="button" $variant="secondary" onClick={onCancel}>
//           Abortar
//         </FooterButton>

//         <FooterButton type="button" $variant="primary" onClick={handleConfirm}>
//           Enviar
//         </FooterButton>
//       </Footer>
//     </CardWrap>

//   );
// };

// export default CardFilterConfig;
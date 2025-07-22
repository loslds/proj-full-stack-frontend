import { ContainerSBMain } from "./stylesSidebar";

interface PropsContentSBMain {
  children?: React.ReactNode;
};

export const ContentSBMain: React.FC<PropsContentSBMain> = ({ children }) => {
  return <ContainerSBMain>{children}</ContainerSBMain>
}

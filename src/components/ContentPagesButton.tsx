import * as Pg from './stylePages';

interface PropsContentPagesButton {
  imgbtn?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentPagesButton = ({
  imgbtn,
  titbtn,
  onClick,
}: PropsContentPagesButton) => {
  return (
    <Pg.ContainerPagesButton>
      <Pg.ButtonPagesImg img={imgbtn} title={titbtn} onClick={onClick} />
    </Pg.ContainerPagesButton>
  );
};

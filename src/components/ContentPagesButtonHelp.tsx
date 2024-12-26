import * as Pg from './stylePages';

interface PropsContentPagesButtonHelp {
  imgbtnhlp?: string;
  titbtnhlp?: string;
  onClickhlp?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentPagesButtonHelp = ({
  imgbtnhlp,
  titbtnhlp,
  onClickhlp,
}: PropsContentPagesButtonHelp) => {
  return (
    <Pg.ContainerPagesButton>
      <Pg.ButtonPagesImg
        img={imgbtnhlp}
        title={titbtnhlp}
        onClick={onClickhlp}
      />
    </Pg.ContainerPagesButton>
  );
};

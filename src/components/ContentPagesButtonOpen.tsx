import * as Pg from './stylePages';

interface PropsContentPagesButtonOpen {
  imgbtnopen?: string;
  titbtnopen?: string;
  onClickopen?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentPagesButtonOpen = ({
  imgbtnopen,
  titbtnopen,
  onClickopen,
}: PropsContentPagesButtonOpen) => {
  return (
    <Pg.ContainerPagesButton>
      <Pg.ButtonPagesImg
        img={imgbtnopen}
        title={titbtnopen}
        onClick={onClickopen}
      />
    </Pg.ContainerPagesButton>
  );
};

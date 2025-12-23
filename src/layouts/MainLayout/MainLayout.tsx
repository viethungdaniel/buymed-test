import { NoSsr } from "@mui/material";
import MainHeader from "@/layouts/MainLayout/components/MainHeader";

import useStyles from "./MainLayout.styles";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <NoSsr>
        <MainHeader />
      </NoSsr>
      <main className={classes.main}>{children}</main>
      {/* <NoSsr>
        {!disabledMainFooter && <MainFooter />}
        <MainBottomAppBar
          disabledAppBar={disabledMainBottomAppBar}
          disabledAppBarToolbar={disabledMainBottomAppBarToolbar}
        />
        {!disabledFloatActions && (
          <FloatActions disabledSellIconButton={disabledSellIconButton} />
        )}
      </NoSsr> */}
    </div>
  );
};

export default MainLayout;

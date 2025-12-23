import { Tab } from "@mui/material";

import useStyles from "./AppTab.styles";

import type { TabProps } from "@mui/material";
import type {
  ExtendButtonBase,
  ExtendButtonBaseTypeMap,
} from "@mui/material/ButtonBase";

type CustomAppTabProps = {};

export type AppTabProps = Omit<TabProps, keyof CustomAppTabProps> &
  CustomAppTabProps;

type AppTabTypeMap<
  P = {},
  D extends React.ElementType = "div"
> = ExtendButtonBaseTypeMap<{
  props: P & AppTabProps;
  defaultComponent: D;
}>;

type AppTabComponent = ExtendButtonBase<AppTabTypeMap>;

const AppTab: AppTabComponent = (props: AppTabProps) => {
  const { classes: muiClasses, className, sx, ...rest } = props;

  const { classes, theme, css, cx } = useStyles();

  return (
    <Tab
      {...rest}
      classes={{
        ...muiClasses,
        root: cx(
          classes.root,
          muiClasses?.root,
          className,
          sx && css(theme.unstable_sx(sx) as any)
        ),
        selected: cx(classes.selected, muiClasses?.selected),
      }}
    />
  );
};

export default AppTab;

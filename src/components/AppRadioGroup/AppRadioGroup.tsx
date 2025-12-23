import { forwardRef } from "react";

import { RadioGroup } from "@mui/material";

import useStyles from "./AppRadioGroup.styles";

import type { RadioGroupProps } from "@mui/material";

export type AppRadioGroupProps = RadioGroupProps;

const AppRadioGroup = forwardRef(
  (props: AppRadioGroupProps, ref: React.ForwardedRef<any>) => {
    const { classes: muiClasses, className, sx, ...rest } = props;

    const { theme, css, cx } = useStyles();

    return (
      <RadioGroup
        ref={ref}
        classes={{
          ...muiClasses,
          root: cx(
            muiClasses?.root,
            className,
            !!sx && css(theme.unstable_sx(sx) as any)
          ),
        }}
        {...rest}
      />
    );
  }
);

export default AppRadioGroup;

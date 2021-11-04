import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from 'prop-types';

export function BabelSnackBar(properties) {
  const { message, severity, ...materialPropsForErrorSnack } = properties;
  const materialProps = properties;
  const vertical = "top",
    horizontal = "right";

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return message instanceof Array ? (
    <Snackbar
      {...materialPropsForErrorSnack}
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={6000}
    >
      <Alert severity={severity ? severity : "error"} {...materialPropsForErrorSnack}>
        {message.map((message, index) => {
          return <p>{message.descriptions}</p>;
        })}
      </Alert>
    </Snackbar>
  ) : (
    <Snackbar
      {...materialProps}
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={6000}
    >
      <Alert {...materialProps}>{message}</Alert>
    </Snackbar>
  );
}

BabelSnackBar.propTypes = {
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: PropTypes.node,
  /**
   * The anchor of the Snackbar.
   */
  anchorOrigin: PropTypes.object,
  /**
   * The number of milliseconds to wait before automatically calling the onClose function. onClose should then set the state of the open prop to hide the Snackbar. This behavior is disabled by default with the null value.
   */
  autoHideDuration: PropTypes.number,
  /**
   * Replace the SnackbarContent component.
   */
  children: PropTypes.element,
  /**
   * Override or extend the styles applied to the component
   */
  classes: PropTypes.object,
  /**
   * Props applied to the ClickAwayListener element.
   */
  ClickAwayListenerProps: PropTypes.object,
  /**
  * Props applied to the SnackbarContent element
  */
  ContentProps: PropTypes.object,
  /**
   * If true, the autoHideDuration timer will expire even if the window is not focused.
   */
  disableWindowBlurListener: PropTypes.bool,
  /**
  * When displaying multiple consecutive Snackbars from a parent rendering a single <Snackbar/>, add the key prop to ensure independent treatment of each message. e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and features such as autoHideDuration may be canceled.
  */
  key: PropTypes.any,
  /**
    * The message to display.
  */
  message: PropTypes.node,
  /**
  * Callback fired when the component requests to be closed. Typically onClose is used to set state in the parent component, which is used to control the Snackbar open prop. The reason parameter can optionally be used to control the response to onClose, for example ignoring clickaway.
  */
  onClose: PropTypes.func,
  /**
   * If true, Snackbar is open.
   */
  open: PropTypes.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction. If autoHideDuration prop isn't specified, it does nothing. If autoHideDuration prop is specified but resumeHideDuration isn't, we default to autoHideDuration / 2 ms.
   */
  resumeHideDuration: PropTypes.number,
  /**
   * The component used for the transition.
   */
  TransitionComponent: PropTypes.elementType,
  /**
  * The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.
  */
   transitionDuration: PropTypes.number,
  /**
   * Props applied to the Transition element.
   */
  TransitionProps: PropTypes.object,
};

BabelSnackBar.defaultProps = {
  autoHideDuration: null,
  disableWindowBlurListener: false,
  //TransitionComponent: 'Grow',
};
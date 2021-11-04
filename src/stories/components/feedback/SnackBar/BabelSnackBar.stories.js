import React from "react";
import { BabelSnackBar } from "./BabelSnackBar";

export default {
    title: "Feedback/BabelSnackBar",
    component: BabelSnackBar,
};

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

const Template = (args) => <BabelSnackBar {...args} onClose={handleClose} />;

export const SnackBarError = Template.bind({});
SnackBarError.args = {
    message: "This is a SnackBar message",
    severity:"error",
    open:true
};

export const SnackBarWarning = Template.bind({});
SnackBarWarning.args = {
    message: "This is a SnackBar message",
    severity:"warning",
    open:true
};

export const SnackBarInfo = Template.bind({});
SnackBarInfo.args = {
    message: "This is a SnackBar message",
    severity:"info",
    open:true
};

export const SnackBarSuccess = Template.bind({});
SnackBarSuccess.args = {
    message: "This is a SnackBar message",
    severity:"success",
    open:true
};

export const SnackBarCustomColor = Template.bind({});
SnackBarCustomColor.args = {
    message: "This is a SnackBar message",
    style: {backgroundColor: '#888888'},
    open:true
};


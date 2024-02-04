import {
  Dialog,
  Notify,
} from 'quasar';

export const ShowSnack = (message, type) => {
  Notify.create({
    message: message,
    type: type,
  });
};

export const ShowPrompt = (message, success) => {
  Dialog.create({
    title: 'Confirm Operation',
    message: `Would you like to Confirm ${message} `,
    cancel: true,
    persistent: true,
  })
    .onOk(() => {
      success();
    })
    .onOk(() => {
      
    })
    .onCancel(() => {
      ShowSnack('Process Aborted', 'negative');
    })
    .onDismiss(() => {});
};

export const OpenPrompt = (message, type, success) => {
  Dialog.create({
    title: 'Prompt',
    message: message,
    prompt: {
      model: '',
      type: 'text', // optional
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      success(data, type);
      
    })
    .onCancel(() => {
      
      ShowSnack('Process Aborted', 'negative');
    })
    .onDismiss(() => {
     
    });
};

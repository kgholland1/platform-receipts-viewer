import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";
import type { App } from "vue";

type MessageGenerator = {
  [key: string]: string;
};

export default {
  install(app: App): void {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);

    configure({
      generateMessage: (ctx) => {
        const messages: MessageGenerator = {
          required: `The field ${ctx.name} is required.`,
          min: `The field ${ctx.name} is too short.`,
          max: `The field ${ctx.name} is too long.`,
          alpha_spaces: `The field ${ctx.name} may only contain alphabetical characters and spaces.`,
          email: `The field ${ctx.name} must be a valid email.`,
          min_value: `The field ${ctx.name} is too low.`,
          max_value: `The field ${ctx.name} is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.name}.`,
          country_excluded:
            "Due to restrictions, we do not accept users from this location.",
          passwords_mismatch: "The passwords don't match.",
          tos: "You must accept the Terms of Service.",
        };

        const message: string = messages[ctx.rule?.name ?? ""]
          ? messages[ctx.rule?.name ?? ""]
          : `The field ${ctx.name} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
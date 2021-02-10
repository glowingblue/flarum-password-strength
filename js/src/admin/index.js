import app from "flarum/app";
import PasswordStrengthSettingsModal from "./modals/PasswordStrengthSettingsModal";

// initialize settings modal
app.initializers.add("glowingblue-password-strength", (app) => {
  app.extensionSettings["glowingblue-password-strength"] = () =>
    app.modal.show(new PasswordStrengthSettingsModal());
});
